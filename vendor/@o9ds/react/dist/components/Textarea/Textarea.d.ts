export interface O9TextareaChangeDetail {
    value: string;
    previousValue: string;
}
export interface O9TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'> {
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
    isInlineError?: boolean;
    isLoading?: boolean;
    isFullWidth?: boolean;
    onInput?: React.FormEventHandler<HTMLTextAreaElement>;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLTextAreaElement>;
}
declare const O9Textarea: import('react').ForwardRefExoticComponent<O9TextareaProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9Textarea;
//# sourceMappingURL=Textarea.d.ts.map