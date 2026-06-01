import { ArvoMessageAlert } from '@arvo/react'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

export default createExpertComponentPage({
  slug: 'inline-alert',
  title: 'Message Alert',
  description:
    'Atomic icon + message status primitive. Renders below form fields, inside panel info slots, and as in-field error icons. Six semantic types and two display modes.',
  componentSlug: 'inline-alert',
  descriptorSlug: 'message-alert',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 4h.01M5.07 19h13.86a2 2 0 001.74-3l-6.93-12a2 2 0 00-3.48 0l-6.93 12a2 2 0 001.74 3z" />
    </svg>
  ),
  liveDemo: (
    <>
      <ArvoMessageAlert type="error" message="Email is required" />
      <ArvoMessageAlert type="success" message="Saved" />
      <ArvoMessageAlert type="warning" message="Approaching quota" />
      <ArvoMessageAlert type="info" message="24 matching results" />
      <ArvoMessageAlert type="neutral" message="No new activity" />
      <ArvoMessageAlert type="block" message="You do not have permission to publish" />
    </>
  ),
  reactCode: `import { ArvoMessageAlert, ARVO_MSG_ALERT_DEFAULT_ERROR } from '@arvo/react';

// Full mode — below-field validation error
<ArvoMessageAlert type="error" id="email-error" message="Email is required" />

// Inline mode — in-field tooltip error icon
<ArvoMessageAlert
  type="error"
  isInline
  message="Email is required"
  className="arvo-textbox__err-ico"
/>

// Info type for panel info slot
<ArvoMessageAlert type="info" role="status" message="24 matching results" />

// Dismissable
<ArvoMessageAlert
  type="success"
  message="Saved!"
  isDismissable
  onDismiss={() => setVisible(false)}
/>

// Icon override
<ArvoMessageAlert type="neutral" icon="bell-o" message="Notification" />

// Default error message constant
const msg = errorMsg ?? ARVO_MSG_ALERT_DEFAULT_ERROR;`,
  jsCode: `import { ArvoMessageAlert } from '@arvo/js';

const alert = ArvoMessageAlert.initialize(document.createElement('div'), {
  type: 'error',
  message: 'Email is required',
  id: 'email-error',
});
field.appendChild(alert.el);

// Inline mode
const errIcon = ArvoMessageAlert.initialize(document.createElement('span'), {
  type: 'error',
  isInline: true,
  message: 'Email is required',
});
errIcon.el.classList.add('arvo-textbox__err-ico');

alert.message('New message');
alert.type('success');
alert.inline(true);     // toggle to icon-only
alert.dismissable(true);
alert.dismiss();
alert.destroy();`,
})
