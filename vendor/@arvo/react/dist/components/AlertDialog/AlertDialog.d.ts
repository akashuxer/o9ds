export interface ArvoAlertDialogAction {
    label: string;
    icon?: string;
    onClick?: (e: React.MouseEvent) => void | false;
    isDisabled?: boolean;
    isLoading?: boolean;
    closeOnClick?: boolean;
}
export interface ArvoAlertDialogConfirmInput {
    label?: string;
    placeholder?: string;
    maxLength?: number;
    expectedValue?: string;
    onChange?: (value: string) => void;
}
export interface ArvoAlertDialogDontShow {
    label?: string;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}
export type ArvoAlertDialogVariant = 'warning' | 'info' | 'success' | 'error' | 'block';
export type ArvoAlertDialogSize = 'sm' | 'md' | 'lg';
export type ArvoAlertDialogCloseReason = 'primary' | 'secondary' | 'close-button' | 'escape' | 'backdrop' | 'programmatic';
export interface ArvoAlertDialogProps {
    variant?: ArvoAlertDialogVariant;
    size?: ArvoAlertDialogSize;
    title: string;
    message?: string;
    content?: React.ReactNode;
    isOpen?: boolean;
    defaultOpen?: boolean;
    hasDangerAction?: boolean;
    primaryAction?: ArvoAlertDialogAction;
    secondaryAction?: ArvoAlertDialogAction | null;
    hasSecondaryBtn?: boolean;
    isClosable?: boolean;
    hasBackdrop?: boolean;
    closeOnBackdrop?: boolean;
    closeOnEscape?: boolean;
    confirmInput?: ArvoAlertDialogConfirmInput | null;
    dontShowAgain?: ArvoAlertDialogDontShow | boolean | null;
    isLoading?: boolean;
    isDisabled?: boolean;
    container?: HTMLElement | string | null;
    className?: string;
    onOpenChange?: (open: boolean) => void;
    onOpen?: () => void | false;
    onClose?: (detail: {
        reason: ArvoAlertDialogCloseReason;
    }) => void | false;
    onConfirmInputChange?: (value: string) => void;
    onDontShowAgainChange?: (checked: boolean) => void;
}
declare const ArvoAlertDialog: import('react').ForwardRefExoticComponent<ArvoAlertDialogProps & import('react').RefAttributes<HTMLDivElement>>;
export { ArvoAlertDialog };
export default ArvoAlertDialog;
//# sourceMappingURL=AlertDialog.d.ts.map