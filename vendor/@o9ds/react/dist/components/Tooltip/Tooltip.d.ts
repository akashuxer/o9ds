import { ReactElement } from 'react';
import { TooltipPlacement } from '../../../../core/src';
export interface O9TooltipProps {
    /** Text content displayed in the tooltip */
    content: string;
    /** Preferred placement relative to the trigger element */
    placement?: TooltipPlacement;
    /** Keyboard shortcut hint displayed alongside the content */
    shortcut?: string;
    /** Single interactive child element that serves as the tooltip trigger */
    children: ReactElement;
}
/**
 * Standalone tooltip wrapper component. Wraps a single interactive child
 * and attaches tooltip behavior (hover/focus display, ARIA, positioning).
 *
 * ```tsx
 * <O9Tooltip content="Save document" shortcut="Ctrl+S">
 *   <button>Save</button>
 * </O9Tooltip>
 * ```
 */
export declare const O9Tooltip: import('react').ForwardRefExoticComponent<O9TooltipProps & import('react').RefAttributes<HTMLElement>>;
//# sourceMappingURL=Tooltip.d.ts.map