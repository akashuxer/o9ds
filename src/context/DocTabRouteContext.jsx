import { createContext, useContext } from 'react'

const DocTabRouteContext = createContext(null)

export function DocTabRouteProvider({ basePath, children }) {
  return (
    <DocTabRouteContext.Provider value={basePath}>{children}</DocTabRouteContext.Provider>
  )
}

export function useDocTabBasePath() {
  return useContext(DocTabRouteContext)
}
