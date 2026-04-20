import { TooltipProp } from '../../hooks/useTooltip';
export interface O9ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'disabled'> {
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
declare const O9Button: import('react').ForwardRefExoticComponent<O9ButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default O9Button;
//# sourceMappingURL=Button.d.ts.map