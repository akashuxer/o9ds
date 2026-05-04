"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const overlaySetup = require("./setup/overlay-setup.cjs");
const AlertDialog = require("./components/AlertDialog/AlertDialog.cjs");
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
  arvoButton: { Class: Button.ArvoButton, dataKey: "arvoButton" },
  arvoIconButton: { Class: IconButton.ArvoIconButton, dataKey: "arvoIconButton" },
  arvoTextbox: { Class: Textbox.ArvoTextbox, dataKey: "arvoTextbox" },
  arvoTextarea: { Class: Textarea.ArvoTextarea, dataKey: "arvoTextarea" },
  arvoNumberInput: { Class: NumberInput.ArvoNumberInput, dataKey: "arvoNumberInput" },
  arvoRadio: { Class: Radio.ArvoRadio, dataKey: "arvoRadio" },
  arvoCheckbox: { Class: Checkbox.ArvoCheckbox, dataKey: "arvoCheckbox" },
  arvoCheckboxGroup: { Class: CheckboxGroup.ArvoCheckboxGroup, dataKey: "arvoCheckboxGroup" },
  arvoRadioGroup: { Class: RadioGroup.ArvoRadioGroup, dataKey: "arvoRadioGroup" },
  arvoSwitch: { Class: Switch.ArvoSwitch, dataKey: "arvoSwitch" },
  arvoPopover: { Class: Popover.ArvoPopover, dataKey: "arvoPopover" },
  arvoHybridPopover: { Class: HybridPopover.ArvoHybridPopover, dataKey: "arvoHybridPopover" },
  arvoButtonGroup: { Class: ButtonGroup.ArvoButtonGroup, dataKey: "arvoButtonGroup" },
  arvoFabButton: { Class: FabButton.ArvoFabButton, dataKey: "arvoFabButton" },
  arvoLink: { Class: Link.ArvoLink, dataKey: "arvoLink" },
  arvoButtonLink: { Class: ButtonLink.ArvoButtonLink, dataKey: "arvoButtonLink" },
  arvoIconButtonLink: { Class: IconButtonLink.ArvoIconButtonLink, dataKey: "arvoIconButtonLink" },
  arvoTabstrip: { Class: Tabstrip.ArvoTabstrip, dataKey: "arvoTabstrip" },
  arvoBreadcrumb: { Class: Breadcrumb.ArvoBreadcrumb, dataKey: "arvoBreadcrumb" },
  arvoBadgeAlert: { Class: BadgeAlert.ArvoBadgeAlert, dataKey: "arvoBadgeAlert" },
  arvoActionMenu: { Class: ActionMenu.ArvoActionMenu, dataKey: "arvoActionMenu" },
  arvoSearch: { Class: Search.ArvoSearch, dataKey: "arvoSearch" },
  arvoSelect: { Class: Select.ArvoSelect, dataKey: "arvoSelect" },
  arvoCombobox: { Class: Combobox.ArvoCombobox, dataKey: "arvoCombobox" },
  arvoDropdownButton: { Class: DropdownButton.ArvoDropdownButton, dataKey: "arvoDropdownButton" },
  arvoDropdownIconButton: { Class: DropdownIconButton.ArvoDropdownIconButton, dataKey: "arvoDropdownIconButton" },
  arvoListbox: { Class: Listbox.ArvoListbox, dataKey: "arvoListbox" },
  arvoAlertDialog: { Class: AlertDialog.ArvoAlertDialog, dataKey: "arvoAlertDialog" }
};
function registerArvoPlugins($, components) {
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
exports.registerArvoPlugins = registerArvoPlugins;
//# sourceMappingURL=plugin.cjs.map
