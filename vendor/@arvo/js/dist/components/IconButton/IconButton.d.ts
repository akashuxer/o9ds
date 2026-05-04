import { TooltipPlacement } from '../../../../core/src';
export type IconButtonTooltipOption = string | {
    content: string;
    placement?: TooltipPlacement;
    shortcut?: string;
};
export interface ArvoIconButtonOptions {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    icon?: string;
    tooltip?: IconButtonTooltipOption;
    isDisabled?: boolean;
    isSelected?: boolean;
    isLoading?: boolean;
    onClick?: (event: Event) => void;
    onKeyDown?: (event: KeyboardEvent) => void;
}
type RequiredIconButtonOptions = Required<Omit<ArvoIconButtonOptions, 'onClick' | 'onKeyDown' | 'isSelected'>> & {
    onClick: ((event: Event) => void) | null;
    onKeyDown: ((event: KeyboardEvent) => void) | null;
    isSelected: boolean | undefined;
};
export declare class ArvoIconButton {
    private _element;
    private _options;
    private _iconEl;
    private _boundHandleClick;
    private _boundHandleKeydown;
    private _tooltipConnector;
    static readonly VARIANTS: readonly ["primary", "secondary", "tertiary", "outline", "danger"];
    static readonly SIZES: readonly ["xs", "sm", "md", "lg"];
    static readonly DEFAULTS: RequiredIconButtonOptions;
    static initialize(element: HTMLButtonElement, options?: ArvoIconButtonOptions): ArvoIconButton;
    constructor(element: HTMLButtonElement, options?: ArvoIconButtonOptions);
    private _connectTooltip;
    private _render;
    private _createIconEl;
    private _bindEvents;
    private _handleClick;
    private _handleKeydown;
    private _dispatchEvent;
    setIcon(iconName: string): void;
    setTooltip(tooltip: string): void;
    setVariant(variant: string): void;
    setSize(size: string): void;
    setLoading(isLoading: boolean): void;
    selected(state?: boolean): boolean | void;
    disabled(state?: boolean): boolean | void;
    focus(): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=IconButton.d.ts.map