import { ListItemBase } from '../../core/src';
type PanelInfoAlertType = 'error' | 'success' | 'warning' | 'info' | 'neutral' | 'block';
/** Closed whitelist of header-action component types. */
export type ArvoPanelHeaderActionType = 'btn' | 'dropdown' | 'split' | 'switch' | 'checkbox';
/**
 * Compact menu-item shape used by `dropdown` and `split` header actions. This
 * mirrors the underlying primitives' menu-item structure but stays
 * framework-agnostic so the type can live in `@arvo/utils`. Consumers cast to
 * the underlying primitive's stricter type at the boundary.
 */
export interface ArvoPanelMenuItem {
    id: string;
    label: string;
    icon?: string;
    isDisabled?: boolean;
    destructive?: boolean;
    shortcut?: string;
}
interface ArvoPanelHeaderActionBase {
    id: string;
    /** Visible label (switches/checkboxes) or aria-label (icon variants). */
    label?: string;
}
export interface ArvoPanelHeaderActionBtn extends ArvoPanelHeaderActionBase {
    type: 'btn';
    /** o9con icon name (without the `o9con-` prefix). Required. */
    icon: string;
    tooltip?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    isSelected?: boolean;
    onClick?: (event?: Event) => void;
}
export interface ArvoPanelHeaderActionDropdown extends ArvoPanelHeaderActionBase {
    type: 'dropdown';
    icon: string;
    tooltip?: string;
    items: ArvoPanelMenuItem[];
    isDisabled?: boolean;
    isLoading?: boolean;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    onSelect?: (id: string) => void;
}
export interface ArvoPanelHeaderActionSplit extends ArvoPanelHeaderActionBase {
    type: 'split';
    icon: string;
    tooltip?: string;
    triggerLabel?: string;
    items: ArvoPanelMenuItem[];
    isDisabled?: boolean;
    isActionDisabled?: boolean;
    isTriggerDisabled?: boolean;
    isLoading?: boolean;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    onClick?: (event?: Event) => void;
    onSelect?: (id: string) => void;
}
export interface ArvoPanelHeaderActionSwitch extends ArvoPanelHeaderActionBase {
    type: 'switch';
    isChecked?: boolean;
    defaultChecked?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isLoading?: boolean;
    onChange?: (isChecked: boolean) => void;
}
export interface ArvoPanelHeaderActionCheckbox extends ArvoPanelHeaderActionBase {
    type: 'checkbox';
    isChecked?: boolean;
    defaultChecked?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isLoading?: boolean;
    onChange?: (isChecked: boolean) => void;
}
export type ArvoPanelHeaderAction = ArvoPanelHeaderActionBtn | ArvoPanelHeaderActionDropdown | ArvoPanelHeaderActionSplit | ArvoPanelHeaderActionSwitch | ArvoPanelHeaderActionCheckbox;
/**
 * Banner config -- the panel-shell `__banner` slot renders an
 * `ArvoBannerAlert` instance under the hood. The fields below are passed
 * through to the underlying component (with `type` mapping identity to
 * `ArvoBannerAlertType`). The framework-agnostic shape uses `HTMLElement`
 * for `link`, mirroring the JS factory; the React shell currently omits
 * `link` from its render path -- a React-shaped banner config covering
 * `link?: ReactNode` is a follow-up.
 */
export interface ArvoPanelBannerConfig {
    /** Semantic banner type. Identity maps to `ArvoBannerAlertType`. */
    type: 'info' | 'warning' | 'positive' | 'negative' | 'neutral';
    message: string;
    /** Optional title rendered above the message (ignored in compact mode). */
    title?: string | null;
    /** Optional link element rendered below the message in default mode. */
    link?: HTMLElement | null;
    /** Layout mode. Defaults to `false` (BannerAlert default). */
    isCompact?: boolean;
    isDismissible?: boolean;
    onDismiss?: () => void;
}
export interface ArvoPanelInfoConfig {
    type?: PanelInfoAlertType;
    message?: string;
    showMatchCount?: boolean;
    matchCountTemplate?: string;
}
/**
 * Optional fields the default `__item` template understands when no
 * `renderItem` callback is supplied. Extends `ListItemBase` (`id` + `label`)
 * with leading slot, sub-label, and selection/disabled state.
 *
 * Consumers DO NOT need to widen `PanelShellProps<T>` to use these -- the
 * default render branch reads each field if it happens to be present on the
 * item. Provide this interface as the item type when you want to opt in
 * with stricter typing.
 */
