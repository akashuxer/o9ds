export interface ArvoPopoverActionConfig {
    id: string;
    label?: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    action?: (event: Event) => boolean | void;
    isDisabled?: boolean;
}
export interface ArvoPopoverHeaderActionConfig {
    id: string;
    type: 'btn' | 'dropdown' | 'switch';
    icon?: string;
    label?: string;
    onClick?: () => void;
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
    isDisabled?: boolean;
}
export interface ArvoPopoverOptions {
    variant?: 'space' | 'edge';
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'auto';
    title?: string;
    hasHeader?: boolean;
    isClosable?: boolean;
    hasBackButton?: boolean;
    headerActions?: ArvoPopoverHeaderActionConfig[];
    stickyHeader?: HTMLElement | string | ((el: HTMLElement) => void) | null;
    content?: HTMLElement | string | ((el: HTMLElement) => void) | null;
    actions?: ArvoPopoverActionConfig[];
    hasFooter?: boolean;
    width?: string | number | 'anchor' | null;
    offset?: number;
    trigger?: 'click' | 'hover' | 'focus';
    closeOnOutside?: boolean;
    hasArrow?: boolean;
    isLoading?: boolean;
    isInteractive?: boolean;
    isInline?: boolean;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onBack?: () => void;
}
type RequiredPopoverOptions = Required<Omit<ArvoPopoverOptions, 'onOpen' | 'onClose' | 'onBack' | 'stickyHeader' | 'content' | 'width'>> & {
    stickyHeader: HTMLElement | string | ((el: HTMLElement) => void) | null;
    content: HTMLElement | string | ((el: HTMLElement) => void) | null;
    width: string | number | 'anchor' | null;
    onOpen: (() => boolean | void) | null;
    onClose: (() => boolean | void) | null;
    onBack: (() => void) | null;
};
export declare class ArvoPopover {
    private _element;
    private _options;
    private _panelEl;
    private _arrowEl;
    private _headerEl;
    private _bodyEl;
    private _footerEl;
    private _titleEl;
    private _stickyHeaderEl;
    private _closeBtnInstance;
    private _backBtnInstance;
    private _headerActionInstances;
    private _footerBtnInstances;
    private _positionWatcher;
    private _focusTrap;
    private _panelId;
    private _isOpen;
    private _hoverOpenTimer;
    private _hoverCloseTimer;
    private _boundHandleTriggerClick;
    private _boundHandleTriggerPointerEnter;
    private _boundHandleTriggerPointerLeave;
    private _boundHandleTriggerFocus;
    private _boundHandleTriggerBlur;
    private _boundHandleKeyDown;
    private _boundHandlePanelPointerEnter;
    private _boundHandlePanelPointerLeave;
    private _boundHandleOutsidePointerDown;
    static readonly DEFAULTS: RequiredPopoverOptions;
    static initialize(element: HTMLElement, options?: ArvoPopoverOptions): ArvoPopover;
    constructor(element: HTMLElement, options?: ArvoPopoverOptions);
    private _render;
    private _renderHeader;
    private _renderFooter;
    private _buildPanelClasses;
    private _handleFooterAction;
    private _bindEvents;
    private _handleTriggerClick;
    private _handleTriggerPointerEnter;
    private _handleTriggerPointerLeave;
    private _handleTriggerFocus;
    private _handleTriggerBlur;
    private _handleKeyDown;
    private _handlePanelPointerEnter;
    private _handlePanelPointerLeave;
    private _handleOutsidePointerDown;
    private _clearHoverTimers;
    private _applyWidth;
    private _applyPosition;
    open(): void;
    close(): void;
    isOpen(): boolean;
    toggle(): void;
    renderBody(content: string | HTMLElement | ((el: HTMLElement) => void)): void;
    setLoading(isLoading: boolean): void;
    setFooterVisible(visible: boolean): void;
    updateFooterAction(actionId: string, props: {
        isDisabled?: boolean;
        icon?: string;
        label?: string;
    }): void;
    reposition(): void;
    destroy(): void;
    private _dispatchEvent;
}
export {};
//# sourceMappingURL=Popover.d.ts.map