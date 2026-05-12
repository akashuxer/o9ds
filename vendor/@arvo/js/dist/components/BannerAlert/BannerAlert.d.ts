/**
 * ArvoBannerAlert -- vanilla JS implementation.
 *
 * Persistent inline alert banner with full parity to the React version at
 * packages/react/src/components/BannerAlert/BannerAlert.tsx. Six semantic
 * types (positive, info, neutral, warning, negative, block) drive border
 * color, background tint, title/icon color, and icon glyph. Two layout
 * modes: default (title + multi-line message + optional link) and compact
 * (message only, tighter padding). Optionally dismissible via a 16x16
 * `ArvoIconButton` close affordance (variant="tertiary", size="xs") wired
 * through the `arvo-bnr-alert__close` BEM class -- positioning is handled
 * by the SCSS, the chrome (background, border, focus, icon glyph) comes
 * from the icon-button system. The component does NOT auto-remove itself
 * on dismiss -- it fires `bnr-alert:dismiss` and calls onDismiss; the
 * consumer owns the lifecycle.
 *
 * See descriptors/banner-alert.json for the full spec.
 */
export type ArvoBannerAlertType = 'positive' | 'info' | 'neutral' | 'warning' | 'negative' | 'block';
export type ArvoBannerAlertRole = 'status' | 'alert';
export interface ArvoBannerAlertOptions {
    /** Body message text. Required. */
    message: string;
    /** Semantic alert type. Defaults to "info". */
    type?: ArvoBannerAlertType;
    /** Optional title rendered above the message. Ignored in compact mode. */
    title?: string | null;
    /** Layout mode. When true, renders only the message with tighter padding. */
    isCompact?: boolean;
    /** Whether to render the close button on the right. Defaults to true. */
    isDismissible?: boolean;
    /** Optional link element rendered below the message in default mode. */
    link?: HTMLElement | null;
    /** Pattern A shimmer loading state. */
    isLoading?: boolean;
    /** Explicit ARIA role override. Defaults to type-derived role. */
    role?: ArvoBannerAlertRole;
    /** Fired when the close button is clicked or dismiss() is called. */
    onDismiss?: () => void;
}
export declare class ArvoBannerAlert {
    private _root;
    private _iconEl;
    private _contentEl;
    private _copyEl;
    private _titleEl;
    private _msgEl;
    private _linkEl;
    private _closeEl;
    private _closeBtnInstance;
    private _options;
    private _currentType;
    private _isCompact;
    private _isDismissible;
    private _isLoading;
    private _userRoleOverride;
    private _addedRole;
    private _addedAriaBusy;
    private _destroyed;
    static initialize(element: HTMLElement, options: ArvoBannerAlertOptions): ArvoBannerAlert;
    constructor(element: HTMLElement, options: ArvoBannerAlertOptions);
    private _render;
    type(): ArvoBannerAlertType;
    type(newType: ArvoBannerAlertType): void;
    message(): string;
    message(text: string): void;
    title(): string | null;
    title(text: string | null): void;
    setLink(element: HTMLElement | null): void;
    loading(): boolean;
    loading(state: boolean): void;
    dismiss(): void;
    destroy(): void;
}
//# sourceMappingURL=BannerAlert.d.ts.map