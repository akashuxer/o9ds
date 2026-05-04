import { ReactNode } from 'react';
import { TooltipManagerConfig } from '../../../core/src';
export interface TooltipProviderProps {
    config?: Partial<TooltipManagerConfig>;
    children: ReactNode;
}
export declare function TooltipProvider({ config, children, }: TooltipProviderProps): JSX.Element;
//# sourceMappingURL=TooltipProvider.d.ts.map