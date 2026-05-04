import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import { DOC_TABLE_FIRST_COLUMN_CLASS } from '../../LayoutComponents/codeHighlight'

const sections = [
  { id: 'role-name', label: 'Role + accessible name' },
  { id: 'safe-queries', label: 'Other safe queries' },
  { id: 'forbidden', label: 'Forbidden test patterns' },
  { id: 'recommended', label: 'Recommended assertions' },
  { id: 'js-tests', label: 'Vanilla JS components' },
  { id: 'storybook', label: 'Storybook tests' },
  { id: 'survives-refactor', label: 'Test what survives a refactor' },
  { id: 'tldr', label: 'TL;DR' },
]

const ROLE_ROWS = [
  ['getByRole(\'button\', { name })', 'ArvoButton, ArvoIconButton, ArvoFabButton, ArvoDropdownButton'],
  ['getByRole(\'link\', { name })', 'ArvoLink, ArvoButtonLink, ArvoIconButtonLink'],
  ['getByRole(\'checkbox\', { name })', 'ArvoCheckbox'],
  ['getByRole(\'radio\', { name })', 'ArvoRadio (use within a \'radiogroup\')'],
  ['getByRole(\'switch\', { name })', 'ArvoSwitch'],
  ['getByRole(\'textbox\', { name })', 'ArvoTextbox, ArvoTextarea, ArvoSearch'],
  ['getByRole(\'spinbutton\', { name })', 'ArvoNumberInput'],
  ['getByRole(\'combobox\', { name })', 'ArvoCombobox, ArvoSelect'],
  ['getByRole(\'listbox\', { name })', 'ArvoListbox (and inner listbox of Combobox/Select)'],
  ['getByRole(\'option\', { name })', 'items inside a listbox/combobox'],
  ['getByRole(\'menu\') / \'menuitem\'', 'ArvoActionMenu'],
  ['getByRole(\'dialog\', { name })', 'modal popovers / dialogs'],
  ['getByRole(\'tooltip\')', 'ArvoTooltip (visible only when shown)'],
  ['getByRole(\'tab\') / \'tablist\'', 'ArvoTabstrip'],
  ['getByRole(\'navigation\', { name })', 'ArvoBreadcrumb (when given a label)'],
  ['getByRole(\'alert\') / \'status\'', 'ArvoBadgeAlert, ArvoToast'],
]

