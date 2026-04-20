import { ListItemBase, ListGroup } from '../../../../core/src';
import { O9PopoverActionConfig } from '../Popover/Popover';
import { MenuSearchProp } from '../../types/menu-search';
export interface MenuTrailingAction {
    id: string;
    icon: string;
    ariaLabel?: string;
    isDisabled?: boolean;
    onClick?: (item: MenuItemData, event: Event) => boolean | void;
    inlinePopover?: MenuInlinePopoverConfig;
    inlineHybridPopover?: MenuInlineHybridPopoverConfig;
}
export interface MenuInlinePopoverConfig {
    title?: string;
    content: HTMLElement | string;
    actions?: O9PopoverActionConfig[];
    isClosable?: boolean;
    hasBackButton?: boolean;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onBack?: () => void;
}
export interface MenuInlineHybridPopoverConfig {
    title?: string;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onBack?: () => void;
}
export interface MenuItemData extends ListItemBase {
    shortcut?: string;
    destructive?: boolean;
    active?: boolean;
    submenu?: MenuItemData[];
    trailingActions?: MenuTrailingAction[];
    inlinePopover?: MenuInlinePopoverConfig;
    inlineHybridPopover?: MenuInlineHybridPopoverConfig;
}
export interface O9ActionMenuOptions {
    items: MenuItemData[] | ListGroup<MenuItemData>[];
    isLoading?: boolean;
    /** Enable search with defaults (`true`) or pass a config object. */
    search?: MenuSearchProp;
    placement?: string;
    maxHeight?: string;
    size?: 'sm' | 'md';
    hasGroupDividers?: boolean;
    trailingActionsVisibility?: 'always' | 'hover';
    submenuTrigger?: 'hover' | 'click';
    closeOnSelect?: boolean;
    isDisabled?: boolean;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onSelect?: (item: MenuItemData, index: number) => boolean | void;
    onOpenChange?: (isOpen: boolean) => void;
}
type RequiredActionMenuOptions = Required<Omit<O9ActionMenuOptions, 'onOpen' | 'onClose' | 'onSelect' | 'onOpenChange' | 'maxHeight' | 'search'>> & {
    search: MenuSearchProp | undefined;
    maxHeight: string | null;
    onOpen: (() => boolean | void) | null;
    onClose: (() => boolean | void) | null;
    onSelect: ((item: MenuItemData, index: number) => boolean | void) | null;
    onOpenChange: ((isOpen: boolean) => void) | null;
};
export declare class O9ActionMenu {
    private _element;
    private _options;
    private _panelEl;
    private _scrollEl;
    private _searchEl;
    private _searchInstance;
    private _inlinePanelEl;
    private _searchCfg;
    private _isOpen;
    private _isDisabled;
    private _isLoading;
    private _activeIndex;
    private _query;
    private _inlinePanelOpen;
    private _arrowNav;
    private _focusTrap;
    private _inlineFocusTrap;
    private _positionWatcher;
    private _panelId;
    private _flatItems;
    private _itemEls;
    private _submenus;
    private _trailingActionInstances;
    private _inlinePanelBtnInstances;
    private _inlinePopoverInstance;
    private _submenuTimer;
    private _isSubmenu;
    private _parentMenu;
    private _boundHandleTriggerClick;
    private _boundHandleKeyDown;
    static readonly DEFAULTS: RequiredActionMenuOptions;
    static initialize(element: HTMLElement, options: O9ActionMenuOptions): O9ActionMenu;
    constructor(element: HTMLElement, options: O9ActionMenuOptions);
    private _buildPanel;
    private _buildPanelClasses;
    private _buildSearch;
    private _renderItems;
    private _renderItem;
    private _buildItemClasses;
    private _getFilteredItems;
    private _handleFilterSearch;
    private _handleFilterClear;
    private _updateSearchCounter;
    private _bindTriggerEvents;
    private _handleTriggerClick;
    private _handleKeyDown;
    private _handleHorizontalNav;
    private _focusTrailingAction;
    private _setActiveIndex;
    private _scrollIntoView;
    private _handleItemActivation;
    private _openSubmenu;
    private _closeSubmenus;
    private _closeAll;
    private _openInlinePanel;
    private _closeInlinePanel;
    private _setupArrowNav;
    private _applyPosition;
    private _focusInitial;
    open(): void;
    close(): void;
    isOpen(): boolean;
    toggle(force?: boolean): void;
    updateItems(items: MenuItemData[] | ListGroup<MenuItemData>[]): void;
    setLoading(isLoading: boolean): void;
    disabled(state?: boolean): boolean | void;
    destroy(): void;
    private _destroyTrailingActions;
    private _dispatchEvent;
}
export {};
//# sourceMappingURL=ActionMenu.d.ts.map