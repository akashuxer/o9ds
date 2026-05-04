import { TooltipProp } from '../../hooks/useTooltip';
export interface ArvoIconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    icon: string;
    tooltip: TooltipProp;
    isDisabled?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
}
declare const ArvoIconButton: import('react').ForwardRefExoticComponent<ArvoIconButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ArvoIconButton;
//# sourceMappingURL=IconButton.d.ts.map