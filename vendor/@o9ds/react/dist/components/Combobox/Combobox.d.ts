import { ListItemBase, ListGroup } from '../../../../core/src';
export interface ComboboxOptionData extends ListItemBase {
    value: unknown;
}
export interface O9ComboboxProps {
    items: ComboboxOptionData[] | ListGroup<ComboboxOptionData>[];
    value?: unknown;
    defaultValue?: unknown;
    inputValue?: string;
    placeholder?: string;
    label?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    errorMsg?: string;
    isInlineError?: boolean;
    size?: 'sm' | 'lg';
    isClearable?: boolean;
    isLoading?: boolean;
    isReadOnly?: boolean;
    isFullWidth?: boolean;
    width?: string;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'auto';
    maxHeight?: string;
    hasGroupDividers?: boolean;
    filterFn?: (item: ComboboxOptionData, query: string) => boolean;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onChange?: (item: ComboboxOptionData, index: number) => boolean | void;
    onInputChange?: (value: string) => void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onClear?: (detail: {
        previousValue: unknown;
    }) => void;
    onOpenChange?: (isOpen: boolean) => void;
    className?: string;
}
declare const O9Combobox: import('react').ForwardRefExoticComponent<O9ComboboxProps & import('react').RefAttributes<HTMLDivElement>>;
export { O9Combobox };
export default O9Combobox;
//# sourceMappingURL=Combobox.d.ts.map