import { ListItemBase, ListGroup } from '../../../../core/src';
import { MenuSearchProp } from '../../types/menu-search';
export interface SelectOptionData extends ListItemBase {
    value: unknown;
}
export interface ArvoSelectProps {
    items: SelectOptionData[] | ListGroup<SelectOptionData>[];
    value?: unknown;
    defaultValue?: unknown;
    placeholder?: string;
    label?: string;
    isDisabled?: boolean;
    isRequired?: boolean;
    isInvalid?: boolean;
    errorMsg?: string;
    errorDisplay?: 'inline' | 'tooltip' | 'none';
    size?: 'sm' | 'lg';
    /** Enable search with defaults (`true`) or pass a config object. */
    search?: MenuSearchProp;
    isLoading?: boolean;
    isReadOnly?: boolean;
    width?: string;
    isFullWidth?: boolean;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'auto';
    maxHeight?: string;
    hasGroupDividers?: boolean;
    closeOnSelect?: boolean;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onChange?: (item: SelectOptionData | null, index: number) => boolean | void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onOpenChange?: (isOpen: boolean) => void;
    className?: string;
}
declare const ArvoSelect: import('react').ForwardRefExoticComponent<ArvoSelectProps & import('react').RefAttributes<HTMLDivElement>>;
export { ArvoSelect };
export default ArvoSelect;
//# sourceMappingURL=Select.d.ts.map