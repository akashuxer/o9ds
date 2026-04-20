import { jsxs, jsx } from "react/jsx-runtime";
import O9Checkbox from "./index17.js";
import O9Radio from "./index16.js";
import O9IconButton from "./index12.js";
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
  const dataChecked = showCheckSlot && isChecked ? "true" : void 0;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "o9ds-hpop__opt",
      role: "option",
      tabIndex: -1,
      "aria-selected": showCheckSlot ? isChecked : void 0,
      "aria-disabled": itemDisabled || void 0,
      "data-id": item.id,
      "data-group": groupId ?? void 0,
      "data-checked": dataChecked,
      children: [
        isDraggable ? /* @__PURE__ */ jsx(
          "span",
          {
            className: "o9ds-hpop__opt__drag",
            role: "button",
            tabIndex: itemDisabled ? -1 : 0,
            "aria-roledescription": "sortable",
            "aria-keyshortcuts": "Control+ArrowUp Control+ArrowDown",
            "aria-label": `Drag ${item.label}`,
            "aria-disabled": itemDisabled || void 0,
            children: /* @__PURE__ */ jsx("i", { className: "o9con o9con-drag-handle", "aria-hidden": "true" })
          }
        ) : hasAnyDragHandle ? /* @__PURE__ */ jsx("span", { className: "o9ds-hpop__opt__spacer", "aria-hidden": "true" }) : null,
        showCheckSlot && /* @__PURE__ */ jsx("span", { className: "o9ds-hpop__opt__check", children: selection === "multi" ? /* @__PURE__ */ jsx(
          O9Checkbox,
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
          O9Radio,
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
            className: "o9ds-hpop__opt__lbl",
            onClick: () => {
              if (itemDisabled) return;
              if (selection === "none") return;
              onToggle(item);
            },
            children: [
              item.label,
              item.secondaryLabel && /* @__PURE__ */ jsx("span", { className: "o9ds-hpop__opt__secondary", children: item.secondaryLabel })
            ]
          }
        ),
        showExclude && /* @__PURE__ */ jsx(
          "span",
          {
            className: "o9ds-hpop__opt__exclude o9con o9con-exclude",
            "aria-label": "Excluded",
            role: "img"
          }
        ),
        showInline && /* @__PURE__ */ jsx("span", { className: "o9ds-hpop__opt__chev", children: /* @__PURE__ */ jsx(
          O9IconButton,
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
//# sourceMappingURL=index47.js.map
