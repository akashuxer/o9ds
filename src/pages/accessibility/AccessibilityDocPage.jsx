import PageWithToc from '../../LayoutComponents/PageWithToc'
import PageHeader from '../../LayoutComponents/PageHeader'
import AccessibilityNavIcon from './AccessibilityNavIcon'

/**
 * @param {{ title: string, description?: string, tocSections: Array<{ id: string, label: string }>, children: import('react').ReactNode }} props
 */
export default function AccessibilityDocPage({ title, description, tocSections, children }) {
  return (
    <PageWithToc sections={tocSections}>
      <div className="max-w-4xl space-y-10 pb-8">
        <PageHeader title={title} description={description} icon={<AccessibilityNavIcon />} />
        {children}
      </div>
    </PageWithToc>
  )
}
