export type Placement = 'bottom-start' | 'bottom-center' | 'bottom-end' | 'top-start' | 'top-center' | 'top-end' | 'right-start' | 'right-center' | 'right-end' | 'left-start' | 'left-center' | 'left-end' | 'auto';
export type ResolvedPlacement = Exclude<Placement, 'auto'>;
export interface PositionOptions {
    placement?: Placement;
    gap?: number;
    margin?: number;
    boundary?: HTMLElement;
    width?: 'anchor' | number | string;
}
export interface PositionResult {
    x: number;
    y: number;
    placement: ResolvedPlacement;
    maxHeight: number | null;
    width: string | null;
}
export interface PositionWatcherOptions extends PositionOptions {
    observeContainerSelector?: string;
}
export interface PositionWatcher {
    update: () => void;
    destroy: () => void;
}
//# sourceMappingURL=types.d.ts.map