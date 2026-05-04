import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('arvo-theme') || 'dark'
    }
    return 'dark'
  })

  // Sync DOM and React state on every theme change
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('dark', theme === 'dark')
    root.setAttribute('data-theme', theme)
    if (document.body) document.body.setAttribute('data-theme', theme)
    localStorage.setItem('arvo-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      const root = document.documentElement
      root.classList.toggle('dark', next === 'dark')
      root.setAttribute('data-theme', next)
      if (document.body) document.body.setAttribute('data-theme', next)
      localStorage.setItem('arvo-theme', next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div style={{ minHeight: '100vh' }}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
