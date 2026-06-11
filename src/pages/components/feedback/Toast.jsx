import { useToast, ArvoButton } from '@arvo/react'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

function ToastLiveDemo() {
  const toast = useToast?.() ?? null
  return (
    <>
      <ArvoButton
        label="Show success toast"
        onClick={() => toast?.show?.({ type: 'positive', title: 'Saved', message: 'Your changes were published.' })}
      />
      <ArvoButton
        label="Show danger toast"
        variant="danger"
        onClick={() => toast?.show?.({ type: 'negative', title: 'Failed', message: 'Could not save.' })}
      />
    </>
  )
}

export default createExpertComponentPage({
  slug: 'toast',
  title: 'Toast',
  description:
    'Ephemeral floating notification managed by ArvoToastProvider. Use useToast() (React) or the singleton manager (JS) to push toasts from anywhere in the app.',
  componentSlug: 'toast',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
  ),
  liveDemo: <ToastLiveDemo />,
  reactCode: `import { ArvoToastProvider, useToast } from '@arvo/react';

// Once at app root (toasts are right-anchored: top-right or bottom-right)
<ArvoToastProvider position="top-right">
  <App />
</ArvoToastProvider>

// Anywhere in the tree
function SaveButton() {
  const { show } = useToast();
  return (
    <button onClick={async () => {
      try {
        await save();
        show({ type: 'positive', message: 'Changes saved.' });
      } catch {
        // negative/block never auto-dismiss
        show({ type: 'negative', title: 'Save failed', message: 'Try again.' });
      }
    }}>Save</button>
  );
}

// With a structured link action -- the toast renders the internal ArvoLink
show({
  type: 'info',
  title: 'Report ready',
  message: 'Your export is available for download.',
  link: { label: 'Download report', href: '/reports/latest' },
});

// Programmatic close
const { show, close, closeAll } = useToast();
const id = show({ type: 'info', title: 'Working…', fadeAway: false });
close(id);
closeAll();`,
  jsCode: `import { ArvoToast } from '@arvo/js';

// Create a toast manager once at app boot
const toasts = ArvoToast.initialize(document.body, {
  position: 'top-right',
  timeout: 5000,
});

// Push a toast -- returns an id
const id = toasts.show({ type: 'positive', message: 'Saved successfully!' });

// With title + structured link
toasts.show({
  type: 'info',
  title: 'Report ready',
  message: 'Your export is available for download.',
  link: { label: 'Download report', href: '/reports/latest' },
});

// Close one / all, then tear down
toasts.close(id);
toasts.closeAll();
toasts.destroy();`,
})
