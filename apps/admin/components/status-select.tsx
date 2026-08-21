"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase-browser";
import { STATUSES } from "@/lib/types";

export function StatusSelect({
  inquiryId,
  currentStatus,
}: {
  inquiryId: string;
  currentStatus: string;
}) {
  const router = useRouter();
  const supabase = createClient();

  async function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const newStatus = e.target.value;
    const update: Record<string, unknown> = { status: newStatus };
    if (newStatus === "contacted") {
      update.last_contacted_at = new Date().toISOString();
    }

    await supabase.from("inquiries").update(update).eq("id", inquiryId);
    router.refresh();
  }

  return (
    <select
      value={currentStatus}
      onChange={handleChange}
      className="rounded-md border border-gray-300 px-3 py-1.5 text-sm"
    >
      {STATUSES.map((s) => (
        <option key={s} value={s}>
          {s.replace("_", " ")}
        </option>
      ))}
    </select>
  );
}
