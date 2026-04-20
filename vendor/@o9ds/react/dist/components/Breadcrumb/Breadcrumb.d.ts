export interface O9BreadcrumbItem {
    label: string;
    href?: string;
    icon?: string;
}
export interface O9BreadcrumbProps {
    items: O9BreadcrumbItem[];
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
declare const O9Breadcrumb: import('react').ForwardRefExoticComponent<O9BreadcrumbProps & import('react').RefAttributes<HTMLElement>>;
export default O9Breadcrumb;
//# sourceMappingURL=Breadcrumb.d.ts.map