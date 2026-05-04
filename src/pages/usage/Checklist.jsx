import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import CodeBlock from '../../LayoutComponents/CodeBlock'
import DocSection, { DocCallout, DocCode, DocList, DocParagraph, DocStrong } from '../../LayoutComponents/DocSection'
import { DOC_TABLE_FIRST_COLUMN_CLASS } from '../../LayoutComponents/codeHighlight'

const sections = [
  { id: 'pr-checklist', label: 'PR review checklist' },
  { id: 'matrix', label: 'Customization matrix' },
  { id: 'governance', label: 'Governance recommendations' },
  { id: 'policy', label: 'One-sentence policy' },
]

const PR_CHECKLIST = `## Design system usage checklist

Imports
- [ ] All \`@arvo/*\` imports use the package root or a documented sub-export.
- [ ] No imports from \`@arvo/<pkg>/src/...\`, \`@arvo/<pkg>/dist/...\`, internal hooks, or unexported helpers.
- [ ] No direct imports from \`@arvo/core\` or \`@arvo/utils\` in product code.

Components
- [ ] Every interactive component has an accessible name (\`label\`, \`aria-label\`, or \`aria-labelledby\`).
- [ ] Boolean props use \`is*\` / \`has*\`; native HTML attrs that pass through ...rest keep their HTML names.
- [ ] Each component is consistently controlled OR uncontrolled — never both, never switched after mount.
- [ ] No mutation of props after render (React) or options after init (JS).
- [ ] No reading or writing of internal instance fields (_state, options, ...).
- [ ] Vanilla JS instances call \`destroy()\` before their host element is removed.
- [ ] Loading is driven by \`isLoading\` / \`setLoading()\` / \`data-arvo-loading\`.

Styling
- [ ] Visual customization uses tokens or per-component CSS variables (--arvo-{abbr}-*).
- [ ] No CSS targets \`.arvo-*\` block, element, or modifier classes from the app.
- [ ] No \`!important\` on rules that touch @arvo/* components.
- [ ] No hardcoded hex codes / px spacing where a token exists.
- [ ] No copies of @arvo/styles SCSS partials in the app.
- [ ] Inline \`style\` is used only for layout, never for visual treatment with a CSS variable.

Accessibility
- [ ] Component roles, ARIA attrs, and keyboard handlers are unmodified.
- [ ] Focus ring is preserved (no \`outline: none\`); \`.focus-border\` used in dense layouts.
- [ ] Disclosures use the dedicated dropdown/menu/popover components.
- [ ] Error / required states use \`hasError\` / \`setError(msg)\` / \`isRequired\`.
- [ ] Tooltips supplement, not replace, accessible names.
- [ ] Reduced-motion and forced-colors respected for any custom motion/color.

Composition / extension
- [ ] No app-side reimplementation of an O9* component.
- [ ] No prototype patches or wrappers that monkey-patch @arvo/* exports.
- [ ] Providers (OverlayProvider, TooltipProvider, ArvoToastProvider) mounted at the appropriate root scope.
- [ ] Vanilla JS apps call \`setupOverlayPlugin($)\` / \`setupTooltips()\` exactly once at boot.

Testing
- [ ] Tests query by role + accessible name (or getByLabelText); no \`arvo-*\` classname queries.
- [ ] No structural snapshots of O9* component DOM.
- [ ] aria-busy, aria-expanded, aria-invalid, aria-checked are asserted.
- [ ] No mocking of @arvo/* modules to bypass real integration.

Versioning
- [ ] All @arvo/* packages remain on the same lockstep version after this PR.
- [ ] If the PR upgrades @arvo/*, the changeset has been read and deprecation warnings are addressed.`

