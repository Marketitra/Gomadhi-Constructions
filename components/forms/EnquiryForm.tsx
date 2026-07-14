"use client";

import { useState, type FormEvent } from "react";
import { enquirySchema } from "@/lib/validations";

type Status = "idle" | "submitting" | "success" | "error";

export default function EnquiryForm({
  projectInterest,
}: {
  projectInterest?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name")?.toString() ?? "",
      phone: formData.get("phone")?.toString() ?? "",
      email: formData.get("email")?.toString() ?? "",
      message: formData.get("message")?.toString() ?? "",
      projectInterest,
    };

    const parsed = enquirySchema.safeParse(payload);
    if (!parsed.success) {
      setStatus("error");
      setErrorMessage(
        parsed.error.issues[0]?.message ?? "Check the form and try again",
      );
      return;
    }

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error ?? "Submission failed");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Try again.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded border border-concrete-line bg-concrete-card p-6 text-center">
        <p className="font-display text-lg font-bold text-paper">
          Enquiry received
        </p>
        <p className="mt-2 text-sm text-stone">
          We'll call you back shortly. For anything urgent, use the phone
          numbers above.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="name"
          className="font-mono text-xs tracking-wide text-stone-muted"
        >
          FULL NAME
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Your name"
          className="mt-1 w-full rounded border border-concrete-line bg-concrete px-4 py-2.5 text-paper placeholder:text-stone-muted focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="font-mono text-xs tracking-wide text-stone-muted"
        >
          PHONE NUMBER
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="10-digit mobile number"
          className="mt-1 w-full rounded border border-concrete-line bg-concrete px-4 py-2.5 text-paper placeholder:text-stone-muted focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-mono text-xs tracking-wide text-stone-muted"
        >
          EMAIL (OPTIONAL)
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="name@email.com"
          className="mt-1 w-full rounded border border-concrete-line bg-concrete px-4 py-2.5 text-paper placeholder:text-stone-muted focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="font-mono text-xs tracking-wide text-stone-muted"
        >
          PROJECT DETAILS
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Plot size, location, and what you're looking to build"
          className="mt-1 w-full rounded border border-concrete-line bg-concrete px-4 py-2.5 text-paper placeholder:text-stone-muted focus:border-gold focus:outline-none"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-rust" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-2 rounded bg-gold px-5 py-3 text-sm font-medium text-paper transition-colors hover:bg-gold-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
