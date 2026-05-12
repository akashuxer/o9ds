import { HTMLAttributes, ReactNode } from 'react';
export type ArvoBannerAlertType = 'positive' | 'info' | 'neutral' | 'warning' | 'negative' | 'block';
export type ArvoBannerAlertRole = 'status' | 'alert';
export interface ArvoBannerAlertProps extends Omit<HTMLAttributes<HTMLDivElement>, 'role' | 'title'> {
    /** Body message text. Required. */
    message: string;
    /** Semantic alert type. Defaults to "info". */
    type?: ArvoBannerAlertType;
    /** Optional title rendered above the message. Ignored in compact mode. */
    title?: string | null;
    /** Layout mode. When true, renders only the message with tighter padding. */
    isCompact?: boolean;
    /** Whether to render the close button on the right. Defaults to true. */
    isDismissible?: boolean;
    /** Optional link node rendered below the message. Ignored in compact mode. */
    link?: ReactNode;
    /** Pattern A shimmer loading state. */
    isLoading?: boolean;
    /**
     * Explicit ARIA role override. Defaults to "alert" for negative/block types
     * and "status" for all others.
     */
    role?: ArvoBannerAlertRole;
    /** Fired when the close button is clicked. */
    onDismiss?: () => void;
    /** Additional CSS classes appended to the root element. */
    className?: string;
}
export declare const ArvoBannerAlert: import('react').ForwardRefExoticComponent<ArvoBannerAlertProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoBannerAlert;
//# sourceMappingURL=BannerAlert.d.ts.map