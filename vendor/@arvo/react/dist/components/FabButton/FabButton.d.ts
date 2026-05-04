import { IndicatorVariant, IndicatorSize } from '../Indicator/Indicator';
export type FabButtonVariant = 'primary' | 'secondary';
export interface ArvoFabButtonProps {
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
export interface ArvoFabButtonRef {
    focus: () => void;
    buttonElement: HTMLButtonElement | null;
}
declare const ArvoFabButton: import('react').ForwardRefExoticComponent<ArvoFabButtonProps & import('react').RefAttributes<ArvoFabButtonRef>>;
export default ArvoFabButton;
//# sourceMappingURL=FabButton.d.ts.map