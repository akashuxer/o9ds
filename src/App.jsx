import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { OverlayProvider, TooltipProvider, O9ToastProvider } from '@o9ds/react'
import { ThemeProvider } from './context/ThemeContext'
import { DocsShellProvider } from './context/DocsShellContext'
import Layout from './LayoutComponents/Layout'
import ScrollToTop from './LayoutComponents/ScrollToTop'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Resources from './pages/Resources'
import Colors from './pages/foundation/Colors'
import Typography from './pages/foundation/Typography'
import Components from './pages/Components'
import Spacing from './pages/foundation/Spacing'
import Icons from './pages/foundation/Icons'
import ComponentDocPage from './pages/components/ComponentDocPage'
import Placeholder from './pages/Placeholder'
import Borders from './pages/foundation/Borders'
import Effects from './pages/foundation/Effects'
import Illustrations from './pages/foundation/Illustrations'
import Symbol from './pages/foundation/Symbol'
import Developers from './pages/Developers'
import FoundationsOverview from './pages/FoundationsOverview'
import PatternsOverview from './pages/PatternsOverview'
import AccessibilityOverview from './pages/AccessibilityOverview'
import UsageIndex from './pages/usage/Index'
import UsagePublicApi from './pages/usage/PublicApi'
import UsageComponents from './pages/usage/Components'
import UsageStyling from './pages/usage/Styling'
import UsageComposition from './pages/usage/Composition'
import UsageAccessibility from './pages/usage/Accessibility'
import UsageTesting from './pages/usage/Testing'
import UsageVersioning from './pages/usage/Versioning'
import UsageAntiPatterns from './pages/usage/AntiPatterns'
import UsageChecklist from './pages/usage/Checklist'
import DevRefAgenticPipeline from './pages/developer-reference/AgenticPipeline'
import DevRefComponentPipeline from './pages/developer-reference/ComponentPipeline'
import DevRefTokenPipeline from './pages/developer-reference/TokenPipeline'
import DevRefSharedPatterns from './pages/developer-reference/SharedPatterns'
import DevRefTestingAndDrift from './pages/developer-reference/TestingAndDrift'
import DevRefWorkflows from './pages/developer-reference/Workflows'
import AccessibilityOverviewArticle from './pages/accessibility/OverviewArticle'
import AccessibilityStandardsAndPrinciples from './pages/accessibility/StandardsAndPrinciples'
import AccessibilityAssistiveTechnology from './pages/accessibility/AssistiveTechnology'
import AccessibilityScreenReaderAndAria from './pages/accessibility/ScreenReaderAndAria'
import AccessibilityKeyboardAndFocus from './pages/accessibility/KeyboardAndFocus'
import AccessibilityVisualAccessibility from './pages/accessibility/VisualAccessibility'
import AccessibilityTestingAndQA from './pages/accessibility/TestingAndQA'
import AccessibilityShortcuts from './pages/accessibility/Shortcuts'
import ContentOverview from './pages/ContentOverview'

