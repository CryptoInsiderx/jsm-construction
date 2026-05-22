"use client";

import { Star } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const REVIEWS = [
  {
    author: "Priya M.",
    location: "Windsor, ON",
    stars: 5,
    date: "2024",
    text: "JSM completely transformed our basement. Jagjit was on-site every day, communicated every step, and finished on time. The quality is outstanding — our family uses it every day now.",
    project: "Basement Renovation",
  },
  {
    author: "Dave K.",
    location: "LaSalle, ON",
    stars: 5,
    date: "2024",
    text: "Called for a bathroom quote and they came out the same week. The tile work is flawless. Honest pricing, no surprises on the final invoice. Would hire again without question.",
    project: "Bathroom Renovation",
  },
  {
    author: "Harjot S.",
    location: "Lakeshore, ON",
    stars: 5,
    date: "2024",
    text: "We had our kitchen completely redone — new cabinets, countertops, backsplash, flooring. JSM handled it all. Clean job site, professional crew, and the result looks incredible.",
    project: "Kitchen Renovation",
  },
  {
    author: "Lisa R.",
    location: "Windsor, ON",
    stars: 5,
    date: "2023",
    text: "Had them do a deck and interior painting. Two separate projects, same quality. Jagjit stands behind his work and it shows. My neighbors have already asked for his number.",
    project: "Deck & Painting",
  },
  {
    author: "Tony A.",
    location: "Amherstburg, ON",
    stars: 5,
    date: "2023",
    text: "They renovated two rental units for me. Fast turnaround, tenants were happy, and the price was fair. I've given their number to every landlord I know.",
    project: "Apartment Renovation",
  },
  {
    author: "Mandeep G.",
    location: "Belle River, ON",
    stars: 5,
    date: "2024",
    text: "Professional from start to finish. They gave us options we hadn't thought of and the flooring they suggested looks even better than what we had picked. Great crew.",
    project: "Flooring & Tile",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={13} fill="oklch(52% 0.140 25)" stroke="none" aria-hidden="true" />
      ))}
    </div>
  );
}

function ReviewCard({ review, delay }: { review: (typeof REVIEWS)[0]; delay: number }) {
  const ref = useReveal(0.1, delay);

  return (
    <div
      ref={ref}
      className="p-6 flex flex-col gap-4"
      style={{ backgroundColor: "oklch(98% 0.005 25)" }}
    >
      <div className="flex items-start justify-between gap-2">
        <Stars count={review.stars} />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            color: "oklch(60% 0.008 25)",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {review.project}
        </span>
      </div>

      <blockquote
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "0.9375rem",
          color: "oklch(28% 0.012 25)",
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        &ldquo;{review.text}&rdquo;
      </blockquote>

      <div
        className="flex items-center justify-between pt-3"
        style={{ borderTop: "1px solid oklch(90% 0.008 25)" }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: "0.875rem",
              color: "oklch(20% 0.012 25)",
            }}
          >
            {review.author}
          </div>
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.75rem",
              color: "oklch(55% 0.008 25)",
              marginTop: "1px",
            }}
          >
            {review.location}
          </div>
        </div>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            color: "oklch(65% 0.008 25)",
          }}
        >
          {review.date}
        </span>
      </div>
    </div>
  );
}

export default function Reviews() {
  const headingRef = useReveal(0.2);

  return (
    <section
      id="reviews"
      className="py-24"
      style={{ backgroundColor: "oklch(95% 0.007 25)" }}
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={headingRef}
          className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <h2
              id="reviews-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(2rem, 4vw, 3.25rem)",
                color: "oklch(16% 0.012 25)",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              What Windsor homeowners say.
            </h2>
          </div>

          <div
            className="flex items-center gap-4 shrink-0 px-6 py-4"
            style={{ backgroundColor: "oklch(98% 0.005 25)" }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "2.5rem",
                  color: "oklch(34% 0.140 25)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                5.0
              </div>
              <Stars count={5} />
            </div>
            <div style={{ borderLeft: "1px solid oklch(88% 0.010 25)", paddingLeft: "1rem" }}>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.8rem",
                  color: "oklch(45% 0.010 25)",
                  lineHeight: 1.4,
                }}
              >
                Google rating
                <br />
                Windsor, ON
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS.map((review, i) => (
            <ReviewCard key={i} review={review} delay={i * 70} />
          ))}
        </div>

        <p
          className="mt-10 text-center"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.825rem",
            color: "oklch(55% 0.008 25)",
          }}
        >
          Find us on Google Maps &mdash; search &ldquo;JSM Construction Limited Windsor&rdquo;
        </p>
      </div>
    </section>
  );
}
