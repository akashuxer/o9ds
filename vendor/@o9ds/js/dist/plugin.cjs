"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const overlaySetup = require("./setup/overlay-setup.cjs");
const Listbox = require("./components/Listbox/Listbox.cjs");
const DropdownIconButton = require("./components/DropdownIconButton/DropdownIconButton.cjs");
const DropdownButton = require("./components/DropdownButton/DropdownButton.cjs");
const Combobox = require("./components/Combobox/Combobox.cjs");
const Select = require("./components/Select/Select.cjs");
const Search = require("./components/Search/Search.cjs");
const ActionMenu = require("./components/ActionMenu/ActionMenu.cjs");
const BadgeAlert = require("./components/BadgeAlert/BadgeAlert.cjs");
const Breadcrumb = require("./components/Breadcrumb/Breadcrumb.cjs");
const Tabstrip = require("./components/Tabstrip/Tabstrip.cjs");
const IconButtonLink = require("./components/IconButtonLink/IconButtonLink.cjs");
const ButtonLink = require("./components/ButtonLink/ButtonLink.cjs");
const Link = require("./components/Link/Link.cjs");
const FabButton = require("./components/FabButton/FabButton.cjs");
const ButtonGroup = require("./components/ButtonGroup/ButtonGroup.cjs");
const HybridPopover = require("./components/HybridPopover/HybridPopover.cjs");
const Popover = require("./components/Popover/Popover.cjs");
const Switch = require("./components/Switch/Switch.cjs");
const RadioGroup = require("./components/RadioGroup/RadioGroup.cjs");
const CheckboxGroup = require("./components/CheckboxGroup/CheckboxGroup.cjs");
const Checkbox = require("./components/Checkbox/Checkbox.cjs");
const Radio = require("./components/Radio/Radio.cjs");
const NumberInput = require("./components/NumberInput/NumberInput.cjs");
const Textarea = require("./components/Textarea/Textarea.cjs");
const Textbox = require("./components/Textbox/Textbox.cjs");
const IconButton = require("./components/IconButton/IconButton.cjs");
const Button = require("./components/Button/Button.cjs");
const ALL_COMPONENTS = {
  o9Button: { Class: Button.O9Button, dataKey: "o9Button" },
  o9IconButton: { Class: IconButton.O9IconButton, dataKey: "o9IconButton" },
  o9Textbox: { Class: Textbox.O9Textbox, dataKey: "o9Textbox" },
  o9Textarea: { Class: Textarea.O9Textarea, dataKey: "o9Textarea" },
  o9NumberInput: { Class: NumberInput.O9NumberInput, dataKey: "o9NumberInput" },
  o9Radio: { Class: Radio.O9Radio, dataKey: "o9Radio" },
  o9Checkbox: { Class: Checkbox.O9Checkbox, dataKey: "o9Checkbox" },
  o9CheckboxGroup: { Class: CheckboxGroup.O9CheckboxGroup, dataKey: "o9CheckboxGroup" },
  o9RadioGroup: { Class: RadioGroup.O9RadioGroup, dataKey: "o9RadioGroup" },
  o9Switch: { Class: Switch.O9Switch, dataKey: "o9Switch" },
  o9Popover: { Class: Popover.O9Popover, dataKey: "o9Popover" },
  o9HybridPopover: { Class: HybridPopover.O9HybridPopover, dataKey: "o9HybridPopover" },
  o9ButtonGroup: { Class: ButtonGroup.O9ButtonGroup, dataKey: "o9ButtonGroup" },
  o9FabButton: { Class: FabButton.O9FabButton, dataKey: "o9FabButton" },
  o9Link: { Class: Link.O9Link, dataKey: "o9Link" },
  o9ButtonLink: { Class: ButtonLink.O9ButtonLink, dataKey: "o9ButtonLink" },
  o9IconButtonLink: { Class: IconButtonLink.O9IconButtonLink, dataKey: "o9IconButtonLink" },
  o9Tabstrip: { Class: Tabstrip.O9Tabstrip, dataKey: "o9Tabstrip" },
  o9Breadcrumb: { Class: Breadcrumb.O9Breadcrumb, dataKey: "o9Breadcrumb" },
  o9BadgeAlert: { Class: BadgeAlert.O9BadgeAlert, dataKey: "o9BadgeAlert" },
  o9ActionMenu: { Class: ActionMenu.O9ActionMenu, dataKey: "o9ActionMenu" },
  o9Search: { Class: Search.O9Search, dataKey: "o9Search" },
  o9Select: { Class: Select.O9Select, dataKey: "o9Select" },
  o9Combobox: { Class: Combobox.O9Combobox, dataKey: "o9Combobox" },
  o9DropdownButton: { Class: DropdownButton.O9DropdownButton, dataKey: "o9DropdownButton" },
  o9DropdownIconButton: { Class: DropdownIconButton.O9DropdownIconButton, dataKey: "o9DropdownIconButton" },
  o9Listbox: { Class: Listbox.O9Listbox, dataKey: "o9Listbox" }
};
function registerO9Plugins($, components) {
  const entries = components ? components.map((name) => [name, ALL_COMPONENTS[name]]).filter(([, e]) => e) : Object.entries(ALL_COMPONENTS);
  for (const [name, { Class, dataKey }] of entries) {
    $.fn[name] = function(options) {
      return this.each(function() {
        if (!$.data(this, dataKey)) {
          $.data(this, dataKey, new Class(this, options));
        }
      });
    };
  }
  overlaySetup.setupOverlayPlugin($);
}
exports.registerO9Plugins = registerO9Plugins;
//# sourceMappingURL=plugin.cjs.map
