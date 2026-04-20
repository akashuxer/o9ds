export interface OverlayConfig {
    containerSelector: string;
    positionMode: 'viewport' | 'container';
    zIndexBase: number;
    autoCloseOnRouteChange: boolean;
    autoCloseOnOutsideClick: boolean;
    maxStack: number;
    onOpen?: (id: string) => void;
    onClose?: (id: string) => void;
    onStackChange?: (stack: string[]) => void;
}
export type OverlayType = 'tooltip' | 'popover' | 'dropdown' | 'modal' | 'side-panel' | 'action-menu' | 'toast';
export interface OverlayEntry {
    id: string;
    type: OverlayType;
    element: HTMLElement;
    triggerElement?: HTMLElement;
    priority: number;
    config: Partial<OverlayConfig>;
    onClose?: () => void;
}
export interface OverlayHub {
    configure(config: Partial<OverlayConfig>): void;
    getConfig(): OverlayConfig;
    open(entry: OverlayEntry): void;
    close(id: string): void;
    closeAll(options?: {
        except?: string[];
    }): void;
    closeByType(type: OverlayEntry['type']): void;
    isOpen(id: string): boolean;
    getActive(): OverlayEntry[];
    getTopmost(): OverlayEntry | null;
    getContainer(): HTMLElement;
    getZIndex(id: string): number;
}
export declare function createOverlayHub(): OverlayHub;
export declare const overlayHub: OverlayHub;
//# sourceMappingURL=overlay-hub.d.ts.map