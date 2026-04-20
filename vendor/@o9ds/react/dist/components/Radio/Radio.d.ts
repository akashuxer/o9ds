export interface O9RadioProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
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
declare const O9Radio: import('react').ForwardRefExoticComponent<O9RadioProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9Radio;
//# sourceMappingURL=Radio.d.ts.map