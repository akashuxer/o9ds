import { PositionOptions, PositionResult } from './types';
/**
 * Calculates the position of a floating element relative to an anchor.
 * Supports 12 named placements, auto placement, collision detection with
 * flip fallback, horizontal clamping, and max-height for vertical placements.
 *
 * Returned `x`/`y` include `window.scrollX/Y` for use with
 * `transform: translate()` on absolutely-positioned elements.
 */
export declare function computePosition(anchor: HTMLElement | {
    x: number;
    y: number;
}, float: HTMLElement, options?: PositionOptions): PositionResult;
//# sourceMappingURL=compute.d.ts.map