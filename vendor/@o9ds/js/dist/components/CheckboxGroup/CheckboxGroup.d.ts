export interface CheckboxGroupItem {
    value: string;
    label: string;
    isChecked?: boolean;
    isDisabled?: boolean;
    isExcluded?: boolean;
}
export interface O9CheckboxGroupOptions {
    label?: string | null;
    hasSelectAll?: boolean;
    orientation?: 'vertical' | 'horizontal';
    labelPosition?: 'top' | 'start';
    size?: 'sm' | 'lg';
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    errorMsg?: string | null;
    isLoading?: boolean;
    name?: string;
    items?: CheckboxGroupItem[];
    onChange?: (detail: {
        values: string[];
        allChecked: boolean;
    }) => void;
}
type RequiredGroupOptions = Required<Omit<O9CheckboxGroupOptions, 'onChange' | 'name' | 'label' | 'errorMsg' | 'items'>> & {
    label: string | null;
    errorMsg: string | null;
    name: string | undefined;
    items: CheckboxGroupItem[];
    onChange: ((detail: {
        values: string[];
        allChecked: boolean;
    }) => void) | null;
};
export declare class O9CheckboxGroup {
    private _element;
    private _options;
    private _labelEl;
    private _bdyEl;
    private _itemsEl;
    private _inlineAlertEl;
    private _selectAllInstance;
    private _selectAllEl;
    private _childInstances;
    private _childStateMap;
    private _batchUpdate;
    private _labelId;
    private _errorId;
    private _boundHandleItemChange;
    static readonly SIZES: readonly ["sm", "lg"];
    static readonly DEFAULTS: RequiredGroupOptions;
    static initialize(element: HTMLElement, options?: O9CheckboxGroupOptions): O9CheckboxGroup;
    constructor(element: HTMLElement, options?: O9CheckboxGroupOptions);
    private _render;
    private _bindEvents;
    private _handleItemChange;
    private _handleSelectAllChange;
    private _checkAllChildren;
    private _uncheckAllChildren;
    private _syncSelectAllState;
    private _fireChange;
    private _dispatchEvent;
    values(): string[];
    values(newValues: string[]): void;
    toggleAll(force?: boolean): void;
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
//# sourceMappingURL=CheckboxGroup.d.ts.map