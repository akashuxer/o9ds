export interface ArvoCheckboxProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
    errorDisplay?: 'inline' | 'none';
    isLoading?: boolean;
    onChange?: (detail: {
        isChecked: boolean;
        value: string;
    }) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
declare const ArvoCheckbox: import('react').ForwardRefExoticComponent<ArvoCheckboxProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoCheckbox;
//# sourceMappingURL=Checkbox.d.ts.map