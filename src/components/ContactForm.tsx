"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "general",
    message: "",
  });

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
    setForm({
      name: "",
      email: "",
      phone: "",
      topic: "general",
      message: "",
    });
  }

  if (sent) {
    return (
      <div className="rounded-[28px] border border-espresso/10 bg-white p-10 text-center shadow-[0_24px_50px_-30px_rgba(59,42,32,0.25)]">
        <p className="font-[family-name:var(--font-anton)] text-2xl tracking-wide uppercase">
          Message sent
        </p>
        <p className="mt-3 text-sm text-mocha">
          Thanks for reaching out — we&apos;ll get back to you within one business
          day.
        </p>
        <button
          type="button"
          className="mt-6 cursor-pointer rounded-full bg-caramel px-6 py-3 text-sm font-medium text-ink"
          onClick={() => setSent(false)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[28px] border border-espresso/10 bg-white p-[clamp(24px,4vw,40px)] shadow-[0_24px_50px_-30px_rgba(59,42,32,0.25)]"
    >
      <div className="grid gap-5 min-[641px]:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-espresso">Name</span>
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-2xl border border-espresso/12 bg-cream/40 px-4 py-3 text-espresso outline-none focus:border-caramel/50 focus:ring-2 focus:ring-caramel/15"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-espresso">Email</span>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-2xl border border-espresso/12 bg-cream/40 px-4 py-3 text-espresso outline-none focus:border-caramel/50 focus:ring-2 focus:ring-caramel/15"
            placeholder="you@email.com"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-espresso">Phone</span>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-2xl border border-espresso/12 bg-cream/40 px-4 py-3 text-espresso outline-none focus:border-caramel/50 focus:ring-2 focus:ring-caramel/15"
            placeholder="Optional"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-2 block font-medium text-espresso">Topic</span>
          <select
            value={form.topic}
            onChange={(e) => setForm({ ...form, topic: e.target.value })}
            className="w-full rounded-2xl border border-espresso/12 bg-cream/40 px-4 py-3 text-espresso outline-none focus:border-caramel/50 focus:ring-2 focus:ring-caramel/15"
          >
            <option value="general">General enquiry</option>
            <option value="reservation">Table reservation</option>
            <option value="catering">Catering &amp; events</option>
            <option value="feedback">Feedback</option>
          </select>
        </label>
      </div>
      <label className="mt-5 block text-sm">
        <span className="mb-2 block font-medium text-espresso">Message</span>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full resize-y rounded-2xl border border-espresso/12 bg-cream/40 px-4 py-3 text-espresso outline-none focus:border-caramel/50 focus:ring-2 focus:ring-caramel/15"
          placeholder="How can we help?"
        />
      </label>
      <button
        type="submit"
        className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-full bg-espresso px-8 py-3.5 text-sm font-medium text-cream transition-transform hover:-translate-y-0.5"
      >
        Send message
        <span aria-hidden>→</span>
      </button>
    </form>
  );
}
