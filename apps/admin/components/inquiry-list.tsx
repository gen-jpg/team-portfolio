"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { STATUSES, type InquiryRow } from "@/lib/types";

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  in_progress: "bg-purple-100 text-purple-800",
  closed: "bg-green-100 text-green-800",
  spam: "bg-gray-100 text-gray-500",
};

const controlClass =
  "rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900";

type Filters = {
  status: string;
  q: string;
  type: string;
  from: string;
  to: string;
};

export function InquiryList({
  inquiries,
  projectTypes,
  currentStatus,
  currentQuery,
  currentType,
  currentFrom,
  currentTo,
}: {
  inquiries: InquiryRow[];
  projectTypes: string[];
  currentStatus: string;
  currentQuery: string;
  currentType: string;
  currentFrom: string;
  currentTo: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(currentQuery);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filters: Filters = {
    status: currentStatus,
    q: currentQuery,
    type: currentType,
    from: currentFrom,
    to: currentTo,
  };

  const hasActiveFilters =
    currentStatus !== "all" ||
    Boolean(currentQuery) ||
    Boolean(currentType) ||
    Boolean(currentFrom) ||
    Boolean(currentTo);

  function navigate(overrides: Partial<Filters>) {
    const next = { ...filters, q: query, ...overrides };
    const params = new URLSearchParams();
    if (next.status && next.status !== "all") params.set("status", next.status);
    if (next.q) params.set("q", next.q);
    if (next.type) params.set("type", next.type);
    if (next.from) params.set("from", next.from);
    if (next.to) params.set("to", next.to);
    const qs = params.toString();
    router.push(qs ? `/?${qs}` : "/");
  }

  function toggleExpanded(id: string) {
    setExpandedId((current) => (current === id ? null : id));
  }

  return (
    <div className="mt-4 space-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ q: query });
        }}
        className="rounded-lg border border-gray-200 bg-white p-4"
      >
        <div className="flex flex-wrap items-end gap-3">
          <label className="flex min-w-[9rem] flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Status
            </span>
            <select
              value={currentStatus}
              onChange={(e) => navigate({ status: e.target.value })}
              className={controlClass}
            >
              <option value="all">All statuses</option>
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {s.replace("_", " ")}
                </option>
              ))}
            </select>
          </label>

          <label className="flex min-w-[12rem] flex-1 flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Type
            </span>
            <select
              value={currentType}
              onChange={(e) => navigate({ type: e.target.value })}
              className={controlClass}
            >
              <option value="">All types</option>
              {projectTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              From
            </span>
            <input
              type="date"
              value={currentFrom}
              onChange={(e) => navigate({ from: e.target.value })}
              className={controlClass}
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-xs font-medium uppercase tracking-wider text-gray-500">
              To
            </span>
            <input
              type="date"
              value={currentTo}
              min={currentFrom || undefined}
              onChange={(e) => navigate({ to: e.target.value })}
              className={controlClass}
            />
          </label>
        </div>

        <div className="mt-3 flex flex-wrap items-center gap-2">
          <input
            type="search"
            placeholder="Search name, email, company, or message…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={`${controlClass} min-w-[16rem] flex-1`}
          />
          <button
            type="submit"
            className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Search
          </button>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                router.push("/");
              }}
              className="rounded-md px-3 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-gray-900"
            >
              Clear filters
            </button>
          )}
        </div>
      </form>

      <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
        <p>
          {inquiries.length === 1
            ? "1 inquiry"
            : `${inquiries.length} inquiries`}
          {hasActiveFilters ? " match the current filters" : ""}
        </p>
        {currentQuery && (
          <p className="text-xs">
            Matches for{" "}
            <span className="rounded-sm bg-amber-200 px-1 font-medium text-gray-800">
              {currentQuery}
            </span>{" "}
            are highlighted
          </p>
        )}
      </div>

      {inquiries.length === 0 ? (
        <p className="rounded-lg border border-dashed border-gray-200 bg-white py-12 text-center text-sm text-gray-400">
          {hasActiveFilters
            ? "No inquiries match these filters."
            : "No inquiries found."}
        </p>
      ) : (
        <>
          <div className="space-y-2 md:hidden">
            {inquiries.map((row) => (
              <InquiryCard
                key={row.id}
                row={row}
                query={currentQuery}
                expanded={expandedId === row.id}
                onToggle={() => toggleExpanded(row.id)}
              />
            ))}
          </div>

          <div className="hidden overflow-x-auto rounded-lg border border-gray-200 bg-white md:block">
            <table className="min-w-full text-sm">
              <thead className="border-b border-gray-200 bg-gray-50 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                <tr>
                  <th className="w-10 px-3 py-3">
                    <span className="sr-only">Expand</span>
                  </th>
                  <th className="px-3 py-3">Date</th>
                  <th className="px-3 py-3">Name</th>
                  <th className="px-3 py-3">Email</th>
                  <th className="px-3 py-3">Company</th>
                  <th className="px-3 py-3">Type</th>
                  <th className="px-3 py-3">Status</th>
                  <th className="px-3 py-3">Message</th>
                  <th className="px-3 py-3">
                    <span className="sr-only">Open</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {inquiries.map((row, index) => {
                  const open = expandedId === row.id;
                  return (
                    <InquiryTableRows
                      key={row.id}
                      row={row}
                      query={currentQuery}
                      expanded={open}
                      striped={index % 2 === 1}
                      onToggle={() => toggleExpanded(row.id)}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function InquiryTableRows({
  row,
  query,
  expanded,
  striped,
  onToggle,
}: {
  row: InquiryRow;
  query: string;
  expanded: boolean;
  striped: boolean;
  onToggle: () => void;
}) {
  const snippet = messageSnippet(row.message, query);

  return (
    <>
      <tr
        className={`cursor-pointer border-b border-gray-100 transition-colors ${
          expanded
            ? "bg-blue-50/70"
            : striped
              ? "bg-gray-50/70 hover:bg-blue-50/50"
              : "bg-white hover:bg-blue-50/50"
        }`}
        onClick={onToggle}
      >
        <td className="px-3 py-3">
          <button
            type="button"
            aria-expanded={expanded}
            aria-label={
              expanded
                ? `Collapse details for ${row.name}`
                : `Expand details for ${row.name}`
            }
            onClick={(e) => {
              e.stopPropagation();
              onToggle();
            }}
            className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-white hover:text-gray-700"
          >
            <ChevronIcon open={expanded} />
          </button>
        </td>
        <td className="whitespace-nowrap px-3 py-3 text-gray-500">
          {new Date(row.created_at).toLocaleDateString()}
        </td>
        <td className="px-3 py-3 font-medium text-gray-900">
          <HighlightText text={row.name} query={query} />
        </td>
        <td className="px-3 py-3 text-gray-500">
          <HighlightText text={row.email} query={query} />
        </td>
        <td className="px-3 py-3 text-gray-500">
          {row.company ? (
            <HighlightText text={row.company} query={query} />
          ) : (
            "—"
          )}
        </td>
        <td className="px-3 py-3 text-gray-500">
          {row.project_type ? (
            <HighlightText text={row.project_type} query={query} />
          ) : (
            "—"
          )}
        </td>
        <td className="px-3 py-3">
          <StatusBadge status={row.status} />
        </td>
        <td className="max-w-[220px] px-3 py-3 text-gray-400">
          <span className="block truncate">
            <HighlightText text={snippet} query={query} />
          </span>
        </td>
        <td className="px-3 py-3">
          <Link
            href={`/inquiries/${row.id}`}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-gray-500 hover:text-gray-900"
          >
            View
            <ArrowIcon />
          </Link>
        </td>
      </tr>
      {expanded && (
        <tr className="border-b border-gray-200 bg-blue-50/40">
          <td colSpan={9} className="px-4 py-4">
            <ExpandedDetails row={row} query={query} />
          </td>
        </tr>
      )}
    </>
  );
}

function InquiryCard({
  row,
  query,
  expanded,
  onToggle,
}: {
  row: InquiryRow;
  query: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  const snippet = messageSnippet(row.message, query);

  return (
    <article className="rounded-lg border border-gray-200 bg-white">
      <button
        type="button"
        aria-expanded={expanded}
        onClick={onToggle}
        className="flex w-full items-start gap-3 p-4 text-left"
      >
        <span className="mt-0.5 text-gray-400">
          <ChevronIcon open={expanded} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-start justify-between gap-3">
            <span className="font-medium text-gray-900">
              <HighlightText text={row.name} query={query} />
            </span>
            <StatusBadge status={row.status} />
          </span>
          <span className="mt-1 block text-xs text-gray-500">
            {new Date(row.created_at).toLocaleDateString()}
            {row.project_type ? ` · ${row.project_type}` : ""}
          </span>
          <span className="mt-2 block truncate text-sm text-gray-400">
            <HighlightText text={snippet} query={query} />
          </span>
          <span className="mt-2 text-xs font-medium text-gray-500">
            {expanded ? "Hide preview" : "Show details"}
          </span>
        </span>
      </button>
      {expanded && (
        <div className="border-t border-gray-100 px-4 py-4">
          <ExpandedDetails row={row} query={query} />
        </div>
      )}
    </article>
  );
}

function ExpandedDetails({
  row,
  query,
}: {
  row: InquiryRow;
  query: string;
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
          Full message
        </p>
        <Link
          href={`/inquiries/${row.id}`}
          className="inline-flex items-center gap-1 rounded-md bg-gray-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-gray-800"
        >
          Open details
          <ArrowIcon />
        </Link>
      </div>
      <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-700">
        <HighlightText text={row.message} query={query} />
      </p>
      <dl className="grid gap-2 text-xs text-gray-500 sm:grid-cols-2">
        <div>
          <dt className="font-medium text-gray-400">Email</dt>
          <dd>
            <HighlightText text={row.email} query={query} />
          </dd>
        </div>
        <div>
          <dt className="font-medium text-gray-400">Company</dt>
          <dd>
            {row.company ? (
              <HighlightText text={row.company} query={query} />
            ) : (
              "—"
            )}
          </dd>
        </div>
      </dl>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[status] ?? "bg-gray-100 text-gray-600"}`}
    >
      {status.replace("_", " ")}
    </span>
  );
}

function HighlightText({ text, query }: { text: string; query: string }) {
  const q = query.trim();
  if (!q || !text) return <>{text}</>;

  const escaped = q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const parts = text.split(new RegExp(`(${escaped})`, "gi"));
  const needle = q.toLowerCase();

  return (
    <>
      {parts.map((part, index) =>
        part.toLowerCase() === needle ? (
          <mark
            key={`${part}-${index}`}
            className="rounded-sm bg-amber-200 px-0.5 text-inherit"
          >
            {part}
          </mark>
        ) : (
          <span key={`${part}-${index}`}>{part}</span>
        )
      )}
    </>
  );
}

function messageSnippet(message: string, query: string, max = 72) {
  const q = query.trim();
  if (!q) {
    return message.length > max ? `${message.slice(0, max)}…` : message;
  }

  const idx = message.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) {
    return message.length > max ? `${message.slice(0, max)}…` : message;
  }

  const start = Math.max(0, idx - 18);
  const end = Math.min(message.length, idx + q.length + 36);
  const prefix = start > 0 ? "…" : "";
  const suffix = end < message.length ? "…" : "";
  return `${prefix}${message.slice(start, end)}${suffix}`;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`h-4 w-4 shrink-0 transition-transform duration-150 ${open ? "rotate-90" : ""}`}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-3.5 w-3.5"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M3 10a.75.75 0 01.75-.75h10.19L10.22 5.53a.75.75 0 111.06-1.06l5.5 5.5a.75.75 0 010 1.06l-5.5 5.5a.75.75 0 11-1.06-1.06l3.72-3.72H3.75A.75.75 0 013 10z"
        clipRule="evenodd"
      />
    </svg>
  );
}
