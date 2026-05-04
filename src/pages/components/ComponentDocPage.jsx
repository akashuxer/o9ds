import { useParams } from 'react-router-dom'
import Button from './buttons-actions/Button'
import IconButton from './buttons-actions/IconButton'
import ButtonGroup from './buttons-actions/ButtonGroup'
import FabButton from './buttons-actions/FabButton'
import DropdownButton from './buttons-actions/DropdownButton'
import DropdownIconButton from './buttons-actions/DropdownIconButton'
import Link from './navigation/Link'
import ButtonLink from './navigation/ButtonLink'
import IconButtonLink from './navigation/IconButtonLink'
import Breadcrumb from './navigation/Breadcrumb'
import Tabstrip from './navigation/Tabstrip'
import Textbox from './inputs/Textbox'
import Textarea from './inputs/Textarea'
import NumberInput from './inputs/NumberInput'
import Search from './inputs/Search'
import Checkbox from './inputs/Checkbox'
import CheckboxGroup from './inputs/CheckboxGroup'
import Radio from './inputs/Radio'
import RadioGroup from './inputs/RadioGroup'
import Switch from './inputs/Switch'
import SelectDropdown from './inputs/SelectDropdown'
import Combobox from './inputs/Combobox'
import Listbox from './inputs/Listbox'
import Popover from './overlays/Popover'
import HybridPopover from './overlays/HybridPopover'
import ActionMenu from './overlays/ActionMenu'
import Tooltip from './overlays/Tooltip'
import AlertDialog from './overlays/AlertDialog'
import Badge from './feedback/Badge'
import Toast from './feedback/Toast'
import Chip from './inputs/Chip'
import Cards from './data-display/Cards'
import * as StubPages from './allStubComponents'
import GenericComponentDoc from './GenericComponentDoc'
import { getAllComponentPageMeta, slugToComponentModuleName } from '../../data/componentPageMeta'

/**
 * Slug → page component. Real component pages are imported above; remaining catalog items
 * use generated stubs (see `allStubComponents.js` + `scripts/generate-component-stubs.mjs`).
 */
const REAL_PAGES = {
  button: Button,
  'icon-button': IconButton,
  'button-group': ButtonGroup,
  'fab-button': FabButton,
  'dropdown-button': DropdownButton,
  'dropdown-icon-button': DropdownIconButton,
  link: Link,
  'button-link': ButtonLink,
  'icon-button-link': IconButtonLink,
  breadcrumb: Breadcrumb,
  tabstrip: Tabstrip,
  textbox: Textbox,
  textarea: Textarea,
  'number-input': NumberInput,
  search: Search,
  checkbox: Checkbox,
  'checkbox-group': CheckboxGroup,
  radio: Radio,
  'radio-group': RadioGroup,
  switch: Switch,
  'select-dropdown': SelectDropdown,
  combobox: Combobox,
  listbox: Listbox,
  popover: Popover,
  'hybrid-popover': HybridPopover,
  'action-menu': ActionMenu,
  tooltip: Tooltip,
  'alert-dialog': AlertDialog,
  badge: Badge,
  toast: Toast,
  chip: Chip,
  cards: Cards,
}

const FULL_DOC_BY_SLUG = (() => {
  const map = { ...REAL_PAGES }
  for (const { slug } of getAllComponentPageMeta()) {
    if (map[slug]) continue
    const exportName = slugToComponentModuleName(slug)
    const Cmp = StubPages[exportName]
    if (Cmp) map[slug] = Cmp
  }
  return map
})()

export default function ComponentDocPage() {
  const { slug } = useParams()
  const Cmp = slug ? FULL_DOC_BY_SLUG[slug] : null
  if (Cmp) return <Cmp />
  return <GenericComponentDoc slug={slug} />
}
