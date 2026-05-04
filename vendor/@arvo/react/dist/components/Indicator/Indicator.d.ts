export type IndicatorVariant = 'unsaved' | 'new' | 'unread';
export type IndicatorSize = 'sm' | 'lg';
export interface ArvoIndicatorProps {
    variant: IndicatorVariant;
    size?: IndicatorSize;
    className?: string;
}
declare const ArvoIndicator: import('react').ForwardRefExoticComponent<ArvoIndicatorProps & import('react').RefAttributes<HTMLSpanElement>>;
export default ArvoIndicator;
//# sourceMappingURL=Indicator.d.ts.map