export interface SortableListOptions {
    /** CSS selector to identify draggable items within the container. */
    itemSelector: string;
    /** CSS selector for the drag handle within each item. If null, the whole item is the handle. */
    handleSelector: string | null;
    /**
     * Returns the group identifier for an item element.
     * Items with the same group can be reordered within that group.
     * Return null for ungrouped items (flat list).
     */
    getGroupOf?: (item: HTMLElement) => string | null;
    /** Whether items can be dragged across group boundaries. Default: false. */
    allowCrossGroup?: boolean;
    /** Called continuously as the dragged item moves, with preview indices. */
    onPreview?: (fromIndex: number, toIndex: number) => void;
    /** Called when a drag completes and item position is committed. */
    onCommit?: (fromIndex: number, toIndex: number, fromGroup: string | null, toGroup: string | null) => void;
    /** Called when a drag is cancelled (Escape, invalid drop, etc.). */
    onCancel?: () => void;
    /** CSS class applied to the original item while dragging (placeholder). Default: 'o9ds-sortable--ghost'. */
    ghostClass?: string;
    /** CSS class applied to the cloned drag image. Default: 'o9ds-sortable--dragging'. */
    draggingClass?: string;
    /** CSS class for the drop line indicator above a target. Default: 'o9ds-sortable--drop-above'. */
    dropAboveClass?: string;
    /** CSS class for the drop line indicator below a target. Default: 'o9ds-sortable--drop-below'. */
    dropBelowClass?: string;
}
export interface SortableHandle {
    /** Clean up all listeners and DOM artifacts. */
    destroy: () => void;
    /** Whether a drag is currently in progress. */
    isDragging: () => boolean;
}
export declare function createSortableList(container: HTMLElement, options: SortableListOptions): SortableHandle;
//# sourceMappingURL=sortable-list.d.ts.map