import { MouseEvent as ReactMouseEvent, ReactNode, RefObject } from 'react';
import { Placement } from '../../../../core/src';
import { O9PopoverAction, O9PopoverHeaderAction } from '../Popover/Popover';
export declare const HPOP_MIN_WIDTH = 280;
export declare const HPOP_DEFAULT_WIDTH = 320;
export declare const HPOP_MAX_WIDTH = 500;
export declare const HPOP_MIN_HEIGHT = 272;
export interface HybridPopoverItem {
    id: string;
    label: string;
    secondaryLabel?: string;
    icon?: string;
    value?: unknown;
    isDisabled?: boolean;
    isExcluded?: boolean;
    isDraggable?: boolean;
    hasInline?: boolean | HybridPopoverItem[] | HybridPopoverInlineConfig;
    isIndeterminate?: boolean;
}
export interface HybridPopoverGroup {
    id: string;
    label?: string;
    isDraggable?: boolean;
    hasSelectAll?: boolean;
    items: HybridPopoverItem[];
}
export interface HybridPopoverSearchConfig {
    variant?: 'default' | 'filter-search';
    placeholder?: string;
    shortcut?: string;
    counter?: boolean;
}
export interface HybridPopoverConditionalConfig {
    value: 'and' | 'or';
    onChange: (value: 'and' | 'or') => void;
}
export interface HybridPopoverEmptyConfig {
    noDataTitle?: string;
    noDataMessage?: string;
    noResultsTitle?: string;
    noResultsMessage?: string;
    noResultsClearLabel?: string;
}
export interface HybridPopoverInlineConfig {
    title?: string;
    items?: HybridPopoverItem[] | HybridPopoverGroup[];
    variant?: 'multi' | 'single';
    hasBackButton?: boolean;
}
export interface HybridPopoverReorderDetail {
    fromIndex: number;
    toIndex: number;
    fromGroup: string | null;
    toGroup: string | null;
    items: HybridPopoverItem[] | HybridPopoverGroup[];
}
export interface HybridPopoverChangeMeta {
    item: HybridPopoverItem | null;
    action: 'toggle' | 'select-all' | 'group-select-all' | 'apply' | 'reset' | 'clear';
}
export interface O9HybridPopoverHandle {
    open: () => void;
    close: () => void;
    toggle: () => void;
    isOpen: () => boolean;
    value: (next?: string[] | string | null) => string[] | string | null | void;
    setLoading: (loading: boolean) => void;
    updateItems: (items: HybridPopoverItem[] | HybridPopoverGroup[]) => void;
    reposition: () => void;
}
export type HybridPopoverVariant = 'multi' | 'single' | 'boolean' | 'conditional' | 'custom';
export interface O9HybridPopoverProps {
    variant?: HybridPopoverVariant;
    selectionMode?: 'multi' | 'single' | 'none';
    items: HybridPopoverItem[] | HybridPopoverGroup[];
    value?: string[] | string | null;
    defaultValue?: string[] | string | null;
    onChange?: (value: string[] | string | null, meta: HybridPopoverChangeMeta) => void;
    commitOn?: 'apply' | 'change';
    search?: false | HybridPopoverSearchConfig;
    conditional?: false | HybridPopoverConditionalConfig;
    hasGlobalSelectAll?: boolean;
    enableReorder?: boolean;
    crossGroupDrag?: boolean;
    onReorder?: (detail: HybridPopoverReorderDetail) => void;
    emptyConfig?: HybridPopoverEmptyConfig;
    actions?: O9PopoverAction[] | false;
    isResizable?: boolean;
    width?: number;
    height?: number | null;
    onResize?: (detail: {
        width: number;
        height: number;
    }) => void;
    onResizeCommit?: (detail: {
        width: number;
        height: number;
    }) => void;
    title?: string | null;
    hasHeader?: boolean;
    isClosable?: boolean;
    hasBackButton?: boolean;
    onBack?: () => void;
    headerActions?: O9PopoverHeaderAction[];
    placement?: Placement | 'auto';
    offset?: number;
    closeOnOutside?: boolean;
    isLoading?: boolean;
    isOpen?: boolean | null;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    triggerRef?: RefObject<HTMLElement | null>;
    renderTrigger?: (props: {
        ref: RefObject<HTMLElement | null>;
        onClick?: (event: ReactMouseEvent) => void;
        'aria-expanded': boolean;
        'aria-controls': string;
        'aria-haspopup': 'dialog';
    }) => ReactNode;
    isInline?: boolean;
    parent?: string | null;
    onApply?: (value: string[] | string | null) => boolean | void;
    onCancel?: () => void;
    onReset?: () => void;
    className?: string;
}
declare const O9HybridPopover: import('react').ForwardRefExoticComponent<O9HybridPopoverProps & import('react').RefAttributes<O9HybridPopoverHandle>>;
export { O9HybridPopover };
export default O9HybridPopover;
//# sourceMappingURL=HybridPopover.d.ts.map