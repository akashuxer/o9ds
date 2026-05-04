"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const Checkbox = require("./index17.cjs");
const Radio = require("./index16.cjs");
const IconButton = require("./index12.cjs");
function FilterOption({
  item,
  selection,
  isChecked,
  isDisabled,
  hasAnyDragHandle,
  isDraggable,
  groupId,
  radioName,
  onToggle,
  onInline
}) {
  const itemDisabled = isDisabled || item.isDisabled;
  const showCheckSlot = selection !== "none";
  const showExclude = selection === "multi" && !!item.isExcluded;
  const showInline = !!item.hasInline;
  const checkSlotRef = react.useRef(null);
  react.useEffect(() => {
    const slot = checkSlotRef.current;
    if (!slot) return;
    slot.querySelectorAll(
      ".arvo-checkbox__input, .arvo-radio__input"
    ).forEach((input) => {
      input.tabIndex = -1;
    });
  });
  const rowRole = selection === "none" ? "listitem" : "option";
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      className: "arvo-hpop__opt",
      role: rowRole,
      tabIndex: -1,
      "aria-selected": rowRole === "option" && showCheckSlot ? isChecked : void 0,
      "aria-disabled": itemDisabled || void 0,
      "data-id": item.id,
      "data-group": groupId ?? void 0,
      onKeyDown: (event) => {
        if (event.key !== " " && event.key !== "Enter") return;
        if (itemDisabled) return;
        if (selection === "none") return;
        const target = event.target;
        if (target !== event.currentTarget) {
          const interactive = target.closest('button, a, [role="button"]');
          if (interactive && interactive !== event.currentTarget) return;
        }
        event.preventDefault();
        onToggle(item);
      },
      children: [
        isDraggable ? /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "arvo-hpop__opt__drag",
            role: "button",
            tabIndex: -1,
            "aria-roledescription": "sortable",
            "aria-keyshortcuts": "Control+ArrowUp Control+ArrowDown",
            "aria-label": `Drag ${item.label}`,
            "aria-disabled": itemDisabled || void 0,
            children: /* @__PURE__ */ jsxRuntime.jsx("i", { className: "o9con o9con-drag-handle", "aria-hidden": "true" })
          }
        ) : hasAnyDragHandle ? /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-hpop__opt__spacer", "aria-hidden": "true" }) : null,
        showCheckSlot && /* @__PURE__ */ jsxRuntime.jsx("span", { ref: checkSlotRef, className: "arvo-hpop__opt__check", children: selection === "multi" ? /* @__PURE__ */ jsxRuntime.jsx(
          Checkbox.default,
          {
            size: "sm",
            isChecked,
            isIndeterminate: item.isIndeterminate,
            isExcluded: item.isExcluded,
            isDisabled: itemDisabled,
            value: item.id,
            "aria-label": item.label,
            onChange: () => onToggle(item)
          }
        ) : /* @__PURE__ */ jsxRuntime.jsx(
          Radio.default,
          {
            size: "sm",
            name: radioName,
            value: item.id,
            isChecked,
            isDisabled: itemDisabled,
            "aria-label": item.label,
            onChange: () => onToggle(item)
          }
        ) }),
        /* @__PURE__ */ jsxRuntime.jsxs(
          "span",
          {
            className: "arvo-hpop__opt__lbl",
            onClick: () => {
              if (itemDisabled) return;
              if (selection === "none") return;
              onToggle(item);
            },
            children: [
              item.label,
              item.secondaryLabel && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-hpop__opt__secondary", children: item.secondaryLabel })
            ]
          }
        ),
        showExclude && /* @__PURE__ */ jsxRuntime.jsx(
          "span",
          {
            className: "arvo-hpop__opt__exclude o9con o9con-exclude",
            "aria-label": "Excluded",
            role: "img"
          }
        ),
        showInline && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-hpop__opt__chev", children: /* @__PURE__ */ jsxRuntime.jsx(
          IconButton.default,
          {
            icon: "angle-right",
            variant: "tertiary",
            size: "sm",
            tooltip: `Open ${item.label}`,
            isDisabled: itemDisabled,
            onClick: (e) => {
              e.stopPropagation();
              onInline == null ? void 0 : onInline(item);
            }
          }
        ) })
      ]
    }
  );
}
exports.FilterOption = FilterOption;
exports.default = FilterOption;
//# sourceMappingURL=index48.cjs.map
