import { Link } from 'react-router-dom'
import PageWithToc from '../LayoutComponents/PageWithToc'
import DocTable from '../LayoutComponents/DocTable'
import { SPACING_TOKENS } from '../tokens/spacingTokens'

const COMPONENTS_SECTIONS = [
  { id: 'buttons-actions', label: 'Buttons & Actions' },
  { id: 'inputs', label: 'Inputs' },
  { id: 'cards', label: 'Cards' },
  { id: 'badges', label: 'Badges' },
  { id: 'alerts', label: 'Alerts' },
  { id: 'spacing-tokens', label: 'Spacing Tokens' },
]

export default function Components() {
  return (
    <PageWithToc sections={COMPONENTS_SECTIONS}>
    <div className="space-y-12">
      <section>
        <h1 className="text-[30px] font-bold mb-4 text-o9ds-light-primary dark:text-white">Components</h1>
        <p className="text-lg text-o9ds-light-secondary dark:text-neutral-400 max-w-2xl">
          Reusable UI building blocks following the o9ds design language.
        </p>
      </section>

      <section id="buttons-actions">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Buttons & Actions</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4">See the <Link to="/components/button" className="text-o9ds-light-primary dark:text-white underline hover:no-underline">Button</Link> component for variants and usage.</p>
        <div className="flex flex-wrap gap-4">
          <button className="bg-o9ds-light-surface dark:bg-white px-4 py-2 text-sm font-medium text-o9ds-light-primary dark:text-black hover:bg-o9ds-light-border dark:hover:bg-neutral-200 transition-colors">
            Primary
          </button>
          <button className=" bg-neutral-700 px-4 py-2 text-sm font-medium text-o9ds-light-primary dark:text-white hover:bg-neutral-600 transition-colors">
            Secondary
          </button>
          <button className="border border-o9ds-light-border dark:border-neutral-500 px-4 py-2 text-sm font-medium text-o9ds-light-primary dark:text-white hover:bg-neutral-800 transition-colors">
            Outline
          </button>
          <button className="bg-transparent px-4 py-2 text-sm font-medium text-o9ds-light-primary dark:text-white hover:bg-neutral-800 transition-colors">
            Ghost
          </button>
          <button className="bg-red-600 px-4 py-2 text-sm font-medium text-o9ds-light-primary dark:text-white hover:bg-red-500 transition-colors">
            Destructive
          </button>
        </div>
      </section>

      <section id="inputs">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Inputs</h2>
        <div className="max-w-md space-y-4">
          <input
            type="text"
            placeholder="Placeholder text"
            className="w-full border border-o9ds-light-border bg-o9ds-light-surface dark:border-neutral-600 dark:bg-neutral-900/50 px-4 py-2 text-o9ds-light-primary dark:text-white placeholder-o9ds-light-secondary dark:placeholder-neutral-500 focus:border-o9ds-light-border dark:focus:border-neutral-400 focus:outline-none"
          />
          <input
            type="text"
            placeholder="Disabled"
            disabled
            className="w-full border border-o9ds-light-border bg-o9ds-light-surface dark:border-neutral-700 dark:bg-neutral-900 px-4 py-2 text-o9ds-light-secondary dark:text-neutral-600 cursor-not-allowed"
          />
        </div>
      </section>

      <section id="cards">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Cards</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: 'Default Card', desc: 'Standard card with border' },
            { title: 'Elevated', desc: 'Card with shadow' },
            { title: 'Filled', desc: 'Card with background' },
          ].map(({ title, desc }, i) => (
            <div
              key={title}
              className={`p-6 ${
                i === 0 ? 'border border-o9ds-light-border dark:border-neutral-700' :
                i === 1 ? 'border border-o9ds-light-border dark:border-neutral-700 shadow-md dark:shadow-lg dark:shadow-black/50' :
                'bg-o9ds-light-surface dark:bg-neutral-900'
              }`}
            >
              <h3 className="font-semibold mb-2 text-o9ds-light-primary dark:text-white">{title}</h3>
              <p className="text-sm text-o9ds-light-secondary dark:text-neutral-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="badges">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Badges</h2>
        <div className="flex flex-wrap gap-2">
          <span className=" bg-neutral-700 px-3 py-1 text-xs font-medium text-o9ds-light-primary dark:text-white">Default</span>
          <span className=" border border-o9ds-light-border dark:border-neutral-600 px-3 py-1 text-xs font-medium text-o9ds-light-secondary dark:text-neutral-300">Outline</span>
        </div>
      </section>

      <section id="alerts">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Alerts</h2>
        <div className="space-y-4 max-w-md">
          <div className=" border border-emerald-600/50 bg-emerald-600/10 p-4 text-emerald-400">
            Success — Action completed successfully.
          </div>
          <div className=" border border-red-600/50 bg-red-600/10 p-4 text-red-400">
            Error — Something went wrong.
          </div>
          <div className=" border border-amber-500/50 bg-amber-500/10 p-4 text-amber-400">
            Warning — Please review before continuing.
          </div>
          <div className=" border border-blue-500/50 bg-blue-500/10 p-4 text-blue-400">
            Info — Additional information available.
          </div>
        </div>
      </section>

      <section id="spacing-tokens">
        <h2 className="text-2xl font-bold mb-6 text-o9ds-light-primary dark:text-white">Spacing Tokens</h2>
        <p className="text-o9ds-light-secondary dark:text-neutral-400 mb-4 max-w-2xl">
          Use these tokens for padding, margins, and gaps across components. See <Link to="/spacing" className="text-o9ds-light-primary dark:text-white underline hover:no-underline">Spacing</Link> for full reference.
        </p>
        <DocTable tokens={SPACING_TOKENS} showCopy />
      </section>
    </div>
    </PageWithToc>
  )
}
