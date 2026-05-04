import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'ap-1', label: '1. Deep imports' },
  { id: 'ap-2', label: '2. Internal selector coupling' },
  { id: 'ap-3', label: '3. Direct DOM mutation' },
  { id: 'ap-4', label: '4. Manual prop/option mutation' },
  { id: 'ap-5', label: '5. Undocumented event dependence' },
  { id: 'ap-6', label: '6. Hardcoded token values' },
  { id: 'ap-7', label: '7. Copy-paste forking' },
  { id: 'ap-8', label: '8. !important overrides' },
  { id: 'ap-9', label: '9. Tests asserting internal markup' },
  { id: 'ap-10', label: '10. Skipping release notes' },
  { id: 'ap-11', label: '11. Mixing framework boundaries' },
  { id: 'ap-12', label: '12. Experimental/private APIs in production' },
  { id: 'quick-ref', label: 'Quick reference — the 12' },
]

function Why({ children }) {
  return (
    <p className="text-sm text-arvo-light-secondary dark:text-neutral-400 leading-relaxed mt-2">
      <strong className="text-arvo-light-primary dark:text-white font-medium">Why it breaks:</strong> {children}
    </p>
  )
}

export default function UsageAntiPatterns() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Anti-patterns"
          description="The 12 patterns below cause the overwhelming majority of upgrade failures and visual regressions. Banning them in code review removes most of the long-term instability that comes from @arvo/* adoption."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>}
        />

        <DocCallout tone="warn" title="Rule">
          Each of the 12 patterns is forbidden in product code. Every "but in this case…" exception you find is the precise reason this list exists.
        </DocCallout>

        <DocSection id="ap-1" title="1. Deep imports into private modules">
          <CodeBlock
            language="ts"
            label="Forbidden vs correct"
            code={`// FORBIDDEN
import { Button } from '@arvo/react/src/components/Button/Button';
import { ArvoCombobox } from '@arvo/react/dist/components/Combobox/Combobox.js';
import { useControllableState } from '@arvo/react/src/hooks/useControllableState';
import { ArvoPopover } from '@arvo/js/src/components/Popover/Popover';
import '@arvo/styles/src/components/_button.scss';

// CORRECT
import { ArvoButton, ArvoCombobox } from '@arvo/react';
import { ArvoPopover } from '@arvo/js';
import '@arvo/styles'; // or '@arvo/styles/css'`}
          />
          <Why>Internal source paths can be moved, renamed, merged, or deleted without a major bump. Anything outside the package's documented entry points is private.</Why>
        </DocSection>

        <DocSection id="ap-2" title="2. Internal selector coupling in CSS or JS">
          <CodeBlock
            language="scss"
            label="Forbidden CSS"
            code={`/* FORBIDDEN */
.arvo-btn { background: tomato; }
.arvo-cb__input + .arvo-cb__box { border-color: red; }
.checkout .arvo-pop__bdy > div:nth-child(2) { padding: 0; }`}
          />
          <CodeBlock
            language="ts"
            label="Forbidden JS — querying internal classnames"
            code={`// FORBIDDEN
const trigger = document.querySelector('.arvo-dd-btn__trg');
container.querySelectorAll('.arvo-list-item').forEach(...);

// CORRECT — use roles, callbacks, or component-provided data
screen.getByRole('button', { name: 'Open menu' });`}
          />
          <Why>BEM classnames inside components describe internal structure. The component CSS variable contract exists exactly so styling doesn't need to reach inside.</Why>
        </DocSection>

        <DocSection id="ap-3" title="3. Direct DOM mutation to control component state">
          <CodeBlock
            language="ts"
            label="Forbidden vs correct"
            code={`// FORBIDDEN
document.querySelector('.arvo-cb__input').checked = true;
button.classList.add('loading');
button.setAttribute('aria-busy', 'true');
input.removeAttribute('disabled');

// CORRECT
checkbox.toggle(true);
button.setLoading(true);
input.disabled(false);`}
          />
          <Why>The component is the source of truth. DOM mutation outside the API drifts from internal state, breaks re-rendering, breaks parent-controlled loading, and silently disables ARIA wiring.</Why>
        </DocSection>

        <DocSection id="ap-4" title="4. Manual prop / option mutation outside public APIs">
          <CodeBlock
            language="ts"
            label="Forbidden vs correct"
            code={`// FORBIDDEN — mutating React props.
button.props.isDisabled = true;

// FORBIDDEN — mutating JS options after init.
const opts = { label: 'Save' };
const btn = ArvoButton.initialize(el, opts);
opts.label = 'Updated';            // ignored
btn.options.label = 'Updated';     // not part of API
btn._state.loading = true;         // not part of API

// CORRECT
btn.setLabel('Updated');
btn.setLoading(true);`}
          />
          <Why>Options are read once at init. State is owned by the component. Reaching into either fights the component model.</Why>
        </DocSection>

        <DocSection id="ap-5" title="5. Undocumented event dependence">
          <CodeBlock
            language="ts"
            label="Forbidden vs correct"
            code={`// FORBIDDEN — assumed internal events.
el.addEventListener('btn:internal-render', handler);
el.addEventListener('pop:reflow', recompute);
el.addEventListener('overlay:focus-trap-activate', handler);

// CORRECT — documented public events only.
el.addEventListener('btn:loading', handler);
el.addEventListener('pop:open', handler);
el.addEventListener('cb:change', handler);`}
          />
          <Why>Only events listed in a component's docs page are public. Internal coordination events (rendering, layout reflows, focus-trap lifecycle) can be removed or renamed at any time.</Why>
        </DocSection>

        <DocSection id="ap-6" title="6. Hardcoded token values instead of consuming tokens">
          <CodeBlock
            language="scss"
            label="Forbidden vs correct"
            code={`/* FORBIDDEN */
.my-card {
  background: #ffffff;
  color: #1f2937;
  padding: 12px;
  font-size: 14px;
  border-radius: 8px;
}

/* CORRECT */
.my-card {
  background: var(--arvo-color-bg-canvas);
  color: var(--arvo-color-text-primary);
  padding: var(--arvo-space-12);
  font-size: var(--arvo-font-size-md);
  border-radius: var(--arvo-border-radius-md);
}`}
          />
          <Why>Tokens get retuned for theming, dark mode, brand updates, accessibility (contrast). Hardcoded values silently desync from the rest of the UI.</Why>
        </DocSection>

        <DocSection id="ap-7" title="7. Copy-paste forking of library components">
          <CodeBlock
            language="tsx"
            label="Forbidden vs correct"
            code={`// FORBIDDEN — verbatim copy of @arvo/react/Button
export function MyButton({ label, ... }) {
  return (
    <button className="arvo-btn arvo-btn--primary arvo-btn--md">
      <span className="arvo-btn__lbl">{label}</span>
    </button>
  );
}

// CORRECT — compose, don't fork.
import { ArvoButton, type ArvoButtonProps } from '@arvo/react';

export function MyButton(props: Omit<ArvoButtonProps, 'variant'>) {
  return <ArvoButton variant="primary" {...props} />;
}`}
          />
          <Why>Every fix the design system makes (focus ring, ARIA, loading state, parent-controlled loading) skips the fork. Visually it looks the same; semantically it slowly diverges.</Why>
        </DocSection>

        <DocSection id="ap-8" title="8. App-level CSS overrides with !important">
          <CodeBlock
            language="scss"
            label="Forbidden vs correct"
            code={`/* FORBIDDEN */
.arvo-btn { background: red !important; }
.arvo-cb__box { border-color: green !important; }
* { outline: none !important; }

/* CORRECT — set the documented CSS variable on the right scope. */
.danger-zone { --arvo-btn-bg-color: var(--arvo-color-danger-500); }`}
          />
          <Why>Specificity wars freeze the cascade against today's selectors. The next markup refactor produces a visual regression that can only be patched with another <DocCode>!important</DocCode>.</Why>
        </DocSection>

        <DocSection id="ap-9" title="9. Tests asserting internal markup or classnames">
          <CodeBlock
            language="ts"
            label="Forbidden vs correct"
            code={`// FORBIDDEN
expect(container.querySelector('.arvo-btn--loading')).toBeInTheDocument();
expect(asFragment()).toMatchSnapshot();
expect(el).toHaveClass('arvo-cb__input');

// CORRECT
const btn = screen.getByRole('button', { name: 'Save' });
expect(btn).toHaveAttribute('aria-busy', 'true');
expect(screen.getByRole('checkbox', { name: 'Agree' })).toBeChecked();`}
          />
          <Why>Classname assertions and structural snapshots freeze internal markup as a permanent test contract. Refactors then look like regressions; usually the test, not the library, is wrong.</Why>
        </DocSection>

        <DocSection id="ap-10" title="10. Skipping release-note review and regression testing">
          <DocList items={[
            <span key="1">Auto-updating <DocCode>@arvo/*</DocCode> via Renovate/Dependabot without reading the changeset.</span>,
            'Jumping multiple major versions in one upgrade.',
            <span key="3">Treating a "minor" bump as zero risk because "the API didn't change."</span>,
          ]} />
          <DocParagraph>Most painful upgrades expose preexisting misuse. Hygiene catches them early. See the <DocStrong>Upgrade checklist</DocStrong> on the Versioning page.</DocParagraph>
        </DocSection>

        <DocSection id="ap-11" title="11. Mixing framework boundaries or wrappers incorrectly">
          <CodeBlock
            language="tsx"
            label="Forbidden vs correct"
            code={`// FORBIDDEN — using the JS class directly inside React.
import { ArvoButton as JsButton } from '@arvo/js';
function Page() {
  const ref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    JsButton.initialize(ref.current!, { label: 'Save' });
  }, []);
  return <button ref={ref} />;
}

// CORRECT
import { ArvoButton } from '@arvo/react';
<ArvoButton label="Save" />

// FORBIDDEN — using @arvo/core directly in product code.
import { OverlayHub } from '@arvo/core';

// CORRECT
import { OverlayProvider } from '@arvo/react';
import { setupOverlayPlugin } from '@arvo/js';`}
          />
          <Why><DocCode>@arvo/core</DocCode> is shared logic for the wrappers. Bypassing the wrapper duplicates wiring, drifts from accessibility wiring, and breaks lifecycle integration.</Why>
        </DocSection>

        <DocSection id="ap-12" title="12. Using experimental / undocumented props in production">
          <DocParagraph>
            If a prop appears in TypeScript autocomplete but is <em>not</em> on the component's docs page (or its Storybook example list), it is not part of the contract — regardless of whether it works today. The same goes for:
          </DocParagraph>
          <DocList items={[
            'Undocumented combinations of documented props.',
            <span key="2">Internal-only data attributes (<DocCode>data-arvo-internal-*</DocCode>) you discover by inspecting the DOM.</span>,
            <span key="3">Props that are documented as <DocCode>@experimental</DocCode> or <DocCode>@deprecated</DocCode>.</span>,
          ]} />
          <DocParagraph>Treat experimental APIs as RFC-level: usable only behind a feature flag, with a plan to migrate when the API stabilizes.</DocParagraph>
        </DocSection>

        <DocSection id="quick-ref" title="Quick reference — the 12">
          <ol className="list-decimal pl-5 space-y-1.5 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            <li><DocStrong>Deep imports</DocStrong> into private modules.</li>
            <li><DocStrong>Internal selector coupling</DocStrong> in CSS or JS.</li>
            <li><DocStrong>Direct DOM mutation</DocStrong> to control component state.</li>
            <li><DocStrong>Manual prop/option mutation</DocStrong> outside public APIs.</li>
            <li><DocStrong>Undocumented event dependence.</DocStrong></li>
            <li><DocStrong>Hardcoded token values</DocStrong> instead of consuming tokens.</li>
            <li><DocStrong>Copy-paste forking</DocStrong> of library components.</li>
            <li><DocStrong>App-level CSS overrides with !important.</DocStrong></li>
            <li><DocStrong>Tests asserting internal markup/classnames.</DocStrong></li>
            <li><DocStrong>Skipping release-note review and regression testing.</DocStrong></li>
            <li><DocStrong>Mixing framework boundaries or wrappers incorrectly.</DocStrong></li>
            <li><DocStrong>Using experimental/private APIs in production.</DocStrong></li>
          </ol>
          <DocParagraph>Block these and you eliminate most long-term instability.</DocParagraph>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
