import { ListItemBase, ListGroup } from '../../../../core/src';
import { MenuSearchProp } from '../../types/menu-search';
export interface ListboxOptionData extends ListItemBase {
    value: unknown;
}
export interface O9ListboxProps {
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
declare const O9Listbox: import('react').ForwardRefExoticComponent<O9ListboxProps & import('react').RefAttributes<HTMLDivElement>>;
export { O9Listbox };
export default O9Listbox;
//# sourceMappingURL=Listbox.d.ts.map