"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const core = require("@arvo/core");
const PanelShell = require("../PanelShell/PanelShell.cjs");
const DEFAULT_LIGHT_OPACITY = 0.32;
const DEFAULT_DARK_OPACITY = 0.5;
function toCssLength(value) {
  if (value === null || value === void 0) return null;
  return typeof value === "number" ? `${value}px` : value;
}
function resolveMask(hasMask, closeOnMaskClickProp) {
  if (hasMask === void 0 || hasMask === false) {
    return {
      hasMask: false,
      variant: "light",
      opacity: 0,
      blur: 0,
      closeOnClick: false
    };
  }
  if (hasMask === true) {
    return {
      hasMask: true,
      variant: "light",
      opacity: DEFAULT_LIGHT_OPACITY,
      blur: 0,
      closeOnClick: closeOnMaskClickProp
    };
  }
  const variant = hasMask.variant ?? "light";
  const opacity = hasMask.opacity ?? (variant === "dark" ? DEFAULT_DARK_OPACITY : DEFAULT_LIGHT_OPACITY);
  return {
    hasMask: true,
    variant,
    opacity,
    blur: hasMask.blur ?? 0,
    closeOnClick: hasMask.closeOnClick ?? closeOnMaskClickProp
  };
}
function resolveSide(side) {
  const s = side ?? "right";
  if (s === "top" || s === "bottom") {
    if (typeof process !== "undefined" && process.env.NODE_ENV !== "production") {
      console.warn(
        `[ArvoDrawer] side='${s}' not yet implemented; using 'right'.`
      );
    }
    return "right";
  }
  return s;
}
function resolveContainer(container) {
  if (container == null) return document.body;
  if (typeof container === "function") return container();
  return container;
}
const HOST_CLASSES = [
  "arvo-drw",
  "arvo-drw--side-left",
  "arvo-drw--side-right",
  "arvo-drw--side-top",
  "arvo-drw--side-bottom",
  "arvo-drw--with-mask",
  "arvo-drw--mask-light",
  "arvo-drw--mask-dark",
  "open",
  "loading",
  "is-disabled",
  "arvo-enter-from",
  "arvo-enter-active",
  "arvo-enter-to",
  "arvo-exit-from",
  "arvo-exit-active",
  "arvo-exit-to"
];
class ArvoDrawer {
  constructor(element, options = {}) {
    this._backdropManager = null;
    this._backdropEl = null;
    this._backdropMouseDown = null;
    this._focusTrap = null;
    this._prevFocusEl = null;
    this._scrollUnlock = null;
    this._escapeListener = null;
    this._shellEventBindings = [];
    this._destroyed = false;
    this._isMounted = false;
    this._options = { ...options };
    this._markerEl = element;
    this._side = resolveSide(options.side);
    this._mask = resolveMask(options.hasMask, options.closeOnMaskClick !== false);
    this._closeOnEscape = options.closeOnEscape !== false;
    this._lockScrollResolved = options.lockScroll === void 0 || options.lockScroll === "auto" ? this._mask.hasMask : options.lockScroll === true;
    this._isOpenState = options.isOpen ?? options.defaultOpen ?? false;
    this._isDisabled = !!options.isDisabled;
    this._isLoading = !!options.isLoading;
    this._container = resolveContainer(options.container);
    this._host = document.createElement("div");
    this._paneEl = document.createElement("div");
    this._paneEl.className = "arvo-drw__pane";
    this._host.appendChild(this._paneEl);
    this._applyClasses();
    this._applyStyleVars();
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
      isClosable: options.isClosable !== false,
      onClose: () => {
        void this.close("close-button");
      },
      isClosableCount: options.isClosable !== false ? 1 : 0
    };
    this.shell = PanelShell.createPanelShell({
      parentBlock: "arvo-drw",
      parent: this._paneEl,
      options: contentProps
    });
    if (this._isLoading) {
      this.shell.loading(true);
      this._host.classList.add("loading");
    }
    if (this._isDisabled) {
      this.shell.disabled(true);
      this._host.classList.add("is-disabled");
    }
    this._wireShellEventReemit();
    if (this._isOpenState) {
      this._mountToContainer();
      if (this._mask.hasMask) this._showBackdrop();
      this._host.classList.add("open");
      this._applyAria();
      if (this._lockScrollResolved) this._scrollUnlock = core.lockPageScroll();
      if (this._closeOnEscape) this._setupEscapeListener();
      if (!this._isDisabled) {
        this._focusTrap = core.createFocusTrap();
        this._focusTrap.activate({
          container: this._paneEl,
          initialFocus: "first",
          returnFocusOnDeactivate: false,
          escapeDeactivates: false,
          allowOutsideClick: true
        });
      }
    }
  }
  static initialize(element, options = {}) {
    return new ArvoDrawer(element, options);
  }
  // -------------------------------------------------------------------------
  // Public API -- lifecycle
  // -------------------------------------------------------------------------
  async open() {
    var _a, _b, _c, _d;
    if (this._destroyed) return;
    if (this._isOpenState) return;
    if (((_b = (_a = this._options).onOpen) == null ? void 0 : _b.call(_a)) === false) return;
    this._prevFocusEl = document.activeElement ?? null;
    this._isOpenState = true;
    this._mountToContainer();
    if (this._mask.hasMask) this._showBackdrop();
    if (this._lockScrollResolved) this._scrollUnlock = core.lockPageScroll();
    this._host.classList.add("open");
    this._applyAria();
    if (this._closeOnEscape) this._setupEscapeListener();
    await core.enter({ element: this._host, type: "fade" });
    if (!this._isDisabled) {
      this._focusTrap = core.createFocusTrap();
      this._focusTrap.activate({
        container: this._paneEl,
        initialFocus: "first",
        returnFocusOnDeactivate: false,
        escapeDeactivates: false,
        allowOutsideClick: true
      });
    }
    this._paneEl.dispatchEvent(
      new CustomEvent("drw:open", { bubbles: true })
    );
    (_d = (_c = this._options).onOpenChange) == null ? void 0 : _d.call(_c, true);
  }
  async close(reason = "programmatic") {
    var _a, _b, _c;
    if (this._destroyed) return;
    if (!this._isOpenState) return;
    const cancelled = this._options.onClose !== void 0 && this._options.onClose(reason) === false;
    if (cancelled) return;
    (_a = this._focusTrap) == null ? void 0 : _a.deactivate();
    this._focusTrap = null;
    await core.exit({ element: this._host, type: "fade" });
    this._host.classList.remove("open");
    this._isOpenState = false;
    this._applyAria();
    this._teardownEscapeListener();
    if (this._mask.hasMask) this._hideBackdrop();
    if (this._scrollUnlock) {
      this._scrollUnlock();
      this._scrollUnlock = null;
    }
    const prev = this._prevFocusEl;
    this._prevFocusEl = null;
    if (prev && typeof prev.focus === "function") {
      try {
        prev.focus({ preventScroll: true });
      } catch {
      }
    }
    this._paneEl.dispatchEvent(
      new CustomEvent("drw:close", {
        bubbles: true,
        detail: { reason }
      })
    );
    (_c = (_b = this._options).onOpenChange) == null ? void 0 : _c.call(_b, false);
  }
  toggle() {
    if (this._isOpenState) void this.close("programmatic");
    else void this.open();
  }
  isOpen() {
    return this._isOpenState;
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
    if (state === void 0) return this._isDisabled;
    this._isDisabled = state;
    this.shell.disabled(state);
    this._host.classList.toggle("is-disabled", state);
  }
  focus(target) {
    this.shell.focus(target);
  }
  // -------------------------------------------------------------------------
  // Destroy
  // -------------------------------------------------------------------------
  destroy() {
    var _a;
    if (this._destroyed) return;
    this._destroyed = true;
    (_a = this._focusTrap) == null ? void 0 : _a.deactivate();
    this._focusTrap = null;
    this._teardownEscapeListener();
    this._teardownShellEventReemit();
    if (this._scrollUnlock) {
      this._scrollUnlock();
      this._scrollUnlock = null;
    }
    if (this._mask.hasMask) this._hideBackdrop();
    this.shell.destroy();
    if (this._host.parentNode) {
      this._host.parentNode.removeChild(this._host);
    }
    this._isMounted = false;
    if (this._options.className) {
      this._markerEl.classList.remove(this._options.className);
    }
  }
  // -------------------------------------------------------------------------
  // Private -- DOM
  // -------------------------------------------------------------------------
  _mountToContainer() {
    if (this._isMounted) return;
    this._container.appendChild(this._host);
    this._isMounted = true;
  }
  _applyClasses() {
    HOST_CLASSES.forEach((c) => this._host.classList.remove(c));
    this._host.classList.add("arvo-drw");
    this._host.classList.add(`arvo-drw--side-${this._side}`);
    if (this._mask.hasMask) {
      this._host.classList.add("arvo-drw--with-mask");
      this._host.classList.add(`arvo-drw--mask-${this._mask.variant}`);
    }
    if (this._isOpenState) this._host.classList.add("open");
    if (this._isLoading) this._host.classList.add("loading");
    if (this._isDisabled) this._host.classList.add("is-disabled");
    if (this._options.className) {
      this._host.classList.add(this._options.className);
    }
  }
  _applyStyleVars() {
    const w = toCssLength(this._options.width ?? 320);
    const minW = toCssLength(this._options.minWidth ?? 280);
    const maxW = toCssLength(this._options.maxWidth ?? "80vw");
    if (w) this._host.style.setProperty("--arvo-drw-width", w);
    if (minW) this._host.style.setProperty("--arvo-drw-min-width", minW);
    if (maxW) this._host.style.setProperty("--arvo-drw-max-width", maxW);
    if (this._options.animationDuration) {
      this._host.style.setProperty(
        "--arvo-drw-slide-duration",
        `${this._options.animationDuration}ms`
      );
    }
  }
  _applyAria() {
    this._paneEl.setAttribute("role", "dialog");
    this._paneEl.setAttribute(
      "aria-modal",
      this._mask.hasMask ? "true" : "false"
    );
    if (!this._isOpenState) {
      this._paneEl.setAttribute("aria-hidden", "true");
    } else {
      this._paneEl.removeAttribute("aria-hidden");
    }
    if (this._options.ariaLabel && !this._options.title) {
      this._paneEl.setAttribute("aria-label", this._options.ariaLabel);
    }
    if (this._options.ariaLabelledBy) {
      this._paneEl.setAttribute(
        "aria-labelledby",
        this._options.ariaLabelledBy
      );
    }
  }
  // -------------------------------------------------------------------------
  // Private -- backdrop
  // -------------------------------------------------------------------------
  _showBackdrop() {
    if (this._backdropEl) return;
    if (!this._backdropManager) {
      this._backdropManager = core.createBackdropManager();
    }
    this._backdropEl = this._backdropManager.show({
      opacity: this._mask.opacity,
      // We handle mask-click ourselves (independent of overlayHub's outside
      // click) so the manager only swallows mousedown when closeOnClick is
      // false. Pass true so the manager doesn't add its blocker.
      closeOnClick: this._mask.closeOnClick,
      animated: true,
      container: this._container
    });
    this._backdropEl.classList.add("arvo-drw__backdrop");
    if (this._mask.blur > 0) {
      this._backdropEl.style.backdropFilter = `blur(${this._mask.blur}px)`;
      this._backdropEl.style.setProperty(
        "-webkit-backdrop-filter",
        `blur(${this._mask.blur}px)`
      );
    }
    this._backdropMouseDown = (e) => {
      if (e.target !== this._backdropEl) return;
      this._paneEl.dispatchEvent(
        new CustomEvent("drw:mask-click", { bubbles: true })
      );
      if (this._mask.closeOnClick) {
        void this.close("mask-click");
      }
    };
    this._backdropEl.addEventListener("mousedown", this._backdropMouseDown);
  }
  _hideBackdrop() {
    var _a;
    if (this._backdropEl && this._backdropMouseDown) {
      this._backdropEl.removeEventListener(
        "mousedown",
        this._backdropMouseDown
      );
      this._backdropMouseDown = null;
    }
    (_a = this._backdropManager) == null ? void 0 : _a.hide();
    this._backdropEl = null;
  }
  // -------------------------------------------------------------------------
  // Private -- Escape listener
  // -------------------------------------------------------------------------
  _setupEscapeListener() {
    if (this._escapeListener) return;
    this._escapeListener = (e) => {
      if (e.key !== "Escape") return;
      if (!this._isOpenState) return;
      e.stopPropagation();
      void this.close("escape");
    };
    document.addEventListener("keydown", this._escapeListener, true);
  }
  _teardownEscapeListener() {
    if (this._escapeListener) {
      document.removeEventListener("keydown", this._escapeListener, true);
      this._escapeListener = null;
    }
  }
  // -------------------------------------------------------------------------
  // Private -- shell event re-emit (prefix drw:*)
  // -------------------------------------------------------------------------
  _wireShellEventReemit() {
    const map = {
      back: "drw:back",
      action: "drw:action",
      "tab-select": "drw:tab-select",
      search: "drw:search",
      "item-activate": "drw:item-activate"
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
}
exports.ArvoDrawer = ArvoDrawer;
//# sourceMappingURL=Drawer.cjs.map
