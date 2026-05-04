import { OverlayHub } from '../overlay';
import { ResolvedPlacement } from '../position/types';
export type TooltipPlacement = ResolvedPlacement;
export interface TooltipManagerConfig {
    hoverDelay: number;
    hideDelay: number;
    gap: number;
    defaultPlacement: TooltipPlacement;
}
export interface TooltipShowOptions {
    anchor: HTMLElement;
    content: string;
    placement?: TooltipPlacement;
    shortcut?: string;
    trigger: 'hover' | 'focus';
}
export interface TooltipManager {
    configure(config: Partial<TooltipManagerConfig>): void;
    getConfig(): TooltipManagerConfig;
    show(options: TooltipShowOptions): void;
    hide(immediate?: boolean): void;
    isVisible(): boolean;
    getElement(): HTMLElement | null;
    destroy(): void;
}
export interface TooltipManagerDeps {
    hub?: OverlayHub;
}
export interface TooltipConnectorOptions {
    anchor: HTMLElement;
    content: string | (() => string);
    placement?: TooltipPlacement;
    shortcut?: string;
    labelElement?: HTMLElement;
    autoOnTruncation?: boolean;
}
export interface TooltipConnector {
    update(opts: Partial<TooltipConnectorOptions>): void;
    destroy(): void;
}
//# sourceMappingURL=types.d.ts.map