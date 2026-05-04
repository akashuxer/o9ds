export interface ArvoTextareaChangeDetail {
    value: string;
    previousValue: string;
}
export interface ArvoTextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
    value?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    label?: string;
    isRequired?: boolean;
    isInvalid?: boolean;
    size?: 'sm' | 'lg';
    icon?: string;
    rows?: number;
    maxLength?: number;
    hasCounter?: boolean;
    autoResize?: boolean;
    resizable?: 'none' | 'vertical' | 'both';
    errorMsg?: string;
    errorDisplay?: 'inline' | 'tooltip' | 'none';
    isLoading?: boolean;
    isFullWidth?: boolean;
    onInput?: React.FormEventHandler<HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}
declare const ArvoTextarea: import('react').ForwardRefExoticComponent<ArvoTextareaProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoTextarea;
//# sourceMappingURL=Textarea.d.ts.map