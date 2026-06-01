import { useRef, useState } from 'react'
import { ArvoPopover, ArvoButton } from '@arvo/react'
import { LiveReference } from '../../../LayoutComponents/ComponentDocPrimitives'
import { createExpertComponentPage } from '../shared/createExpertComponentPage'

function PopoverLiveDemo() {
  const triggerRef = useRef(null)
  const [open, setOpen] = useState(false)

  return (
    <>
      <LiveReference>
        <ArvoButton label="Open popover" ref={triggerRef} onClick={() => setOpen((o) => !o)} />
      </LiveReference>
      <ArvoPopover
        triggerRef={triggerRef}
        isOpen={open}
        onOpenChange={setOpen}
        title="Popover title"
        actions={[
          { id: 'cancel', label: 'Cancel', variant: 'secondary', action: () => setOpen(false) },
          { id: 'save', label: 'Save', variant: 'primary', action: () => setOpen(false) },
        ]}
      >
        <p style={{ margin: 0 }}>Use the controlled isOpen + onOpenChange API to drive the open state from your component.</p>
      </ArvoPopover>
    </>
  )
}

export default createExpertComponentPage({
  slug: 'popover',
  title: 'Popover',
  description:
    'Floating panel anchored to a trigger element with structured header, scrollable body, and optional footer. 13 placements, three trigger modes (click/hover/focus), back navigation, controlled/uncontrolled open state.',
  componentSlug: 'popover',
  icon: (
    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2h-4l-4 4v-4H6a2 2 0 01-2-2V6z" />
    </svg>
  ),
  liveDemo: <PopoverLiveDemo />,
  reactCode: `import { ArvoPopover } from '@arvo/react';
import { useRef, useState } from 'react';

const triggerRef = useRef(null);
<button ref={triggerRef}>Open</button>
<ArvoPopover triggerRef={triggerRef} title="Settings">
  <p>Popover content</p>
</ArvoPopover>

// With footer actions
<ArvoPopover
  triggerRef={triggerRef}
  title="Confirm"
  actions={[
    { id: 'cancel', label: 'Cancel', variant: 'secondary' },
    { id: 'save', label: 'Save', variant: 'primary', action: () => handleSave() },
  ]}
>
  <p>Are you sure?</p>
</ArvoPopover>

// Controlled
const [isOpen, setIsOpen] = useState(false);
<ArvoPopover isOpen={isOpen} onOpenChange={setIsOpen} triggerRef={triggerRef} title="Controlled">
  <p>Controlled content</p>
</ArvoPopover>

// Hover trigger
<ArvoPopover triggerRef={triggerRef} trigger="hover" title="Hover Info">
  <p>Opens on pointer enter, closes on pointer leave.</p>
</ArvoPopover>

// Edge variant (full-bleed body)
<ArvoPopover triggerRef={triggerRef} variant="edge" title="Edge">
  <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
    <li style={{ padding: '8px 12px' }}>List item</li>
  </ul>
</ArvoPopover>`,
  jsCode: `import { ArvoPopover } from '@arvo/js';

const popover = ArvoPopover.initialize(trigger, {
  title: 'Settings',
  content: '<p>Popover content</p>',
  closable: true,
  actions: [
    { id: 'cancel', label: 'Cancel', variant: 'secondary' },
    { id: 'save', label: 'Save', variant: 'primary', action: () => handleSave() },
  ],
  onOpen: () => console.log('opened'),
  onClose: () => console.log('closed'),
});

popover.open();
popover.close();
popover.toggle();
popover.isOpen();

popover.renderBody('<p>New content</p>');
popover.setLoading(true);
popover.setFooterVisible(false);
popover.updateFooterAction('save', { disabled: true, label: 'Saving...' });
popover.reposition();
popover.destroy();`,
})
