"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const IconButton = require("./index12.cjs");
const ActionMenu = require("./index31.cjs");
const useControllableState = require("./index40.cjs");
function sortTabs(tabs) {
  const pinned = tabs.filter((t) => t.pinned);
  const unpinned = tabs.filter((t) => !t.pinned);
  const byOrder = (a, b) => {
    const aO = a.order ?? Infinity;
    const bO = b.order ?? Infinity;
    if (aO !== Infinity || bO !== Infinity) return aO - bO;
    return 0;
  };
  pinned.sort(byOrder);
  unpinned.sort(byOrder);
  return [...pinned, ...unpinned];
}
function getTabOrder(tabs) {
  return sortTabs(tabs).map((t) => t.id);
}
function getActionsWidth(variant, size, isPinnable, isClosable, tab, globalClosable) {
  if (variant === "tertiary") return 0;
  const btnSize = size === "sm" ? 20 : 24;
  const gap = 1;
  let count = 0;
  if (isPinnable) count++;
  if (!tab.pinned && (tab.isClosable ?? globalClosable)) count++;
  if (count === 0) return 0;
  return count * btnSize + (count > 1 ? gap : 0) + 4;
}
const O9Tabstrip = react.forwardRef(
  function O9Tabstrip2({
    variant = "primary",
    size = "lg",
    tabs,
    selectedId: selectedIdProp,
    defaultSelectedId,
    isClosable = false,
    isPinnable = false,
    actionsVisibility = "hover",
    isDisabled = false,
    isLoading = false,
    onSelect,
    onClose,
    onPin,
    className,
    ...rest
  }, ref) {
    var _a;
    const tabRefs = react.useRef(/* @__PURE__ */ new Map());
    const listRef = react.useRef(null);
    const overflowBtnRef = react.useRef(null);
    const fallbackId = ((_a = tabs.find((t) => !t.isDisabled)) == null ? void 0 : _a.id) ?? null;
    const [resolvedSelectedId, setSelectedId] = useControllableState.useControllableState(
      selectedIdProp,
      defaultSelectedId !== void 0 ? defaultSelectedId : fallbackId
    );
    const [hiddenTabIds, setHiddenTabIds] = react.useState(/* @__PURE__ */ new Set());
    const [promotedTabId, setPromotedTabId] = react.useState(null);
    const iconBtnSize = size === "sm" ? "sm" : "md";
    const displayOrder = react.useMemo(() => {
      const sorted = sortTabs(tabs);
      if (promotedTabId) {
        const idx = sorted.findIndex((t) => t.id === promotedTabId);
        if (idx >= 0 && !sorted[idx].pinned) {
          const [promoted] = sorted.splice(idx, 1);
          const firstUnpinnedIdx = sorted.findIndex((t) => !t.pinned);
          if (firstUnpinnedIdx >= 0) {
            sorted.splice(firstUnpinnedIdx, 0, promoted);
          } else {
            sorted.push(promoted);
          }
        }
      }
      return sorted;
    }, [tabs, promotedTabId]);
    const hasOverflow = hiddenTabIds.size > 0;
    const classes = [
      "o9ds-tabs",
      `o9ds-tabs--${variant}`,
      `o9ds-tabs--${size}`,
      actionsVisibility === "always" && "o9ds-tabs--actions-always",
      hasOverflow && "has-overflow",
      isDisabled && "is-disabled",
      isLoading && "loading",
      className
    ].filter(Boolean).join(" ");
    react.useEffect(() => {
      const listEl = listRef.current;
      if (!listEl) return;
      let rafId;
      const checkOverflow = () => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
          const listRect = listEl.getBoundingClientRect();
          const tabEls = listEl.querySelectorAll('[role="tab"]');
          for (const tabEl of tabEls) {
            tabEl.style.visibility = "";
            tabEl.style.position = "";
            tabEl.style.pointerEvents = "";
          }
          const newHidden = /* @__PURE__ */ new Set();
          let firstOverflowReached = false;
          for (const tabEl of tabEls) {
            const tabRect = tabEl.getBoundingClientRect();
            if (firstOverflowReached || tabRect.right > listRect.right) {
              const id = tabEl.getAttribute("data-tab-id");
              if (id) newHidden.add(id);
              firstOverflowReached = true;
            }
          }
          if (newHidden.size > 0) {
            const testRect = listEl.getBoundingClientRect();
            const triggerW = 32;
            const adjustedWidth = testRect.width - triggerW;
            newHidden.clear();
            firstOverflowReached = false;
            for (const tabEl of tabEls) {
              const tabRect = tabEl.getBoundingClientRect();
              if (firstOverflowReached || tabRect.right > testRect.left + adjustedWidth) {
                const id = tabEl.getAttribute("data-tab-id");
                if (id) newHidden.add(id);
                firstOverflowReached = true;
              }
            }
          }
          if (promotedTabId && newHidden.has(promotedTabId)) {
            const lastVisibleUnpinned = displayOrder.filter((t) => !t.pinned && !newHidden.has(t.id)).pop();
            if (lastVisibleUnpinned) {
              newHidden.delete(promotedTabId);
              newHidden.add(lastVisibleUnpinned.id);
            }
          }
          for (const tabEl of tabEls) {
            const id = tabEl.getAttribute("data-tab-id");
            if (id && newHidden.has(id)) {
              tabEl.style.visibility = "hidden";
              tabEl.style.position = "absolute";
              tabEl.style.pointerEvents = "none";
            }
          }
          setHiddenTabIds((prev) => {
            if (prev.size === newHidden.size && [...prev].every((v) => newHidden.has(v)))
              return prev;
            return newHidden;
          });
        });
      };
      const observer = new ResizeObserver(checkOverflow);
      observer.observe(listEl);
      checkOverflow();
      return () => {
        observer.disconnect();
        cancelAnimationFrame(rafId);
      };
    }, [displayOrder, promotedTabId]);
    react.useLayoutEffect(() => {
      if (actionsVisibility !== "hover") return;
      tabRefs.current.forEach((el) => {
        el.style.minWidth = "";
      });
      requestAnimationFrame(() => {
        tabRefs.current.forEach((el) => {
          el.style.minWidth = `${el.offsetWidth}px`;
        });
      });
    }, [actionsVisibility, displayOrder, size]);
    const getEnabledTabs = react.useCallback(
      () => displayOrder.filter((t) => !t.isDisabled && !hiddenTabIds.has(t.id)),
      [displayOrder, hiddenTabIds]
    );
    const focusTab = react.useCallback((tabId) => {
      var _a2;
      (_a2 = tabRefs.current.get(tabId)) == null ? void 0 : _a2.focus();
    }, []);
    const handleKeyDown = react.useCallback(
      (e) => {
        if (isDisabled || isLoading) return;
        const enabled = getEnabledTabs();
        if (enabled.length === 0) return;
        const currentIdx = enabled.findIndex(
          (t) => {
            var _a2;
            return t.id === ((_a2 = document.activeElement) == null ? void 0 : _a2.getAttribute("data-tab-id"));
          }
        );
        if (currentIdx < 0) return;
        let nextIdx = null;
        switch (e.key) {
          case "ArrowRight":
            e.preventDefault();
            nextIdx = (currentIdx + 1) % enabled.length;
            break;
          case "ArrowLeft":
            e.preventDefault();
            nextIdx = (currentIdx - 1 + enabled.length) % enabled.length;
            break;
          case "Home":
            e.preventDefault();
            nextIdx = 0;
            break;
          case "End":
            e.preventDefault();
            nextIdx = enabled.length - 1;
            break;
          case "Enter":
          case " ":
            e.preventDefault();
            if (enabled[currentIdx].id !== resolvedSelectedId) {
              const tabsIdx = tabs.findIndex(
                (t) => t.id === enabled[currentIdx].id
              );
              setSelectedId(enabled[currentIdx].id);
              setPromotedTabId(null);
              onSelect == null ? void 0 : onSelect({ id: enabled[currentIdx].id, index: tabsIdx });
            }
            return;
          case "Delete": {
            const tab = enabled[currentIdx];
            if (tab.pinned) return;
            const tabClosable = tab.isClosable ?? isClosable;
            if (tabClosable) {
              e.preventDefault();
              const tabsIdx = tabs.findIndex((t) => t.id === tab.id);
              onClose == null ? void 0 : onClose({ id: tab.id, index: tabsIdx });
            }
            return;
          }
          default:
            return;
        }
        if (nextIdx !== null) {
          focusTab(enabled[nextIdx].id);
        }
      },
      [isDisabled, isLoading, getEnabledTabs, resolvedSelectedId, tabs, isClosable, onSelect, onClose, focusTab, setSelectedId]
    );
    react.useEffect(() => {
      var _a2;
      if (resolvedSelectedId) {
        (_a2 = tabRefs.current.get(resolvedSelectedId)) == null ? void 0 : _a2.setAttribute("tabindex", "0");
      }
    }, [resolvedSelectedId]);
    const handleTabClick = react.useCallback(
      (tab, index) => {
        if (tab.isDisabled || isDisabled || isLoading) return;
        if (tab.id !== resolvedSelectedId) {
          setSelectedId(tab.id);
          setPromotedTabId(null);
          onSelect == null ? void 0 : onSelect({ id: tab.id, index });
        }
      },
      [isDisabled, isLoading, resolvedSelectedId, setSelectedId, onSelect]
    );
    const overflowMenuItems = react.useMemo(() => {
      const showActions2 = variant !== "tertiary";
      return displayOrder.filter((t) => hiddenTabIds.has(t.id)).map((tab) => {
        const trailingActions = [];
        if (showActions2 && isPinnable) {
          trailingActions.push({
            id: `pin-${tab.id}`,
            icon: tab.pinned ? "push-pin-filled" : "push-pin",
            ariaLabel: tab.pinned ? "Unpin tab" : "Pin tab",
            isDisabled: tab.isDisabled || isDisabled,
            onClick: () => {
              const newPinned = !tab.pinned;
              const updated = tabs.map(
                (t) => t.id === tab.id ? { ...t, pinned: newPinned } : t
              );
              onPin == null ? void 0 : onPin({
                id: tab.id,
                pinned: newPinned,
                tabOrder: getTabOrder(updated)
              });
              return false;
            }
          });
        }
        if (showActions2 && !tab.pinned && (tab.isClosable ?? isClosable)) {
          trailingActions.push({
            id: `close-${tab.id}`,
            icon: "close",
            ariaLabel: "Close tab",
            isDisabled: tab.isDisabled || isDisabled,
            onClick: () => {
              const idx = tabs.findIndex((t) => t.id === tab.id);
              onClose == null ? void 0 : onClose({ id: tab.id, index: idx });
              return false;
            }
          });
        }
        return {
          id: tab.id,
          label: tab.label,
          icon: tab.icon,
          isDisabled: tab.isDisabled,
          active: tab.id === resolvedSelectedId,
          trailingActions: trailingActions.length > 0 ? trailingActions : void 0
        };
      });
    }, [displayOrder, hiddenTabIds, variant, isPinnable, isClosable, isDisabled, tabs, resolvedSelectedId, onPin, onClose]);
    const handleOverflowSelect = react.useCallback(
      (item) => {
        if (item.isDisabled) return;
        const idx = tabs.findIndex((t) => t.id === item.id);
        setSelectedId(item.id);
        setPromotedTabId(item.id);
        onSelect == null ? void 0 : onSelect({ id: item.id, index: idx });
      },
      [tabs, setSelectedId, onSelect]
    );
    const showActions = variant !== "tertiary";
    const tabElements = displayOrder.map((tab) => {
      const index = tabs.findIndex((t) => t.id === tab.id);
      const isSelected = tab.id === resolvedSelectedId;
      const isTabDisabled = tab.isDisabled || isDisabled;
      const tabClosable = showActions && !tab.pinned && (tab.isClosable ?? isClosable);
      const tabPinnable = showActions && isPinnable;
      const tabClasses = [
        "o9ds-tabs__tab",
        isSelected && "active",
        isTabDisabled && "is-disabled",
        tab.pinned && "is-pinned"
      ].filter(Boolean).join(" ");
      const handleClick = () => handleTabClick(tab, index);
      const handlePinClick = (e) => {
        e.stopPropagation();
        if (isDisabled || isLoading) return;
        const newPinned = !tab.pinned;
        const updated = tabs.map(
          (t) => t.id === tab.id ? { ...t, pinned: newPinned } : t
        );
        onPin == null ? void 0 : onPin({
          id: tab.id,
          pinned: newPinned,
          tabOrder: getTabOrder(updated)
        });
      };
      const handleCloseClick = (e) => {
        e.stopPropagation();
        if (isDisabled || isLoading) return;
        onClose == null ? void 0 : onClose({ id: tab.id, index });
      };
      const actionsW = getActionsWidth(
        variant,
        size,
        isPinnable,
        isClosable,
        tab,
        isClosable
      );
      const tabStyle = actionsVisibility === "hover" && actionsW > 0 ? { "--o9ds-tabs-actions-w": `${actionsW}px` } : void 0;
      return /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          ref: (el) => {
            if (el) tabRefs.current.set(tab.id, el);
            else tabRefs.current.delete(tab.id);
          },
          role: "tab",
          className: tabClasses,
          "data-tab-id": tab.id,
          "aria-selected": isSelected,
          "aria-controls": tab.panelId || void 0,
          "aria-disabled": isTabDisabled || void 0,
          tabIndex: isSelected ? 0 : -1,
          style: tabStyle,
          onClick: handleClick,
          onKeyDown: handleKeyDown,
          children: [
            /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "o9ds-tabs__tab-lft", children: [
              tab.icon && /* @__PURE__ */ jsxRuntime.jsx(
                "span",
                {
                  className: `o9ds-tabs__tab-ico o9con o9con-${tab.icon}`,
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsxRuntime.jsx("span", { className: "o9ds-tabs__tab-lbl", children: tab.label })
            ] }),
            showActions && (tabPinnable || tabClosable) && /* @__PURE__ */ jsxRuntime.jsxs("span", { className: "o9ds-tabs__tab-actions", children: [
              tabPinnable && /* @__PURE__ */ jsxRuntime.jsx(
                IconButton.default,
                {
                  icon: tab.pinned ? "push-pin-filled" : "push-pin",
                  variant: "tertiary",
                  size: iconBtnSize,
                  tooltip: tab.pinned ? "Unpin tab" : "Pin tab",
                  isDisabled,
                  isLoading,
                  isSelected: tab.pinned,
                  onClick: handlePinClick,
                  tabIndex: -1
                }
              ),
              tabClosable && /* @__PURE__ */ jsxRuntime.jsx(
                IconButton.default,
                {
                  icon: "close",
                  variant: "tertiary",
                  size: iconBtnSize,
                  tooltip: "Close tab",
                  isDisabled,
                  isLoading,
                  onClick: handleCloseClick,
                  tabIndex: -1
                }
              )
            ] })
          ]
        },
        tab.id
      );
    });
    const overflowTrigger = /* @__PURE__ */ jsxRuntime.jsx(
      IconButton.default,
      {
        icon: "ellipsis-v",
        variant: "tertiary",
        size: iconBtnSize,
        tooltip: "More tabs",
        isDisabled,
        isLoading,
        tabIndex: -1
      }
    );
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: classes,
        "aria-busy": isLoading || void 0,
        ...rest,
        children: [
          /* @__PURE__ */ jsxRuntime.jsx(
            "div",
            {
              ref: listRef,
              className: "o9ds-tabs__list",
              role: "tablist",
              "aria-orientation": "horizontal",
              "aria-label": rest["aria-label"] || "Tabs",
              children: tabElements
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("div", { ref: overflowBtnRef, className: "o9ds-tabs__overflow-btn", children: hasOverflow ? /* @__PURE__ */ jsxRuntime.jsx(
            ActionMenu.O9ActionMenu,
            {
              items: overflowMenuItems,
              trigger: overflowTrigger,
              placement: "bottom-end",
              trailingActionsVisibility: actionsVisibility === "always" ? "always" : "hover",
              closeOnSelect: true,
              isDisabled,
              onSelect: handleOverflowSelect
            }
          ) : /* @__PURE__ */ jsxRuntime.jsx(
            IconButton.default,
            {
              icon: "ellipsis-v",
              variant: "tertiary",
              size: iconBtnSize,
              tooltip: "More tabs",
              isDisabled,
              isLoading,
              tabIndex: -1,
              style: { display: "none" }
            }
          ) })
        ]
      }
    );
  }
);
exports.default = O9Tabstrip;
//# sourceMappingURL=index28.cjs.map
