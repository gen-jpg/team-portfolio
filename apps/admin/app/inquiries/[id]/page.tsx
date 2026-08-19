import { notFound } from "next/navigation";
import { createClient } from "@/lib/supabase-server";
import { Nav } from "@/components/nav";
import { StatusSelect } from "@/components/status-select";
import { CopyEmailButton } from "@/components/copy-email-button";
import { NoteSection } from "@/components/note-section";
import type { InquiryRow, NoteRow } from "@/lib/types";
import Link from "next/link";

export default async function InquiryDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: inquiry } = await supabase
    .from("inquiries")
    .select("*")
    .eq("id", id)
    .single<InquiryRow>();

  if (!inquiry) notFound();

  const { data: notes } = await supabase
    .from("inquiry_notes")
    .select("*")
    .eq("inquiry_id", id)
    .order("created_at", { ascending: true });

  const mailtoSubject = encodeURIComponent("Re: your HABI³ inquiry");
  const mailtoHref = `mailto:${inquiry.email}?subject=${mailtoSubject}`;

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Link
          href="/"
          className="text-sm text-gray-500 hover:text-gray-900 hover:underline"
        >
          &larr; Back to inquiries
        </Link>

        <div className="mt-6 rounded-lg border border-gray-200 bg-white p-6">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h1 className="text-xl font-semibold">{inquiry.name}</h1>
              <p className="mt-1 text-sm text-gray-500">{inquiry.email}</p>
              {inquiry.company && (
                <p className="text-sm text-gray-500">{inquiry.company}</p>
              )}
              {inquiry.project_type && (
                <p className="mt-1 text-xs text-gray-400">
                  Type: {inquiry.project_type}
                </p>
              )}
              <p className="mt-1 text-xs text-gray-400">
                Received {new Date(inquiry.created_at).toLocaleString()}
              </p>
              {inquiry.last_contacted_at && (
                <p className="text-xs text-gray-400">
                  Last contacted{" "}
                  {new Date(inquiry.last_contacted_at).toLocaleString()}
                </p>
              )}
            </div>

            <StatusSelect inquiryId={inquiry.id} currentStatus={inquiry.status} />
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              href={mailtoHref}
              className="inline-flex items-center rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800"
            >
              Reply via email
            </a>
            <CopyEmailButton email={inquiry.email} />
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-semibold text-gray-700">Message</h2>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-gray-600">
              {inquiry.message}
            </p>
          </div>
        </div>

        <NoteSection
          inquiryId={inquiry.id}
          initialNotes={(notes as NoteRow[]) ?? []}
        />
      </main>
    </>
  );
}
