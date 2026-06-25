"use client";

import { Search, Code2, MousePointer, Rocket, CheckCircle } from "lucide-react";
import { Section, Card, CardContent } from "@/components/ui";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Free Audit",
    description:
      "I review your current site's speed, design, mobile experience, and conversion barriers. You get a written report with prioritized fixes — no cost, no obligation.",
    details: ["Core Web Vitals analysis", "Mobile usability review", "Conversion friction audit", "Technical SEO check"],
  },
  {
    number: "02",
    icon: Code2,
    title: "Demo Build",
    description:
      "I build a working preview of your new site — often before we've even spoken. You can click through it on any device and see exactly what you're getting.",
    details: ["Custom design, no templates", "Real content, not Lorem Ipsum", "Fully responsive", "Optimized for speed"],
  },
  {
    number: "03",
    icon: MousePointer,
    title: "Walkthrough Call",
    description:
      "We hop on a 15-20 minute call. I walk you through the demo, answer questions, and discuss timeline and pricing. No pressure — you decide if it's a fit.",
    details: ["Live demo walkthrough", "Q&A session", "Transparent pricing", "No commitment required"],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch",
    description:
      "Only once you're happy, we go live. I handle DNS, SSL, analytics setup, and search console. You get 30 days of free support after launch.",
    details: ["Zero-downtime deployment", "Analytics & Search Console", "30 days free support", "Easy content editing guide"],
  },
];

export function Process() {
  return (
    <Section id="process" size="lg" aria-labelledby="process-heading">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 id="process-heading" className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          How I Work
        </h2>
        <p className="text-lg text-muted-foreground">
          The Silent Contractor approach: audit first, demo second, pressure never.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <Card
            key={step.number}
            className={cn(
              "relative flex flex-col",
              index < steps.length - 1 && "lg:after:absolute lg:after:top-[36px] lg:after:left-full lg:after:w-full lg:after:h-0.5 lg:after:bg-border lg:after:hidden"
            )}
          >
            <div className="absolute -top-3 left-3 right-3 flex justify-center">
              <div className="rounded-full bg-accent text-background text-sm font-bold w-12 h-12 flex items-center justify-center ring-4 ring-background">
                {step.number}
              </div>
            </div>
            <CardContent className="pt-10 pb-6 px-6 flex flex-col flex-1">
              <div className="rounded-lg bg-accent/10 p-3 w-fit mb-4">
                <step.icon className="h-6 w-6 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
                {step.description}
              </p>
              <ul className="space-y-2" role="list">
                {step.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          This is the exact process referenced in cold outreach — the website
          corroborates what prospects see in Loom videos and emails.
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-accent text-background font-medium transition-colors hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Start with a Free Audit
          <Rocket className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}