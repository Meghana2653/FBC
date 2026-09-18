import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: { default: "FBC IT | Build. Brand. Become.", template: "%s | FBC IT" },
  description: "Technology, branding and digital growth solutions for businesses ready to build, brand and become.",
  metadataBase: new URL("https://foundersbc.in"),
  openGraph: { title: "FBC IT | Build. Brand. Become.", description: "A single partner for technology, digital presence and growth execution.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Navbar /><main>{children}</main><Footer /><WhatsAppButton /></body></html>;
}
