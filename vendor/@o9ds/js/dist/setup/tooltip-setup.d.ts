import { TooltipManagerConfig } from '../../../core/src';
/**
 * Configures global tooltip behavior for the application.
 * Call once at startup alongside `setupOverlayPlugin`.
 *
 * ```ts
 * import { setupTooltips } from '@o9ds/js';
 * setupTooltips({ hoverDelay: 500, gap: 4 });
 * ```
 */
export declare function setupTooltips(config: Partial<TooltipManagerConfig>): void;
//# sourceMappingURL=tooltip-setup.d.ts.map