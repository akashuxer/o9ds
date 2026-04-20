export interface O9SwitchProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
declare const O9Switch: import('react').ForwardRefExoticComponent<O9SwitchProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9Switch;
//# sourceMappingURL=Switch.d.ts.map