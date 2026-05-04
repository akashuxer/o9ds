export type ArvoToastType = 'negative' | 'warning' | 'info' | 'positive' | 'block' | 'neutral';
export type ArvoToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type ArvoToastCloseReason = 'click' | 'escape' | 'fade' | 'programmatic';
export interface ArvoToastOptions {
    type?: ArvoToastType;
    title?: string | null;
    message: string;
    fadeAway?: boolean;
    timeout?: number;
    pauseOnHover?: boolean;
    icon?: string | null;
    link?: React.ReactNode;
    className?: string;
    onClose?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
export interface ArvoToastProviderProps {
    position?: ArvoToastPosition;
    children: React.ReactNode;
}
interface ToastContextValue {
    show: (options: ArvoToastOptions) => string;
    close: (id: string) => void;
    closeAll: () => void;
}
export declare function useToast(): ToastContextValue;
declare function ArvoToastProvider({ position, children }: ArvoToastProviderProps): import("react/jsx-runtime").JSX.Element;
export { ArvoToastProvider };
export default ArvoToastProvider;
//# sourceMappingURL=Toast.d.ts.map