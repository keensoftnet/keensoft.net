import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us — Keen Software",
  description:
    "Learn about Keen Software's story, mission, values, and the team behind our products.",
};

const values = [
  {
    icon: "🎯",
    title: "Precision",
    description:
      "We obsess over the details. Every pixel, every query, every API response is optimised until it's right.",
  },
  {
    icon: "🚀",
    title: "Velocity",
    description:
      "We ship fast and iterate faster. Good ideas become working software in days, not months.",
  },
  {
    icon: "💡",
    title: "Innovation",
    description:
      "We challenge conventions and adopt emerging technologies thoughtfully to stay ahead of the curve.",
  },
  {
    icon: "🤝",
    title: "Partnership",
    description:
      "Our customers' success is our success. We listen, adapt, and grow alongside the businesses we serve.",
  },
];

const milestones = [
  { year: "2010", event: "Founded in San Francisco by three engineers with a shared vision." },
  { year: "2013", event: "Launched KeenFlow, our flagship workflow automation product." },
  { year: "2016", event: "Series B funding. Expanded to European and APAC markets." },
  { year: "2019", event: "Released KeenSync and KeenAnalytics. Team grew to 150 people." },
  { year: "2022", event: "Surpassed 1,500 enterprise customers across 45 countries." },
  { year: "2024", event: "Launched KeenSecure. Celebrated 2,000+ customers and 300 employees." },
];

const team = [
  {
    name: "Alexandra Park",
    role: "Co-Founder & CEO",
    bio: "15 years in enterprise software. Former engineering lead at Oracle and Salesforce.",
    initials: "AP",
    color: "bg-blue-500",
  },
  {
    name: "Daniel Ortega",
    role: "Co-Founder & CTO",
    bio: "Systems architect with a passion for distributed computing and developer experience.",
    initials: "DO",
    color: "bg-violet-500",
  },
  {
    name: "Mina Johansson",
    role: "Co-Founder & CPO",
    bio: "Product visionary who has shipped beloved B2B products used by millions of people.",
    initials: "MJ",
    color: "bg-emerald-500",
  },
  {
    name: "Raj Patel",
    role: "VP of Engineering",
    bio: "Led platform teams at Stripe and Twilio before joining Keen Software in 2017.",
    initials: "RP",
    color: "bg-orange-500",
  },
  {
    name: "Claire Dubois",
    role: "VP of Sales",
    bio: "Built go-to-market playbooks that scaled two SaaS companies from Series A to IPO.",
    initials: "CD",
    color: "bg-pink-500",
  },
  {
    name: "Tomás Rivera",
    role: "Head of Design",
    bio: "Craft-obsessed designer who believes every interaction should feel effortless.",
    initials: "TR",
    color: "bg-teal-500",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-24 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl">
            Built on passion,<br />driven by purpose
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl leading-8">
            We are a team of engineers, designers, and problem-solvers who
            believe great software can fundamentally change how businesses
            operate.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Our mission
            </h2>
            <p className="text-slate-600 leading-8 mb-6">
              We started Keen Software in 2010 with a single conviction: that
              businesses shouldn&apos;t have to wrangle with brittle, complicated
              software just to get things done. The best tools should feel
              invisible — quietly doing the heavy lifting so your team can
              focus on what matters.
            </p>
            <p className="text-slate-600 leading-8">
              Today that conviction shapes every product we build. From a
              lean workflow automation tool to a full business-intelligence
              platform, everything we make is designed to be powerful yet
              simple, flexible yet opinionated, and always reliable.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { stat: "2,000+", label: "Companies" },
              { stat: "45", label: "Countries" },
              { stat: "300+", label: "Employees" },
              { stat: "99.99%", label: "Uptime SLA" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-slate-50 border border-slate-200 p-8 text-center"
              >
                <div className="text-4xl font-extrabold text-blue-600 mb-1">
                  {s.stat}
                </div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-semibold text-slate-900 text-lg mb-2">{v.title}</h3>
                <p className="text-slate-600 text-sm leading-7">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our journey
            </h2>
          </div>
          <ol className="relative border-l-2 border-slate-200 flex flex-col gap-10">
            {milestones.map((m) => (
              <li key={m.year} className="ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 ring-4 ring-white text-white text-xs font-bold">
                  ✓
                </span>
                <time className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                  {m.year}
                </time>
                <p className="mt-1 text-slate-700 text-sm leading-7">{m.event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet the team
            </h2>
            <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
              A diverse group of builders who wake up every day excited to
              solve hard problems together.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm flex flex-col gap-4">
                <div
                  className={`h-14 w-14 rounded-full ${member.color} flex items-center justify-center text-white font-bold text-lg`}
                >
                  {member.initials}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-lg">{member.name}</div>
                  <div className="text-blue-600 text-sm">{member.role}</div>
                </div>
                <p className="text-slate-600 text-sm leading-7">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Want to join us?
          </h2>
          <p className="text-blue-100 text-lg max-w-xl">
            We are always looking for talented, curious people who want to
            build software that matters.
          </p>
          <Link
            href="/contact"
            className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow hover:bg-blue-50 transition-colors"
          >
            View Open Roles
          </Link>
        </div>
      </section>
    </>
  );
}
