import { filterGroups, filterItems, createArrowNav, overlayHub, computePosition, createPositionWatcher, enter, createFocusTrap, exit } from "@arvo/core";
import { ArvoIconButton } from "../IconButton/IconButton.js";
import { ArvoPopover } from "../Popover/Popover.js";
import { ArvoSearch } from "../Search/Search.js";
import { normalizeSearch } from "../../types/menu-search.js";
let _idCounter = 0;
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) {
    const result = [];
    for (const group of items) {
      for (const item of group.items) result.push(item);
    }
    return result;
  }
  return items;
}
const _ArvoActionMenu = class _ArvoActionMenu {
  constructor(element, options) {
    this._panelEl = null;
    this._scrollEl = null;
    this._searchEl = null;
    this._searchInstance = null;
    this._inlinePanelEl = null;
    this._searchCfg = null;
    this._isOpen = false;
    this._isDisabled = false;
    this._isLoading = false;
    this._activeIndex = -1;
    this._query = "";
    this._inlinePanelOpen = false;
    this._arrowNav = null;
    this._focusTrap = null;
    this._inlineFocusTrap = null;
    this._positionWatcher = null;
    this._flatItems = [];
    this._itemEls = [];
    this._submenus = /* @__PURE__ */ new Map();
    this._trailingActionInstances = [];
    this._inlinePanelBtnInstances = [];
    this._inlinePopoverInstance = null;
    this._submenuTimer = null;
    this._isSubmenu = false;
    this._parentMenu = null;
    this._element = element;
    this._panelId = `arvo-action-menu-${++_idCounter}`;
    this._options = {
      ..._ArvoActionMenu.DEFAULTS,
      ...options,
      items: options.items ?? [],
      maxHeight: options.maxHeight ?? null,
      onOpen: options.onOpen ?? null,
      onClose: options.onClose ?? null,
      onSelect: options.onSelect ?? null,
      onOpenChange: options.onOpenChange ?? null
    };
    this._searchCfg = normalizeSearch(
      this._options.search
    );
    this._isDisabled = this._options.isDisabled;
    this._isLoading = this._options.isLoading;
    this._boundHandleTriggerClick = this._handleTriggerClick.bind(this);
    this._boundHandleKeyDown = this._handleKeyDown.bind(this);
    this._buildPanel();
    this._bindTriggerEvents();
    element.setAttribute("aria-haspopup", "menu");
    element.setAttribute("aria-expanded", "false");
    element.setAttribute("aria-controls", this._panelId);
    if (this._isDisabled) {
      element.setAttribute("aria-disabled", "true");
    }
  }
  static initialize(element, options) {
    return new _ArvoActionMenu(element, options);
  }
  // ---------------------------------------------------------------------------
  // Panel Build
  // ---------------------------------------------------------------------------
  _buildPanel() {
    this._panelEl = document.createElement("div");
    this._panelEl.id = this._panelId;
    this._panelEl.className = this._buildPanelClasses();
    this._panelEl.setAttribute("role", "menu");
    if (this._isLoading) {
      this._panelEl.setAttribute("aria-busy", "true");
    }
    if (this._options.maxHeight) {
      this._panelEl.style.setProperty("--arvo-action-menu-max-height", this._options.maxHeight);
    }
    if (this._searchCfg) {
      this._searchEl = this._buildSearch();
      this._panelEl.appendChild(this._searchEl);
    }
    this._scrollEl = document.createElement("div");
    this._scrollEl.className = "arvo-action-menu__scroll";
    this._panelEl.appendChild(this._scrollEl);
    this._renderItems();
    document.body.appendChild(this._panelEl);
  }
  _buildPanelClasses() {
    return [
      "arvo-action-menu",
      this._options.isLoading && "loading"
    ].filter(Boolean).join(" ");
  }
  _buildSearch() {
    const cfg = this._searchCfg;
    const wrapper = document.createElement("div");
    const classes = ["arvo-action-menu__search"];
    if (cfg.className) classes.push(cfg.className);
    wrapper.className = classes.join(" ");
    const searchRoot = document.createElement("div");
    wrapper.appendChild(searchRoot);
    this._searchInstance = ArvoSearch.initialize(searchRoot, {
      variant: "filter",
      placeholder: cfg.placeholder,
      searchMode: cfg.searchMode,
      minChars: cfg.minChars,
      isClearable: cfg.isClearable,
      shortcut: cfg.shortcut ?? null,
      errorMsg: cfg.errorMsg,
      errorDisplay: "tooltip",
      isDisabled: this._isDisabled,
      "aria-label": "Filter menu items",
      onSearch: (value) => {
        this._handleFilterSearch(value);
      },
      onClear: () => {
        this._handleFilterClear();
      }
    });
    wrapper.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (this._flatItems.length > 0) {
          this._setActiveIndex(0);
        }
      } else if (e.key === "Escape" && !this._query) {
        e.stopPropagation();
        this.close();
      }
    });
    return wrapper;
  }
  // ---------------------------------------------------------------------------
  // Item Rendering
  // ---------------------------------------------------------------------------
  _renderItems() {
    if (!this._scrollEl) return;
    this._scrollEl.textContent = "";
    this._destroyTrailingActions();
    this._itemEls = [];
    this._flatItems = [];
    const items = this._getFilteredItems();
    if (isGrouped(items)) {
      items.forEach((group, groupIndex) => {
        if (groupIndex > 0 && this._options.hasGroupDividers) {
          const divider = document.createElement("hr");
          divider.className = "arvo-action-menu__divider";
          divider.setAttribute("role", "separator");
          this._scrollEl.appendChild(divider);
        }
        if (group.label) {
          const header = document.createElement("div");
          header.className = "arvo-action-menu__hdr";
          header.setAttribute("role", "presentation");
          header.textContent = group.label;
          this._scrollEl.appendChild(header);
        }
        group.items.forEach((item) => this._renderItem(item));
      });
    } else {
      items.forEach((item) => this._renderItem(item));
    }
    if (this._flatItems.length === 0 && this._query) {
      const empty = document.createElement("div");
      empty.className = "arvo-action-menu__empty";
      empty.textContent = "No results found";
      this._scrollEl.appendChild(empty);
    }
  }
  _renderItem(item) {
    var _a, _b;
    const idx = this._flatItems.length;
    this._flatItems.push(item);
    const el = document.createElement("div");
    const hasSecondary = !!item.secondaryLabel;
    el.className = this._buildItemClasses(item);
    el.setAttribute("role", "menuitem");
    el.setAttribute("tabindex", "-1");
    el.setAttribute("data-index", String(idx));
    if (item.isDisabled) {
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
    }
    if (item.submenu) {
      el.setAttribute("aria-haspopup", "menu");
      el.setAttribute("aria-expanded", "false");
    }
    if (item.icon) {
      const ico = document.createElement("span");
      ico.className = `arvo-menu-item__ico o9con o9con-${item.icon}`;
      ico.setAttribute("aria-hidden", "true");
      el.appendChild(ico);
    }
    if (item.avatar) {
      const avatar = document.createElement("img");
      avatar.className = "arvo-menu-item__avatar";
      avatar.src = item.avatar;
      avatar.alt = "";
      avatar.setAttribute("aria-hidden", "true");
      el.appendChild(avatar);
    }
    const txt = document.createElement("span");
    txt.className = "arvo-menu-item__txt";
    const lbl = document.createElement("span");
    lbl.className = "arvo-menu-item__lbl";
    lbl.textContent = item.label;
    txt.appendChild(lbl);
    if (hasSecondary) {
      const secondary = document.createElement("span");
      secondary.className = "arvo-menu-item__secondary";
      secondary.textContent = item.secondaryLabel;
      txt.appendChild(secondary);
    }
    el.appendChild(txt);
    const hasTrailing = item.shortcut || item.submenu || ((_a = item.trailingActions) == null ? void 0 : _a.length);
    if (hasTrailing) {
      const trailing = document.createElement("span");
      trailing.className = "arvo-menu-item__trailing";
      if (item.shortcut) {
        const shortcut = document.createElement("span");
        shortcut.className = "arvo-menu-item__shortcut";
        shortcut.textContent = item.shortcut;
        trailing.appendChild(shortcut);
      }
      if ((_b = item.trailingActions) == null ? void 0 : _b.length) {
        const actionsEl = document.createElement("span");
        actionsEl.className = "arvo-menu-item__actions";
        for (const action of item.trailingActions) {
          const btnEl = document.createElement("button");
          const inst = ArvoIconButton.initialize(btnEl, {
            variant: "tertiary",
            size: "sm",
            icon: action.icon,
            tooltip: action.ariaLabel ?? action.id,
            isDisabled: item.isDisabled || action.isDisabled,
            onClick: (e) => {
              var _a2;
              e.stopPropagation();
              if (action.inlinePopover) {
                this._openInlinePanel(action.inlinePopover);
              } else if (action.inlineHybridPopover) {
                this._openInlinePanel(action.inlineHybridPopover);
              } else {
                (_a2 = action.onClick) == null ? void 0 : _a2.call(action, item, e);
              }
            }
          });
          btnEl.setAttribute("data-action-id", action.id);
          this._trailingActionInstances.push(inst);
          actionsEl.appendChild(btnEl);
        }
        trailing.appendChild(actionsEl);
      }
      if (item.submenu) {
        const submenuIcon = document.createElement("span");
        submenuIcon.className = "arvo-menu-item__submenu o9con o9con-angle-right";
        submenuIcon.setAttribute("aria-hidden", "true");
        trailing.appendChild(submenuIcon);
      }
      el.appendChild(trailing);
    }
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      this._handleItemActivation(idx);
    });
    el.addEventListener("pointerenter", () => {
      if (!item.isDisabled) {
        this._setActiveIndex(idx);
      }
      if (this._options.submenuTrigger === "hover") {
        if (this._submenuTimer) {
          clearTimeout(this._submenuTimer);
          this._submenuTimer = null;
        }
        if (item.submenu && !item.isDisabled) {
          this._submenuTimer = setTimeout(() => {
            this._closeSubmenus();
            this._openSubmenu(idx);
          }, 200);
        } else {
          this._closeSubmenus();
        }
      }
    });
    el.addEventListener("pointerleave", () => {
      if (this._options.submenuTrigger === "hover" && item.submenu) {
        if (this._submenuTimer) {
          clearTimeout(this._submenuTimer);
          this._submenuTimer = null;
        }
      }
    });
    this._itemEls.push(el);
    this._scrollEl.appendChild(el);
  }
  _buildItemClasses(item) {
    var _a;
    const hasSecondary = !!item.secondaryLabel;
    return [
      "arvo-menu-item",
      hasSecondary && "arvo-menu-item--multi-line",
      item.destructive && "arvo-menu-item--destructive",
      this._options.trailingActionsVisibility === "hover" && ((_a = item.trailingActions) == null ? void 0 : _a.length) && "arvo-menu-item--actions-on-hover",
      item.active && "active"
    ].filter(Boolean).join(" ");
  }
  // ---------------------------------------------------------------------------
  // Filtering
  // ---------------------------------------------------------------------------
  _getFilteredItems() {
    if (!this._query) return this._options.items;
    const items = this._options.items;
    if (isGrouped(items)) {
      return filterGroups(items, { query: this._query });
    }
    return filterItems(items, { query: this._query });
  }
  _handleFilterSearch(value) {
    var _a, _b, _c;
    this._query = value;
    this._renderItems();
    this._activeIndex = -1;
    if (this._flatItems.length > 0) {
      this._setupArrowNav();
      this._setActiveIndex(0);
    } else {
      (_a = this._arrowNav) == null ? void 0 : _a.destroy();
      this._arrowNav = null;
    }
    if (this._searchCfg && this._query) {
      (_c = (_b = this._searchCfg).onFilter) == null ? void 0 : _c.call(_b, this._query, this._flatItems.length);
    }
    this._updateSearchCounter();
  }
  _handleFilterClear() {
    var _a, _b;
    this._query = "";
    this._renderItems();
    this._activeIndex = -1;
    if (this._flatItems.length > 0) {
      this._setupArrowNav();
      this._setActiveIndex(0);
    }
    (_b = (_a = this._searchCfg) == null ? void 0 : _a.onClear) == null ? void 0 : _b.call(_a);
    this._updateSearchCounter();
  }
  _updateSearchCounter() {
    var _a;
    if (!((_a = this._searchCfg) == null ? void 0 : _a.counter) || !this._searchInstance) return;
    if (this._query) {
      const total = flattenItems(this._options.items).length;
      this._searchInstance.counter(this._flatItems.length, total);
    } else {
      this._searchInstance.counter();
    }
  }
  // ---------------------------------------------------------------------------
  // Trigger Events
  // ---------------------------------------------------------------------------
  _bindTriggerEvents() {
    var _a;
    (_a = this._element) == null ? void 0 : _a.addEventListener("click", this._boundHandleTriggerClick);
  }
  _handleTriggerClick() {
    if (this._isDisabled) return;
    this.toggle();
  }
  // ---------------------------------------------------------------------------
  // Keyboard
  // ---------------------------------------------------------------------------
  _handleKeyDown(e) {
    var _a;
    if (this._inlinePanelOpen) {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        this._closeInlinePanel();
      }
      return;
    }
    if (this._isSubmenu && (e.key === "ArrowLeft" || e.key === "Escape")) {
      e.preventDefault();
      e.stopPropagation();
      this.close();
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      e.stopPropagation();
      this._closeAll();
      return;
    }
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      this._handleHorizontalNav(e);
      return;
    }
    (_a = this._arrowNav) == null ? void 0 : _a.handleKeyDown(e);
  }
  _handleHorizontalNav(event) {
    var _a;
    const item = this._flatItems[this._activeIndex];
    if (!item) return;
    if (event.key === "ArrowRight") {
      if (item.submenu) {
        this._openSubmenu(this._activeIndex);
        event.preventDefault();
      } else if ((_a = item.trailingActions) == null ? void 0 : _a.length) {
        this._focusTrailingAction(this._activeIndex, 0);
        event.preventDefault();
      }
    } else if (event.key === "ArrowLeft") {
      const activeEl = document.activeElement;
      const itemEl = this._itemEls[this._activeIndex];
      const actionsEl = itemEl == null ? void 0 : itemEl.querySelector(".arvo-menu-item__actions");
      if (actionsEl == null ? void 0 : actionsEl.contains(activeEl)) {
        itemEl.focus({ preventScroll: true });
        event.preventDefault();
      }
    }
  }
  _focusTrailingAction(itemIndex, actionIndex) {
    const itemEl = this._itemEls[itemIndex];
    if (!itemEl) return;
    const buttons = itemEl.querySelectorAll(
      ".arvo-menu-item__actions button"
    );
    if (buttons[actionIndex]) {
      buttons[actionIndex].focus({ preventScroll: true });
    }
  }
  // ---------------------------------------------------------------------------
  // Active Index
  // ---------------------------------------------------------------------------
  _setActiveIndex(index) {
    this._activeIndex = index;
    if (index >= 0 && index < this._itemEls.length) {
      const el = this._itemEls[index];
      el.focus({ preventScroll: true });
      this._scrollIntoView(el);
    }
  }
  _scrollIntoView(el) {
    if (!this._scrollEl) return;
    const containerRect = this._scrollEl.getBoundingClientRect();
    const itemRect = el.getBoundingClientRect();
    if (itemRect.bottom > containerRect.bottom) {
      this._scrollEl.scrollTop += itemRect.bottom - containerRect.bottom;
    } else if (itemRect.top < containerRect.top) {
      this._scrollEl.scrollTop -= containerRect.top - itemRect.top;
    }
  }
  // ---------------------------------------------------------------------------
  // Item Activation
  // ---------------------------------------------------------------------------
  _handleItemActivation(index) {
    var _a, _b, _c;
    const item = this._flatItems[index];
    if (!item || item.isDisabled) return;
    if (item.inlinePopover) {
      this._openInlinePanel(item.inlinePopover);
      return;
    }
    if (item.inlineHybridPopover) {
      this._openInlinePanel(item.inlineHybridPopover);
      return;
    }
    if (item.submenu) {
      this._openSubmenu(index);
      return;
    }
    const event = new CustomEvent("action-menu:select", {
      bubbles: true,
      cancelable: true,
      detail: { item, index }
    });
    const dispatched = ((_a = this._element) == null ? void 0 : _a.dispatchEvent(event)) ?? true;
    const callbackResult = (_c = (_b = this._options).onSelect) == null ? void 0 : _c.call(_b, item, index);
    if (this._options.closeOnSelect && callbackResult !== false && dispatched) {
      this.close();
    }
  }
  // ---------------------------------------------------------------------------
  // Submenus
  // ---------------------------------------------------------------------------
  _openSubmenu(parentIndex) {
    const item = this._flatItems[parentIndex];
    if (!(item == null ? void 0 : item.submenu)) return;
    const parentEl = this._itemEls[parentIndex];
    parentEl.setAttribute("aria-expanded", "true");
    const submenu = _ArvoActionMenu.initialize(parentEl, {
      items: item.submenu,
      placement: "right-start",
      submenuTrigger: this._options.submenuTrigger,
      closeOnSelect: this._options.closeOnSelect,
      onClose: () => {
        parentEl.setAttribute("aria-expanded", "false");
        parentEl.focus({ preventScroll: true });
      },
      onSelect: (selectedItem, selectedIndex) => {
        var _a, _b;
        const result = (_b = (_a = this._options).onSelect) == null ? void 0 : _b.call(_a, selectedItem, selectedIndex);
        if (this._options.closeOnSelect && result !== false) {
          this.close();
        }
        return false;
      }
    });
    this._submenus.set(item.id, submenu);
    submenu._isSubmenu = true;
    submenu._parentMenu = this;
    submenu.open();
  }
  _closeSubmenus() {
    for (const [, submenu] of this._submenus) {
      submenu.destroy();
    }
    this._submenus.clear();
  }
  _closeAll() {
    if (this._parentMenu) {
      this._parentMenu._closeAll();
    } else {
      this.close();
    }
  }
  // ---------------------------------------------------------------------------
  // Inline Panel
  // ---------------------------------------------------------------------------
  _openInlinePanel(config) {
    var _a;
    if (((_a = config.onOpen) == null ? void 0 : _a.call(config)) === false) return;
    this._closeInlinePanel();
    this._inlinePanelEl = document.createElement("div");
    this._inlinePanelEl.className = "arvo-action-menu__inline-panel open";
    this._panelEl.appendChild(this._inlinePanelEl);
    const popConfig = config;
    const hasBackButton = "backButton" in config ? popConfig.hasBackButton !== false : true;
    const isClosable = "closable" in config ? popConfig.isClosable !== false : true;
    const popoverHost = document.createElement("div");
    this._inlinePanelEl.appendChild(popoverHost);
    this._inlinePopoverInstance = ArvoPopover.initialize(popoverHost, {
      isInline: true,
      variant: "edge",
      title: config.title ?? "",
      hasHeader: !!(config.title || hasBackButton || isClosable),
      isClosable,
      hasBackButton,
      content: "content" in popConfig ? popConfig.content : null,
      actions: "actions" in popConfig ? popConfig.actions : void 0,
      isInteractive: true,
      onBack: () => {
        var _a2;
        (_a2 = config.onBack) == null ? void 0 : _a2.call(config);
        this._closeInlinePanel();
      },
      onClose: () => {
        this._closeInlinePanel();
      }
    });
    this._inlinePopoverInstance.open();
    this._inlinePanelOpen = true;
  }
  _closeInlinePanel() {
    var _a, _b;
    if (!this._inlinePanelOpen || !this._inlinePanelEl) return;
    (_a = this._inlinePopoverInstance) == null ? void 0 : _a.destroy();
    this._inlinePopoverInstance = null;
    (_b = this._inlineFocusTrap) == null ? void 0 : _b.deactivate();
    this._inlineFocusTrap = null;
    for (const inst of this._inlinePanelBtnInstances) {
      inst.destroy();
    }
    this._inlinePanelBtnInstances = [];
    this._inlinePanelEl.remove();
    this._inlinePanelEl = null;
    this._inlinePanelOpen = false;
    if (this._activeIndex >= 0 && this._activeIndex < this._itemEls.length) {
      this._itemEls[this._activeIndex].focus({ preventScroll: true });
    }
  }
  // ---------------------------------------------------------------------------
  // Arrow Nav Setup
  // ---------------------------------------------------------------------------
  _setupArrowNav() {
    var _a;
    (_a = this._arrowNav) == null ? void 0 : _a.destroy();
    this._arrowNav = createArrowNav({
      items: this._itemEls,
      orientation: "vertical",
      wrap: true,
      skipDisabled: (i) => {
        var _a2;
        return ((_a2 = this._flatItems[i]) == null ? void 0 : _a2.isDisabled) === true;
      },
      typeAhead: this._searchCfg ? void 0 : { getLabel: (i) => {
        var _a2;
        return ((_a2 = this._flatItems[i]) == null ? void 0 : _a2.label) ?? "";
      } },
      onNavigate: (_el, index) => this._setActiveIndex(index),
      onSelect: (_el, index) => this._handleItemActivation(index),
      onEscape: () => this.close()
    });
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
  }
  // ---------------------------------------------------------------------------
  // Focus Management
  // ---------------------------------------------------------------------------
  _focusInitial() {
    if (this._searchCfg && this._searchEl) {
      const input = this._searchEl.querySelector("input");
      input == null ? void 0 : input.focus({ preventScroll: true });
    } else if (this._flatItems.length > 0) {
      const firstEnabled = this._flatItems.findIndex((item) => !item.isDisabled);
      if (firstEnabled >= 0) {
        this._setActiveIndex(firstEnabled);
      }
    }
  }
  // ---------------------------------------------------------------------------
  // Public API
  // ---------------------------------------------------------------------------
  open() {
    var _a, _b, _c, _d, _e, _f, _g;
    if (this._isOpen || this._isDisabled) return;
    if (((_b = (_a = this._options).onOpen) == null ? void 0 : _b.call(_a)) === false) return;
    const event = new CustomEvent("action-menu:open", {
      bubbles: true,
      cancelable: true
    });
    if (!((_c = this._element) == null ? void 0 : _c.dispatchEvent(event))) return;
    this._isOpen = true;
    this._panelEl.classList.add("open");
    overlayHub.open({
      id: this._panelId,
      type: "action-menu",
      element: this._panelEl,
      triggerElement: this._element,
      priority: 10,
      config: { autoCloseOnOutsideClick: true },
      onClose: () => this.close()
    });
    if (this._element && this._panelEl) {
      const placement = this._options.placement;
      const posResult = computePosition(this._element, this._panelEl, {
        placement,
        gap: 2
      });
      this._applyPosition(posResult);
      this._positionWatcher = createPositionWatcher(
        this._element,
        this._panelEl,
        { placement, gap: 2 },
        (result) => this._applyPosition(result)
      );
    }
    this._renderItems();
    this._setupArrowNav();
    if (this._panelEl) {
      enter({ element: this._panelEl, type: "fade", duration: 150 });
    }
    this._focusInitial();
    if (this._panelEl) {
      this._focusTrap = createFocusTrap();
      this._focusTrap.activate({
        container: this._panelEl,
        initialFocus: "none",
        returnFocusOnDeactivate: true,
        escapeDeactivates: false,
        allowOutsideClick: true
      });
    }
    (_d = this._element) == null ? void 0 : _d.setAttribute("aria-expanded", "true");
    (_f = (_e = this._options).onOpenChange) == null ? void 0 : _f.call(_e, true);
    (_g = this._panelEl) == null ? void 0 : _g.addEventListener("keydown", this._boundHandleKeyDown);
  }
  close() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    if (!this._isOpen) return;
    if (((_b = (_a = this._options).onClose) == null ? void 0 : _b.call(_a)) === false) return;
    const event = new CustomEvent("action-menu:close", {
      bubbles: true,
      cancelable: true
    });
    if (!((_c = this._element) == null ? void 0 : _c.dispatchEvent(event))) return;
    this._isOpen = false;
    if (this._submenuTimer) {
      clearTimeout(this._submenuTimer);
      this._submenuTimer = null;
    }
    this._closeInlinePanel();
    this._closeSubmenus();
    this._query = "";
    (_d = this._searchInstance) == null ? void 0 : _d.clear();
    this._activeIndex = -1;
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
    (_e = this._panelEl) == null ? void 0 : _e.removeEventListener("keydown", this._boundHandleKeyDown);
    (_f = this._arrowNav) == null ? void 0 : _f.destroy();
    this._arrowNav = null;
    (_g = this._positionWatcher) == null ? void 0 : _g.destroy();
    this._positionWatcher = null;
    (_h = this._focusTrap) == null ? void 0 : _h.deactivate();
    this._focusTrap = null;
    overlayHub.close(this._panelId);
    (_i = this._element) == null ? void 0 : _i.setAttribute("aria-expanded", "false");
    (_j = this._element) == null ? void 0 : _j.focus({ preventScroll: true });
    (_l = (_k = this._options).onOpenChange) == null ? void 0 : _l.call(_k, false);
  }
  isOpen() {
    return this._isOpen;
  }
  toggle(force) {
    const shouldOpen = force !== void 0 ? force : !this._isOpen;
    if (shouldOpen) this.open();
    else this.close();
  }
  updateItems(items) {
    var _a;
    this._options.items = items;
    this._query = "";
    (_a = this._searchInstance) == null ? void 0 : _a.clear();
    if (this._isOpen) {
      this._renderItems();
      this._setupArrowNav();
      if (this._flatItems.length > 0) {
        this._setActiveIndex(0);
      } else {
        this._activeIndex = -1;
      }
    }
  }
  setLoading(isLoading) {
    this._isLoading = isLoading;
    this._options.isLoading = isLoading;
    if (!this._panelEl) return;
    this._panelEl.classList.toggle("loading", isLoading);
    if (isLoading) {
      this._panelEl.setAttribute("aria-busy", "true");
    } else {
      this._panelEl.removeAttribute("aria-busy");
    }
  }
  disabled(state) {
    var _a, _b;
    if (state === void 0) {
      return this._isDisabled;
    }
    this._isDisabled = state;
    this._options.isDisabled = state;
    if (state) {
      (_a = this._element) == null ? void 0 : _a.setAttribute("aria-disabled", "true");
      if (this._isOpen) this.close();
    } else {
      (_b = this._element) == null ? void 0 : _b.removeAttribute("aria-disabled");
    }
  }
  destroy() {
    var _a, _b, _c, _d, _e;
    if (this._submenuTimer) {
      clearTimeout(this._submenuTimer);
      this._submenuTimer = null;
    }
    if (this._isOpen) {
      this._isOpen = false;
      this._closeInlinePanel();
      this._closeSubmenus();
      (_a = this._arrowNav) == null ? void 0 : _a.destroy();
      this._arrowNav = null;
      (_b = this._positionWatcher) == null ? void 0 : _b.destroy();
      this._positionWatcher = null;
      (_c = this._focusTrap) == null ? void 0 : _c.deactivate();
      this._focusTrap = null;
      overlayHub.close(this._panelId);
      (_d = this._panelEl) == null ? void 0 : _d.removeEventListener("keydown", this._boundHandleKeyDown);
    }
    const el = this._element;
    if (el) {
      el.removeEventListener("click", this._boundHandleTriggerClick);
      el.removeAttribute("aria-haspopup");
      el.removeAttribute("aria-controls");
      el.removeAttribute("aria-expanded");
      el.removeAttribute("aria-disabled");
    }
    this._destroyTrailingActions();
    (_e = this._searchInstance) == null ? void 0 : _e.destroy();
    this._searchInstance = null;
    if (this._panelEl) {
      this._panelEl.remove();
    }
    this._element = null;
    this._panelEl = null;
    this._scrollEl = null;
    this._searchEl = null;
    this._inlinePanelEl = null;
    this._flatItems = [];
    this._itemEls = [];
  }
  // ---------------------------------------------------------------------------
  // Internal Cleanup
  // ---------------------------------------------------------------------------
  _destroyTrailingActions() {
    for (const inst of this._trailingActionInstances) {
      inst.destroy();
    }
    this._trailingActionInstances = [];
  }
  _dispatchEvent(eventName, detail = {}) {
    var _a;
    (_a = this._element) == null ? void 0 : _a.dispatchEvent(
      new CustomEvent(eventName, { bubbles: true, cancelable: true, detail })
    );
  }
};
_ArvoActionMenu.DEFAULTS = {
  items: [],
  isLoading: false,
  search: void 0,
  placement: "bottom-start",
  maxHeight: null,
  size: "md",
  hasGroupDividers: true,
  trailingActionsVisibility: "always",
  submenuTrigger: "hover",
  closeOnSelect: true,
  isDisabled: false,
  onOpen: null,
  onClose: null,
  onSelect: null,
  onOpenChange: null
};
let ArvoActionMenu = _ArvoActionMenu;
export {
  ArvoActionMenu
};
//# sourceMappingURL=ActionMenu.js.map
