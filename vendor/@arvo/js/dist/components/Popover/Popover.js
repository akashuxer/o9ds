import { overlayHub, computePosition, createPositionWatcher, createFocusTrap, enter, exit } from "@arvo/core";
import { ArvoButton } from "../Button/Button.js";
import { ArvoIconButton } from "../IconButton/IconButton.js";
let _idCounter = 0;
function mapPlacement(p) {
  switch (p) {
    case "top":
      return "top-start";
    case "bottom":
      return "bottom-start";
    case "left":
      return "left-start";
    case "right":
      return "right-start";
    default:
      return p;
  }
}
function renderContent(container, content) {
  container.textContent = "";
  if (typeof content === "string") {
    container.innerHTML = content;
  } else if (typeof content === "function") {
    content(container);
  } else if (content instanceof Node) {
    container.appendChild(content);
  }
}
const _ArvoPopover = class _ArvoPopover {
  constructor(element, options) {
    this._panelEl = null;
    this._arrowEl = null;
    this._headerEl = null;
    this._bodyEl = null;
    this._footerEl = null;
    this._titleEl = null;
    this._stickyHeaderEl = null;
    this._closeBtnInstance = null;
    this._backBtnInstance = null;
    this._headerActionInstances = [];
    this._footerBtnInstances = [];
    this._positionWatcher = null;
    this._focusTrap = null;
    this._isOpen = false;
    this._hoverOpenTimer = null;
    this._hoverCloseTimer = null;
    this._element = element;
    this._panelId = `arvo-popover-${++_idCounter}`;
    this._options = {
      ..._ArvoPopover.DEFAULTS,
      ...options,
      headerActions: (options == null ? void 0 : options.headerActions) ?? [],
      actions: (options == null ? void 0 : options.actions) ?? [],
      stickyHeader: (options == null ? void 0 : options.stickyHeader) ?? null,
      content: (options == null ? void 0 : options.content) ?? null,
      width: (options == null ? void 0 : options.width) ?? null,
      onOpen: (options == null ? void 0 : options.onOpen) ?? null,
      onClose: (options == null ? void 0 : options.onClose) ?? null,
      onBack: (options == null ? void 0 : options.onBack) ?? null
    };
    this._boundHandleTriggerClick = this._handleTriggerClick.bind(this);
    this._boundHandleTriggerPointerEnter = this._handleTriggerPointerEnter.bind(this);
    this._boundHandleTriggerPointerLeave = this._handleTriggerPointerLeave.bind(this);
    this._boundHandleTriggerFocus = this._handleTriggerFocus.bind(this);
    this._boundHandleTriggerBlur = this._handleTriggerBlur.bind(this);
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
    this._boundHandlePanelPointerEnter = this._handlePanelPointerEnter.bind(this);
    this._boundHandlePanelPointerLeave = this._handlePanelPointerLeave.bind(this);
    this._boundHandleOutsidePointerDown = this._handleOutsidePointerDown.bind(this);
    this._render();
    this._bindEvents();
    element.setAttribute("aria-haspopup", "dialog");
    element.setAttribute("aria-expanded", "false");
    element.setAttribute("aria-controls", this._panelId);
  }
  static initialize(element, options) {
    return new _ArvoPopover(element, options);
  }
  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------
  _render() {
    this._panelEl = document.createElement("div");
    this._panelEl.id = this._panelId;
    this._panelEl.className = this._buildPanelClasses();
    this._panelEl.setAttribute(
      "role",
      this._options.isInteractive ? "dialog" : "tooltip"
    );
    if (this._options.isLoading) {
      this._panelEl.setAttribute("aria-busy", "true");
    }
    if (this._options.isInteractive) {
      this._panelEl.tabIndex = -1;
    }
    const titleId = `${this._panelId}-title`;
    if (this._options.title) {
      this._panelEl.setAttribute("aria-labelledby", titleId);
    }
    if (this._options.hasArrow) {
      this._arrowEl = document.createElement("div");
      this._arrowEl.className = "arvo-popover__arrow";
      this._arrowEl.setAttribute("aria-hidden", "true");
      this._panelEl.appendChild(this._arrowEl);
    }
    if (this._options.hasHeader && (this._options.isClosable || this._options.title || this._options.hasBackButton)) {
      this._renderHeader(titleId);
    }
    if (this._options.stickyHeader) {
      this._stickyHeaderEl = document.createElement("div");
      this._stickyHeaderEl.className = "arvo-popover__sticky-header";
      renderContent(this._stickyHeaderEl, this._options.stickyHeader);
      this._panelEl.appendChild(this._stickyHeaderEl);
    }
    this._bodyEl = document.createElement("div");
    this._bodyEl.className = "arvo-popover__body";
    if (this._options.content) {
      renderContent(this._bodyEl, this._options.content);
    }
    this._panelEl.appendChild(this._bodyEl);
    if (this._options.hasFooter && this._options.actions.length > 0) {
      this._renderFooter();
    }
    this._panelEl.addEventListener("pointerenter", this._boundHandlePanelPointerEnter);
    this._panelEl.addEventListener("pointerleave", this._boundHandlePanelPointerLeave);
    document.body.appendChild(this._panelEl);
  }
  _renderHeader(titleId) {
    if (!this._panelEl) return;
    this._headerEl = document.createElement("div");
    this._headerEl.className = "arvo-popover__header";
    const headerLeft = document.createElement("div");
    headerLeft.className = "arvo-popover__header-left";
    if (this._options.hasBackButton) {
      const backBtnEl = document.createElement("button");
      backBtnEl.className = "arvo-popover__back-btn";
      this._backBtnInstance = ArvoIconButton.initialize(backBtnEl, {
        variant: "tertiary",
        size: "sm",
        icon: "arrow-left",
        tooltip: "Back",
        isDisabled: this._options.isLoading,
        onClick: () => {
          var _a, _b;
          return (_b = (_a = this._options).onBack) == null ? void 0 : _b.call(_a);
        }
      });
      backBtnEl.setAttribute("aria-label", "Back");
      headerLeft.appendChild(backBtnEl);
    }
    if (this._options.title) {
      this._titleEl = document.createElement("span");
      this._titleEl.id = titleId;
      this._titleEl.className = "arvo-popover__title";
      this._titleEl.textContent = this._options.title;
      headerLeft.appendChild(this._titleEl);
    }
    const headerActions = document.createElement("div");
    headerActions.className = "arvo-popover__header-actions";
    for (const ha of this._options.headerActions) {
      if (ha.type === "btn") {
        const actionBtnEl = document.createElement("button");
        const inst = ArvoIconButton.initialize(actionBtnEl, {
          variant: "tertiary",
          size: "sm",
          icon: ha.icon ?? "",
          tooltip: ha.label ?? ha.id,
          isDisabled: this._options.isLoading || ha.isDisabled,
          onClick: ha.onClick ? () => ha.onClick() : void 0
        });
        this._headerActionInstances.push(inst);
        headerActions.appendChild(actionBtnEl);
      }
    }
    if (this._options.isClosable) {
      const closeBtnEl = document.createElement("button");
      closeBtnEl.className = "arvo-popover__close-btn";
      this._closeBtnInstance = ArvoIconButton.initialize(closeBtnEl, {
        variant: "tertiary",
        size: "sm",
        icon: "close",
        tooltip: "Close",
        isDisabled: this._options.isLoading,
        onClick: () => this.close()
      });
      closeBtnEl.setAttribute("aria-label", "Close");
      headerActions.appendChild(closeBtnEl);
    }
    this._headerEl.appendChild(headerLeft);
    this._headerEl.appendChild(headerActions);
    this._panelEl.appendChild(this._headerEl);
  }
  _renderFooter() {
    if (!this._panelEl) return;
    this._footerEl = document.createElement("div");
    this._footerEl.className = "arvo-popover__footer";
    for (const action of this._options.actions) {
      if (action.icon && !action.label) {
        const btnEl = document.createElement("button");
        const inst = ArvoIconButton.initialize(btnEl, {
          variant: action.variant ?? "tertiary",
          size: "md",
          icon: action.icon,
          tooltip: action.label ?? action.id,
          isDisabled: this._options.isLoading || action.isDisabled,
          onClick: (e) => this._handleFooterAction(action, e)
        });
        this._footerBtnInstances.push(inst);
        btnEl.setAttribute("data-action-id", action.id);
        this._footerEl.appendChild(btnEl);
      } else {
        const btnEl = document.createElement("button");
        const inst = ArvoButton.initialize(btnEl, {
          variant: action.variant ?? "secondary",
          size: "md",
          label: action.label,
          icon: action.icon ?? void 0,
          isDisabled: this._options.isLoading || action.isDisabled,
          onClick: (e) => this._handleFooterAction(action, e)
        });
        this._footerBtnInstances.push(inst);
        btnEl.setAttribute("data-action-id", action.id);
        this._footerEl.appendChild(btnEl);
      }
    }
    this._panelEl.appendChild(this._footerEl);
  }
  _buildPanelClasses() {
    const { variant, hasArrow, actions, hasFooter, isClosable, isLoading, isInline } = this._options;
    return [
      "arvo-popover",
      variant === "edge" && "arvo-popover--edge",
      hasArrow && "arvo-popover--with-arrow",
      actions.length > 0 && hasFooter && "arvo-popover--with-footer",
      isClosable && "arvo-popover--closable",
      isInline && "arvo-popover--inline",
      isLoading && "loading"
    ].filter(Boolean).join(" ");
  }
  _handleFooterAction(action, event) {
    var _a;
    const result = (_a = action.action) == null ? void 0 : _a.call(action, event);
    if (result !== false) this.close();
  }
  // ---------------------------------------------------------------------------
  // Events
  // ---------------------------------------------------------------------------
  _bindEvents() {
    const el = this._element;
    if (!el) return;
    const { trigger } = this._options;
    if (trigger === "click") {
      el.addEventListener("click", this._boundHandleTriggerClick);
    } else if (trigger === "hover") {
      el.addEventListener("pointerenter", this._boundHandleTriggerPointerEnter);
      el.addEventListener("pointerleave", this._boundHandleTriggerPointerLeave);
    } else if (trigger === "focus") {
      el.addEventListener("focus", this._boundHandleTriggerFocus);
      el.addEventListener("blur", this._boundHandleTriggerBlur);
    }
  }
  _handleTriggerClick() {
    this.toggle();
  }
  _handleTriggerPointerEnter() {
    this._clearHoverTimers();
    this._hoverOpenTimer = setTimeout(() => this.open(), 150);
  }
  _handleTriggerPointerLeave() {
    this._clearHoverTimers();
    this._hoverCloseTimer = setTimeout(() => this.close(), 100);
  }
  _handleTriggerFocus() {
    this.open();
  }
  _handleTriggerBlur() {
    setTimeout(() => {
      if (this._panelEl && !this._panelEl.contains(document.activeElement)) {
        this.close();
      }
    }, 0);
  }
  _handleKeyDown(e) {
    if (e.key === "Escape") {
      e.stopPropagation();
      this.close();
    }
  }
  _handlePanelPointerEnter() {
    if (this._options.trigger !== "hover") return;
    this._clearHoverTimers();
  }
  _handlePanelPointerLeave() {
    if (this._options.trigger !== "hover") return;
    this._hoverCloseTimer = setTimeout(() => this.close(), 100);
  }
  _handleOutsidePointerDown(e) {
    var _a, _b;
    if (!this._options.closeOnOutside) return;
    const target = e.target;
    if ((_a = this._panelEl) == null ? void 0 : _a.contains(target)) return;
    if ((_b = this._element) == null ? void 0 : _b.contains(target)) return;
    this.close();
  }
  _clearHoverTimers() {
    if (this._hoverOpenTimer) {
      clearTimeout(this._hoverOpenTimer);
      this._hoverOpenTimer = null;
    }
    if (this._hoverCloseTimer) {
      clearTimeout(this._hoverCloseTimer);
      this._hoverCloseTimer = null;
    }
  }
  // ---------------------------------------------------------------------------
  // Width
  // ---------------------------------------------------------------------------
  _applyWidth() {
    if (!this._panelEl) return;
    const w = this._options.width;
    if (w == null) {
      this._panelEl.style.removeProperty("--arvo-popover-width");
    } else if (w === "anchor" && this._element) {
      this._panelEl.style.setProperty("--arvo-popover-width", `${this._element.offsetWidth}px`);
    } else if (typeof w === "number") {
      this._panelEl.style.setProperty("--arvo-popover-width", `${w}px`);
    } else if (typeof w === "string") {
      this._panelEl.style.setProperty("--arvo-popover-width", w);
    }
  }
  // ---------------------------------------------------------------------------
  // Positioning
  // ---------------------------------------------------------------------------
  _applyPosition(result) {
    if (!this._panelEl) return;
    this._panelEl.style.transform = `translate(${result.x}px, ${result.y}px)`;
    if (result.maxHeight != null) {
      this._panelEl.style.maxHeight = `${result.maxHeight}px`;
    }
    if (result.width != null) {
      this._panelEl.style.setProperty("--arvo-popover-width", result.width);
    }
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  open() {
    var _a, _b, _c, _d;
    if (this._isOpen) return;
    if (((_b = (_a = this._options).onOpen) == null ? void 0 : _b.call(_a)) === false) return;
    this._isOpen = true;
    (_c = this._panelEl) == null ? void 0 : _c.classList.add("open");
    (_d = this._element) == null ? void 0 : _d.setAttribute("aria-expanded", "true");
    this._applyWidth();
    overlayHub.open({
      id: this._panelId,
      type: "popover",
      element: this._panelEl,
      triggerElement: this._element ?? void 0,
      priority: 10,
      config: { autoCloseOnOutsideClick: this._options.closeOnOutside },
      onClose: () => this.close()
    });
    if (!this._options.isInline && this._element && this._panelEl) {
      const mapped = mapPlacement(this._options.placement);
      const widthOpt = this._options.width === "anchor" ? "anchor" : void 0;
      const posResult = computePosition(this._element, this._panelEl, {
        placement: mapped,
        gap: this._options.offset,
        width: widthOpt
      });
      this._applyPosition(posResult);
      this._positionWatcher = createPositionWatcher(
        this._element,
        this._panelEl,
        { placement: mapped, gap: this._options.offset, width: widthOpt },
        (result) => this._applyPosition(result)
      );
    }
    if (this._options.isInteractive && this._panelEl) {
      this._focusTrap = createFocusTrap();
      this._focusTrap.activate({
        container: this._panelEl,
        initialFocus: "first",
        returnFocusOnDeactivate: true,
        escapeDeactivates: false,
        allowOutsideClick: true
      });
    }
    document.addEventListener("keydown", this._boundHandleKeyDown, true);
    if (this._options.closeOnOutside) {
      document.addEventListener("pointerdown", this._boundHandleOutsidePointerDown, true);
    }
    if (this._panelEl) {
      enter({ element: this._panelEl, type: "fade", duration: 150 });
    }
    this._dispatchEvent("popover:open");
  }
  close() {
    var _a, _b, _c, _d, _e, _f;
    if (!this._isOpen) return;
    if (((_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a)) === false) return;
    this._isOpen = false;
    this._clearHoverTimers();
    (_c = this._focusTrap) == null ? void 0 : _c.deactivate();
    this._focusTrap = null;
    (_d = this._positionWatcher) == null ? void 0 : _d.destroy();
    this._positionWatcher = null;
    document.removeEventListener("keydown", this._boundHandleKeyDown, true);
    document.removeEventListener("pointerdown", this._boundHandleOutsidePointerDown, true);
    if (this._panelEl) {
      exit({
        element: this._panelEl,
        type: "fade",
        duration: 150,
        onComplete: () => {
          var _a2;
          (_a2 = this._panelEl) == null ? void 0 : _a2.classList.remove("open");
        }
      });
    }
    overlayHub.close(this._panelId);
    (_e = this._element) == null ? void 0 : _e.setAttribute("aria-expanded", "false");
    (_f = this._element) == null ? void 0 : _f.focus({ preventScroll: true });
    this._dispatchEvent("popover:close");
  }
  isOpen() {
    return this._isOpen;
  }
  toggle() {
    if (this._isOpen) this.close();
    else this.open();
  }
  renderBody(content) {
    var _a;
    if (!this._bodyEl) return;
    renderContent(this._bodyEl, content);
    if (this._isOpen) (_a = this._positionWatcher) == null ? void 0 : _a.update();
  }
  setLoading(isLoading) {
    var _a, _b;
    this._options.isLoading = isLoading;
    if (!this._panelEl) return;
    this._panelEl.classList.toggle("loading", isLoading);
    if (isLoading) {
      this._panelEl.setAttribute("aria-busy", "true");
    } else {
      this._panelEl.removeAttribute("aria-busy");
    }
    (_a = this._closeBtnInstance) == null ? void 0 : _a.disabled(isLoading);
    (_b = this._backBtnInstance) == null ? void 0 : _b.disabled(isLoading);
    this._headerActionInstances.forEach((inst) => inst.disabled(isLoading));
  }
  setFooterVisible(visible) {
    if (!this._footerEl) return;
    this._footerEl.style.display = visible ? "" : "none";
  }
  updateFooterAction(actionId, props) {
    const idx = this._options.actions.findIndex((a) => a.id === actionId);
    if (idx === -1) return;
    const action = this._options.actions[idx];
    if (props.isDisabled !== void 0) action.isDisabled = props.isDisabled;
    if (props.label !== void 0) action.label = props.label;
    if (props.icon !== void 0) action.icon = props.icon;
    const inst = this._footerBtnInstances[idx];
    if (inst && props.isDisabled !== void 0) inst.disabled(props.isDisabled);
  }
  reposition() {
    var _a;
    (_a = this._positionWatcher) == null ? void 0 : _a.update();
  }
  destroy() {
    var _a, _b, _c, _d;
    if (this._isOpen) {
      this._isOpen = false;
      (_a = this._focusTrap) == null ? void 0 : _a.deactivate();
      this._focusTrap = null;
      (_b = this._positionWatcher) == null ? void 0 : _b.destroy();
      this._positionWatcher = null;
      overlayHub.close(this._panelId);
      document.removeEventListener("keydown", this._boundHandleKeyDown, true);
      document.removeEventListener("pointerdown", this._boundHandleOutsidePointerDown, true);
    }
    this._clearHoverTimers();
    const el = this._element;
    if (el) {
      el.removeEventListener("click", this._boundHandleTriggerClick);
      el.removeEventListener("pointerenter", this._boundHandleTriggerPointerEnter);
      el.removeEventListener("pointerleave", this._boundHandleTriggerPointerLeave);
      el.removeEventListener("focus", this._boundHandleTriggerFocus);
      el.removeEventListener("blur", this._boundHandleTriggerBlur);
      el.removeAttribute("aria-haspopup");
      el.removeAttribute("aria-controls");
      el.removeAttribute("aria-expanded");
    }
    (_c = this._closeBtnInstance) == null ? void 0 : _c.destroy();
    (_d = this._backBtnInstance) == null ? void 0 : _d.destroy();
    this._headerActionInstances.forEach((i) => i.destroy());
    this._footerBtnInstances.forEach((i) => i.destroy());
    if (this._panelEl) {
      this._panelEl.removeEventListener("pointerenter", this._boundHandlePanelPointerEnter);
      this._panelEl.removeEventListener("pointerleave", this._boundHandlePanelPointerLeave);
      this._panelEl.remove();
    }
    this._element = null;
    this._panelEl = null;
    this._arrowEl = null;
    this._headerEl = null;
    this._bodyEl = null;
    this._footerEl = null;
    this._titleEl = null;
    this._stickyHeaderEl = null;
    this._closeBtnInstance = null;
    this._backBtnInstance = null;
    this._headerActionInstances = [];
    this._footerBtnInstances = [];
  }
  // ---------------------------------------------------------------------------
  // Internal
  // ---------------------------------------------------------------------------
  _dispatchEvent(eventName, detail = {}) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(eventName, { bubbles: true, cancelable: true, detail })
    );
  }
};
_ArvoPopover.DEFAULTS = {
  variant: "space",
  placement: "auto",
  title: "",
  hasHeader: true,
  isClosable: true,
  hasBackButton: false,
  headerActions: [],
  stickyHeader: null,
  content: null,
  actions: [],
  hasFooter: true,
  width: null,
  offset: 2,
  trigger: "click",
  closeOnOutside: true,
  hasArrow: false,
  isLoading: false,
  isInteractive: true,
  isInline: false,
  onOpen: null,
  onClose: null,
  onBack: null
};
let ArvoPopover = _ArvoPopover;
export {
  ArvoPopover
};
//# sourceMappingURL=Popover.js.map
