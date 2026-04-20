export type IndicatorVariant = 'unsaved' | 'new' | 'unread';
export type IndicatorSize = 'sm' | 'lg';
export interface O9IndicatorProps {
    variant: IndicatorVariant;
    size?: IndicatorSize;
    className?: string;
}
declare const O9Indicator: import('react').ForwardRefExoticComponent<O9IndicatorProps & import('react').RefAttributes<HTMLSpanElement>>;
export default O9Indicator;
//# sourceMappingURL=Indicator.d.ts.map