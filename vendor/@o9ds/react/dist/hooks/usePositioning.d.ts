import { RefObject } from 'react';
import { Placement, PositionResult } from '../../../core/src';
export interface UsePositioningOptions {
    anchorRef: RefObject<HTMLElement | null>;
    floatRef: RefObject<HTMLElement | null>;
    placement?: Placement;
    gap?: number;
    enabled?: boolean;
    width?: 'anchor' | number | string;
    observeContainerSelector?: string;
}
export interface UsePositioningReturn {
    position: PositionResult | null;
    update: () => void;
}
export declare function usePositioning(options: UsePositioningOptions): UsePositioningReturn;
//# sourceMappingURL=usePositioning.d.ts.map