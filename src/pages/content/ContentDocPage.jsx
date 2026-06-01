import PageWithToc from '../../LayoutComponents/PageWithToc'
import PageHeader from '../../LayoutComponents/PageHeader'
import ContentNavIcon from './ContentNavIcon'

/**
 * @param {{ title: string, description?: string, tocSections: Array<{ id: string, label: string }>, children: import('react').ReactNode }} props
 */
export default function ContentDocPage({ title, description, tocSections, children }) {
  return (
    <PageWithToc sections={tocSections}>
      <div className="max-w-4xl space-y-10 pb-8">
        <PageHeader title={title} description={description} icon={<ContentNavIcon />} />
        {children}
      </div>
    </PageWithToc>
  )
}
