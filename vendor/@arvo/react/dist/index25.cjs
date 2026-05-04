"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
const jsxRuntime = require("react/jsx-runtime");
const react = require("react");
const ArvoLink = react.forwardRef(
  function ArvoLink2({
    variant = "primary",
    size = "lg",
    label,
    href,
    icon,
    isExternal = false,
    isDisabled = false,
    isVisited = false,
    isLoading = false,
    target,
    rel,
    className,
    onClick,
    ...rest
  }, ref) {
    const effectiveTarget = isExternal && !target ? "_blank" : target;
    const needsRel = effectiveTarget === "_blank";
    const effectiveRel = needsRel ? rel ?? "noopener noreferrer" : rel;
    const classes = [
      "arvo-lnk",
      `arvo-lnk--${variant}`,
      `arvo-lnk--${size}`,
      isVisited ? "visited" : "",
      isDisabled ? "is-disabled" : "",
      isLoading ? "loading" : "",
      className ?? ""
    ].filter(Boolean).join(" ");
    const blocked = isDisabled || isLoading;
    const handleClick = (e) => {
      if (blocked) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      onClick == null ? void 0 : onClick(e);
    };
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "a",
      {
        ref,
        href: isDisabled ? void 0 : href,
        target: isDisabled ? void 0 : effectiveTarget,
        rel: isDisabled ? void 0 : effectiveRel,
        className: classes,
        "aria-disabled": isDisabled ? true : void 0,
        "aria-busy": isLoading ? true : void 0,
        tabIndex: isDisabled ? 0 : void 0,
        onClick: handleClick,
        ...rest,
        children: [
          icon && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: `arvo-lnk__ico o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "arvo-lnk__lbl", children: label }),
          isExternal && /* @__PURE__ */ jsxRuntime.jsx(
            "span",
            {
              className: "arvo-lnk__ext o9con o9con-external-link",
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
  }
);
exports.default = ArvoLink;
//# sourceMappingURL=index25.cjs.map
