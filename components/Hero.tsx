"use client";

import { Phone, FileText, ChevronDown } from "lucide-react";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    el.style.opacity = "0";
    el.style.transform = "translateY(24px)";
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition =
          "opacity 0.9s cubic-bezier(0.25, 1, 0.5, 1), transform 0.9s cubic-bezier(0.25, 1, 0.5, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "oklch(14% 0.015 25)" }}
      aria-label="Hero"
    >
      {/* Background photo */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=75"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
          quality={75}
        />
        {/* Dark overlay — layered to keep text readable */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              105deg,
              oklch(10% 0.015 25 / 0.92) 0%,
              oklch(14% 0.015 25 / 0.80) 60%,
              oklch(14% 0.015 25 / 0.65) 100%
            )`,
          }}
        />
      </div>

      {/* Crimson accent bar */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: "oklch(34% 0.140 25)" }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 py-32 md:py-40">
        {/* Location badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 text-xs font-semibold uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-body)",
            backgroundColor: "oklch(34% 0.140 25)",
            color: "#f5f0ee",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full inline-block"
            style={{ backgroundColor: "#f5f0ee" }}
          />
          Windsor &bull; Lakeshore &bull; LaSalle &bull; Amherstburg
        </div>

        {/* Headline */}
        <h1
          className="mb-6 leading-none"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            color: "#f5f0ee",
            letterSpacing: "-0.02em",
            maxWidth: "14ch",
            lineHeight: 0.95,
          }}
        >
          WE GIVE{" "}
          <span
            style={{
              color: "oklch(55% 0.140 25)",
              fontStyle: "italic",
              fontWeight: 700,
            }}
          >
            REALITY
          </span>{" "}
          TO YOUR DREAMS.
        </h1>

        {/* Sub */}
        <p
          className="mb-10 leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2.2vw, 1.15rem)",
            color: "rgba(245,240,238,0.78)",
            maxWidth: "50ch",
          }}
        >
          JSM Construction Ltd. handles the full scope: basements, kitchens,
          bathrooms, decks, flooring, painting. Commercial and residential.
          Jagjit Singh Mann leads every project personally.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="tel:+15199808818"
            className="inline-flex items-center gap-2.5 px-7 py-4 font-semibold text-base transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              backgroundColor: "oklch(34% 0.140 25)",
              color: "#f5f0ee",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "oklch(42% 0.140 25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "oklch(34% 0.140 25)";
            }}
          >
            <Phone size={16} aria-hidden="true" />
            Call 519-980-8818
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-7 py-4 font-semibold text-base transition-all duration-300"
            style={{
              fontFamily: "var(--font-body)",
              backgroundColor: "transparent",
              color: "#f5f0ee",
              border: "1.5px solid rgba(245,240,238,0.4)",
              letterSpacing: "0.01em",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#f5f0ee";
              el.style.backgroundColor = "oklch(20% 0.018 25 / 0.7)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(245,240,238,0.4)";
              el.style.backgroundColor = "transparent";
            }}
          >
            <FileText size={16} aria-hidden="true" />
            Get a Free Estimate
          </a>
        </div>

        {/* Service proof strip */}
        <div
          className="mt-16 pt-8 flex flex-wrap gap-x-8 gap-y-2"
          style={{ borderTop: "1px solid oklch(30% 0.020 25)" }}
        >
          {[
            "Basements",
            "Kitchens",
            "Bathrooms",
            "Flooring",
            "Painting",
            "Decks",
            "Commercial",
          ].map((label) => (
            <span
              key={label}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.8rem",
                color: "rgba(245,240,238,0.55)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-70 transition-opacity duration-300"
        aria-label="Scroll to services"
        style={{ color: "#f5f0ee" }}
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.65rem",
          }}
        >
          View Services
        </span>
        <ChevronDown size={18} aria-hidden="true" />
      </a>
    </section>
  );
}
