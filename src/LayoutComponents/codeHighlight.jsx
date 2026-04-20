import { Fragment } from 'react'

/** String literals in code blocks */
export const CODE_SYNTAX_STRING_CLASS = 'text-emerald-700 dark:text-emerald-400'

/** DocTable identifier columns — matches `keyword` / SCSS `$var` coloring (violet) */
export const TABLE_IDENTIFIER_TONE_CLASS = 'text-violet-600 dark:text-violet-400'

/**
 * First table body column (identifier tone). Pair with `font-mono text-sm` when the cell is code-like.
 * Requires `o9ds-doc-table-cell--tone` so `main td` global color does not override (see index.css).
 */
export const DOC_TABLE_FIRST_COLUMN_CLASS = `font-medium o9ds-doc-table-cell--tone ${TABLE_IDENTIFIER_TONE_CLASS}`

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
  /\b(?:const|let|var|function|return|if|else|for|while|async|await|import|export|from|default|type|interface|extends|implements|new|this|void|null|undefined|true|false|class|enum|switch|case|break|continue|try|catch|finally|throw|typeof|instanceof|yield|as|satisfies|readonly|keyof|namespace|declare|module)\b/g

/**
 * PascalCase identifiers treated as plain text (globals / TS utility types), not React components — same blue as `<Tag>` would be wrong.
 */
const NOT_COMPONENT_IDENTIFIER = new Set([
  'Array',
  'ArrayBuffer',
  'Atomics',
  'BigInt',
  'BigInt64Array',
  'BigUint64Array',
  'Boolean',
  'Capitalize',
  'ConstructorParameters',
  'DataView',
  'Date',
  'Error',
  'Exclude',
  'Extract',
  'Float32Array',
  'Float64Array',
  'Function',
  'Infinity',
  'Int16Array',
  'Int32Array',
  'Int8Array',
  'Intl',
  'InstanceType',
  'JSON',
  'Lowercase',
  'Map',
  'Math',
  'NaN',
  'NonNullable',
  'Number',
  'Object',
  'Omit',
  'Parameters',
  'Partial',
  'Pick',
  'Promise',
  'Proxy',
  'Readonly',
  'Record',
  'Reflect',
  'RegExp',
  'Required',
  'ReturnType',
  'Set',
  'SharedArrayBuffer',
  'String',
  'Symbol',
  'ThisType',
  'Uint16Array',
  'Uint32Array',
  'Uint8Array',
  'Uint8ClampedArray',
  'Uncapitalize',
  'Uppercase',
  'WeakMap',
  'WeakSet',
  'WebAssembly',
])

const COMPONENT_IDENTIFIER_RE = /\b([A-Z][\w$]*)\b/g

/**
 * After keywords: color PascalCase identifiers as `tag` (sky), matching `<Component>` in TSX.
 * @param {string} chunk
 * @param {{ n: number }} kr
 */
function splitTextWithComponentNames(chunk, kr) {
  if (!chunk) return []
  const nodes = []
  let last = 0
  let m
  const re = new RegExp(COMPONENT_IDENTIFIER_RE.source, 'g')
  while ((m = re.exec(chunk)) !== null) {
    if (m.index > last) {
      nodes.push(span(kr.n++, chunk.slice(last, m.index), 'text'))
    }
    const name = m[1]
    const kind = NOT_COMPONENT_IDENTIFIER.has(name) ? 'text' : 'tag'
    nodes.push(span(kr.n++, name, kind))
    last = m.index + m[0].length
  }
  if (last < chunk.length) {
    nodes.push(span(kr.n++, chunk.slice(last), 'text'))
  }
  return nodes.length ? nodes.filter(Boolean) : []
}

/** Shell / npm / git — used for bash, sh, zsh */
const SHELL_KEYWORDS =
  /\b(?:cd|echo|export|grep|npm|pnpm|yarn|git|node|npx|sudo|curl|mkdir|rm|cp|mv|cat|ls|if|fi|then|else|elif|for|do|done|while|in|esac|case|apt|brew|docker|kubectl|chmod|env|source|exec|bash|sh|zsh|printf|wc|head|tail|sed|awk|find|xargs)\b/g

/**
 * JavaScript/TypeScript/TSX-style snippets: keywords, strings, comments.
 * @param {string} code
 * @param {RegExp} [keywordRe]
 */
/**
 * @param {string} code
 * @param {RegExp} [keywordRe]
 * @param {{ n: number }} [keyRef] shared counter when composing with TSX highlighter
 */
