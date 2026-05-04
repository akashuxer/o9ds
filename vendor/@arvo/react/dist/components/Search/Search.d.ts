export interface ArvoSearchProps {
    variant?: 'filter' | 'find';
    value?: string;
    defaultValue?: string;
    placeholder?: string;
    isDisabled?: boolean;
    isInvalid?: boolean;
    errorMsg?: string;
    errorDisplay?: 'inline' | 'tooltip' | 'none';
    isClearable?: boolean;
    shortcut?: string;
    counter?: {
        current: number;
        total: number;
    } | null;
    searchMode?: 'input' | 'submit';
    minChars?: number;
    isMultiLine?: boolean | {
        enabled: boolean;
        expandRows?: boolean;
        maxRows?: number;
        delimiter?: string;
    };
    isLoading?: boolean;
    width?: string;
    isFullWidth?: boolean;
    onSearch?: (value: string, values?: string[]) => void;
    onInput?: React.FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onChange?: (value: string) => void;
    onClear?: () => void;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onNext?: () => void;
    onPrevious?: () => void;
    className?: string;
    'aria-label'?: string;
}
declare const ArvoSearch: import('react').ForwardRefExoticComponent<ArvoSearchProps & import('react').RefAttributes<HTMLDivElement>>;
export default ArvoSearch;
//# sourceMappingURL=Search.d.ts.map