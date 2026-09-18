import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return <footer className="site-footer"><div className="container footer-grid"><div><Logo /><p className="footer-note">Technology, branding and digital growth for businesses ready to build what is next.</p></div><div><span className="footer-label">Explore</span><div className="footer-links"><Link href="/services">Services</Link><Link href="/industries">Industries</Link><Link href="/about">About</Link><Link href="/how-we-work">How we work</Link></div></div><div><span className="footer-label">Start a conversation</span><div className="footer-links"><a href="mailto:foundersbc@gmail.com">foundersbc@gmail.com</a><a href="https://foundersbc.in" target="_blank">foundersbc.in ↗</a><span>Hyderabad, Telangana 500084</span></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Founders Branding Club LLP.</span><span>Build <i>•</i> Brand <i>•</i> Become</span></div></footer>;
}
