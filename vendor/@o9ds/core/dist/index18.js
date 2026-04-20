function getItemIndex(items, el) {
  return items.indexOf(el);
}
function findClosestItem(items, y) {
  for (let i = 0; i < items.length; i++) {
    const rect = items[i].getBoundingClientRect();
    const mid = rect.top + rect.height / 2;
    if (y < mid) return { index: i, position: "above" };
  }
  if (items.length > 0) {
    return { index: items.length - 1, position: "below" };
  }
  return null;
}
function getOrCreateLiveRegion() {
  let region = document.getElementById("o9ds-sortable-live");
  if (!region) {
    region = document.createElement("div");
    region.id = "o9ds-sortable-live";
    region.setAttribute("role", "status");
    region.setAttribute("aria-live", "polite");
    region.setAttribute("aria-atomic", "true");
    Object.assign(region.style, {
      position: "absolute",
      width: "1px",
      height: "1px",
      overflow: "hidden",
      clip: "rect(0 0 0 0)",
      whiteSpace: "nowrap"
    });
    document.body.appendChild(region);
  }
  return region;
}
function announce(region, message) {
  region.textContent = "";
  requestAnimationFrame(() => {
    region.textContent = message;
  });
}
function createSortableList(container, options) {
  const {
    itemSelector,
    handleSelector,
    getGroupOf,
    allowCrossGroup = false,
    onPreview,
    onCommit,
    onCancel,
    ghostClass = "o9ds-sortable--ghost",
    draggingClass = "o9ds-sortable--dragging",
    dropAboveClass = "o9ds-sortable--drop-above",
    dropBelowClass = "o9ds-sortable--drop-below"
  } = options;
  let state = null;
  let destroyed = false;
  function getItems() {
    return Array.from(container.querySelectorAll(itemSelector));
  }
  function getGroupItems(items, group) {
    if (!getGroupOf || group === null) return items;
    return items.filter((item) => getGroupOf(item) === group);
  }
  function clearDropIndicators() {
    const items = getItems();
    for (const item of items) {
      item.classList.remove(dropAboveClass, dropBelowClass);
    }
  }
  function startDrag(item, clientY) {
    if (state) return;
    const items = getItems();
    const index = getItemIndex(items, item);
    if (index === -1) return;
    const group = (getGroupOf == null ? void 0 : getGroupOf(item)) ?? null;
    const rect = item.getBoundingClientRect();
    const clone = item.cloneNode(true);
    clone.classList.add(draggingClass);
    clone.removeAttribute("id");
    Object.assign(clone.style, {
      position: "fixed",
      zIndex: "10000",
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      pointerEvents: "none",
      margin: "0",
      boxShadow: "0 4px 16px rgba(0,0,0,0.15)",
      opacity: "0.95"
    });
    document.body.appendChild(clone);
    item.classList.add(ghostClass);
    const liveRegion = getOrCreateLiveRegion();
    state = {
      sourceItem: item,
      sourceIndex: index,
      sourceGroup: group,
      clone,
      currentIndex: index,
      currentGroup: group,
      startY: clientY,
      offsetY: clientY - rect.top,
      liveRegion,
      items
    };
    container.classList.add("is-dragging");
    document.addEventListener("pointermove", onPointerMove);
    document.addEventListener("pointerup", onPointerUp);
    document.addEventListener("pointercancel", onPointerCancel);
    document.addEventListener("keydown", onKeydownDuringDrag);
  }
  function moveDrag(clientY) {
    if (!state) return;
    state.clone.style.top = `${clientY - state.offsetY}px`;
    clearDropIndicators();
    const target = findClosestItem(state.items, clientY);
    if (!target) return;
    const targetItem = state.items[target.index];
    const targetGroup = (getGroupOf == null ? void 0 : getGroupOf(targetItem)) ?? null;
    if (!allowCrossGroup && getGroupOf && state.sourceGroup !== null) {
      if (targetGroup !== state.sourceGroup) return;
    }
    if (target.position === "above") {
      targetItem.classList.add(dropAboveClass);
    } else {
      targetItem.classList.add(dropBelowClass);
    }
    const newIndex = target.position === "above" ? target.index : target.index + 1;
    if (newIndex !== state.currentIndex || targetGroup !== state.currentGroup) {
      state.currentIndex = newIndex;
      state.currentGroup = targetGroup;
      onPreview == null ? void 0 : onPreview(state.sourceIndex, newIndex);
    }
  }
  function commitDrag() {
    if (!state) return;
    const { sourceIndex, currentIndex, sourceGroup, currentGroup } = state;
    cleanupDrag();
    if (sourceIndex !== currentIndex || sourceGroup !== currentGroup) {
      const groupItems = getGroupItems(
        getItems(),
        currentGroup
      );
      const totalInGroup = groupItems.length;
      const posInGroup = currentIndex > sourceIndex ? currentIndex : currentIndex + 1;
      announce(
        getOrCreateLiveRegion(),
        `Moved item to position ${posInGroup} of ${totalInGroup}`
      );
      onCommit == null ? void 0 : onCommit(sourceIndex, currentIndex, sourceGroup, currentGroup);
    }
  }
  function cancelDrag() {
    if (!state) return;
    cleanupDrag();
    onCancel == null ? void 0 : onCancel();
  }
  function cleanupDrag() {
    if (!state) return;
    state.sourceItem.classList.remove(ghostClass);
    state.clone.remove();
    clearDropIndicators();
    container.classList.remove("is-dragging");
    document.removeEventListener("pointermove", onPointerMove);
    document.removeEventListener("pointerup", onPointerUp);
    document.removeEventListener("pointercancel", onPointerCancel);
    document.removeEventListener("keydown", onKeydownDuringDrag);
    state = null;
  }
  function onPointerDown(e) {
    var _a, _b;
    if (destroyed) return;
    const target = e.target;
    let handleEl = null;
    if (handleSelector) {
      handleEl = target.closest(handleSelector);
      if (!handleEl) return;
    }
    const item = target.closest(itemSelector);
    if (!item || !container.contains(item)) return;
    e.preventDefault();
    (_b = (_a = e.target).setPointerCapture) == null ? void 0 : _b.call(_a, e.pointerId);
    startDrag(item, e.clientY);
  }
  function onPointerMove(e) {
    moveDrag(e.clientY);
  }
  function onPointerUp(_e) {
    commitDrag();
  }
  function onPointerCancel(_e) {
    cancelDrag();
  }
  function onKeydownDuringDrag(e) {
    if (e.key === "Escape") {
      e.preventDefault();
      cancelDrag();
    }
  }
  function onKeydownForReorder(e) {
    if (destroyed || state) return;
    if (!e.ctrlKey && !e.metaKey) return;
    if (e.key !== "ArrowUp" && e.key !== "ArrowDown") return;
    const target = e.target;
    const handle = handleSelector ? target.closest(handleSelector) : null;
    if (handleSelector && !handle) return;
    const item = target.closest(itemSelector);
    if (!item || !container.contains(item)) return;
    e.preventDefault();
    const items = getItems();
    const index = getItemIndex(items, item);
    if (index === -1) return;
    const group = (getGroupOf == null ? void 0 : getGroupOf(item)) ?? null;
    const direction = e.key === "ArrowUp" ? -1 : 1;
    const newIndex = index + direction;
    if (newIndex < 0 || newIndex >= items.length) return;
    const targetItem = items[newIndex];
    const targetGroup = (getGroupOf == null ? void 0 : getGroupOf(targetItem)) ?? null;
    if (!allowCrossGroup && getGroupOf && group !== null) {
      if (targetGroup !== group) return;
    }
    const groupItems = getGroupItems(items, targetGroup ?? group);
    const posInGroup = groupItems.indexOf(targetItem) + 1;
    announce(
      getOrCreateLiveRegion(),
      `Moved item ${direction === -1 ? "up" : "down"} to position ${posInGroup} of ${groupItems.length}`
    );
    onCommit == null ? void 0 : onCommit(index, newIndex, group, targetGroup);
  }
  container.addEventListener("pointerdown", onPointerDown);
  container.addEventListener("keydown", onKeydownForReorder);
  return {
    destroy() {
      destroyed = true;
      if (state) cancelDrag();
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("keydown", onKeydownForReorder);
    },
    isDragging() {
      return state !== null;
    }
  };
}
export {
  createSortableList
};
//# sourceMappingURL=index18.js.map
