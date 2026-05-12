export interface FormLabelOptions {
    text: string;
    /** `for` attribute applied when rendered as a `<label>`. */
    for?: string;
    /** Render as `<span>` for inner-caption use inside a wrapping `<label>` (selection controls). Defaults to `<label>`. */
    as?: 'label' | 'span';
    isRequired?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
}
/**
 * Builds the shared `arvo-form-lbl` element.
 *
 * Defaults to `<label>` for sibling-association form fields. Pass `as: 'span'`
 * to render the same primitive as a `<span>` for selection controls (Radio,
 * Switch, Checkbox) where the visible caption is nested inside an outer
 * structural `<label>`.
 *
 * The required indicator is a separate `<span>` with `aria-hidden` so screen
 * readers rely on `aria-required` on the input instead of the visual asterisk.
 */
export declare function createFormLabel(options: FormLabelOptions & {
    as: 'span';
}): HTMLSpanElement;
export declare function createFormLabel(options: FormLabelOptions & {
    as?: 'label';
}): HTMLLabelElement;
export declare function createFormLabel(options: FormLabelOptions): HTMLLabelElement | HTMLSpanElement;
//# sourceMappingURL=form-label.d.ts.map