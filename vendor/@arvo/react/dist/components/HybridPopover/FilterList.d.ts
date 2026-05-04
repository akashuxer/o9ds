import { FilterOptionSelectionKind } from './FilterOption';
import { HybridPopoverGroup, HybridPopoverItem } from './HybridPopover';
export interface FilterListProps {
    items: HybridPopoverItem[] | HybridPopoverGroup[];
    isGrouped: boolean;
    selection: FilterOptionSelectionKind;
    draftValue: string[] | string | null;
    enableReorder: boolean;
    hasGlobalSelectAll: boolean;
    hasAnyDragHandle: boolean;
    radioName?: string;
    ariaLabel?: string;
    onToggleItem: (item: HybridPopoverItem) => void;
    onToggleGroupSelectAll?: (group: HybridPopoverGroup) => void;
    onToggleGlobalSelectAll?: () => void;
    onInline?: (item: HybridPopoverItem) => void;
}
declare const FilterList: import('react').ForwardRefExoticComponent<FilterListProps & import('react').RefAttributes<HTMLDivElement>>;
export default FilterList;
//# sourceMappingURL=FilterList.d.ts.map