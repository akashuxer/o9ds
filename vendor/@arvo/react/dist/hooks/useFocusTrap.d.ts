import { FocusTrapOptions } from '../../../core/src';
export type UseFocusTrapOptions = Omit<FocusTrapOptions, 'container'> & {
    active: boolean;
};
export declare function useFocusTrap(containerRef: React.RefObject<HTMLElement | null>, options: UseFocusTrapOptions): void;
//# sourceMappingURL=useFocusTrap.d.ts.map