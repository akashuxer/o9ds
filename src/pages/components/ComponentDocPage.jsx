import { useParams } from 'react-router-dom'
import { DocTabRouteProvider } from '../../context/DocTabRouteContext'
import { componentDocBase } from '../../data/docPaths'
import Button from './buttons-actions/Button'
import IconButton from './buttons-actions/IconButton'
import ButtonGroup from './buttons-actions/ButtonGroup'
import FabButton from './buttons-actions/FabButton'
import DropdownButton from './buttons-actions/DropdownButton'
import DropdownIconButton from './buttons-actions/DropdownIconButton'
import SegmentedControl from './buttons-actions/SegmentedControl'
import SplitButton from './buttons-actions/SplitButton'
import SplitIconButton from './buttons-actions/SplitIconButton'
import Toolbar from './buttons-actions/Toolbar'
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
import Drawer from './overlays/Drawer'
import SidePanel from './overlays/SidePanel'
import Badge from './feedback/Badge'
import BannerAlerts from './feedback/BannerAlerts'
import InlineAlert from './feedback/InlineAlert'
import Toast from './feedback/Toast'
import Chip from './inputs/Chip'
import Label from './utilities/Label'
import Cards from './data-display/Cards'
import Accordion from './data-display/Accordion'
import EmptyState from './feedback/EmptyState'
import SkeletonLoader from './feedback/SkeletonLoader'
import Spinner from './feedback/Spinner'
import DatePicker from './inputs/DatePicker'
import DateRangePicker from './inputs/DateRangePicker'
import DateTimePicker from './inputs/DateTimePicker'
import TextEditor from './inputs/TextEditor'
import MultiSelect from './inputs/MultiSelect'
import OtpInput from './inputs/OtpInput'
import Slider from './inputs/Slider'
import TimePicker from './inputs/TimePicker'
import Tree from './navigation/Tree'
import Avatar from './utilities/Avatar'
import AvatarGroup from './utilities/AvatarGroup'
import ScrollBar from './utilities/ScrollBar'
import Splitter from './utilities/Splitter'
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
  'segmented-control': SegmentedControl,
  'split-button': SplitButton,
  'split-icon-button': SplitIconButton,
  toolbar: Toolbar,
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
  drawer: Drawer,
  'side-panel': SidePanel,
  badge: Badge,
  'banner-alerts': BannerAlerts,
  'inline-alert': InlineAlert,
  toast: Toast,
  chip: Chip,
  label: Label,
  cards: Cards,
  accordion: Accordion,
  'empty-state': EmptyState,
  'skeleton-loader': SkeletonLoader,
  spinner: Spinner,
  'date-picker': DatePicker,
  'date-range-picker': DateRangePicker,
  'date-time-picker': DateTimePicker,
  'text-editor': TextEditor,
  'multi-select': MultiSelect,
  'otp-input': OtpInput,
  slider: Slider,
  'time-picker': TimePicker,
  tree: Tree,
  avatar: Avatar,
  'avatar-group': AvatarGroup,
  'scroll-bar': ScrollBar,
  splitter: Splitter,
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
  const basePath = slug ? componentDocBase(slug) : null

  if (!basePath) {
    return Cmp ? <Cmp /> : <GenericComponentDoc slug={slug} />
  }

  return (
    <DocTabRouteProvider basePath={basePath}>
      {Cmp ? <Cmp /> : <GenericComponentDoc slug={slug} />}
    </DocTabRouteProvider>
  )
}
