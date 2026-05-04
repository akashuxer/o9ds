export interface ArvoBreadcrumbItem {
    label: string;
    href?: string;
    icon?: string;
}
export interface ArvoBreadcrumbOptions {
    items?: ArvoBreadcrumbItem[];
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
type RequiredOptions = Required<Omit<ArvoBreadcrumbOptions, 'onNavigate'>> & {
    onNavigate: ArvoBreadcrumbOptions['onNavigate'] | null;
};
export declare class ArvoBreadcrumb {
    private _element;
    private _options;
    private _listEl;
    private _originalContent;
    private _boundHandleClick;
    static readonly DEFAULTS: RequiredOptions;
    static initialize(element: HTMLElement, options?: ArvoBreadcrumbOptions): ArvoBreadcrumb;
    constructor(element: HTMLElement, options?: ArvoBreadcrumbOptions);
    private _render;
    private _buildItems;
    private _bindEvents;
    private _handleClick;
    private _dispatchEvent;
    private _applyDisabled;
    private _applyLoading;
    setItems(items: ArvoBreadcrumbItem[]): void;
    disabled(state?: boolean): boolean | void;
    setLoading(isLoading: boolean): void;
    destroy(): void;
}
export {};
//# sourceMappingURL=Breadcrumb.d.ts.map