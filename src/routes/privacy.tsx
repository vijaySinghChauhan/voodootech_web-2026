import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Cpu,
  Eye,
  FileText,
  Globe,
  Lock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Server,
  ShieldCheck,
  UserCheck,
  X,
} from "lucide-react";
import { useState } from "react";
import voodootechLogo from "@/assets/voodootech-logo.png";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPolicy,
  head: () => ({
    meta: [
      { title: "Privacy Policy | VoodooTech Systems LLP" },
      {
        name: "description",
        content:
          "Privacy Policy for VoodooTech Systems LLP. Learn how we collect, protect, and handle your data across our software development, cloud infrastructure, and smart home automation services.",
      },
      { property: "og:title", content: "Privacy Policy | VoodooTech Systems LLP" },
      {
        property: "og:description",
        content:
          "Transparency and privacy guidelines for VoodooTech Systems software, cloud, and IoT solutions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
});

function PrivacyPolicy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const lastUpdated = "February 24, 2026";

  const sections = [
    { id: "introduction", title: "1. Introduction & Overview" },
    { id: "information-collected", title: "2. Information We Collect" },
    { id: "use-of-information", title: "3. How We Use Information" },
    { id: "smart-automation-privacy", title: "4. IoT & Smart Automation Data" },
    { id: "data-sharing", title: "5. Data Sharing & Third Parties" },
    { id: "data-security", title: "6. Security & Data Retention" },
    { id: "your-rights", title: "7. Your Rights & Choices" },
    { id: "cookies", title: "8. Cookies & Digital Tracking" },
    { id: "policy-updates", title: "9. Policy Updates" },
    { id: "contact-us", title: "10. Contact Information" },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link to="/" className="flex items-center gap-3" aria-label="VoodooTech home">
            <img
              src={voodootechLogo}
              alt="VoodooTech"
              className="size-12 rounded-lg object-contain"
              width="48"
              height="48"
            />
            <div className="leading-none">
              <span className="block bg-logo-gradient bg-clip-text font-heading text-lg font-bold text-transparent">
                VoodooTech
              </span>
              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Systems LLP
              </span>
            </div>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
            <Link to="/" className="transition-colors hover:text-blue">
              Home
            </Link>
            <a href="/#services" className="transition-colors hover:text-blue">
              Services
            </a>
            <a href="/#smart" className="transition-colors hover:text-blue">
              Smart solutions
            </a>
            <a href="/#about" className="transition-colors hover:text-blue">
              About
            </a>
            <a
              href="/#contact"
              className="group inline-flex h-11 items-center gap-2 rounded-md bg-brand-gradient px-5 text-primary-foreground shadow-md shadow-cyan/30 transition-transform hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan/40"
            >
              Contact Us{" "}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </nav>
          <button
            type="button"
            className="grid size-11 place-items-center rounded-md border border-border md:hidden"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-border bg-background px-5 py-5 md:hidden" aria-label="Mobile navigation">
            <div className="mx-auto flex max-w-7xl flex-col gap-4 font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
              <a href="/#services" onClick={() => setMenuOpen(false)}>
                Services
              </a>
              <a href="/#smart" onClick={() => setMenuOpen(false)}>
                Smart solutions
              </a>
              <a href="/#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a
                href="/#contact"
                onClick={() => setMenuOpen(false)}
                className="bg-brand-gradient rounded-md px-4 py-2 text-center text-primary-foreground"
              >
                Contact Us
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-logo-gradient pb-16 pt-32 text-primary-foreground lg:pb-20 lg:pt-40">
        <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-cyan/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Link
            to="/"
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold text-teal-light backdrop-blur transition-colors hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="size-3.5" /> Back to Home
          </Link>
          <div className="max-w-3xl">
            <p className="mb-3 font-heading text-xs font-semibold uppercase tracking-[0.24em] text-teal-light">
              Trust & Transparency
            </p>
            <h1 className="font-heading text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)]">
              Privacy Policy
            </h1>
            <p className="mt-4 text-base leading-7 text-primary-muted sm:text-lg">
              At VoodooTech Systems LLP, we value your trust and are committed to safeguarding your personal data, project assets, and smart automation environments.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-teal-light">
              <span className="flex items-center gap-1.5 rounded-md border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5">
                <ShieldCheck className="size-4" /> GDPR & Digital Personal Data Protection Ready
              </span>
              <span className="rounded-md border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1.5">
                Effective Date: {lastUpdated}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
            {/* Table of Contents Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 rounded-lg border border-border bg-card p-5 shadow-xs">
                <h3 className="mb-4 font-heading text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  On this page
                </h3>
                <nav className="flex flex-col space-y-2 text-sm font-medium">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="text-muted-foreground transition-colors hover:text-brand"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Document Body */}
            <article className="space-y-14 text-muted-foreground leading-7">
              {/* 1. Introduction & Overview */}
              <section id="introduction" className="scroll-mt-28">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-teal-light/20 text-brand">
                    <ShieldCheck className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    1. Introduction & Overview
                  </h2>
                </div>
                <p>
                  VoodooTech Systems LLP ("VoodooTech", "we", "our", or "us") operates the website, mobile applications, cloud solutions, e-commerce systems, ERP applications, and IoT/smart automation integrations.
                </p>
                <p className="mt-3">
                  This Privacy Policy outlines how we collect, process, store, and protect information when you interact with our website, engage our engineering and cloud services, or utilize our smart automation systems. By accessing our services or interacting with our platforms, you consent to the data practices described in this document.
                </p>
              </section>

              {/* 2. Information We Collect */}
              <section id="information-collected" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-cyan/20 text-brand">
                    <Eye className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    2. Information We Collect
                  </h2>
                </div>
                <p>
                  We collect information to deliver performant software services, optimize cloud infrastructure, and configure smart home/office devices effectively.
                </p>

                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  <div className="rounded-lg border border-border bg-card p-5">
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      A. Direct Personal Information
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
                        <span>Name, email address, phone number, and mailing address provided during inquiries or onboarding.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
                        <span>Billing details, GST numbers, and payment transaction metadata for service engagements.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-brand shrink-0" />
                        <span>Communication logs and support ticket messages.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="rounded-lg border border-border bg-card p-5">
                    <h3 className="font-heading text-base font-semibold text-foreground">
                      B. Technical & System Data
                    </h3>
                    <ul className="mt-3 space-y-2 text-sm">
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-teal shrink-0" />
                        <span>IP addresses, browser type, operating system, device models, and access timestamps.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-teal shrink-0" />
                        <span>API access logs, diagnostic reports, and performance metrics for custom app deployments.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1.5 size-1.5 rounded-full bg-teal shrink-0" />
                        <span>Server performance metrics and infrastructure status telemetry.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 3. How We Use Information */}
              <section id="use-of-information" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-blue/20 text-brand">
                    <Server className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    3. How We Use Information
                  </h2>
                </div>
                <p>
                  Information gathered is strictly utilized to provide, maintain, and elevate our technical solutions. Primary purposes include:
                </p>
                <ul className="mt-4 space-y-3 font-normal text-sm">
                  <li className="flex items-start gap-3 rounded-md bg-secondary/50 p-3">
                    <UserCheck className="mt-0.5 size-5 text-brand shrink-0" />
                    <span>
                      <strong className="text-foreground">Service Delivery & Engineering:</strong> Developing, testing, and deploying custom mobile/web applications, cloud architecture, and ERP systems tailored to client specifications.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 rounded-md bg-secondary/50 p-3">
                    <Cpu className="mt-0.5 size-5 text-brand shrink-0" />
                    <span>
                      <strong className="text-foreground">Smart System Operations:</strong> Enabling remote monitoring, sensor synchronization, access control management, and device automation.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 rounded-md bg-secondary/50 p-3">
                    <Bell className="mt-0.5 size-5 text-brand shrink-0" />
                    <span>
                      <strong className="text-foreground">Client Communication & Support:</strong> Sending project updates, security advisories, billing notices, and technical support responses.
                    </span>
                  </li>
                  <li className="flex items-start gap-3 rounded-md bg-secondary/50 p-3">
                    <Lock className="mt-0.5 size-5 text-brand shrink-0" />
                    <span>
                      <strong className="text-foreground">Security & Fraud Prevention:</strong> Protecting cloud environments and client applications against unauthorized intrusion, DDoS attacks, or malware threats.
                    </span>
                  </li>
                </ul>
              </section>

              {/* 4. IoT & Smart Automation Data */}
              <section id="smart-automation-privacy" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-teal/20 text-brand">
                    <Cpu className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    4. IoT & Smart Automation Data Privacy
                  </h2>
                </div>
                <p>
                  As an end-to-end smart home and building automation provider, VoodooTech Systems LLP applies heightened privacy safeguards for IoT installations:
                </p>
                <div className="mt-4 rounded-lg border border-teal-light/40 bg-gradient-to-r from-teal-light/10 to-transparent p-6">
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    Connected Device Privacy Principles
                  </h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <p>
                      <strong className="text-foreground">• Video Feeds & CCTV:</strong> Live video streams, NVR recordings, and camera telemetry remain stored on local hardware or encrypted client cloud instances. VoodooTech engineers do not access camera feeds without explicit client authorization during maintenance.
                    </p>
                    <p>
                      <strong className="text-foreground">• Sensor & Access Logs:</strong> Door lock logs, lighting state histories, and environmental sensor readings are encrypted and restricted solely to authorized project owners.
                    </p>
                    <p>
                      <strong className="text-foreground">• On-Premise Control First:</strong> Where feasible, smart home controllers operate with localized logic to ensure essential privacy even without external internet connectivity.
                    </p>
                  </div>
                </div>
              </section>

              {/* 5. Data Sharing & Third Parties */}
              <section id="data-sharing" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-cyan/20 text-brand">
                    <Globe className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    5. Data Sharing & Third-Party Disclosure
                  </h2>
                </div>
                <p className="font-medium text-foreground">
                  We do not sell, rent, or trade your personal data or telemetry logs to third parties.
                </p>
                <p className="mt-2">
                  Data may only be shared under the following limited circumstances:
                </p>
                <ul className="mt-3 list-disc pl-6 space-y-2 text-sm">
                  <li>
                    <strong className="text-foreground">Cloud Infrastructure Providers:</strong> AWS, Azure, Google Cloud, or Firebase servers hosting your applications under strict confidentiality terms.
                  </li>
                  <li>
                    <strong className="text-foreground">Payment Processors:</strong> PCI-DSS compliant banking gateways for invoice settlement.
                  </li>
                  <li>
                    <strong className="text-foreground">Legal Obligations:</strong> Compliance with statutory requests, court orders, or law enforcement directives under applicable Indian law (including the Information Technology Act and DPDP Act).
                  </li>
                </ul>
              </section>

              {/* 6. Security & Data Retention */}
              <section id="data-security" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-blue/20 text-brand">
                    <Lock className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    6. Security & Data Retention
                  </h2>
                </div>
                <p>
                  We implement robust technical and organizational security measures to prevent unauthorized access, loss, or alteration of data:
                </p>
                <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm">
                  <div className="rounded-md border border-border p-4 bg-card">
                    <strong className="block font-heading text-foreground mb-1">Encryption</strong>
                    SSL/TLS 1.3 encryption for data in transit and AES-256 for data at rest.
                  </div>
                  <div className="rounded-md border border-border p-4 bg-card">
                    <strong className="block font-heading text-foreground mb-1">Access Control</strong>
                    Role-based access controls (RBAC) and multi-factor authentication (MFA).
                  </div>
                  <div className="rounded-md border border-border p-4 bg-card">
                    <strong className="block font-heading text-foreground mb-1">Retention Period</strong>
                    Data retained only as long as required to fulfill service contracts or legal duties.
                  </div>
                </div>
              </section>

              {/* 7. Your Rights & Choices */}
              <section id="your-rights" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-teal-light/20 text-brand">
                    <FileText className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    7. Your Rights & Choices
                  </h2>
                </div>
                <p>
                  Depending on your jurisdiction and service agreement, you hold the following rights regarding your personal data:
                </p>
                <div className="mt-4 space-y-2 text-sm">
                  <p>
                    <strong className="text-foreground">Right to Access:</strong> Request copies of the personal information we maintain about you.
                  </p>
                  <p>
                    <strong className="text-foreground">Right to Correction:</strong> Ask us to update incomplete or inaccurate details.
                  </p>
                  <p>
                    <strong className="text-foreground">Right to Deletion:</strong> Request erasure of your data when it is no longer required for active contract execution or legal compliance.
                  </p>
                  <p>
                    <strong className="text-foreground">Consent Withdrawal:</strong> Withdraw consent for non-essential communications at any time.
                  </p>
                </div>
              </section>

              {/* 8. Cookies & Digital Tracking */}
              <section id="cookies" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-cyan/20 text-brand">
                    <Globe className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    8. Cookies & Digital Tracking
                  </h2>
                </div>
                <p>
                  Our website uses essential cookies and lightweight privacy-conscious session storage required for page navigation, theme rendering, and security. We do not use intrusive cross-site tracking cookies.
                </p>
              </section>

              {/* 9. Policy Updates */}
              <section id="policy-updates" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-blue/20 text-brand">
                    <Bell className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    9. Policy Updates
                  </h2>
                </div>
                <p>
                  We may periodically update this Privacy Policy to reflect evolving legal standards, technical enhancements, or service changes. Updated versions will be published on this page with an adjusted "Effective Date".
                </p>
              </section>

              {/* 10. Contact Information */}
              <section id="contact-us" className="scroll-mt-28 border-t border-border pt-10">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid size-10 place-items-center rounded-lg bg-teal/20 text-brand">
                    <Mail className="size-5" />
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-foreground sm:text-3xl">
                    10. Contact Information & Data Inquiries
                  </h2>
                </div>
                <p>
                  If you have questions, data correction requests, or privacy concerns regarding this policy, please reach out to our team:
                </p>

                <div className="mt-6 rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    VoodooTech Systems LLP
                  </h3>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <Mail className="size-4 text-brand" />
                      <span>
                        Email:{" "}
                        <a
                          href="mailto:contact@voodootechsystems.in"
                          className="font-semibold text-brand hover:underline"
                        >
                          contact@voodootechsystems.in
                        </a>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="size-4 text-brand" />
                      <span>Phone: +91 98704 44150 / +91 98912 34473</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-0.5 size-4 text-brand shrink-0" />
                      <span>Address: Dwarka - 8, New Delhi 110077, India</span>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative overflow-hidden bg-footer py-20 text-footer-foreground">
        <div className="pointer-events-none absolute inset-0 bg-logo-gradient opacity-10" />
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-cyan/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-12 border-b border-footer-foreground/15 pb-16 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="section-label text-teal-light">Start a conversation</p>
              <h2 className="max-w-2xl bg-logo-gradient bg-clip-text font-heading text-4xl font-bold text-transparent sm:text-5xl">
                Have an idea worth building?
              </h2>
              <a
                href="mailto:contact@voodootechsystems.in"
                className="mt-8 inline-flex items-center gap-3 text-lg font-semibold text-teal-light transition-colors hover:text-footer-foreground hover:text-cyan"
              >
                <Mail className="size-5" />
                contact@voodootechsystems.in
              </a>
            </div>
            <div className="space-y-5 lg:pt-10">
              <a
                href="tel:+919870444150"
                className="flex items-center gap-4 border-b border-footer-foreground/15 pb-5 transition-colors hover:text-cyan"
              >
                <Phone className="size-5" />
                <span>+91 98704 44150</span>
              </a>
              <a
                href="tel:+919891234473"
                className="flex items-center gap-4 border-b border-footer-foreground/15 pb-5 transition-colors hover:text-cyan"
              >
                <Phone className="size-5" />
                <span>+91 98912 34473</span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 size-5 shrink-0 text-teal-light" />
                <span>Dwarka - 8, New Delhi 110077</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-8 text-xs text-footer-muted sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-4">
              <span>© 2026 VoodooTech Systems LLP. All rights reserved.</span>
              <Link to="/privacy" className="text-teal-light hover:underline">
                Privacy Policy
              </Link>
            </div>
            <span>
              Ideas <span className="text-teal-light">∞</span> Technology <span className="text-cyan">∞</span> Impact
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}
