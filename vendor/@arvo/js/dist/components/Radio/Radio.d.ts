export interface ArvoRadioOptions {
    value: string;
    name: string;
    label?: string | null;
    isChecked?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    isReadOnly?: boolean;
    isInvalid?: boolean;
    isLoading?: boolean;
    size?: 'sm' | 'lg';
    errorMsg?: string | null;
    onChange?: (detail: {
        value: string;
        name: string;
    }) => void;
    onFocus?: (event: Event) => void;
    onBlur?: (event: Event) => void;
}
type RequiredRadioOptions = Required<Omit<ArvoRadioOptions, 'onChange' | 'onFocus' | 'onBlur'>> & {
    onChange: ((detail: {
        value: string;
        name: string;
    }) => void) | null;
    onFocus: ((event: Event) => void) | null;
    onBlur: ((event: Event) => void) | null;
};
export declare class ArvoRadio {
    private _element;
    private _options;
    private _inputEl;
    private _fieldEl;
    private _controlEl;
    private _textEl;
    private _inlineAlertEl;
    private _inputId;
    private _errorId;
    private _boundHandleChange;
    private _boundHandleFocus;
    private _boundHandleBlur;
    private _boundHandleKeydown;
    static readonly DEFAULTS: RequiredRadioOptions;
    static initialize(element: HTMLElement, options?: ArvoRadioOptions): ArvoRadio;
    constructor(element: HTMLElement, options?: ArvoRadioOptions);
    private _render;
    private _bindEvents;
    private _handleChange;
    private _handleFocus;
    private _handleBlur;
    private _handleKeydown;
    private _getGroupInputs;
    private _syncCheckedState;
    private _dispatchEvent;
    private _renderInlineAlert;
    private _removeInlineAlert;
    value(): string;
    select(): void;
    deselect(): void;
    checked(): boolean;
    setTabIndex(index: number): void;
    disabled(state?: boolean): boolean | void;
    readonly(state?: boolean): boolean | void;
    setLabel(label: string | null): void;
    setError(messageOrFalse: string | false): void;
    setLoading(isLoading: boolean): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=Radio.d.ts.map