const MATRICES = [
  {
    title: 'Buttons (ArvoButton, ArvoIconButton, ArvoFabButton, ArvoButtonGroup, ArvoDropdownButton, ArvoDropdownIconButton)',
    rows: [
      ['Choose variant, size, icon, isFullWidth, isLoading, isSelected, isDisabled', 'Safe'],
      ['Set --arvo-btn-bg-color, --arvo-btn-text-color, --arvo-btn-border-color, --arvo-btn-padding-*, --arvo-btn-icon-size', 'Safe'],
      ['Wrap in app-side component (e.g. <CtaButton>)', 'Safe'],
      ['Add data-arvo-loading on parent / data-arvo-loading-ignore on individual button', 'Safe'],
      ['Use ArvoDropdownButton for menu trigger; supply menu via documented props', 'Safe with restrictions'],
      ['Compose ArvoButton with ArvoTooltip for icon-only contexts', 'Safe with restrictions: icon-only buttons still need label'],
      ['Customize the focus ring offset / color', 'Unsupported — focus is part of the a11y contract'],
      ['Override .arvo-btn, .arvo-btn--*, .arvo-btn__lbl, .arvo-btn__ico', 'Unsupported'],
      ['Render a <button class="arvo-btn ..."> directly in product code', 'Unsupported'],
      ['Replace the loading skeleton with a custom spinner', 'Unsupported'],
    ],
  },
  {
    title: 'Form inputs (ArvoTextbox, ArvoTextarea, ArvoNumberInput, ArvoSearch, ArvoSelect, ArvoCombobox)',
    rows: [
      ['Set width or isFullWidth', 'Safe'],
      ['Use label, description, placeholder, helpText, prefix, suffix, clearable, shortcut', 'Safe'],
      ['Validate with hasError / setError(msg | false) and isRequired/isReadonly/isDisabled', 'Safe'],
      ['Override --arvo-form-input-* and per-component --arvo-{abbr}-* CSS variables', 'Safe'],
      ['Right-side dynamic actions via form-input-actions-overlay shared pattern', 'Safe with restrictions: documented action slots only'],
      ['Render a custom dropdown row via renderOption (where exposed)', 'Safe with restrictions: row must remain a single accessible option'],
      ['Mix controlled value + defaultValue', 'Unsupported'],
      ['Override .arvo-{abbr}__input, .arvo-{abbr}__menu, .arvo-{abbr}__option', 'Unsupported'],
      ['Replace placeholder with a custom label inside the input', 'Unsupported'],
    ],
  },
  {
    title: 'Selection controls (ArvoCheckbox, ArvoCheckboxGroup, ArvoRadio, ArvoRadioGroup, ArvoSwitch)',
    rows: [
      ['Use isChecked/defaultChecked, isIndeterminate, isDisabled, isReadonly, isInvalid, label, description', 'Safe'],
      ['Group multiple Radios / Checkboxes with ArvoRadioGroup / ArvoCheckboxGroup and a label', 'Safe'],
      ['Set --arvo-cb-*, --arvo-rb-*, --arvo-sw-* CSS variables', 'Safe'],
      ['Use a single ArvoRadio outside of an ArvoRadioGroup', 'Unsupported — groups own keyboard nav and labelling'],
      ['Override .arvo-cb__box, .arvo-rb__dot, .arvo-sw__thumb', 'Unsupported'],
      ['Toggle the underlying <input> via DOM mutation', 'Unsupported'],
    ],
  },
  {
    title: 'Listbox / menus (ArvoListbox, ArvoActionMenu)',
    rows: [
      ['Pass options / items data; selectionMode, multiple, disabled per item', 'Safe'],
      ['ArvoActionMenu trailingActions, inlinePopover, inlineHybridPopover', 'Safe'],
      ['Set per-component CSS variables', 'Safe'],
      ['Render arbitrary children inside an item', 'Safe with restrictions: must remain a single accessible item'],
      ['Reorder items at runtime through public APIs', 'Safe'],
      ['Override keyboard handlers (Arrow / Home / End / typeahead)', 'Unsupported'],
      ['Override .arvo-list-item, .arvo-action-menu__list', 'Unsupported'],
    ],
  },
  {
    title: 'Overlays (ArvoPopover, ArvoHybridPopover, ArvoTooltip)',
    rows: [
      ['Use isOpen / defaultOpen + onOpenChange, placement, offset, modal', 'Safe'],
      ['ArvoHybridPopover groups, items, search, inline, empty, conditional configs', 'Safe'],
      ['Set --arvo-pop-*, --arvo-hpop-*, --arvo-tip-* CSS variables, plus width/maxWidth/maxHeight', 'Safe'],
      ['Use TooltipProvider to centralize delays and dismissal', 'Safe'],
      ['Manually portal the overlay (createPortal)', 'Unsupported — breaks the overlay hub'],
      ['Open / close by mutating CSS classes', 'Unsupported'],
      ['Override .arvo-pop__bdy, .arvo-hpop__hdr', 'Unsupported'],
    ],
  },
  {
    title: 'Toasts (ArvoToastProvider, useToast, ArvoToast)',
    rows: [
      ['Mount ArvoToastProvider once at app root with position, max', 'Safe'],
      ['Call useToast() to push toasts with type, title, description, actions, duration', 'Safe'],
      ['Set toast CSS variables for theming', 'Safe'],
      ['Mount multiple ArvoToastProvider instances at the same scope', 'Unsupported'],
      ['Append toast nodes manually to the toast container', 'Unsupported'],
    ],
  },
  {
    title: 'Navigation (ArvoTabstrip, ArvoBreadcrumb, ArvoLink, ArvoButtonLink, ArvoIconButtonLink)',
    rows: [
      ['Pass items, defaultActiveId/activeId, onChange', 'Safe'],
      ['Provide router-aware as adapters when component documents an integration prop', 'Safe with restrictions'],
      ['Set per-component CSS variables', 'Safe'],
      ['Render a custom tab content panel below ArvoTabstrip', 'Safe'],
      ['Override .arvo-tabs__tab, .arvo-bc__sep', 'Unsupported'],
      ['Re-implement keyboard handling (Left/Right/Home/End for tabs)', 'Unsupported'],
    ],
  },
  {
    title: 'Feedback (ArvoBadgeAlert, ArvoToast)',
    rows: [
      ['Set type (info, success, warning, danger), variant, size, title, description, actions, dismissible', 'Safe'],
      ['Set CSS variables for theming', 'Safe'],
      ['Override role / aria-live', 'Unsupported'],
      ['Replace the icon glyph for a given type', 'Unsupported — type semantics are fixed'],
    ],
  },
  {
    title: 'Tokens (@arvo/tokens)',
    rows: [
      ['Read tokens via SCSS ($arvo-*) or CSS variables (var(--arvo-*))', 'Safe'],
      ['Override token CSS variables on an app-scoped wrapper for theming', 'Safe'],
      ['Read a token at runtime via getComputedStyle().getPropertyValue("--arvo-*")', 'Safe with restrictions'],
      ["Hardcode a token's current numeric value into JS or CSS", 'Unsupported'],
      ['Redefine token CSS variables in unsupported scopes (e.g., on body)', 'Unsupported'],
      ['Import individual SCSS partials from @arvo/tokens/src/scss/_*.scss', 'Unsupported'],
    ],
  },
  {
    title: 'Icons (@arvo/assets/icons, o9con-*)',
    rows: [
      ['Use a documented icon name with <i class="o9con o9con-{name}" aria-hidden="true">', 'Safe'],
      ["Pass an icon name into a component's icon prop", 'Safe'],
      ['Color icons via CSS variables / tokens', 'Safe'],
      ['Reference the icon font file URL directly', 'Unsupported'],
      ['Ship a local copy of icons or a custom subset', 'Unsupported — request an icon addition'],
    ],
  },
  {
    title: 'Mixins (@arvo/styles/mixins/*)',
    rows: [
      ["@use '@arvo/styles/mixins/<name>' and apply the documented mixins", 'Safe'],
      ['Compose mixins inside an app-level utility class', 'Safe'],
      ["Re-implement a mixin's CSS by hand into product code", 'Unsupported'],
      ["@use '@arvo/styles/src/components/_*.scss' directly", 'Unsupported'],
    ],
  },
]

