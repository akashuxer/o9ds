"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const reactDom = require("react-dom");
const core = require("@o9ds/core");
const Popover = require("./index21.cjs");
const IconButton = require("./index12.cjs");
const Search = require("./index32.cjs");
const useOverlay = require("./index6.cjs");
const useFocusTrap = require("./index7.cjs");
const usePositioning = require("./index9.cjs");
const useListNavigation = require("./index41.cjs");
const menuSearch = require("./index42.cjs");
function isGrouped(items) {
  return items.length > 0 && "items" in items[0];
}
function flattenItems(items) {
  if (isGrouped(items)) {
    return items.flatMap((g) => g.items);
  }
  return items;
}
function MenuSkeleton({ count = 5 }) {
  return /* @__PURE__ */ jsxRuntime.jsx(jsxRuntime.Fragment, { children: Array.from({ length: count }, (_, i) => /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-action-menu__skeleton", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-action-menu__skeleton-icon" }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-action-menu__skeleton-text" })
  ] }, i)) });
}
function SubmenuPanel({
  items,
  closeOnSelect,
  onClose,
  onCloseAll,
  onSelect,
  anchorRef
}) {
  const panelRef = react.useRef(null);
  const enabledItems = react.useMemo(
    () => items.map((item, i) => ({ item, index: i })).filter(({ item }) => !item.isDisabled),
    [items]
  );
  const [activeIdx, setActiveIdx] = react.useState(() => {
    return enabledItems.length > 0 ? enabledItems[0].index : -1;
  });
  const { position } = usePositioning.usePositioning({
    anchorRef,
    floatRef: panelRef,
    placement: "right-start",
    gap: 0,
    enabled: true
  });
  const handleItemClick = react.useCallback(
    (item, index) => {
      if (item.isDisabled) return;
      const result = onSelect(item, index);
      if (result !== false && closeOnSelect) onCloseAll();
    },
    [onSelect, closeOnSelect, onCloseAll]
  );
  const focusItem = react.useCallback(
    (index) => {
      var _a;
      setActiveIdx(index);
      const el = (_a = panelRef.current) == null ? void 0 : _a.querySelector(
        `[data-submenu-index="${index}"]`
      );
      el == null ? void 0 : el.focus({ preventScroll: true });
    },
    []
  );
  const focusFirstEnabled = react.useCallback(() => {
    if (enabledItems.length > 0) focusItem(enabledItems[0].index);
  }, [enabledItems, focusItem]);
  const focusLastEnabled = react.useCallback(() => {
    if (enabledItems.length > 0) focusItem(enabledItems[enabledItems.length - 1].index);
  }, [enabledItems, focusItem]);
  react.useEffect(() => {
    if (position) {
      requestAnimationFrame(() => focusFirstEnabled());
    }
  }, [position, focusFirstEnabled]);
  const handleKeyDown = react.useCallback(
    (e) => {
      const currentEnabledIdx = enabledItems.findIndex(({ index }) => index === activeIdx);
      switch (e.key) {
        case "ArrowDown": {
          e.preventDefault();
          e.stopPropagation();
          const next = currentEnabledIdx < enabledItems.length - 1 ? currentEnabledIdx + 1 : 0;
          focusItem(enabledItems[next].index);
          break;
        }
        case "ArrowUp": {
          e.preventDefault();
          e.stopPropagation();
          const prev = currentEnabledIdx > 0 ? currentEnabledIdx - 1 : enabledItems.length - 1;
          focusItem(enabledItems[prev].index);
          break;
        }
        case "Home": {
          e.preventDefault();
          e.stopPropagation();
          focusFirstEnabled();
          break;
        }
        case "End": {
          e.preventDefault();
          e.stopPropagation();
          focusLastEnabled();
          break;
        }
        case "ArrowLeft":
        case "Escape": {
          e.preventDefault();
          e.stopPropagation();
          onClose();
          break;
        }
        case "Tab": {
          e.preventDefault();
          e.stopPropagation();
          onCloseAll();
          break;
        }
        case "Enter":
        case " ": {
          e.preventDefault();
          e.stopPropagation();
          if (activeIdx >= 0) handleItemClick(items[activeIdx], activeIdx);
          break;
        }
      }
    },
    [activeIdx, enabledItems, items, focusItem, focusFirstEnabled, focusLastEnabled, onClose, onCloseAll, handleItemClick]
  );
  const panelClasses = "o9ds-action-menu o9ds-action-menu--submenu open";
  const panelStyle = position ? { transform: `translate(${position.x}px, ${position.y}px)` } : { opacity: 0, visibility: "hidden", pointerEvents: "none" };
  return reactDom.createPortal(
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        ref: panelRef,
        className: panelClasses,
        role: "menu",
        tabIndex: -1,
        style: panelStyle,
        onKeyDown: handleKeyDown,
        children: /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-action-menu__scroll", children: items.map((item, i) => /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            className: [
              "o9ds-menu-item",
              item.isDisabled && "is-disabled",
              item.destructive && "o9ds-menu-item--destructive",
              i === activeIdx && "focused"
            ].filter(Boolean).join(" "),
            role: "menuitem",
            "aria-disabled": item.isDisabled || void 0,
            tabIndex: i === activeIdx ? 0 : -1,
            "data-submenu-index": i,
            onClick: () => handleItemClick(item, i),
            children: [
              item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: `o9ds-menu-item__ico o9con o9con-${item.icon}`, "aria-hidden": "true" }),
              /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-menu-item__txt", children: /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-menu-item__lbl", children: item.label }) })
            ]
          },
          item.id
        )) })
      }
    ),
    document.body
  );
}
const O9ActionMenu = react.forwardRef(
  function O9ActionMenu2({
    items,
    isLoading = false,
    search,
    placement = "bottom-start",
    maxHeight,
    hasGroupDividers = true,
    trailingActionsVisibility = "always",
    submenuTrigger = "hover",
    closeOnSelect = true,
    isOpen: openProp,
    defaultOpen = false,
    isDisabled = false,
    trigger,
    onOpen,
    onClose,
    onSelect,
    onOpenChange,
    className
  }, ref) {
    const uid = react.useId();
    const menuId = `o9ds-action-menu-${uid}`;
    const searchCfg = react.useMemo(
      () => menuSearch.normalizeSearch(search),
      [search]
    );
    const panelRef = react.useRef(null);
    const triggerRef = react.useRef(null);
    const scrollRef = react.useRef(null);
    const searchWrapperRef = react.useRef(null);
    const inlinePanelRef = react.useRef(null);
    react.useImperativeHandle(ref, () => panelRef.current, []);
    const isControlled = openProp !== void 0;
    const [internalOpen, setInternalOpen] = react.useState(defaultOpen);
    const isOpen = isControlled ? openProp : internalOpen;
    const setOpen = react.useCallback(
      (next) => {
        if (!isControlled) setInternalOpen(next);
        onOpenChange == null ? void 0 : onOpenChange(next);
      },
      [isControlled, onOpenChange]
    );
    const [filterQuery, setFilterQuery] = react.useState("");
    const filteredItems = react.useMemo(() => {
      if (!searchCfg || !filterQuery) return items;
      if (isGrouped(items)) {
        return core.filterGroups(items, { query: filterQuery });
      }
      return core.filterItems(items, { query: filterQuery });
    }, [items, searchCfg, filterQuery]);
    const flatItems = react.useMemo(() => flattenItems(filteredItems), [filteredItems]);
    const totalItemCount = react.useMemo(() => flattenItems(items).length, [items]);
    react.useEffect(() => {
      var _a;
      if (searchCfg && filterQuery) {
        (_a = searchCfg.onFilter) == null ? void 0 : _a.call(searchCfg, filterQuery, flatItems.length);
      }
    }, [searchCfg, filterQuery, flatItems.length]);
    const [openSubmenuId, setOpenSubmenuId] = react.useState(null);
    const submenuTimerRef = react.useRef(null);
    const itemRefsMap = react.useRef(/* @__PURE__ */ new Map());
    const [inlinePanel, setInlinePanel] = react.useState(null);
    const closeInlinePanel = react.useCallback(() => {
      var _a, _b;
      if (!inlinePanel) return;
      if (((_b = (_a = inlinePanel.config).onClose) == null ? void 0 : _b.call(_a)) === false) return;
      setInlinePanel(null);
    }, [inlinePanel]);
    const openInlinePanel = react.useCallback(
      (config, sourceItem) => {
        var _a;
        if (((_a = config.onOpen) == null ? void 0 : _a.call(config)) === false) return;
        setInlinePanel({ config, sourceItem });
      },
      []
    );
    const overlay = useOverlay.useOverlay();
    const handleOpen = react.useCallback(() => {
      var _a;
      if (isOpen || isDisabled) return;
      if ((onOpen == null ? void 0 : onOpen()) === false) return;
      setOpen(true);
      if (panelRef.current) {
        overlay.open({
          id: menuId,
          type: "action-menu",
          element: panelRef.current,
          triggerElement: triggerRef.current ?? void 0,
          priority: 20,
          config: { autoCloseOnOutsideClick: true }
        });
      }
      (_a = triggerRef.current) == null ? void 0 : _a.dispatchEvent(
        new CustomEvent("action-menu:open", { bubbles: true, cancelable: true })
      );
    }, [isOpen, isDisabled, onOpen, setOpen, overlay, menuId]);
    const handleClose = react.useCallback(() => {
      var _a, _b;
      if (!isOpen) return;
      if ((onClose == null ? void 0 : onClose()) === false) return;
      setOpen(false);
      setFilterQuery("");
      setInlinePanel(null);
      setOpenSubmenuId(null);
      overlay.close(menuId);
      (_a = triggerRef.current) == null ? void 0 : _a.focus({ preventScroll: true });
      (_b = triggerRef.current) == null ? void 0 : _b.dispatchEvent(
        new CustomEvent("action-menu:close", { bubbles: true, cancelable: true })
      );
    }, [isOpen, onClose, setOpen, overlay, menuId]);
    const toggleOpen = react.useCallback(() => {
      if (isOpen) handleClose();
      else handleOpen();
    }, [isOpen, handleOpen, handleClose]);
    react.useEffect(() => {
      if (!isOpen || !panelRef.current) return;
      overlay.open({
        id: menuId,
        type: "action-menu",
        element: panelRef.current,
        triggerElement: triggerRef.current ?? void 0,
        priority: 20,
        config: { autoCloseOnOutsideClick: true },
        onClose: handleClose
      });
      return () => {
        overlay.close(menuId);
      };
    }, [isOpen]);
    const { position } = usePositioning.usePositioning({
      anchorRef: triggerRef,
      floatRef: panelRef,
      placement,
      gap: 2,
      enabled: isOpen
    });
    const positioned = !!position;
    useFocusTrap.useFocusTrap(inlinePanel ? inlinePanelRef : panelRef, {
      active: isOpen && positioned && !isLoading,
      escapeDeactivates: false,
      returnFocusOnDeactivate: true,
      allowOutsideClick: true
    });
    const searchFocused = react.useRef(false);
    const keyboardActiveRef = react.useRef(false);
    const handleItemSelect = react.useCallback(
      (item, index) => {
        var _a;
        const menuItem = item;
        if (menuItem.isDisabled) return;
        if (menuItem.submenu) {
          setOpenSubmenuId(menuItem.id);
          return;
        }
        if (menuItem.inlinePopover) {
          openInlinePanel(menuItem.inlinePopover, menuItem);
          return;
        }
        const result = onSelect == null ? void 0 : onSelect(menuItem, index);
        (_a = triggerRef.current) == null ? void 0 : _a.dispatchEvent(
          new CustomEvent("action-menu:select", {
            bubbles: true,
            cancelable: true,
            detail: { item: menuItem, index }
          })
        );
        if (result !== false && closeOnSelect) {
          handleClose();
        }
      },
      [onSelect, closeOnSelect, handleClose, openInlinePanel]
    );
    const scrollToIndex = react.useCallback(
      (index) => {
        var _a;
        keyboardActiveRef.current = true;
        const el = (_a = scrollRef.current) == null ? void 0 : _a.querySelector(
          `[data-index="${index}"]`
        );
        if (el) {
          el.scrollIntoView({ block: "nearest" });
          el.focus({ preventScroll: true });
        }
      },
      []
    );
    const { activeIndex, setActiveIndex, handleKeyDown: navKeyDown } = useListNavigation.useListNavigation({
      items: flatItems,
      onSelect: handleItemSelect,
      onEscape: () => {
        if (inlinePanel) {
          closeInlinePanel();
        } else {
          handleClose();
        }
      },
      wrap: true,
      enabled: isOpen && positioned && !isLoading && !searchFocused.current && !inlinePanel,
      scrollToIndex
    });
    react.useEffect(() => {
      if (isOpen) {
        keyboardActiveRef.current = false;
        setActiveIndex(0);
      }
    }, [isOpen, flatItems, setActiveIndex]);
    react.useEffect(() => {
      if (submenuTrigger === "click" && openSubmenuId) {
        const activeItem = flatItems[activeIndex];
        if ((activeItem == null ? void 0 : activeItem.id) !== openSubmenuId) {
          setOpenSubmenuId(null);
        }
      }
    }, [activeIndex, flatItems, openSubmenuId, submenuTrigger]);
    react.useEffect(() => {
      if (!isOpen || !positioned) return;
      requestAnimationFrame(() => {
        if (searchCfg && searchWrapperRef.current) {
          const input = searchWrapperRef.current.querySelector("input");
          input == null ? void 0 : input.focus();
        }
      });
    }, [isOpen, positioned, searchCfg]);
    react.useEffect(() => {
      if (!isOpen) return;
      const onKeyDown = (e) => {
        if (e.key === "Escape") {
          if (openSubmenuId) return;
          e.stopPropagation();
          if (inlinePanel) {
            closeInlinePanel();
          } else {
            handleClose();
          }
        }
      };
      document.addEventListener("keydown", onKeyDown, true);
      return () => document.removeEventListener("keydown", onKeyDown, true);
    }, [isOpen, handleClose, inlinePanel, closeInlinePanel, openSubmenuId]);
    react.useEffect(() => {
      if (!isOpen) return;
      const onPointerDown = (e) => {
        var _a, _b;
        const target = e.target;
        if ((_a = panelRef.current) == null ? void 0 : _a.contains(target)) return;
        if ((_b = triggerRef.current) == null ? void 0 : _b.contains(target)) return;
        handleClose();
      };
      document.addEventListener("pointerdown", onPointerDown, true);
      return () => document.removeEventListener("pointerdown", onPointerDown, true);
    }, [isOpen, handleClose]);
    const handleTriggerClick = react.useCallback(
      (e) => {
        e.preventDefault();
        toggleOpen();
      },
      [toggleOpen]
    );
    const handleItemClick = react.useCallback(
      (item, flatIndex) => {
        if (item.isDisabled || isLoading) return;
        setActiveIndex(flatIndex);
        handleItemSelect(item, flatIndex);
      },
      [isLoading, setActiveIndex, handleItemSelect]
    );
    const handleTrailingActionClick = react.useCallback(
      (action, item, e) => {
        var _a;
        e.stopPropagation();
        if (action.inlinePopover) {
          openInlinePanel(action.inlinePopover, item);
          return;
        }
        const result = (_a = action.onClick) == null ? void 0 : _a.call(action, item, e);
        if (result !== false && closeOnSelect) {
          handleClose();
        }
      },
      [closeOnSelect, handleClose, openInlinePanel]
    );
    const handlePanelKeyDown = react.useCallback(
      (e) => {
        var _a;
        if (isLoading) return;
        if (!searchFocused.current && !inlinePanel) {
          navKeyDown(e);
        }
        if (e.key === "ArrowRight" && !inlinePanel) {
          const activeItem = flatItems[activeIndex];
          if (activeItem == null ? void 0 : activeItem.submenu) {
            e.preventDefault();
            setOpenSubmenuId(activeItem.id);
            return;
          }
          const activeEl = (_a = scrollRef.current) == null ? void 0 : _a.querySelector(
            `[data-index="${activeIndex}"] .o9ds-menu-item__actions button`
          );
          if (activeEl) {
            e.preventDefault();
            activeEl.focus();
          }
        }
      },
      [isLoading, navKeyDown, inlinePanel, flatItems, activeIndex]
    );
    const handleFilterSearch = react.useCallback(
      (value) => {
        setFilterQuery(value);
        setActiveIndex(0);
      },
      [setActiveIndex]
    );
    const handleFilterClear = react.useCallback(() => {
      var _a;
      setFilterQuery("");
      setActiveIndex(0);
      (_a = searchCfg == null ? void 0 : searchCfg.onClear) == null ? void 0 : _a.call(searchCfg);
    }, [setActiveIndex, searchCfg]);
    const handleSearchFocus = react.useCallback(() => {
      searchFocused.current = true;
    }, []);
    const handleSearchBlur = react.useCallback(() => {
      searchFocused.current = false;
    }, []);
    const handleSearchWrapperKeyDown = react.useCallback(
      (e) => {
        var _a;
        if (e.key === "ArrowDown") {
          e.preventDefault();
          searchFocused.current = false;
          const firstItem = (_a = scrollRef.current) == null ? void 0 : _a.querySelector(
            '[role="menuitem"]'
          );
          firstItem == null ? void 0 : firstItem.focus();
          setActiveIndex(0);
        } else if (e.key === "Escape" && !filterQuery) {
          e.stopPropagation();
          handleClose();
        }
      },
      [setActiveIndex, handleClose, filterQuery]
    );
    const panelClasses = [
      "o9ds-action-menu",
      isOpen && "open",
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    const panelStyle = {
      ...position ? { transform: `translate(${position.x}px, ${position.y}px)` } : {},
      ...maxHeight ? { "--o9ds-action-menu-max-height": maxHeight } : {},
      ...!positioned ? { opacity: 0, pointerEvents: "none" } : {}
    };
    const renderTrailing = (item) => {
      var _a;
      const parts = [];
      if (item.shortcut) {
        parts.push(
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-menu-item__shortcut", children: item.shortcut }, "shortcut")
        );
      }
      if (item.submenu) {
        parts.push(
          /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: "o9ds-menu-item__submenu o9con o9con-angle-right",
              "aria-hidden": "true"
            },
            "submenu"
          )
        );
      }
      if ((_a = item.trailingActions) == null ? void 0 : _a.length) {
        parts.push(
          /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-menu-item__actions", children: item.trailingActions.map((action) => /* @__PURE__ */ jsxRuntime.jsx(
            IconButton.default,
            {
              icon: action.icon,
              variant: "tertiary",
              size: "sm",
              tooltip: action.ariaLabel ?? action.id,
              "aria-label": action.ariaLabel,
              isDisabled: item.isDisabled || isLoading || action.isDisabled,
              onClick: (e) => handleTrailingActionClick(action, item, e)
            },
            action.id
          )) }, "actions")
        );
      }
      if (parts.length === 0) return null;
      return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-menu-item__trailing", children: parts });
    };
    const handleItemMouseEnter = react.useCallback(
      (item, flatIndex) => {
        keyboardActiveRef.current = false;
        setActiveIndex(flatIndex);
        if (submenuTrigger === "hover") {
          if (submenuTimerRef.current) {
            clearTimeout(submenuTimerRef.current);
            submenuTimerRef.current = null;
          }
          if (item.submenu && !item.isDisabled) {
            submenuTimerRef.current = setTimeout(() => {
              setOpenSubmenuId(item.id);
            }, 200);
          } else {
            setOpenSubmenuId(null);
          }
        }
      },
      [setActiveIndex, submenuTrigger]
    );
    const handleItemMouseLeave = react.useCallback(
      (item) => {
        if (submenuTrigger === "hover" && item.submenu) {
          if (submenuTimerRef.current) {
            clearTimeout(submenuTimerRef.current);
            submenuTimerRef.current = null;
          }
        }
      },
      [submenuTrigger]
    );
    react.useEffect(() => {
      return () => {
        if (submenuTimerRef.current) {
          clearTimeout(submenuTimerRef.current);
        }
      };
    }, []);
    const setItemRef = react.useCallback(
      (id, node) => {
        if (node) {
          itemRefsMap.current.set(id, node);
        } else {
          itemRefsMap.current.delete(id);
        }
      },
      []
    );
    const renderItem = (item, flatIndex) => {
      var _a;
      const itemClasses = [
        "o9ds-menu-item",
        item.secondaryLabel && "o9ds-menu-item--multi-line",
        item.destructive && "o9ds-menu-item--destructive",
        trailingActionsVisibility === "hover" && ((_a = item.trailingActions) == null ? void 0 : _a.length) && "o9ds-menu-item--actions-on-hover",
        item.isDisabled && "is-disabled",
        flatIndex === activeIndex && keyboardActiveRef.current && "focused",
        item.active && "active"
      ].filter(Boolean).join(" ");
      const submenuOpen = item.submenu && openSubmenuId === item.id;
      return /* @__PURE__ */ jsxRuntime.jsxs("div", { style: { position: "relative" }, children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          "div",
          {
            ref: (node) => setItemRef(item.id, node),
            className: itemClasses,
            role: "menuitem",
            "aria-disabled": item.isDisabled || void 0,
            "aria-haspopup": item.submenu ? "menu" : void 0,
            "aria-expanded": item.submenu ? !!submenuOpen : void 0,
            tabIndex: flatIndex === activeIndex ? 0 : -1,
            "data-index": flatIndex,
            onClick: () => handleItemClick(item, flatIndex),
            onMouseEnter: () => handleItemMouseEnter(item, flatIndex),
            onMouseLeave: () => handleItemMouseLeave(item),
            children: [
              item.icon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: `o9ds-menu-item__ico o9con o9con-${item.icon}`, "aria-hidden": "true" }),
              item.avatar && /* @__PURE__ */ jsxRuntime.jsx(
                "img",
                {
                  className: "o9ds-menu-item__avatar",
                  src: item.avatar,
                  alt: ""
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-menu-item__txt", children: [
                /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-menu-item__lbl", children: item.label }),
                item.secondaryLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-menu-item__secondary", children: item.secondaryLabel })
              ] }),
              renderTrailing(item)
            ]
          }
        ),
        submenuOpen && /* @__PURE__ */ jsxRuntime.jsx(
          SubmenuPanel,
          {
            items: item.submenu,
            closeOnSelect,
            onClose: () => {
              setOpenSubmenuId(null);
              const parentEl = itemRefsMap.current.get(item.id);
              parentEl == null ? void 0 : parentEl.focus({ preventScroll: true });
            },
            onCloseAll: handleClose,
            onSelect: (subItem, subIndex) => {
              const result = onSelect == null ? void 0 : onSelect(subItem, subIndex);
              if (result !== false && closeOnSelect) handleClose();
              return false;
            },
            anchorRef: { current: itemRefsMap.current.get(item.id) ?? null }
          }
        )
      ] }, item.id);
    };
    const renderContent = () => {
      if (isLoading) {
        return /* @__PURE__ */ jsxRuntime.jsx(MenuSkeleton, {});
      }
      if (flatItems.length === 0) {
        return /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-action-menu__empty", role: "status", children: "No results" });
      }
      if (isGrouped(filteredItems)) {
        let flatIndex = 0;
        return filteredItems.map(
          (group, groupIdx) => /* @__PURE__ */ jsxRuntime.jsxs("div", { role: "group", "aria-label": group.label, children: [
            groupIdx > 0 && hasGroupDividers && /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                className: "o9ds-action-menu__divider",
                role: "separator"
              }
            ),
            group.label && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-action-menu__hdr", children: group.label }),
            group.items.map((item) => {
              const node = renderItem(item, flatIndex);
              flatIndex++;
              return node;
            })
          ] }, group.id)
        );
      }
      return filteredItems.map(
        (item, i) => renderItem(item, i)
      );
    };
    const renderInlinePanel = () => {
      if (!inlinePanel) return null;
      const { config } = inlinePanel;
      return /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          ref: inlinePanelRef,
          className: "o9ds-action-menu__inline-panel open",
          children: /* @__PURE__ */ jsxRuntime.jsx(
            Popover.O9Popover,
            {
              isInline: true,
              variant: "edge",
              title: config.title,
              hasHeader: !!(config.title || config.hasBackButton !== false || config.isClosable !== false),
              isClosable: config.isClosable !== false,
              hasBackButton: config.hasBackButton !== false,
              onBack: () => {
                var _a;
                (_a = config.onBack) == null ? void 0 : _a.call(config);
                closeInlinePanel();
              },
              onClose: () => {
                closeInlinePanel();
              },
              actions: config.actions,
              isOpen: true,
              isInteractive: true,
              children: config.content
            }
          )
        }
      );
    };
    const clonedTrigger = react.isValidElement(trigger) ? react.cloneElement(trigger, {
      ref: (node) => {
        triggerRef.current = node;
        const triggerEl = trigger;
        const originalRef = triggerEl.ref;
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      },
      "aria-expanded": isOpen,
      "aria-haspopup": "menu",
      "aria-controls": menuId,
      onClick: handleTriggerClick,
      isDisabled: isDisabled || trigger.props.isDisabled
    }) : trigger;
    const panel = isOpen ? reactDom.createPortal(
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref: panelRef,
          id: menuId,
          className: panelClasses,
          role: "menu",
          "aria-busy": isLoading || void 0,
          tabIndex: -1,
          style: Object.keys(panelStyle).length > 0 ? panelStyle : void 0,
          onKeyDown: handlePanelKeyDown,
          children: [
            searchCfg && !isLoading && /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                ref: searchWrapperRef,
                className: [
                  "o9ds-action-menu__search",
                  searchCfg.className
                ].filter(Boolean).join(" "),
                onKeyDown: handleSearchWrapperKeyDown,
                children: /* @__PURE__ */ jsxRuntime.jsx(
                  Search.default,
                  {
                    variant: "filter",
                    value: filterQuery,
                    placeholder: searchCfg.placeholder,
                    searchMode: searchCfg.searchMode,
                    minChars: searchCfg.minChars,
                    isClearable: searchCfg.isClearable,
                    shortcut: searchCfg.shortcut,
                    errorMsg: searchCfg.errorMsg,
                    isInlineError: true,
                    counter: searchCfg.counter && filterQuery ? { current: flatItems.length, total: totalItemCount } : null,
                    onSearch: handleFilterSearch,
                    onClear: handleFilterClear,
                    onFocus: handleSearchFocus,
                    onBlur: handleSearchBlur,
                    isDisabled,
                    "aria-label": "Filter menu items"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx("div", { ref: scrollRef, className: "o9ds-action-menu__scroll", children: renderContent() }),
            renderInlinePanel()
          ]
        }
      ),
      document.body
    ) : null;
    return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      clonedTrigger,
      panel
    ] });
  }
);
exports.O9ActionMenu = O9ActionMenu;
exports.default = O9ActionMenu;
//# sourceMappingURL=index31.cjs.map
