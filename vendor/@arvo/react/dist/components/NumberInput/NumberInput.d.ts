export interface ArvoNumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'onInput'> {
    value?: number | null;
    defaultValue?: number | null;
    min?: number;
    max?: number;
    step?: number;
    placeholder?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    label?: string;
    isRequired?: boolean;
    isInvalid?: boolean;
    size?: 'sm' | 'lg';
    errorMsg?: string;
    errorDisplay?: 'inline' | 'tooltip' | 'none';
    isLoading?: boolean;
    isFullWidth?: boolean;
    width?: string;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
declare const ArvoNumberInput: import('react').ForwardRefExoticComponent<ArvoNumberInputProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoNumberInput;
//# sourceMappingURL=NumberInput.d.ts.map