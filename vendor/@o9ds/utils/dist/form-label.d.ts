export interface FormLabelOptions {
    text: string;
    isRequired?: boolean;
    for?: string;
}
/**
 * Creates a <label> element with correct BEM class and accessible markup.
 * The consuming component inserts it before its field element.
 *
 * Required indicator is a separate <span> with aria-hidden so screen readers
 * rely on aria-required on the input instead of the visual asterisk.
 */
export declare function createFormLabel(options: FormLabelOptions): HTMLLabelElement;
/**
 * Updates an existing label's text and/or required state without re-creating it.
 */
export declare function updateFormLabel(label: HTMLLabelElement, options: Partial<FormLabelOptions>): void;
//# sourceMappingURL=form-label.d.ts.map