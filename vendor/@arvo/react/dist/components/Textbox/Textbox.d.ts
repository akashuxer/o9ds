export interface ArvoTextboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    value?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    label?: string;
    isRequired?: boolean;
    isInvalid?: boolean;
    size?: 'sm' | 'lg';
    type?: 'text' | 'email' | 'tel' | 'url';
    maxLength?: number;
    hasCounter?: boolean;
    errorMsg?: string;
    errorDisplay?: 'inline' | 'tooltip' | 'none';
    isClearable?: boolean;
    isLoading?: boolean;
    isFullWidth?: boolean;
    width?: string;
    leadingIcon?: string;
    onInput?: React.FormEventHandler<HTMLInputElement>;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}
declare const ArvoTextbox: import('react').ForwardRefExoticComponent<ArvoTextboxProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoTextbox;
//# sourceMappingURL=Textbox.d.ts.map