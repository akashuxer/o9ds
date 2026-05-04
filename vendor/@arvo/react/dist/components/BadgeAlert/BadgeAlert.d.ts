export type ArvoBadgeAlertType = 'positive' | 'info' | 'neutral' | 'warning' | 'negative' | 'block';
export type ArvoBadgeAlertVariant = 'primary' | 'outline';
export type ArvoBadgeAlertSize = 'sm' | 'lg';
export interface ArvoBadgeAlertProps {
    message: string;
    type?: ArvoBadgeAlertType;
    variant?: ArvoBadgeAlertVariant;
    size?: ArvoBadgeAlertSize;
    hasIcon?: boolean;
    customIcon?: string;
    className?: string;
    role?: 'status' | 'alert';
}
declare const ArvoBadgeAlert: import('react').ForwardRefExoticComponent<ArvoBadgeAlertProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoBadgeAlert;
//# sourceMappingURL=BadgeAlert.d.ts.map