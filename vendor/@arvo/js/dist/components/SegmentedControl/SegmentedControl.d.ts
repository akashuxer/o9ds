export interface SegmentedControlItem {
    value: string;
    label?: string;
    icon?: string;
    isDisabled?: boolean;
}
export interface SegmentedControlChangeDetail {
    value: string;
    previousValue: string | null;
}
export interface ArvoSegmentedControlOptions {
    items?: SegmentedControlItem[];
    value?: string | null;
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'lg';
    isIconOnly?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    ariaLabel: string;
    onChange?: (detail: SegmentedControlChangeDetail) => void;
}
type RequiredOptions = Required<Omit<ArvoSegmentedControlOptions, 'onChange' | 'items' | 'value'>> & {
    items: SegmentedControlItem[];
    value: string | null;
    onChange: ((detail: SegmentedControlChangeDetail) => void) | null;
};
export declare class ArvoSegmentedControl {
    private _element;
    private _options;
    private _optionEls;
    private _boundHandleClick;
    private _boundHandleKeydown;
    static readonly VARIANTS: readonly ["primary", "secondary"];
    static readonly SIZES: readonly ["sm", "lg"];
    static readonly DEFAULTS: RequiredOptions;
    static initialize(element: HTMLElement, options?: ArvoSegmentedControlOptions): ArvoSegmentedControl;
    constructor(element: HTMLElement, options?: ArvoSegmentedControlOptions);
    private _render;
    private _bindEvents;
    private _handleClick;
    private _handleKeydown;
    private _select;
    private _syncCheckedState;
    private _dispatchChange;
    value(): string | null;
    value(newValue: string): void;
    disabled(): boolean;
    disabled(state: boolean): void;
    setLoading(loading: boolean): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=SegmentedControl.d.ts.map