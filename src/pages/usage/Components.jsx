import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'naming', label: 'Naming conventions' },
  { id: 'props-options', label: 'Props and options' },
  { id: 'methods', label: 'Methods' },
  { id: 'events', label: 'Events and callbacks' },
  { id: 'controlled', label: 'Controlled vs uncontrolled' },
  { id: 'forwarded', label: 'className / style / ref' },
  { id: 'lifecycle', label: 'Lifecycle' },
  { id: 'loading', label: 'Loading state' },
  { id: 'disabled-readonly', label: 'Disabled & readonly' },
  { id: 'never-do', label: 'What you must never do' },
]

const NAMING_ROWS = [
  ['React component', 'O9{PascalName}', 'O9Button, O9Combobox'],
  ['React props type', 'O9{PascalName}Props', 'O9ButtonProps'],
  ['JS component class', 'O9{PascalName}', 'O9Button, O9Combobox'],
  ['JS options type', 'O9{PascalName}Options', 'O9ButtonOptions'],
  ['Boolean React props', 'is* / has* prefix', 'isDisabled, isLoading, hasError'],
  ['Imperative methods', 'camelCase, verb-based', 'toggle(), destroy()'],
  ['Dual-purpose getter/setter', 'unprefixed (no get/set)', 'disabled(), selected(), value()'],
  ['Custom DOM events', '{abbr}:{action}', 'btn:loading, cb:change, pop:open'],
  ['BEM block class', 'o9ds-{abbr}', 'o9ds-btn, o9ds-cb, o9ds-pop'],
  ['BEM element', 'o9ds-{abbr}__{element}', 'o9ds-btn__lbl, o9ds-cb__input'],
  ['BEM modifier', 'o9ds-{abbr}--{modifier}', 'o9ds-btn--primary, o9ds-btn--lg'],
  ['Component CSS variable', '--o9ds-{abbr}-{property}', '--o9ds-btn-bg-color'],
]

