"use client";

import {
  Layers,
  Bath,
  ChefHat,
  Paintbrush,
  Grid3x3,
  Hammer,
  Building2,
  Wrench,
} from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const SERVICES = [
  {
    number: "01",
    icon: Layers,
    name: "Basement Development & Remodeling",
    description:
      "Full basement finishing, from framing and drywall to electrical and flooring. New builds and complete remolding of existing basements. We handle permits and coordination.",
  },
  {
    number: "02",
    icon: Bath,
    name: "Custom Bathroom Renovation",
    description:
      "Layout redesigns, tub-to-shower conversions, vanity installs, tile work, waterproofing, and fixtures. Every bathroom project is built to last and built to spec.",
  },
  {
    number: "03",
    icon: ChefHat,
    name: "Kitchen Renovation",
    description:
      "Custom cabinetry, countertops, backsplash tile, under-cabinet lighting, and full kitchen gut-and-rebuild. We've done it all — galley kitchens to open-concept conversions.",
  },
  {
    number: "04",
    icon: Grid3x3,
    name: "Tile Work & Flooring",
    description:
      "Ceramic, porcelain, natural stone, LVP, and hardwood. Floors, backsplashes, shower surrounds, and feature walls. Precision cuts, clean lines, proper substrates.",
  },
  {
    number: "05",
    icon: Paintbrush,
    name: "Interior & Exterior Painting",
    description:
      "Residential and commercial painting with proper prep: patching, priming, clean cut-ins. Interior rooms, exterior siding, garages, and commercial spaces.",
  },
  {
    number: "06",
    icon: Hammer,
    name: "Deck Construction",
    description:
      "Ground-level and elevated decks, composite and pressure-treated wood. Custom railings, built-in seating, and pergola framing. Compliant with local building codes.",
  },
  {
    number: "07",
    icon: Building2,
    name: "Home & Apartment Renovation",
    description:
      "Whole-home and unit renovations for owners and landlords. We work alongside property managers to keep suites updated, tenant-ready, and market-competitive.",
  },
  {
    number: "08",
    icon: Wrench,
    name: "Commercial Construction",
    description:
      "Commercial fit-outs, office renovations, retail buildouts, and commercial maintenance contracts. Serving businesses across Windsor and Essex County.",
  },
];

function ServiceRow({
  service,
  delay,
}: {
  service: (typeof SERVICES)[0];
  delay: number;
}) {
  const ref = useReveal(0.1, delay);
  const Icon = service.icon;

  return (
    <div
      ref={ref}
      role="article"
      className="grid md:grid-cols-[80px_1fr_2fr] gap-4 md:gap-8 py-8 items-start"
      style={{ borderTop: "1px solid oklch(88% 0.010 25)" }}
    >
      <div className="hidden md:flex flex-col items-start pt-1" aria-hidden="true">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "0.8rem",
            color: "oklch(34% 0.140 25)",
            letterSpacing: "0.04em",
          }}
        >
          {service.number}
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <div
          className="w-10 h-10 flex items-center justify-center"
          style={{ backgroundColor: "oklch(95% 0.007 25)" }}
          aria-hidden="true"
        >
          <Icon size={20} style={{ color: "oklch(34% 0.140 25)" }} strokeWidth={1.5} />
        </div>
        <h3
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.125rem",
            color: "oklch(16% 0.012 25)",
            letterSpacing: "-0.01em",
            lineHeight: 1.25,
          }}
        >
          {service.name}
        </h3>
      </div>

      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9375rem",
          color: "oklch(40% 0.010 25)",
          lineHeight: 1.7,
          maxWidth: "58ch",
        }}
      >
        {service.description}
      </p>
    </div>
  );
}

export default function Services() {
  const headingRef = useReveal(0.2);

  return (
    <section
      id="services"
      className="py-24"
      style={{ backgroundColor: "oklch(98% 0.005 25)" }}
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="mb-16">
          <h2
            id="services-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "oklch(16% 0.012 25)",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Every trade, one company.
          </h2>
          <p
            className="mt-4"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1rem",
              color: "oklch(45% 0.010 25)",
              maxWidth: "55ch",
              lineHeight: 1.65,
            }}
          >
            From permits to the final coat of paint, JSM handles the full scope.
            No sub-chasing, no gaps in accountability.
          </p>
        </div>

        <div>
          {SERVICES.map((service, i) => (
            <ServiceRow key={service.number} service={service} delay={i * 60} />
          ))}
          <div className="h-px" style={{ backgroundColor: "oklch(88% 0.010 25)" }} />
        </div>

        <div
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-8"
          style={{ backgroundColor: "oklch(95% 0.007 25)" }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: "1.25rem",
                color: "oklch(16% 0.012 25)",
              }}
            >
              Not sure what you need?
            </p>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9rem",
                color: "oklch(45% 0.010 25)",
                marginTop: "4px",
              }}
            >
              Call us. We&apos;ll assess the scope and quote you honestly.
            </p>
          </div>
          <a
            href="tel:+15199808818"
            className="inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-sm transition-colors duration-200 whitespace-nowrap"
            style={{
              fontFamily: "var(--font-body)",
              backgroundColor: "oklch(34% 0.140 25)",
              color: "#f5f0ee",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "oklch(42% 0.140 25)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.backgroundColor = "oklch(34% 0.140 25)")
            }
          >
            Call 519-980-8818
          </a>
        </div>
      </div>
    </section>
  );
}
