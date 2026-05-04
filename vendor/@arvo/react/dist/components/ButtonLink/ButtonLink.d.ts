import { TooltipProp } from '../../hooks/useTooltip';
export interface ArvoButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    label: string;
    href: string;
    icon?: string;
    isDisabled?: boolean;
    isFullWidth?: boolean;
    isLoading?: boolean;
    tooltip?: TooltipProp;
}
declare const ArvoButtonLink: import('react').ForwardRefExoticComponent<ArvoButtonLinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
export default ArvoButtonLink;
//# sourceMappingURL=ButtonLink.d.ts.map