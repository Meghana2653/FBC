import Link from "next/link";

export function Logo() {
  return <Link href="/" className="logo" aria-label="FBC IT home"><img className="logo-image" src="/fbc-logo.jpeg" alt="Founder's Branding Club" /><span className="logo-copy"><strong>FBC IT</strong><small>BUILD <i>•</i> BRAND <i>•</i> BECOME</small></span></Link>;
}
