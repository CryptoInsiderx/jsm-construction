"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";

const PROJECTS = [
  {
    id: 1,
    title: "Basement Living Room",
    location: "Windsor, ON",
    type: "Basement Development",
    src: "https://images.unsplash.com/photo-1679105796578-aa48a4d7dea3?auto=format&fit=crop&w=900&q=80",
    aspect: "tall", // taller card
  },
  {
    id: 2,
    title: "Custom Kitchen",
    location: "LaSalle, ON",
    type: "Kitchen Renovation",
    src: "https://images.unsplash.com/photo-1502005097973-6a7082348e28?auto=format&fit=crop&w=900&q=80",
    aspect: "wide",
  },
  {
    id: 3,
    title: "Spa Bathroom",
    location: "Lakeshore, ON",
    type: "Bathroom Renovation",
    src: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=900&q=80",
    aspect: "wide",
  },
  {
    id: 4,
    title: "Ceramic Tile Work",
    location: "Windsor, ON",
    type: "Tile & Flooring",
    src: "https://images.unsplash.com/photo-1605696420965-9247f11e1acd?auto=format&fit=crop&w=900&q=80",
    aspect: "tall",
  },
  {
    id: 5,
    title: "Hardwood & Renovation",
    location: "Belle River, ON",
    type: "Home Renovation",
    src: "https://images.unsplash.com/photo-1646592491741-e79ae5953486?auto=format&fit=crop&w=900&q=80",
    aspect: "wide",
  },
  {
    id: 6,
    title: "Backyard Deck",
    location: "Amherstburg, ON",
    type: "Deck Construction",
    src: "https://images.unsplash.com/photo-1574120583586-de8847ae992c?auto=format&fit=crop&w=900&q=80",
    aspect: "wide",
  },
];

function ProjectCard({
  project,
  delay,
}: {
  project: (typeof PROJECTS)[0];
  delay: number;
}) {
  const ref = useReveal(0.1, delay);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden"
      style={{
        aspectRatio: project.aspect === "tall" ? "3/4" : "4/3",
        backgroundColor: "oklch(20% 0.018 25)",
      }}
    >
      <Image
        src={project.src}
        alt={`${project.type} — ${project.location}`}
        fill
        style={{
          objectFit: "cover",
          transition: "transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
        className="group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Overlay — appears on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5"
        style={{
          background: `linear-gradient(to top, oklch(12% 0.012 25 / 0.88) 0%, transparent 60%)`,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            color: "oklch(58% 0.140 25)",
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            marginBottom: "4px",
          }}
        >
          {project.type}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 700,
            fontSize: "1.1rem",
            color: "#f5f0ee",
            letterSpacing: "-0.01em",
          }}
        >
          {project.title}
        </div>
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "rgba(245,240,238,0.6)",
            marginTop: "2px",
          }}
        >
          {project.location}
        </div>
      </div>

      {/* Permanent bottom tag on mobile (hover doesn't work on touch) */}
      <div
        className="md:hidden absolute bottom-0 left-0 right-0 px-4 py-3"
        style={{
          background: `linear-gradient(to top, oklch(12% 0.012 25 / 0.82) 0%, transparent 100%)`,
        }}
        aria-hidden="true"
      >
        <div
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "rgba(245,240,238,0.75)",
            textTransform: "uppercase",
            letterSpacing: "0.07em",
          }}
        >
          {project.type}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const headingRef = useReveal(0.15);

  return (
    <section
      id="projects"
      className="py-24"
      style={{ backgroundColor: "oklch(14% 0.015 25)" }}
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="mb-12">
          <h2
            id="projects-heading"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#f5f0ee",
              letterSpacing: "-0.02em",
              lineHeight: 1.05,
            }}
          >
            Recent projects.
          </h2>
          <p
            className="mt-3"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9375rem",
              color: "rgba(245,240,238,0.65)",
              maxWidth: "50ch",
              lineHeight: 1.65,
            }}
          >
            Basements, kitchens, bathrooms, decks — across Windsor and Essex
            County. Every project is owner-supervised, start to finish.
          </p>
        </div>

        {/* Asymmetric photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} delay={i * 80} />
          ))}
        </div>

        {/* CTA below gallery */}
        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.9rem",
              color: "rgba(245,240,238,0.6)",
              maxWidth: "44ch",
              lineHeight: 1.6,
            }}
          >
            Every project in this gallery was built by our crew in Windsor and
            Essex County. Call to discuss yours.
          </p>
          <a
            href="tel:+15199808818"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-sm transition-colors duration-200"
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
            Call 519-980-8818
          </a>
        </div>
      </div>
    </section>
  );
}
