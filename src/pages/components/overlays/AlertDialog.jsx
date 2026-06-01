import { useState } from 'react'
import { ArvoAlertDialog, ArvoButton } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

function AlertDialogLiveDemo() {
  const [open, setOpen] = useState(false)

  return (
    <LiveReference>
      <ArvoButton label="Open dialog" onClick={() => setOpen(true)} />
      <ArvoAlertDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Discard changes?"
        description="You have unsaved changes. Discarding now removes them permanently."
        variant="warning"
        confirmLabel="Discard"
        cancelLabel="Keep editing"
        onConfirm={() => setOpen(false)}
      />
    </LiveReference>
  )
}

export default createExpertComponentPage({
  slug: 'alert-dialog',
  title: 'Alert Dialog',
  description:
    'Modal confirmation dialog used to interrupt the flow for a single decision: confirm, cancel, or destructive acknowledge. Built on the overlay hub with a focus trap and a configurable variant set.',
  componentSlug: 'alert-dialog',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  liveDemo: <AlertDialogLiveDemo />,
  reactCode: `import { ArvoAlertDialog, ArvoButton } from '@arvo/react';
import { useState } from 'react';

function DiscardButton() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ArvoButton label="Discard" variant="danger" onClick={() => setOpen(true)} />
      <ArvoAlertDialog
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Discard changes?"
        description="You have unsaved changes. Discarding now removes them permanently."
        variant="danger"
        confirmLabel="Discard"
        cancelLabel="Keep editing"
        onConfirm={() => setOpen(false)}
      />
    </>
  );
}`,
  jsCode: `import { ArvoAlertDialog } from '@arvo/js';

const dlg = ArvoAlertDialog.initialize(el, {
  title: 'Discard changes?',
  description: 'You have unsaved changes.',
  variant: 'danger',
  confirmLabel: 'Discard',
  cancelLabel: 'Keep editing',
  onConfirm: () => api.discard(),
});

dlg.open();
dlg.close();
dlg.destroy();`,
})
