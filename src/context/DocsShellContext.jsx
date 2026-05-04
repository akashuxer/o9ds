import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const STORAGE_KEY = 'arvo-entered-docs'

const DocsShellContext = createContext(null)

export function DocsShellProvider({ children }) {
  const [entered, setEntered] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false
    }
  })

  const enterDocs = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* ignore */
    }
    setEntered(true)
  }, [])

  const value = useMemo(() => ({ entered, enterDocs }), [entered, enterDocs])

  return <DocsShellContext.Provider value={value}>{children}</DocsShellContext.Provider>
}

export function useDocsShell() {
  const ctx = useContext(DocsShellContext)
  if (!ctx) {
    throw new Error('useDocsShell must be used within DocsShellProvider')
  }
  return ctx
}
