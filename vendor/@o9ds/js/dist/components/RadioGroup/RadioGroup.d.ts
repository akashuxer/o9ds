export interface RadioGroupItem {
    value: string;
    label: string;
    isChecked?: boolean;
    isDisabled?: boolean;
}
export interface O9RadioGroupOptions {
    name: string;
    label?: string | null;
    orientation?: 'vertical' | 'horizontal';
    labelPosition?: 'top' | 'start';
    size?: 'sm' | 'lg';
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    errorMsg?: string | null;
    isLoading?: boolean;
    value?: string | null;
    items?: RadioGroupItem[];
    onChange?: (detail: {
        value: string;
        previousValue: string | null;
    }) => void;
}
type RequiredGroupOptions = Required<Omit<O9RadioGroupOptions, 'onChange' | 'label' | 'errorMsg' | 'items' | 'value'>> & {
    label: string | null;
    errorMsg: string | null;
    value: string | null;
    items: RadioGroupItem[];
    onChange: ((detail: {
        value: string;
        previousValue: string | null;
    }) => void) | null;
};
export declare class O9RadioGroup {
    private _element;
    private _options;
    private _labelEl;
    private _bdyEl;
    private _itemsEl;
    private _inlineAlertEl;
    private _childInstances;
    private _childItemEls;
    private _labelId;
    private _errorId;
    private _boundHandleItemChange;
    private _boundHandleKeydown;
    static readonly SIZES: readonly ["sm", "lg"];
    static readonly DEFAULTS: RequiredGroupOptions;
    static initialize(element: HTMLElement, options?: O9RadioGroupOptions): O9RadioGroup;
    constructor(element: HTMLElement, options?: O9RadioGroupOptions);
    private _render;
    private _bindEvents;
    private _handleItemChange;
    private _handleKeydown;
    private _syncRovingTabindex;
    private _dispatchEvent;
    value(): string | null;
    value(newValue: string): void;
    disabled(): boolean;
    disabled(state: boolean): void;
    readonly(): boolean;
    readonly(state: boolean): void;
    setError(msgOrFalse: string | false): void;
    setLoading(isLoading: boolean): void;
    setLabel(label: string | null): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=RadioGroup.d.ts.map