export interface ArvoPanelDefaultItem extends ListItemBase {
    /** Sub-label rendered as `{block}__item__secondary`. */
    secondaryLabel?: string;
    /** Alias for `secondaryLabel`. Back-compat with existing `description`. */
    description?: string;
    /** o9con icon name (no `o9con-` prefix). Renders `{block}__item__ico`. */
    icon?: string;
    /** Image URL. Renders `{block}__item__avatar`; wins over `icon`. */
    avatarUrl?: string;
    /** Adds `.active` (selected). */
    isActive?: boolean;
    /** Adds `.is-disabled` + `aria-disabled="true"`. */
    isDisabled?: boolean;
}
export interface ArvoPanelTabConfig {
    id: string;
    label: string;
    icon?: string;
    isDisabled?: boolean;
}
export interface ArvoPanelSearchConfig {
    placeholder?: string;
    shortcut?: string;
    showCounter?: boolean;
}
export interface ArvoPanelStickyHeaderConfig {
    banner?: ArvoPanelBannerConfig | false;
    tabs?: ArvoPanelTabConfig[];
    /** Imperative slot (JS only) -- React consumers pass `children` instead. */
    slot?: HTMLElement | null;
    search?: boolean | ArvoPanelSearchConfig;
    info?: ArvoPanelInfoConfig | false;
}
export interface ArvoPanelAction {
    id: string;
    label: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    isLoading?: boolean;
    isIconOnly?: boolean;
    tooltip?: string;
    onClick?: (event?: Event) => void;
}
export interface PanelShellOptions<T extends ListItemBase = ListItemBase> {
    title?: string | null;
    hasHeader?: boolean;
    hasBackButton?: boolean;
    onBack?: () => void;
    headerActions?: ArvoPanelHeaderAction[];
    stickyHeader?: ArvoPanelStickyHeaderConfig | false;
    items?: T[];
    getItemId?: (item: T) => string;
    filterKeys?: Array<keyof T & string>;
    getItemSearchText?: (item: T) => string;
    renderItem?: (item: T, el: HTMLElement) => void;
    itemsRole?: 'listbox' | 'list' | 'menu';
    actions?: ArvoPanelAction[] | false;
    hasFooter?: boolean;
    isClosable?: boolean;
    onClose?: () => void;
    pinSlot?: HTMLElement | null;
    isPinnableCount?: number;
    isClosableCount?: number;
    selectedTabId?: string | null;
    onTabSelect?: (id: string) => void;
    onItemActivate?: (id: string, item: T) => void;
    onSearchChange?: (query: string, matchedCount: number | null) => void;
}
export interface PanelShellInstance<T extends ListItemBase = ListItemBase> {
    setItems(items: T[]): void;
    setStickyHeader(config: ArvoPanelStickyHeaderConfig | false): void;
    setHeaderActions(actions: ArvoPanelHeaderAction[]): void;
    setActions(actions: ArvoPanelAction[] | false): void;
    updateAction(id: string, patch: Partial<ArvoPanelHeaderAction | ArvoPanelAction>): void;
    search(query?: string): string | void;
    selectedTab(id?: string): string | null | void;
    setTitle(title: string | null): void;
    loading(state?: boolean): boolean | void;
    disabled(state?: boolean): boolean | void;
    focus(target?: 'first' | 'title' | 'search' | 'list'): void;
    setPinSlot(el: HTMLElement | null): void;
    getElement(): HTMLElement;
    destroy(): void;
    hdrEl: HTMLElement | null;
    bodyEl: HTMLElement | null;
    listEl: HTMLElement | null;
    searchEl: HTMLElement | null;
    stickyEl: HTMLElement | null;
    footerEl: HTMLElement | null;
}
export declare function validateHeaderAction(action: {
    type: string;
    id?: string;
}): boolean;
export declare function runItemFilter<T extends ListItemBase>(items: T[], query: string, opts?: {
    keys?: Array<keyof T & string>;
    getItemSearchText?: (item: T) => string;
}): T[];
export declare function formatMatchCountMessage(count: number, template?: string): string;
export {};
//# sourceMappingURL=panel-shell.d.ts.map