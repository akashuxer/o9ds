import { OverlayHub } from '../../../../core/src';
export type O9ToastType = 'negative' | 'warning' | 'info' | 'positive' | 'block' | 'neutral';
export type O9ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type O9ToastCloseReason = 'click' | 'escape' | 'fade' | 'programmatic';
export interface O9ToastOptions {
    type?: O9ToastType;
    title?: string | null;
    message: string;
    fadeAway?: boolean;
    timeout?: number;
    pauseOnHover?: boolean;
    icon?: string | null;
    link?: HTMLElement | null;
    onClose?: () => void;
}
export interface O9ToastManagerOptions {
    position?: O9ToastPosition;
    timeout?: number;
    pauseOnHover?: boolean;
    /** Custom overlay hub instance. Falls back to the module-level singleton. */
    hub?: OverlayHub;
}
export declare class O9Toast {
    private _container;
    private _toasts;
    private _defaults;
    private _hub;
    private _overlayId;
    private _destroyed;
    static initialize(container?: HTMLElement | string | null, options?: O9ToastManagerOptions): O9Toast;
    constructor(container?: HTMLElement | string | null, options?: O9ToastManagerOptions);
    show(options: O9ToastOptions): string;
    close(id: string): void;
    closeAll(): void;
    destroy(): void;
    private _startFadeTimer;
    private _remove;
}
//# sourceMappingURL=Toast.d.ts.map