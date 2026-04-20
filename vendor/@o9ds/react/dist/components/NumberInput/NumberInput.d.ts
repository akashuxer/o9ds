export interface O9NumberInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type' | 'value' | 'defaultValue' | 'onChange' | 'onInput'> {
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
    isInlineError?: boolean;
    isLoading?: boolean;
    isFullWidth?: boolean;
    width?: string;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}
declare const O9NumberInput: import('react').ForwardRefExoticComponent<O9NumberInputProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9NumberInput;
//# sourceMappingURL=NumberInput.d.ts.map