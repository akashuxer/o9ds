export interface O9SwitchOptions {
    label?: string | null;
    isChecked?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isRequired?: boolean;
    value?: string;
    name?: string;
    labelPosition?: 'end' | 'start';
    isLoading?: boolean;
    onChange?: (detail: {
        isChecked: boolean;
        value: string;
    }) => void;
    onFocus?: (event: Event) => void;
    onBlur?: (event: Event) => void;
}
type RequiredSwitchOptions = Required<Omit<O9SwitchOptions, 'onChange' | 'onFocus' | 'onBlur' | 'name' | 'label'>> & {
    label: string | null;
    name: string | undefined;
    onChange: ((detail: {
        isChecked: boolean;
        value: string;
    }) => void) | null;
    onFocus: ((event: Event) => void) | null;
    onBlur: ((event: Event) => void) | null;
};
export declare class O9Switch {
    private _element;
    private _options;
    private _inputEl;
    private _fieldEl;
    private _trackEl;
    private _labelEl;
    private _labelId;
    private _boundHandleChange;
    private _boundHandleKeyDown;
    private _boundHandleFocus;
    private _boundHandleBlur;
    static readonly DEFAULTS: RequiredSwitchOptions;
    static initialize(element: HTMLElement, options?: O9SwitchOptions): O9Switch;
    constructor(element: HTMLElement, options?: O9SwitchOptions);
    private _render;
    private _createLabelEl;
    private _bindEvents;
    private _handleChange;
    private _handleKeyDown;
    private _handleFocus;
    private _handleBlur;
    private _syncCheckedState;
    private _dispatchEvent;
    toggle(force?: boolean): void;
    checked(): boolean;
    disabled(state?: boolean): boolean | void;
    readonly(state?: boolean): boolean | void;
    setLabel(label: string | null): void;
    setLoading(isLoading: boolean): void;
    focus(): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=Switch.d.ts.map