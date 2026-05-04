import { ArvoButtonOptions } from './components/Button';
import { ArvoIconButtonOptions } from './components/IconButton';
import { ArvoTextboxOptions } from './components/Textbox';
import { ArvoTextareaOptions } from './components/Textarea';
import { ArvoNumberInputOptions } from './components/NumberInput';
import { ArvoRadioOptions } from './components/Radio';
import { ArvoCheckboxOptions } from './components/Checkbox';
import { ArvoCheckboxGroupOptions } from './components/CheckboxGroup';
import { ArvoRadioGroupOptions } from './components/RadioGroup';
import { ArvoSwitchOptions } from './components/Switch';
import { ArvoPopoverOptions } from './components/Popover';
import { ArvoHybridPopoverOptions } from './components/HybridPopover';
import { ArvoButtonGroupOptions } from './components/ButtonGroup';
import { ArvoFabButtonOptions } from './components/FabButton';
import { ArvoLinkOptions } from './components/Link';
import { ArvoButtonLinkOptions } from './components/ButtonLink';
import { ArvoIconButtonLinkOptions } from './components/IconButtonLink';
import { ArvoTabstripOptions } from './components/Tabstrip';
import { ArvoBreadcrumbOptions } from './components/Breadcrumb';
import { ArvoBadgeAlertOptions } from './components/BadgeAlert';
import { ArvoActionMenuOptions } from './components/ActionMenu';
import { ArvoSearchOptions } from './components/Search';
import { ArvoSelectOptions } from './components/Select';
import { ArvoComboboxOptions } from './components/Combobox';
import { ArvoDropdownButtonOptions } from './components/DropdownButton';
import { ArvoDropdownIconButtonOptions } from './components/DropdownIconButton';
import { ArvoListboxOptions } from './components/Listbox';
import { ArvoAlertDialogOptions } from './components/AlertDialog';
declare global {
    interface JQuery {
        arvoButton(options?: ArvoButtonOptions): JQuery;
        arvoIconButton(options?: ArvoIconButtonOptions): JQuery;
        arvoTextbox(options?: ArvoTextboxOptions): JQuery;
        arvoTextarea(options?: ArvoTextareaOptions): JQuery;
        arvoNumberInput(options?: ArvoNumberInputOptions): JQuery;
        arvoRadio(options?: ArvoRadioOptions): JQuery;
        arvoCheckbox(options?: ArvoCheckboxOptions): JQuery;
        arvoCheckboxGroup(options?: ArvoCheckboxGroupOptions): JQuery;
        arvoRadioGroup(options?: ArvoRadioGroupOptions): JQuery;
        arvoSwitch(options?: ArvoSwitchOptions): JQuery;
        arvoPopover(options?: ArvoPopoverOptions): JQuery;
        arvoHybridPopover(options?: ArvoHybridPopoverOptions): JQuery;
        arvoButtonGroup(options?: ArvoButtonGroupOptions): JQuery;
        arvoFabButton(options?: ArvoFabButtonOptions): JQuery;
        arvoLink(options?: ArvoLinkOptions): JQuery;
        arvoButtonLink(options?: ArvoButtonLinkOptions): JQuery;
        arvoIconButtonLink(options?: ArvoIconButtonLinkOptions): JQuery;
        arvoTabstrip(options?: ArvoTabstripOptions): JQuery;
        arvoBreadcrumb(options?: ArvoBreadcrumbOptions): JQuery;
        arvoBadgeAlert(options?: ArvoBadgeAlertOptions): JQuery;
        arvoActionMenu(options?: ArvoActionMenuOptions): JQuery;
        arvoSearch(options?: ArvoSearchOptions): JQuery;
        arvoSelect(options?: ArvoSelectOptions): JQuery;
        arvoCombobox(options?: ArvoComboboxOptions): JQuery;
        arvoDropdownButton(options?: ArvoDropdownButtonOptions): JQuery;
        arvoDropdownIconButton(options?: ArvoDropdownIconButtonOptions): JQuery;
        arvoListbox(options?: ArvoListboxOptions): JQuery;
        arvoAlertDialog(options?: ArvoAlertDialogOptions): JQuery;
    }
}
interface ComponentEntry {
    Class: {
        new (el: HTMLElement, opts?: Record<string, unknown>): unknown;
    };
    dataKey: string;
}
declare const ALL_COMPONENTS: Record<string, ComponentEntry>;
/**
 * Registers `$.fn.arvo*` jQuery plugins on the provided jQuery instance.
 *
 * By default every component is registered. Pass a list of names to register
 * only the ones you need (tree-shaking won't help with jQuery plugins because
 * they are side-effectful, but this keeps the `$.fn` namespace clean):
 *
 * ```js
 * import { registerArvoPlugins } from '@arvo/js/plugin';
 * registerArvoPlugins($);                                // all components
 * registerArvoPlugins($, ['arvoButton', 'arvoTextbox']);      // selective
 * ```
 *
 * The overlay plugin (`$.fn.openOverlay`, `$.closeAllOverlays`, etc.) is
 * always registered because it is orthogonal to component selection.
 */
export declare function registerArvoPlugins($: JQueryStatic, components?: (keyof typeof ALL_COMPONENTS)[]): void;
export {};
//# sourceMappingURL=plugin.d.ts.map