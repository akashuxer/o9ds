/** @typedef {'ai' | 'data' | 'connectors' | 'tools'} LogoCategoryId */

/**
 * @typedef {{
 *   id: string
 *   label: string
 *   file: string
 *   category: LogoCategoryId
 * }} LogoCatalogItem
 */

export const LOGOS_LIGHT_BASE = '/logos/light'
export const LOGOS_DARK_BASE = '/logos/dark'

/** @param {'light' | 'dark'} theme */
export function logoAssetUrl(file, theme = 'light') {
  const base = theme === 'dark' ? LOGOS_DARK_BASE : LOGOS_LIGHT_BASE
  return `${base}/${encodeURIComponent(file)}`
}

/** @type {{ id: LogoCategoryId, label: string, description: string }} */
export const LOGO_CATEGORIES = [
  {
    id: 'ai',
    label: 'AI providers',
    description:
      'Large language models and AI assistants — ChatGPT, Claude, Gemini, Copilot, and similar services shown when a flow is AI-powered or model-backed.',
  },
  {
    id: 'data',
    label: 'Databases & cloud services',
    description:
      'Data platforms, warehouses, and infrastructure — Redis, Snowflake, AWS, Azure, Google Cloud, and other sources your product reads from or writes to.',
  },
  {
    id: 'connectors',
    label: 'Connectors & MCP integrations',
    description:
      'Workspace and SaaS connectors — Slack, Microsoft 365, Google Workspace, Salesforce, and MCP-linked services that users connect or authorize.',
  },
  {
    id: 'tools',
    label: 'IDEs & developer tools',
    description:
      'Build and delivery tools — GitHub, GitLab, Figma, Postman, and other environments where integrations are configured or deployed.',
  },
]

