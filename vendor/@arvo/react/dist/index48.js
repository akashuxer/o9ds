import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
import ArvoCheckbox from "./index17.js";
import ArvoRadio from "./index16.js";
import ArvoIconButton from "./index12.js";
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
  const checkSlotRef = useRef(null);
  useEffect(() => {
    const slot = checkSlotRef.current;
    if (!slot) return;
    slot.querySelectorAll(
      ".arvo-checkbox__input, .arvo-radio__input"
    ).forEach((input) => {
      input.tabIndex = -1;
    });
  });
  const rowRole = selection === "none" ? "listitem" : "option";
  return /* @__PURE__ */ jsxs(
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
        isDraggable ? /* @__PURE__ */ jsx(
          "span",
          {
            className: "arvo-hpop__opt__drag",
            role: "button",
            tabIndex: -1,
            "aria-roledescription": "sortable",
            "aria-keyshortcuts": "Control+ArrowUp Control+ArrowDown",
            "aria-label": `Drag ${item.label}`,
            "aria-disabled": itemDisabled || void 0,
            children: /* @__PURE__ */ jsx("i", { className: "o9con o9con-drag-handle", "aria-hidden": "true" })
          }
        ) : hasAnyDragHandle ? /* @__PURE__ */ jsx("span", { className: "arvo-hpop__opt__spacer", "aria-hidden": "true" }) : null,
        showCheckSlot && /* @__PURE__ */ jsx("span", { ref: checkSlotRef, className: "arvo-hpop__opt__check", children: selection === "multi" ? /* @__PURE__ */ jsx(
          ArvoCheckbox,
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
        ) : /* @__PURE__ */ jsx(
          ArvoRadio,
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
        /* @__PURE__ */ jsxs(
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
              item.secondaryLabel && /* @__PURE__ */ jsx("span", { className: "arvo-hpop__opt__secondary", children: item.secondaryLabel })
            ]
          }
        ),
        showExclude && /* @__PURE__ */ jsx(
          "span",
          {
            className: "arvo-hpop__opt__exclude o9con o9con-exclude",
            "aria-label": "Excluded",
            role: "img"
          }
        ),
        showInline && /* @__PURE__ */ jsx("span", { className: "arvo-hpop__opt__chev", children: /* @__PURE__ */ jsx(
          ArvoIconButton,
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
export {
  FilterOption,
  FilterOption as default
};
//# sourceMappingURL=index48.js.map