export default function UsageComponents() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Component contract"
          description="Every O9* component is a black box with a documented input/output surface. This page defines the rules that apply to ALL components — props, options, methods, events, controlled state, lifecycle, and refs."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>}
        />

        <DocCallout title="Rule">
          Drive components only through their documented props/options, methods, and events. Never read or write internal state, never mutate options after init, never simulate behavior by toggling internal classes or DOM.
        </DocCallout>

        <DocSection id="naming" title="Naming conventions">
          <DocParagraph>Knowing the convention prevents most "is this part of the API?" questions.</DocParagraph>
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Surface</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Pattern</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Example</th>
                </tr>
              </thead>
              <tbody>
                {NAMING_ROWS.map(([surface, pattern, example]) => (
                  <tr key={surface} className="border-t dark:border-neutral-700">
                    <td className="py-2 px-3 text-o9ds-light-primary dark:text-white">{surface}</td>
                    <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{pattern}</td>
                    <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{example}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DocParagraph>
            The component abbreviations (<DocCode>btn</DocCode>, <DocCode>cb</DocCode>, <DocCode>rb</DocCode>, <DocCode>sw</DocCode>, <DocCode>sel</DocCode>, <DocCode>dd</DocCode>, <DocCode>pop</DocCode>, <DocCode>txt</DocCode>, <DocCode>num</DocCode>, …) are <DocStrong>stable</DocStrong> and are part of the contract.
          </DocParagraph>
        </DocSection>

        <DocSection id="props-options" title="Props and options">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Use only documented props/options</h3>
          <DocParagraph>
            Every documented prop/option appears in the component's <DocStrong>Props</DocStrong> or <DocStrong>Options</DocStrong> table on its docs page. Any other field on <DocCode>O9*Props</DocCode> or <DocCode>O9*Options</DocCode> that you discover by inspecting types but is not documented (for example, an internal-only field that escaped a refactor) is not contracted and may be removed.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">React: is* / has* boolean props</h3>
          <CodeBlock
            language="ts"
            label="Boolean props use is/has prefix"
            code={`<O9Button isDisabled isLoading isSelected isFullWidth />
<O9Checkbox isChecked isIndeterminate isInvalid isReadonly />
<O9Combobox isRequired hasError />`}
          />
          <DocParagraph>
            Native HTML attributes that flow through <DocCode>...rest</DocCode> (e.g., <DocCode>tabIndex</DocCode>, <DocCode>aria-*</DocCode>, <DocCode>data-*</DocCode>) keep their HTML names. The React prop name <DocCode>isDisabled</DocCode> produces the rendered attribute <DocCode>disabled</DocCode>. Don't pass both — the prop wins.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS: pass options once at initialize</h3>
          <CodeBlock
            language="js"
            label="Treat options as init-only"
            code={`const btn = O9Button.initialize(el, {
  variant: 'primary',
  label: 'Save',
  onClick: handleSave,
});

// FORBIDDEN — mutating options after init.
const opts = { label: 'Save' };
const btn2 = O9Button.initialize(el, opts);
opts.label = 'Updated'; // does nothing — use btn2.setLabel('Updated')

// FORBIDDEN — writing to internal instance state.
btn._loading = true;        // not part of API
btn.options.disabled = true; // not part of API`}
          />
          <DocParagraph>
            Updates after init must go through methods (<DocCode>btn.setLabel(…)</DocCode>, <DocCode>btn.setVariant(…)</DocCode>, <DocCode>btn.disabled(true)</DocCode>, etc.). Instances do not re-read <DocCode>options</DocCode> after construction.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't rely on undocumented prop combinations</h3>
          <DocList items={[
            <span key="1">Combining <DocCode>isLoading</DocCode> with <DocCode>isSelected</DocCode> on a toggle button — visual result is unspecified.</span>,
            <span key="2">Setting both <DocCode>defaultValue</DocCode> and <DocCode>value</DocCode> on a controllable component — the controlled value wins, the default is silently ignored.</span>,
            <span key="3">Passing <DocCode>icon</DocCode> plus children that include another icon — layout result is undefined.</span>,
          ]} />
        </DocSection>

        <DocSection id="methods" title="Methods (vanilla JS instances and React refs)">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Dual-purpose getter/setter pattern</h3>
          <DocParagraph>The library standardizes on dual-purpose methods rather than separate <DocCode>get*</DocCode> / <DocCode>set*</DocCode> / <DocCode>is*</DocCode>:</DocParagraph>
          <CodeBlock
            language="js"
            label="Get/set the same method"
            code={`btn.disabled();        // -> boolean (current state)
btn.disabled(true);    // disable
btn.disabled(false);   // enable

cb.toggle();           // flip checked
cb.toggle(true);       // force checked
cb.toggle(false);      // force unchecked

input.value();         // -> current value
input.value('hello');  // set value

input.setError('Required');  // show error
input.setError(false);       // clear error`}
          />
          <DocParagraph>
            <DocStrong>Do not</DocStrong> assume the existence of removed legacy methods (<DocCode>enable()</DocCode>, <DocCode>disable()</DocCode>, <DocCode>check()</DocCode>, <DocCode>uncheck()</DocCode>, <DocCode>setDisabled()</DocCode>, <DocCode>isChecked()</DocCode>, <DocCode>getValue()</DocCode>, <DocCode>clearError()</DocCode>). They are not part of the contract.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Always call destroy() when removing the host element</h3>
          <CodeBlock
            language="js"
            label="Tear down before removing the DOM node"
            code={`const btn = O9Button.initialize(el, opts);
// ...later, when removing el from the DOM:
btn.destroy();
el.remove();`}
          />
          <DocParagraph>
            Failing to destroy leaks event listeners, leaves overlays mounted on <DocCode>document.body</DocCode>, and breaks re-initialization when the same node is reused.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">React refs</h3>
          <CodeBlock
            language="tsx"
            label="Imperative handles via forwardRef"
            code={`const popRef = useRef<O9HybridPopoverHandle>(null);
<O9HybridPopover ref={popRef} ... />
popRef.current?.open();
popRef.current?.close();`}
          />
          <DocParagraph>
            Only methods listed on the component's docs page are public. Do not call methods you discover by inspecting the type that aren't documented.
          </DocParagraph>
        </DocSection>

        <DocSection id="events" title="Events and callbacks">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">React: callback props</h3>
          <CodeBlock
            language="tsx"
            label="Documented callback props per component"
            code={`<O9Combobox
  options={opts}
  defaultValue={null}
  onChange={(value, option) => { /* ... */ }}
  onOpenChange={(isOpen) => { /* ... */ }}
/>`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS: typed callbacks first</h3>
          <CodeBlock
            language="js"
            label="Most JS components accept callbacks in options"
            code={`O9Button.initialize(el, { onClick: e => /* ... */ });
O9Combobox.initialize(el, { onChange: (value, option) => /* ... */ });`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Custom DOM events for cross-component coordination</h3>
          <CodeBlock
            language="js"
            label="Components dispatch typed custom events"
            code={`el.addEventListener('btn:loading', e => {
  console.log('button loading:', e.detail.loading);
});

el.addEventListener('cb:change', e => {
  console.log('checkbox changed:', e.detail.checked);
});

el.addEventListener('pop:open', e => { /* ... */ });
el.addEventListener('pop:close', e => { /* ... */ });`}
          />
          <DocCallout tone="warn" title="Do not synthesize internal events">
            Custom events are <DocStrong>outputs</DocStrong> from the component, not inputs. Never <DocCode>{`el.dispatchEvent(new CustomEvent('btn:loading', ...))`}</DocCode> to fake state — call <DocCode>btn.setLoading(true)</DocCode> instead.
          </DocCallout>
        </DocSection>

        <DocSection id="controlled" title="Controlled vs uncontrolled state (React)">
          <DocParagraph>
            Every component with user-driven visual state (<DocCode>isChecked</DocCode>, <DocCode>value</DocCode>, <DocCode>selectedId</DocCode>, <DocCode>isOpen</DocCode>, …) supports both controlled and uncontrolled modes.
          </DocParagraph>
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Mode</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Pattern</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t dark:border-neutral-700">
                  <td className="py-2 px-3 text-o9ds-light-primary dark:text-white">Uncontrolled</td>
                  <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{`default<Prop>`}</td>
                  <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{`<O9Checkbox defaultChecked />`}</td>
                </tr>
                <tr className="border-t dark:border-neutral-700">
                  <td className="py-2 px-3 text-o9ds-light-primary dark:text-white">Controlled</td>
                  <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{`<Prop> + on<Prop>Change`}</td>
                  <td className="py-2 px-3 font-mono text-o9ds-light-secondary dark:text-neutral-400">{`<O9Checkbox isChecked={c} onChange={setC} />`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <DocList items={[
            <span key="1"><DocStrong>Pick one mode per component instance.</DocStrong> Mixing both is undefined.</span>,
            <span key="2"><DocStrong>Don't toggle modes after mount.</DocStrong> Going from controlled to uncontrolled is undefined behavior.</span>,
            <span key="3"><DocStrong>Always pair the controlled value with its change callback.</DocStrong> A controlled component without onChange will appear to "ignore clicks".</span>,
            <span key="4"><DocStrong>Pass undefined to opt out of controlled mode</DocStrong>, not a falsy default like false or null.</span>,
          ]} />
        </DocSection>

        <DocSection id="forwarded" title="className, style, ref — what is forwarded">
          <DocList items={[
            <span key="1">accepts <DocCode>className</DocCode> and merges it with the internal block class on the root element.</span>,
            <span key="2">accepts <DocCode>style</DocCode> for inline styles applied to the root.</span>,
            <span key="3">forwards <DocCode>ref</DocCode> to the root DOM node when applicable.</span>,
            <span key="4">spreads remaining native HTML props onto the root element (<DocCode>data-*</DocCode>, <DocCode>aria-*</DocCode>, <DocCode>tabIndex</DocCode>, <DocCode>id</DocCode>).</span>,
          ]} />
          <DocParagraph><DocStrong>Do</DocStrong> add <DocCode>data-*</DocCode> test hooks (<DocCode>data-testid</DocCode>) and analytics attributes via spread. Apply inline <DocCode>style</DocCode> for layout (positioning, sizing) of the component within your page.</DocParagraph>
          <DocParagraph><DocStrong>Don't</DocStrong> use <DocCode>style</DocCode> to override visual treatment that has a CSS-variable hook, override <DocCode>role</DocCode>/<DocCode>aria-*</DocCode>/<DocCode>id</DocCode> when the component is wiring them, or assume children are forwarded — most leaf components do not accept children.</DocParagraph>
        </DocSection>

        <DocSection id="lifecycle" title="Lifecycle expectations">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">React</h3>
          <DocList items={[
            'Components are React-strict-mode-safe. Mount/unmount/remount cycles must not break behavior.',
            'Effects clean up overlay portals, focus traps, and event listeners on unmount.',
            'Async work triggered by callbacks must be cancellable from the consumer side.',
          ]} />
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS</h3>
          <DocList items={[
            <span key="1">One initialize call per element. Calling <DocCode>O9Button.initialize(el, …)</DocCode> on an element that already has an instance is a no-op.</span>,
            <span key="2"><DocCode>destroy()</DocCode> must be called before removing the host element.</span>,
            <span key="3">For overlays, call <DocCode>setupOverlayPlugin($)</DocCode> once during app boot. Do not portal overlays manually.</span>,
            <span key="4">Toast: use <DocCode>O9Toast</DocCode> — toast containers are managed by the manager, not by direct DOM appendChild.</span>,
          ]} />
        </DocSection>

        <DocSection id="loading" title="Loading state">
          <DocParagraph>All interactive components support loading. Three escalating layers:</DocParagraph>
          <ol className="list-decimal pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
            <li><DocStrong>Per-component prop/method.</DocStrong> Set <DocCode>{`<O9Button isLoading />`}</DocCode> (React) or call <DocCode>btn.setLoading(true)</DocCode> (JS).</li>
            <li><DocStrong>Parent-controlled loading.</DocStrong> Add <DocCode>data-o9ds-loading="true"</DocCode> to a container element. Use <DocCode>data-o9ds-loading-ignore="true"</DocCode> to opt out individual descendants.</li>
            <li><DocStrong>Async work via callbacks.</DocStrong> Wrap async handlers with the loading method.</li>
          </ol>
          <DocList items={[
            'The skeleton shimmer / spinner is the only documented loading visual. Don\'t replace it.',
            'The shimmer is also the double-click guard. Do not add a separate debounce on top.',
            <span key="3"><DocCode>aria-busy="true"</DocCode> is set automatically while loading. Don\'t manage it manually.</span>,
          ]} />
        </DocSection>

        <DocSection id="disabled-readonly" title="Disabled and readonly">
          <DocList items={[
            <span key="1"><DocCode>isDisabled</DocCode> (React) / <DocCode>disabled(true)</DocCode> (JS) renders the native <DocCode>disabled</DocCode> attribute. The component will not fire callbacks while disabled.</span>,
            <span key="2"><DocCode>isReadonly</DocCode> / <DocCode>readonly(true)</DocCode> on input components disables editing but keeps the value tabbable and copyable.</span>,
            <span key="3">Don't simulate either by adding CSS <DocCode>pointer-events: none</DocCode> or <DocCode>tabindex="-1"</DocCode>.</span>,
          ]} />
        </DocSection>

        <DocSection id="never-do" title="What you must never do">
          <CodeBlock
            language="ts"
            label="Anti-patterns that break upgrades"
            code={`// Mutate props after passing them in (React).
button.props.isDisabled = true; // throws / undefined behavior

// Mutate options after init (JS).
btn.options.label = 'New';      // ignored

// Read/write internal instance fields.
btn._state.loading = true;
btn.element.classList.add('loading');

// Synthesize internal events.
el.dispatchEvent(new CustomEvent('btn:loading', { detail: { loading: true } }));

// Set state via DOM.
document.querySelector('.o9ds-cb__input').checked = true;

// Wrap two contradictory mode flags.
<O9Checkbox isChecked={c} defaultChecked />`}
          />
          <DocParagraph>Each of these tightly couples your code to today's implementation and will break on upgrade.</DocParagraph>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
