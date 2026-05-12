import { default as React } from 'react';
export declare const ARVO_MSG_ALERT_DEFAULT_ERROR = "Form field value is invalid";
export type ArvoMessageAlertType = 'error' | 'success' | 'warning' | 'info' | 'neutral' | 'block';
export interface ArvoMessageAlertProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'role'> {
    /** Semantic type. Drives icon glyph + color via the SCSS pattern. Defaults to `error`. */
    type?: ArvoMessageAlertType;
    /** When true, renders ONLY the 16x16 icon (in-field tooltip-error icon mode). */
    isInline?: boolean;
    /**
     * Alert message. In full mode renders inside `__msg`. In inline mode the prop is
     * NOT rendered visually, but a string value is mirrored to `aria-label` on the
     * root. Non-string ReactNode values fall back to the type-default label.
     */
    message?: React.ReactNode;
    /** Optional o9con icon name override (e.g. `'bell'`, `'star'`). */
    icon?: string | null;
    /**
     * When true AND `isInline=false`, renders the trailing close `ArvoButton`.
     * Ignored when `isInline=true`.
     */
    isDismissable?: boolean;
    /** Callback fired when the close button is clicked. */
    onDismiss?: () => void;
    /** DOM id for `aria-describedby` wiring on the associated form control. */
    id?: string;
    /**
     * ARIA live-region role. When omitted, auto-resolves from `type`:
     * `error|warning|block` -> `'alert'`, `info|success|neutral` -> `'status'`.
     */
    role?: 'alert' | 'status';
    className?: string;
}
export interface ArvoMessageAlertComponent extends React.ForwardRefExoticComponent<ArvoMessageAlertProps & React.RefAttributes<HTMLDivElement>> {
    defaultErrorMessage: string;
}
export declare const ArvoMessageAlert: ArvoMessageAlertComponent;
export default ArvoMessageAlert;
//# sourceMappingURL=MessageAlert.d.ts.map