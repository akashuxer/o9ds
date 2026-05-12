export interface ArvoButtonOptions {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    label?: string;
    icon?: string | null;
    isDisabled?: boolean;
    /**
     * Selected (active) state.
     *
     * - When `isToggle` is `false` (default), this is parent-controlled active
     *   state for cases like an active menu trigger. Click does NOT toggle.
     * - When `isToggle` is `true`, the button toggles its own state on click.
     */
    isSelected?: boolean;
    /**
     * When true, click toggles the selected state and renders `aria-pressed`.
     * The button announces itself as a toggle button to assistive tech.
     */
    isToggle?: boolean;
    isFullWidth?: boolean;
    isLoading?: boolean;
    onClick?: (event: Event) => void;
    /** Fired when the toggle state flips. Only emitted when `isToggle` is true. */
    onSelectionChange?: (isSelected: boolean) => void;
}
type RequiredButtonOptions = Required<Omit<ArvoButtonOptions, 'onClick' | 'onSelectionChange' | 'icon' | 'isSelected'>> & {
    icon: string | null;
    onClick: ((event: Event) => void) | null;
    onSelectionChange: ((isSelected: boolean) => void) | null;
    isSelected: boolean | undefined;
};
export declare class ArvoButton {
    private _element;
    private _options;
    private _iconEl;
    private _labelEl;
    private _originalContent;
    private _boundHandleClick;
    private _boundHandleKeydown;
    static readonly VARIANTS: readonly ["primary", "secondary", "tertiary", "outline", "danger"];
    static readonly SIZES: readonly ["sm", "md", "lg"];
    static readonly DEFAULTS: RequiredButtonOptions;
    static initialize(element: HTMLButtonElement, options?: ArvoButtonOptions): ArvoButton;
    constructor(element: HTMLButtonElement, options?: ArvoButtonOptions);
    private _render;
    private _createIconEl;
    private _bindEvents;
    private _handleClick;
    private _handleKeydown;
    private _dispatchEvent;
    setLabel(text: string): void;
    setIcon(iconName: string | null): void;
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
//# sourceMappingURL=Button.d.ts.map