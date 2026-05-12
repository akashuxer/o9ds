import { TooltipProp } from '../../hooks/useTooltip';
export interface ArvoIconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    icon: string;
    /**
     * Optional alternate icon rendered when the button is selected. Use this for
     * outline/filled toggle pairs (e.g. `icon="bookmark-o"`, `selectedIcon="bookmark"`).
     * Falls back to `icon` when not provided.
     */
    selectedIcon?: string;
    /** Tooltip content. Doubles as the button's `aria-label` because the button is icon-only. */
    tooltip: TooltipProp;
    isDisabled?: boolean;
    /**
     * Selected (active) state.
     *
     * - When `isToggle` is `false` (default), parent-controlled active state
     *   (e.g. an active menu trigger). Click does NOT toggle the value.
     * - When `isToggle` is `true`, click toggles the state. Pass `isSelected` to
     *   make it controlled, or rely on `defaultSelected` for uncontrolled mode.
     */
    isSelected?: boolean;
    defaultSelected?: boolean;
    /** When true, click toggles the selected state and renders `aria-pressed`. */
    isToggle?: boolean;
    /** Fired when the toggle state flips. Only emitted when `isToggle` is true. */
    onSelectionChange?: (isSelected: boolean) => void;
    isLoading?: boolean;
}
declare const ArvoIconButton: import('react').ForwardRefExoticComponent<ArvoIconButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ArvoIconButton;
export { ArvoIconButton };
//# sourceMappingURL=IconButton.d.ts.map