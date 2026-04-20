import { TooltipProp } from '../../hooks/useTooltip';
export interface O9IconButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
    variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'danger';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    icon: string;
    href: string;
    tooltip: TooltipProp;
    isDisabled?: boolean;
    isLoading?: boolean;
}
declare const O9IconButtonLink: import('react').ForwardRefExoticComponent<O9IconButtonLinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
export default O9IconButtonLink;
//# sourceMappingURL=IconButtonLink.d.ts.map