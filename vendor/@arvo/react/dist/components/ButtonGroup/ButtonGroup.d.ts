export interface ButtonGroupItem {
    value: string;
    label?: string;
    icon?: string;
    isDisabled?: boolean;
    isExcluded?: boolean;
}
export interface ButtonGroupChangeDetail {
    value: string | string[] | null;
    previousValue: string | string[] | null;
    changedValue?: string;
    isSelected?: boolean;
}
export interface ArvoButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    items: ButtonGroupItem[];
    value?: string | string[] | null;
    defaultValue?: string | string[] | null;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'lg';
    isMultiSelect?: boolean;
    isIconOnly?: boolean;
    hasOverflow?: boolean;
    expandOnSelect?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    ariaLabel: string;
    onChange?: (detail: ButtonGroupChangeDetail) => void;
}
declare const ArvoButtonGroup: import('react').ForwardRefExoticComponent<ArvoButtonGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoButtonGroup;
//# sourceMappingURL=ButtonGroup.d.ts.map