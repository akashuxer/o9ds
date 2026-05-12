import { TooltipPlacement } from '../../../../core/src';
export type IconButtonTooltipOption = string | {
    content: string;
    placement?: TooltipPlacement;
    shortcut?: string;
};
export interface ArvoIconButtonOptions {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    icon?: string;
    /**
     * Optional alternate icon rendered when the button is selected. Use this for
     * outline/filled toggle pairs (e.g. `icon: 'bookmark-o', selectedIcon: 'bookmark'`).
     */
    selectedIcon?: string;
    /** Tooltip content. Doubles as the button's `aria-label` because it is icon-only. */
    tooltip?: IconButtonTooltipOption;
    isDisabled?: boolean;
    isSelected?: boolean;
    /**
     * When true, click toggles the selected state and renders `aria-pressed`.
     * The button announces itself as a toggle button to assistive tech.
     */
    isToggle?: boolean;
    isLoading?: boolean;
    onClick?: (event: Event) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
    /** Fired when the toggle state flips. Only emitted when `isToggle` is true. */
    onSelectionChange?: (isSelected: boolean) => void;
}
type RequiredIconButtonOptions = Required<Omit<ArvoIconButtonOptions, 'onClick' | 'onKeyDown' | 'onSelectionChange' | 'isSelected' | 'selectedIcon'>> & {
    selectedIcon: string | null;
    onClick: ((event: Event) => void) | null;
    onKeyDown: ((event: KeyboardEvent) => void) | null;
    onSelectionChange: ((isSelected: boolean) => void) | null;
    isSelected: boolean | undefined;
};
export declare class ArvoIconButton {
    private _element;
    private _options;
    private _iconEl;
    private _boundHandleClick;
    private _boundHandleKeydown;
    private _tooltipConnector;
    static readonly VARIANTS: readonly ["primary", "secondary", "tertiary", "outline", "danger"];
    static readonly SIZES: readonly ["xs", "sm", "md", "lg"];
    static readonly DEFAULTS: RequiredIconButtonOptions;
    static initialize(element: HTMLButtonElement, options?: ArvoIconButtonOptions): ArvoIconButton;
    constructor(element: HTMLButtonElement, options?: ArvoIconButtonOptions);
    private _connectTooltip;
    private _render;
    private _createIconEl;
    private _bindEvents;
    private _handleClick;
    private _handleKeydown;
    private _dispatchEvent;
    setIcon(iconName: string): void;
    setTooltip(tooltip: string): void;
    setVariant(variant: string): void;
    setSize(size: string): void;
    setLoading(isLoading: boolean): void;
    selected(state?: boolean): boolean | void;
    /**
     * Toggle the selected state. Forwards through `selected()` and fires
     * `onSelectionChange`. Useful when `isToggle` is set so consumers can
     * programmatically trigger the same flip the user does on click.
     */
    toggle(force?: boolean): boolean;
    disabled(state?: boolean): boolean | void;
    focus(): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=IconButton.d.ts.map