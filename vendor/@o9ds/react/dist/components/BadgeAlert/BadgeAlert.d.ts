export type O9BadgeAlertType = 'positive' | 'info' | 'neutral' | 'warning' | 'negative' | 'block';
export type O9BadgeAlertVariant = 'primary' | 'outline';
export type O9BadgeAlertSize = 'sm' | 'lg';
export interface O9BadgeAlertProps {
    message: string;
    type?: O9BadgeAlertType;
    variant?: O9BadgeAlertVariant;
    size?: O9BadgeAlertSize;
    hasIcon?: boolean;
    customIcon?: string;
    className?: string;
    role?: 'status' | 'alert';
}
declare const O9BadgeAlert: import('react').ForwardRefExoticComponent<O9BadgeAlertProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9BadgeAlert;
//# sourceMappingURL=BadgeAlert.d.ts.map