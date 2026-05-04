/**
 * Arvo Resources page — R&D and Branding contacts (Design System).
 * @typedef {{ name: string, description: string }} TeamMember
 */

/** @type {{ title: string, members: TeamMember[], moreLabel: string }[]} */
export const RESOURCES_TEAM_GROUPS = [
  {
    title: 'R&D',
    moreLabel: '…and other R&D team members',
    members: [
      { name: 'Manohar', description: 'Supporting this project since starting.' },
      {
        name: 'Austin',
        description: 'Bridging UX–Dev alignment and technical insights, and leading Arvo from the development side.',
      },
      { name: 'Ananya', description: 'Leading and prioritizing this project as a product manager.' },
      { name: 'Siddhant', description: 'Contributing to the icon and illustration library and managing it.' },
      { name: 'Diwakar', description: 'Integrating modernization principles into the design system.' },
      { name: 'Akash', description: 'Managing Arvo from the UX side.' },
    ],
  },
  {
    title: 'Branding',
    moreLabel: '…and other brand team members',
    members: [
      { name: 'Lucila', description: 'Lead UI Designer — guiding brand integration.' },
      { name: 'Dimitra', description: 'UI Designer — supporting design refinements.' },
      { name: 'Jordi', description: 'Lead Brand Designer — aligning the DS with brand direction.' },
      { name: 'Amalie', description: 'Icons & illustration design.' },
      { name: 'Antonia', description: 'Motion & video design.' },
      { name: 'Tatiana', description: 'Motion design and transitions.' },
      { name: 'Camilla / Priska', description: 'Project and timeline management.' },
    ],
  },
]
