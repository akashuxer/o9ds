import { ListItemBase, ListGroup } from '../../../../core/src';
import { MenuSearchProp } from '../../types/menu-search';
export interface ListboxOptionData extends ListItemBase {
    value: unknown;
}
export interface ArvoListboxProps {
    items: ListboxOptionData[] | ListGroup<ListboxOptionData>[];
    value?: unknown | unknown[];
    defaultValue?: unknown | unknown[];
    label?: string;
    isMultiple?: boolean;
    /** Enable search with defaults (`true`) or pass a config object. */
    search?: MenuSearchProp;
    isLoading?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    emptyMessage?: string;
    hasGroupDividers?: boolean;
    size?: 'sm' | 'md' | 'lg';
    onChange?: (value: unknown | unknown[], option: ListboxOptionData) => void;
    onHighlight?: (value: unknown, option: ListboxOptionData) => void;
    onFilter?: (query: string, matchCount: number) => void;
    className?: string;
}
declare const ArvoListbox: import('react').ForwardRefExoticComponent<ArvoListboxProps & import('react').RefAttributes<HTMLDivElement>>;
export { ArvoListbox };
export default ArvoListbox;
//# sourceMappingURL=Listbox.d.ts.map