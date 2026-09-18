import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base = "https://foundersbc.in"; return ["", "/services", "/industries", "/about", "/how-we-work", "/contact"].map((path) => ({ url: `${base}${path}`, lastModified: new Date() })); }