function MatrixTable({ rows }) {
  return (
    <div className="border overflow-hidden dark:border-neutral-700">
      <table className="w-full text-sm">
        <thead>
          <tr className="dark:bg-neutral-800/50">
            <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white w-3/4">Customization</th>
            <th className="py-2 px-3 text-left font-medium text-arvo-light-primary dark:text-white">Status</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([custom, status], i) => {
            const tone = status.startsWith('Safe') && !status.includes('restrictions')
              ? 'text-[#0c7951] dark:text-[#2fe09d]'
              : status.startsWith('Safe')
                ? 'text-[#926200] dark:text-[#ffef5c]'
                : 'text-[#bc1227] dark:text-[#f07a62]'
            return (
              <tr key={i} className="border-t dark:border-neutral-700">
                <td className={`py-2 px-3 ${DOC_TABLE_FIRST_COLUMN_CLASS}`}>{custom}</td>
                <td className={`py-2 px-3 font-medium ${tone}`}>{status}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default function UsageChecklist() {
  return (
    <PageWithToc sections={sections}>
      <div className="space-y-12">
        <PageHeader
          title="PR checklist & customization matrix"
          description="Two practical artifacts you can drop directly into your team's workflow: a PR review checklist that codifies every rule in this section, and a customization matrix per component family."
          icon={<svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
        />

        <DocSection id="pr-checklist" title="PR review checklist">
          <DocParagraph>
            Copy this into <DocCode>.github/PULL_REQUEST_TEMPLATE.md</DocCode> (or your equivalent) for any repo that consumes <DocCode>@arvo/*</DocCode>.
          </DocParagraph>
          <CodeBlock language="text" label="PR template" code={PR_CHECKLIST} />
        </DocSection>

        <DocSection id="matrix" title="Customization matrix">
          <DocParagraph>For each component family the matrix lists three categories:</DocParagraph>
          <DocList items={[
            <span key="1"><DocStrong>Safe</DocStrong> — documented surfaces; unrestricted use.</span>,
            <span key="2"><DocStrong>Safe with restrictions</DocStrong> — supported, but with explicit constraints (mode, scope, or accessibility requirements).</span>,
            <span key="3"><DocStrong>Unsupported</DocStrong> — internal, undocumented, or known to break on upgrade.</span>,
          ]} />
          <DocParagraph>If the customization you want isn't listed, default to <DocStrong>unsupported</DocStrong> and request an extension point.</DocParagraph>

          <div className="space-y-8 mt-6">
            {MATRICES.map(({ title, rows }) => (
              <div key={title} className="space-y-3">
                <h3 className="text-base font-semibold text-arvo-light-primary dark:text-white">{title}</h3>
                <MatrixTable rows={rows} />
              </div>
            ))}
          </div>
        </DocSection>

        <DocSection id="governance" title="Governance recommendations">
          <DocParagraph>Stability is a mix of code, tooling, and policy. To keep this contract real, every consuming repo should adopt:</DocParagraph>
          <DocList items={[
            <span key="1"><DocStrong>Banned import lint rule</DocStrong> (<DocCode>no-restricted-imports</DocCode>) covering deep <DocCode>@arvo/*</DocCode> paths and <DocCode>@arvo/core</DocCode> / <DocCode>@arvo/utils</DocCode> from product code.</span>,
            <span key="2"><DocStrong>Stylelint</DocStrong> rule blocking selectors that target <DocCode>^.arvo-</DocCode> from app stylesheets, plus a rule against <DocCode>!important</DocCode> in stylesheets that touch <DocCode>@arvo/*</DocCode> components.</span>,
            <span key="3"><DocStrong>CI grep guards</DocStrong> for <DocCode>{`from '@arvo/.*?/(src|dist|components|hooks|providers|internal)`}</DocCode>.</span>,
            <span key="4"><DocStrong>PR template</DocStrong> with the checklist above.</span>,
            <span key="5"><DocStrong>A periodic audit</DocStrong> (per release or quarterly) listing all CSS overrides against <DocCode>@arvo/*</DocCode> and any <DocCode>data-arvo-internal-*</DocCode> reads — and a track of unsupported usage as technical debt.</span>,
            <span key="6"><DocStrong>A formal deprecation policy</DocStrong> in the design system: deprecation warning in a <DocCode>minor</DocCode>, removal in the next <DocCode>major</DocCode>, with a documented migration path.</span>,
            <span key="7"><DocStrong>An explicit adoption policy</DocStrong>: how new versions are rolled out (canary → staging → prod), who owns regression sign-off, and what the rollback path is.</span>,
          ]} />
          <DocParagraph>Without enforcement, "guidelines" become suggestions.</DocParagraph>
        </DocSection>

        <DocSection id="policy" title="One-sentence policy (again)">
          <DocCallout title="Policy">
            <DocStrong>Teams must consume the Arvo Design System (@arvo/*) only through its documented public contract and must not depend on internal implementation details in code, styling, testing, or behavior orchestration.</DocStrong>
          </DocCallout>
          <DocParagraph>That single rule is the source of every checklist item above.</DocParagraph>
        </DocSection>
      </div>
    </PageWithToc>
  )
}
