import { ListGroup } from '../../../../core/src';
import { MenuItemData } from '../ActionMenu/ActionMenu';
import { TooltipProp } from '../../hooks/useTooltip';
import { MenuSearchProp } from '../../types/menu-search';
export interface ArvoDropdownIconButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type' | 'onSelect'> {
    icon: string;
    tooltip: TooltipProp;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    isCompact?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    items: MenuItemData[] | ListGroup<MenuItemData>[];
    /** Enable search with defaults (`true`) or pass a config object. */
    search?: MenuSearchProp;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    maxHeight?: string;
    hasGroupDividers?: boolean;
    closeOnSelect?: boolean;
    menuSize?: 'sm' | 'md';
    onSelect?: (item: MenuItemData, index: number) => boolean | void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onOpenChange?: (isOpen: boolean) => void;
}
declare const ArvoDropdownIconButton: import('react').ForwardRefExoticComponent<ArvoDropdownIconButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ArvoDropdownIconButton;
//# sourceMappingURL=DropdownIconButton.d.ts.map