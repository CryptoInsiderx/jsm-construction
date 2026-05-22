"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";

const SERVICES_LIST = [
  "Basement Development",
  "Bathroom Renovation",
  "Kitchen Renovation",
  "Flooring & Tile Work",
  "Interior & Exterior Painting",
  "Deck Construction",
  "Home & Apartment Renovation",
  "Commercial Construction",
];

const SERVICE_AREAS = [
  "Windsor",
  "Lakeshore",
  "LaSalle",
  "Belle River",
  "Amherstburg",
];

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "oklch(11% 0.012 25)" }}
      role="contentinfo"
    >
      {/* Main footer grid */}
      <div
        className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-[1.5fr_1fr_1fr] gap-12"
        style={{ borderBottom: "1px solid oklch(20% 0.018 25)" }}
      >
        {/* Brand column */}
        <div>
          <Logo variant="light" />
          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              color: "rgba(245,240,238,0.5)",
              lineHeight: 1.7,
              maxWidth: "38ch",
            }}
          >
            We give reality to your dreams. Serving Windsor and Essex County
            with full-scope renovation and construction services. Commercial and
            residential.
          </p>

          <div className="mt-7 space-y-3">
            <a
              href="tel:+15199808818"
              className="flex items-center gap-2.5 group"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "rgba(245,240,238,0.65)",
              }}
            >
              <Phone
                size={13}
                strokeWidth={1.5}
                style={{ color: "oklch(42% 0.140 25)" }}
                aria-hidden="true"
              />
              519-980-8818
            </a>
            <a
              href="mailto:jsmconstructionlimited@gmail.com"
              className="flex items-center gap-2.5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "rgba(245,240,238,0.65)",
                wordBreak: "break-all",
              }}
            >
              <Mail
                size={13}
                strokeWidth={1.5}
                style={{ color: "oklch(42% 0.140 25)", flexShrink: 0 }}
                aria-hidden="true"
              />
              jsmconstructionlimited@gmail.com
            </a>
            <div
              className="flex items-start gap-2.5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.875rem",
                color: "rgba(245,240,238,0.5)",
              }}
            >
              <MapPin
                size={13}
                strokeWidth={1.5}
                style={{ color: "oklch(42% 0.140 25)", flexShrink: 0, marginTop: "3px" }}
                aria-hidden="true"
              />
              Windsor, Ontario, Canada
            </div>
          </div>

          {/* Social links */}
          <div className="mt-7 flex gap-3">
            <a
              href="https://www.tiktok.com/@jsmconstructionlimited"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: "oklch(18% 0.015 25)",
                color: "rgba(245,240,238,0.5)",
                border: "1px solid oklch(24% 0.018 25)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#f5f0ee")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(245,240,238,0.5)")
              }
            >
              TikTok
            </a>
            <a
              href="https://www.instagram.com/jsm.construction/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: "oklch(18% 0.015 25)",
                color: "rgba(245,240,238,0.5)",
                border: "1px solid oklch(24% 0.018 25)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#f5f0ee")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(245,240,238,0.5)")
              }
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/p/JSM-Construction-limited-61576710332337/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 text-xs font-medium transition-colors duration-200"
              style={{
                fontFamily: "var(--font-body)",
                backgroundColor: "oklch(18% 0.015 25)",
                color: "rgba(245,240,238,0.5)",
                border: "1px solid oklch(24% 0.018 25)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "#f5f0ee")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color =
                  "rgba(245,240,238,0.5)")
              }
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Services column */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "0.75rem",
              color: "rgba(245,240,238,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            Services
          </h3>
          <ul className="space-y-2.5">
            {SERVICES_LIST.map((s) => (
              <li key={s}>
                <a
                  href="#services"
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "rgba(245,240,238,0.55)",
                    display: "block",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#f5f0ee")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(245,240,238,0.55)")
                  }
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Areas + Quick links */}
        <div>
          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "0.75rem",
              color: "rgba(245,240,238,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            Service Areas
          </h3>
          <ul className="space-y-2.5 mb-10">
            {SERVICE_AREAS.map((area) => (
              <li
                key={area}
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.875rem",
                  color: "rgba(245,240,238,0.55)",
                }}
              >
                {area}, ON
              </li>
            ))}
          </ul>

          <h3
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 700,
              fontSize: "0.75rem",
              color: "rgba(245,240,238,0.35)",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "16px",
            }}
          >
            Quick Links
          </h3>
          <ul className="space-y-2.5">
            {[
              ["#services", "Services"],
              ["#about", "About"],
              ["#reviews", "Reviews"],
              ["#contact", "Contact / Estimate"],
            ].map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.875rem",
                    color: "rgba(245,240,238,0.55)",
                    transition: "color 0.15s",
                    display: "block",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#f5f0ee")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(245,240,238,0.55)")
                  }
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "rgba(245,240,238,0.3)",
          }}
        >
          &copy; {new Date().getFullYear()} JSM Construction Ltd. All rights
          reserved. Windsor, Ontario, Canada.
        </p>
        <p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.75rem",
            color: "rgba(245,240,238,0.25)",
          }}
        >
          Director: Jagjit Singh Mann
        </p>
      </div>
    </footer>
  );
}
