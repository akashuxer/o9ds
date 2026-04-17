import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { DocsShellProvider } from './context/DocsShellContext'
import Layout from './LayoutComponents/Layout'
import ScrollToTop from './LayoutComponents/ScrollToTop'
import Home from './pages/Home'
import Overview from './pages/Overview'
import Principles from './pages/foundation/Principles'
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
import Developers from './pages/Developers'
import FoundationsOverview from './pages/FoundationsOverview'
import PatternsOverview from './pages/PatternsOverview'
import AccessibilityOverview from './pages/AccessibilityOverview'
import ContentOverview from './pages/ContentOverview'

export default function App() {
  return (
    <ThemeProvider>
      <DocsShellProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/foundations" element={<FoundationsOverview />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/colors/data-viz" element={<Placeholder title="Data Visualization Colors" documentationCatalog="foundations" />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/spacing" element={<Spacing />} />
          <Route path="/borders" element={<Borders />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/motion" element={<Placeholder title="Motion & Animation" documentationCatalog="foundations" />} />
          <Route path="/effects" element={<Effects />} />
          <Route path="/elevation" element={<Navigate to="/effects" replace />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/:slug" element={<ComponentDocPage />} />
          <Route path="/designers" element={<Placeholder title="For Designers" />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/vibe-coders" element={<Placeholder title="For Vibe Coders" />} />
          <Route path="/accessibility" element={<AccessibilityOverview />} />
          <Route path="/content" element={<ContentOverview />} />
          <Route path="/content/writing-principles" element={<Placeholder title="Writing Principles" documentationCatalog="contentWriting" />} />
          <Route path="/content/grammar" element={<Placeholder title="Grammar" documentationCatalog="contentWriting" />} />
          <Route path="/content/voice-and-tone" element={<Placeholder title="Voice and Tone" documentationCatalog="contentWriting" />} />
          <Route path="/patterns" element={<PatternsOverview />} />
          <Route path="/patterns/forms" element={<Placeholder title="Forms" documentationCatalog="patterns" />} />
          <Route path="/patterns/search" element={<Placeholder title="Search" documentationCatalog="patterns" />} />
          <Route path="/patterns/filters" element={<Placeholder title="Filters" documentationCatalog="patterns" />} />
          <Route path="/patterns/tables" element={<Placeholder title="Tables" documentationCatalog="patterns" />} />
          <Route path="/patterns/side-panels" element={<Placeholder title="Side Panels" documentationCatalog="patterns" />} />
          <Route path="/patterns/modals" element={<Placeholder title="Modals" documentationCatalog="patterns" />} />
          <Route path="/patterns/notifications" element={<Placeholder title="Notifications" documentationCatalog="patterns" />} />
          <Route path="/patterns/empty-states" element={<Placeholder title="Empty States" documentationCatalog="patterns" />} />
          <Route path="/patterns/bulk-actions" element={<Placeholder title="Bulk Actions" documentationCatalog="patterns" />} />
          <Route path="/patterns/nested-interactions" element={<Placeholder title="Nested Interactions" documentationCatalog="patterns" />} />
          <Route path="/patterns/drag" element={<Placeholder title="Drag" documentationCatalog="patterns" />} />
          <Route path="/patterns/disabled" element={<Placeholder title="Disabled" documentationCatalog="patterns" />} />
          <Route path="/contribute" element={<Placeholder title="How to Contribute" />} />
          <Route path="/faqs" element={<Placeholder title="FAQs" />} />
          <Route path="/changelog" element={<Placeholder title="Changelog" />} />
        </Routes>
        </Layout>
      </BrowserRouter>
      </DocsShellProvider>
    </ThemeProvider>
  )
}
