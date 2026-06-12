import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { OverlayProvider, TooltipProvider, ArvoToastProvider } from '@arvo/react'
import { ThemeProvider } from './context/ThemeContext'
import { DocsShellProvider } from './context/DocsShellContext'
import Layout from './LayoutComponents/Layout'
import ScrollToTop from './LayoutComponents/ScrollToTop'
import {
  LegacyComponentRedirect,
  LegacyContentRedirect,
  LegacyDevRefRedirect,
  LegacyDocTabRedirect,
  LegacyPatternRedirect,
  LegacyRedirect,
  LegacyUsageRedirect,
} from './LayoutComponents/LegacyDocRedirect'
import {
  ACCESSIBILITY,
  COMPONENTS,
  CONTENT,
  FOUNDATIONS,
  GETTING_STARTED,
  PATTERNS,
  PATH_A11Y_ASSISTIVE,
  PATH_A11Y_INTRODUCTION,
  PATH_A11Y_KEYBOARD,
  PATH_A11Y_OVERVIEW,
  PATH_A11Y_SCREEN_READER_BASE,
  PATH_A11Y_SHORTCUTS,
  PATH_A11Y_STANDARDS,
  PATH_A11Y_TESTING,
  PATH_A11Y_VISUAL,
  PATH_ABOUT_ARVO,
  PATH_ARVO_MCP,
  PATH_ARVO_NOVA_AI_AGENT,
  PATH_BORDERS,
  PATH_CHANGELOG,
  PATH_COLOR_BASE,
  PATH_COLOR_DATA_VIZ,
  PATH_COMPONENTS_OVERVIEW,
  PATH_CONTENT_OVERVIEW,
  PATH_CONTRIBUTE,
  PATH_DESIGNERS,
  PATH_DEV_INTRO_BASE,
  PATH_DEV_REF_BASE,
  PATH_DEV_USAGE_BASE,
  PATH_EFFECTS,
  PATH_FAQS,
  PATH_FIGMA_MAKE_BASE,
  PATH_FOUNDATIONS_OVERVIEW,
  PATH_HOME,
  PATH_ICONS_BASE,
  PATH_ILLUSTRATIONS_BASE,
  PATH_MOTION,
  PATH_PATTERNS_OVERVIEW,
  PATH_RESOURCES,
  PATH_SPACING,
  PATH_SYMBOL,
  PATH_TYPOGRAPHY_BASE,
  PATH_GRAMMAR_STYLE_BASE,
  docPagePath,
  devRefTopicPath,
  devUsageTopicPath,
  grammarStyleTopicPath,
} from './data/docPaths'

const Home = lazy(() => import('./pages/Home'))
const Overview = lazy(() => import('./pages/Overview'))
const Resources = lazy(() => import('./pages/Resources'))
const Colors = lazy(() => import('./pages/foundation/Colors'))
const Typography = lazy(() => import('./pages/foundation/Typography'))
const Components = lazy(() => import('./pages/Components'))
const Spacing = lazy(() => import('./pages/foundation/Spacing'))
const Icons = lazy(() => import('./pages/foundation/Icons'))
const ComponentDocPage = lazy(() => import('./pages/components/ComponentDocPage'))
const Placeholder = lazy(() => import('./pages/Placeholder'))
const Borders = lazy(() => import('./pages/foundation/Borders'))
const Effects = lazy(() => import('./pages/foundation/Effects'))
const Motion = lazy(() => import('./pages/foundation/Motion'))
const Illustrations = lazy(() => import('./pages/foundation/Illustrations'))
const Symbol = lazy(() => import('./pages/foundation/Symbol'))
const Developers = lazy(() => import('./pages/Developers'))
const Contribute = lazy(() => import('./pages/Contribute'))
const FoundationsOverview = lazy(() => import('./pages/FoundationsOverview'))
const PatternsOverview = lazy(() => import('./pages/PatternsOverview'))
const AccessibilityOverview = lazy(() => import('./pages/AccessibilityOverview'))
const FigmaMake = lazy(() => import('./pages/FigmaMake'))
const ArvoNovaAiAgent = lazy(() => import('./pages/ArvoNovaAiAgent'))
const AccessibilityOverviewArticle = lazy(() => import('./pages/accessibility/OverviewArticle'))
const AccessibilityStandardsAndPrinciples = lazy(() => import('./pages/accessibility/StandardsAndPrinciples'))
const AccessibilityAssistiveTechnology = lazy(() => import('./pages/accessibility/AssistiveTechnology'))
const AccessibilityScreenReaderAndAria = lazy(() => import('./pages/accessibility/ScreenReaderAndAria'))
const AccessibilityKeyboardAndFocus = lazy(() => import('./pages/accessibility/KeyboardAndFocus'))
const AccessibilityVisualAccessibility = lazy(() => import('./pages/accessibility/VisualAccessibility'))
const AccessibilityTestingAndQA = lazy(() => import('./pages/accessibility/TestingAndQA'))
const AccessibilityShortcuts = lazy(() => import('./pages/accessibility/Shortcuts'))
const ContentOverview = lazy(() => import('./pages/ContentOverview'))
const ContentVoiceAndTone = lazy(() => import('./pages/content/VoiceAndTone'))
const ContentWritingPrinciples = lazy(() => import('./pages/content/WritingPrinciples'))
const ContentGrammarStyle = lazy(() => import('./pages/content/GrammarStylePage'))
const UsageTopicPage = lazy(() => import('./pages/usage/UsageTopicPage'))
const DevRefTopicPage = lazy(() => import('./pages/developer-reference/DevRefTopicPage'))

