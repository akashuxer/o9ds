import { PositionWatcherOptions, PositionWatcher, PositionResult } from './types';
/**
 * Manages ResizeObserver, scroll, and window-resize listeners that
 * automatically reposition a floating element relative to an anchor.
 * All reposition calls are deduplicated through `requestAnimationFrame`.
 */
export declare function createPositionWatcher(anchor: HTMLElement, float: HTMLElement, options: PositionWatcherOptions, onUpdate: (result: PositionResult) => void): PositionWatcher;
//# sourceMappingURL=watcher.d.ts.map