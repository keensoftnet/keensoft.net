import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Blazing Fast",
    description:
      "Performance-first engineering means our products load instantly and scale effortlessly under any workload.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    description:
      "End-to-end encryption, zero-trust architecture, and SOC 2 Type II compliance keep your data safe.",
  },
  {
    icon: "🔗",
    title: "Deep Integrations",
    description:
      "Connect to hundreds of tools your team already uses with our open API and native integrations.",
  },
  {
    icon: "📊",
    title: "Real-Time Analytics",
    description:
      "Actionable insights and live dashboards help you make data-driven decisions with confidence.",
  },
  {
    icon: "☁️",
    title: "Cloud-Native",
    description:
      "Deployed globally on resilient infrastructure with 99.99% uptime SLA and automatic failover.",
  },
  {
    icon: "🤝",
    title: "World-Class Support",
    description:
      "Dedicated customer success managers and 24/7 technical support ensure you never get stuck.",
  },
];

const products = [
  {
    name: "KeenFlow",
    tagline: "Workflow Automation",
    description:
      "Automate complex business processes with a visual drag-and-drop builder. No code required.",
    color: "bg-blue-50 border-blue-200",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    name: "KeenSync",
    tagline: "Data Synchronisation",
    description:
      "Keep every system in your stack perfectly in sync — in real time, without manual effort.",
    color: "bg-violet-50 border-violet-200",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    name: "KeenAnalytics",
    tagline: "Business Intelligence",
    description:
      "Turn raw data into beautiful reports and live dashboards your whole team can understand.",
    color: "bg-emerald-50 border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700",
  },
];

const testimonials = [
  {
    quote:
      "Switching to KeenFlow cut our onboarding time in half. The automation capabilities are unmatched.",
    author: "Sarah Chen",
    role: "VP of Operations, NovaTech",
  },
  {
    quote:
      "KeenAnalytics gave us visibility we never had before. We made better strategic decisions within the first week.",
    author: "Marcus Williams",
    role: "CEO, Brightpath Financial",
  },
  {
    quote:
      "The support team is incredibly responsive. It feels like they're an extension of our own engineering team.",
    author: "Priya Nair",
    role: "CTO, Luminary Labs",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.18)_0%,_transparent_60%)]"
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 lg:py-44 flex flex-col items-center text-center gap-8">
          <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm text-blue-300">
            Trusted by 2,000+ companies worldwide
          </span>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Software that moves at the{" "}
            <span className="text-blue-400">speed of your ambition</span>
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-8">
            Keen Software builds tools that streamline operations, automate
            repetitive work, and surface the insights your business needs to
            grow — faster than ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/products"
              className="rounded-full bg-blue-600 px-8 py-3.5 text-base font-semibold text-white shadow hover:bg-blue-500 transition-colors"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Everything you need to operate at scale
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Our platform is engineered for reliability, security, and
              developer happiness from day one.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">
                  {f.title}
                </h3>
                <p className="text-slate-600 text-sm leading-7">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our product suite
            </h2>
            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A unified family of products that work beautifully together — or
              independently.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {products.map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl border p-8 ${p.color} flex flex-col gap-4`}
              >
                <span
                  className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold ${p.badge}`}
                >
                  {p.tagline}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">{p.name}</h3>
                <p className="text-slate-600 text-sm leading-7 flex-1">
                  {p.description}
                </p>
                <Link
                  href="/products"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors"
                >
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Loved by teams everywhere
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.author}
                className="rounded-2xl bg-slate-800 p-8 flex flex-col gap-6"
              >
                <blockquote className="text-slate-300 text-sm leading-7 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption>
                  <div className="font-semibold text-white">{t.author}</div>
                  <div className="text-slate-400 text-xs mt-1">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to transform how your team works?
          </h2>
          <p className="text-lg text-blue-100 max-w-xl">
            Join thousands of companies that rely on Keen Software to automate,
            integrate, and scale their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow hover:bg-blue-50 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/about"
              className="rounded-full border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
