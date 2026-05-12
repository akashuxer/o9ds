import { ReactElement, ReactNode, Ref } from 'react';
import { ListItemBase } from '../../../../core/src';
import { ArvoPanelHeaderAction, ArvoPanelStickyHeaderConfig, ArvoPanelBannerConfig, ArvoPanelInfoConfig, ArvoPanelAction } from '../../../../utils/src';
export type ArvoDrawerSide = 'left' | 'right' | 'top' | 'bottom';
export type ArvoDrawerCloseReason = 'escape' | 'mask-click' | 'close-button' | 'programmatic';
export type ArvoDrawerMaskVariant = 'light' | 'dark';
export interface ArvoDrawerMaskConfig {
    variant?: ArvoDrawerMaskVariant;
    opacity?: number;
    blur?: number;
    closeOnClick?: boolean;
}
export interface ArvoDrawerHandle<T extends ListItemBase = ListItemBase> {
    open(): void;
    close(reason?: ArvoDrawerCloseReason): void;
    toggle(): void;
    isOpen(): boolean;
    setItems(items: T[]): void;
    setStickyHeader(config: ArvoPanelStickyHeaderConfig | false): void;
    setHeaderActions(actions: ArvoPanelHeaderAction[]): void;
    setActions(actions: ArvoPanelAction[] | false): void;
    updateAction(id: string, patch: Partial<ArvoPanelHeaderAction | ArvoPanelAction>): void;
    search(query?: string): string | void;
    selectedTab(id?: string): string | null | void;
    setTitle(title: string | null): void;
    loading(state?: boolean): boolean | void;
    disabled(state?: boolean): boolean | void;
    focus(target?: 'first' | 'title' | 'search' | 'list'): void;
}
export interface ArvoDrawerProps<T extends ListItemBase = ListItemBase> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClose' | 'onSelect' | 'title'> {
    side?: ArvoDrawerSide;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    onOpen?: () => boolean | void;
    onClose?: (reason: ArvoDrawerCloseReason) => boolean | void;
    hasMask?: boolean | ArvoDrawerMaskConfig;
    closeOnEscape?: boolean;
    closeOnMaskClick?: boolean;
    lockScroll?: boolean | 'auto';
    container?: HTMLElement | (() => HTMLElement) | null;
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number;
    height?: string | number | null;
    animationDuration?: number;
    ariaLabel?: string;
    ariaLabelledBy?: string;
    isClosable?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    className?: string;
    children?: ReactNode;
    /**
     * Forwarded to the imperative handle. The forwarded `ref` always points to
     * the host `.arvo-drw` element; use `instanceRef` for the imperative API.
     */
    instanceRef?: Ref<ArvoDrawerHandle>;
    title?: string | null;
    hasHeader?: boolean;
    hasBackButton?: boolean;
    onBack?: () => void;
    headerActions?: ArvoPanelHeaderAction[];
    stickyHeader?: ArvoPanelStickyHeaderConfig | false;
    items?: T[];
    getItemId?: (item: T) => string;
    filterKeys?: Array<keyof T & string>;
    getItemSearchText?: (item: T) => string;
    renderItem?: (item: T) => ReactNode;
    itemsRole?: 'listbox' | 'list' | 'menu';
    actions?: ArvoPanelAction[] | false;
    hasFooter?: boolean;
    searchQuery?: string;
    defaultSearchQuery?: string;
    onSearchChange?: (query: string, matchedCount: number | null) => void;
    onItemActivate?: (id: string, item: T) => void;
    onTabSelect?: (id: string) => void;
}
export type { ArvoPanelHeaderAction, ArvoPanelStickyHeaderConfig, ArvoPanelBannerConfig, ArvoPanelInfoConfig, ArvoPanelAction, };
export declare const ArvoDrawer: <T extends ListItemBase = ListItemBase>(props: ArvoDrawerProps<T> & {
    ref?: Ref<HTMLDivElement>;
}) => ReactElement | null;
export default ArvoDrawer;
//# sourceMappingURL=Drawer.d.ts.map