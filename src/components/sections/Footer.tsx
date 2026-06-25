import Link from "next/link";
import { Linkedin, Github, Mail, MapPin, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/raphaelejeogo",
    icon: Linkedin,
  },
  {
    name: "GitHub",
    href: "https://github.com/raphaelejeogo",
    icon: Github,
  },
  {
    name: "Email",
    href: "mailto:hello@raphaelejeogo.com",
    icon: Mail,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-muted/30" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="text-xl font-semibold tracking-tight">Raphael Ejeogo</p>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs">
              Web developer helping local businesses convert visitors into customers.
              Fast, accessible websites built with modern technology.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded-md"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">{social.name}</span>
                  <ExternalLink className="h-3 w-3 opacity-50" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h3>
            <address className="mt-4 space-y-3 text-sm not-italic">
              <a
                href="mailto:hello@raphaelejeogo.com"
                className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                hello@raphaelejeogo.com
              </a>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span>Lagos, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span className="h-4 w-4 flex-shrink-0">🌐</span>
                <span>Available worldwide</span>
              </div>
            </address>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Quick Links
            </h3>
            <nav className="mt-4 space-y-2" aria-label="Footer navigation">
              <Link
                href="#about"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                About
              </Link>
              <Link
                href="#services"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="#work"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Work
              </Link>
              <Link
                href="#process"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Process
              </Link>
              <Link
                href="#contact"
                className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Raphael Ejeogo. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js, Tailwind CSS, and deployed on Vercel.
          </p>
        </div>
      </div>
    </footer>
  );
}