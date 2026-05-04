export type ArvoBadgeAlertType = 'positive' | 'info' | 'neutral' | 'warning' | 'negative' | 'block';
export type ArvoBadgeAlertVariant = 'primary' | 'outline';
export type ArvoBadgeAlertSize = 'sm' | 'lg';
export interface ArvoBadgeAlertOptions {
    message?: string;
    type?: ArvoBadgeAlertType;
    variant?: ArvoBadgeAlertVariant;
    size?: ArvoBadgeAlertSize;
    icon?: boolean;
    customIcon?: string | null;
    role?: 'status' | 'alert';
}
export declare class ArvoBadgeAlert {
    private _element;
    private _options;
    private _icoEl;
    private _msgEl;
    static initialize(element: HTMLElement, options?: ArvoBadgeAlertOptions): ArvoBadgeAlert;
    constructor(element: HTMLElement, options?: ArvoBadgeAlertOptions);
    private _render;
    private _createIconEl;
    setMessage(text: string): void;
    setType(type: ArvoBadgeAlertType): void;
    setVariant(variant: ArvoBadgeAlertVariant): void;
    setSize(size: ArvoBadgeAlertSize): void;
    setIcon(show: boolean): void;
    destroy(): void;
}
//# sourceMappingURL=BadgeAlert.d.ts.map