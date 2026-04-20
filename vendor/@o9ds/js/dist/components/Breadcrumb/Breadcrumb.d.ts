export interface O9BreadcrumbItem {
    label: string;
    href?: string;
    icon?: string;
}
export interface O9BreadcrumbOptions {
    items?: O9BreadcrumbItem[];
    separator?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    ariaLabel?: string;
    onNavigate?: (event: {
        href: string;
        index: number;
        label: string;
    }) => void;
}
type RequiredOptions = Required<Omit<O9BreadcrumbOptions, 'onNavigate'>> & {
    onNavigate: O9BreadcrumbOptions['onNavigate'] | null;
};
export declare class O9Breadcrumb {
    private _element;
    private _options;
    private _listEl;
    private _originalContent;
    private _boundHandleClick;
    static readonly DEFAULTS: RequiredOptions;
    static initialize(element: HTMLElement, options?: O9BreadcrumbOptions): O9Breadcrumb;
    constructor(element: HTMLElement, options?: O9BreadcrumbOptions);
    private _render;
    private _buildItems;
    private _bindEvents;
    private _handleClick;
    private _dispatchEvent;
    private _applyDisabled;
    private _applyLoading;
    setItems(items: O9BreadcrumbItem[]): void;
    disabled(state?: boolean): boolean | void;
    setLoading(isLoading: boolean): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=Breadcrumb.d.ts.map