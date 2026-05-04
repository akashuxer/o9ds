import { TooltipPlacement } from '../../../../core/src';
export type ButtonTooltipOption = string | {
    content: string;
    placement?: TooltipPlacement;
    shortcut?: string;
};
export interface ArvoButtonOptions {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    label?: string;
    icon?: string | null;
    isDisabled?: boolean;
    isSelected?: boolean;
    isFullWidth?: boolean;
    isLoading?: boolean;
    tooltip?: ButtonTooltipOption;
    onClick?: (event: Event) => void;
}
type RequiredButtonOptions = Required<Omit<ArvoButtonOptions, 'onClick' | 'tooltip' | 'icon' | 'isSelected'>> & {
    icon: string | null;
    tooltip: ButtonTooltipOption | null;
    onClick: ((event: Event) => void) | null;
    isSelected: boolean | undefined;
};
export declare class ArvoButton {
    private _element;
    private _options;
    private _iconEl;
    private _labelEl;
    private _originalContent;
    private _boundHandleClick;
    private _boundHandleKeydown;
    private _tooltipConnector;
    static readonly VARIANTS: readonly ["primary", "secondary", "tertiary", "outline", "danger"];
    static readonly SIZES: readonly ["sm", "md", "lg"];
    static readonly DEFAULTS: RequiredButtonOptions;
    static initialize(element: HTMLButtonElement, options?: ArvoButtonOptions): ArvoButton;
    constructor(element: HTMLButtonElement, options?: ArvoButtonOptions);
    private _connectTooltip;
    private _render;
    private _createIconEl;
    private _bindEvents;
    private _handleClick;
    private _handleKeydown;
    private _dispatchEvent;
    setLabel(text: string): void;
    setIcon(iconName: string | null): void;
    setVariant(variant: string): void;
    setSize(size: string): void;
    setLoading(isLoading: boolean): void;
    selected(state?: boolean): boolean | void;
    disabled(state?: boolean): boolean | void;
    focus(): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=Button.d.ts.map