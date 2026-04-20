export type ResizeCorner = 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
export interface ResizeRect {
    width: number;
    height: number;
}
export interface ResizeHandleOptions {
    /** Which corners to enable resize handles on. */
    corners: ResizeCorner[];
    /** Minimum width and height. */
    min: ResizeRect;
    /** Maximum width and height, or a function that computes them dynamically. */
    max: ResizeRect | (() => ResizeRect);
    /** Called continuously during resize with the current dimensions. */
    onResize?: (rect: ResizeRect) => void;
    /** Called once when resize completes (pointerup). */
    onCommit?: (rect: ResizeRect) => void;
    /** Minimum pixel distance from viewport edge to allow a corner handle. Default: 16. */
    viewportPadding?: number;
}
export interface ResizeHandleInstance {
    /** Create and append corner handle elements to the target. Returns the created elements. */
    mount: () => HTMLElement[];
    /** Remove corner handles and unbind all listeners. */
    destroy: () => void;
    /** Re-evaluate which corners are visible based on current viewport position. */
    updateVisibility: () => void;
    /** Whether a resize drag is currently in progress. */
    isResizing: () => boolean;
}
export declare function createResizeHandle(target: HTMLElement, options: ResizeHandleOptions): ResizeHandleInstance;
//# sourceMappingURL=resize-handle.d.ts.map