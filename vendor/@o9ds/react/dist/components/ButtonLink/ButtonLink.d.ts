import { TooltipProp } from '../../hooks/useTooltip';
export interface O9ButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
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
declare const O9ButtonLink: import('react').ForwardRefExoticComponent<O9ButtonLinkProps & import('react').RefAttributes<HTMLAnchorElement>>;
export default O9ButtonLink;
//# sourceMappingURL=ButtonLink.d.ts.map