import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'

const sections = [
  { id: 'extension-points', label: 'Documented extension points' },
  { id: 'anti-patterns', label: 'Anti-patterns' },
  { id: 'when-public-not-enough', label: "When the public API isn't enough" },
  { id: 'wrappers-vs-forks', label: 'Wrappers vs forks' },
]

export default function UsageComposition() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Composition & extension"
          description="When the components shipped in @o9ds/* don't quite fit, the safe answer is composition — wrap, configure, and assemble. The unsafe answer is forking, monkey-patching, or rebuilding them locally."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V6a2 2 0 00-2-2z" /></svg>}
        />

        <DocCallout title="Rule">
          Extend only through documented composition surfaces (provider components, slot props, callbacks, parent loading attributes, mixins). Never fork a component, monkey-patch its prototype, or copy SCSS source into your app.
        </DocCallout>

        <DocSection id="extension-points" title="Documented extension points">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">React providers</h3>
          <CodeBlock
            language="tsx"
            label="Mount once at app/layout level"
            code={`import { OverlayProvider, TooltipProvider, O9ToastProvider } from '@o9ds/react';

<OverlayProvider>
  <TooltipProvider delay={400}>
    <O9ToastProvider position="top-right">
      <App />
    </O9ToastProvider>
  </TooltipProvider>
</OverlayProvider>`}
          />
          <DocList items={[
            <span key="1"><DocCode>OverlayProvider</DocCode> — coordinates open overlays, z-index stack, outside-click dismissal, focus return.</span>,
            <span key="2"><DocCode>TooltipProvider</DocCode> — single source of truth for tooltip delays and active tooltip dismissal.</span>,
            <span key="3"><DocCode>O9ToastProvider</DocCode> — mounts the toast container; <DocCode>useToast()</DocCode> adds toasts from anywhere in the tree.</span>,
          ]} />
          <DocParagraph>
            These are the supported way to introduce overlay/tooltip/toast behavior. Don't try to portal an overlay manually with <DocCode>ReactDOM.createPortal</DocCode> and recreate this orchestration.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Vanilla JS setup helpers</h3>
          <CodeBlock
            language="js"
            label="Once at app boot"
            code={`import { setupOverlayPlugin, setupTooltips } from '@o9ds/js';

setupOverlayPlugin($);
setupTooltips({ delay: 400 });`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Slot / config props</h3>
          <DocList items={[
            <span key="1"><DocCode>O9HybridPopover</DocCode>'s <DocCode>groups</DocCode>, <DocCode>items</DocCode>, <DocCode>inline</DocCode>, <DocCode>search</DocCode>, <DocCode>empty</DocCode>, <DocCode>conditional</DocCode> props.</span>,
            <span key="2"><DocCode>O9ActionMenu</DocCode>'s <DocCode>items</DocCode>, <DocCode>trailingActions</DocCode>, <DocCode>inlinePopover</DocCode>, <DocCode>inlineHybridPopover</DocCode>.</span>,
            <span key="3"><DocCode>O9Combobox</DocCode> / <DocCode>O9Select</DocCode> / <DocCode>O9Listbox</DocCode>'s <DocCode>options</DocCode> plus optional <DocCode>renderOption</DocCode>.</span>,
            <span key="4"><DocCode>O9ButtonGroup</DocCode>'s <DocCode>items</DocCode> plus per-item <DocCode>data</DocCode> for custom click payloads.</span>,
            <span key="5"><DocCode>O9Toast</DocCode> actions: pass <DocCode>actions: [{`{ label, onClick }`}]</DocCode>, don't append buttons to the toast DOM.</span>,
          ]} />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Parent loading attribute</h3>
          <CodeBlock
            language="tsx"
            label="data-o9ds-loading on any ancestor"
            code={`<form data-o9ds-loading={submitting ? 'true' : undefined}>
  <O9Textbox label="Email" />
  <O9Button label="Submit" />
  <O9Button label="Cancel" data-o9ds-loading-ignore="true" />
</form>`}
          />
          <DocParagraph>
            <DocCode>data-o9ds-loading="true"</DocCode> on any ancestor puts every loading-aware descendant into the loading state. <DocCode>data-o9ds-loading-ignore="true"</DocCode> on a descendant opts it out.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Wrapper components in your app</h3>
          <DocParagraph>The most powerful extension point is the one you write yourself. A thin app-side wrapper that fixes app-specific defaults is encouraged:</DocParagraph>
          <CodeBlock
            language="tsx"
            label="App wrapper consuming the public API"
            code={`// app/components/CtaButton.tsx
import { O9Button, type O9ButtonProps } from '@o9ds/react';

export function CtaButton(props: Omit<O9ButtonProps, 'variant' | 'size'>) {
  return <O9Button variant="primary" size="lg" {...props} />;
}`}
          />
          <DocParagraph>This is a supported and encouraged pattern. The wrapper consumes the public API; nothing about its surface depends on internals.</DocParagraph>
        </DocSection>

        <DocSection id="anti-patterns" title="Anti-patterns — what NOT to do">
          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't fork component source</h3>
          <DocList items={[
            'Forks stop receiving bug fixes, accessibility improvements, performance work, design tweaks.',
            'They diverge silently because the design system version keeps moving.',
            'They double maintenance cost.',
            'They create a fork of the visual contract — two "primary buttons" that almost match.',
          ]} />
          <DocParagraph>
            If a component is missing a capability, file a request. The design system can frequently add a prop or a slot in a single release.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't monkey-patch prototypes</h3>
          <CodeBlock
            language="ts"
            label="Forbidden — rewrites the contract behind the system's back"
            code={`// FORBIDDEN.
import { O9Button } from '@o9ds/js';
const original = O9Button.prototype.setLoading;
O9Button.prototype.setLoading = function (loading) {
  console.log('Patched setLoading');
  original.call(this, loading);
};`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't copy SCSS into your app</h3>
          <DocParagraph>If <DocCode>_button.scss</DocCode> does almost what you want, do <DocStrong>not</DocStrong> copy it locally and tweak it. The right responses are:</DocParagraph>
          <ol className="list-decimal pl-5 space-y-1.5 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
            <li>Set the documented CSS variables to express the variant.</li>
            <li>Wrap the component and apply additional layout styling.</li>
            <li>Open a request for a missing variant or extension point.</li>
          </ol>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't build "shadow" components</h3>
          <DocParagraph>
            Visually mimicking a component without using it skips every fix the design system ships — focus styles, ARIA wiring, loading state, parent-controlled loading, RTL handling. It is <em>more</em> fragile than the real component because it freezes today's classnames into product code. Always render the actual <DocCode>O9*</DocCode>.
          </DocParagraph>

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't reach into rendered DOM to "add behavior"</h3>
          <CodeBlock
            language="ts"
            label="Forbidden — couples to current internal markup"
            code={`// FORBIDDEN.
const root = document.querySelector('.o9ds-cb-grp');
root.querySelectorAll('.o9ds-cb__input').forEach(addAnalytics);

// CORRECT — use the component's onChange callback.
<O9CheckboxGroup
  items={items}
  onChange={(value, item) => addAnalytics(item)}
/>`}
          />

          <h3 className="text-base font-semibold text-o9ds-light-primary dark:text-white">Don't bypass providers, don't double-portal</h3>
          <DocParagraph>
            If <DocCode>OverlayProvider</DocCode>, <DocCode>TooltipProvider</DocCode>, or <DocCode>O9ToastProvider</DocCode> aren't mounted, overlays and tooltips behave as best they can but you lose stacking, dismissal coordination, and focus return. Mount the provider rather than reaching into the overlay hub directly.
          </DocParagraph>
          <DocParagraph>
            <DocCode>O9Popover</DocCode> already portals itself when needed; double-portaling with <DocCode>ReactDOM.createPortal</DocCode> breaks the overlay hub's z-index logic and focus orchestration.
          </DocParagraph>
        </DocSection>

        <DocSection id="when-public-not-enough" title="When the public API isn't enough">
          <DocParagraph>The healthy escalation path is:</DocParagraph>
          <ol className="list-decimal pl-5 space-y-2 text-o9ds-light-secondary dark:text-neutral-400 leading-relaxed">
            <li><DocStrong>Search the docs and Storybook examples</DocStrong> — many advanced patterns already exist (search-in-popover, conditional bodies, inline confirmation, bulk actions, …).</li>
            <li><DocStrong>Compose</DocStrong> existing components in app code.</li>
            <li><DocStrong>Open a design system extension request</DocStrong> with the use case and expected API.</li>
            <li><DocStrong>Mark the area as technical debt</DocStrong> in your repo until the supported extension is shipped.</li>
          </ol>
          <DocParagraph>Don't ship the workaround quietly, replicate it across multiple teams, or use a private import "just for now." Every "temporary workaround" outlives its team.</DocParagraph>
        </DocSection>

        <DocSection id="wrappers-vs-forks" title="Wrappers vs forks — a short test">
          <DocParagraph>
            Ask: <em>if @o9ds/* removes the component or renames the prop in two minor versions, what breaks?</em>
          </DocParagraph>
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Approach</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">What breaks</th>
                  <th className="py-2 px-3 text-left font-medium text-o9ds-light-primary dark:text-white">Is it a fork?</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['App wrapper renders <O9Button /> with fixed defaults', 'Wrapper updates with the prop rename.', 'No'],
                  ['App component renders raw <button class="o9ds-btn ...">', 'Every instance silently breaks.', 'Yes'],
                  ['App copy of Button.tsx', 'Diverges immediately.', 'Yes'],
                  ['App SCSS targeting .o9ds-btn', 'Visual regressions.', 'Yes (a CSS fork)'],
                ].map(([approach, breaks, fork]) => (
                  <tr key={approach} className="border-t dark:border-neutral-700">
                    <td className="py-2 px-3 font-mono text-o9ds-light-primary dark:text-white">{approach}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{breaks}</td>
                    <td className="py-2 px-3 text-o9ds-light-secondary dark:text-neutral-400">{fork}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DocParagraph>Wrappers consume the public API; forks freeze internal implementation.</DocParagraph>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
