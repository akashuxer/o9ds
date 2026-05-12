import { ListGroup } from '../../../../core/src';
import { MenuItemData } from '../ActionMenu/ActionMenu';
import { TooltipProp } from '../../hooks/useTooltip';
import { MenuSearchProp } from '../../types/menu-search';
export interface ArvoSplitIconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type' | 'onSelect'> {
    icon: string;
    /**
     * Tooltip content for the action segment. Required because the action is
     * icon-only -- the value also drives `aria-label`.
     */
    tooltip: TooltipProp;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    isDisabled?: boolean;
    isActionDisabled?: boolean;
    isTriggerDisabled?: boolean;
    isLoading?: boolean;
    items: MenuItemData[] | ListGroup<MenuItemData>[];
    /** Enable search with defaults (`true`) or pass a config object. */
    search?: MenuSearchProp;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    maxHeight?: string;
    hasGroupDividers?: boolean;
    closeOnSelect?: boolean;
    /**
     * Accessible name for the trigger (caret) segment, exposed via aria-label.
     * Default: "Show options". Consumers should pass something contextual like
     * "Filter options" or "Sort options".
     */
    triggerLabel?: string;
    onAction?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    onSelect?: (item: MenuItemData, index: number) => boolean | void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onOpenChange?: (isOpen: boolean) => void;
}
declare const ArvoSplitIconButton: import('react').ForwardRefExoticComponent<ArvoSplitIconButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ArvoSplitIconButton;
//# sourceMappingURL=SplitIconButton.d.ts.map