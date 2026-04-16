"use client";

import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const BOOKING_URL =
  "https://s-iq.co/BookingPortal/dist/?salonid=dbafbaca-eef6-4027-8a63-87a83f5384a0&tab=book";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#why" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="border-b border-border/60 bg-background/90 px-6 py-4 backdrop-blur-md lg:px-12 lg:py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#"
            className="font-serif text-2xl tracking-wide text-foreground lg:text-3xl"
          >
            HairStudio 89
          </a>

          <div className="hidden items-center gap-10 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm uppercase tracking-widest text-foreground/70 transition-colors duration-300 hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="tel:07549365189"
              className="text-foreground/70 transition-colors hover:text-foreground"
              aria-label="Call us"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href="mailto:booking@hairstudio89.co.uk"
              className="text-foreground/70 transition-colors hover:text-foreground"
              aria-label="Email us"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-foreground/30 px-6 py-2.5 text-xs uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Book Now
            </a>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-1 text-foreground lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-b border-border/50 bg-background/95 px-6 pb-8 pt-2 backdrop-blur-md lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm uppercase tracking-widest text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-4 border-t border-border/50 pt-4">
              <a
                href="tel:07549365189"
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:booking@hairstudio89.co.uk"
                className="text-foreground/70 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="inline-block rounded-md border border-foreground/30 px-6 py-3 text-center text-xs uppercase tracking-widest text-foreground transition-all duration-300 hover:bg-foreground hover:text-background"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
