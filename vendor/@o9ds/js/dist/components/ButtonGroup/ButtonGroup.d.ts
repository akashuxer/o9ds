export interface ButtonGroupItem {
    value: string;
    label?: string;
    icon?: string;
    isDisabled?: boolean;
    isExcluded?: boolean;
}
export interface O9ButtonGroupOptions {
    items?: ButtonGroupItem[];
    value?: string | string[] | null;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'lg';
    isMultiSelect?: boolean;
    isIconOnly?: boolean;
    hasOverflow?: boolean;
    expandOnSelect?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    ariaLabel: string;
    onChange?: (detail: ButtonGroupChangeDetail) => void;
}
export interface ButtonGroupChangeDetail {
    value: string | string[] | null;
    previousValue: string | string[] | null;
    changedValue?: string;
    isSelected?: boolean;
    [key: string]: unknown;
}
type RequiredGroupOptions = Required<Omit<O9ButtonGroupOptions, 'onChange' | 'items' | 'value'>> & {
    items: ButtonGroupItem[];
    value: string | string[] | null;
    onChange: ((detail: ButtonGroupChangeDetail) => void) | null;
};
export declare class O9ButtonGroup {
    private _element;
    private _options;
    private _childButtons;
    private _childElements;
    private _overflowTrigger;
    private _overflowTriggerEl;
    private _overflowMenuEl;
    private _arrowNav;
    private _resizeObserver;
    private _hiddenIndices;
    private _boundHandleKeydown;
    private _boundHandleClick;
    private _boundHandleOverflowClick;
    private _boundCloseOverflowMenu;
    static readonly VARIANTS: readonly ["primary", "secondary"];
    static readonly SIZES: readonly ["sm", "lg"];
    static readonly DEFAULTS: RequiredGroupOptions;
    static initialize(element: HTMLElement, options?: O9ButtonGroupOptions): O9ButtonGroup;
    constructor(element: HTMLElement, options?: O9ButtonGroupOptions);
    private _render;
    private _buildRootClasses;
    private _bindEvents;
    private _handleKeydown;
    private _handleClick;
    private _selectSingle;
    private _toggleMulti;
    private _isItemActive;
    private _syncActiveStates;
    private _syncExpandLabels;
    private _syncRovingTabindex;
    private _setupArrowNav;
    private _setupResizeObserver;
    private _checkOverflow;
    private _handleOverflowClick;
    private _overflowMenuButtons;
    private _openOverflowMenu;
    private _closeOverflowMenu;
    private _dispatchEvent;
    value(): string | string[] | null;
    value(newValue: string | string[] | null): void;
    disabled(): boolean;
    disabled(state: boolean): void;
    setVariant(variant: string): void;
    setLoading(isLoading: boolean): void;
    setItems(items: ButtonGroupItem[]): void;
    focus(): void;
    destroy(): void;
    private _destroyChildren;
}
export {};
//# sourceMappingURL=ButtonGroup.d.ts.map