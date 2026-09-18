import type { LucideIcon } from "lucide-react";
import { Bot, Boxes, Code2, Megaphone, Palette, Search, Settings, Smartphone } from "lucide-react";

export type Service = { slug: string; number: string; title: string; short: string; detail: string; icon: LucideIcon; capabilities: string[] };

export const services: Service[] = [
  { slug: "web-development", number: "01", title: "Web development", short: "Corporate websites, landing pages, e-commerce, CMS and maintenance.", detail: "Digital foundations that feel credible, load quickly and move customers toward action.", icon: Code2, capabilities: ["Business websites", "Landing pages", "E-commerce", "Booking and enquiry flows", "CMS integration", "Analytics setup", "Performance and responsive design"] },
  { slug: "app-development", number: "02", title: "App development", short: "Android/iOS applications, business apps, customer apps and API integrations.", detail: "Useful mobile experiences for customers, teams and the work that happens behind the scenes.", icon: Smartphone, capabilities: ["Customer apps", "Business utility apps", "Service and booking apps", "API and database integration", "Notifications", "App-store readiness", "Ongoing updates"] },
  { slug: "software-solutions", number: "03", title: "Software solutions", short: "Custom business software, dashboards, portals, workflow systems and integrations.", detail: "Practical software that replaces scattered work with clearer, connected operations.", icon: Boxes, capabilities: ["Admin dashboards", "CRM-style workflows", "Portals", "Automation", "Third-party integrations", "Reports and analytics", "Role-based access"] },
  { slug: "digital-marketing", number: "04", title: "Digital marketing", short: "Social media, paid ads, lead generation, content and campaign management.", detail: "Campaigns designed around the next business outcome, not activity for its own sake.", icon: Megaphone, capabilities: ["Social media strategy", "Paid advertising", "Content and campaign concepts", "Lead generation", "Landing pages", "WhatsApp journeys", "Enquiry optimization"] },
  { slug: "seo-local-growth", number: "05", title: "SEO & local growth", short: "On-page SEO, local visibility, technical SEO and Google Business optimization.", detail: "A stronger search presence for businesses that want to be found by the right people.", icon: Search, capabilities: ["Keyword strategy", "On-page SEO", "Local SEO", "Technical improvements", "Google Business optimization", "Campaign reporting", "Lead-source tracking"] },
  { slug: "branding-design", number: "06", title: "Branding & design", short: "Brand identity, logos, creatives, UI/UX, presentation and marketing assets.", detail: "A consistent visual system that makes good businesses easier to recognize and trust.", icon: Palette, capabilities: ["Brand identity", "Logos", "Campaign creatives", "UI/UX", "Presentation design", "Marketing assets"] },
  { slug: "ai-automation", number: "07", title: "AI & automation", short: "AI-assisted workflows, chatbots, automation concepts and process optimization.", detail: "Thoughtful automation for the repetitive work that slows a growing business down.", icon: Bot, capabilities: ["AI-assisted workflows", "Chatbots", "Automation concepts", "Business process optimization"] },
  { slug: "maintenance-support", number: "08", title: "Maintenance & support", short: "Website updates, security/backup coordination, performance checks and support.", detail: "Steady technical care that keeps digital assets useful after launch day.", icon: Settings, capabilities: ["Website updates", "Security and backup coordination", "Performance checks", "Ongoing technical support"] }
];

export const framework = [
  { label: "Build", title: "Technology foundation", text: "Websites, apps and digital infrastructure that give businesses a strong foundation." },
  { label: "Brand", title: "Market identity", text: "Identity, content and campaigns that make businesses visible and memorable." },
  { label: "Become", title: "Business growth", text: "Ongoing optimization, marketing and technology support that helps clients evolve." }
];

export const whyFbc = [
  ["One partner", "Technology + marketing + branding under one coordinated relationship."],
  ["Business-first", "Solutions start with the client's objective, not a fixed technology stack."],
  ["Scalable", "Begin with a website, campaign or app and add capabilities as the business grows."],
  ["Measurable", "Use analytics, lead tracking and defined deliverables to make progress visible."],
  ["Ongoing support", "Maintenance and optimization keep digital assets useful after launch."],
  ["Accessible", "Packages can be structured for founders and MSMEs with staged budgets."]
];

export const industries = ["Retail & D2C", "Fashion & Lifestyle", "Real Estate", "Education", "Healthcare & Clinics", "Hospitality", "Professional Services", "Food & Restaurants", "Manufacturing", "Construction", "Finance / Advisory", "Local & Emerging Businesses"];
