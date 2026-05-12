import { ListItemBase } from '../../../../core/src';
import { PanelShellInstance, ArvoPanelHeaderAction, ArvoPanelStickyHeaderConfig, ArvoPanelBannerConfig, ArvoPanelInfoConfig, ArvoPanelAction } from '../../../../utils/src';
export type ArvoSidePanelVariant = 'layout' | 'overlay';
export type ArvoSidePanelSide = 'left' | 'right';
export interface ArvoSidePanelOptions<T extends ListItemBase = ListItemBase> {
    variant?: ArvoSidePanelVariant;
    side?: ArvoSidePanelSide;
    isPinnable?: boolean;
    isPinned?: boolean;
    defaultPinned?: boolean;
    onPinChange?: (pinned: boolean) => void;
    hasSplitter?: boolean | 'auto';
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number | null;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    closeOnEscape?: boolean;
    closeOnOutside?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    ariaLabel?: string;
    className?: string;
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
    onItemActivate?: (id: string, item: T) => void;
}
export type { ArvoPanelHeaderAction, ArvoPanelStickyHeaderConfig, ArvoPanelBannerConfig, ArvoPanelInfoConfig, ArvoPanelAction, };
export type ArvoSidePanelHeaderAction = ArvoPanelHeaderAction;
export type ArvoSidePanelStickyHeaderConfig = ArvoPanelStickyHeaderConfig;
export type ArvoSidePanelBannerConfig = ArvoPanelBannerConfig;
export type ArvoSidePanelInfoConfig = ArvoPanelInfoConfig;
export type ArvoSidePanelAction = ArvoPanelAction;
export declare class ArvoSidePanel<T extends ListItemBase = ListItemBase> {
    private _options;
    private _host;
    private _paneEl;
    private _splitterEl;
    private _splitterResolved;
    private _variant;
    private _side;
    private _isPinnedState;
    private _isOpenState;
    private _isDisabled;
    private _isLoading;
    /** Public for parity with React's PanelShellHandle delegate access. */
    shell: PanelShellInstance<T>;
    private _pinBtn;
    private _pinBtnEl;
    private _focusTrap;
    private _prevFocusEl;
    private _escapeListener;
    private _outsideListener;
    private _shellEventBindings;
    private _destroyed;
    private static _splitterWarnedOnce;
    static initialize<T extends ListItemBase = ListItemBase>(element: HTMLElement, options?: ArvoSidePanelOptions<T>): ArvoSidePanel<T>;
    constructor(element: HTMLElement, options?: ArvoSidePanelOptions<T>);
    open(): Promise<void>;
    close(): Promise<void>;
    isOpen(): boolean;
    toggle(): void;
    pinned(): boolean;
    pinned(value: boolean): void;
    setVariant(variant: ArvoSidePanelVariant): void;
    setItems(items: T[]): void;
    setStickyHeader(config: ArvoPanelStickyHeaderConfig | false): void;
    /**
     * Replace header actions. The shell's `renderHeaderActions` re-positions
     * the pin slot via `insertPinSlot` on every render, so the pin button
     * stays correctly placed (between user actions and __close) without
     * additional work here.
     */
    setHeaderActions(actions: ArvoPanelHeaderAction[]): void;
    setActions(actions: ArvoPanelAction[] | false): void;
    updateAction(id: string, patch: Partial<ArvoPanelHeaderAction | ArvoPanelAction>): void;
    search(): string;
    search(query: string): void;
    selectedTab(): string | null;
    selectedTab(id: string): void;
    setTitle(title: string | null): void;
    loading(): boolean;
    loading(state: boolean): void;
    disabled(): boolean;
    disabled(state: boolean): void;
    focus(target?: 'first' | 'title' | 'search' | 'list'): void;
    destroy(): void;
    private _buildPinButtonEl;
    private _resolveSplitter;
    /**
     * Re-resolves whether the splitter should be present and adds/removes the
     * `__splitter` element + side modifier class accordingly. Called whenever
     * the variant flips (pin/unpin or imperative `setVariant`) so `hasSplitter:'auto'`
     * stays in sync with the active variant.
     */
    private _reflowSplitter;
    private _buildSplitter;
    private _applyClasses;
    private _applyAria;
    private _applyWidthVars;
    private _handlePinClick;
    private _setPinned;
    private _setupOverlayListeners;
    private _teardownOverlayListeners;
    private _wireShellEventReemit;
    private _teardownShellEventReemit;
}
export default ArvoSidePanel;
//# sourceMappingURL=SidePanel.d.ts.map