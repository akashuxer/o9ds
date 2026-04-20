export interface O9LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    variant?: 'primary' | 'secondary';
    size?: 'sm' | 'lg';
    label: string;
    href: string;
    icon?: string;
    isExternal?: boolean;
    isDisabled?: boolean;
    isVisited?: boolean;
    isLoading?: boolean;
}
declare const O9Link: import('react').ForwardRefExoticComponent<O9LinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
export default O9Link;
//# sourceMappingURL=Link.d.ts.map