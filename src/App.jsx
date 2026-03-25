import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
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
import Illustrations from './pages/foundation/Illustrations'
import Logos from './pages/foundation/Logos'
import Developers from './pages/Developers'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/principles" element={<Principles />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/colors/data-viz" element={<Placeholder title="Data Visualization Colors" />} />
          <Route path="/typography" element={<Typography />} />
          <Route path="/spacing" element={<Spacing />} />
          <Route path="/borders" element={<Borders />} />
          <Route path="/icons" element={<Icons />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/logos" element={<Logos />} />
          <Route path="/motion" element={<Placeholder title="Motion & Animation" />} />
          <Route path="/elevation" element={<Placeholder title="Elevation & Shadows" />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/:slug" element={<ComponentDocPage />} />
          <Route path="/designers" element={<Placeholder title="For Designers" />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/vibe-coders" element={<Placeholder title="For Vibe Coders" />} />
          <Route path="/accessibility" element={<Placeholder title="Accessibility" />} />
          <Route path="/content" element={<Placeholder title="Content Guidelines" />} />
          <Route path="/content/writing-principles" element={<Placeholder title="Writing Principles" />} />
          <Route path="/content/grammar" element={<Placeholder title="Grammar" />} />
          <Route path="/content/voice-and-tone" element={<Placeholder title="Voice and Tone" />} />
          <Route path="/patterns" element={<Placeholder title="Patterns" />} />
          <Route path="/patterns/forms" element={<Placeholder title="Forms" />} />
          <Route path="/patterns/search" element={<Placeholder title="Search" />} />
          <Route path="/patterns/filters" element={<Placeholder title="Filters" />} />
          <Route path="/patterns/tables" element={<Placeholder title="Tables" />} />
          <Route path="/patterns/side-panels" element={<Placeholder title="Side Panels" />} />
          <Route path="/patterns/modals" element={<Placeholder title="Modals" />} />
          <Route path="/patterns/notifications" element={<Placeholder title="Notifications" />} />
          <Route path="/patterns/empty-states" element={<Placeholder title="Empty States" />} />
          <Route path="/patterns/bulk-actions" element={<Placeholder title="Bulk Actions" />} />
          <Route path="/patterns/nested-interactions" element={<Placeholder title="Nested Interactions" />} />
          <Route path="/patterns/drag" element={<Placeholder title="Drag" />} />
          <Route path="/patterns/disabled" element={<Placeholder title="Disabled" />} />
          <Route path="/contribute" element={<Placeholder title="How to Contribute" />} />
          <Route path="/faqs" element={<Placeholder title="FAQs" />} />
          <Route path="/changelog" element={<Placeholder title="Changelog" />} />
        </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  )
}
