import { O9PopoverActionConfig, O9PopoverHeaderActionConfig } from '../Popover/Popover';
export declare const HPOP_MIN_WIDTH = 280;
export declare const HPOP_DEFAULT_WIDTH = 320;
export declare const HPOP_MAX_WIDTH = 500;
export declare const HPOP_MIN_HEIGHT = 272;
export interface HybridPopoverItem {
    id: string;
    label: string;
    secondaryLabel?: string;
    icon?: string;
    value?: unknown;
    isDisabled?: boolean;
    isExcluded?: boolean;
    isDraggable?: boolean;
    hasInline?: boolean | HybridPopoverItem[] | HybridPopoverInlineConfig;
    isIndeterminate?: boolean;
}
export interface HybridPopoverGroup {
    id: string;
    label?: string;
    isDraggable?: boolean;
    hasSelectAll?: boolean;
    items: HybridPopoverItem[];
}
export interface HybridPopoverSearchConfig {
    variant?: 'default' | 'filter-search';
    placeholder?: string;
    shortcut?: string;
    counter?: boolean;
}
export interface HybridPopoverConditionalConfig {
    value: 'and' | 'or';
    onChange: (value: 'and' | 'or') => void;
}
export interface HybridPopoverEmptyConfig {
    noDataTitle?: string;
    noDataMessage?: string;
    noResultsTitle?: string;
    noResultsMessage?: string;
    noResultsClearLabel?: string;
}
export interface HybridPopoverInlineConfig {
    title?: string;
    items?: HybridPopoverItem[] | HybridPopoverGroup[];
    variant?: 'multi' | 'single';
    hasBackButton?: boolean;
}
export interface HybridPopoverReorderDetail {
    fromIndex: number;
    toIndex: number;
    fromGroup: string | null;
    toGroup: string | null;
    items: HybridPopoverItem[] | HybridPopoverGroup[];
}
export interface HybridPopoverChangeMeta {
    item: HybridPopoverItem | null;
    action: 'toggle' | 'select-all' | 'group-select-all' | 'apply' | 'reset' | 'clear';
}
export type HybridPopoverVariant = 'multi' | 'single' | 'boolean' | 'conditional' | 'custom';
export type HybridPopoverSelectionMode = 'multi' | 'single' | 'none';
export interface O9HybridPopoverOptions {
    variant?: HybridPopoverVariant;
    selectionMode?: HybridPopoverSelectionMode;
    items?: HybridPopoverItem[] | HybridPopoverGroup[];
    value?: string[] | string | null;
    defaultValue?: string[] | string | null;
    onChange?: (value: string[] | string | null, meta: HybridPopoverChangeMeta) => void;
    commitOn?: 'apply' | 'change';
    search?: false | HybridPopoverSearchConfig;
    conditional?: false | HybridPopoverConditionalConfig;
    hasGlobalSelectAll?: boolean;
    enableReorder?: boolean;
    crossGroupDrag?: boolean;
    onReorder?: (detail: HybridPopoverReorderDetail) => void;
    emptyConfig?: HybridPopoverEmptyConfig;
    actions?: O9PopoverActionConfig[] | false;
    isResizable?: boolean;
    width?: number;
    height?: number | null;
    onResize?: (detail: {
        width: number;
        height: number;
    }) => void;
    onResizeCommit?: (detail: {
        width: number;
        height: number;
    }) => void;
    title?: string | null;
    hasHeader?: boolean;
    isClosable?: boolean;
    hasBackButton?: boolean;
    onBack?: () => void;
    headerActions?: O9PopoverHeaderActionConfig[];
    placement?: O9PopoverOptionsPlacement;
    offset?: number;
    closeOnOutside?: boolean;
    isLoading?: boolean;
    defaultOpen?: boolean;
    isInline?: boolean;
    parent?: string | null;
    onApply?: (value: string[] | string | null) => boolean | void;
    onCancel?: () => void;
    onReset?: () => void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
}
type O9PopoverOptionsPlacement = 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'auto';
export declare class O9HybridPopover {
    private _trigger;
    private _options;
    private _id;
    private _selection;
    private _items;
    private _committed;
    private _draft;
    private _query;
    private _isLoading;
    private _popover;
    private _panelEl;
    private _stickyEl;
    private _bodyEl;
    private _searchInstance;
    private _conditionalInstance;
    private _globalSAInstance;
    private _groupSAInstances;
    private _itemInstances;
    private _chevInstances;
    private _clearSearchInstance;
    private _sortable;
    private _resize;
    private _boundOnPopoverOpen;
    private _boundOnPopoverClose;
    static initialize(element: HTMLElement, options?: O9HybridPopoverOptions): O9HybridPopover;
    constructor(element: HTMLElement, options?: O9HybridPopoverOptions);
    open(): void;
    close(): void;
    isOpen(): boolean;
    toggle(): void;
    value(): string[] | string | null;
    value(newValue: string[] | string | null): void;
    setLoading(loading: boolean): void;
    updateItems(items: HybridPopoverItem[] | HybridPopoverGroup[]): void;
    reposition(): void;
    destroy(): void;
    private _handlePopoverOpen;
    private _handlePopoverClose;
    private _applyPanelClasses;
    private _applyDimensions;
    private _getFilteredItems;
    private _renderSticky;
    private _renderBody;
    private _buildEmptyState;
    private _buildFilterList;
    private _buildSelectAllRow;
    private _buildOptionRow;
    private _isItemChecked;
    private _handleToggleItem;
    private _handleToggleGlobalSelectAll;
    private _handleToggleGroupSelectAll;
    private _updateDraft;
    private _renderBodyAndRewireDnD;
    private _buildPopoverActions;
    private _handleApply;
    private _handleCancel;
    private _handleReset;
    private _handleSearchInput;
    private _handleSearchClear;
    private _updateSearchCounter;
    private _mountSortable;
    private _teardownSortable;
    private _mountResize;
    private _teardownResize;
    private _destroyBodyInstances;
    private _destroyInnerInstances;
    private _fireChange;
    private _dispatchEvent;
}
export default O9HybridPopover;
//# sourceMappingURL=HybridPopover.d.ts.map