"use client";

import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import Logo from "./Logo";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "oklch(14% 0.015 25)" : "transparent",
        boxShadow: scrolled ? "0 1px 0 oklch(25% 0.020 25)" : "none",
        transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)",
      }}
    >
      <div
        className="max-w-6xl mx-auto px-6 flex items-center justify-between"
        style={{ height: "72px" }}
      >
        <a href="#" aria-label="JSM Construction — home">
          <Logo variant="light" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-body)",
                color: "rgba(245,240,238,0.75)",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "#f5f0ee")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = "rgba(245,240,238,0.75)")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+15199808818"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold transition-colors duration-200"
            style={{
              fontFamily: "var(--font-body)",
              backgroundColor: "oklch(34% 0.140 25)",
              color: "#f5f0ee",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "oklch(42% 0.140 25)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor =
                "oklch(34% 0.140 25)")
            }
          >
            <Phone size={14} aria-hidden="true" />
            519-980-8818
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#f5f0ee" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <div
          className="md:hidden border-t"
          style={{
            backgroundColor: "oklch(14% 0.015 25)",
            borderColor: "oklch(22% 0.018 25)",
          }}
        >
          <nav
            className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium py-1"
                style={{ color: "rgba(245,240,238,0.85)", fontFamily: "var(--font-body)" }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+15199808818"
              className="flex items-center gap-2 mt-2 px-4 py-3 font-semibold text-sm self-start"
              style={{
                backgroundColor: "oklch(34% 0.140 25)",
                color: "#f5f0ee",
                fontFamily: "var(--font-body)",
              }}
              onClick={() => setMenuOpen(false)}
            >
              <Phone size={14} aria-hidden="true" />
              Call 519-980-8818
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
