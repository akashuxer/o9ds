export type InlineAlertType = 'error' | 'success' | 'warning' | 'info' | 'neutral';
export interface InlineAlertOptions {
    type?: InlineAlertType;
    message?: string;
    id?: string;
}
/**
 * Creates an inline alert element with icon and optional message.
 * Used below form inputs for validation messages, and reusable in
 * any context that needs a compact icon + message status indicator.
 */
export declare function createInlineAlert(options?: InlineAlertOptions): HTMLDivElement;
/**
 * Updates an existing inline alert's message and/or type.
 */
export declare function updateInlineAlert(el: HTMLElement, options: Partial<InlineAlertOptions>): void;
/**
 * Returns the default error message used when no custom message is configured.
 */
export declare function getDefaultErrorMsg(): string;
export interface ErrorTooltipIconOptions {
    /** Tooltip text shown on hover and used for aria-describedby on the input. */
    tooltip?: string;
}
/**
 * Creates an error tooltip icon element for placement inside a form input field.
 * Hidden by default; made visible via CSS when the parent has `.has-error.error-tooltip`.
 */
export declare function createErrorTooltipIcon(options?: ErrorTooltipIconOptions): HTMLSpanElement;
/**
 * Updates the tooltip text on an error tooltip icon.
 */
export declare function updateErrorTooltipIcon(ico: HTMLSpanElement, tooltip: string): void;
//# sourceMappingURL=inline-alert.d.ts.map