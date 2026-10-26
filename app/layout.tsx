import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, House, Bookmark, Menu } from 'lucide-react';
import './globals.css';
export const metadata: Metadata = {
  title: {default:'HomeServiceFinder — Find the right help for your home',template:'%s | HomeServiceFinder'},
  description:'Discover home-service professionals by city and specialty. Local development preview.',
  robots:{index:false,follow:false}
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>) {
  return <html lang="en"><body>
    <div className="preview-strip"><span className="status-dot"/> LOCAL PREVIEW <span className="preview-message">Fictional providers. No bookings or messages are sent.</span><Link href="/local-admin">Test console <ArrowUpRight size={12}/></Link></div>
    <header className="site-header"><div className="nav-wrap">
      <Link href="/" className="brand" aria-label="HomeServiceFinder home"><span className="brand-mark"><House size={23} strokeWidth={2.1}/></span><span>home<span className="brand-light">service</span>finder<span className="brand-period">.</span></span></Link>
      <nav aria-label="Main navigation" className="desktop-nav"><Link href="/explore">Find a professional</Link><Link href="/guides">Homeowner guides</Link><Link href="/saved" className="saved-nav"><Bookmark size={15}/> Saved</Link></nav>
      <Link href="/list-your-business" className="button button-small nav-cta">List your business <ArrowUpRight size={15}/></Link>
      <details className="mobile-menu"><summary aria-label="Open navigation"><Menu/></summary><nav><Link href="/explore">Find a professional</Link><Link href="/guides">Guides</Link><Link href="/saved">Saved providers</Link><Link href="/list-your-business">List your business</Link></nav></details>
    </div></header>
    <main>{children}</main>
    <footer className="site-footer"><div className="container footer-grid"><div><Link href="/" className="brand footer-brand"><span className="brand-mark"><House size={22}/></span>homeservicefinder.</Link><p>Good help. Closer to home.</p><p className="small muted">A home-services directory in development.<br/>All example providers are fictional.</p></div><div><h3>Explore</h3><Link href="/explore">Find a professional</Link><Link href="/guides">Homeowner guides</Link><Link href="/saved">Saved providers</Link></div><div><h3>For professionals</h3><Link href="/list-your-business">Create a free listing</Link><Link href="/local-admin">Local test console</Link></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} HomeServiceFinder</span><span>Built around your next home project.</span></div></footer>
  </body></html>;
}
