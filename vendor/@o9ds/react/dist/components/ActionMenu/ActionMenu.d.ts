import { ListItemBase, ListGroup } from '../../../../core/src';
import { O9PopoverAction } from '../Popover/Popover';
import { MenuSearchProp } from '../../types/menu-search';
export interface MenuTrailingAction {
    id: string;
    icon: string;
    ariaLabel?: string;
    isDisabled?: boolean;
    onClick?: (item: MenuItemData, event: React.MouseEvent) => boolean | void;
    inlinePopover?: MenuInlinePopoverConfig;
    inlineHybridPopover?: MenuInlineHybridPopoverConfig;
}
export interface MenuInlinePopoverConfig {
    title?: string;
    content: React.ReactNode;
    actions?: O9PopoverAction[];
    isClosable?: boolean;
    hasBackButton?: boolean;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onBack?: () => void;
}
export interface MenuInlineHybridPopoverConfig {
    title?: string;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onBack?: () => void;
}
export interface MenuItemData extends ListItemBase {
    shortcut?: string;
    destructive?: boolean;
    active?: boolean;
    submenu?: MenuItemData[];
    trailingActions?: MenuTrailingAction[];
    inlinePopover?: MenuInlinePopoverConfig;
    inlineHybridPopover?: MenuInlineHybridPopoverConfig;
}
export interface O9ActionMenuProps {
    items: MenuItemData[] | ListGroup<MenuItemData>[];
    isLoading?: boolean;
    /** Enable search with defaults (`true`) or pass a config object. */
    search?: MenuSearchProp;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end' | 'auto';
    maxHeight?: string;
    size?: 'sm' | 'md';
    hasGroupDividers?: boolean;
    trailingActionsVisibility?: 'always' | 'hover';
    submenuTrigger?: 'hover' | 'click';
    closeOnSelect?: boolean;
    isOpen?: boolean;
    defaultOpen?: boolean;
    isDisabled?: boolean;
    trigger: React.ReactElement;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onSelect?: (item: MenuItemData, index: number) => boolean | void;
    onOpenChange?: (isOpen: boolean) => void;
    className?: string;
}
declare const O9ActionMenu: import('react').ForwardRefExoticComponent<O9ActionMenuProps & import('react').RefAttributes<HTMLDivElement>>;
export { O9ActionMenu };
export default O9ActionMenu;
//# sourceMappingURL=ActionMenu.d.ts.map