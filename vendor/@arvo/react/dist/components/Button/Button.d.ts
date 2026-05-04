import { TooltipProp } from '../../hooks/useTooltip';
export interface ArvoButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    label: string;
    icon?: string;
    isDisabled?: boolean;
    isSelected?: boolean;
    isFullWidth?: boolean;
    isLoading?: boolean;
    tooltip?: TooltipProp;
}
declare const ArvoButton: import('react').ForwardRefExoticComponent<ArvoButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ArvoButton;
//# sourceMappingURL=Button.d.ts.map