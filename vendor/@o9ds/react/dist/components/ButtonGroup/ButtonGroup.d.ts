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
export interface O9ButtonGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
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
declare const O9ButtonGroup: import('react').ForwardRefExoticComponent<O9ButtonGroupProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9ButtonGroup;
//# sourceMappingURL=ButtonGroup.d.ts.map