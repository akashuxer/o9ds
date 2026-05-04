import { OverlayEntry } from '../../../core/src';
export interface UseOverlayReturn {
    open: (entry: OverlayEntry) => void;
    close: (id: string) => void;
    closeAll: (options?: {
        except?: string[];
    }) => void;
    isOpen: (id: string) => boolean;
    getContainer: () => HTMLElement;
}
export declare function useOverlay(): UseOverlayReturn;
//# sourceMappingURL=useOverlay.d.ts.map