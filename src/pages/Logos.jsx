import { useTheme } from '../context/ThemeContext'
import PageHeader from '../LayoutComponents/PageHeader'
import PageWithToc from '../LayoutComponents/PageWithToc'
import { CLIENT_LOGOS, LOGOS_BASE_PATH_LIGHT, LOGOS_BASE_PATH_DARK } from '../tokens/clientLogos'

const LOGOS_SECTIONS = [{ id: 'client-logos', label: 'Client Logos' }]

const logosIcon = (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
  </svg>
)

function DownloadIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}

export default function Logos() {
  const { theme } = useTheme()
  const isLight = theme === 'light'

  return (
    <PageWithToc sections={LOGOS_SECTIONS}>
      <div className="space-y-8">
        <PageHeader
          title="Client Logos"
          description="o9 client logos for light and dark mode. Preview follows the site theme. Use the download icons to save each variant as SVG."
          icon={logosIcon}
          descClassName="text-lg"
        />

        <section id="client-logos">
          <h2 className="text-xl font-semibold text-o9ds-light-primary dark:text-white mb-6">Logo Gallery</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {CLIENT_LOGOS.map(({ file, label }) => {
              const srcLight = `${LOGOS_BASE_PATH_LIGHT}/${file}`
              const srcDark = `${LOGOS_BASE_PATH_DARK}/${file}`
              const previewSrc = isLight ? srcLight : srcDark
              return (
                <div
                  key={file}
                  className="group flex flex-col items-center justify-between gap-3 p-4 border transition-all hover:shadow-md"
                  style={{
                    borderColor: isLight ? '#E5E5E5' : '#404040',
                    backgroundColor: isLight ? '#FFFFFF' : undefined,
                  }}
                >
                  <div className="flex-1 flex items-center justify-center min-h-[80px] w-full">
                    <img
                      src={previewSrc}
                      alt={label}
                      className="max-h-16 w-auto object-contain"
                    />
                  </div>
                  <p className="text-sm text-o9ds-light-secondary dark:text-neutral-400 text-center line-clamp-2 w-full" title={label}>
                    {label}
                  </p>
                  <div className="flex items-end gap-3 shrink-0" role="group" aria-label={`Download ${label} SVG`}>
                    <a
                      href={srcLight}
                      download={file}
                      className="flex flex-col items-center gap-1 border px-2 py-1.5 transition-colors hover:border-o9ds-light-primary dark:hover:border-white hover:text-o9ds-light-primary dark:hover:text-white"
                      style={{
                        borderColor: isLight ? '#E5E5E5' : '#404040',
                        color: isLight ? '#303030' : '#a3a3a3',
                      }}
                      title={`Download light ${label} as SVG`}
                      aria-label={`Download light ${label}`}
                    >
                      <DownloadIcon className="h-4 w-4" />
                      <span className="text-[10px] font-medium">Light</span>
                    </a>
                    <a
                      href={srcDark}
                      download={file}
                      className="flex flex-col items-center gap-1 border px-2 py-1.5 transition-colors hover:border-o9ds-light-primary dark:hover:border-white hover:text-o9ds-light-primary dark:hover:text-white"
                      style={{
                        borderColor: isLight ? '#E5E5E5' : '#404040',
                        color: isLight ? '#303030' : '#a3a3a3',
                      }}
                      title={`Download dark ${label} as SVG`}
                      aria-label={`Download dark ${label}`}
                    >
                      <DownloadIcon className="h-4 w-4" />
                      <span className="text-[10px] font-medium">Dark</span>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </PageWithToc>
  )
}
