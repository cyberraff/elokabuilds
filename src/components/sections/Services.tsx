"use client";

import { Zap, Shield, Wrench, Code, ArrowRight } from "lucide-react";
import { Section, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Zap,
    title: "Free Website Audit",
    description:
      "I review your current site's speed, design, mobile experience, and conversion barriers. You get a written report with prioritized fixes — no cost, no obligation.",
    features: ["Core Web Vitals analysis", "Mobile usability review", "Conversion friction audit", "Technical SEO check"],
    cta: "Request Free Audit",
    highlight: true,
  },
  {
    icon: Code,
    title: "Website Rebuild",
    description:
      "Complete rebuild with modern technology (Next.js, Tailwind, TypeScript). Optimized for speed, accessibility, and conversions. Includes CMS setup so you can update content yourself.",
    features: ["Custom design, no templates", "90+ PageSpeed score target", "WCAG AA accessible", "Easy content editing"],
    cta: "Start a Rebuild",
  },
  {
    icon: Shield,
    title: "Ongoing Maintenance",
    description:
      "Monthly retainer for updates, security monitoring, performance checks, and priority support. Your site stays fast, secure, and current without you lifting a finger.",
    features: ["Weekly security updates", "Monthly performance reports", "Content updates included", "Priority response time"],
    cta: "Get Maintenance",
  },
  {
    icon: Wrench,
    title: "Speed Optimization",
    description:
      "Your existing site, but faster. I optimize images, scripts, caching, and server configuration to hit 90+ PageSpeed without redesigning. Ideal if you like your current design.",
    features: ["Image optimization", "Script deferral & minification", "Caching strategy", "Server config tuning"],
    cta: "Optimize My Site",
  },
];

export function Services() {
  return (
    <Section id="services" size="lg" aria-labelledby="services-heading">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="services-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Services
        </h2>
        <p className="text-lg text-muted-foreground">
          Three ways to work together — all starting with a free audit.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Card
            key={service.title}
            className={cn(
              "flex flex-col transition-all duration-300 hover:border-accent/50",
              service.highlight && "ring-2 ring-accent/30"
            )}
          >
            <CardContent className="flex flex-col flex-1 p-6">
              <div className="rounded-lg bg-accent/10 p-3 w-fit mb-4">
                <service.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-6 flex-1 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6 flex-1" role="list">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-0.5">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={cn(
                  "w-full text-left font-medium text-sm transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded px-2 py-1",
                  service.highlight && "text-accent font-semibold"
                )}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                {service.cta}
                <ArrowRight className="inline-block ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground max-w-2xl mx-auto">
          <strong className="text-foreground">Every engagement starts with a free audit.</strong>
          No payment until you've seen a working demo and you're happy to proceed.
        </p>
      </div>
    </Section>
  );
}