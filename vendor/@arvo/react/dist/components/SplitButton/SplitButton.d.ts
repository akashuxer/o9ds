import { ListGroup } from '../../../../core/src';
import { MenuItemData } from '../ActionMenu/ActionMenu';
import { MenuSearchProp } from '../../types/menu-search';
export interface ArvoSplitButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled' | 'type' | 'onSelect' | 'defaultValue' | 'value'> {
    label: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
    mode?: 'action' | 'selection';
    displaySelected?: 'label' | 'value';
    value?: string | number | null;
    defaultValue?: string | number | null;
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
     * Default: "Show options".
     */
    triggerLabel?: string;
    onAction?: (event: React.MouseEvent<HTMLButtonElement>, selectedItem: MenuItemData | null) => void;
    onSelect?: (item: MenuItemData, index: number) => boolean | void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onOpenChange?: (isOpen: boolean) => void;
}
declare const ArvoSplitButton: import('react').ForwardRefExoticComponent<ArvoSplitButtonProps & import('react').RefAttributes<HTMLButtonElement>>;
export default ArvoSplitButton;
export { ArvoSplitButton };
//# sourceMappingURL=SplitButton.d.ts.map