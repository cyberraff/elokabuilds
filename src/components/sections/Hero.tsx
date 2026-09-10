"use client";

import Image from "next/image";
import { ArrowRight, MousePointer, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui";

export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 pb-20 px-4 md:px-6 lg:px-8"
      role="banner"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium text-accent tracking-wider uppercase mb-6">
              ELOKA BUILDS
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
              Websites that turn visitors into paying customers
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              We build a finished, ready-to-launch site for your business before you ever pay us a dime. If you like it, you publish it. If you don&apos;t, walk away — no cost, no risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={() => scrollToSection("#contact")}
                className="group w-full sm:w-auto"
              >
                See how it works
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("#work")}
                className="w-full sm:w-auto"
              >
                View recent builds
                <MousePointer className="ml-2 h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <div className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="font-mono text-accent">5+</span>
                <span>Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-accent">50+</span>
                <span>Sites Shipped</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-accent">12</span>
                <span>Countries Served</span>
              </div>
            </div>
          </div>

            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative rounded-3xl border border-border bg-card p-1 shadow-2xl">
                  <div className="rounded-2xl border border-border bg-background overflow-hidden min-h-[320px]">
                    <Image
                      src="/images/og-image.svg"
                      alt="Raphael Ejeogo"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 animate-bounce" aria-hidden="true">
              <button
                onClick={() => scrollToSection("#about")}
                className="rounded-full bg-card border border-border p-3 shadow-lg hover:bg-muted transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label="Scroll to about section"
              >
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}