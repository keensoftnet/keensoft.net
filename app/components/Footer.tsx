import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2 text-white font-bold text-lg">
              <span className="rounded bg-blue-500 px-2 py-0.5 text-white text-xs font-extrabold uppercase tracking-widest">
                KS
              </span>
              Keen Software
            </Link>
            <p className="text-sm leading-6">
              Crafting elegant, high-performance software solutions since 2010.
            </p>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Company</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Press</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Products</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li><Link href="/products" className="hover:text-white transition-colors">KeenFlow</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">KeenSync</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">KeenAnalytics</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors">KeenSecure</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">Contact</h3>
            <ul className="flex flex-col gap-2 text-sm">
              <li>
                <a href="mailto:hello@keensoft.net" className="hover:text-white transition-colors">
                  hello@keensoft.net
                </a>
              </li>
              <li>
                <a href="tel:+15551234567" className="hover:text-white transition-colors">
                  +1 (555) 123-4567
                </a>
              </li>
              <li className="leading-6">
                123 Innovation Drive<br />San Francisco, CA 94105
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {year} Keen Software, Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
