export type O9ToastType = 'negative' | 'warning' | 'info' | 'positive' | 'block' | 'neutral';
export type O9ToastPosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
export type O9ToastCloseReason = 'click' | 'escape' | 'fade' | 'programmatic';
export interface O9ToastOptions {
    type?: O9ToastType;
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
export interface O9ToastProviderProps {
    position?: O9ToastPosition;
    children: React.ReactNode;
}
interface ToastContextValue {
    show: (options: O9ToastOptions) => string;
    close: (id: string) => void;
    closeAll: () => void;
}
export declare function useToast(): ToastContextValue;
declare function O9ToastProvider({ position, children }: O9ToastProviderProps): import("react/jsx-runtime").JSX.Element;
export { O9ToastProvider };
export default O9ToastProvider;
//# sourceMappingURL=Toast.d.ts.map