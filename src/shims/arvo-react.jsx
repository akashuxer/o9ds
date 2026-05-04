/**
 * Dev/docs-site fallback when `vendor/@arvo/react` has no built `dist/`.
 * Replace with real `npm run vendor:arvo` output from the o9-design-system monorepo when available.
 */
import { createContext, forwardRef, useContext } from 'react'

const noop = () => {}

const ToastContext = createContext({ show: noop, close: noop, closeAll: noop })

export function OverlayProvider({ children }) {
  return children
}

export function TooltipProvider({ children }) {
  return children
}

export function ArvoToastProvider({ children }) {
  const value = { show: noop, close: noop, closeAll: noop }
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToast() {
  return useContext(ToastContext)
}

const HTML_SAFE = new Set([
  'className', 'id', 'style', 'role', 'tabIndex', 'title', 'hidden', 'lang', 'dir',
])

function arvoStub(displayName) {
  const C = forwardRef((props, ref) => {
    const { children, ...rest } = props
    const safeProps = {}
    for (const key of Object.keys(rest)) {
      if (HTML_SAFE.has(key) || key.startsWith('data-') || key.startsWith('aria-')) {
        safeProps[key] = rest[key]
      }
    }
    return (
      <div ref={ref} data-arvo-stub={displayName} {...safeProps}>
        {children}
      </div>
    )
  })
  C.displayName = displayName
  return C
}

export const ArvoActionMenu = arvoStub('ArvoActionMenu')
export const ArvoAlertDialog = arvoStub('ArvoAlertDialog')
export const ArvoBadgeAlert = arvoStub('ArvoBadgeAlert')
export const ArvoBreadcrumb = arvoStub('ArvoBreadcrumb')
export const ArvoButton = arvoStub('ArvoButton')
export const ArvoButtonGroup = arvoStub('ArvoButtonGroup')
export const ArvoButtonLink = arvoStub('ArvoButtonLink')
export const ArvoCheckbox = arvoStub('ArvoCheckbox')
export const ArvoCheckboxGroup = arvoStub('ArvoCheckboxGroup')
export const ArvoCombobox = arvoStub('ArvoCombobox')
export const ArvoDropdownButton = arvoStub('ArvoDropdownButton')
export const ArvoDropdownIconButton = arvoStub('ArvoDropdownIconButton')
export const ArvoFabButton = arvoStub('ArvoFabButton')
export const ArvoHybridPopover = arvoStub('ArvoHybridPopover')
export const ArvoIconButton = arvoStub('ArvoIconButton')
export const ArvoIconButtonLink = arvoStub('ArvoIconButtonLink')
export const ArvoLink = arvoStub('ArvoLink')
export const ArvoListbox = arvoStub('ArvoListbox')
export const ArvoNumberInput = arvoStub('ArvoNumberInput')
export const ArvoPopover = arvoStub('ArvoPopover')
export const ArvoRadio = arvoStub('ArvoRadio')
export const ArvoRadioGroup = arvoStub('ArvoRadioGroup')
export const ArvoSearch = arvoStub('ArvoSearch')
export const ArvoSelect = arvoStub('ArvoSelect')
export const ArvoSwitch = arvoStub('ArvoSwitch')
export const ArvoTabstrip = arvoStub('ArvoTabstrip')
export const ArvoTextarea = arvoStub('ArvoTextarea')
export const ArvoTextbox = arvoStub('ArvoTextbox')
export const ArvoTooltip = arvoStub('ArvoTooltip')
