import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useMemo } from "react";
import O9Checkbox from "./index17.js";
import { FilterOption } from "./index47.js";
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
const FilterList = forwardRef(
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
    const draftArray = useMemo(
      () => isMulti ? Array.isArray(draftValue) ? draftValue : [] : [],
      [isMulti, draftValue]
    );
    const draftSingle = !isMulti && typeof draftValue === "string" ? draftValue : null;
    const isItemChecked = (item) => {
      if (selection === "none") return false;
      if (isMulti) return draftArray.includes(item.id);
      return draftSingle === item.id;
    };
    const renderRow = (item, groupId, draggable) => /* @__PURE__ */ jsx(
      FilterOption,
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
    const flatItems = useMemo(
      () => isGrouped ? items.flatMap((g) => g.items) : items,
      [items, isGrouped]
    );
    const globalSelectAll = isMulti && hasGlobalSelectAll ? computeSelectAllState(flatItems, draftArray) : null;
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: "o9ds-hpop__list",
        role: "group",
        "aria-label": ariaLabel ?? "Filter options",
        children: [
          globalSelectAll && /* @__PURE__ */ jsx("div", { className: "o9ds-hpop__sa", children: /* @__PURE__ */ jsx(
            O9Checkbox,
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
            return /* @__PURE__ */ jsxs("div", { className: "o9ds-hpop__grp", "data-group": group.id, children: [
              gi > 0 && /* @__PURE__ */ jsx("div", { className: "o9ds-hpop__divider", role: "separator" }),
              group.label && /* @__PURE__ */ jsx("div", { className: "o9ds-hpop__grp-hdr", children: group.label }),
              groupSA && /* @__PURE__ */ jsx("div", { className: "o9ds-hpop__sa o9ds-hpop__sa--group", children: /* @__PURE__ */ jsx(
                O9Checkbox,
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
export {
  FilterList as default
};
//# sourceMappingURL=index45.js.map
