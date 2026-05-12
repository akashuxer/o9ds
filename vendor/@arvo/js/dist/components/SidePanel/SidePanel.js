import { enter, createFocusTrap, exit } from "@arvo/core";
import { createPanelShell } from "../PanelShell/PanelShell.js";
import { ArvoIconButton } from "../IconButton/IconButton.js";
const SIDE_PANEL_HOST_CLASSES = [
  "arvo-sp",
  "arvo-sp--layout",
  "arvo-sp--overlay",
  "arvo-sp--side-left",
  "arvo-sp--side-right",
  "arvo-sp--pinnable",
  "arvo-sp--closable",
  "arvo-sp--with-back",
  "arvo-sp--with-splitter-l",
  "arvo-sp--with-splitter-r",
  "is-pinned",
  "is-unpinned",
  "open",
  "loading",
  "is-disabled"
];
function toCssLength(value) {
  if (value === null || value === void 0) return null;
  return typeof value === "number" ? `${value}px` : value;
}
const _ArvoSidePanel = class _ArvoSidePanel {
  constructor(element, options = {}) {
    this._splitterEl = null;
    this._pinBtn = null;
    this._pinBtnEl = null;
    this._focusTrap = null;
    this._prevFocusEl = null;
    this._escapeListener = null;
    this._outsideListener = null;
    this._shellEventBindings = [];
    this._destroyed = false;
    this._options = { ...options };
    this._host = element;
    this._host.classList.add("arvo-sp");
    this._isPinnedState = options.isPinned ?? options.defaultPinned ?? true;
    this._isOpenState = options.isOpen ?? options.defaultOpen ?? true;
    this._side = options.side ?? "right";
    this._variant = options.isPinnable ? this._isPinnedState ? "layout" : "overlay" : options.variant ?? "layout";
    this._isDisabled = !!options.isDisabled;
    this._isLoading = !!options.isLoading;
    this._splitterResolved = this._resolveSplitter();
    this._paneEl = document.createElement("div");
    this._paneEl.className = "arvo-sp__pane";
    if (this._splitterResolved && this._side === "right") {
      this._splitterEl = this._buildSplitter();
      this._host.appendChild(this._splitterEl);
    }
    this._host.appendChild(this._paneEl);
    if (this._splitterResolved && this._side === "left") {
      this._splitterEl = this._buildSplitter();
      this._host.appendChild(this._splitterEl);
    }
    this._applyWidthVars();
    this._applyClasses();
    this._applyAria();
    const contentProps = {
      title: options.title ?? null,
      hasHeader: options.hasHeader,
      hasBackButton: options.hasBackButton,
      onBack: options.onBack,
      headerActions: options.headerActions,
      stickyHeader: options.stickyHeader,
      items: options.items,
      getItemId: options.getItemId,
      filterKeys: options.filterKeys,
      getItemSearchText: options.getItemSearchText,
      renderItem: options.renderItem,
      itemsRole: options.itemsRole,
      actions: options.actions,
      hasFooter: options.hasFooter,
      isClosable: options.isClosable,
      onItemActivate: options.onItemActivate,
      onClose: () => {
        void this.close();
      },
      isPinnableCount: options.isPinnable ? 1 : 0,
      isClosableCount: options.isClosable ? 1 : 0
    };
    this.shell = createPanelShell({
      parentBlock: "arvo-sp",
      parent: this._paneEl,
      options: contentProps
    });
    if (options.isPinnable) {
      this._pinBtnEl = this._buildPinButtonEl();
      this._pinBtn = ArvoIconButton.initialize(this._pinBtnEl, {
        size: "sm",
        variant: "tertiary",
        icon: "push-pin",
        tooltip: this._isPinnedState ? "Unpin panel" : "Pin panel",
        isDisabled: this._isDisabled,
        isSelected: this._isPinnedState,
        onClick: () => this._handlePinClick()
      });
      this._pinBtnEl.classList.add("arvo-sp__pin");
      this.shell.setPinSlot(this._pinBtnEl);
    }
    if (this._isLoading) {
      this.shell.loading(true);
      this._host.classList.add("loading");
    }
    if (this._isDisabled) {
      this.shell.disabled(true);
      this._host.classList.add("is-disabled");
    }
    this._wireShellEventReemit();
    if (this._variant === "overlay") {
      this._setupOverlayListeners();
      if (this._isOpenState) {
        this._host.classList.add("open");
      }
    }
  }
  static initialize(element, options = {}) {
    return new _ArvoSidePanel(element, options);
  }
  // -------------------------------------------------------------------------
  // Public API -- overlay lifecycle
  // -------------------------------------------------------------------------
  async open() {
    var _a, _b, _c, _d;
    if (this._variant !== "overlay") return;
    if (this._isOpenState) return;
    if (((_b = (_a = this._options).onOpen) == null ? void 0 : _b.call(_a)) === false) return;
    this._prevFocusEl = document.activeElement ?? null;
    this._isOpenState = true;
    this._host.classList.add("open");
    this._applyAria();
    await enter({ element: this._host, type: "fade" });
    if (!this._isDisabled) {
      this._focusTrap = createFocusTrap();
      this._focusTrap.activate({
        container: this._paneEl,
        initialFocus: "first",
        returnFocusOnDeactivate: false,
        escapeDeactivates: false,
        allowOutsideClick: true
      });
    }
    this._paneEl.dispatchEvent(
      new CustomEvent("sp:open", { bubbles: true })
    );
    (_d = (_c = this._options).onOpenChange) == null ? void 0 : _d.call(_c, true);
  }
  async close() {
    var _a, _b, _c, _d, _e;
    if (this._variant === "overlay" && !this._isOpenState) return;
    if (((_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a)) === false) return;
    (_c = this._focusTrap) == null ? void 0 : _c.deactivate();
    this._focusTrap = null;
    const wasOverlayOpen = this._variant === "overlay" && this._isOpenState;
    if (this._variant === "overlay") {
      await exit({ element: this._host, type: "fade" });
      this._host.classList.remove("open");
      this._isOpenState = false;
      this._applyAria();
      const prev = this._prevFocusEl;
      this._prevFocusEl = null;
      if (prev && typeof prev.focus === "function") {
        try {
          prev.focus({ preventScroll: true });
        } catch {
        }
      }
    }
    this._paneEl.dispatchEvent(
      new CustomEvent("sp:close", { bubbles: true })
    );
    if (wasOverlayOpen) (_e = (_d = this._options).onOpenChange) == null ? void 0 : _e.call(_d, false);
  }
  isOpen() {
    if (this._variant === "layout") return true;
    return this._isOpenState;
  }
  toggle() {
    if (this._variant !== "overlay") return;
    if (this._isOpenState) void this.close();
    else void this.open();
  }
  pinned(value) {
    if (value === void 0) return this._isPinnedState;
    if (!this._options.isPinnable) return;
    this._setPinned(value);
  }
  setVariant(variant) {
    if (this._variant === variant) return;
    if (this._options.isPinnable) {
      this._setPinned(variant === "layout");
      return;
    }
    this._variant = variant;
    this._reflowSplitter();
    this._applyClasses();
    this._applyAria();
    if (variant === "overlay") {
      this._setupOverlayListeners();
    } else {
      this._teardownOverlayListeners();
    }
  }
  // -------------------------------------------------------------------------
  // Public API -- panel-shell delegates
  // -------------------------------------------------------------------------
  setItems(items) {
    this.shell.setItems(items);
  }
  setStickyHeader(config) {
    this.shell.setStickyHeader(config);
  }
  /**
   * Replace header actions. The shell's `renderHeaderActions` re-positions
   * the pin slot via `insertPinSlot` on every render, so the pin button
   * stays correctly placed (between user actions and __close) without
   * additional work here.
   */
  setHeaderActions(actions) {
    this.shell.setHeaderActions(actions);
  }
  setActions(actions) {
    this.shell.setActions(actions);
  }
  updateAction(id, patch) {
    this.shell.updateAction(id, patch);
  }
  search(query) {
    if (query === void 0) return this.shell.search() ?? "";
    this.shell.search(query);
  }
  selectedTab(id) {
    if (id === void 0) return this.shell.selectedTab() ?? null;
    this.shell.selectedTab(id);
  }
  setTitle(title) {
    this.shell.setTitle(title);
  }
  loading(state) {
    if (state === void 0) return this._isLoading;
    this._isLoading = state;
    this.shell.loading(state);
    this._host.classList.toggle("loading", state);
  }
  disabled(state) {
    var _a;
    if (state === void 0) return this._isDisabled;
    this._isDisabled = state;
    this.shell.disabled(state);
    this._host.classList.toggle("is-disabled", state);
    (_a = this._pinBtn) == null ? void 0 : _a.disabled(state);
  }
  focus(target) {
    this.shell.focus(target);
  }
  // -------------------------------------------------------------------------
  // Destroy
  // -------------------------------------------------------------------------
  destroy() {
    var _a, _b, _c;
    if (this._destroyed) return;
    this._destroyed = true;
    if (this._isOpenState && this._variant === "overlay") {
      (_a = this._focusTrap) == null ? void 0 : _a.deactivate();
      this._focusTrap = null;
    }
    this._teardownOverlayListeners();
    this._teardownShellEventReemit();
    (_b = this._pinBtn) == null ? void 0 : _b.destroy();
    this._pinBtn = null;
    this._pinBtnEl = null;
    this.shell.destroy();
    (_c = this._splitterEl) == null ? void 0 : _c.remove();
    this._splitterEl = null;
    this._paneEl.remove();
    SIDE_PANEL_HOST_CLASSES.forEach((c) => this._host.classList.remove(c));
    if (this._options.className) {
      this._host.classList.remove(this._options.className);
    }
    this._host.style.removeProperty("--arvo-sp-width");
    this._host.style.removeProperty("--arvo-sp-min-width");
    this._host.style.removeProperty("--arvo-sp-max-width");
  }
  // -------------------------------------------------------------------------
  // Private -- DOM construction
  // -------------------------------------------------------------------------
  _buildPinButtonEl() {
    const el = document.createElement("button");
    el.type = "button";
    return el;
  }
  _resolveSplitter() {
    const opt = this._options.hasSplitter ?? false;
    if (opt === "auto") return this._variant === "layout";
    return opt === true;
  }
  /**
   * Re-resolves whether the splitter should be present and adds/removes the
   * `__splitter` element + side modifier class accordingly. Called whenever
   * the variant flips (pin/unpin or imperative `setVariant`) so `hasSplitter:'auto'`
   * stays in sync with the active variant.
   */
  _reflowSplitter() {
    const wantSplitter = this._resolveSplitter();
    if (wantSplitter === this._splitterResolved) return;
    this._splitterResolved = wantSplitter;
    if (wantSplitter) {
      if (!this._splitterEl) this._splitterEl = this._buildSplitter();
      if (this._side === "right") {
        this._host.insertBefore(this._splitterEl, this._paneEl);
      } else {
        if (this._paneEl.nextSibling) {
          this._host.insertBefore(this._splitterEl, this._paneEl.nextSibling);
        } else {
          this._host.appendChild(this._splitterEl);
        }
      }
    } else if (this._splitterEl) {
      this._splitterEl.remove();
      this._splitterEl = null;
    }
  }
  _buildSplitter() {
    const el = document.createElement("div");
    el.className = "arvo-sp__splitter";
    el.setAttribute("aria-hidden", "true");
    if (!_ArvoSidePanel._splitterWarnedOnce && typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
      _ArvoSidePanel._splitterWarnedOnce = true;
      console.warn(
        "[ArvoSidePanel] hasSplitter resolved truthy but ArvoSplitter is not yet available; rendering inert 4px placeholder. Resize behavior will activate when ArvoSplitter ships."
      );
    }
    return el;
  }
  // -------------------------------------------------------------------------
  // Private -- class / aria / width application
  // -------------------------------------------------------------------------
  _applyClasses() {
    SIDE_PANEL_HOST_CLASSES.forEach((c) => {
      if (c === "open" || c === "loading" || c === "is-disabled") return;
      this._host.classList.remove(c);
    });
    this._host.classList.add("arvo-sp");
    this._host.classList.add(`arvo-sp--${this._variant}`);
    this._host.classList.add(`arvo-sp--side-${this._side}`);
    if (this._options.isPinnable) {
      this._host.classList.add("arvo-sp--pinnable");
      this._host.classList.add(this._isPinnedState ? "is-pinned" : "is-unpinned");
    }
    if (this._options.isClosable) this._host.classList.add("arvo-sp--closable");
    if (this._options.hasBackButton) this._host.classList.add("arvo-sp--with-back");
    if (this._splitterResolved) {
      this._host.classList.add(
        this._side === "right" ? "arvo-sp--with-splitter-l" : "arvo-sp--with-splitter-r"
      );
    }
    if (this._options.className) {
      this._host.classList.add(this._options.className);
    }
  }
  _applyAria() {
    if (this._variant === "overlay") {
      this._paneEl.setAttribute("role", "dialog");
      this._paneEl.setAttribute("aria-modal", "false");
      if (!this._isOpenState) {
        this._paneEl.setAttribute("aria-hidden", "true");
      } else {
        this._paneEl.removeAttribute("aria-hidden");
      }
    } else {
      this._paneEl.setAttribute("role", "region");
      this._paneEl.removeAttribute("aria-modal");
      this._paneEl.removeAttribute("aria-hidden");
    }
    if (this._options.ariaLabel) {
      this._paneEl.setAttribute("aria-label", this._options.ariaLabel);
    } else if (this._options.title) {
      this._paneEl.setAttribute("aria-label", this._options.title);
    }
  }
  _applyWidthVars() {
    const w = toCssLength(this._options.width ?? 290);
    const minW = toCssLength(this._options.minWidth ?? 280);
    const maxW = toCssLength(this._options.maxWidth ?? null);
    if (w) this._host.style.setProperty("--arvo-sp-width", w);
    if (minW) this._host.style.setProperty("--arvo-sp-min-width", minW);
    if (maxW) this._host.style.setProperty("--arvo-sp-max-width", maxW);
  }
  // -------------------------------------------------------------------------
  // Private -- pin lifecycle
  // -------------------------------------------------------------------------
  _handlePinClick() {
    var _a;
    if (this._isDisabled || !this._options.isPinnable) return;
    this._setPinned(!this._isPinnedState);
    (_a = this._pinBtnEl) == null ? void 0 : _a.focus({ preventScroll: true });
  }
  _setPinned(next) {
    var _a, _b, _c, _d, _e;
    if (this._isPinnedState === next) return;
    this._isPinnedState = next;
    this._variant = next ? "layout" : "overlay";
    this._reflowSplitter();
    this._applyClasses();
    this._applyAria();
    (_a = this._pinBtn) == null ? void 0 : _a.selected(next);
    (_b = this._pinBtn) == null ? void 0 : _b.setTooltip(next ? "Unpin panel" : "Pin panel");
    if (this._variant === "overlay") {
      this._setupOverlayListeners();
      this._isOpenState = true;
      this._host.classList.add("open");
    } else {
      this._teardownOverlayListeners();
      this._host.classList.remove("open");
      (_c = this._focusTrap) == null ? void 0 : _c.deactivate();
      this._focusTrap = null;
    }
    (_e = (_d = this._options).onPinChange) == null ? void 0 : _e.call(_d, next);
    this._paneEl.dispatchEvent(
      new CustomEvent("sp:pin", {
        bubbles: true,
        detail: { pinned: next }
      })
    );
  }
  // -------------------------------------------------------------------------
  // Private -- overlay listeners
  // -------------------------------------------------------------------------
  _setupOverlayListeners() {
    if (this._escapeListener || this._outsideListener) return;
    if (this._options.closeOnEscape !== false) {
      this._escapeListener = (e) => {
        if (e.key !== "Escape") return;
        if (!this._isOpenState || this._isDisabled) return;
        if (this._variant !== "overlay") return;
        e.stopPropagation();
        void this.close();
      };
      document.addEventListener("keydown", this._escapeListener, true);
    }
    if (this._options.closeOnOutside) {
      this._outsideListener = (e) => {
        if (!this._isOpenState || this._isDisabled) return;
        if (this._variant !== "overlay") return;
        const target = e.target;
        if (!target) return;
        if (this._paneEl.contains(target)) return;
        void this.close();
      };
      document.addEventListener("mousedown", this._outsideListener, true);
    }
  }
  _teardownOverlayListeners() {
    if (this._escapeListener) {
      document.removeEventListener("keydown", this._escapeListener, true);
      this._escapeListener = null;
    }
    if (this._outsideListener) {
      document.removeEventListener("mousedown", this._outsideListener, true);
      this._outsideListener = null;
    }
  }
  // -------------------------------------------------------------------------
  // Private -- shell event re-emit (prefix sp:*)
  // -------------------------------------------------------------------------
  _wireShellEventReemit() {
    const map = {
      back: "sp:back",
      action: "sp:action",
      "tab-select": "sp:tab-select",
      search: "sp:search",
      "item-activate": "sp:item-activate"
    };
    for (const [src, dest] of Object.entries(map)) {
      const handler = (e) => {
        const ce = e;
        this._paneEl.dispatchEvent(
          new CustomEvent(dest, { bubbles: true, detail: ce.detail })
        );
      };
      this._paneEl.addEventListener(src, handler);
      this._shellEventBindings.push({ src, handler });
    }
  }
  _teardownShellEventReemit() {
    for (const { src, handler } of this._shellEventBindings) {
      this._paneEl.removeEventListener(src, handler);
    }
    this._shellEventBindings = [];
  }
};
_ArvoSidePanel._splitterWarnedOnce = false;
let ArvoSidePanel = _ArvoSidePanel;
export {
  ArvoSidePanel
};
//# sourceMappingURL=SidePanel.js.map
