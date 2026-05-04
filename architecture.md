# Arvo Architecture Reference

## *Monorepo Architecture, Packaging, and Delivery*

---

*Canonical architecture reference for the Arvo Design System monorepo.*  
*For deep-dive appendices, see the numbered documents in AgentArchitecture/.*

### 

# **Resources / Links**

##### *Development*

**Repository**  |  [o9git \- o9.DesignSystem](https://o9git.visualstudio.com/CoreDev/_git/o9.DesignSystem)  
**Artifacts Feed** (package registry)  |  [o9git/CoreDev \- o9UI](https://o9git.visualstudio.com/CoreDev/_artifacts/feed/o9UI)  
**Component Status Tracking**  |  [Arvo Component Status](https://docs.google.com/document/d/1J1cHfuLgkYUP56dxKiCAAHOsdE4eQ8Q66wK3YS977IM/edit?usp=sharing)  
**Component Review Notes/Tasks**  |  [Arvo Component Review](https://docs.google.com/document/d/19-_NTyQS4y3ImONsvUXH4XT-s8zaH2NSoGXT-tRn7bg/edit?usp=sharing)

##### *Docs*

**Document Site** (host pending)  |  [o9ds.vercel.app](https://o9ds.vercel.app/)  
**API Doc** (temp dev support)  **|**  [Arvo Components \- API](https://docs.google.com/document/d/1b81Q-a7PCTRKEzIBFaS708x_7gO0LQmRxlRSaDx-4QA/edit?usp=sharing)  
**Arvo Tracks & Open Topics**  |  [Arvo Planning Tracks & Open Topics](https://docs.google.com/document/d/1eA1lUJNcqk5wNXt5IzwkbSZEoZ5giIHF7r48KlHH-Nc/edit?usp=sharing)   
**Compliance Metrics** (reference)  |  [Arvo Compliance Metrics Reference](https://docs.google.com/document/d/1-qcyy_JLxsguomfFz9rO972wLKZeT-Wl2CwtQRGnx8k/edit?usp=sharing)

##### *Figma*

**Figma Project  | **  [Arvo Platform Design System | Figma Project](https://www.figma.com/files/953513455932500110/project/250726221?fuid=1020089521679916452)  
**Foundation Library**  **|**  [Arvo Foundation Library | Figma](https://www.figma.com/design/rjhpdeZqzdnJas17N4PqzY/arvo-Foundation-Library?m=auto&t=sZOcFEWwB08Rvp8Y-6)  
**Component Library**  |  [Arvo Component Library | Figma](https://www.figma.com/design/g8S6ueJqluUt9kN8uZLprN/-NEW--arvo-Component-Library--in-progress-?m=auto&t=sZOcFEWwB08Rvp8Y-6)  
**Arvo Assets  | ** [Arvo Icons and Illustrations](https://www.figma.com/design/KG4bUj8RekcQiRDrfjjJzf/arvo-Icon-and-Illustrations-Library?m=auto&t=sZOcFEWwB08Rvp8Y-6)

# **Team**

**Developer  | ** [Austin Smith](mailto:austin.smith@o9solutions.com)  
**UX Designer  | ** [Akash Upadhyay](mailto:akash.upadhyay@o9solutions.com)  
**Architect**  **| ** [B Manohar](mailto:baskaran.manohar@o9solutions.com)  
**PM  |**  [Ananya Bhattacharya](mailto:ananya.bhattacharya@o9solutions.com)

[**Introduction**](#introduction)

[Purpose](#purpose)

[Scope](#scope)

[Guiding Principles](#guiding-principles)

[**1\. Project Scope/Timeline**](#1.-project-scope/timeline)

[Phase 1](#phase-1)

[Phase 2](#phase-2)

[Phase 3](#phase-3)

[Component Batches | Status](#component-batches-|-status)

[**2\. System Architecture**](#2.-system-architecture)

[High-Level View](#high-level-view)

[Package Inventory](#package-inventory)

[Package Dependency Graph](#package-dependency-graph)

[Technology Stack](#technology-stack)

[**3\. Token Architecture**](#3.-token-architecture)

[**4\. Component Architecture**](#4.-component-architecture)

[Shared Core  |  @arvo/core](#shared-core-|-@arvo/core)

[Shared Patterns](#shared-patterns)

[BEM and Naming](#bem-and-naming)

[**5\. Multi-Framework Strategy**](#5.-multi-framework-strategy)

[React  |  @arvo/react](#react-|-@arvo/react)

[Vanilla JS  |  @arvo/js](#vanilla-js-|-@arvo/js)

[Parity Enforcement](#parity-enforcement)

[Future Framework Support](#future-framework-support)

[**6\. Agentic Development Pipeline**](#6.-agentic-development-pipeline)

[Agent Inventory](#agent-inventory)

[Component Descriptor](#component-descriptor)

[Pipeline Types](#pipeline-types)

[New Component Pipeline](#new-component-pipeline)

[Pipeline Invocation](#pipeline-invocation)

[**7\. Design-to-Code Integration**](#7.-design-to-code-integration)

[Figma Code Connect](#figma-code-connect)

[**8\. Build, Distribution, and Versioning**](#8.-build,-distribution,-and-versioning)

[Registry](#registry)

[Distribution Matrix](#distribution-matrix)

[Versioning](#versioning)

[Feed Promotion](#feed-promotion)

[**9\. External Agent Integration**](#9.-external-agent-integration)

[\*Pending\*](#*pending-discussion*)

[**10\. Repository Structure**](#10.-repository-structure)

[**Architecture Appendices**](#architecture-appendices)

# **Introduction** {#introduction}

## **Purpose** {#purpose}

This document describes the full architecture of the Arvo Design System: what it contains, how it is built, how it ships, and how teams consume, contribute to, and maintain it. It is written for architects, lead developers, and anyone integrating the library into a product.

## **Scope** {#scope}

The Arvo Design System is a dual-platform component library (React \+ vanilla JS) backed by shared design tokens, SCSS styles, framework-agnostic core utilities, and an agent-driven development pipeline. It is distributed as scoped npm packages via Azure Artifacts.

## **Guiding Principles** {#guiding-principles}

| Principle | Implication |
| :---- | :---- |
| Single source of truth | Tokens originate in Figma, component specs originate in descriptors, generated code is never hand-edited. |
| Framework-agnostic core | Shared logic (overlays, positioning, focus, keyboard) lives in @arvo/core. React and JS packages are thin adapters. |
| Mechanical consistency | Naming, prop patterns, CSS variable structures, and cross-platform parity are validated by automated agents, not by review alone. |
| Stateless agents | Each agent receives a descriptor plus prior outputs, produces artifacts, and has no side effects beyond its declared outputs. Agents are portable Markdown prompts that run identically in any LLM-enabled environment. |
| Incremental delivery | Each phase produces shippable artifacts. Later phases extend earlier ones without blocking them from delivering value. |

### 

# **1\. Project Scope/Timeline** {#1.-project-scope/timeline}

Do not mix this scope with that of the Kibo Q3 improvement plan. Arvo is an external, packaged system that platform UI is consuming, and is not in a shared development layer.

Platform Compliance, NovaAI/Kibo migrations, and any coming improvement to o9 UI is NOT part of Arvo. 

**Treat this system the same as any external packaged library.**

## **Phase 1** {#phase-1}

**Commit Date:** April 20th, 2026

**Items:**

* Batch 1 Components (35/36 complete)  
* Kibo/o9React setup to consume pnpm package **✅**  
* Dependencies removed and consumed from Arvo, includes:  
  * o9cons, illustrations, fonts **✅**  
  * Foundation tokens (scss colors, borders, spacing, ….) **✅**  
  * Remove prior component support, all component scripts & scss

**Resources:**

* Document site (temporary hosting, public)  
* Component storybook (temporary deployment, public)  
* Information and references for collaborating within Arvo  
  * Agentic workflow/pipeline usage with examples (each task)  
  * Do’s and Don’ts  
  * Project .md files available for quick setup when switching task within Arvo

## **Phase 2** {#phase-2}

**Commit Date:** July 14th, 2026  \-  post Q3 release cut

**Items:**

* Batch 2 Components  
* Remove overlap in components for o9React and in kibo (webcomponents)  
* Cleanup libraries and remaining debt (css, unused imports, packages)  
* Figma MCP Code Connect  
  * Completed for implemented components  
  * Resolve remaining inconsistencies / invalid figma 

**Resources:**

* Documentation site deployment/hosting finalized, same with content  
* Storybook integrated in document site, all resources in single place  
* Showcase section addition for Code Connect to Implementation details and setup

## **Phase 3** {#phase-3}

**Commit Date:** …

**Items:**

* Batch 3 Components (remaining)  
* Nova AI migration  
* …

## **Component Batches | Status** {#component-batches-|-status}

**Component Status Tracking** | [arvo-status.md](https://docs.google.com/document/d/1J1cHfuLgkYUP56dxKiCAAHOsdE4eQ8Q66wK3YS977IM/edit?usp=sharing)

| Batch 1 \- Apr 20 | Batch 2 \- May 4 | Batch 3 \~ May 11-18 | Batch 4 \~ June 1 \- Q3 |
| :---: | :---: | :---: | :---: |
| **Button ✅ Icon Button ✅ Button Group ✅ Dropdown Button ✅ Dropdown Icon Button ✅ FAB Button ✅ Link ✅ Button Link ✅ Icon Button Link ✅ Breadcrumb ✅ Label ✅ Textbox ✅ Textarea ✅ Search** ✅ **Number Input ✅ Checkbox ✅ Checkbox Group ✅ Radio ✅ Radio Group ✅ Switch ✅ Select Dropdown ✅ Combobox ✅ Popover ✅ Action Menu ✅ Hybrid Popover ✅** **Inline Alert ✅ Badge Alert ✅ Indicators ✅Skeleton Loader ✅ Scroll Bar ✅ Tooltip ✅ Toast ✅ Tooltip ✅ Listbox** **✅ Overlay ✅** Drawer Side Panel | Split Button Split Icon Button Tabstrip Badge Counter Banner Alert Avatar Avatar Group Card AccordionMulti-Select Window Spinner Alert Dialog Input URL Input Password Input Email Empty State Chips HelpHint Splitter  | Calendar  Time CalendarTime CalendarRange Date Picker Time Picker Date Time Picker Color Picker ColorInput Skeleton Loader Text Editor Grid Tree Widget Upload File Input DropZone Toolbar Slider CarouselView Pagination  | DropdownTree OTP Input  ProgressBar Stepper Media Player Timeline Wizard Image Editor My Profile Help Notification PDF Viewer |

# **2\. System Architecture** {#2.-system-architecture}

## **High-Level View** {#high-level-view}

![][image1]

## **Package Inventory** {#package-inventory}

| Package | Role | Output |
| :---- | :---- | :---- |
| @arvo/tokens | SCSS design tokens | color, spacing, typography, borders, widths, animation | SCSS source (no build step) |
| @arvo/styles | Component SCSS, shared mixins, icon font, illustrations, web fonts | SCSS source (no build step) |
| @arvo/core | Framework-agnostic behavioral logic | overlay hub, positioning, focus, keyboard, animation, mask | Vite dist/ (ESM \+ CJS \+ types) |
| @arvo/utils | Form label, char counter, inline alert helpers | Vite dist/ (ESM \+ CJS \+ types) |
| @arvo/react | React components, hooks, providers | Vite dist/ (ESM \+ CJS \+ types) |
| @arvo/js | Vanilla JS components, jQuery plugin system | Vite dist/ (ESM \+ CJS \+ types) |
| @arvo/assets | Fonts, o9con, o9illus | Static asset directories |
| @arvo/docs | Docusaurus site with MDX component pages | Static build (pending) |

## **Package Dependency Graph** {#package-dependency-graph}

![][image2]

Peer dependencies (not bundled):

* react ^18 || ^19  
* react-dom ^18 || ^19 for @arvo/react  
* jquery ^3.7 for @arvo/js.

## **Technology Stack** {#technology-stack}

| Area | Tool | Version |
| :---- | :---- | :---: |
| Package manager | pnpm | 9.x |
| Build orchestration | Turborepo | 2.x |
| Library bundler | Vite (library mode) | 6.x |
| Language | TypeScript (strict) | 5.5+ |
| Styles | SCSS (Dart Sass, modern API) | 1.86+ |
| Testing | Vitest \+ Testing Library \+ jsdom | 3.x |
| Component explorer | Storybook (React-Vite) | 10.x |
| Versioning | Changesets | 2.27+ |
| Runtime | Node.js | \>= 20 |
| Documentation site | Docusaurus (planned) | 3.x |

# **3\. Token Architecture** {#3.-token-architecture}

Tokens flow through two layers:

1. **Compile-time** | SCSS variables (*$arvo-\**) defined in @arvo/tokens/src/scss/. Used inside mixins and the styles package during Sass compilation.  
2. **Runtime** | CSS custom properties (*\--arvo-\**) emitted onto :root by \_root.scss. Theme, brand, and mode layers compose via mixins so consuming applications can override at any cascade level.

**Token categories:**

* Color  
* Spacing  
* Typography  
* Borders  
* Widths  
* Animation

**CSS variable discipline:** Component-level CSS variables (*\--arvo-{abbr}-\**) are created only when the value changes per size, variant, state, or parent override. Static token references are used directly.

**Why tokens live outside the platform:**

* One version across all applications, eliminating copy-paste drift.  
* Independent versioning \- token updates ship without a platform release.  
* Cross-application consistency \- every product renders identical colors, spacing, and typography.  
* Reduced platform bundle \- fonts, icons, and illustrations load from the package rather than being duplicated per app.

# **4\. Component Architecture** {#4.-component-architecture}

## **Shared Core**  |  @arvo/core {#shared-core-|-@arvo/core}

Framework-agnostic behavior modules consumed by both *@arvo/react (via hooks)* and *@arvo/js (via direct import).*

| Module | Purpose |
| :---- | :---- |
| overlay/ | Stack management, z-index allocation, backdrop, outside-click / Escape / popstate dismissal |
| position/ | Placement resolution, flip/shift, scroll-aware updates, virtual anchor support |
| focus/ | Tab cycling, focus restoration on overlay close, roving tabindex |
| keyboard/ | Arrow key navigation, Escape handling, Enter/Space activation |
| animation/ | CSS transition orchestration, reduced-motion detection |
| mask/ | Input masking |

This layer ensures that behavioral parity between React and vanilla JS is structural, not coincidental. Both frameworks delegate the same logic.

## **Shared Patterns** {#shared-patterns}

Shared patterns sit between the raw token layer and the component layer. They encode specific visual behaviors (*e.g.,* *animated form borders, loading skeletons, inline alerts*) that would otherwise be duplicated across every component that needs them.

Each pattern is a styling solution (*SCSS mixin in @arvo/styles*). When DOM is involved, a logic solution (*utility in @arvo/utils*). Both are registered in *SHARED-PATTERNS-REGISTRY.json* and enforced by the pipeline. A component cannot scaffold until its declared patterns have ready status.

## **BEM and Naming** {#bem-and-naming}

CSS classes follow BEM with aggressive abbreviation for compactness across a library of 70+ components:

| .arvo-{abbr}\_\_{element}\--{modifier} |
| :---- |

Abbreviations are documented in each component descriptor: btn, cb, rb, sw, sel, dd, txt, pop, bc, num, …

# **5\. Multi-Framework Strategy** {#5.-multi-framework-strategy}

The design system ships two framework targets from a single source of architectural truth.

## **React**  |  @arvo/react {#react-|-@arvo/react}

* Every component uses forwardRef and extends native HTML element attributes.  
* Hooks (useOverlay, useFocusTrap, useKeyboardNav, usePositioning) wrap @arvo/core modules.  
* OverlayProvider configures container constraints, z-index layering, and route-change behavior for the application.

#### Component pattern:

| import { ArvoButton } from '@arvo/react';\<ArvoButton variant\="primary" size\="md" onClick\={handleClick}\>  Save\</ArvoButton\> |
| :---- |

#### Provider pattern:

| import { OverlayProvider } from '@arvo/react';\<OverlayProvider config\={{ containerSelector: '\#app', zIndexBase: 1000 }}\>  \<App /\>\</OverlayProvider\> |
| :---- |

## **Vanilla JS**  |  @arvo/js {#vanilla-js-|-@arvo/js}

* Class-based lifecycle: ArvoComponent.initialize(element, options) → instance methods → .destroy().  
* Dual-purpose getter/setter API: disabled() returns state; disabled(true) sets it.  
* Three entry points:  
  * main \- direct class usage  
  * plugin \- selective jQuery registration  
  * auto \- side-effect import that registers all plugins  
* Overlay bridge: $.setupOverlays() | $.openOverlay() | $.closeAllOverlays() for jQuery consumers.

#### Class-based pattern:

| import { ArvoButton } from '@arvo/js';const btn \= ArvoButton.initialize(element, { variant: 'primary', size: 'md' });btn.disabled(true);   *// getter/setter: set disabled*btn.disabled();       *// getter/setter: returns true*btn.destroy();        *// cleanup* |
| :---- |

#### jQuery plugin usage:

| *// Register all or a subset*import { registerArvoPlugins } from '@arvo/js/plugin';registerArvoPlugins($);                           *// all components*registerArvoPlugins($, \['arvoButton', 'arvoTextbox'\]); *// selective**// Use via $.fn*$('\#save-btn').arvoButton({ variant: 'primary' }); |
| :---- |

#### Overlay bridge (jQuery):

| $.setupOverlays({ containerSelector: '\#app', zIndexBase: 1000 });$('\#my-popover').openOverlay({ type: 'popover', triggerElement: anchorEl });$.closeAllOverlays(); |
| :---- |

## **Parity Enforcement** {#parity-enforcement}

React and JS implementations produce identical HTML structure, CSS classes, ARIA attributes, and event semantics for every component. This is not a convention, it is validated by the Drift Checker agent on every change and blocks merge on critical divergence.

## **Future Framework Support** {#future-framework-support}

The @arvo/core layer is deliberately framework-agnostic. Adding a new framework target (Angular, Svelte, Web Components) requires writing thin adapter components over the same core modules. The styles, tokens, shared patterns, and behavioral logic remain unchanged.

# **6\. Agentic Development Pipeline** {#6.-agentic-development-pipeline}

The design system uses a pipeline of specialized AI agents to scaffold, implement, test, document, and review components from structured JSON descriptors. The orchestrator coordinates the sequence.

Agents are portable Markdown prompts. They run in Cursor as subagents but can be used directly in any LLM-enabled environment (*Claude, ChatGPT, or any editor with agent support*). Because they are stateless and declarative, they produce consistent output regardless of runtime.

## **Agent Inventory** {#agent-inventory}

| Agent | Responsibility |
| :---- | :---- |
| **Orchestrator** | Coordinates agent sequence, manages checkpoints, handles errors |
| **Shared Pattern** | Implements reusable SCSS mixins \+ @arvo/utils DOM utilities before component work begins |
| **Scaffolding** | Generates boilerplate files across all packages from a component descriptor |
| **SCSS Implementation** | Writes full component SCSS with tokens, states, BEM structure, loading pattern |
| **React Implementation** | Writes React component with props, refs, hooks, ARIA attributes |
| **JS Implementation** | Writes vanilla JS class with initialize/destroy lifecycle, matching React parity |
| **Test Generator** | Generates Vitest tests for React \+ JS — props, states, a11y, keyboard, parity |
| **Drift Checker** | Compares React vs JS output for prop/event/method/CSS parity; blocks on critical drift |
| **Doc Generator** | Generates Storybook stories \+ Docusaurus MDX documentation pages |
| **Reviewer** | Enforces naming conventions, accessibility rules, consistency; performs impact analysis |

## **Component Descriptor** {#component-descriptor}

The JSON descriptor is the single input that drives the entire pipeline. It encodes component identity, BEM structure, props, events, methods, accessibility requirements, loading pattern, shared pattern dependencies, and parent override relationships. One descriptor produces all SCSS, React, JS, test, and documentation files ensuring mechanical consistency across every artifact.

## **Pipeline Types** {#pipeline-types}

| Pipeline | Trigger | Agents Involved |
| :---- | :---- | :---- |
| new-component | Component does not yet exist | All 10 |
| rework | Descriptor changed significantly | Impl \+ Test \+ Drift \+ Doc \+ Review |
| bug-fix | Targeted fix needed | Impl \+ Test \+ Drift \+ Review |
| style-update | SCSS-only change | SCSS Impl \+ Drift \+ Review |
| doc-update | Documentation change | Doc \+ Review |
| breaking-change | API change (major bump) | All \+ migration guide |

## **New Component Pipeline** {#new-component-pipeline}

![][image3]

### Pipeline Invocation {#pipeline-invocation}

```shell
# New component
pnpm pipeline new-component --descriptor descriptors/tooltip.json

# Rework existing component
pnpm pipeline rework --descriptor descriptors/button.json

# Bug fix
pnpm pipeline bug-fix --component Button --description "hover state missing in dark theme"

# Dry run (validate without writing)
pnpm pipeline new-component --descriptor descriptors/tooltip.json --dry-run
```

# **7\. Design-to-Code Integration** {#7.-design-to-code-integration}

## **Figma Code Connect** {#figma-code-connect}

Code Connect maps Figma design components to their codebase implementations. When a developer or agent inspects a Figma component through the MCP server, it returns the corresponding @arvo/react or @arvo/js usage snippet (not raw CSS or layout properties).

The Figma MCP server provides:

* **Code Connect snippets** \- mapped component usage for the selected Figma node.  
* **Screenshots** \- visual reference of the design intent.  
* **Design tokens as CSS variables** \- mapped to the \--arvo-\* token system.  
* **Component documentation links** \- direct references to Storybook stories and doc pages.

Code Connect mappings are maintained alongside component source and updated whenever the component API changes. This closes the loop between design and implementation. 

**Note** \- a Figma component is not just a visual artifact, it is a direct reference to production code.

# **8\. Build, Distribution, and Versioning** {#8.-build,-distribution,-and-versioning}

## **Registry** {#registry}

Azure Artifacts serves as the private npm registry for `@arvo` scoped packages. Consuming applications reference the feed via `.npmrc` and install packages identically to any public npm dependency. The feed proxies public npmjs.com, so a single registry serves both private and third-party packages.

## **Distribution Matrix** {#distribution-matrix}

| Package | Dist | Formats | Entry Points | Side Effects |
| :---- | :---: | :---- | :---- | :---: |
| @arvo/tokens | src/ | SCSS | ./scss, ./scss/{category} | No |
| @arvo/styles | src/ | SCSS | ., ./icons, ./fonts, ./illustrations, ./base, ./mixins/\* | Yes |
| @arvo/core | dist/ | ESM, CJS, .d.ts | . | No |
| @arvo/utils | dist/ | ESM, CJS, .d.ts | . | No |
| @arvo/react | dist/ | ESM, CJS, .d.ts | . | No |
| @arvo/js | dist/ | ESM, CJS, .d.ts | ., ./plugin, ./auto | ./auto only |

## **Versioning** {#versioning}

All packages follow semantic versioning managed by Changesets. Version bumps are intentional \- not every merge is published. A developer includes a changeset file in their PR, and after merge, the Changesets Action accumulates pending changes into a "Version Packages" PR that bumps versions and updates changelogs. Merging that PR triggers the publisher.

| Change | Bump |
| :---- | :---- |
| New component | Minor |
| New prop on existing component | Minor |
| Bug fix or style adjustment | Patch |
| Token value change | Patch |
| Token or prop removed | **Major** |
| API breaking change | **Major** |

## **Feed Promotion** {#feed-promotion}

| View | Audience | Retention |
| :---- | :---- | :---- |
| @Local | Development / CI | Subject to retention policy |
| @Prerelease | QA / staging | Exempt from cleanup |
| @Release | Production consumers | Exempt from cleanup |

# **9\. External Agent Integration** {#9.-external-agent-integration}

## ***\*Pending Discussion\**** {#*pending-discussion*}

## 

# **10\. Repository Structure** {#10.-repository-structure}

| o9-design-system/ ├── packages/ │   ├── tokens/           @arvo/tokens    \- SCSS design tokens │   ├── assets/           @arvo/assets    \- Fonts, icons, illustrations │   ├── styles/           @arvo/styles    \- Component SCSS, shared mixins │   ├── core/             @arvo/core      \- Framework-agnostic behavioral logic │   ├── utils/            @arvo/utils     \- DOM utilities │   ├── react/            @arvo/react     \- React components │   └── js/               @arvo/js        \- Vanilla JS components ├── apps/ │   └── docs/             @arvo/docs      \- Docusaurus documentation site ├── descriptors/          Component JSON descriptors (pipeline input) ├── architecture/         Numbered architecture appendices (00–16) ├── .cursor/ │   ├── agents/           Agent definitions (Markdown prompts) │   └── rules/            Project convention rules ├── .storybook/           Storybook configuration ├── turbo.json            Turborepo task definitions ├── tsconfig.base.json    Shared TypeScript config ├── vite.config.base.ts   Shared Vite externals ├── vitest.workspace.ts   Vitest workspace definition └── pnpm-workspace.yaml   Workspace package globs |
| :---- |

# **Architecture Appendices** {#architecture-appendices}

Detailed specifications are maintained in architecture/:

| Document | Content |
| :---- | :---- |
| 00-MASTER-PLAN.md | Phase overview, timeline, risk mitigation |
| 01-MONOREPO-STRUCTURE.md | Package setup and configuration details |
| 02-AGENT-DEFINITIONS.md | Full agent specs with I/O schemas |
| 03-SHARED-CORE-LAYER.md | Core module design |
| 04-TOKEN-PIPELINE.md | Token generation and sync workflow |
| 05-COMPONENT-PIPELINE.md | Per-component implementation flow |
| 06-TESTING-AND-DRIFT.md | Test strategy and parity enforcement |
| 07-DOCUMENTATION-PIPELINE.md | Documentation generation workflow |
| 08-CI-CD-QUALITY-GATES.md | Pipeline configuration and gate scripts |
| 09-ORCHESTRATION-FLOW.md | Pipeline definitions and error handling |
| 13-COMPONENT-STRATEGY.md | Wave planning and feature matrix |
| 14-SHARED-REFERENCE.md | Active patterns, props, and override reference |
| 15-SHARED-PATTERNS.md | Pattern registry and authoring guide |
| 16-LIST-ARCHITECTURE.md | List component architecture |
