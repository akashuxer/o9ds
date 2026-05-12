import { ListGroup } from '../../../../core/src';
import { MenuItemData } from '../ActionMenu/ActionMenu';
import { MenuSearchProp } from '../../types/menu-search';
export interface ArvoDropdownButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type' | 'onSelect' | 'defaultValue' | 'value'> {
    label: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
    mode?: 'action' | 'selection';
    displaySelected?: 'label' | 'value';
    value?: string | number | null;
    defaultValue?: string | number | null;
    isDisabled?: boolean;
    isLoading?: boolean;
    items: MenuItemData[] | ListGroup<MenuItemData>[];
    /** Enable search with defaults (`true`) or pass a config object. */
    search?: MenuSearchProp;
    placement?: 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end';
    maxHeight?: string;
    hasGroupDividers?: boolean;
    closeOnSelect?: boolean;
    onSelect?: (item: MenuItemData, index: number) => boolean | void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onOpenChange?: (isOpen: boolean) => void;
}
declare const ArvoDropdownButton: import('react').ForwardRefExoticComponent<ArvoDropdownButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ArvoDropdownButton;
//# sourceMappingURL=DropdownButton.d.ts.map