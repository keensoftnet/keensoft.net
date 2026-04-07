import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products — Keen Software",
  description:
    "Explore the Keen Software product suite: KeenFlow, KeenSync, KeenAnalytics, and KeenSecure.",
};

const products = [
  {
    name: "KeenFlow",
    tagline: "Workflow Automation",
    badge: "bg-blue-100 text-blue-700",
    accentBorder: "border-blue-500",
    description:
      "KeenFlow lets you design, automate, and monitor complex business processes with a visual drag-and-drop canvas. Connect any app, trigger actions on any event, and eliminate manual work across your organisation.",
    highlights: [
      "500+ pre-built connectors",
      "Visual workflow builder with no-code interface",
      "Conditional logic, loops, and error handling",
      "Real-time execution logs and audit trail",
      "Role-based access control",
    ],
    plans: ["Starter", "Business", "Enterprise"],
    icon: "⚡",
  },
  {
    name: "KeenSync",
    tagline: "Data Synchronisation",
    badge: "bg-violet-100 text-violet-700",
    accentBorder: "border-violet-500",
    description:
      "KeenSync keeps every system in your stack perfectly in sync — in real time and without manual effort. Whether you're bridging CRMs, ERPs, data warehouses, or custom databases, KeenSync handles the complexity so you don't have to.",
    highlights: [
      "Bi-directional real-time sync",
      "Schema mapping and field transformation",
      "Conflict resolution and deduplication",
      "Delta sync for large datasets",
      "99.99% delivery guarantee",
    ],
    plans: ["Business", "Enterprise"],
    icon: "🔗",
  },
  {
    name: "KeenAnalytics",
    tagline: "Business Intelligence",
    badge: "bg-emerald-100 text-emerald-700",
    accentBorder: "border-emerald-500",
    description:
      "KeenAnalytics transforms raw data into beautiful, interactive dashboards and reports your whole team can understand. Go from question to insight in minutes, not weeks.",
    highlights: [
      "Drag-and-drop dashboard builder",
      "50+ chart types and visualisations",
      "Natural-language query interface",
      "Scheduled reports via email or Slack",
      "Row-level security and data governance",
    ],
    plans: ["Starter", "Business", "Enterprise"],
    icon: "📊",
  },
  {
    name: "KeenSecure",
    tagline: "Access & Identity",
    badge: "bg-rose-100 text-rose-700",
    accentBorder: "border-rose-500",
    description:
      "KeenSecure provides enterprise-grade identity and access management across every product in your stack. Zero-trust architecture, SSO, MFA, and detailed audit logs come out of the box.",
    highlights: [
      "Single Sign-On (SAML 2.0 / OIDC)",
      "Adaptive multi-factor authentication",
      "Just-in-time access provisioning",
      "Continuous compliance monitoring",
      "SOC 2 Type II & ISO 27001 certified",
    ],
    plans: ["Enterprise"],
    icon: "🔒",
  },
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    description: "Perfect for small teams getting started with automation.",
    features: ["Up to 5 users", "1,000 workflow runs/month", "KeenFlow & KeenAnalytics", "Email support"],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Business",
    price: "$199",
    period: "/month",
    description: "For growing teams that need more power and integrations.",
    features: [
      "Up to 25 users",
      "Unlimited workflow runs",
      "Full product suite",
      "Priority support",
      "Advanced analytics",
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organisations with complex needs.",
    features: [
      "Unlimited users",
      "SLA guarantees",
      "Dedicated CSM",
      "Custom integrations",
      "On-premise option",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            A product suite for every layer of your business
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-8">
            Four tightly integrated products that cover automation,
            synchronisation, analytics, and security — all built on the same
            reliable platform.
          </p>
        </div>
      </section>

      {/* Product details */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col gap-20">
          {products.map((product, idx) => (
            <div
              key={product.name}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                idx % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${product.badge} mb-4`}
                >
                  {product.tagline}
                </span>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-4">
                  <span className="mr-3">{product.icon}</span>
                  {product.name}
                </h2>
                <p className="text-slate-600 leading-8 mb-6">{product.description}</p>
                <ul className="flex flex-col gap-3 mb-8">
                  {product.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-0.5 text-blue-500 font-bold">✓</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex rounded-full bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                <div
                  className={`rounded-2xl border-2 ${product.accentBorder} bg-slate-50 h-72 flex items-center justify-center`}
                >
                  <span className="text-9xl select-none">{product.icon}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-4 text-slate-600 max-w-xl mx-auto">
              Start free. Scale as you grow. No hidden fees.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 flex flex-col gap-6 ${
                  tier.highlight
                    ? "border-blue-500 bg-blue-600 text-white shadow-xl scale-105"
                    : "border-slate-200 bg-white"
                }`}
              >
                <div>
                  <div
                    className={`text-sm font-semibold uppercase tracking-widest mb-2 ${
                      tier.highlight ? "text-blue-200" : "text-slate-500"
                    }`}
                  >
                    {tier.name}
                  </div>
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-5xl font-extrabold ${
                        tier.highlight ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {tier.price}
                    </span>
                    {tier.period && (
                      <span
                        className={`text-sm mb-1 ${
                          tier.highlight ? "text-blue-200" : "text-slate-500"
                        }`}
                      >
                        {tier.period}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mt-2 text-sm leading-6 ${
                      tier.highlight ? "text-blue-100" : "text-slate-600"
                    }`}
                  >
                    {tier.description}
                  </p>
                </div>
                <ul className="flex flex-col gap-3 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className={tier.highlight ? "text-blue-200" : "text-blue-500"}>✓</span>
                      <span className={tier.highlight ? "text-blue-50" : "text-slate-700"}>
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`rounded-full py-3 text-center text-sm font-semibold transition-colors ${
                    tier.highlight
                      ? "bg-white text-blue-700 hover:bg-blue-50"
                      : "bg-blue-600 text-white hover:bg-blue-500"
                  }`}
                >
                  {tier.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
