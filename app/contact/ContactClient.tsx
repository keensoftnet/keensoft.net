"use client";

import { useState } from "react";

const contactMethods = [
  {
    icon: "✉️",
    label: "Email",
    value: "hello@keensoft.net",
    href: "mailto:hello@keensoft.net",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: "📍",
    label: "Address",
    value: "123 Innovation Drive, San Francisco, CA 94105",
    href: "https://maps.google.com",
  },
];

export default function ContactClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    subject: "General enquiry",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            We&apos;d love to hear from you
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-8">
            Whether you have a question about our products, need a custom
            quote, or just want to say hello — our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact info */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Get in touch</h2>
              <p className="text-slate-600 text-sm leading-7">
                Our team typically responds within one business day. For
                urgent technical support, existing customers can use the
                in-app help centre for faster assistance.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              {contactMethods.map((m) => (
                <a
                  key={m.label}
                  href={m.href}
                  className="flex items-start gap-4 group"
                  target={m.label === "Address" ? "_blank" : undefined}
                  rel={m.label === "Address" ? "noopener noreferrer" : undefined}
                >
                  <span className="text-2xl">{m.icon}</span>
                  <div>
                    <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-0.5">
                      {m.label}
                    </div>
                    <div className="text-slate-700 text-sm group-hover:text-blue-600 transition-colors">
                      {m.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
            <div className="rounded-2xl bg-blue-50 border border-blue-200 p-6">
              <div className="font-semibold text-slate-900 mb-2">Office hours</div>
              <p className="text-slate-600 text-sm leading-6">
                Monday – Friday<br />
                9:00 AM – 6:00 PM PT
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-12 flex flex-col items-center gap-4 text-center h-full justify-center">
                <div className="text-6xl">✅</div>
                <h3 className="text-2xl font-bold text-slate-900">Message sent!</h3>
                <p className="text-slate-600 max-w-sm">
                  Thanks for reaching out. Someone from our team will be in
                  touch with you shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      name: "",
                      email: "",
                      company: "",
                      subject: "General enquiry",
                      message: "",
                    });
                  }}
                  className="mt-4 rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col gap-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">
                      Full name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-sm font-medium text-slate-700">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Acme Corp"
                    className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  >
                    <option>General enquiry</option>
                    <option>Sales &amp; pricing</option>
                    <option>Technical support</option>
                    <option>Partnership</option>
                    <option>Press &amp; media</option>
                    <option>Careers</option>
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help..."
                    className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="self-start rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="flex flex-col divide-y divide-slate-200">
            {[
              {
                q: "Is there a free trial?",
                a: "Yes — every plan starts with a 14-day free trial, no credit card required.",
              },
              {
                q: "Can I change my plan later?",
                a: "Absolutely. You can upgrade, downgrade, or cancel at any time from your account settings.",
              },
              {
                q: "Do you offer on-premise deployments?",
                a: "On-premise is available on our Enterprise plan. Contact our sales team for details.",
              },
              {
                q: "What support options are available?",
                a: "Starter plans include email support. Business and Enterprise plans include priority support with SLA commitments.",
              },
            ].map((item) => (
              <details key={item.q} className="group py-6 cursor-pointer">
                <summary className="flex items-center justify-between text-slate-900 font-medium text-sm list-none">
                  {item.q}
                  <span className="ml-4 text-slate-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-slate-600 text-sm leading-7">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
