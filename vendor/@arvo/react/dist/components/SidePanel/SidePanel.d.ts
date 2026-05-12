import { ReactElement, ReactNode, Ref } from 'react';
import { ListItemBase } from '../../../../core/src';
import { ArvoPanelHeaderAction, ArvoPanelStickyHeaderConfig, ArvoPanelBannerConfig, ArvoPanelInfoConfig, ArvoPanelAction } from '../../../../utils/src';
export type ArvoSidePanelVariant = 'layout' | 'overlay';
export type ArvoSidePanelSide = 'left' | 'right';
export interface ArvoSidePanelHandle<T extends ListItemBase = ListItemBase> {
    pinned(value?: boolean): boolean | void;
    setVariant(variant: ArvoSidePanelVariant): void;
    open(): void;
    close(): void;
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
export interface ArvoSidePanelProps<T extends ListItemBase = ListItemBase> extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onClose' | 'onSelect' | 'title'> {
    variant?: ArvoSidePanelVariant;
    side?: ArvoSidePanelSide;
    isPinnable?: boolean;
    isPinned?: boolean;
    defaultPinned?: boolean;
    onPinChange?: (pinned: boolean) => void;
    hasSplitter?: boolean | 'auto';
    width?: string | number;
    minWidth?: string | number;
    maxWidth?: string | number | null;
    isOpen?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    onOpen?: () => boolean | void;
    onClose?: () => boolean | void;
    closeOnEscape?: boolean;
    closeOnOutside?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    ariaLabel?: string;
    className?: string;
    children?: ReactNode;
    /**
     * Forwarded to the imperative handle. The forwarded `ref` always points to
     * the host `.arvo-sp` element; use `instanceRef` for the imperative API.
     */
    instanceRef?: Ref<ArvoSidePanelHandle>;
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
    isClosable?: boolean;
    searchQuery?: string;
    defaultSearchQuery?: string;
    onSearchChange?: (query: string, matchedCount: number | null) => void;
    onItemActivate?: (id: string, item: T) => void;
    onTabSelect?: (id: string) => void;
}
export type { ArvoPanelHeaderAction, ArvoPanelStickyHeaderConfig, ArvoPanelBannerConfig, ArvoPanelInfoConfig, ArvoPanelAction, };
export type ArvoSidePanelHeaderAction = ArvoPanelHeaderAction;
export type ArvoSidePanelStickyHeaderConfig = ArvoPanelStickyHeaderConfig;
export type ArvoSidePanelBannerConfig = ArvoPanelBannerConfig;
export type ArvoSidePanelInfoConfig = ArvoPanelInfoConfig;
export type ArvoSidePanelAction = ArvoPanelAction;
export declare const ArvoSidePanel: <T extends ListItemBase = ListItemBase>(props: ArvoSidePanelProps<T> & {
    ref?: Ref<HTMLDivElement>;
}) => ReactElement | null;
export default ArvoSidePanel;
//# sourceMappingURL=SidePanel.d.ts.map