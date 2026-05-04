const AUTO_ORDER = [
  "bottom-start",
  "bottom-center",
  "top-start",
  "top-center",
  "right-start",
  "right-center",
  "left-start",
  "left-center",
  "bottom-end",
  "top-end",
  "right-end",
  "left-end"
];
const OPPOSITE = {
  "bottom-start": "top-start",
  "bottom-center": "top-center",
  "bottom-end": "top-end",
  "top-start": "bottom-start",
  "top-center": "bottom-center",
  "top-end": "bottom-end",
  "right-start": "left-start",
  "right-center": "left-center",
  "right-end": "left-end",
  "left-start": "right-start",
  "left-center": "right-center",
  "left-end": "right-end"
};
const ADJACENT = {
  "bottom-start": ["right-start", "left-start"],
  "bottom-center": ["right-center", "left-center"],
  "bottom-end": ["right-end", "left-end"],
  "top-start": ["right-start", "left-start"],
  "top-center": ["right-center", "left-center"],
  "top-end": ["right-end", "left-end"],
  "right-start": ["bottom-start", "top-start"],
  "right-center": ["bottom-center", "top-center"],
  "right-end": ["bottom-end", "top-end"],
  "left-start": ["bottom-start", "top-start"],
  "left-center": ["bottom-center", "top-center"],
  "left-end": ["bottom-end", "top-end"]
};
function isVirtualAnchor(anchor) {
  return typeof anchor.getBoundingClientRect !== "function";
}
function getAnchorRect(anchor) {
  if (isVirtualAnchor(anchor)) {
    return { x: anchor.x, y: anchor.y, width: 0, height: 0 };
  }
  const r = anchor.getBoundingClientRect();
  return { x: r.left, y: r.top, width: r.width, height: r.height };
}
function getBoundaryRect(boundary) {
  if (boundary) {
    const r = boundary.getBoundingClientRect();
    return { x: r.left, y: r.top, width: r.width, height: r.height };
  }
  return { x: 0, y: 0, width: window.innerWidth, height: window.innerHeight };
}
function getBase(p) {
  return p.split("-")[0];
}
function rawPosition(a, fw, fh, p, gap) {
  switch (p) {
    case "bottom-start":
      return { x: a.x, y: a.y + a.height + gap };
    case "bottom-center":
      return { x: a.x + a.width / 2 - fw / 2, y: a.y + a.height + gap };
    case "bottom-end":
      return { x: a.x + a.width - fw, y: a.y + a.height + gap };
    case "top-start":
      return { x: a.x, y: a.y - fh - gap };
    case "top-center":
      return { x: a.x + a.width / 2 - fw / 2, y: a.y - fh - gap };
    case "top-end":
      return { x: a.x + a.width - fw, y: a.y - fh - gap };
    case "right-start":
      return { x: a.x + a.width + gap, y: a.y };
    case "right-center":
      return { x: a.x + a.width + gap, y: a.y + a.height / 2 - fh / 2 };
    case "right-end":
      return { x: a.x + a.width + gap, y: a.y + a.height - fh };
    case "left-start":
      return { x: a.x - fw - gap, y: a.y };
    case "left-center":
      return { x: a.x - fw - gap, y: a.y + a.height / 2 - fh / 2 };
    case "left-end":
      return { x: a.x - fw - gap, y: a.y + a.height - fh };
  }
}
function fitsInBoundary(x, y, fw, fh, b, margin) {
  return x >= b.x + margin && y >= b.y + margin && x + fw <= b.x + b.width - margin && y + fh <= b.y + b.height - margin;
}
function resolveWidth(width, anchorWidth) {
  if (width == null) return null;
  if (width === "anchor") return `${anchorWidth}px`;
  if (typeof width === "number") return `${width}px`;
  return width;
}
function computePosition(anchor, float, options = {}) {
  const {
    placement: requested = "bottom-start",
    gap = 2,
    margin = 8,
    boundary: boundaryEl,
    width: widthOpt
  } = options;
  const aRect = getAnchorRect(anchor);
  const fRect = float.getBoundingClientRect();
  const fw = fRect.width;
  const fh = fRect.height;
  const boundary = getBoundaryRect(boundaryEl);
  let placement;
  let pos;
  if (requested === "auto") {
    placement = AUTO_ORDER[0];
    pos = rawPosition(aRect, fw, fh, placement, gap);
    for (const candidate of AUTO_ORDER) {
      const candidatePos = rawPosition(aRect, fw, fh, candidate, gap);
      if (fitsInBoundary(candidatePos.x, candidatePos.y, fw, fh, boundary, margin)) {
        placement = candidate;
        pos = candidatePos;
        break;
      }
    }
  } else {
    placement = requested;
    pos = rawPosition(aRect, fw, fh, placement, gap);
    if (!fitsInBoundary(pos.x, pos.y, fw, fh, boundary, margin)) {
      const opp = OPPOSITE[placement];
      const oppPos = rawPosition(aRect, fw, fh, opp, gap);
      if (fitsInBoundary(oppPos.x, oppPos.y, fw, fh, boundary, margin)) {
        placement = opp;
        pos = oppPos;
      } else {
        const adj = ADJACENT[placement];
        for (const candidate of adj) {
          const adjPos = rawPosition(aRect, fw, fh, candidate, gap);
          if (fitsInBoundary(adjPos.x, adjPos.y, fw, fh, boundary, margin)) {
            placement = candidate;
            pos = adjPos;
            break;
          }
        }
      }
    }
  }
  pos.x = Math.max(
    boundary.x + margin,
    Math.min(pos.x, boundary.x + boundary.width - fw - margin)
  );
  const base = getBase(placement);
  let maxHeight = null;
  if (base === "bottom") {
    maxHeight = Math.max(50, boundary.y + boundary.height - pos.y - margin);
  } else if (base === "top") {
    maxHeight = Math.max(50, aRect.y - boundary.y - margin);
  }
  const width = resolveWidth(widthOpt, aRect.width);
  pos.x += window.scrollX;
  pos.y += window.scrollY;
  return { x: pos.x, y: pos.y, placement, maxHeight, width };
}
export {
  computePosition
};
//# sourceMappingURL=index11.js.map
