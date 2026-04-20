"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const Checkbox = require("./index17.cjs");
const FilterOption = require("./index47.cjs");
function computeSelectAllState(items, draft) {
  const enabled = items.filter((i) => !i.isDisabled);
  if (enabled.length === 0) {
    return { isChecked: false, isIndeterminate: false, isDisabled: true };
  }
  const draftSet = new Set(draft);
  const selectedCount = enabled.filter((i) => draftSet.has(i.id)).length;
  return {
    isChecked: selectedCount === enabled.length,
    isIndeterminate: selectedCount > 0 && selectedCount < enabled.length,
    isDisabled: false
  };
}
const FilterList = react.forwardRef(
  function FilterList2({
    items,
    isGrouped,
    selection,
    draftValue,
    enableReorder,
    hasGlobalSelectAll,
    hasAnyDragHandle,
    radioName,
    ariaLabel,
    onToggleItem,
    onToggleGroupSelectAll,
    onToggleGlobalSelectAll,
    onInline
  }, ref) {
    const isMulti = selection === "multi";
    const draftArray = react.useMemo(
      () => isMulti ? Array.isArray(draftValue) ? draftValue : [] : [],
      [isMulti, draftValue]
    );
    const draftSingle = !isMulti && typeof draftValue === "string" ? draftValue : null;
    const isItemChecked = (item) => {
      if (selection === "none") return false;
      if (isMulti) return draftArray.includes(item.id);
      return draftSingle === item.id;
    };
    const renderRow = (item, groupId, draggable) => /* @__PURE__ */ jsxRuntime.jsx(
      FilterOption.FilterOption,
      {
        item,
        selection,
        isChecked: isItemChecked(item),
        hasAnyDragHandle,
        isDraggable: draggable,
        groupId,
        radioName,
        onToggle: onToggleItem,
        onInline
      },
      item.id
    );
    const flatItems = react.useMemo(
      () => isGrouped ? items.flatMap((g) => g.items) : items,
      [items, isGrouped]
    );
    const globalSelectAll = isMulti && hasGlobalSelectAll ? computeSelectAllState(flatItems, draftArray) : null;
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "div",
      {
        ref,
        className: "o9ds-hpop__list",
        role: "group",
        "aria-label": ariaLabel ?? "Filter options",
        children: [
          globalSelectAll && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-hpop__sa", children: /* @__PURE__ */ jsxRuntime.jsx(
            Checkbox.default,
            {
              size: "sm",
              label: "Select all",
              isChecked: globalSelectAll.isChecked,
              isIndeterminate: globalSelectAll.isIndeterminate,
              isDisabled: globalSelectAll.isDisabled,
              onChange: () => onToggleGlobalSelectAll == null ? void 0 : onToggleGlobalSelectAll(),
              "aria-label": "Select all"
            }
          ) }),
          isGrouped ? items.map((group, gi) => {
            const groupDraggable = enableReorder && group.isDraggable !== false;
            const groupSA = isMulti && group.hasSelectAll ? computeSelectAllState(group.items, draftArray) : null;
            return /* @__PURE__ */ jsxRuntime.jsxs("div", { className: "o9ds-hpop__grp", "data-group": group.id, children: [
              gi > 0 && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-hpop__divider", role: "separator" }),
              group.label && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-hpop__grp-hdr", children: group.label }),
              groupSA && /* @__PURE__ */ jsxRuntime.jsx("div", { className: "o9ds-hpop__sa o9ds-hpop__sa--group", children: /* @__PURE__ */ jsxRuntime.jsx(
                Checkbox.default,
                {
                  size: "sm",
                  label: `Select all ${group.label ?? ""}`.trim(),
                  isChecked: groupSA.isChecked,
                  isIndeterminate: groupSA.isIndeterminate,
                  isDisabled: groupSA.isDisabled,
                  onChange: () => onToggleGroupSelectAll == null ? void 0 : onToggleGroupSelectAll(group),
                  "aria-label": `Select all ${group.label ?? group.id}`
                }
              ) }),
              group.items.map((item) => {
                const itemDraggable = groupDraggable && item.isDraggable !== false;
                return renderRow(item, group.id, itemDraggable);
              })
            ] }, group.id);
          }) : items.map((item) => {
            const itemDraggable = enableReorder && item.isDraggable !== false;
            return renderRow(item, null, itemDraggable);
          })
        ]
      }
    );
  }
);
FilterList.displayName = "O9HybridPopoverFilterList";
exports.default = FilterList;
//# sourceMappingURL=index45.cjs.map
