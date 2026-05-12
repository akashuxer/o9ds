export interface ArvoButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    label: string;
    icon?: string;
    isDisabled?: boolean;
    /**
     * Selected (active) state. Renders the active visual.
     *
     * - When `isToggle` is `false` (default), this is a controlled "active" state
     *   for cases like an active menu trigger. Click does NOT toggle the value.
     * - When `isToggle` is `true`, the button toggles its own state on click. If
     *   `isSelected` is set the parent owns the state; otherwise the button is
     *   uncontrolled and seeds from `defaultSelected`.
     */
    isSelected?: boolean;
    /** Initial selected value when `isToggle` is true and `isSelected` is undefined. */
    defaultSelected?: boolean;
    /**
     * When true, click toggles the selected state and renders `aria-pressed`.
     * The button announces itself as a toggle button to assistive tech.
     */
    isToggle?: boolean;
    /**
     * Fired when the toggle state flips. Only emitted when `isToggle` is true.
     */
    onSelectionChange?: (isSelected: boolean) => void;
    isFullWidth?: boolean;
    isLoading?: boolean;
}
declare const ArvoButton: import('react').ForwardRefExoticComponent<ArvoButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ArvoButton;
export { ArvoButton };
//# sourceMappingURL=Button.d.ts.map