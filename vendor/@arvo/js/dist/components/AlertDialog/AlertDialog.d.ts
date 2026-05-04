/**
 * ArvoAlertDialog — vanilla JS implementation.
 *
 * Standalone modal confirmation dialog. Unlike Popover, AlertDialog is NOT
 * anchored to a trigger element — it builds its own DOM, appends to a
 * container on open(), and removes itself on close(). Composes ArvoButton,
 * ArvoIconButton, ArvoCheckbox, and ArvoTextbox for inner interactive elements.
 *
 * See descriptors/alert-dialog.json and the React parity reference at
 * packages/react/src/components/AlertDialog/AlertDialog.tsx.
 */
export type ArvoAlertDialogVariant = 'warning' | 'info' | 'success' | 'error' | 'block';
export type ArvoAlertDialogSize = 'sm' | 'md' | 'lg';
export type ArvoAlertDialogCloseReason = 'primary' | 'secondary' | 'close-button' | 'escape' | 'backdrop' | 'programmatic';
export interface ArvoAlertDialogAction {
    label: string;
    icon?: string;
    onClick?: (e: Event) => void | false;
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
export interface ArvoAlertDialogOptions {
    variant?: ArvoAlertDialogVariant;
    size?: ArvoAlertDialogSize;
    title: string;
    message?: string;
    content?: string | HTMLElement | ((container: HTMLElement) => void);
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
    onOpen?: () => void | false;
    onClose?: (detail: {
        reason: ArvoAlertDialogCloseReason | string;
    }) => void | false;
    onConfirmInputChange?: (value: string) => void;
    onDontShowAgainChange?: (checked: boolean) => void;
}
export declare class ArvoAlertDialog {
    private _options;
    private _rootEl;
    private _backdropEl;
    private _panelEl;
    private _headerEl;
    private _icoEl;
    private _titleEl;
    private _bodyEl;
    private _msgEl;
    private _confirmInputWrapEl;
    private _footerEl;
    private _dontShowEl;
    private _actionsEl;
    private _closeBtnInstance;
    private _primaryBtnInstance;
    private _secondaryBtnInstance;
    private _dontShowInstance;
    private _confirmInputInstance;
    private _focusTrap;
    private _isOpen;
    private _confirmValue;
    private _dontShowChecked;
    private _previousFocus;
    private _panelId;
    private _titleId;
    private _bodyId;
    private _boundHandleKeyDown;
    private _boundHandleBackdropClick;
    static initialize(options: ArvoAlertDialogOptions): ArvoAlertDialog;
    constructor(options: ArvoAlertDialogOptions);
    open(): void;
    close(reason?: ArvoAlertDialogCloseReason | string): void;
    isOpen(): boolean;
    toggle(): void;
    title(): string;
    title(value: string): void;
    message(): string;
    message(value: string): void;
    renderContent(content: string | HTMLElement | ((container: HTMLElement) => void)): void;
    setVariant(variant: ArvoAlertDialogVariant): void;
    setActions(actions: {
        primary?: Partial<ArvoAlertDialogAction>;
        secondary?: Partial<ArvoAlertDialogAction> | null;
    }): void;
    setLoading(loading: boolean): void;
    confirmValue(): string;
    dontShowAgainChecked(): boolean;
    dontShowAgainChecked(value: boolean): void;
    destroy(): void;
    private _render;
    private _renderHeader;
    private _renderBody;
    private _renderFooter;
    private _buildRootClasses;
    private _handlePrimaryClick;
    private _handleSecondaryClick;
    private _runAction;
    private _handleConfirmInput;
    private _handleConfirmKeyDown;
    private _handleDontShowChange;
    private _handleKeyDown;
    private _handleBackdropClick;
    private _resolveOptions;
    private _resolveContainer;
    private _isPrimaryDisabledByConfirm;
    private _isPrimaryDisabled;
    private _isPrimaryBlocked;
    private _refreshButtonDisabledStates;
    private _applyActionToButton;
    private _dispatchEvent;
}
export default ArvoAlertDialog;
//# sourceMappingURL=AlertDialog.d.ts.map