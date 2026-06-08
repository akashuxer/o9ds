import { useEffect, useMemo, useRef, useState } from 'react'
import PageHeader from '../../LayoutComponents/PageHeader'
import PageWithToc from '../../LayoutComponents/PageWithToc'
import DocTabs, { useDocTabUrl } from '../../LayoutComponents/DocTabs'
import DocSection from '../../LayoutComponents/DocSection'
import CounterAnimationCodePen from '../../LayoutComponents/CounterAnimationCodePen'
import { TokenDownloadFab, TokenDownloadSection } from '../../LayoutComponents/TokenScssDownload'
import { DocTabRouteProvider } from '../../context/DocTabRouteContext'
import { useTheme } from '../../context/ThemeContext'
import { PATH_MOTION } from '../../data/docPaths'
import { MOTION_OVERVIEW_TOC, MOTION_TOKENS_TOC } from '../../data/motionTokens'
import {
  ARVO_ANIMATION_SCSS_FILENAME,
  ARVO_ANIMATION_SCSS_REPLACE_PATH,
  downloadArvoAnimationScss,
} from '../../utils/arvoAnimationScss'
import MotionTokensTab from './MotionTokensTab'

const MOTION_TABS = ['Overview', 'Tokens']

const motionIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 10V3L4 14h7v7l9-11h-7z"
    />
  </svg>
)

export default function Motion() {
  const { theme } = useTheme()
  const isLight = theme === 'light'
  const [activeTab, setActiveTab] = useDocTabUrl(MOTION_TABS, { basePath: PATH_MOTION })
  const motionDownloadBtnRef = useRef(null)
  const [showMotionDownloadFab, setShowMotionDownloadFab] = useState(true)

  useEffect(() => {
    if (activeTab !== 'Tokens') {
      setShowMotionDownloadFab(false)
      return undefined
    }

    const el = motionDownloadBtnRef.current
    if (!el) return undefined

    setShowMotionDownloadFab(true)
    const observer = new IntersectionObserver(
      ([entry]) => setShowMotionDownloadFab(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px 0px -16px 0px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [activeTab])

  const sections = useMemo(() => {
    if (activeTab === 'Tokens') {
      return [...MOTION_TOKENS_TOC, { id: 'motion-download-tokens', label: 'Download tokens' }]
    }
    return MOTION_OVERVIEW_TOC
  }, [activeTab])

  return (
    <DocTabRouteProvider basePath={PATH_MOTION}>
      <PageWithToc sections={sections}>
        <div className="space-y-8">
          <PageHeader
            title="Motion & Animation"
            icon={motionIcon}
            description="Duration, easing, and motion patterns for feedback, transitions, and reduced-motion respect across Arvo components."
          />

          <DocTabs tabs={MOTION_TABS} activeTab={activeTab} onSelect={setActiveTab} />

          {activeTab === 'Overview' && (
            <div className="space-y-12">
              <DocSection id="motion-counter-animation" title="Direction-based counter animation">
                <CounterAnimationCodePen />
              </DocSection>
            </div>
          )}

          {activeTab === 'Tokens' && (
            <div className="space-y-12">
              <MotionTokensTab />
              <TokenDownloadSection
                id="motion-download-tokens"
                isLight={isLight}
                buttonRef={motionDownloadBtnRef}
                onDownload={downloadArvoAnimationScss}
                buttonLabel="Download Animation Tokens"
                filename={ARVO_ANIMATION_SCSS_FILENAME}
                replacePath={ARVO_ANIMATION_SCSS_REPLACE_PATH}
              />
            </div>
          )}
        </div>
        {activeTab === 'Tokens' && (
          <TokenDownloadFab
            isLight={isLight}
            visible={showMotionDownloadFab}
            onClick={downloadArvoAnimationScss}
            ariaLabel="Download Animation Tokens"
          />
        )}
      </PageWithToc>
    </DocTabRouteProvider>
  )
}
