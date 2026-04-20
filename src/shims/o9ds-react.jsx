/**
 * Dev/docs-site fallback when `vendor/@o9ds/react` has no built `dist/`.
 * Replace with real `pnpm vendor:o9ds` output from the o9-design-system monorepo when available.
 */
import { createContext, forwardRef, useContext } from 'react'

const noop = () => {}

const ToastContext = createContext({ show: noop, dismiss: noop })

export function OverlayProvider({ children }) {
  return children
}

export function TooltipProvider({ children }) {
  return children
}

export function O9ToastProvider({ children }) {
  const value = { show: noop, dismiss: noop }
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export function useToast() {
  return useContext(ToastContext)
}

function o9Stub(displayName) {
  const C = forwardRef((props, ref) => {
    const { children, ...rest } = props
    return (
      <div ref={ref} data-o9ds-stub={displayName} {...rest}>
        {children}
      </div>
    )
  })
  C.displayName = displayName
  return C
}

export const O9BadgeAlert = o9Stub('O9BadgeAlert')
export const O9Breadcrumb = o9Stub('O9Breadcrumb')
export const O9Button = o9Stub('O9Button')
export const O9ButtonGroup = o9Stub('O9ButtonGroup')
export const O9ButtonLink = o9Stub('O9ButtonLink')
export const O9Checkbox = o9Stub('O9Checkbox')
export const O9CheckboxGroup = o9Stub('O9CheckboxGroup')
export const O9Combobox = o9Stub('O9Combobox')
export const O9DropdownButton = o9Stub('O9DropdownButton')
export const O9DropdownIconButton = o9Stub('O9DropdownIconButton')
export const O9FabButton = o9Stub('O9FabButton')
export const O9IconButton = o9Stub('O9IconButton')
export const O9IconButtonLink = o9Stub('O9IconButtonLink')
export const O9Link = o9Stub('O9Link')
export const O9Listbox = o9Stub('O9Listbox')
export const O9NumberInput = o9Stub('O9NumberInput')
export const O9Popover = o9Stub('O9Popover')
export const O9Radio = o9Stub('O9Radio')
export const O9RadioGroup = o9Stub('O9RadioGroup')
export const O9Search = o9Stub('O9Search')
export const O9Select = o9Stub('O9Select')
export const O9Switch = o9Stub('O9Switch')
export const O9Tabstrip = o9Stub('O9Tabstrip')
export const O9Textarea = o9Stub('O9Textarea')
export const O9Textbox = o9Stub('O9Textbox')
export const O9Tooltip = o9Stub('O9Tooltip')
