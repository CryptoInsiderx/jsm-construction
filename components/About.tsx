"use client";

import { MapPin, ShieldCheck, Users, Sparkles } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const VALUES = [
  {
    icon: ShieldCheck,
    title: "Built on honesty",
    body: "We quote what we mean and deliver what we quote. No change-order surprises halfway through the job.",
  },
  {
    icon: Users,
    title: "Owner-operated",
    body: "Jagjit Singh Mann runs every project. You're not dealing with a dispatcher — you're dealing with the person doing the work.",
  },
  {
    icon: MapPin,
    title: "Rooted in Windsor",
    body: "We live and work here. Windsor, Lakeshore, LaSalle, Belle River, Amherstburg — these are our communities, not just our service area.",
  },
  {
    icon: Sparkles,
    title: "Full scope, one call",
    body: "From demo to the final detail, we coordinate the whole project. One contract, one point of contact, zero guesswork.",
  },
];

function ValueCard({
  title,
  body,
  icon: Icon,
  delay,
}: {
  title: string;
  body: string;
  icon: typeof ShieldCheck;
  delay: number;
}) {
  const ref = useReveal(0.1, delay);

  return (
    <div
      ref={ref}
      className="flex gap-4 p-5"
      style={{ backgroundColor: "oklch(20% 0.018 25)" }}
    >
      <div
        className="shrink-0 w-9 h-9 flex items-center justify-center mt-0.5"
        style={{ backgroundColor: "oklch(28% 0.025 25)" }}
        aria-hidden="true"
      >
        <Icon
          size={17}
          strokeWidth={1.5}
          style={{ color: "oklch(52% 0.140 25)" }}
        />
      </div>
      <div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1rem",
            color: "#f5f0ee",
            letterSpacing: "-0.01em",
          }}
        >
          {title}
        </h3>
        <p
          className="mt-1.5"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.875rem",
            color: "rgba(245,240,238,0.72)",
            lineHeight: 1.65,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}

export default function About() {
  const headingRef = useReveal(0.2);
  const textRef = useReveal(0.2, 150);
  const quoteRef = useReveal(0.2, 100);

  return (
    <section
      id="about"
      className="py-24"
      style={{ backgroundColor: "oklch(14% 0.015 25)" }}
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <div ref={headingRef}>
              <h2
                id="about-heading"
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  color: "#f5f0ee",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.05,
                }}
              >
                A Windsor contractor you can trust with your home.
              </h2>
            </div>

            <div ref={textRef} className="mt-7 space-y-5">
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "rgba(245,240,238,0.75)",
                  lineHeight: 1.75,
                }}
              >
                JSM Construction Ltd. was founded by Jagjit Singh Mann on a
                straightforward premise: do the work properly, treat people
                honestly, and the rest takes care of itself. We handle
                commercial and residential projects across Windsor and Essex
                County, from single-room renovations to full home rebuilds.
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.9375rem",
                  color: "rgba(245,240,238,0.75)",
                  lineHeight: 1.75,
                }}
              >
                Every project is estimated transparently, scoped clearly, and
                executed by tradespeople who take pride in their craft. No
                corners cut, no hidden costs, no three-week gaps in
                communication.
              </p>
            </div>

            {/* Director quote — background tint instead of banned left border */}
            <div
              ref={quoteRef}
              className="mt-10 p-6"
              style={{ backgroundColor: "oklch(20% 0.018 25)" }}
            >
              <blockquote
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "#f5f0ee",
                  lineHeight: 1.45,
                  maxWidth: "40ch",
                }}
              >
                &ldquo;Your home is the most important investment you&apos;ll
                make. We treat it like it is.&rdquo;
              </blockquote>
              <p
                className="mt-3"
                style={{
                  fontFamily: "var(--font-body)",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  color: "oklch(52% 0.140 25)",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Jagjit Singh Mann, Director
              </p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+15199808818"
                className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-sm transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  backgroundColor: "oklch(34% 0.140 25)",
                  color: "#f5f0ee",
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
                519-980-8818
              </a>
              <a
                href="mailto:jsmconstructionlimited@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-3 font-medium text-sm transition-all duration-200"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "rgba(245,240,238,0.75)",
                  border: "1px solid oklch(28% 0.020 25)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "#f5f0ee";
                  el.style.borderColor = "oklch(40% 0.025 25)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.color = "rgba(245,240,238,0.75)";
                  el.style.borderColor = "oklch(28% 0.020 25)";
                }}
              >
                jsmconstructionlimited@gmail.com
              </a>
            </div>
          </div>

          <div className="grid gap-6 self-start">
            {VALUES.map(({ icon, title, body }, i) => (
              <ValueCard
                key={title}
                icon={icon}
                title={title}
                body={body}
                delay={i * 80}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
