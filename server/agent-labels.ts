/** Friendly labels for Cenghar Hermes profiles. Folder id (profile) stays unchanged. */
const AGENT_LABELS: Record<string, string> = {
  'erp-cenghar': 'Mas Elon',
  'threads-cenghar': 'Aceng',
  'marketplace-cenghar': 'Bezos',
  'threads-pribadi': 'Rico',
  'default': 'Default',
  'opencode': 'OpenCode',
}

export function agentLabel(profile: string | undefined): string {
  if (!profile) return 'Hermes'
  return AGENT_LABELS[profile] ?? profile
}
