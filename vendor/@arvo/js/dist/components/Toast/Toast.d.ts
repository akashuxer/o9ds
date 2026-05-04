import { OverlayHub } from '../../../../core/src';
export type ArvoToastType = 'negative' | 'warning' | 'info' | 'positive' | 'block' | 'neutral';
export type ArvoToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type ArvoToastCloseReason = 'click' | 'escape' | 'fade' | 'programmatic';
export interface ArvoToastOptions {
    type?: ArvoToastType;
    title?: string | null;
    message: string;
    fadeAway?: boolean;
    timeout?: number;
    pauseOnHover?: boolean;
    icon?: string | null;
    link?: HTMLElement | null;
    onClose?: () => void;
}
export interface ArvoToastManagerOptions {
    position?: ArvoToastPosition;
    timeout?: number;
    pauseOnHover?: boolean;
    /** Custom overlay hub instance. Falls back to the module-level singleton. */
    hub?: OverlayHub;
}
export declare class ArvoToast {
    private _container;
    private _toasts;
    private _defaults;
    private _hub;
    private _overlayId;
    private _destroyed;
    static initialize(container?: HTMLElement | string | null, options?: ArvoToastManagerOptions): ArvoToast;
    constructor(container?: HTMLElement | string | null, options?: ArvoToastManagerOptions);
    show(options: ArvoToastOptions): string;
    close(id: string): void;
    closeAll(): void;
    destroy(): void;
    private _startFadeTimer;
    private _remove;
}
//# sourceMappingURL=Toast.d.ts.map