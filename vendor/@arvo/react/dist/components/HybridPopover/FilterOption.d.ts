import { HybridPopoverItem } from './HybridPopover';
export type FilterOptionSelectionKind = 'multi' | 'single' | 'none';
export interface FilterOptionProps {
    item: HybridPopoverItem;
    selection: FilterOptionSelectionKind;
    isChecked: boolean;
    isDisabled?: boolean;
    /** Whether at least one item in the list has a drag handle (so a spacer aligns rows). */
    hasAnyDragHandle: boolean;
    /** Whether reorder is enabled and this row should render its drag handle. */
    isDraggable: boolean;
    /** Group id this option belongs to, exposed via data-group for the DnD adapter. */
    groupId: string | null;
    /** Shared name for radios in single mode (typically the panel id). */
    radioName?: string;
    onToggle: (item: HybridPopoverItem) => void;
    onInline?: (item: HybridPopoverItem) => void;
}
export declare function FilterOption({ item, selection, isChecked, isDisabled, hasAnyDragHandle, isDraggable, groupId, radioName, onToggle, onInline, }: FilterOptionProps): import("react/jsx-runtime").JSX.Element;
export default FilterOption;
//# sourceMappingURL=FilterOption.d.ts.map