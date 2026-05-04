export interface ArvoSwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    label?: string | null;
    isChecked?: boolean;
    defaultChecked?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    value?: string;
    name?: string;
    labelPosition?: 'end' | 'start';
    isLoading?: boolean;
    onChange?: (detail: {
        isChecked: boolean;
        value: string;
    }) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
declare const ArvoSwitch: import('react').ForwardRefExoticComponent<ArvoSwitchProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoSwitch;
//# sourceMappingURL=Switch.d.ts.map