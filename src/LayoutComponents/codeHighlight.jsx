import { Fragment } from 'react'

/** String literals in code blocks */
export const CODE_SYNTAX_STRING_CLASS = 'text-emerald-700 dark:text-emerald-400'

/** DocTable identifier columns — matches `keyword` / SCSS `$var` coloring (violet) */
export const TABLE_IDENTIFIER_TONE_CLASS = 'text-violet-600 dark:text-violet-400'

/**
 * Lightweight syntax coloring for doc code blocks (no extra dependencies).
 */
const cls = {
  punct: 'text-neutral-500 dark:text-neutral-500',
  tag: 'text-sky-600 dark:text-sky-400',
  attr: 'text-amber-700 dark:text-amber-300',
  string: CODE_SYNTAX_STRING_CLASS,
  text: 'text-o9ds-light-primary dark:text-neutral-200',
  keyword: 'text-violet-600 dark:text-violet-400',
  comment: 'text-neutral-500 dark:text-neutral-500 italic',
  mArrow: 'text-sky-600 dark:text-sky-300 font-semibold',
  mLabel: 'text-amber-700 dark:text-amber-300',
  mBracket: 'text-cyan-700 dark:text-cyan-400',
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

const MERMAID_KEYWORD =
  /\b(?:graph|flowchart|subgraph|end|direction|LR|TB|style|fill|stroke|classDef)\b/g

/**
 * @param {string} line
 * @param {{ n: number }} keyRef
 */
function highlightMermaidLine(line, keyRef) {
  const nodes = []
  if (/^\s*%%/.test(line)) {
    return [span(keyRef.n++, line, 'comment')]
  }

  const segments = line.split(/(\s*-->\s*)/)
  for (const seg of segments) {
    if (seg === '') continue
    if (/^\s*-->\s*$/.test(seg)) {
      nodes.push(span(keyRef.n++, seg, 'mArrow'))
      continue
    }

    const re = new RegExp(MERMAID_KEYWORD.source, 'g')
    let last = 0
    let km
    while ((km = re.exec(seg)) !== null) {
      if (km.index > last) {
        nodes.push(...highlightMermaidPlain(seg.slice(last, km.index), keyRef))
      }
      nodes.push(span(keyRef.n++, km[0], 'keyword'))
      last = km.index + km[0].length
    }
    if (last < seg.length) {
      nodes.push(...highlightMermaidPlain(seg.slice(last), keyRef))
    }
  }

  return nodes.filter(Boolean)
}

/**
 * Brackets, quoted strings, @-scoped ids in a mermaid segment.
 * @param {string} chunk
 * @param {{ n: number }} keyRef
 */
function highlightMermaidPlain(chunk, keyRef) {
  const nodes = []
  const re = /(\[[^\]]*\]|\([^)]*\)|["'][^"']*["']|@[\w/-]+)/g
  let last = 0
  let m
  while ((m = re.exec(chunk)) !== null) {
    if (m.index > last) {
      nodes.push(span(keyRef.n++, chunk.slice(last, m.index), 'text'))
    }
    const t = m[1]
    if (t.startsWith('[') || t.startsWith('(')) {
      nodes.push(span(keyRef.n++, t, 'mBracket'))
    } else if (t.startsWith('"') || t.startsWith("'")) {
      nodes.push(span(keyRef.n++, t, 'string'))
    } else if (t.startsWith('@')) {
      nodes.push(span(keyRef.n++, t, 'tag'))
    }
    last = m.index + t.length
  }
  if (last < chunk.length) {
    nodes.push(span(keyRef.n++, chunk.slice(last), 'text'))
  }
  return nodes.length ? nodes : [span(keyRef.n++, chunk, 'text')]
}

/**
 * @param {string} code
 */
function highlightMermaid(code) {
  const keyRef = { n: 0 }
  const lines = code.split('\n')
  const out = []
  for (let i = 0; i < lines.length; i++) {
    out.push(...highlightMermaidLine(lines[i], keyRef))
    if (i < lines.length - 1) {
      out.push(span(keyRef.n++, '\n', 'punct'))
    }
  }
  return out.length ? out : [<Fragment key="m0">{code}</Fragment>]
}

/**
 * @param {string} line
 * @param {{ n: number }} keyRef
 */
function highlightScssLine(line, keyRef) {
  const nodes = []
  const re = /(\$[\w-]+|var\(--[^)]+\)|\/\/[^\n]*|\.[\w-]+|#[\da-fA-F]{3,8}|::?[\w-]+)/g
  let last = 0
  let m
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) {
      nodes.push(span(keyRef.n++, line.slice(last, m.index), 'text'))
    }
    const t = m[1]
    if (t.startsWith('$')) nodes.push(span(keyRef.n++, t, 'keyword'))
    else if (t.startsWith('var(')) nodes.push(span(keyRef.n++, t, 'tag'))
    else if (t.startsWith('//')) nodes.push(span(keyRef.n++, t, 'comment'))
    else if (t.startsWith('.')) nodes.push(span(keyRef.n++, t, 'tag'))
    else if (t.startsWith('#')) nodes.push(span(keyRef.n++, t, 'string'))
    else if (t.startsWith(':')) nodes.push(span(keyRef.n++, t, 'attr'))
    last = m.index + t.length
  }
  if (last < line.length) {
    nodes.push(span(keyRef.n++, line.slice(last), 'text'))
  }
  return nodes.length ? nodes : [span(keyRef.n++, line, 'text')]
}

/**
 * @param {string} code
 */
function highlightScss(code) {
  const keyRef = { n: 0 }
  const lines = code.split('\n')
  const out = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    if (/^\s*\/\//.test(line)) {
      out.push(span(keyRef.n++, line, 'comment'))
    } else {
      out.push(...highlightScssLine(line, keyRef))
    }
    if (i < lines.length - 1) {
      out.push(span(keyRef.n++, '\n', 'punct'))
    }
  }
  return out.length ? out : [<Fragment key="s0">{code}</Fragment>]
}

/**
 * @param {string} code
 * @param {'html' | 'markup' | 'ts' | 'js' | 'text' | 'mermaid' | 'scss' | 'auto'} language
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
  if (lang === 'mermaid') {
    return highlightMermaid(code)
  }
  if (lang === 'scss') {
    return highlightScss(code)
  }
  return [<Fragment key="plain">{code}</Fragment>]
}
