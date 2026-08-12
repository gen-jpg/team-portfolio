import { createClient, type SupabaseClient } from "@supabase/supabase-js";

export type InquiryPayload = {
  name: string;
  email: string;
  company?: string;
  project_type?: string;
  message: string;
};

let client: SupabaseClient | null | undefined;

export function getSupabase(): SupabaseClient | null {
  if (client !== undefined) return client;

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) {
    client = null;
    return client;
  }

  client = createClient(url, key);
  return client;
}

/** Inserts into `inquiries` when Supabase is configured; otherwise returns skipped. */
export async function saveInquiry(
  payload: InquiryPayload,
): Promise<{ ok: boolean; skipped?: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) {
    return { ok: true, skipped: true };
  }

  const { error } = await supabase.from("inquiries").insert({
    name: payload.name,
    email: payload.email,
    company: payload.company || null,
    project_type: payload.project_type || null,
    message: payload.message,
  });

  if (error) {
    return { ok: false, error: error.message };
  }

  return { ok: true };
}

export function buildMailto({
  name,
  email,
  company,
  project_type,
  message,
}: InquiryPayload): string {
  const to =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@studio.example";
  const subject = encodeURIComponent(
    `Project inquiry${project_type ? ` — ${project_type}` : ""} from ${name}`,
  );
  const body = encodeURIComponent(
    [
      `Name: ${name}`,
      `Email: ${email}`,
      company ? `Company: ${company}` : null,
      project_type ? `Project type: ${project_type}` : null,
      "",
      "Message:",
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  );

  return `mailto:${to}?subject=${subject}&body=${body}`;
}
