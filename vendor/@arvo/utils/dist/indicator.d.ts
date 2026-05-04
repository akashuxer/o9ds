export type IndicatorVariant = 'unsaved' | 'new' | 'unread';
export type IndicatorSize = 'sm' | 'lg';
export interface IndicatorOptions {
    variant: IndicatorVariant;
    size?: IndicatorSize;
}
/**
 * Creates an indicator badge element for positioning at the top-right corner
 * of a parent container. The parent must have `position: relative`.
 */
export declare function createIndicator(options: IndicatorOptions): HTMLSpanElement;
/**
 * Updates an existing indicator element's variant and/or size.
 */
export declare function updateIndicator(el: HTMLElement, options: Partial<IndicatorOptions>): void;
/**
 * Removes an indicator element from the DOM and returns null for assignment cleanup.
 */
export declare function removeIndicator(el: HTMLElement | null): null;
//# sourceMappingURL=indicator.d.ts.map