import { setupOverlayPlugin } from "./setup/overlay-setup.js";
import { ArvoAlertDialog } from "./components/AlertDialog/AlertDialog.js";
import { ArvoListbox } from "./components/Listbox/Listbox.js";
import { ArvoDropdownIconButton } from "./components/DropdownIconButton/DropdownIconButton.js";
import { ArvoDropdownButton } from "./components/DropdownButton/DropdownButton.js";
import { ArvoCombobox } from "./components/Combobox/Combobox.js";
import { ArvoSelect } from "./components/Select/Select.js";
import { ArvoSearch } from "./components/Search/Search.js";
import { ArvoActionMenu } from "./components/ActionMenu/ActionMenu.js";
import { ArvoBadgeAlert } from "./components/BadgeAlert/BadgeAlert.js";
import { ArvoBreadcrumb } from "./components/Breadcrumb/Breadcrumb.js";
import { ArvoTabstrip } from "./components/Tabstrip/Tabstrip.js";
import { ArvoIconButtonLink } from "./components/IconButtonLink/IconButtonLink.js";
import { ArvoButtonLink } from "./components/ButtonLink/ButtonLink.js";
import { ArvoLink } from "./components/Link/Link.js";
import { ArvoFabButton } from "./components/FabButton/FabButton.js";
import { ArvoButtonGroup } from "./components/ButtonGroup/ButtonGroup.js";
import { ArvoHybridPopover } from "./components/HybridPopover/HybridPopover.js";
import { ArvoPopover } from "./components/Popover/Popover.js";
import { ArvoSwitch } from "./components/Switch/Switch.js";
import { ArvoRadioGroup } from "./components/RadioGroup/RadioGroup.js";
import { ArvoCheckboxGroup } from "./components/CheckboxGroup/CheckboxGroup.js";
import { ArvoCheckbox } from "./components/Checkbox/Checkbox.js";
import { ArvoRadio } from "./components/Radio/Radio.js";
import { ArvoNumberInput } from "./components/NumberInput/NumberInput.js";
import { ArvoTextarea } from "./components/Textarea/Textarea.js";
import { ArvoTextbox } from "./components/Textbox/Textbox.js";
import { ArvoIconButton } from "./components/IconButton/IconButton.js";
import { ArvoButton } from "./components/Button/Button.js";
const ALL_COMPONENTS = {
  arvoButton: { Class: ArvoButton, dataKey: "arvoButton" },
  arvoIconButton: { Class: ArvoIconButton, dataKey: "arvoIconButton" },
  arvoTextbox: { Class: ArvoTextbox, dataKey: "arvoTextbox" },
  arvoTextarea: { Class: ArvoTextarea, dataKey: "arvoTextarea" },
  arvoNumberInput: { Class: ArvoNumberInput, dataKey: "arvoNumberInput" },
  arvoRadio: { Class: ArvoRadio, dataKey: "arvoRadio" },
  arvoCheckbox: { Class: ArvoCheckbox, dataKey: "arvoCheckbox" },
  arvoCheckboxGroup: { Class: ArvoCheckboxGroup, dataKey: "arvoCheckboxGroup" },
  arvoRadioGroup: { Class: ArvoRadioGroup, dataKey: "arvoRadioGroup" },
  arvoSwitch: { Class: ArvoSwitch, dataKey: "arvoSwitch" },
  arvoPopover: { Class: ArvoPopover, dataKey: "arvoPopover" },
  arvoHybridPopover: { Class: ArvoHybridPopover, dataKey: "arvoHybridPopover" },
  arvoButtonGroup: { Class: ArvoButtonGroup, dataKey: "arvoButtonGroup" },
  arvoFabButton: { Class: ArvoFabButton, dataKey: "arvoFabButton" },
  arvoLink: { Class: ArvoLink, dataKey: "arvoLink" },
  arvoButtonLink: { Class: ArvoButtonLink, dataKey: "arvoButtonLink" },
  arvoIconButtonLink: { Class: ArvoIconButtonLink, dataKey: "arvoIconButtonLink" },
  arvoTabstrip: { Class: ArvoTabstrip, dataKey: "arvoTabstrip" },
  arvoBreadcrumb: { Class: ArvoBreadcrumb, dataKey: "arvoBreadcrumb" },
  arvoBadgeAlert: { Class: ArvoBadgeAlert, dataKey: "arvoBadgeAlert" },
  arvoActionMenu: { Class: ArvoActionMenu, dataKey: "arvoActionMenu" },
  arvoSearch: { Class: ArvoSearch, dataKey: "arvoSearch" },
  arvoSelect: { Class: ArvoSelect, dataKey: "arvoSelect" },
  arvoCombobox: { Class: ArvoCombobox, dataKey: "arvoCombobox" },
  arvoDropdownButton: { Class: ArvoDropdownButton, dataKey: "arvoDropdownButton" },
  arvoDropdownIconButton: { Class: ArvoDropdownIconButton, dataKey: "arvoDropdownIconButton" },
  arvoListbox: { Class: ArvoListbox, dataKey: "arvoListbox" },
  arvoAlertDialog: { Class: ArvoAlertDialog, dataKey: "arvoAlertDialog" }
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
  setupOverlayPlugin($);
}
export {
  registerArvoPlugins
};
//# sourceMappingURL=plugin.js.map
