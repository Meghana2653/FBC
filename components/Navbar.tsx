"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [["Services", "/services"], ["Industries", "/industries"], ["About", "/about"], ["How we work", "/how-we-work"]];
  return <header className="site-header"><div className="container nav-inner"><Logo /><nav className={open ? "nav-links nav-open" : "nav-links"}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}<Link className="nav-cta" href="/contact" onClick={() => setOpen(false)}>Start a project <span>↗</span></Link></nav><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={22} /> : <Menu size={22} />}</button></div></header>;
}
