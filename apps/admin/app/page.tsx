import { createClient } from "@/lib/supabase-server";
import { Nav } from "@/components/nav";
import { InquiryList } from "@/components/inquiry-list";
import type { InquiryRow } from "@/lib/types";

function sanitizeSearchTerm(value: string) {
  return value.replace(/[%_,()]/g, " ").trim();
}

export default async function HomePage({
  searchParams,
}: {
  searchParams: Promise<{
    status?: string;
    q?: string;
    type?: string;
    from?: string;
    to?: string;
  }>;
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

  if (params.type) {
    query = query.eq("project_type", params.type);
  }

  if (params.from) {
    query = query.gte("created_at", `${params.from}T00:00:00`);
  }

  if (params.to) {
    query = query.lte("created_at", `${params.to}T23:59:59.999`);
  }

  const search = params.q ? sanitizeSearchTerm(params.q) : "";
  if (search) {
    const term = `%${search}%`;
    query = query.or(
      `name.ilike.${term},email.ilike.${term},company.ilike.${term},message.ilike.${term},project_type.ilike.${term}`
    );
  }

  const [{ data, error }, { data: typeRows }] = await Promise.all([
    query,
    supabase.from("inquiries").select("project_type"),
  ]);

  const inquiries: InquiryRow[] = data ?? [];
  const projectTypes = Array.from(
    new Set(
      (typeRows ?? [])
        .map((row) => row.project_type)
        .filter((type): type is string => Boolean(type))
    )
  ).sort((a, b) => a.localeCompare(b));

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="text-lg font-semibold">Inquiries</h1>
        {error && (
          <p className="mt-4 text-sm text-red-600">
            Failed to load inquiries: {error.message}
          </p>
        )}
        <InquiryList
          inquiries={inquiries}
          projectTypes={projectTypes}
          currentStatus={params.status ?? "all"}
          currentQuery={params.q ?? ""}
          currentType={params.type ?? ""}
          currentFrom={params.from ?? ""}
          currentTo={params.to ?? ""}
        />
      </main>
    </>
  );
}
