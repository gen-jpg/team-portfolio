/**
 * Emails allowed to access the admin dashboard.
 * Add teammates here or move this to a `team_members` Supabase table later.
 */
const ALLOWED_EMAILS: string[] = [
  // "you@example.com",
];

export function isTeamMember(email: string | undefined): boolean {
  if (!email) return false;
  if (ALLOWED_EMAILS.length === 0) return true; // no allowlist = allow all authenticated
  return ALLOWED_EMAILS.includes(email.toLowerCase());
}
