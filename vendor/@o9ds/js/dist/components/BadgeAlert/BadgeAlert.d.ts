export type O9BadgeAlertType = 'positive' | 'info' | 'neutral' | 'warning' | 'negative' | 'block';
export type O9BadgeAlertVariant = 'primary' | 'outline';
export type O9BadgeAlertSize = 'sm' | 'lg';
export interface O9BadgeAlertOptions {
    message?: string;
    type?: O9BadgeAlertType;
    variant?: O9BadgeAlertVariant;
    size?: O9BadgeAlertSize;
    icon?: boolean;
    customIcon?: string | null;
    role?: 'status' | 'alert';
}
export declare class O9BadgeAlert {
    private _element;
    private _options;
    private _icoEl;
    private _msgEl;
    static initialize(element: HTMLElement, options?: O9BadgeAlertOptions): O9BadgeAlert;
    constructor(element: HTMLElement, options?: O9BadgeAlertOptions);
    private _render;
    private _createIconEl;
    setMessage(text: string): void;
    setType(type: O9BadgeAlertType): void;
    setVariant(variant: O9BadgeAlertVariant): void;
    setSize(size: O9BadgeAlertSize): void;
    setIcon(show: boolean): void;
    destroy(): void;
}
//# sourceMappingURL=BadgeAlert.d.ts.map