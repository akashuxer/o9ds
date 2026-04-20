export interface TabItem {
    id: string;
    label: string;
    icon?: string;
    isDisabled?: boolean;
    pinned?: boolean;
    isClosable?: boolean;
    panelId?: string;
    order?: number;
}
export interface O9TabstripProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onSelect'> {
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'sm' | 'lg';
    tabs: TabItem[];
    selectedId?: string | null;
    defaultSelectedId?: string | null;
    isClosable?: boolean;
    isPinnable?: boolean;
    actionsVisibility?: 'hover' | 'always';
    isDisabled?: boolean;
    isLoading?: boolean;
    onSelect?: (detail: {
        id: string;
        index: number;
    }) => void;
    onClose?: (detail: {
        id: string;
        index: number;
    }) => void;
    onPin?: (detail: {
        id: string;
        pinned: boolean;
        tabOrder: string[];
    }) => void;
}
declare const O9Tabstrip: import('react').ForwardRefExoticComponent<O9TabstripProps & import('react').RefAttributes<HTMLDivElement>>;
export default O9Tabstrip;
//# sourceMappingURL=Tabstrip.d.ts.map