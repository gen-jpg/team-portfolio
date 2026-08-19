"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { STATUSES, type InquiryRow } from "@/lib/types";
import { useState } from "react";

const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  in_progress: "bg-purple-100 text-purple-800",
  closed: "bg-green-100 text-green-800",
  spam: "bg-gray-100 text-gray-500",
};

export function InquiryList({
  inquiries,
  currentStatus,
  currentQuery,
}: {
  inquiries: InquiryRow[];
  currentStatus: string;
  currentQuery: string;
}) {
  const router = useRouter();
  const [query, setQuery] = useState(currentQuery);

  function navigate(status?: string, q?: string) {
    const params = new URLSearchParams();
    const s = status ?? currentStatus;
    const search = q ?? query;
    if (s && s !== "all") params.set("status", s);
    if (search) params.set("q", search);
    router.push(`/?${params.toString()}`);
  }

  return (
    <div className="mt-4 space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={currentStatus}
          onChange={(e) => navigate(e.target.value)}
          className="rounded-md border border-gray-300 px-3 py-1.5 text-sm"
        >
          <option value="all">All statuses</option>
          {STATUSES.map((s) => (
            <option key={s} value={s}>
              {s.replace("_", " ")}
            </option>
          ))}
        </select>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate(undefined, query);
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            placeholder="Search name, email, company…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-56 rounded-md border border-gray-300 px-3 py-1.5 text-sm focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900"
          />
          <button
            type="submit"
            className="rounded-md bg-gray-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-gray-800"
          >
            Search
          </button>
        </form>
      </div>

      {inquiries.length === 0 ? (
        <p className="py-12 text-center text-sm text-gray-400">No inquiries found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full text-sm">
            <thead className="border-b border-gray-200 bg-gray-50 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
              <tr>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Type</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {inquiries.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-4 py-3 text-gray-500">
                    {new Date(row.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 font-medium">
                    <Link
                      href={`/inquiries/${row.id}`}
                      className="hover:underline"
                    >
                      {row.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-gray-500">{row.email}</td>
                  <td className="px-4 py-3 text-gray-500">{row.company ?? "—"}</td>
                  <td className="px-4 py-3 text-gray-500">{row.project_type ?? "—"}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[row.status] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {row.status.replace("_", " ")}
                    </span>
                  </td>
                  <td className="max-w-[200px] truncate px-4 py-3 text-gray-400">
                    {row.message}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
