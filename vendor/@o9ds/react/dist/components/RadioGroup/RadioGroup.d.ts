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
export interface O9RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
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
declare const O9RadioGroup: import('react').ForwardRefExoticComponent<O9RadioGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9RadioGroup;
//# sourceMappingURL=RadioGroup.d.ts.map