export interface CheckboxGroupContextValue {
    size: 'sm' | 'lg';
    isDisabled: boolean;
    isReadOnly: boolean;
    isLoading: boolean;
    name?: string;
    registerCheckbox: (value: string, isChecked: boolean) => void;
    unregisterCheckbox: (value: string) => void;
    onChildChange: (value: string, isChecked: boolean) => void;
}
export declare const CheckboxGroupContext: import('react').Context<CheckboxGroupContextValue | null>;
export declare function useCheckboxGroup(): CheckboxGroupContextValue | null;
export interface O9CheckboxGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    label?: string | null;
    hasSelectAll?: boolean;
    orientation?: 'vertical' | 'horizontal';
    labelPosition?: 'top' | 'start';
    size?: 'sm' | 'lg';
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    errorMsg?: string | null;
    isLoading?: boolean;
    name?: string;
    onChange?: (detail: {
        values: string[];
        allChecked: boolean;
    }) => void;
    children?: React.ReactNode;
}
declare const O9CheckboxGroup: import('react').ForwardRefExoticComponent<O9CheckboxGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.d.ts.map