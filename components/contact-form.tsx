"use client";

import { FormEvent, useState } from "react";
import { solutions } from "@/lib/content";
import { buildMailto, saveInquiry } from "@/lib/supabase";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      company: String(data.get("company") || "").trim() || undefined,
      project_type: String(data.get("project_type") || "").trim() || undefined,
      message: String(data.get("message") || "").trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Please fill in name, email, and message.");
      setStatus("error");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setError("Please enter a valid email address.");
      setStatus("error");
      return;
    }

    try {
      const result = await saveInquiry(payload);
      if (!result.ok) {
        // Still continue to mailto — persistence is best-effort
        console.warn("Supabase insert failed:", result.error);
      }

      const mailto = buildMailto(payload);
      window.location.href = mailto;
      setStatus("success");
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <form
      id="inquiry"
      onSubmit={onSubmit}
      className="card-surface space-y-5 p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">Name *</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-1.5 w-full rounded-lg border border-cream-muted bg-cream px-3.5 py-2.5 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Email *</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-1.5 w-full rounded-lg border border-cream-muted bg-cream px-3.5 py-2.5 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="font-medium text-ink">Company</span>
          <input
            name="company"
            autoComplete="organization"
            className="mt-1.5 w-full rounded-lg border border-cream-muted bg-cream px-3.5 py-2.5 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="block text-sm">
          <span className="font-medium text-ink">Project type</span>
          <select
            name="project_type"
            defaultValue=""
            className="mt-1.5 w-full rounded-lg border border-cream-muted bg-cream px-3.5 py-2.5 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
          >
            <option value="">Select an option</option>
            {solutions.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Not sure yet">Not sure yet</option>
          </select>
        </label>
      </div>

      <label className="block text-sm">
        <span className="font-medium text-ink">Project brief *</span>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="Tell us about the problem, current process, or idea you want to explore."
          className="mt-1.5 w-full resize-y rounded-lg border border-cream-muted bg-cream px-3.5 py-2.5 text-ink outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
        />
      </label>

      {error && (
        <p className="text-sm text-red-700" role="alert">
          {error}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-accent" role="status">
          Thanks — your email client should open with a prepared message. If it
          doesn&apos;t, email us directly.
        </p>
      )}

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Preparing…" : "Discuss Your Project"}
      </button>
      <p className="text-xs text-ink-muted">
        Submitting opens a mailto draft and stores the inquiry when Supabase is
        configured.
      </p>
    </form>
  );
}
