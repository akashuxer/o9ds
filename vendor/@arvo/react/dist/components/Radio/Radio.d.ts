export interface ArvoRadioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    value: string;
    name?: string;
    label?: string | null;
    isChecked?: boolean;
    defaultChecked?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isInvalid?: boolean;
    isLoading?: boolean;
    size?: 'sm' | 'lg';
    errorMsg?: string | null;
    onChange?: (detail: {
        value: string;
        name: string;
    }) => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
declare const ArvoRadio: import('react').ForwardRefExoticComponent<ArvoRadioProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoRadio;
//# sourceMappingURL=Radio.d.ts.map