/** @type {LogoCatalogItem[]} */
export const LOGO_CATALOG = [
  // AI providers
  { id: 'chatgpt', label: 'ChatGPT', file: 'ChatGPT.svg', category: 'ai' },
  { id: 'claude', label: 'Claude', file: 'Claude.svg', category: 'ai' },
  { id: 'gemini', label: 'Gemini', file: 'Gemini.svg', category: 'ai' },
  { id: 'perplexity', label: 'Perplexity', file: 'Perplexity.svg', category: 'ai' },
  { id: 'github-copilot', label: 'GitHub Copilot', file: 'Github Copilot.svg', category: 'ai' },
  { id: 'microsoft-copilot', label: 'Microsoft Copilot', file: 'Copilot Microsoft.svg', category: 'ai' },
  { id: 'cursor', label: 'Cursor', file: 'Cursor.svg', category: 'ai' },

  // Databases & cloud services
  { id: 'redis', label: 'Redis', file: 'Redis.svg', category: 'data' },
  { id: 'snowflake', label: 'Snowflake', file: 'Snowflake.svg', category: 'data' },
  { id: 'mysql', label: 'MySQL', file: 'MySql.svg', category: 'data' },
  { id: 'postgresql', label: 'PostgreSQL', file: 'PostgreSQL.svg', category: 'data' },
  { id: 'mongodb', label: 'MongoDB', file: 'MongoDB.svg', category: 'data' },
  { id: 'mssql', label: 'Microsoft SQL Server', file: 'Microsoft SQL Server.svg', category: 'data' },
  { id: 'ibm-db2', label: 'IBM DB2', file: 'IBMDB2.svg', category: 'data' },
  { id: 'aws', label: 'Amazon AWS', file: 'Amazon AWS Cloud.svg', category: 'data' },
  { id: 'amazon', label: 'Amazon', file: 'Amazon.svg', category: 'data' },
  { id: 'azure', label: 'Microsoft Azure', file: 'Microsoft Azure Cloud.svg', category: 'data' },
  { id: 'google-cloud', label: 'Google Cloud', file: 'Google Cloud.svg', category: 'data' },
  { id: 's3', label: 'Amazon S3', file: 'Amazon S3 Bucket.svg', category: 'data' },
  { id: 'lambda', label: 'AWS Lambda', file: 'Amazon Lamda.svg', category: 'data' },
  { id: 'rabbitmq', label: 'RabbitMQ', file: 'RabbitMQ.svg', category: 'data' },
  { id: 'airflow', label: 'Airflow', file: 'Airflow.svg', category: 'data' },
  { id: 'nifi', label: 'NiFi', file: 'Nifi.svg', category: 'data' },
  { id: 'graphql', label: 'GraphQL', file: 'Graphql.svg', category: 'data' },
  { id: 'sftp', label: 'SFTP', file: 'SFTP.svg', category: 'data' },
  { id: 'cloudflare', label: 'Cloudflare', file: 'Cloudflare.svg', category: 'data' },
  { id: 'oracle', label: 'Oracle', file: 'Oracle.svg', category: 'data' },

  // Connectors & MCP integrations
  { id: 'slack', label: 'Slack', file: 'Slack.svg', category: 'connectors' },
  { id: 'teams', label: 'Microsoft Teams', file: 'Microsoft Teams.svg', category: 'connectors' },
  { id: 'google-workspace', label: 'Google Workspace', file: 'Google Workspace.svg', category: 'connectors' },
  { id: 'google-drive', label: 'Google Drive', file: 'Google Drive.svg', category: 'connectors' },
  { id: 'google-docs', label: 'Google Docs', file: 'Google Docs.svg', category: 'connectors' },
  { id: 'google-sheets', label: 'Google Sheets', file: 'Google Sheet.svg', category: 'connectors' },
  { id: 'google-slides', label: 'Google Slides', file: 'Google Slides.svg', category: 'connectors' },
  { id: 'google-calendar', label: 'Google Calendar', file: 'Google Calendar.svg', category: 'connectors' },
  { id: 'gmail', label: 'Gmail', file: 'Google Gmail.svg', category: 'connectors' },
  { id: 'google-chat', label: 'Google Chat', file: 'Google chat.svg', category: 'connectors' },
  { id: 'google-meet', label: 'Google Meet', file: 'Google Meet.svg', category: 'connectors' },
  { id: 'microsoft-word', label: 'Microsoft Word', file: 'Microsoft Word.svg', category: 'connectors' },
  { id: 'microsoft-excel', label: 'Microsoft Excel', file: 'Microsoft Excel.svg', category: 'connectors' },
  { id: 'microsoft-powerpoint', label: 'Microsoft PowerPoint', file: 'Microsoft Powerpoint.svg', category: 'connectors' },
  { id: 'microsoft-outlook', label: 'Microsoft Outlook', file: 'Microsoft Outlook.svg', category: 'connectors' },
  { id: 'microsoft-onedrive', label: 'Microsoft OneDrive', file: 'Microsoft Onedrive.svg', category: 'connectors' },
  { id: 'microsoft-onedrive-alt', label: 'Microsoft OneDrive (alt)', file: 'Microsoft Onedrive-1.svg', category: 'connectors' },
  { id: 'microsoft-sharepoint', label: 'Microsoft SharePoint', file: 'Microsoft Sharepoin.svg', category: 'connectors' },
  { id: 'microsoft-powerbi', label: 'Microsoft Power BI', file: 'Microsoft PowerBI.svg', category: 'connectors' },
  { id: 'salesforce', label: 'Salesforce', file: 'Salesforce.svg', category: 'connectors' },
  { id: 'stripe', label: 'Stripe', file: 'Stripe.svg', category: 'connectors' },
  { id: 'shopify', label: 'Shopify', file: 'Shopify.svg', category: 'connectors' },
  { id: 'sap', label: 'SAP', file: 'SAP.svg', category: 'connectors' },
  { id: 'adobe', label: 'Adobe', file: 'Adobe.svg', category: 'connectors' },
  { id: 'docusign', label: 'DocuSign', file: 'Docusign.svg', category: 'connectors' },
  { id: 'zoho', label: 'Zoho', file: 'Zoho.svg', category: 'connectors' },
  { id: 'carta', label: 'Carta', file: 'Carta.svg', category: 'connectors' },
  { id: 'n8n', label: 'n8n', file: 'n8n.svg', category: 'connectors' },
  { id: 'zapier', label: 'Zapier', file: 'Zapier.svg', category: 'connectors' },
  { id: 'zoom', label: 'Zoom', file: 'Zoom.svg', category: 'connectors' },

  // IDEs & developer tools
  { id: 'github', label: 'GitHub', file: 'Github.svg', category: 'tools' },
  { id: 'gitlab', label: 'GitLab', file: 'Gitlab.svg', category: 'tools' },
  { id: 'azure-devops', label: 'Azure DevOps Git', file: 'Azure DevOps Git.svg', category: 'tools' },
  { id: 'figma', label: 'Figma', file: 'Figma.svg', category: 'tools' },
  { id: 'postman', label: 'Postman', file: 'Postman.svg', category: 'tools' },
  { id: 'tableau', label: 'Tableau', file: 'Tableau.svg', category: 'tools' },
  { id: 'rclone', label: 'Rclone', file: 'Rclone.svg', category: 'tools' },
]

export const SCALE_PREVIEW_LOGO = {
  label: 'Amazon S3 Bucket',
  file: 'Amazon S3 Bucket.svg',
}

export const LOGOS_OVERVIEW_TOC = [
  { id: 'logos-overview', label: 'Overview' },
  { id: 'logos-categories', label: 'What we show' },
  { id: 'logos-usage', label: 'Usage' },
  { id: 'logos-size', label: 'Size & scale' },
  { id: 'logos-size-tokens', label: 'Size tokens' },
  { id: 'logos-download-tokens', label: 'Download tokens' },
  { id: 'logos-dos-donts', label: "Do's and Don'ts" },
  { id: 'logos-code', label: 'Implementation' },
]

export const LOGOS_GALLERY_TOC = [
  { id: 'logos-display-options', label: 'Display options' },
  { id: 'logos-library', label: 'Logo library' },
]
