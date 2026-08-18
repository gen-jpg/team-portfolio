"use client";

import { FormEvent, useEffect, useState } from "react";
import { ArrowMark } from "@/components/icons";
import { solutions } from "@/lib/content";

type Status = "idle" | "submitting" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!showSuccess) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setShowSuccess(false);
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [showSuccess]);

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
      const response = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(result.error || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("idle");
      setShowSuccess(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again.",
      );
      setStatus("error");
    }
  }

  return (
    <>
      <form
        id="inquiry"
        onSubmit={onSubmit}
        className="card-surface space-y-5 p-6 sm:p-8"
        noValidate
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="font-ui text-[12px] font-medium uppercase tracking-[0.14em] text-ink">
              Name *
            </span>
            <input
              name="name"
              required
              autoComplete="name"
              className="input-field"
            />
          </label>
          <label className="block">
            <span className="font-ui text-[12px] font-medium uppercase tracking-[0.14em] text-ink">
              Email *
            </span>
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              className="input-field"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="block">
            <span className="font-ui text-[12px] font-medium uppercase tracking-[0.14em] text-ink">
              Company
            </span>
            <input
              name="company"
              autoComplete="organization"
              className="input-field"
            />
          </label>
          <label className="block">
            <span className="font-ui text-[12px] font-medium uppercase tracking-[0.14em] text-ink">
              Project type
            </span>
            <select name="project_type" defaultValue="" className="input-field">
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

        <label className="block">
          <span className="font-ui text-[12px] font-medium uppercase tracking-[0.14em] text-ink">
            Project brief *
          </span>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Tell us about the problem, current process, or idea you want to explore."
            className="input-field resize-y"
          />
        </label>

        {error && (
          <p
            className="rounded-2xl border border-cream-muted bg-cream-soft px-4 py-3 font-sans text-sm text-ink"
            role="alert"
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          className="btn-primary w-full sm:w-auto"
          disabled={status === "submitting"}
        >
          <span className="btn-primary-mark">
            <ArrowMark />
          </span>
          <span className="btn-primary-rule" />
          <span>{status === "submitting" ? "Submitting…" : "Discuss Your Project"}</span>
        </button>
      </form>

      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <button
            type="button"
            aria-label="Close"
            className="absolute inset-0 bg-ink/40 backdrop-blur-[2px]"
            onClick={() => setShowSuccess(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="inquiry-success-title"
            className="card-surface relative w-full max-w-md p-7 sm:p-9"
          >
            <p className="eyebrow">Thank you</p>
            <h2
              id="inquiry-success-title"
              className="heading-section mt-3 text-3xl"
            >
              Inquiry received
            </h2>
            <p className="mt-3 font-sans text-base leading-relaxed text-ink-muted">
              Your inquiry has been received by our team. We&apos;ll review your
              brief and get back to you soon.
            </p>
            <button
              type="button"
              className="btn-primary mt-7"
              onClick={() => setShowSuccess(false)}
            >
              <span className="btn-primary-mark">
                <ArrowMark />
              </span>
              <span className="btn-primary-rule" />
              <span>Close</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
