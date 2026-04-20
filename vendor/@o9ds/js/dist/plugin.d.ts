import { O9ButtonOptions } from './components/Button';
import { O9IconButtonOptions } from './components/IconButton';
import { O9TextboxOptions } from './components/Textbox';
import { O9TextareaOptions } from './components/Textarea';
import { O9NumberInputOptions } from './components/NumberInput';
import { O9RadioOptions } from './components/Radio';
import { O9CheckboxOptions } from './components/Checkbox';
import { O9CheckboxGroupOptions } from './components/CheckboxGroup';
import { O9RadioGroupOptions } from './components/RadioGroup';
import { O9SwitchOptions } from './components/Switch';
import { O9PopoverOptions } from './components/Popover';
import { O9HybridPopoverOptions } from './components/HybridPopover';
import { O9ButtonGroupOptions } from './components/ButtonGroup';
import { O9FabButtonOptions } from './components/FabButton';
import { O9LinkOptions } from './components/Link';
import { O9ButtonLinkOptions } from './components/ButtonLink';
import { O9IconButtonLinkOptions } from './components/IconButtonLink';
import { O9TabstripOptions } from './components/Tabstrip';
import { O9BreadcrumbOptions } from './components/Breadcrumb';
import { O9BadgeAlertOptions } from './components/BadgeAlert';
import { O9ActionMenuOptions } from './components/ActionMenu';
import { O9SearchOptions } from './components/Search';
import { O9SelectOptions } from './components/Select';
import { O9ComboboxOptions } from './components/Combobox';
import { O9DropdownButtonOptions } from './components/DropdownButton';
import { O9DropdownIconButtonOptions } from './components/DropdownIconButton';
import { O9ListboxOptions } from './components/Listbox';
declare global {
    interface JQuery {
        o9Button(options?: O9ButtonOptions): JQuery;
        o9IconButton(options?: O9IconButtonOptions): JQuery;
        o9Textbox(options?: O9TextboxOptions): JQuery;
        o9Textarea(options?: O9TextareaOptions): JQuery;
        o9NumberInput(options?: O9NumberInputOptions): JQuery;
        o9Radio(options?: O9RadioOptions): JQuery;
        o9Checkbox(options?: O9CheckboxOptions): JQuery;
        o9CheckboxGroup(options?: O9CheckboxGroupOptions): JQuery;
        o9RadioGroup(options?: O9RadioGroupOptions): JQuery;
        o9Switch(options?: O9SwitchOptions): JQuery;
        o9Popover(options?: O9PopoverOptions): JQuery;
        o9HybridPopover(options?: O9HybridPopoverOptions): JQuery;
        o9ButtonGroup(options?: O9ButtonGroupOptions): JQuery;
        o9FabButton(options?: O9FabButtonOptions): JQuery;
        o9Link(options?: O9LinkOptions): JQuery;
        o9ButtonLink(options?: O9ButtonLinkOptions): JQuery;
        o9IconButtonLink(options?: O9IconButtonLinkOptions): JQuery;
        o9Tabstrip(options?: O9TabstripOptions): JQuery;
        o9Breadcrumb(options?: O9BreadcrumbOptions): JQuery;
        o9BadgeAlert(options?: O9BadgeAlertOptions): JQuery;
        o9ActionMenu(options?: O9ActionMenuOptions): JQuery;
        o9Search(options?: O9SearchOptions): JQuery;
        o9Select(options?: O9SelectOptions): JQuery;
        o9Combobox(options?: O9ComboboxOptions): JQuery;
        o9DropdownButton(options?: O9DropdownButtonOptions): JQuery;
        o9DropdownIconButton(options?: O9DropdownIconButtonOptions): JQuery;
        o9Listbox(options?: O9ListboxOptions): JQuery;
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
 * Registers `$.fn.o9*` jQuery plugins on the provided jQuery instance.
 *
 * By default every component is registered. Pass a list of names to register
 * only the ones you need (tree-shaking won't help with jQuery plugins because
 * they are side-effectful, but this keeps the `$.fn` namespace clean):
 *
 * ```js
 * import { registerO9Plugins } from '@o9ds/js/plugin';
 * registerO9Plugins($);                                // all components
 * registerO9Plugins($, ['o9Button', 'o9Textbox']);      // selective
 * ```
 *
 * The overlay plugin (`$.fn.openOverlay`, `$.closeAllOverlays`, etc.) is
 * always registered because it is orthogonal to component selection.
 */
export declare function registerO9Plugins($: JQueryStatic, components?: (keyof typeof ALL_COMPONENTS)[]): void;
export {};
//# sourceMappingURL=plugin.d.ts.map