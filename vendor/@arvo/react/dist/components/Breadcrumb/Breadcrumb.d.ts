export interface ArvoBreadcrumbItem {
    label: string;
    href?: string;
    icon?: string;
}
export interface ArvoBreadcrumbProps {
    items: ArvoBreadcrumbItem[];
    separator?: string;
    isDisabled?: boolean;
    isLoading?: boolean;
    ariaLabel?: string;
    onNavigate?: (event: {
        href: string;
        index: number;
        label: string;
    }) => void;
    className?: string;
}
declare const ArvoBreadcrumb: import('react').ForwardRefExoticComponent<ArvoBreadcrumbProps & import('react').RefAttributes<HTMLElement>>;
export default ArvoBreadcrumb;
//# sourceMappingURL=Breadcrumb.d.ts.map