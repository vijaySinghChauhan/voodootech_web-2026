import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Boxes,
  CloudCog,
  Code2,
  Database,
  Headphones,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Wifi,
  X,
} from "lucide-react";
import { useState } from "react";
import voodootechLogo from "@/assets/voodootech-logo.png";
import smartHomeHero from "@/assets/smart-home-hero.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "VoodooTech Systems | Software, Cloud & Smart Automation" },
      { name: "description", content: "VoodooTech Systems builds mobile apps, web platforms, cloud infrastructure, ERP, e-commerce and smart-home automation solutions." },
      { property: "og:title", content: "VoodooTech Systems | Technology for a Better Tomorrow" },
      { property: "og:description", content: "End-to-end software, cloud and IoT solutions from New Delhi." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  { icon: Smartphone, title: "Mobile App Development", text: "High-quality Android, iOS, React Native and Flutter experiences." },
  { icon: Code2, title: "Web Application Development", text: "Fast, scalable business platforms built with modern web technologies." },
  { icon: CloudCog, title: "Cloud & DevOps", text: "Reliable AWS and Azure infrastructure, CI/CD and container workflows." },
  { icon: Boxes, title: "ERP & Business Solutions", text: "Connected payroll, inventory and CRM systems shaped around your work." },
  { icon: ShoppingCart, title: "E-commerce Solutions", text: "Conversion-focused web and mobile stores with secure payments." },
  { icon: Wifi, title: "IoT & Smart Home", text: "Smart lighting, security, sensors and automation from one connected system." },
  { icon: Database, title: "Database Solutions", text: "Dependable MongoDB, MySQL, PostgreSQL and Firebase architecture." },
  { icon: Headphones, title: "Maintenance & Support", text: "Proactive monitoring, updates and responsive technical support." },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="VoodooTech home">
            <img src={voodootechLogo} alt="VoodooTech" className="size-12 rounded-lg object-contain" width="48" height="48" />
            <div className="leading-none">
              <span className="block bg-logo-gradient bg-clip-text font-heading text-lg font-bold text-transparent">VoodooTech</span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Systems LLP</span>
            </div>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
            <a href="#services" className="transition-colors hover:text-blue">Services</a>
            <a href="#smart" className="transition-colors hover:text-blue">Smart solutions</a>
            <a href="#about" className="transition-colors hover:text-blue">About</a>
            <a href="#contact" className="group inline-flex h-11 items-center gap-2 rounded-md bg-brand-gradient px-5 text-primary-foreground shadow-md shadow-cyan/30 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan/40">Start a project <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></a>
          </nav>
          <button type="button" className="grid size-11 place-items-center rounded-md border border-border md:hidden" onClick={() => setMenuOpen((value) => !value)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 font-medium">
              <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
              <a href="#smart" onClick={() => setMenuOpen(false)}>Smart solutions</a>
              <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-brand-gradient rounded-md px-4 py-2 text-center text-primary-foreground">Start a project</a>
            </div>
          </nav>
        )}
      </header>

      <section id="top" className="relative flex min-h-[92vh] items-end overflow-hidden pt-20">
        <img src={smartHomeHero} alt="Modern connected smart home" className="absolute inset-0 size-full object-cover object-center" width={1600} height={1200} />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 pt-32 lg:px-8 lg:pb-24">
          <div className="max-w-3xl">
            <p className="mb-5 font-heading text-xs font-semibold uppercase tracking-[0.24em] text-teal-light">Ideas <span className="mx-2 text-cyan">∞</span> Technology <span className="mx-2 text-blue">∞</span> Impact</p>
            <h1 className="bg-logo-gradient bg-clip-text font-heading text-5xl font-bold leading-[1.03] text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] sm:text-6xl lg:text-7xl">Technology for a better tomorrow.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-hero-muted sm:text-xl">We design dependable software, cloud infrastructure and intelligent automation that move businesses and homes forward.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="group inline-flex h-12 items-center gap-2 rounded-md bg-brand-gradient px-6 font-semibold text-brand-foreground shadow-lg shadow-cyan/30 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue/40">Discuss your project <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" /></a>
              <a href="#services" className="inline-flex h-12 items-center rounded-md border border-hero-foreground/30 bg-hero-foreground/5 px-6 font-semibold text-hero-foreground backdrop-blur-sm transition-colors hover:bg-hero-foreground/15">Explore services</a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 border-t border-hero-foreground/15 bg-logo-gradient/85 backdrop-blur-md">
          <div className="mx-auto grid max-w-7xl grid-cols-3 divide-x divide-hero-foreground/15 px-5 lg:px-8">
            {[['8','Core services'],['2','Support lines'],['1','Connected partner']].map(([value,label]) => <div key={label} className="py-4 text-center"><strong className="font-heading text-xl text-hero-foreground">{value}</strong><span className="ml-2 hidden text-sm text-hero-muted sm:inline">{label}</span></div>)}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 border-b border-border pb-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div><p className="section-label">What we build</p><h2 className="section-title">One team. Every digital layer.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground lg:justify-self-end">From the first interface to the infrastructure behind it, we connect strategy, engineering and ongoing support into one practical delivery team.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="group relative border-b border-border px-1 py-9 md:px-7 lg:min-h-64 lg:border-r first:md:pl-0 lg:[&:nth-child(4n)]:border-r-0 transition-transform hover:-translate-y-1">
                <div className="mb-8 flex items-center justify-between"><Icon className="size-7 text-brand" strokeWidth={1.7} /><span className="font-heading text-xs font-semibold text-muted-foreground">0{index + 1}</span></div>
                <h3 className="font-heading text-xl font-semibold bg-logo-gradient bg-clip-text text-transparent">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{text}</p>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[3px] origin-left scale-x-0 bg-logo-gradient transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="smart" className="bg-logo-gradient py-24 text-primary-foreground lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <div>
            <p className="section-label text-teal-light">Connected environments</p>
            <h2 className="font-heading text-4xl font-bold leading-tight sm:text-5xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]">A smarter home starts with one connected system.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-muted">Monitor, secure and control your space with technology that works quietly in the background and clearly in your hands.</p>
            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-7">
              {['Smart lighting','Water monitoring','CCTV integration','Access control'].map((item) => <div key={item} className="flex items-center gap-3 border-t border-primary-foreground/15 pt-4 text-sm font-medium"><span className="size-2 bg-teal-light shadow-[0_0_8px] shadow-cyan/60" />{item}</div>)}
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-md ring-1 ring-white/20 shadow-2xl shadow-black/30">
            <img src={smartHomeHero} alt="Smart-home automation and security" className="size-full object-cover" loading="lazy" width={1600} height={1200} />
            <div className="absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-md bg-background/90 p-4 text-foreground backdrop-blur"><ShieldCheck className="size-6 bg-logo-gradient bg-clip-text text-transparent" /><div><strong className="block font-heading text-sm bg-logo-gradient bg-clip-text text-transparent">Integrated by design</strong><span className="text-xs text-muted-foreground">Sensors, controls and monitoring in one ecosystem</span></div></div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div><p className="section-label">Why VoodooTech</p><h2 className="section-title">Built for real work. Supported for the long run.</h2></div>
          <div className="space-y-8 text-lg leading-8 text-muted-foreground">
            <p>We bring application development, infrastructure, data and connected devices together—so you spend less time coordinating vendors and more time moving your business forward.</p>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="border-l-2 border-teal pl-5 bg-gradient-to-r from-teal-light/5 to-transparent py-1"><strong className="block font-heading text-base bg-logo-gradient bg-clip-text text-transparent">Practical engineering</strong><span className="mt-1 block text-sm leading-6">Technology chosen for reliability, performance and fit.</span></div>
              <div className="border-l-2 border-blue pl-5 bg-gradient-to-r from-blue/5 to-transparent py-1"><strong className="block font-heading text-base bg-logo-gradient bg-clip-text text-transparent">Responsive support</strong><span className="mt-1 block text-sm leading-6">Clear communication before, during and after delivery.</span></div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="relative overflow-hidden bg-footer py-20 text-footer-foreground">
        <div className="pointer-events-none absolute inset-0 bg-logo-gradient opacity-10" />
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-cyan/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 border-b border-footer-foreground/15 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div><p className="section-label text-teal-light">Start a conversation</p><h2 className="max-w-2xl bg-logo-gradient bg-clip-text font-heading text-4xl font-bold text-transparent sm:text-5xl">Have an idea worth building?</h2><a href="mailto:voodootechsystems@gmail.com" className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-teal-light transition-colors hover:text-footer-foreground hover:text-cyan"><Mail className="size-5" />voodootechsystems@gmail.com</a></div>
            <div className="space-y-5 lg:pt-10">
              <a href="tel:+919870444150" className="flex items-center gap-4 border-b border-footer-foreground/15 pb-5 transition-colors hover:text-cyan"><Phone className="size-5" /><span>+91 98704 44150</span></a>
              <a href="tel:+919891234473" className="flex items-center gap-4 border-b border-footer-foreground/15 pb-5 transition-colors hover:text-cyan"><Phone className="size-5" /><span>+91 98912 34473</span></a>
              <div className="flex items-start gap-4"><MapPin className="mt-1 size-5 shrink-0 text-teal-light" /><span>Dwarka - 8, New Delhi 110077</span></div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-8 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between"><span>© 2026 VoodooTech Systems LLP. All rights reserved.</span><span>Ideas <span className="text-teal-light">∞</span> Technology <span className="text-cyan">∞</span> Impact</span></div>
        </div>
      </footer>
    </main>
  );
}
