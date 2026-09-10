"use client";

import Link from "next/link";
import { Linkedin, MapPin, Globe, CheckCircle } from "lucide-react";
import { Section } from "@/components/ui";

export function About() {
  return (
    <Section id="about" size="lg" aria-labelledby="about-heading">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="about-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Why Eloka Builds
        </h2>
        <p className="text-lg text-muted-foreground">
          A small, senior-led studio that flipped the agency model: build first, prove it, then ask for payment.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <div className="prose prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed mb-6">
              Most agencies ask you to pay first and hope for the best. We flipped that.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Eloka Builds is built around one idea: <strong>show the work before asking for the money.</strong> Before we ever reach out to a business, we&apos;ve already built them a real, working website — fully designed, fully functional, ready to publish. You&apos;re not buying a promise or a mockup. You&apos;re looking at the finished product.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Behind Eloka Builds is Raphael Ejeogo, a web developer who got tired of watching good local businesses lose customers to outdated, slow websites — and tired of watching agencies charge upfront for work clients hadn&apos;t seen yet. So the model changed: build first, prove it, then get paid.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              No account managers. No lengthy contracts. No surprises. Just a finished site and a straightforward yes or no.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="https://linkedin.com/in/raphaelejeogo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-border bg-card text-sm font-medium text-foreground transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              Connect on LinkedIn
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-accent/10 p-2">
                  <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold">Location</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Lagos, Nigeria
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                Working worldwide
              </p>
            </div>

            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="rounded-lg bg-accent/10 p-2">
                  <Globe className="h-5 w-5 text-accent" aria-hidden="true" />
                </div>
                <h3 className="font-semibold">Availability</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Remote-first
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                US / UK / AU / Africa time zones
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-accent" aria-hidden="true" />
              What You Can Expect
            </h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                Direct communication — you work with me, not a project manager
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                Free audit & demo before any commitment
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                Clean, performant code — no bloated page builders
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                Ongoing support available after launch
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                Transparent pricing, no hidden fees
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}