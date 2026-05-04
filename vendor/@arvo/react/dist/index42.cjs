"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const react = require("react");
const core = require("@arvo/core");
function useListNavigation(options) {
  const {
    items,
    onSelect,
    onEscape,
    wrap = true,
    enabled = true,
    scrollToIndex
  } = options;
  const [activeIndex, setActiveIndex] = react.useState(0);
  const navRef = react.useRef(null);
  const onSelectRef = react.useRef(onSelect);
  const onEscapeRef = react.useRef(onEscape);
  const scrollToIndexRef = react.useRef(scrollToIndex);
  const itemsRef = react.useRef(items);
  onSelectRef.current = onSelect;
  onEscapeRef.current = onEscape;
  scrollToIndexRef.current = scrollToIndex;
  itemsRef.current = items;
  const placeholdersRef = react.useRef([]);
  react.useEffect(() => {
    var _a;
    if (!enabled) {
      (_a = navRef.current) == null ? void 0 : _a.destroy();
      navRef.current = null;
      return;
    }
    const placeholders = items.map(
      () => document.createElement("span")
    );
    placeholdersRef.current = placeholders;
    const nav = core.createArrowNav({
      items: placeholders,
      orientation: "vertical",
      wrap,
      onNavigate(_item, index) {
        var _a2;
        setActiveIndex(index);
        (_a2 = scrollToIndexRef.current) == null ? void 0 : _a2.call(scrollToIndexRef, index);
      },
      onSelect(_item, index) {
        onSelectRef.current(itemsRef.current[index], index);
      },
      onEscape() {
        var _a2;
        (_a2 = onEscapeRef.current) == null ? void 0 : _a2.call(onEscapeRef);
      },
      skipDisabled(index) {
        var _a2;
        return ((_a2 = itemsRef.current[index]) == null ? void 0 : _a2.isDisabled) === true;
      },
      typeAhead: {
        getLabel(index) {
          var _a2;
          return ((_a2 = itemsRef.current[index]) == null ? void 0 : _a2.label) ?? "";
        }
      }
    });
    navRef.current = nav;
    return () => nav.destroy();
  }, [enabled, wrap, items]);
  const handleKeyDown = react.useCallback((event) => {
    var _a;
    (_a = navRef.current) == null ? void 0 : _a.handleKeyDown(event.nativeEvent);
  }, []);
  return { activeIndex, setActiveIndex, handleKeyDown };
}
exports.useListNavigation = useListNavigation;
//# sourceMappingURL=index42.cjs.map
