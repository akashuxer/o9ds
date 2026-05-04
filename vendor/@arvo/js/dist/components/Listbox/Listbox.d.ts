import { ListItemBase, ListGroup } from '../../../../core/src';
import { MenuSearchProp } from '../../types/menu-search';
export interface ListboxOptionData extends ListItemBase {
    value: unknown;
}
export interface ArvoListboxOptions {
    items: ListboxOptionData[] | ListGroup<ListboxOptionData>[];
    value?: unknown | unknown[];
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
    onChange?: (detail: {
        value: unknown;
        option: ListboxOptionData;
        isSelected: boolean;
    }) => void;
    onHighlight?: (detail: {
        value: unknown;
        option: ListboxOptionData;
    }) => void;
    onFilter?: (detail: {
        query: string;
        matchCount: number;
    }) => void;
}
type RequiredListboxOptions = Required<Omit<ArvoListboxOptions, 'onChange' | 'onHighlight' | 'onFilter' | 'value' | 'search'>> & {
    search: MenuSearchProp | undefined;
    value: unknown | unknown[] | null;
    onChange: ((detail: {
        value: unknown;
        option: ListboxOptionData;
        isSelected: boolean;
    }) => void) | null;
    onHighlight: ((detail: {
        value: unknown;
        option: ListboxOptionData;
    }) => void) | null;
    onFilter: ((detail: {
        query: string;
        matchCount: number;
    }) => void) | null;
};
export declare class ArvoListbox {
    private _element;
    private _options;
    private _id;
    private _listEl;
    private _searchEl;
    private _searchInstance;
    private _skeletonEl;
    private _emptyEl;
    private _labelEl;
    private _searchCfg;
    private _selection;
    private _highlightedIndex;
    private _flatOptions;
    private _query;
    private _arrowNav;
    private _optionEls;
    static readonly DEFAULTS: RequiredListboxOptions;
    static initialize(element: HTMLElement, options: ArvoListboxOptions): ArvoListbox;
    constructor(element: HTMLElement, options: ArvoListboxOptions);
    private _initSelection;
    private _isSelected;
    private _render;
    private _applyClasses;
    private _buildOptions;
    private _createOptionEl;
    private _renderSkeleton;
    private _renderEmpty;
    private _clearListContent;
    private _getFilteredItems;
    private _setupKeyboard;
    private _handleKeyDown;
    private _handleFilterSearch;
    private _handleFilterClear;
    private _updateSearchCounter;
    private _handleListClick;
    private _handleListMouseOver;
    private _highlightOption;
    private _selectOption;
    private _updateAriaSelected;
    value(newValue?: unknown | unknown[]): unknown | unknown[] | null | void;
    updateItems(items: ListboxOptionData[] | ListGroup<ListboxOptionData>[]): void;
    highlightOption(optValue: unknown): void;
    getHighlightedOption(): {
        value: unknown;
        label: string;
    } | null;
    clear(): void;
    filter(query: string): void;
    clearFilter(): void;
    disabled(state?: boolean): boolean | void;
    setLoading(isLoading: boolean): void;
    scrollToOption(optValue: unknown): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=Listbox.d.ts.map