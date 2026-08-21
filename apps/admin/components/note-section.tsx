"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase-browser";
import { useRouter } from "next/navigation";
import type { NoteRow } from "@/lib/types";

export function NoteSection({
  inquiryId,
  initialNotes,
}: {
  inquiryId: string;
  initialNotes: NoteRow[];
}) {
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    if (!body.trim()) return;

    setSaving(true);

    const {
      data: { user },
    } = await supabase.auth.getUser();

    await supabase.from("inquiry_notes").insert({
      inquiry_id: inquiryId,
      body: body.trim(),
      author_email: user?.email ?? "unknown",
    });

    setBody("");
    setSaving(false);
    router.refresh();
  }

  return (
    <div className="mt-8">
      <h2 className="text-sm font-semibold text-gray-700">Internal Notes</h2>

      {initialNotes.length === 0 ? (
        <p className="mt-3 text-sm text-gray-400">No notes yet.</p>
      ) : (
        <div className="mt-3 space-y-3">
          {initialNotes.map((note) => (
            <div
              key={note.id}
              className="rounded-md border border-gray-100 bg-white p-4"
            >
              <p className="whitespace-pre-wrap text-sm text-gray-700">{note.body}</p>
              <p className="mt-2 text-xs text-gray-400">
                {note.author_email} &middot;{" "}
                {new Date(note.created_at).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleAdd} className="mt-4 space-y-2">
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Add an internal note…"
          rows={3}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
        />
        <button
          type="submit"
          disabled={saving || !body.trim()}
          className="rounded-md bg-gray-900 px-4 py-1.5 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50"
        >
          {saving ? "Saving…" : "Add note"}
        </button>
      </form>
    </div>
  );
}
