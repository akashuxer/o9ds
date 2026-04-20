export interface O9CheckboxOptions {
    label?: string | null;
    isChecked?: boolean;
    isIndeterminate?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    isExcluded?: boolean;
    size?: 'sm' | 'lg';
    value?: string;
    name?: string;
    errorMsg?: string | null;
    isInlineError?: boolean;
    isLoading?: boolean;
    onChange?: (detail: {
        isChecked: boolean;
        value: string;
    }) => void;
    onFocus?: (event: Event) => void;
    onBlur?: (event: Event) => void;
}
type RequiredCheckboxOptions = Required<Omit<O9CheckboxOptions, 'onChange' | 'onFocus' | 'onBlur' | 'name' | 'label' | 'errorMsg'>> & {
    label: string | null;
    errorMsg: string | null;
    name: string | undefined;
    onChange: ((detail: {
        isChecked: boolean;
        value: string;
    }) => void) | null;
    onFocus: ((event: Event) => void) | null;
    onBlur: ((event: Event) => void) | null;
};
export declare class O9Checkbox {
    private _element;
    private _options;
    private _inputEl;
    private _fieldEl;
    private _labelEl;
    private _inlineAlertEl;
    private _inputId;
    private _errorId;
    private _boundHandleChange;
    private _boundHandleFocus;
    private _boundHandleBlur;
    static readonly SIZES: readonly ["sm", "lg"];
    static readonly DEFAULTS: RequiredCheckboxOptions;
    static initialize(element: HTMLElement, options?: O9CheckboxOptions): O9Checkbox;
    constructor(element: HTMLElement, options?: O9CheckboxOptions);
    private _render;
    private _bindEvents;
    private _handleChange;
    private _handleFocus;
    private _handleBlur;
    private _syncCheckedState;
    private _dispatchEvent;
    toggle(force?: boolean): void;
    checked(): boolean;
    indeterminate(state?: boolean): boolean | void;
    excluded(state?: boolean): boolean | void;
    setLabel(label: string | null): void;
    disabled(state?: boolean): boolean | void;
    readonly(state?: boolean): boolean | void;
    setError(messageOrFalse: string | false): void;
    setLoading(isLoading: boolean): void;
    value(): string;
    destroy(): void;
}
export {};
//# sourceMappingURL=Checkbox.d.ts.map