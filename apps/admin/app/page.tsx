import { createClient } from "@/lib/supabase-server";
import { Nav } from "@/components/nav";
import { InquiryList } from "@/components/inquiry-list";
import type { InquiryRow } from "@/lib/types";

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; q?: string }>;
}) {
  const params = await searchParams;
  const supabase = await createClient();

  let query = supabase
    .from("inquiries")
    .select("*")
    .order("created_at", { ascending: false });

  if (params.status && params.status !== "all") {
    query = query.eq("status", params.status);
  }

  if (params.q) {
    const term = `%${params.q}%`;
    query = query.or(`name.ilike.${term},email.ilike.${term},company.ilike.${term}`);
  }

  const { data, error } = await query;

  const inquiries: InquiryRow[] = data ?? [];

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-5xl px-4 py-8">
        <h1 className="text-lg font-semibold">Inquiries</h1>
        {error && (
          <p className="mt-4 text-sm text-red-600">
            Failed to load inquiries: {error.message}
          </p>
        )}
        <InquiryList
          inquiries={inquiries}
          currentStatus={params.status ?? "all"}
          currentQuery={params.q ?? ""}
        />
      </main>
    </>
  );
}
