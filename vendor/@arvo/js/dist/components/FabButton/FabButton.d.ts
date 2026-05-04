import { IndicatorVariant, IndicatorSize } from '../../../../utils/src';
export type FabButtonVariant = 'primary' | 'secondary';
export interface ArvoFabButtonOptions {
    variant?: FabButtonVariant;
    icon?: string;
    label?: string | null;
    isDisabled?: boolean;
    isLoading?: boolean;
    indicator?: IndicatorVariant | false;
    indicatorSize?: IndicatorSize;
    zIndex?: number | null;
    tooltip?: string;
    onClick?: (event: Event) => void;
    onFocus?: (event: FocusEvent) => void;
    onBlur?: (event: FocusEvent) => void;
}
type ResolvedOptions = {
    variant: FabButtonVariant;
    icon: string;
    label: string | null;
    isDisabled: boolean;
    isLoading: boolean;
    indicator: IndicatorVariant | false;
    indicatorSize: IndicatorSize;
    zIndex: number | null;
    tooltip: string | null;
    onClick: ((event: Event) => void) | null;
    onFocus: ((event: FocusEvent) => void) | null;
    onBlur: ((event: FocusEvent) => void) | null;
};
export declare class ArvoFabButton {
    private _container;
    private _wrapperEl;
    private _buttonEl;
    private _innerButton;
    private _indicatorEl;
    private _options;
    static readonly VARIANTS: readonly FabButtonVariant[];
    static readonly DEFAULTS: ResolvedOptions;
    static initialize(element: HTMLElement, options?: ArvoFabButtonOptions): ArvoFabButton;
    constructor(element: HTMLElement, options?: ArvoFabButtonOptions);
    private _render;
    private _applyWrapperClasses;
    private _applyZIndex;
    private _createInnerButton;
    private _destroyInnerButton;
    private _createIndicator;
    private _syncIndicatorVisibility;
    setVariant(variant: string): void;
    setIcon(iconName: string): void;
    setLabel(label: string | null): void;
    setIndicator(variant: IndicatorVariant | false): void;
    setIndicatorSize(size: IndicatorSize): void;
    setZIndex(zIndex: number | null): void;
    disabled(state?: boolean): boolean | void;
    setLoading(isLoading: boolean): void;
    focus(): void;
    destroy(): void;
    private _dispatchEvent;
}
export {};
//# sourceMappingURL=FabButton.d.ts.map