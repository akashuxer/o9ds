import { TooltipProp } from '../../hooks/useTooltip';
export interface ArvoIconButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    icon: string;
    href: string;
    tooltip: TooltipProp;
    isDisabled?: boolean;
    isLoading?: boolean;
}
declare const ArvoIconButtonLink: import('react').ForwardRefExoticComponent<ArvoIconButtonLinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
export default ArvoIconButtonLink;
//# sourceMappingURL=IconButtonLink.d.ts.map