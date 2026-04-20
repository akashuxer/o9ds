import { IndicatorVariant, IndicatorSize } from '../Indicator/Indicator';
export type FabButtonVariant = 'primary' | 'secondary';
export interface O9FabButtonProps {
    variant?: FabButtonVariant;
    icon: string;
    label?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    indicator?: IndicatorVariant | false;
    indicatorSize?: IndicatorSize;
    zIndex?: number;
    tooltip?: string;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onFocus?: React.FocusEventHandler<HTMLButtonElement>;
    onBlur?: React.FocusEventHandler<HTMLButtonElement>;
}
export interface O9FabButtonRef {
    focus: () => void;
    buttonElement: HTMLButtonElement | null;
}
declare const O9FabButton: import('react').ForwardRefExoticComponent<O9FabButtonProps & import('react').RefAttributes<O9FabButtonRef>>;
export default O9FabButton;
//# sourceMappingURL=FabButton.d.ts.map