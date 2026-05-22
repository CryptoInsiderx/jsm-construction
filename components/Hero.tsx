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
    el.style.transform = "translateY(20px)";
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition =
          "opacity 1s cubic-bezier(0.25, 1, 0.5, 1), transform 1s cubic-bezier(0.25, 1, 0.5, 1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ backgroundColor: "oklch(12% 0.012 25)" }}
      aria-label="Hero"
    >
      {/* Background photo — finished living room with fireplace */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="https://images.unsplash.com/photo-1765959617888-30837a158667?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center 40%" }}
          priority
          quality={80}
        />
        {/* Layered dark overlay — heavy left for text, opens right to reveal room */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(
              100deg,
              oklch(10% 0.012 25 / 0.95) 0%,
              oklch(12% 0.012 25 / 0.85) 45%,
              oklch(12% 0.012 25 / 0.55) 70%,
              oklch(12% 0.012 25 / 0.35) 100%
            )`,
          }}
        />
      </div>

      {/* Crimson accent bar */}
      <div
        aria-hidden="true"
        className="absolute left-0 top-0 bottom-0 w-1.5"
        style={{ backgroundColor: "oklch(34% 0.140 25)" }}
      />

      <div ref={ref} className="relative max-w-6xl mx-auto px-6 py-32 md:py-44">
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
          className="mb-6"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 900,
            fontSize: "clamp(3.25rem, 9vw, 7rem)",
            color: "#f5f0ee",
            letterSpacing: "-0.025em",
            maxWidth: "13ch",
            lineHeight: 0.92,
            textTransform: "uppercase",
          }}
        >
          We Give{" "}
          <span
            style={{
              color: "oklch(58% 0.140 25)",
              fontStyle: "italic",
              fontWeight: 700,
              textTransform: "none",
            }}
          >
            Reality
          </span>{" "}
          To Your Dreams.
        </h1>

        {/* Sub */}
        <p
          className="mb-10 leading-relaxed"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: "rgba(245,240,238,0.82)",
            maxWidth: "46ch",
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
              border: "1.5px solid rgba(245,240,238,0.45)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "#f5f0ee";
              el.style.backgroundColor = "rgba(245,240,238,0.08)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "rgba(245,240,238,0.45)";
              el.style.backgroundColor = "transparent";
            }}
          >
            <FileText size={16} aria-hidden="true" />
            Get a Free Estimate
          </a>
        </div>

        {/* Service tag strip */}
        <div
          className="mt-16 pt-8 flex flex-wrap gap-x-8 gap-y-2"
          style={{ borderTop: "1px solid oklch(28% 0.018 25)" }}
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
                fontSize: "0.78rem",
                color: "rgba(245,240,238,0.5)",
                textTransform: "uppercase",
                letterSpacing: "0.09em",
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-35 hover:opacity-65 transition-opacity duration-300"
        aria-label="Scroll to services"
        style={{ color: "#f5f0ee" }}
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.6rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          View Services
        </span>
        <ChevronDown size={17} aria-hidden="true" />
      </a>
    </section>
  );
}
