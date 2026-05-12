import { MenuItemData } from '../ActionMenu/ActionMenu';
import { ListGroup } from '../../../../core/src';
import { MenuSearchProp } from '../../types/menu-search';
export type { MenuItemData } from '../ActionMenu/ActionMenu';
export interface ArvoSplitIconButtonOptions {
    icon?: string;
    /**
     * Required tooltip content for the action segment. Doubles as `aria-label`
     * because the action is icon-only.
     */
    tooltip?: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    isActionDisabled?: boolean;
    isTriggerDisabled?: boolean;
    isLoading?: boolean;
    items?: MenuItemData[] | ListGroup<MenuItemData>[];
    /** Enable search with defaults (`true`) or pass a config object. */
    search?: MenuSearchProp;
    placement?: string;
    maxHeight?: string;
    hasGroupDividers?: boolean;
    closeOnSelect?: boolean;
    /** Accessible label for the trigger (caret) segment. Default: "Show options". */
    triggerLabel?: string;
    onAction?: (event: Event) => void;
    onSelect?: (item: MenuItemData, index: number) => boolean | void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onOpenChange?: (isOpen: boolean) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}
type RequiredOptions = Required<Omit<ArvoSplitIconButtonOptions, 'onAction' | 'onSelect' | 'onOpen' | 'onClose' | 'onOpenChange' | 'onFocus' | 'onBlur' | 'maxHeight' | 'icon' | 'tooltip' | 'search'>> & {
    search: MenuSearchProp | undefined;
    icon: string;
    tooltip: string | null;
    maxHeight: string | null;
    onAction: ((event: Event) => void) | null;
    onSelect: ((item: MenuItemData, index: number) => boolean | void) | null;
    onOpen: (() => boolean | void) | null;
    onClose: (() => boolean | void) | null;
    onOpenChange: ((isOpen: boolean) => void) | null;
    onFocus: ((event: FocusEvent) => void) | null;
    onBlur: ((event: FocusEvent) => void) | null;
};
export declare class ArvoSplitIconButton {
    private _element;
    private _options;
    private _actionEl;
    private _triggerEl;
    private _iconEl;
    private _caretEl;
    private _actionMenu;
    private _actionTooltipConnector;
    private _isOpen;
    private _boundHandleActionClick;
    private _boundHandleActionKeydown;
    private _boundHandleActionFocus;
    private _boundHandleActionBlur;
    static readonly VARIANTS: readonly ["primary", "secondary", "tertiary"];
    static readonly SIZES: readonly ["sm", "md", "lg"];
    static readonly DEFAULTS: RequiredOptions;
    static initialize(element: HTMLElement, options?: ArvoSplitIconButtonOptions): ArvoSplitIconButton;
    constructor(element: HTMLElement, options?: ArvoSplitIconButtonOptions);
    private _render;
    private _applySegmentDisabled;
    private _bindEvents;
    private _handleActionClick;
    private _handleActionKeydown;
    private _handleActionFocus;
    private _handleActionBlur;
    private _initActionMenu;
    private _handleSelect;
    private _handleOpenChange;
    private _connectActionTooltip;
    private _dispatchEvent;
    open(): void;
    close(): void;
    toggle(force?: boolean): void;
    isOpen(): boolean;
    updateItems(items: MenuItemData[] | ListGroup<MenuItemData>[]): void;
    setIcon(iconName: string): void;
    setVariant(variant: string): void;
    setSize(size: string): void;
    setLoading(loading: boolean): void;
    setTooltip(tooltip: string | null): void;
    disabled(state?: boolean): boolean | void;
    actionDisabled(state?: boolean): boolean | void;
    triggerDisabled(state?: boolean): boolean | void;
    focus(): void;
    destroy(): void;
}
//# sourceMappingURL=SplitIconButton.d.ts.map