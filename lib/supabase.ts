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
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    client = null;
    return client;
  }

  client = createClient(url, key);
  return client;
}

/** Inserts into `inquiries` when Supabase is configured. */
export async function saveInquiry(
  payload: InquiryPayload,
): Promise<{ ok: boolean; skipped?: boolean; error?: string }> {
  const supabase = getSupabase();
  if (!supabase) {
    return { ok: false, skipped: true, error: "Inquiry service is not configured." };
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
