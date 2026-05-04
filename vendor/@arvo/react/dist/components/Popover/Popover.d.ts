export interface ArvoPopoverAction {
    id?: string;
    label?: string;
    icon?: string;
    variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
    action?: (event: React.MouseEvent) => boolean | void;
    /** Alias for {@link action}. */
    onClick?: (event: React.MouseEvent) => boolean | void;
    isDisabled?: boolean;
}
export interface ArvoPopoverHeaderAction {
    id: string;
    type: 'btn' | 'dropdown' | 'switch';
    icon?: string;
    label?: string;
    onClick?: () => void;
    isChecked?: boolean;
    onChange?: (isChecked: boolean) => void;
    isDisabled?: boolean;
}
export interface ArvoPopoverProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'content' | 'title'> {
    variant?: 'space' | 'edge';
    placement?: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' | 'auto';
    title?: string;
    hasHeader?: boolean;
    isClosable?: boolean;
    hasBackButton?: boolean;
    headerActions?: ArvoPopoverHeaderAction[];
    stickyHeader?: React.ReactNode;
    children?: React.ReactNode;
    actions?: ArvoPopoverAction[];
    hasFooter?: boolean;
    width?: string | number | 'anchor' | null;
    offset?: number;
    trigger?: 'click' | 'hover' | 'focus';
    closeOnOutside?: boolean;
    hasArrow?: boolean;
    isLoading?: boolean;
    isInteractive?: boolean;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    onBack?: () => void;
    triggerRef?: React.RefObject<HTMLElement | null>;
    renderTrigger?: (props: {
        ref: React.RefObject<HTMLElement | null>;
        'aria-expanded': boolean;
        'aria-controls': string;
        'aria-haspopup': 'dialog';
    }) => React.ReactNode;
    isInline?: boolean;
}
declare const ArvoPopover: import('react').ForwardRefExoticComponent<ArvoPopoverProps & import('react').RefAttributes<HTMLDivElement>>;
export { ArvoPopover };
export default ArvoPopover;
//# sourceMappingURL=Popover.d.ts.map