function highlightJavaScriptLike(code, keywordRe = JS_KEYWORDS, keyRef) {
  const nodes = []
  const kr = keyRef ?? { n: 0 }

  const pushKeywords = (chunk) => {
    if (!chunk) return
    let last = 0
    let km
    const r = new RegExp(keywordRe.source, 'g')
    while ((km = r.exec(chunk)) !== null) {
      if (km.index > last) {
        nodes.push(...splitTextWithComponentNames(chunk.slice(last, km.index), kr))
      }
      nodes.push(span(kr.n++, km[0], 'keyword'))
      last = km.index + km[0].length
    }
    if (last < chunk.length) {
      nodes.push(...splitTextWithComponentNames(chunk.slice(last), kr))
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
    nodes.push(span(kr.n++, tok, kind))
    last = m.index + tok.length
  }
  if (last < code.length) {
    pushKeywords(code.slice(last))
  }

  return nodes.length ? nodes.filter(Boolean) : [span(kr.n++, code, 'text')]
}

/** End index (exclusive) of `}` closing `{` at start */
function endOfBalancedBraces(s, openIndex) {
  if (s[openIndex] !== '{') return openIndex
  let depth = 0
  for (let i = openIndex; i < s.length; i++) {
    const ch = s[i]
    if (ch === '{') depth++
    else if (ch === '}') {
      depth--
      if (depth === 0) return i + 1
    }
  }
  return s.length
}

/**
 * JSX opening tag attribute string: prop names (amber), punct, strings, `{…}` values (balanced braces).
 * @param {string} attrChunk text between component name and `>` or `/>`
 */
function highlightJsxAttributes(attrChunk, keyRef) {
  const out = []
  if (!attrChunk) return out
  const s = attrChunk
  let i = 0

  while (i < s.length) {
    while (i < s.length && /\s/.test(s[i])) {
      let ws = ''
      while (i < s.length && /\s/.test(s[i])) ws += s[i++]
      if (ws) out.push(span(keyRef.n++, ws, 'text'))
    }
    if (i >= s.length) break

    const nameMatch = s.slice(i).match(/^([\w$][\w$.:-]*)/)
    if (!nameMatch) {
      out.push(span(keyRef.n++, s.slice(i), 'text'))
      break
    }
    const name = nameMatch[1]
    let k = i + name.length
    while (k < s.length && /\s/.test(s[k])) k++

    if (k >= s.length || s[k] !== '=') {
      out.push(span(keyRef.n++, name, 'attr'))
      i += name.length
      continue
    }

    out.push(span(keyRef.n++, name, 'attr'))
    i = k
    out.push(span(keyRef.n++, '=', 'punct'))
    i++
    while (i < s.length && /\s/.test(s[i])) i++
    if (i >= s.length) break

    if (s[i] === '"' || s[i] === "'") {
      const q = s[i]
      let end = i + 1
      while (end < s.length) {
        if (s[end] === '\\') {
          end += 2
          continue
        }
        if (s[end] === q) {
          end++
          break
        }
        end++
      }
      out.push(span(keyRef.n++, s.slice(i, end), 'string'))
      i = end
      continue
    }
    if (s[i] === '{') {
      const end = endOfBalancedBraces(s, i)
      out.push(span(keyRef.n++, s.slice(i, end), 'string'))
      i = end
      continue
    }
    const uq = s.slice(i).match(/^[^\s/>]+/)
    if (uq) {
      out.push(span(keyRef.n++, uq[0], 'string'))
      i += uq[0].length
    } else {
      i++
    }
  }
  return out.filter(Boolean)
}

/**
 * React/TSX: `<Component prop={…} />` gets sky tags, amber props; other code uses JS tokenizer.
 * @param {{ n: number }} [keyRef] shared key counter for nested chunks
 */
function highlightTsxLike(code, keywordRe = JS_KEYWORDS, keyRef) {
  const kr = keyRef ?? { n: 0 }
  const tagRe = /<(\/?)([A-Za-z_][\w.:-]*)([^>]*)>/g
  const nodes = []
  let last = 0
  let m
  while ((m = tagRe.exec(code)) !== null) {
    if (m.index > last) {
      const gap = code.slice(last, m.index)
      nodes.push(
        ...(gap.includes('<') ? highlightTsxLike(gap, keywordRe, kr) : highlightJavaScriptLike(gap, keywordRe, kr)),
      )
    }
    nodes.push(span(kr.n++, '<', 'punct'))
    if (m[1]) nodes.push(span(kr.n++, '/', 'punct'))
    nodes.push(span(kr.n++, m[2], 'tag'))
    nodes.push(...highlightJsxAttributes(m[3], kr))
    nodes.push(span(kr.n++, '>', 'punct'))
    last = m.index + m[0].length
  }
  if (last < code.length) {
    const tail = code.slice(last)
    nodes.push(
      ...(tail.includes('<') ? highlightTsxLike(tail, keywordRe, kr) : highlightJavaScriptLike(tail, keywordRe, kr)),
    )
  }
  return nodes.length ? nodes.filter(Boolean) : highlightJavaScriptLike(code, keywordRe, kr)
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
 * CSS/SCSS line: strings, vars, block comments, keywords, punctuation (richer coloring for doc snippets).
 * @param {string} line
 * @param {{ n: number }} keyRef
 */
function highlightScssLine(line, keyRef) {
  const nodes = []
  const re =
    /(\$[\w-]+|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\/\*[\s\S]*?\*\/|\/\/[^\n]*|var\(--[^)]+\)|\b(?:font-family|font-size|font-weight|html|sans-serif|Arial|serif|monospace|inherit|initial|unset)\b|\.[\w-]+|#[\da-fA-F]{3,8}|::?[\w-]+|[{};,]|:)/g
  let last = 0
  let m
  while ((m = re.exec(line)) !== null) {
    if (m.index > last) {
      const gap = line.slice(last, m.index)
      nodes.push(...highlightScssGapNumbers(gap, keyRef))
    }
    const t = m[1]
    if (t.startsWith('$')) nodes.push(span(keyRef.n++, t, 'keyword'))
    else if (t.startsWith('"') || t.startsWith("'")) nodes.push(span(keyRef.n++, t, 'string'))
    else if (t.startsWith('/*')) nodes.push(span(keyRef.n++, t, 'comment'))
    else if (t.startsWith('//')) nodes.push(span(keyRef.n++, t, 'comment'))
    else if (t.startsWith('var(')) nodes.push(span(keyRef.n++, t, 'tag'))
    else if (/^(?:font-family|font-size|font-weight|html|sans-serif|Arial|serif|monospace|inherit|initial|unset)$/.test(t)) {
      nodes.push(span(keyRef.n++, t, 'keyword'))
    } else if (t.startsWith('.')) nodes.push(span(keyRef.n++, t, 'tag'))
    else if (t.startsWith('#')) nodes.push(span(keyRef.n++, t, 'string'))
    else if (/^[{};,]$/.test(t) || t === ':') nodes.push(span(keyRef.n++, t, 'punct'))
    else nodes.push(span(keyRef.n++, t, 'text'))
    last = m.index + t.length
  }
  if (last < line.length) {
    nodes.push(...highlightScssGapNumbers(line.slice(last), keyRef))
  }
  return nodes.length ? nodes : [span(keyRef.n++, line, 'text')]
}

/** rem, px, bare numbers in gaps between regex matches */
function highlightScssGapNumbers(gap, keyRef) {
  const nodes = []
  const re = /(\d+(?:\.\d+)?(?:px|rem|em|%)?)/g
  let last = 0
  let m
  while ((m = re.exec(gap)) !== null) {
    if (m.index > last) {
      nodes.push(span(keyRef.n++, gap.slice(last, m.index), 'text'))
    }
    nodes.push(span(keyRef.n++, m[1], 'string'))
    last = m.index + m[1].length
  }
  if (last < gap.length) {
    nodes.push(span(keyRef.n++, gap.slice(last), 'text'))
  }
  return nodes.length ? nodes : gap ? [span(keyRef.n++, gap, 'text')] : []
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

/** Map CodeBlock / IDE language labels to internal highlighter ids */
function normalizeLanguage(language) {
  const map = {
    jsx: 'tsx',
    typescript: 'ts',
    javascript: 'js',
    mjs: 'js',
    cjs: 'js',
    bash: 'bash',
    sh: 'bash',
    shell: 'bash',
    zsh: 'bash',
    json: 'json',
    jsonc: 'json',
    css: 'scss',
    sass: 'scss',
    yaml: 'text',
    yml: 'text',
    markdown: 'text',
    md: 'text',
  }
  return map[language] ?? language
}

/**
 * @param {string} code
 * @param {'html' | 'markup' | 'ts' | 'js' | 'tsx' | 'jsx' | 'text' | 'mermaid' | 'scss' | 'bash' | 'json' | 'auto'} language
 */
export function highlightCode(code, language = 'auto') {
  let lang = language
  if (lang !== 'auto') {
    lang = normalizeLanguage(lang)
  }
  if (lang === 'auto') {
    const trimmed = code.trimStart()
    if (trimmed.startsWith('<') || /<\/?[\w-][\s\S]*>/.test(code)) {
      lang = 'html'
    } else if (/<[A-Z][\w.]*(?:\s|\/>|>)/.test(code) || /<\/[A-Z]/.test(code)) {
      /* PascalCase JSX — avoids TS generics like `Array<string>` (lowercase type name) */
      lang = 'tsx'
    } else {
      lang = 'ts'
    }
  }
  if (lang === 'html' || lang === 'markup') {
    return highlightHtmlLike(code)
  }
  if (lang === 'tsx') {
    return highlightTsxLike(code)
  }
  if (lang === 'ts' || lang === 'js') {
    return highlightJavaScriptLike(code)
  }
  if (lang === 'bash') {
    return highlightJavaScriptLike(code, SHELL_KEYWORDS)
  }
  if (lang === 'json') {
    return highlightJavaScriptLike(code)
  }
  if (lang === 'mermaid') {
    return highlightMermaid(code)
  }
  if (lang === 'scss') {
    return highlightScss(code)
  }
  if (lang === 'text') {
    return [<Fragment key="plain">{code}</Fragment>]
  }
  return [<Fragment key="plain">{code}</Fragment>]
}