export default function App() {
  return (
    <ThemeProvider>
      <DocsShellProvider>
      <OverlayProvider>
      <TooltipProvider>
      <O9ToastProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/principles" element={<Navigate to="/overview#principles" replace />} />
          <Route path="/foundations" element={<FoundationsOverview />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/colors/data-viz" element={<Placeholder title="Data Visualization Colors" documentationCatalog="foundations" />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/spacing" element={<Spacing />} />
          <Route path="/borders" element={<Borders />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/symbol" element={<Symbol />} />
          <Route path="/motion" element={<Placeholder title="Motion & Animation" documentationCatalog="foundations" />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/elevation" element={<Navigate to="/effects" replace />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/:slug" element={<ComponentDocPage />} />
          <Route path="/designers" element={<Placeholder title="For Designers" />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/arvo-mcp-other-mcps" element={<Placeholder title="Arvo MCP/Other MCPs" />} />
          <Route path="/vibe-coders" element={<Placeholder title="For Vibe Coders" />} />
          <Route path="/accessibility" element={<AccessibilityOverview />} />
          <Route path="/accessibility/overview" element={<AccessibilityOverviewArticle />} />
          <Route path="/accessibility/standards-and-principles" element={<AccessibilityStandardsAndPrinciples />} />
          <Route path="/accessibility/assistive-technology" element={<AccessibilityAssistiveTechnology />} />
          <Route path="/accessibility/screen-reader-and-aria" element={<AccessibilityScreenReaderAndAria />} />
          <Route
            path="/accessibility/semantics-and-aria"
            element={<Navigate to="/accessibility/screen-reader-and-aria" replace />}
          />
          <Route
            path="/accessibility/labels-errors-and-content"
            element={<Navigate to="/accessibility/screen-reader-and-aria" replace />}
          />
          <Route path="/accessibility/keyboard-and-focus" element={<AccessibilityKeyboardAndFocus />} />
          <Route path="/accessibility/shortcuts" element={<AccessibilityShortcuts />} />
          <Route path="/accessibility/visual-accessibility" element={<AccessibilityVisualAccessibility />} />
          <Route
            path="/accessibility/component-accessibility-template"
            element={<Navigate to="/accessibility/overview" replace />}
          />
          <Route path="/accessibility/testing-and-qa" element={<AccessibilityTestingAndQA />} />
          <Route path="/accessibility/glossary" element={<Navigate to="/accessibility/overview" replace />} />
          <Route path="/content" element={<ContentOverview />} />
          <Route path="/content/writing-principles" element={<Placeholder title="Writing Principles" documentationCatalog="contentWriting" />} />
          <Route path="/content/grammar" element={<Placeholder title="Grammar" documentationCatalog="contentWriting" />} />
          <Route path="/content/voice-and-tone" element={<Placeholder title="Voice and Tone" documentationCatalog="contentWriting" />} />
          <Route path="/patterns" element={<PatternsOverview />} />
          <Route path="/patterns/forms" element={<Placeholder title="Forms" documentationCatalog="patterns" />} />
          <Route path="/patterns/search" element={<Placeholder title="Search" documentationCatalog="patterns" />} />
          <Route path="/patterns/application-layouts" element={<Placeholder title="Application Layouts" documentationCatalog="patterns" />} />
          <Route path="/patterns/notifications-alerts" element={<Placeholder title="Notifications / Alerts" documentationCatalog="patterns" />} />
          <Route path="/patterns/truncation" element={<Placeholder title="Truncation" documentationCatalog="patterns" />} />
          <Route path="/patterns/loading" element={<Placeholder title="Loading" documentationCatalog="patterns" />} />
          <Route path="/patterns/export" element={<Placeholder title="Export" documentationCatalog="patterns" />} />
          <Route path="/patterns/destructive-action" element={<Placeholder title="Destructive Action" documentationCatalog="patterns" />} />
          <Route path="/patterns/navigation" element={<Placeholder title="Navigation" documentationCatalog="patterns" />} />
          <Route path="/patterns/on-hover-always-visible" element={<Placeholder title="On Hover / Always Visible" documentationCatalog="patterns" />} />
          <Route path="/patterns/filters" element={<Placeholder title="Filters" documentationCatalog="patterns" />} />
          <Route path="/patterns/bulk-actions" element={<Placeholder title="Bulk Actions" documentationCatalog="patterns" />} />
          <Route path="/contribute" element={<Placeholder title="How to Contribute" />} />
          <Route path="/faqs" element={<Placeholder title="FAQs" />} />
          <Route path="/changelog" element={<Placeholder title="Changelog" />} />
          {/* Usage — consumer-facing contract */}
          <Route path="/usage" element={<UsageIndex />} />
          <Route path="/usage/public-api" element={<UsagePublicApi />} />
          <Route path="/usage/components" element={<UsageComponents />} />
          <Route path="/usage/styling" element={<UsageStyling />} />
          <Route path="/usage/composition" element={<UsageComposition />} />
          <Route path="/usage/accessibility" element={<UsageAccessibility />} />
          <Route path="/usage/testing" element={<UsageTesting />} />
          <Route path="/usage/versioning" element={<UsageVersioning />} />
          <Route path="/usage/anti-patterns" element={<UsageAntiPatterns />} />
          <Route path="/usage/checklist" element={<UsageChecklist />} />
          {/* Developer Reference — contributor internals */}
          <Route path="/developer-reference" element={<Navigate to="/developers" replace />} />
          <Route path="/developer-reference/agentic-pipeline" element={<DevRefAgenticPipeline />} />
          <Route path="/developer-reference/component-pipeline" element={<DevRefComponentPipeline />} />
          <Route path="/developer-reference/token-pipeline" element={<DevRefTokenPipeline />} />
          <Route path="/developer-reference/shared-patterns" element={<DevRefSharedPatterns />} />
          <Route path="/developer-reference/testing-and-drift" element={<DevRefTestingAndDrift />} />
          <Route path="/developer-reference/workflows" element={<DevRefWorkflows />} />
        </Routes>
        </Layout>
      </BrowserRouter>
      </O9ToastProvider>
      </TooltipProvider>
      </OverlayProvider>
      </DocsShellProvider>
    </ThemeProvider>
  )
}
