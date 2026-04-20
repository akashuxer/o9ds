import { jsxs, jsx } from "react/jsx-runtime";
import { forwardRef } from "react";
const O9Link = forwardRef(
  function O9Link2({
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
      "o9ds-lnk",
      `o9ds-lnk--${variant}`,
      `o9ds-lnk--${size}`,
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
    return /* @__PURE__ */ jsxs(
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
          icon && /* @__PURE__ */ jsx(
            "span",
            {
              className: `o9ds-lnk__ico o9con o9con-${icon}`,
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "o9ds-lnk__lbl", children: label }),
          isExternal && /* @__PURE__ */ jsx(
            "span",
            {
              className: "o9ds-lnk__ext o9con o9con-external-link",
              "aria-hidden": "true"
            }
          )
        ]
      }
    );
  }
);
export {
  O9Link as default
};
//# sourceMappingURL=index25.js.map
