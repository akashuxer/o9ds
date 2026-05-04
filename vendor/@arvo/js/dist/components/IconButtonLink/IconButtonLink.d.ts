export interface ArvoIconButtonLinkOptions {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    icon?: string;
    href?: string;
    target?: string;
    tooltip?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    onClick?: (event: Event) => void;
}
type RequiredIconButtonLinkOptions = Required<Omit<ArvoIconButtonLinkOptions, 'onClick' | 'target'>> & {
    target: string | null;
    onClick: ((event: Event) => void) | null;
};
export declare class ArvoIconButtonLink {
    private _element;
    private _options;
    private _iconEl;
    private _originalHref;
    private _tooltipConnector;
    private _boundHandleClick;
    static readonly VARIANTS: readonly ["primary", "secondary", "tertiary", "outline", "danger"];
    static readonly SIZES: readonly ["xs", "sm", "md", "lg"];
    static readonly DEFAULTS: RequiredIconButtonLinkOptions;
    static initialize(element: HTMLAnchorElement, options?: ArvoIconButtonLinkOptions): ArvoIconButtonLink;
    constructor(element: HTMLAnchorElement, options?: ArvoIconButtonLinkOptions);
    private _connectTooltip;
    private _render;
    private _createIconEl;
    private _applyHref;
    private _applyTarget;
    private _applyDisabled;
    private _bindEvents;
    private _handleClick;
    private _dispatchEvent;
    setIcon(iconName: string): void;
    setHref(href: string): void;
    setTooltip(tooltip: string): void;
    setLoading(isLoading: boolean): void;
    disabled(state?: boolean): boolean | void;
    focus(): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=IconButtonLink.d.ts.map