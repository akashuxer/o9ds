export interface O9TextboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
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
    isInlineError?: boolean;
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
declare const O9Textbox: import('react').ForwardRefExoticComponent<O9TextboxProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9Textbox;
//# sourceMappingURL=Textbox.d.ts.map