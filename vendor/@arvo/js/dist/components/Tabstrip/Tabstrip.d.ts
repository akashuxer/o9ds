export interface TabItem {
    id: string;
    label: string;
    icon?: string;
    isDisabled?: boolean;
    pinned?: boolean;
    isClosable?: boolean;
    panelId?: string;
    order?: number;
}
export interface ArvoTabstripOptions {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'lg';
    tabs?: TabItem[];
    selectedId?: string | null;
    isClosable?: boolean;
    isPinnable?: boolean;
    actionsVisibility?: 'hover' | 'always';
    isDisabled?: boolean;
    isLoading?: boolean;
    onSelect?: (detail: {
        id: string;
        index: number;
    }) => void;
    onClose?: (detail: {
        id: string;
        index: number;
    }) => void;
    onPin?: (detail: {
        id: string;
        pinned: boolean;
        tabOrder: string[];
    }) => void;
}
type RequiredOptions = Required<Omit<ArvoTabstripOptions, 'onSelect' | 'onClose' | 'onPin' | 'selectedId'>> & {
    selectedId: string | null;
    onSelect: ((detail: {
        id: string;
        index: number;
    }) => void) | null;
    onClose: ((detail: {
        id: string;
        index: number;
    }) => void) | null;
    onPin: ((detail: {
        id: string;
        pinned: boolean;
        tabOrder: string[];
    }) => void) | null;
};
export declare class ArvoTabstrip {
    private _element;
    private _options;
    private _listEl;
    private _overflowWrapperEl;
    private _overflowMenuInstance;
    private _overflowBtnEl;
    private _tabs;
    private _displayOrder;
    private _hiddenTabIds;
    private _promotedTabId;
    private _resizeObserver;
    private _rafId;
    private _uid;
    private _boundHandleKeyDown;
    private _boundHandleClick;
    static readonly VARIANTS: readonly ["primary", "secondary", "tertiary"];
    static readonly SIZES: readonly ["sm", "lg"];
    static readonly DEFAULTS: RequiredOptions;
    static initialize(element: HTMLElement, options?: ArvoTabstripOptions): ArvoTabstrip;
    constructor(element: HTMLElement, options?: ArvoTabstripOptions);
    private _computeDisplayOrder;
    private _render;
    private _createTabEntry;
    private _iconBtnSize;
    private _lockTabWidths;
    private _rebuildDisplay;
    private _setupOverflowDetection;
    private _checkOverflow;
    private _updateOverflowMenu;
    private _bindEvents;
    private _handleClick;
    private _handleKeyDown;
    private _syncSelection;
    private _dispatchEvent;
    select(id: string): void;
    selectedId(): string | null;
    addTab(tab: TabItem, index?: number): void;
    removeTab(id: string): void;
    disabled(): boolean;
    disabled(state: boolean): void;
    setLoading(isLoading: boolean): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=Tabstrip.d.ts.map