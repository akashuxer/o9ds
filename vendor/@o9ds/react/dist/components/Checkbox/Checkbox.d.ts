export interface O9CheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    label?: string | null;
    isChecked?: boolean;
    defaultChecked?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    isExcluded?: boolean;
    size?: 'sm' | 'lg';
    value?: string;
    name?: string;
    errorMsg?: string | null;
    isInlineError?: boolean;
    isLoading?: boolean;
    onChange?: (detail: {
        isChecked: boolean;
        value: string;
    }) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
declare const O9Checkbox: import('react').ForwardRefExoticComponent<O9CheckboxProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9Checkbox;
//# sourceMappingURL=Checkbox.d.ts.map