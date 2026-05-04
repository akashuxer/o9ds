import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef, useRef, useEffect, useMemo } from "react";
import ArvoCheckbox from "./index17.js";
import { FilterOption } from "./index48.js";
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
    const localListRef = useRef(null);
    const setListRef = (node) => {
      localListRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    };
    useEffect(() => {
      const list = localListRef.current;
      if (!list) return;
      list.querySelectorAll(
        ".arvo-hpop__sa .arvo-checkbox__input"
      ).forEach((input) => {
        input.tabIndex = -1;
      });
    });
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
    const listRole = selection === "none" ? "group" : "listbox";
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref: setListRef,
        className: "arvo-hpop__list",
        role: listRole,
        "aria-label": ariaLabel ?? "Filter options",
        "aria-multiselectable": isMulti ? true : void 0,
        children: [
          globalSelectAll && /* @__PURE__ */ jsxs(
            "div",
            {
              className: "arvo-hpop__sa",
              role: "option",
              tabIndex: -1,
              "aria-selected": globalSelectAll.isChecked,
              "aria-disabled": globalSelectAll.isDisabled || void 0,
              "data-sa": "global",
              onKeyDown: (event) => {
                if (event.key !== " " && event.key !== "Enter") return;
                if (globalSelectAll.isDisabled) return;
                event.preventDefault();
                onToggleGlobalSelectAll == null ? void 0 : onToggleGlobalSelectAll();
              },
              children: [
                /* @__PURE__ */ jsx(
                  ArvoCheckbox,
                  {
                    size: "sm",
                    isChecked: globalSelectAll.isChecked,
                    isIndeterminate: globalSelectAll.isIndeterminate,
                    isDisabled: globalSelectAll.isDisabled,
                    onChange: () => onToggleGlobalSelectAll == null ? void 0 : onToggleGlobalSelectAll(),
                    "aria-label": "Select all"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "arvo-hpop__sa__lbl",
                    onClick: () => {
                      if (globalSelectAll.isDisabled) return;
                      onToggleGlobalSelectAll == null ? void 0 : onToggleGlobalSelectAll();
                    },
                    children: "Select all"
                  }
                )
              ]
            }
          ),
          isGrouped ? items.map((group, gi) => {
            const groupDraggable = enableReorder && group.isDraggable !== false;
            const groupSA = isMulti && group.hasSelectAll ? computeSelectAllState(group.items, draftArray) : null;
            return /* @__PURE__ */ jsxs("div", { className: "arvo-hpop__grp", "data-group": group.id, children: [
              gi > 0 && /* @__PURE__ */ jsx("div", { className: "arvo-hpop__divider", role: "separator" }),
              group.label && /* @__PURE__ */ jsx("div", { className: "arvo-hpop__grp-hdr", children: group.label }),
              groupSA && /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "arvo-hpop__sa arvo-hpop__sa--group",
                  role: "option",
                  tabIndex: -1,
                  "aria-selected": groupSA.isChecked,
                  "aria-disabled": groupSA.isDisabled || void 0,
                  "data-sa": `group:${group.id}`,
                  onKeyDown: (event) => {
                    if (event.key !== " " && event.key !== "Enter") return;
                    if (groupSA.isDisabled) return;
                    event.preventDefault();
                    onToggleGroupSelectAll == null ? void 0 : onToggleGroupSelectAll(group);
                  },
                  children: [
                    /* @__PURE__ */ jsx(
                      ArvoCheckbox,
                      {
                        size: "sm",
                        isChecked: groupSA.isChecked,
                        isIndeterminate: groupSA.isIndeterminate,
                        isDisabled: groupSA.isDisabled,
                        onChange: () => onToggleGroupSelectAll == null ? void 0 : onToggleGroupSelectAll(group),
                        "aria-label": `Select all ${group.label ?? group.id}`
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "arvo-hpop__sa__lbl",
                        onClick: () => {
                          if (groupSA.isDisabled) return;
                          onToggleGroupSelectAll == null ? void 0 : onToggleGroupSelectAll(group);
                        },
                        children: `Select all ${group.label ?? ""}`.trim()
                      }
                    )
                  ]
                }
              ),
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
FilterList.displayName = "ArvoHybridPopoverFilterList";
export {
  FilterList as default
};
//# sourceMappingURL=index46.js.map
