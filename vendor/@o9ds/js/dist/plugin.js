import { setupOverlayPlugin } from "./setup/overlay-setup.js";
import { O9Listbox } from "./components/Listbox/Listbox.js";
import { O9DropdownIconButton } from "./components/DropdownIconButton/DropdownIconButton.js";
import { O9DropdownButton } from "./components/DropdownButton/DropdownButton.js";
import { O9Combobox } from "./components/Combobox/Combobox.js";
import { O9Select } from "./components/Select/Select.js";
import { O9Search } from "./components/Search/Search.js";
import { O9ActionMenu } from "./components/ActionMenu/ActionMenu.js";
import { O9BadgeAlert } from "./components/BadgeAlert/BadgeAlert.js";
import { O9Breadcrumb } from "./components/Breadcrumb/Breadcrumb.js";
import { O9Tabstrip } from "./components/Tabstrip/Tabstrip.js";
import { O9IconButtonLink } from "./components/IconButtonLink/IconButtonLink.js";
import { O9ButtonLink } from "./components/ButtonLink/ButtonLink.js";
import { O9Link } from "./components/Link/Link.js";
import { O9FabButton } from "./components/FabButton/FabButton.js";
import { O9ButtonGroup } from "./components/ButtonGroup/ButtonGroup.js";
import { O9HybridPopover } from "./components/HybridPopover/HybridPopover.js";
import { O9Popover } from "./components/Popover/Popover.js";
import { O9Switch } from "./components/Switch/Switch.js";
import { O9RadioGroup } from "./components/RadioGroup/RadioGroup.js";
import { O9CheckboxGroup } from "./components/CheckboxGroup/CheckboxGroup.js";
import { O9Checkbox } from "./components/Checkbox/Checkbox.js";
import { O9Radio } from "./components/Radio/Radio.js";
import { O9NumberInput } from "./components/NumberInput/NumberInput.js";
import { O9Textarea } from "./components/Textarea/Textarea.js";
import { O9Textbox } from "./components/Textbox/Textbox.js";
import { O9IconButton } from "./components/IconButton/IconButton.js";
import { O9Button } from "./components/Button/Button.js";
const ALL_COMPONENTS = {
  o9Button: { Class: O9Button, dataKey: "o9Button" },
  o9IconButton: { Class: O9IconButton, dataKey: "o9IconButton" },
  o9Textbox: { Class: O9Textbox, dataKey: "o9Textbox" },
  o9Textarea: { Class: O9Textarea, dataKey: "o9Textarea" },
  o9NumberInput: { Class: O9NumberInput, dataKey: "o9NumberInput" },
  o9Radio: { Class: O9Radio, dataKey: "o9Radio" },
  o9Checkbox: { Class: O9Checkbox, dataKey: "o9Checkbox" },
  o9CheckboxGroup: { Class: O9CheckboxGroup, dataKey: "o9CheckboxGroup" },
  o9RadioGroup: { Class: O9RadioGroup, dataKey: "o9RadioGroup" },
  o9Switch: { Class: O9Switch, dataKey: "o9Switch" },
  o9Popover: { Class: O9Popover, dataKey: "o9Popover" },
  o9HybridPopover: { Class: O9HybridPopover, dataKey: "o9HybridPopover" },
  o9ButtonGroup: { Class: O9ButtonGroup, dataKey: "o9ButtonGroup" },
  o9FabButton: { Class: O9FabButton, dataKey: "o9FabButton" },
  o9Link: { Class: O9Link, dataKey: "o9Link" },
  o9ButtonLink: { Class: O9ButtonLink, dataKey: "o9ButtonLink" },
  o9IconButtonLink: { Class: O9IconButtonLink, dataKey: "o9IconButtonLink" },
  o9Tabstrip: { Class: O9Tabstrip, dataKey: "o9Tabstrip" },
  o9Breadcrumb: { Class: O9Breadcrumb, dataKey: "o9Breadcrumb" },
  o9BadgeAlert: { Class: O9BadgeAlert, dataKey: "o9BadgeAlert" },
  o9ActionMenu: { Class: O9ActionMenu, dataKey: "o9ActionMenu" },
  o9Search: { Class: O9Search, dataKey: "o9Search" },
  o9Select: { Class: O9Select, dataKey: "o9Select" },
  o9Combobox: { Class: O9Combobox, dataKey: "o9Combobox" },
  o9DropdownButton: { Class: O9DropdownButton, dataKey: "o9DropdownButton" },
  o9DropdownIconButton: { Class: O9DropdownIconButton, dataKey: "o9DropdownIconButton" },
  o9Listbox: { Class: O9Listbox, dataKey: "o9Listbox" }
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
  setupOverlayPlugin($);
}
export {
  registerO9Plugins
};
//# sourceMappingURL=plugin.js.map
