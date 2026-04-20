import { TooltipProp } from '../../hooks/useTooltip';
export interface O9IconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    icon: string;
    tooltip: TooltipProp;
    isDisabled?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
}
declare const O9IconButton: import('react').ForwardRefExoticComponent<O9IconButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default O9IconButton;
//# sourceMappingURL=IconButton.d.ts.map