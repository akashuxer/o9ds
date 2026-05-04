import { jsxs, jsx } from "react/jsx-runtime";
import ArvoButton from "./index11.js";
const DEFAULTS = {
  noDataTitle: "No data available",
  noDataMessage: "Adjust your filter search query.",
  noResultsTitle: "No results found",
  noResultsMessage: "Adjust your filter search query.",
  noResultsClearLabel: "Clear Search"
};
function EmptyState({ kind, config = {}, onClear }) {
  const cfg = { ...DEFAULTS, ...config };
  const isNoResults = kind === "no-results";
  const title = isNoResults ? cfg.noResultsTitle : cfg.noDataTitle;
  const message = isNoResults ? cfg.noResultsMessage : cfg.noDataMessage;
  const illusClass = isNoResults ? "o9illus o9illus-no-results-found" : "o9illus o9illus-no-filters-found";
  const classes = [
    "arvo-hpop__empty",
    isNoResults ? "arvo-hpop__empty--no-results" : "arvo-hpop__empty--no-data"
  ].join(" ");
  return /* @__PURE__ */ jsxs("div", { className: classes, role: "status", children: [
    /* @__PURE__ */ jsx("span", { className: `arvo-hpop__empty-illus ${illusClass}`, "aria-hidden": "true" }),
    /* @__PURE__ */ jsx("span", { className: "arvo-hpop__empty-title", children: title }),
    /* @__PURE__ */ jsx("span", { className: "arvo-hpop__empty-msg", children: message }),
    isNoResults && onClear && /* @__PURE__ */ jsx("span", { className: "arvo-hpop__empty-action", children: /* @__PURE__ */ jsx(
      ArvoButton,
      {
        label: cfg.noResultsClearLabel,
        variant: "outline",
        size: "sm",
        onClick: onClear
      }
    ) })
  ] });
}
export {
  EmptyState,
  EmptyState as default
};
//# sourceMappingURL=index47.js.map
