import { NextResponse } from "next/server";
import { saveInquiry, type InquiryPayload } from "@/lib/supabase";

function parsePayload(body: unknown): InquiryPayload | { error: string } {
  if (!body || typeof body !== "object") {
    return { error: "Invalid request body." };
  }

  const data = body as Record<string, unknown>;
  const name = String(data.name ?? "").trim();
  const email = String(data.email ?? "").trim();
  const company = String(data.company ?? "").trim();
  const project_type = String(data.project_type ?? "").trim();
  const message = String(data.message ?? "").trim();

  if (!name || !email || !message) {
    return { error: "Please fill in name, email, and message." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { error: "Please enter a valid email address." };
  }

  return {
    name,
    email,
    company: company || undefined,
    project_type: project_type || undefined,
    message,
  };
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = parsePayload(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const result = await saveInquiry(parsed);
  if (!result.ok) {
    return NextResponse.json(
      { error: result.error || "Failed to save inquiry." },
      { status: result.skipped ? 503 : 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
