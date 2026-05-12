import { default as React } from 'react';
interface BaseFormLabelProps {
    children: React.ReactNode;
    size?: 'sm' | 'lg';
    isRequired?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    /** Custom node rendered in place of the default `*` required indicator. */
    requiredIndicator?: React.ReactNode;
}
export interface ArvoFormLabelProps extends BaseFormLabelProps, Omit<React.LabelHTMLAttributes<HTMLLabelElement>, 'children'> {
}
export declare const ArvoFormLabel: React.ForwardRefExoticComponent<ArvoFormLabelProps & React.RefAttributes<HTMLLabelElement>>;
export interface ArvoFormLabelTextProps extends BaseFormLabelProps, Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
}
export declare const ArvoFormLabelText: React.ForwardRefExoticComponent<ArvoFormLabelTextProps & React.RefAttributes<HTMLSpanElement>>;
export declare const FormLabel: React.ForwardRefExoticComponent<ArvoFormLabelProps & React.RefAttributes<HTMLLabelElement>>;
export declare const FormLabelText: React.ForwardRefExoticComponent<ArvoFormLabelTextProps & React.RefAttributes<HTMLSpanElement>>;
export {};
//# sourceMappingURL=FormLabel.d.ts.map