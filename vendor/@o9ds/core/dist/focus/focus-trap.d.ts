export interface FocusTrapOptions {
    container: HTMLElement;
    initialFocus?: HTMLElement | 'first' | 'none';
    returnFocusOnDeactivate: boolean;
    escapeDeactivates: boolean;
    allowOutsideClick: boolean;
}
export interface FocusTrap {
    activate(options: FocusTrapOptions): void;
    deactivate(): void;
    isActive(): boolean;
    updateContainerElements(): void;
}
export declare function createFocusTrap(): FocusTrap;
//# sourceMappingURL=focus-trap.d.ts.map