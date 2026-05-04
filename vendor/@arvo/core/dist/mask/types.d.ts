export interface MaskOptions {
    blur?: boolean;
    container?: HTMLElement | string;
    closeOnClick?: boolean;
    zIndex?: number;
    onOutside?: (event: PointerEvent) => void;
}
export interface MaskInstance {
    show: () => void;
    hide: () => void;
    destroy: () => void;
    element: HTMLElement;
}
//# sourceMappingURL=types.d.ts.map