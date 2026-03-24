import { Fragment } from 'react'

/**
 * Lightweight syntax coloring for doc code blocks (no extra dependencies).
 */
const cls = {
  punct: 'text-neutral-500 dark:text-neutral-500',
  tag: 'text-sky-600 dark:text-sky-400',
  attr: 'text-amber-700 dark:text-amber-300',
  string: 'text-emerald-700 dark:text-emerald-400',
  text: 'text-o9ds-light-primary dark:text-neutral-200',
  keyword: 'text-violet-600 dark:text-violet-400',
  comment: 'text-neutral-500 dark:text-neutral-500 italic',
  plain: '',
}

function span(key, text, kind) {
  if (text === '' || text == null) return null
  const c = cls[kind] ?? cls.plain
  return (
    <span key={key} className={c}>
      {text}
    </span>
  )
}

/** @param {string} attrChunk */
function highlightAttributes(attrChunk, keyRef) {
  const out = []
  const re = /\s+([\w:-]+)(?:(=)(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g
  let m
  while ((m = re.exec(attrChunk)) !== null) {
    const full = m[0]
    const wsEnd = full.indexOf(m[1])
    if (wsEnd > 0) {
      out.push(span(keyRef.n++, full.slice(0, wsEnd), 'text'))
    }
    out.push(span(keyRef.n++, m[1], 'attr'))
    if (m[2]) {
      out.push(span(keyRef.n++, m[2], 'punct'))
      const val =
        m[3] != null ? `"${m[3]}"` : m[4] != null ? `'${m[4]}'` : (m[5] ?? '')
      out.push(span(keyRef.n++, val, 'string'))
    }
  }
  return out
}

/**
 * @param {string} code
 * @returns {import('react').ReactNode[]}
 */
function highlightHtmlLike(code) {
  const nodes = []
  const keyRef = { n: 0 }
  const tagRe = /<(\/?)([\w:-]+)([^>]*)>/g
  let last = 0
  let m
  while ((m = tagRe.exec(code)) !== null) {
    if (m.index > last) {
      nodes.push(span(keyRef.n++, code.slice(last, m.index), 'text'))
    }
    nodes.push(span(keyRef.n++, '<', 'punct'))
    if (m[1]) nodes.push(span(keyRef.n++, '/', 'punct'))
    nodes.push(span(keyRef.n++, m[2], 'tag'))
    nodes.push(...highlightAttributes(m[3], keyRef))
    nodes.push(span(keyRef.n++, '>', 'punct'))
    last = m.index + m[0].length
  }
  if (last < code.length) {
    nodes.push(span(keyRef.n++, code.slice(last), 'text'))
  }
  return nodes.filter(Boolean)
}

const JS_KEYWORDS =
  /\b(?:const|let|var|function|return|if|else|for|while|async|await|import|export|from|default|type|interface|extends|implements|new|this|void|null|undefined|true|false|class|enum|switch|case|break|continue|try|catch|finally|throw|typeof|instanceof|yield)\b/g

function highlightPlainCode(code) {
  const nodes = []
  const keyRef = { n: 0 }

  const pushKeywords = (chunk) => {
    if (!chunk) return
    let last = 0
    let km
    const r = new RegExp(JS_KEYWORDS.source, 'g')
    while ((km = r.exec(chunk)) !== null) {
      if (km.index > last) {
        nodes.push(span(keyRef.n++, chunk.slice(last, km.index), 'text'))
      }
      nodes.push(span(keyRef.n++, km[0], 'keyword'))
      last = km.index + km[0].length
    }
    if (last < chunk.length) {
      nodes.push(span(keyRef.n++, chunk.slice(last), 'text'))
    }
  }

  const re = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`)/g
  let last = 0
  let m
  while ((m = re.exec(code)) !== null) {
    if (m.index > last) {
      pushKeywords(code.slice(last, m.index))
    }
    const tok = m[1]
    const kind = tok.startsWith('//') || tok.startsWith('/*') ? 'comment' : 'string'
    nodes.push(span(keyRef.n++, tok, kind))
    last = m.index + tok.length
  }
  if (last < code.length) {
    pushKeywords(code.slice(last))
  }

  return nodes.length ? nodes.filter(Boolean) : [span(0, code, 'text')]
}

/**
 * @param {string} code
 * @param {'html' | 'markup' | 'ts' | 'js' | 'text' | 'auto'} language
 */
export function highlightCode(code, language = 'auto') {
  let lang = language
  if (lang === 'auto') {
    const trimmed = code.trimStart()
    if (trimmed.startsWith('<') || /<\/?[\w-][\s\S]*>/.test(code)) {
      lang = 'html'
    } else {
      lang = 'ts'
    }
  }
  if (lang === 'html' || lang === 'markup') {
    return highlightHtmlLike(code)
  }
  if (lang === 'ts' || lang === 'js') {
    return highlightPlainCode(code)
  }
  return [<Fragment key="plain">{code}</Fragment>]
}