export default function UsageTesting() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="Testing discipline"
          description="Tests are the most common way internal implementation accidentally becomes 'permanent'. Test what your users see and do — not classnames, not snapshots, not internal timing."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
        />

        <DocCallout title="Rule">
          Test what your <em>users</em> see and do. Use roles, accessible names, visible text, and documented event/callback outputs. Do not assert internal classnames, internal markup, internal timing, or take large structural snapshots.
        </DocCallout>

        <DocSection id="role-name" title="Use role + accessible name as the primary selector">
          <DocParagraph>
            Testing Library's <DocCode>getByRole</DocCode> uses the same query model assistive technology uses, which is exactly the public contract.
          </DocParagraph>
          <CodeBlock
            language="ts"
            label="Recommended"
            code={`import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ArvoButton } from '@arvo/react';

test('saves on click', async () => {
  const onClick = vi.fn();
  render(<ArvoButton label="Save" onClick={onClick} />);

  await userEvent.click(screen.getByRole('button', { name: 'Save' }));
  expect(onClick).toHaveBeenCalledTimes(1);
});`}
          />
          <div className="border overflow-hidden dark:border-neutral-700">
            <table className="w-full text-sm">
              <thead>
                <tr className="dark:bg-neutral-800/50">
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Selector</th>
                  <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Matches</th>
                </tr>
              </thead>
              <tbody>
                {ROLE_ROWS.map(([sel, matches]) => (
                  <tr key={sel} className="border-t dark:border-neutral-700">
                    <td className={`py-2 px-3 font-mono text-sm ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{sel}</td>
                    <td className="py-2 px-3 text-arvo-light-secondary dark:text-neutral-400">{matches}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <DocParagraph>
            If a query returns the wrong element, that is <em>evidence</em> the accessibility wiring is wrong, not a reason to switch to a classname selector.
          </DocParagraph>
        </DocSection>

        <DocSection id="safe-queries" title="Other safe queries">
          <DocParagraph>Use in this priority order:</DocParagraph>
          <ol className="list-decimal pl-5 space-y-2 text-arvo-light-secondary dark:text-neutral-400 leading-relaxed">
            <li><DocCode>getByRole(role, {`{ name }`})</DocCode></li>
            <li><DocCode>getByLabelText(label)</DocCode> — for form fields when role+name is awkward</li>
            <li><DocCode>getByPlaceholderText(text)</DocCode> — only when no label exists (and ideally a label <em>should</em> exist)</li>
            <li><DocCode>getByText(text)</DocCode> — for non-interactive text content</li>
            <li><DocCode>getByTitle(text)</DocCode> — last resort</li>
            <li><DocCode>getByTestId('your-test-id')</DocCode> — when nothing else fits</li>
          </ol>
          <DocParagraph>
            <DocCode>data-testid</DocCode> is fine on the wrapping element <em>you control</em> in your app. Don't add <DocCode>data-testid</DocCode> by reaching into <DocCode>@arvo/*</DocCode> internals; if a component renders without a place to attach a test id, file a request.
          </DocParagraph>
        </DocSection>

        <DocSection id="forbidden" title="Forbidden test patterns">
          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Don't query by arvo-* classnames</h3>
          <CodeBlock
            language="ts"
            label="Forbidden"
            code={`// FORBIDDEN.
container.querySelector('.arvo-btn--primary');
container.querySelector('.arvo-cb__box');
expect(el).toHaveClass('arvo-btn--loading');`}
          />

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Don't snapshot component DOM</h3>
          <CodeBlock
            language="ts"
            label="Forbidden — freezes internal markup"
            code={`// FORBIDDEN.
expect(container.firstChild).toMatchSnapshot();
expect(asFragment()).toMatchInlineSnapshot(\`...\`);`}
          />
          <DocParagraph>
            If you need snapshots, scope them tightly: a single visible-text assertion, or visual regression via Playwright/Storybook against a published story.
          </DocParagraph>

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Don't assert internal timing or animation</h3>
          <CodeBlock
            language="ts"
            label="Forbidden"
            code={`// FORBIDDEN.
await new Promise(r => setTimeout(r, 250)); // wait for "the animation"
expect(el).toHaveStyle({ transition: 'transform 200ms ease' });`}
          />
          <DocParagraph>
            Use <DocCode>findBy*</DocCode> queries that wait for the visible state, or <DocCode>waitFor</DocCode> until the user-facing condition holds.
          </DocParagraph>

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Don't dispatch internal events</h3>
          <CodeBlock
            language="ts"
            label="Forbidden — drive the API instead"
            code={`// FORBIDDEN.
el.dispatchEvent(new CustomEvent('btn:loading', { detail: { loading: true } }));`}
          />

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Don't mock the design system away</h3>
          <CodeBlock
            language="ts"
            label="Forbidden"
            code={`// FORBIDDEN unless you have a very specific isolation reason.
vi.mock('@arvo/react', () => ({
  ArvoButton: ({ label }) => <button>{label}</button>,
}));`}
          />
          <DocParagraph>
            Stubbing all <DocCode>O9*</DocCode> components means real integration issues — focus management, controlled state wiring, accessibility regressions — never appear in your test suite.
          </DocParagraph>
        </DocSection>

        <DocSection id="recommended" title="Recommended assertions">
          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Visible label / value</h3>
          <CodeBlock
            language="ts"
            code={`expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
expect(screen.getByRole('textbox', { name: 'Email' })).toHaveValue('user@example.com');`}
          />

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Disabled / loading / busy</h3>
          <CodeBlock
            language="ts"
            code={`const btn = screen.getByRole('button', { name: 'Save' });
expect(btn).toBeDisabled();                       // matches isDisabled
expect(btn).toHaveAttribute('aria-busy', 'true'); // matches isLoading`}
          />

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Selection state</h3>
          <CodeBlock
            language="ts"
            code={`const cb = screen.getByRole('checkbox', { name: 'Agree' });
expect(cb).toBeChecked();
expect(cb).toHaveAttribute('aria-checked', 'mixed'); // for indeterminate`}
          />

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Error / invalid</h3>
          <CodeBlock
            language="ts"
            code={`const input = screen.getByRole('textbox', { name: 'Email' });
expect(input).toHaveAttribute('aria-invalid', 'true');
expect(screen.getByText('Email is required')).toBeInTheDocument();`}
          />

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Open / closed for overlays</h3>
          <CodeBlock
            language="ts"
            code={`const trigger = screen.getByRole('button', { name: 'Open menu' });
expect(trigger).toHaveAttribute('aria-expanded', 'false');

await userEvent.click(trigger);
expect(await screen.findByRole('menu')).toBeInTheDocument();
expect(trigger).toHaveAttribute('aria-expanded', 'true');`}
          />

          <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">Callbacks</h3>
          <CodeBlock
            language="ts"
            code={`const onChange = vi.fn();
render(<ArvoCombobox options={opts} onChange={onChange} />);
await userEvent.click(screen.getByRole('combobox'));
await userEvent.click(screen.getByRole('option', { name: 'Apple' }));
expect(onChange).toHaveBeenCalledWith('apple', expect.objectContaining({ value: 'apple' }));`}
          />
        </DocSection>

        <DocSection id="js-tests" title="Testing vanilla JS components">
          <CodeBlock
            language="js"
            label="Drive the API, assert the user-visible result"
            code={`import { ArvoButton } from '@arvo/js';

const el = document.createElement('button');
document.body.appendChild(el);

const onClick = vi.fn();
const btn = ArvoButton.initialize(el, { label: 'Save', onClick });

el.click();
expect(onClick).toHaveBeenCalled();

btn.setLoading(true);
expect(el.getAttribute('aria-busy')).toBe('true');

btn.destroy();
el.remove();`}
          />
          <DocParagraph>Same principle: drive the API, assert the user-visible result. Don't read <DocCode>el.classList</DocCode> looking for <DocCode>arvo-btn--loading</DocCode>.</DocParagraph>
        </DocSection>

        <DocSection id="storybook" title="Storybook visual / interaction tests">
          <DocParagraph>
            If you publish Storybook stories of your application features that compose <DocCode>@arvo/*</DocCode>, use the Storybook test runner or Playwright against the story URL for visual regression. This is durable: it captures the public visual state, not internal classnames.
          </DocParagraph>
          <DocParagraph>Keep the Storybook a11y addon enabled and treat its findings as required CI checks.</DocParagraph>
        </DocSection>

        <DocSection id="survives-refactor" title="Test what survives a refactor">
          <DocParagraph>A practical mental check before each assertion:</DocParagraph>
          <DocCallout tone="note">
            "If <DocCode>@arvo/*</DocCode> rewrote this component's internals tonight, would my assertion still mean the same thing tomorrow?"
          </DocCallout>
          <DocParagraph>
            If yes → testing the contract. If no → testing implementation.
          </DocParagraph>
        </DocSection>

        <DocSection id="tldr" title="TL;DR">
          <DocList items={[
            <span key="1">Query by <DocStrong>role + accessible name</DocStrong> first.</span>,
            <span key="2">Assert <DocStrong>ARIA state</DocStrong> (<DocCode>aria-busy</DocCode>, <DocCode>aria-expanded</DocCode>, <DocCode>aria-invalid</DocCode>, <DocCode>aria-checked</DocCode>).</span>,
            <span key="3">Drive components via <DocStrong>props/options/methods</DocStrong>; never via DOM mutations or internal events.</span>,
            <span key="4"><DocStrong>Never</DocStrong> assert <DocCode>arvo-*</DocCode> classnames or snapshot component markup.</span>,
            <span key="5"><DocStrong>Never</DocStrong> mock the design system away.</span>,
          ]} />
        </DocSection>
      </div>
    </PageWithToc>
  )
}
