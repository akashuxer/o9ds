export interface RadioGroupContextValue {
    name: string;
    size: 'sm' | 'lg';
    isDisabled: boolean;
    isReadOnly: boolean;
    isLoading: boolean;
    selectedValue: string | null;
    onChildChange: (value: string) => void;
}
export declare const RadioGroupContext: import('react').Context<RadioGroupContextValue | null>;
export declare function useRadioGroup(): RadioGroupContextValue | null;
export interface ArvoRadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    name: string;
    label?: string | null;
    orientation?: 'vertical' | 'horizontal';
    labelPosition?: 'top' | 'start';
    size?: 'sm' | 'lg';
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    errorMsg?: string | null;
    isLoading?: boolean;
    value?: string | null;
    defaultValue?: string | null;
    onChange?: (detail: {
        value: string;
        previousValue: string | null;
    }) => void;
    children?: React.ReactNode;
}
declare const ArvoRadioGroup: import('react').ForwardRefExoticComponent<ArvoRadioGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoRadioGroup;
//# sourceMappingURL=RadioGroup.d.ts.map