import { overlayHub, createFocusTrap, enter, exit } from "@arvo/core";
import { ArvoButton } from "../Button/Button.js";
import { ArvoIconButton } from "../IconButton/IconButton.js";
import { ArvoCheckbox } from "../Checkbox/Checkbox.js";
import { ArvoTextbox } from "../Textbox/Textbox.js";
const DEFAULT_PRIMARY = { label: "OK" };
const DEFAULT_SECONDARY = { label: "Cancel" };
function normalizeDontShow(v) {
  if (v == null || v === false) return null;
  if (v === true) return {};
  return v;
}
function renderContentInto(container, content) {
  container.textContent = "";
  if (typeof content === "string") {
    container.innerHTML = content;
  } else if (typeof content === "function") {
    content(container);
  } else if (content instanceof Node) {
    container.appendChild(content);
  }
}
let _idCounter = 0;
class ArvoAlertDialog {
  constructor(options) {
    var _a;
    this._rootEl = null;
    this._backdropEl = null;
    this._panelEl = null;
    this._headerEl = null;
    this._icoEl = null;
    this._titleEl = null;
    this._bodyEl = null;
    this._msgEl = null;
    this._confirmInputWrapEl = null;
    this._footerEl = null;
    this._dontShowEl = null;
    this._actionsEl = null;
    this._closeBtnInstance = null;
    this._primaryBtnInstance = null;
    this._secondaryBtnInstance = null;
    this._dontShowInstance = null;
    this._confirmInputInstance = null;
    this._focusTrap = null;
    this._isOpen = false;
    this._confirmValue = "";
    this._dontShowChecked = false;
    this._previousFocus = null;
    const uid = ++_idCounter;
    this._panelId = `arvo-alert-dlg-${uid}`;
    this._titleId = `arvo-alert-dlg-title-${uid}`;
    this._bodyId = `arvo-alert-dlg-body-${uid}`;
    this._options = this._resolveOptions(options);
    this._dontShowChecked = ((_a = this._options.dontShowAgain) == null ? void 0 : _a.defaultChecked) ?? false;
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
    this._boundHandleBackdropClick = this._handleBackdropClick.bind(this);
    this._render();
  }
  static initialize(options) {
    return new ArvoAlertDialog(options);
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  open() {
    var _a, _b;
    if (this._isOpen) return;
    if (((_b = (_a = this._options).onOpen) == null ? void 0 : _b.call(_a)) === false) return;
    if (!this._rootEl || !this._panelEl) return;
    this._isOpen = true;
    this._previousFocus = document.activeElement ?? null;
    const container = this._resolveContainer();
    container.appendChild(this._rootEl);
    this._rootEl.classList.add("open");
    overlayHub.open({
      id: this._panelId,
      type: "modal",
      element: this._panelEl,
      priority: 10,
      config: { autoCloseOnOutsideClick: false },
      onClose: () => this.close("programmatic")
    });
    this._focusTrap = createFocusTrap();
    this._focusTrap.activate({
      container: this._panelEl,
      initialFocus: this._options.confirmInput ? "none" : "first",
      // Return focus is managed manually via _previousFocus on close so we
      // can use preventScroll and avoid double-restoring with overlayHub.
      returnFocusOnDeactivate: false,
      escapeDeactivates: false,
      allowOutsideClick: false
    });
    if (this._options.confirmInput) {
      window.setTimeout(() => {
        var _a2;
        const input = (_a2 = this._panelEl) == null ? void 0 : _a2.querySelector(
          ".arvo-alert-dlg__confirm-input input"
        );
        if (input) input.focus({ preventScroll: true });
      }, 0);
    }
    enter({ element: this._panelEl, type: "scale", duration: 150 });
    if (this._backdropEl) {
      enter({ element: this._backdropEl, type: "fade", duration: 100 });
    }
    document.addEventListener("keydown", this._boundHandleKeyDown, true);
    this._dispatchEvent("alert-dlg:open", {});
  }
  close(reason = "programmatic") {
    var _a, _b, _c;
    if (!this._isOpen) return;
    if (((_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a, { reason })) === false) return;
    this._isOpen = false;
    document.removeEventListener("keydown", this._boundHandleKeyDown, true);
    (_c = this._focusTrap) == null ? void 0 : _c.deactivate();
    this._focusTrap = null;
    overlayHub.close(this._panelId);
    const root = this._rootEl;
    const panel = this._panelEl;
    const backdrop = this._backdropEl;
    if (panel) {
      exit({
        element: panel,
        type: "scale",
        duration: 150,
        onComplete: () => {
          root == null ? void 0 : root.classList.remove("open");
          if (root && root.parentNode) {
            root.parentNode.removeChild(root);
          }
        }
      });
    } else if (root && root.parentNode) {
      root.classList.remove("open");
      root.parentNode.removeChild(root);
    }
    if (backdrop) {
      exit({ element: backdrop, type: "fade", duration: 100 });
    }
    const prev = this._previousFocus;
    this._previousFocus = null;
    if (prev && typeof prev.focus === "function") {
      try {
        prev.focus({ preventScroll: true });
      } catch {
      }
    }
    this._confirmValue = "";
    if (this._confirmInputInstance) {
      this._confirmInputInstance.value("");
    }
    this._dispatchEvent("alert-dlg:close", { reason });
  }
  isOpen() {
    return this._isOpen;
  }
  toggle() {
    if (this._isOpen) this.close();
    else this.open();
  }
  title(value) {
    if (value === void 0) {
      return this._options.title;
    }
    this._options.title = value;
    if (this._titleEl) this._titleEl.textContent = value;
  }
  message(value) {
    if (value === void 0) {
      return this._options.message ?? "";
    }
    this._options.message = value;
    if (!this._bodyEl) return;
    if (!this._msgEl) {
      this._msgEl = document.createElement("p");
      this._msgEl.className = "arvo-alert-dlg__msg";
      if (this._confirmInputWrapEl) {
        this._bodyEl.insertBefore(this._msgEl, this._confirmInputWrapEl);
      } else {
        this._bodyEl.insertBefore(this._msgEl, this._bodyEl.firstChild);
      }
    }
    this._msgEl.textContent = value;
  }
  renderContent(content) {
    var _a;
    this._options.content = content;
    if (!this._bodyEl) return;
    (_a = this._msgEl) == null ? void 0 : _a.remove();
    this._msgEl = null;
    const fragment = document.createDocumentFragment();
    const scratch = document.createElement("div");
    renderContentInto(scratch, content);
    while (scratch.firstChild) {
      fragment.appendChild(scratch.firstChild);
    }
    if (this._confirmInputWrapEl) {
      this._bodyEl.insertBefore(fragment, this._confirmInputWrapEl);
    } else {
      this._bodyEl.textContent = "";
      this._bodyEl.appendChild(fragment);
    }
  }
  setVariant(variant) {
    var _a, _b;
    if (variant === this._options.variant) return;
    (_a = this._rootEl) == null ? void 0 : _a.classList.remove(`arvo-alert-dlg--${this._options.variant}`);
    (_b = this._rootEl) == null ? void 0 : _b.classList.add(`arvo-alert-dlg--${variant}`);
    this._options.variant = variant;
  }
  setActions(actions) {
    if (actions.primary) {
      this._options.primaryAction = {
        ...this._options.primaryAction,
        ...actions.primary
      };
      this._applyActionToButton(
        this._primaryBtnInstance,
        actions.primary,
        true
      );
    }
    if (actions.secondary !== void 0) {
      if (actions.secondary === null) {
        this._options.secondaryAction = null;
        if (this._secondaryBtnInstance) {
          this._secondaryBtnInstance.disabled(true);
        }
      } else {
        this._options.secondaryAction = {
          ...this._options.secondaryAction ?? DEFAULT_SECONDARY,
          ...actions.secondary
        };
        this._applyActionToButton(
          this._secondaryBtnInstance,
          actions.secondary,
          false
        );
      }
    }
  }
  setLoading(loading) {
    var _a, _b, _c;
    if (this._options.isLoading === loading) return;
    this._options.isLoading = loading;
    (_a = this._rootEl) == null ? void 0 : _a.classList.toggle("loading", loading);
    if (this._panelEl) {
      if (loading) this._panelEl.setAttribute("aria-busy", "true");
      else this._panelEl.removeAttribute("aria-busy");
    }
    this._refreshButtonDisabledStates();
    (_b = this._closeBtnInstance) == null ? void 0 : _b.disabled(loading || this._options.isDisabled);
    (_c = this._dontShowInstance) == null ? void 0 : _c.disabled(loading || this._options.isDisabled);
  }
  confirmValue() {
    return this._confirmValue;
  }
  dontShowAgainChecked(value) {
    if (value === void 0) {
      return this._dontShowChecked;
    }
    this._dontShowChecked = value;
    if (this._dontShowInstance) {
      this._dontShowInstance.toggle(value);
    }
  }
  destroy() {
    var _a, _b, _c, _d, _e, _f;
    if (this._isOpen) {
      this._isOpen = false;
      document.removeEventListener("keydown", this._boundHandleKeyDown, true);
      (_a = this._focusTrap) == null ? void 0 : _a.deactivate();
      this._focusTrap = null;
      overlayHub.close(this._panelId);
      const prev = this._previousFocus;
      this._previousFocus = null;
      if (prev && typeof prev.focus === "function") {
        try {
          prev.focus({ preventScroll: true });
        } catch {
        }
      }
    }
    if (this._backdropEl) {
      this._backdropEl.removeEventListener(
        "click",
        this._boundHandleBackdropClick
      );
    }
    (_b = this._closeBtnInstance) == null ? void 0 : _b.destroy();
    (_c = this._primaryBtnInstance) == null ? void 0 : _c.destroy();
    (_d = this._secondaryBtnInstance) == null ? void 0 : _d.destroy();
    (_e = this._dontShowInstance) == null ? void 0 : _e.destroy();
    (_f = this._confirmInputInstance) == null ? void 0 : _f.destroy();
    this._closeBtnInstance = null;
    this._primaryBtnInstance = null;
    this._secondaryBtnInstance = null;
    this._dontShowInstance = null;
    this._confirmInputInstance = null;
    if (this._rootEl && this._rootEl.parentNode) {
      this._rootEl.parentNode.removeChild(this._rootEl);
    }
    this._rootEl = null;
    this._backdropEl = null;
    this._panelEl = null;
    this._headerEl = null;
    this._icoEl = null;
    this._titleEl = null;
    this._bodyEl = null;
    this._msgEl = null;
    this._confirmInputWrapEl = null;
    this._footerEl = null;
    this._dontShowEl = null;
    this._actionsEl = null;
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  _render() {
    const o = this._options;
    this._rootEl = document.createElement("div");
    this._rootEl.className = this._buildRootClasses();
    if (o.hasBackdrop) {
      this._backdropEl = document.createElement("div");
      this._backdropEl.className = "arvo-alert-dlg__backdrop";
      this._backdropEl.setAttribute("aria-hidden", "true");
      if (o.closeOnBackdrop) {
        this._backdropEl.addEventListener(
          "click",
          this._boundHandleBackdropClick
        );
      }
      this._rootEl.appendChild(this._backdropEl);
    }
    this._panelEl = document.createElement("div");
    this._panelEl.id = this._panelId;
    this._panelEl.className = "arvo-alert-dlg__panel";
    this._panelEl.setAttribute("role", "alertdialog");
    this._panelEl.setAttribute("aria-modal", "true");
    this._panelEl.setAttribute("aria-labelledby", this._titleId);
    this._panelEl.setAttribute("aria-describedby", this._bodyId);
    if (o.isLoading) this._panelEl.setAttribute("aria-busy", "true");
    this._panelEl.tabIndex = -1;
    this._renderHeader();
    this._renderBody();
    this._renderFooter();
    if (this._headerEl) this._panelEl.appendChild(this._headerEl);
    if (this._bodyEl) this._panelEl.appendChild(this._bodyEl);
    if (this._footerEl) this._panelEl.appendChild(this._footerEl);
    this._rootEl.appendChild(this._panelEl);
  }
  _renderHeader() {
    const o = this._options;
    this._headerEl = document.createElement("div");
    this._headerEl.className = "arvo-alert-dlg__header";
    this._icoEl = document.createElement("span");
    this._icoEl.className = "arvo-alert-dlg__ico o9con";
    this._icoEl.setAttribute("aria-hidden", "true");
    this._headerEl.appendChild(this._icoEl);
    this._titleEl = document.createElement("p");
    this._titleEl.id = this._titleId;
    this._titleEl.className = "arvo-alert-dlg__title";
    this._titleEl.textContent = o.title;
    this._headerEl.appendChild(this._titleEl);
    if (o.isClosable) {
      const wrap = document.createElement("span");
      wrap.className = "arvo-alert-dlg__close-btn";
      const btnEl = document.createElement("button");
      this._closeBtnInstance = ArvoIconButton.initialize(btnEl, {
        variant: "tertiary",
        size: "sm",
        icon: "close",
        tooltip: "Close",
        isDisabled: o.isLoading || o.isDisabled,
        onClick: () => this.close("close-button")
      });
      btnEl.setAttribute("aria-label", "Close dialog");
      wrap.appendChild(btnEl);
      this._headerEl.appendChild(wrap);
    }
  }
  _renderBody() {
    const o = this._options;
    this._bodyEl = document.createElement("div");
    this._bodyEl.id = this._bodyId;
    this._bodyEl.className = "arvo-alert-dlg__body";
    if (o.content !== null && o.content !== void 0) {
      const scratch = document.createElement("div");
      renderContentInto(scratch, o.content);
      while (scratch.firstChild) {
        this._bodyEl.appendChild(scratch.firstChild);
      }
    } else if (o.message) {
      this._msgEl = document.createElement("p");
      this._msgEl.className = "arvo-alert-dlg__msg";
      this._msgEl.textContent = o.message;
      this._bodyEl.appendChild(this._msgEl);
    }
    if (o.confirmInput) {
      this._confirmInputWrapEl = document.createElement("div");
      this._confirmInputWrapEl.className = "arvo-alert-dlg__confirm-input";
      const tbEl = document.createElement("div");
      this._confirmInputInstance = ArvoTextbox.initialize(tbEl, {
        size: "sm",
        isFullWidth: true,
        label: o.confirmInput.label,
        placeholder: o.confirmInput.placeholder,
        maxLength: o.confirmInput.maxLength ?? null,
        value: "",
        isDisabled: o.isLoading || o.isDisabled,
        onInput: (e) => {
          var _a;
          return this._handleConfirmInput(
            ((_a = e.target) == null ? void 0 : _a.value) ?? ""
          );
        },
        onKeyDown: (e) => this._handleConfirmKeyDown(e)
      });
      this._confirmInputWrapEl.appendChild(tbEl);
      this._bodyEl.appendChild(this._confirmInputWrapEl);
    }
  }
  _renderFooter() {
    const o = this._options;
    this._footerEl = document.createElement("div");
    this._footerEl.className = "arvo-alert-dlg__footer";
    if (o.dontShowAgain) {
      this._dontShowEl = document.createElement("div");
      this._dontShowEl.className = "arvo-alert-dlg__dont-show";
      const cbEl = document.createElement("span");
      const label = o.dontShowAgain.label ?? "Don't show this again";
      this._dontShowInstance = ArvoCheckbox.initialize(cbEl, {
        size: "sm",
        label,
        isChecked: this._dontShowChecked,
        isDisabled: o.isLoading || o.isDisabled,
        onChange: (detail) => this._handleDontShowChange(detail.isChecked)
      });
      this._dontShowEl.appendChild(cbEl);
      this._footerEl.appendChild(this._dontShowEl);
    }
    this._actionsEl = document.createElement("div");
    this._actionsEl.className = "arvo-alert-dlg__actions";
    const showSecondary = o.hasSecondaryBtn && o.secondaryAction !== null;
    if (showSecondary && o.secondaryAction) {
      const secEl = document.createElement("button");
      this._secondaryBtnInstance = ArvoButton.initialize(secEl, {
        variant: "secondary",
        size: "md",
        label: o.secondaryAction.label,
        icon: o.secondaryAction.icon ?? null,
        isDisabled: o.isLoading || o.isDisabled || o.secondaryAction.isDisabled === true,
        isLoading: o.secondaryAction.isLoading === true,
        onClick: (e) => this._handleSecondaryClick(e)
      });
      this._actionsEl.appendChild(secEl);
    }
    const primary = o.primaryAction;
    const primaryEl = document.createElement("button");
    this._primaryBtnInstance = ArvoButton.initialize(primaryEl, {
      variant: o.hasDangerAction ? "danger" : "primary",
      size: "md",
      label: primary.label,
      icon: primary.icon ?? null,
      isDisabled: this._isPrimaryDisabled(),
      isLoading: primary.isLoading === true,
      onClick: (e) => this._handlePrimaryClick(e)
    });
    this._actionsEl.appendChild(primaryEl);
    this._footerEl.appendChild(this._actionsEl);
  }
  // ---------------------------------------------------------------------------
  // Class string builder
  // ---------------------------------------------------------------------------
  _buildRootClasses() {
    const {
      variant,
      size,
      hasBackdrop,
      hasDangerAction,
      isClosable,
      isLoading
    } = this._options;
    return [
      "arvo-alert-dlg",
      `arvo-alert-dlg--${variant}`,
      size !== "md" && `arvo-alert-dlg--${size}`,
      hasBackdrop && "arvo-alert-dlg--with-backdrop",
      hasDangerAction && "arvo-alert-dlg--danger",
      isClosable && "arvo-alert-dlg--closable",
      isLoading && "loading"
    ].filter(Boolean).join(" ");
  }
  // ---------------------------------------------------------------------------
  // Action handlers
  // ---------------------------------------------------------------------------
  _handlePrimaryClick(e) {
    if (this._isPrimaryBlocked()) return;
    this._runAction(this._options.primaryAction, "primary", e);
  }
  _handleSecondaryClick(e) {
    const sec = this._options.secondaryAction;
    if (!sec) return;
    this._runAction(sec, "secondary", e);
  }
  _runAction(action, reason, e) {
    var _a;
    const result = (_a = action.onClick) == null ? void 0 : _a.call(action, e);
    this._dispatchEvent("alert-dlg:action", {
      action: reason,
      confirmValue: this._options.confirmInput ? this._confirmValue : null,
      dontShowAgain: this._options.dontShowAgain ? this._dontShowChecked : null
    });
    if (result === false) return;
    if (action.closeOnClick !== false) {
      this.close(reason);
    }
  }
  _handleConfirmInput(value) {
    var _a, _b, _c, _d, _e, _f;
    this._confirmValue = value;
    (_b = (_a = this._options.confirmInput) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, value);
    (_d = (_c = this._options).onConfirmInputChange) == null ? void 0 : _d.call(_c, value);
    if (((_e = this._options.confirmInput) == null ? void 0 : _e.expectedValue) !== void 0) {
      (_f = this._primaryBtnInstance) == null ? void 0 : _f.disabled(this._isPrimaryDisabled());
    }
  }
  _handleConfirmKeyDown(e) {
    if (e.key !== "Enter") return;
    if (this._isPrimaryBlocked()) return;
    e.preventDefault();
    this._runAction(this._options.primaryAction, "primary", e);
  }
  _handleDontShowChange(checked) {
    var _a, _b, _c, _d;
    this._dontShowChecked = checked;
    (_b = (_a = this._options.dontShowAgain) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, checked);
    (_d = (_c = this._options).onDontShowAgainChange) == null ? void 0 : _d.call(_c, checked);
  }
  _handleKeyDown(e) {
    if (e.key !== "Escape") return;
    e.stopPropagation();
    if (this._options.closeOnEscape) this.close("escape");
  }
  _handleBackdropClick(_e) {
    if (!this._options.closeOnBackdrop) return;
    this.close("backdrop");
  }
  // ---------------------------------------------------------------------------
  // Internal helpers
  // ---------------------------------------------------------------------------
  _resolveOptions(o) {
    return {
      variant: o.variant ?? "warning",
      size: o.size ?? "md",
      title: o.title,
      message: o.message ?? null,
      content: o.content ?? null,
      hasDangerAction: o.hasDangerAction ?? false,
      primaryAction: o.primaryAction ?? DEFAULT_PRIMARY,
      secondaryAction: o.secondaryAction === null ? null : o.secondaryAction ?? DEFAULT_SECONDARY,
      hasSecondaryBtn: o.hasSecondaryBtn ?? true,
      isClosable: o.isClosable ?? false,
      hasBackdrop: o.hasBackdrop ?? true,
      closeOnBackdrop: o.closeOnBackdrop ?? false,
      closeOnEscape: o.closeOnEscape ?? true,
      confirmInput: o.confirmInput ?? null,
      dontShowAgain: normalizeDontShow(o.dontShowAgain),
      isLoading: o.isLoading ?? false,
      isDisabled: o.isDisabled ?? false,
      container: o.container ?? null,
      onOpen: o.onOpen ?? null,
      onClose: o.onClose ?? null,
      onConfirmInputChange: o.onConfirmInputChange ?? null,
      onDontShowAgainChange: o.onDontShowAgainChange ?? null
    };
  }
  _resolveContainer() {
    const c = this._options.container;
    if (!c) return document.body;
    if (typeof c === "string") {
      return document.querySelector(c) ?? document.body;
    }
    return c;
  }
  _isPrimaryDisabledByConfirm() {
    const ci = this._options.confirmInput;
    if (!ci || ci.expectedValue === void 0) return false;
    return this._confirmValue !== ci.expectedValue;
  }
  _isPrimaryDisabled() {
    const o = this._options;
    return o.isLoading || o.isDisabled || o.primaryAction.isDisabled === true || this._isPrimaryDisabledByConfirm();
  }
  _isPrimaryBlocked() {
    return this._isPrimaryDisabled();
  }
  _refreshButtonDisabledStates() {
    var _a;
    const o = this._options;
    (_a = this._primaryBtnInstance) == null ? void 0 : _a.disabled(this._isPrimaryDisabled());
    if (this._secondaryBtnInstance) {
      const sec = o.secondaryAction;
      this._secondaryBtnInstance.disabled(
        o.isLoading || o.isDisabled || (sec == null ? void 0 : sec.isDisabled) === true
      );
    }
  }
  _applyActionToButton(btn, next, isPrimary) {
    if (!btn) return;
    if (next.label !== void 0) btn.setLabel(next.label);
    if (next.icon !== void 0) btn.setIcon(next.icon ?? null);
    if (next.isLoading !== void 0) btn.setLoading(next.isLoading);
    if (next.isDisabled !== void 0 || next.isLoading !== void 0) {
      if (isPrimary) {
        btn.disabled(this._isPrimaryDisabled());
      } else {
        const o = this._options;
        const sec = o.secondaryAction;
        btn.disabled(
          o.isLoading || o.isDisabled || (sec == null ? void 0 : sec.isDisabled) === true
        );
      }
    }
  }
  _dispatchEvent(eventName, detail = {}) {
    var _a;
    (_a = this._panelEl) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        cancelable: false,
        detail
      })
    );
  }
}
export {
  ArvoAlertDialog
};
//# sourceMappingURL=AlertDialog.js.map
