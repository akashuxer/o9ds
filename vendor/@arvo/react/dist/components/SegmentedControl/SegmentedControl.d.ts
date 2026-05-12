export interface SegmentedControlItem {
    value: string;
    label?: string;
    icon?: string;
    isDisabled?: boolean;
}
export interface SegmentedControlChangeDetail {
    value: string;
    previousValue: string | null;
}
export interface ArvoSegmentedControlProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> {
    items: SegmentedControlItem[];
    value?: string | null;
    defaultValue?: string | null;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'lg';
    isIconOnly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    ariaLabel: string;
    onChange?: (detail: SegmentedControlChangeDetail) => void;
}
declare const ArvoSegmentedControl: import('react').ForwardRefExoticComponent<ArvoSegmentedControlProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoSegmentedControl;
export { ArvoSegmentedControl };
//# sourceMappingURL=SegmentedControl.d.ts.map