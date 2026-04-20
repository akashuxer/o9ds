import { TooltipPlacement, TooltipManager } from '../../../../core/src';
export interface O9TooltipOptions {
    /** Text content displayed in the tooltip */
    content: string;
    /** Preferred placement relative to the trigger element */
    placement?: TooltipPlacement;
    /** Keyboard shortcut hint displayed alongside the content */
    shortcut?: string;
}
/**
 * Vanilla JS tooltip component. Attaches tooltip behavior (hover/focus,
 * ARIA, positioning) to any DOM element.
 *
 * ```ts
 * const tip = O9Tooltip.initialize(triggerEl, { content: 'Save' });
 * tip.destroy();
 * ```
 */
export declare class O9Tooltip {
    private _connector;
    private _element;
    static readonly DEFAULTS: Partial<O9TooltipOptions>;
    private constructor();
    static initialize(element: HTMLElement, options: O9TooltipOptions, manager?: TooltipManager): O9Tooltip;
    update(options: Partial<O9TooltipOptions>): void;
    destroy(): void;
    get element(): HTMLElement;
}
//# sourceMappingURL=Tooltip.d.ts.map