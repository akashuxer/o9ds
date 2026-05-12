import { ReactNode } from 'react';
import { ListItemBase } from '../../../../core/src';
import { ArvoPanelHeaderAction, ArvoPanelStickyHeaderConfig, ArvoPanelAction } from '../../../../utils/src';
export interface PanelShellProps<T extends ListItemBase = ListItemBase> {
    parentBlock: string;
    pinSlot?: ReactNode;
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
    onClose?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    isPinnableCount?: number;
    isClosableCount?: number;
    children?: ReactNode;
    className?: string;
    /** Controlled search query. */
    searchQuery?: string;
    /** Default search query for uncontrolled mode. */
    defaultSearchQuery?: string;
    onSearchChange?: (query: string, matchedCount: number | null) => void;
    onItemActivate?: (id: string, item: T) => void;
    onTabSelect?: (id: string) => void;
}
export interface PanelShellHandle {
    setItems(items: ListItemBase[]): void;
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
interface HeaderActionProps {
    action: ArvoPanelHeaderAction;
    block: string;
    isDisabled?: boolean;
}
export declare function HeaderAction({ action, block, isDisabled }: HeaderActionProps): import("react/jsx-runtime").JSX.Element | null;
export declare const PanelShell: <T extends ListItemBase = ListItemBase>(props: PanelShellProps<T> & {
    ref?: React.Ref<PanelShellHandle>;
}) => React.ReactElement | null;
export {};
//# sourceMappingURL=PanelShell.d.ts.map