export default function App() {
  return (
    <ThemeProvider>
      <DocsShellProvider>
      <OverlayProvider>
      <TooltipProvider config={{ enabled: true, hoverDelay: 400 }}>
      <ArvoToastProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <Layout>
        <Suspense fallback={null}>
        <Routes>
          <Route path={PATH_HOME} element={<Home />} />
          <Route path={GETTING_STARTED} element={<LegacyRedirect to={PATH_ABOUT_ARVO} />} />
          <Route path={PATH_CHANGELOG} element={<Placeholder title="Changelog" />} />

          {/* Getting Started */}
          <Route path={PATH_ABOUT_ARVO} element={<Overview />} />
          <Route path={PATH_RESOURCES} element={<Resources />} />
          <Route path={`${PATH_FIGMA_MAKE_BASE}/:tab`} element={<FigmaMake />} />
          <Route path={PATH_FIGMA_MAKE_BASE} element={<Navigate to={docPagePath(PATH_FIGMA_MAKE_BASE, 'Overview')} replace />} />
          <Route path={PATH_ARVO_NOVA_AI_AGENT} element={<ArvoNovaAiAgent />} />
          <Route path={PATH_DESIGNERS} element={<Placeholder title="For Designers" />} />
          <Route path={`${PATH_DEV_INTRO_BASE}/:tab`} element={<Developers />} />
          <Route path={PATH_DEV_INTRO_BASE} element={<Navigate to={docPagePath(PATH_DEV_INTRO_BASE, 'Overview')} replace />} />
          <Route path={`${PATH_DEV_USAGE_BASE}/:topic`} element={<UsageTopicPage />} />
          <Route path={PATH_DEV_USAGE_BASE} element={<Navigate to={devUsageTopicPath('overview')} replace />} />
          <Route path={`${PATH_DEV_REF_BASE}/:topic`} element={<DevRefTopicPage />} />
          <Route path={PATH_DEV_REF_BASE} element={<Navigate to={devRefTopicPath('agentic-pipeline')} replace />} />
          <Route path={PATH_ARVO_MCP} element={<Placeholder title="Arvo MCP/Other MCPs" />} />
          <Route path={`${PATH_CONTRIBUTE}/:tab`} element={<Contribute />} />
          <Route path={PATH_CONTRIBUTE} element={<Navigate to={docPagePath(PATH_CONTRIBUTE, 'For Developers')} replace />} />
          <Route path={PATH_FAQS} element={<Placeholder title="FAQs" />} />

          {/* Foundations */}
          <Route path={PATH_FOUNDATIONS_OVERVIEW} element={<FoundationsOverview />} />
          <Route path={`${PATH_COLOR_BASE}/:tab`} element={<Colors />} />
          <Route path={PATH_COLOR_BASE} element={<Navigate to={docPagePath(PATH_COLOR_BASE, 'Overview')} replace />} />
          <Route path={PATH_COLOR_DATA_VIZ} element={<Placeholder title="Data Visualization Colors" documentationCatalog="foundations" />} />
          <Route path={`${PATH_TYPOGRAPHY_BASE}/:tab`} element={<Typography />} />
          <Route path={PATH_TYPOGRAPHY_BASE} element={<Navigate to={docPagePath(PATH_TYPOGRAPHY_BASE, 'Overview')} replace />} />
          <Route path={PATH_SPACING} element={<Spacing />} />
          <Route path={PATH_BORDERS} element={<Borders />} />
          <Route path={`${PATH_ICONS_BASE}/:tab`} element={<Icons />} />
          <Route path={PATH_ICONS_BASE} element={<Navigate to={docPagePath(PATH_ICONS_BASE, 'Overview')} replace />} />
          <Route path={`${PATH_ILLUSTRATIONS_BASE}/:tab`} element={<Illustrations />} />
          <Route path={PATH_ILLUSTRATIONS_BASE} element={<Navigate to={docPagePath(PATH_ILLUSTRATIONS_BASE, 'Overview')} replace />} />
          <Route path={PATH_SYMBOL} element={<Symbol />} />
          <Route path={`${PATH_MOTION}/:tab`} element={<Motion />} />
          <Route path={PATH_MOTION} element={<Navigate to={docPagePath(PATH_MOTION, 'Overview')} replace />} />
          <Route path={PATH_EFFECTS} element={<Effects />} />

          {/* Components */}
          <Route path={PATH_COMPONENTS_OVERVIEW} element={<Components />} />
          <Route path={`${COMPONENTS}/:slug/:tab`} element={<ComponentDocPage />} />
          <Route path={`${COMPONENTS}/:slug`} element={<LegacyComponentRedirect />} />

          {/* Accessibility */}
          <Route path={PATH_A11Y_OVERVIEW} element={<AccessibilityOverview />} />
          <Route path={PATH_A11Y_INTRODUCTION} element={<AccessibilityOverviewArticle />} />
          <Route path={PATH_A11Y_STANDARDS} element={<AccessibilityStandardsAndPrinciples />} />
          <Route path={PATH_A11Y_ASSISTIVE} element={<AccessibilityAssistiveTechnology />} />
          <Route path={`${PATH_A11Y_SCREEN_READER_BASE}/:tab`} element={<AccessibilityScreenReaderAndAria />} />
          <Route path={PATH_A11Y_SCREEN_READER_BASE} element={<Navigate to={docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview')} replace />} />
          <Route path={PATH_A11Y_KEYBOARD} element={<AccessibilityKeyboardAndFocus />} />
          <Route path={PATH_A11Y_SHORTCUTS} element={<AccessibilityShortcuts />} />
          <Route path={PATH_A11Y_VISUAL} element={<AccessibilityVisualAccessibility />} />
          <Route path={PATH_A11Y_TESTING} element={<AccessibilityTestingAndQA />} />

          {/* Content & Patterns */}
          <Route path={PATH_CONTENT_OVERVIEW} element={<ContentOverview />} />
          <Route path={`${CONTENT}/writing-principles`} element={<ContentWritingPrinciples />} />
          <Route path={`${CONTENT}/voice-and-tone`} element={<ContentVoiceAndTone />} />
          <Route path={`${PATH_GRAMMAR_STYLE_BASE}/:topic`} element={<ContentGrammarStyle />} />
          <Route path={PATH_GRAMMAR_STYLE_BASE} element={<Navigate to={grammarStyleTopicPath('intro')} replace />} />
          <Route path={`${CONTENT}/grammar`} element={<LegacyRedirect to={grammarStyleTopicPath('intro')} />} />
          <Route path={PATH_PATTERNS_OVERVIEW} element={<PatternsOverview />} />
          <Route path={`${PATTERNS}/forms`} element={<Placeholder title="Forms" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/search`} element={<Placeholder title="Search" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/application-layouts`} element={<Placeholder title="Application Layouts" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/notifications-alerts`} element={<Placeholder title="Notifications / Alerts" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/truncation`} element={<Placeholder title="Truncation" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/loading`} element={<Placeholder title="Loading" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/export`} element={<Placeholder title="Export" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/destructive-action`} element={<Placeholder title="Destructive Action" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/navigation`} element={<Placeholder title="Navigation" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/on-hover-always-visible`} element={<Placeholder title="On Hover / Always Visible" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/filters`} element={<Placeholder title="Filters" documentationCatalog="patterns" />} />
          <Route path={`${PATTERNS}/bulk-actions`} element={<Placeholder title="Bulk Actions" documentationCatalog="patterns" />} />

          {/* Legacy exact redirects */}
          <Route path="/overview" element={<LegacyRedirect to={PATH_ABOUT_ARVO} />} />
          <Route path="/resources" element={<LegacyRedirect to={PATH_RESOURCES} />} />
          <Route path="/principles" element={<LegacyRedirect to={`${PATH_ABOUT_ARVO}#principles`} />} />
          <Route path="/figma-make/:tab?" element={<LegacyDocTabRedirect newBase={PATH_FIGMA_MAKE_BASE} />} />
          <Route path="/designers" element={<LegacyRedirect to={PATH_DESIGNERS} />} />
          <Route path="/developers/:tab?" element={<LegacyDocTabRedirect newBase={PATH_DEV_INTRO_BASE} />} />
          <Route path="/foundations" element={<LegacyRedirect to={PATH_FOUNDATIONS_OVERVIEW} />} />
          <Route path="/colors/data-viz" element={<LegacyRedirect to={PATH_COLOR_DATA_VIZ} />} />
          <Route path="/colors/:tab?" element={<LegacyDocTabRedirect newBase={PATH_COLOR_BASE} />} />
          <Route path="/typography/:tab?" element={<LegacyDocTabRedirect newBase={PATH_TYPOGRAPHY_BASE} />} />
          <Route path="/spacing" element={<LegacyRedirect to={PATH_SPACING} />} />
          <Route path="/borders" element={<LegacyRedirect to={PATH_BORDERS} />} />
          <Route path="/effects" element={<LegacyRedirect to={PATH_EFFECTS} />} />
          <Route path="/elevation" element={<LegacyRedirect to={PATH_EFFECTS} />} />
          <Route path="/icons/:tab?" element={<LegacyDocTabRedirect newBase={PATH_ICONS_BASE} />} />
          <Route path="/illustrations/:tab?" element={<LegacyDocTabRedirect newBase={PATH_ILLUSTRATIONS_BASE} />} />
          <Route path="/symbol" element={<LegacyRedirect to={PATH_SYMBOL} />} />
          <Route path="/motion" element={<LegacyRedirect to={PATH_MOTION} />} />
          <Route path="/components" element={<LegacyRedirect to={PATH_COMPONENTS_OVERVIEW} />} />

          <Route path="/components/:slug/:tab?" element={<LegacyComponentRedirect />} />
          <Route path="/accessibility" element={<LegacyRedirect to={PATH_A11Y_OVERVIEW} />} />
          <Route path="/accessibility/overview" element={<LegacyRedirect to={PATH_A11Y_INTRODUCTION} />} />
          <Route path="/accessibility/standards-and-principles" element={<LegacyRedirect to={PATH_A11Y_STANDARDS} />} />
          <Route path="/accessibility/assistive-technology" element={<LegacyRedirect to={PATH_A11Y_ASSISTIVE} />} />
          <Route path="/accessibility/screen-reader-and-aria/:tab?" element={<LegacyDocTabRedirect newBase={PATH_A11Y_SCREEN_READER_BASE} />} />
          <Route path="/accessibility/keyboard-and-focus" element={<LegacyRedirect to={PATH_A11Y_KEYBOARD} />} />
          <Route path="/accessibility/shortcuts" element={<LegacyRedirect to={PATH_A11Y_SHORTCUTS} />} />
          <Route path="/accessibility/visual-accessibility" element={<LegacyRedirect to={PATH_A11Y_VISUAL} />} />
          <Route path="/accessibility/testing-and-qa" element={<LegacyRedirect to={PATH_A11Y_TESTING} />} />
          <Route path="/accessibility/semantics-and-aria" element={<LegacyRedirect to={docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview')} />} />
          <Route path="/accessibility/labels-errors-and-content" element={<LegacyRedirect to={docPagePath(PATH_A11Y_SCREEN_READER_BASE, 'Overview')} />} />
          <Route path="/accessibility/glossary" element={<LegacyRedirect to={PATH_A11Y_INTRODUCTION} />} />
          <Route path="/accessibility/component-accessibility-template" element={<LegacyRedirect to={PATH_A11Y_INTRODUCTION} />} />
          <Route path="/content" element={<LegacyRedirect to={PATH_CONTENT_OVERVIEW} />} />
          <Route path="/content/:topic" element={<LegacyContentRedirect />} />
          <Route path="/patterns" element={<LegacyRedirect to={PATH_PATTERNS_OVERVIEW} />} />
          <Route path="/patterns/:topic" element={<LegacyPatternRedirect />} />
          <Route path="/usage" element={<LegacyUsageRedirect />} />
          <Route path="/usage/:topic" element={<LegacyUsageRedirect />} />
          <Route path="/developer-reference" element={<LegacyDevRefRedirect />} />
          <Route path="/developer-reference/:topic" element={<LegacyDevRefRedirect />} />
          <Route path="/arvo-mcp-other-mcps" element={<LegacyRedirect to={PATH_ARVO_MCP} />} />
          <Route path="/contribute" element={<LegacyRedirect to={PATH_CONTRIBUTE} />} />
          <Route path="/faqs" element={<LegacyRedirect to={PATH_FAQS} />} />
          <Route path="/vibe-coders" element={<LegacyRedirect to={docPagePath(PATH_FIGMA_MAKE_BASE, 'Overview')} />} />
          <Route path="/figma-make/:slug" element={<Navigate to={docPagePath(PATH_FIGMA_MAKE_BASE, 'Overview')} replace />} />
        </Routes>
        </Suspense>
        </Layout>
      </BrowserRouter>
      </ArvoToastProvider>
      </TooltipProvider>
      </OverlayProvider>
      </DocsShellProvider>
    </ThemeProvider>
  )
}
