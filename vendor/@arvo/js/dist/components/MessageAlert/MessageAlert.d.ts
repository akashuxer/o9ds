export declare const ARVO_MSG_ALERT_DEFAULT_ERROR = "Form field value is invalid";
export type ArvoMessageAlertType = 'error' | 'success' | 'warning' | 'info' | 'neutral' | 'block';
export interface ArvoMessageAlertOptions {
    type?: ArvoMessageAlertType;
    isInline?: boolean;
    /** JS layer accepts string only -- consumers concat their own title prefix. */
    message?: string | null;
    /** Optional o9con icon override; suppresses the type-default `::before` glyph. */
    icon?: string | null;
    isDismissable?: boolean;
    onDismiss?: (() => void) | null;
    id?: string;
    /** When omitted, role is auto-resolved from `type`. */
    role?: 'alert' | 'status';
}
export declare class ArvoMessageAlert {
    static defaultErrorMessage: string;
    readonly el: HTMLElement;
    private _type;
    private _isInline;
    private _message;
    private _icon;
    private _isDismissable;
    private _onDismiss;
    private _id;
    private _role;
    private _roleExplicit;
    private _bodyEl;
    private _icoEl;
    private _msgEl;
    private _iconOverrideEl;
    private _closeBtn;
    private _closeEl;
    private _boundHandleCloseClick;
    private _destroyed;
    static initialize(element: HTMLElement | null, options?: ArvoMessageAlertOptions): ArvoMessageAlert;
    constructor(element: HTMLElement | null, options?: ArvoMessageAlertOptions);
    private _render;
    private _buildIconEl;
    private _mountCloseBtn;
    private _unmountCloseBtn;
    private _applyInlineAriaLabel;
    private _handleCloseClick;
    type(): ArvoMessageAlertType;
    type(next: ArvoMessageAlertType): void;
    message(): string;
    message(next: string | null): void;
    inline(): boolean;
    inline(next: boolean): void;
    dismissable(): boolean;
    dismissable(next: boolean): void;
    icon(): string | null;
    icon(next: string | null): void;
    dismiss(): void;
    destroy(): void;
}
//# sourceMappingURL=MessageAlert.d.ts.map