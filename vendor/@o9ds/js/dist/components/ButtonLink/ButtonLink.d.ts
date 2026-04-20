import { TooltipPlacement } from '../../../../core/src';
export type ButtonLinkTooltipOption = string | {
    content: string;
    placement?: TooltipPlacement;
    shortcut?: string;
};
export interface O9ButtonLinkOptions {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    label?: string;
    href?: string;
    target?: string;
    icon?: string | null;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isLoading?: boolean;
    tooltip?: ButtonLinkTooltipOption;
    onClick?: (event: Event) => void;
}
type RequiredButtonLinkOptions = Required<Omit<O9ButtonLinkOptions, 'onClick' | 'icon' | 'target' | 'tooltip'>> & {
    icon: string | null;
    target: string | null;
    tooltip: ButtonLinkTooltipOption | null;
    onClick: ((event: Event) => void) | null;
};
export declare class O9ButtonLink {
    private _element;
    private _options;
    private _iconEl;
    private _labelEl;
    private _originalHref;
    private _originalContent;
    private _tooltipConnector;
    private _boundHandleClick;
    static readonly VARIANTS: readonly ["primary", "secondary", "tertiary", "outline", "danger"];
    static readonly SIZES: readonly ["sm", "md", "lg"];
    static readonly DEFAULTS: RequiredButtonLinkOptions;
    static initialize(element: HTMLAnchorElement, options?: O9ButtonLinkOptions): O9ButtonLink;
    constructor(element: HTMLAnchorElement, options?: O9ButtonLinkOptions);
    private _connectTooltip;
    private _render;
    private _createIconEl;
    private _applyHref;
    private _applyTarget;
    private _applyDisabled;
    private _bindEvents;
    private _handleClick;
    private _dispatchEvent;
    setLabel(text: string): void;
    setHref(href: string): void;
    setIcon(iconName: string | null): void;
    setVariant(variant: string): void;
    setSize(size: string): void;
    setLoading(isLoading: boolean): void;
    disabled(state?: boolean): boolean | void;
    focus(): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=ButtonLink.d.ts.map