"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { useReveal } from "@/lib/useReveal";

const LABEL_STYLE = {
  fontFamily: "var(--font-body)",
  fontSize: "0.8rem",
  fontWeight: 600,
  color: "rgba(245,240,238,0.75)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
};

const INPUT_STYLE = {
  fontFamily: "var(--font-body)",
  fontSize: "0.9375rem",
  color: "#f5f0ee",
  backgroundColor: "oklch(20% 0.018 25)",
  border: "1px solid oklch(28% 0.022 25)",
  padding: "0.75rem 1rem",
  width: "100%",
  outline: "none",
  borderRadius: "4px",
  transition: "border-color 0.2s",
};

export default function Contact() {
  const headingRef = useReveal(0.15);
  const formRef = useReveal(0.1, 100);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    // Simulate async submit — replace with actual API call / form service
    await new Promise((r) => setTimeout(r, 1000));
    setSending(false);
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="py-24"
      style={{ backgroundColor: "oklch(14% 0.015 25)" }}
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.6fr] gap-14 lg:gap-20 items-start">
          {/* Left: info */}
          <div ref={headingRef}>
            <h2
              id="contact-heading"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 900,
                fontSize: "clamp(1.75rem, 3.5vw, 3rem)",
                color: "#f5f0ee",
                letterSpacing: "-0.02em",
                lineHeight: 1.05,
              }}
            >
              Free estimates. Honest scopes. Real answers.
            </h2>
            <p
              className="mt-5"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.9375rem",
                color: "rgba(245,240,238,0.75)",
                lineHeight: 1.7,
                maxWidth: "40ch",
              }}
            >
              Call us directly or fill in the form. We&apos;ll follow up within
              one business day to discuss your project and schedule an on-site
              estimate.
            </p>

            <ul className="mt-10 space-y-5">
              <li>
                <a
                  href="tel:+15199808818"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(34% 0.140 25)" }}
                    aria-hidden="true"
                  >
                    <Phone size={16} style={{ color: "#f5f0ee" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        color: "rgba(245,240,238,0.4)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Phone
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 600,
                        fontSize: "1rem",
                        color: "#f5f0ee",
                        marginTop: "2px",
                      }}
                    >
                      519-980-8818
                    </div>
                  </div>
                </a>
              </li>

              <li>
                <a
                  href="mailto:jsmconstructionlimited@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div
                    className="w-10 h-10 flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "oklch(20% 0.018 25)" }}
                    aria-hidden="true"
                  >
                    <Mail size={16} style={{ color: "oklch(52% 0.140 25)" }} strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.7rem",
                        color: "rgba(245,240,238,0.4)",
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Email
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-body)",
                        fontWeight: 500,
                        fontSize: "0.875rem",
                        color: "rgba(245,240,238,0.75)",
                        marginTop: "2px",
                        wordBreak: "break-all",
                      }}
                    >
                      jsmconstructionlimited@gmail.com
                    </div>
                  </div>
                </a>
              </li>

              <li className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "oklch(20% 0.018 25)" }}
                  aria-hidden="true"
                >
                  <MapPin size={16} style={{ color: "oklch(52% 0.140 25)" }} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.7rem",
                      color: "rgba(245,240,238,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Service Area
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      color: "rgba(245,240,238,0.75)",
                      marginTop: "2px",
                      lineHeight: 1.5,
                    }}
                  >
                    Windsor &bull; Lakeshore &bull; LaSalle
                    <br />
                    Belle River &bull; Amherstburg
                  </div>
                </div>
              </li>
            </ul>

            {/* Social */}
            <div
              className="mt-10 pt-8"
              style={{ borderTop: "1px solid oklch(22% 0.018 25)" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "0.75rem",
                  color: "rgba(245,240,238,0.4)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "10px",
                }}
              >
                Follow our work
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.tiktok.com/@jsmconstructionlimited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    backgroundColor: "oklch(20% 0.018 25)",
                    color: "rgba(245,240,238,0.65)",
                    border: "1px solid oklch(28% 0.022 25)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#f5f0ee")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(245,240,238,0.65)")
                  }
                >
                  TikTok
                </a>
                <a
                  href="https://www.instagram.com/jsm.construction/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-medium transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    backgroundColor: "oklch(20% 0.018 25)",
                    color: "rgba(245,240,238,0.65)",
                    border: "1px solid oklch(28% 0.022 25)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#f5f0ee")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color =
                      "rgba(245,240,238,0.65)")
                  }
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div
            ref={formRef}
            className="p-8"
            style={{
              backgroundColor: "oklch(17% 0.016 25)",
              boxShadow: "0 0 0 1px oklch(25% 0.020 25)",
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 gap-4 text-center">
                <CheckCircle
                  size={40}
                  style={{ color: "oklch(52% 0.140 25)" }}
                  strokeWidth={1.5}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.5rem",
                    color: "#f5f0ee",
                  }}
                >
                  Message received.
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.9rem",
                    color: "rgba(245,240,238,0.6)",
                    maxWidth: "36ch",
                    lineHeight: 1.65,
                  }}
                >
                  We&apos;ll follow up within one business day to discuss your
                  project.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    color: "#f5f0ee",
                    marginBottom: "6px",
                  }}
                >
                  Request a free estimate
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.85rem",
                    color: "rgba(245,240,238,0.5)",
                    marginBottom: "20px",
                    lineHeight: 1.6,
                  }}
                >
                  Tell us what you&apos;re working on and we&apos;ll get back to you
                  promptly.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" style={LABEL_STYLE}>
                      Name <span aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      style={INPUT_STYLE}
                      onFocus={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(34% 0.140 25)")
                      }
                      onBlur={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(28% 0.022 25)")
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="phone" style={LABEL_STYLE}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="519-000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      style={INPUT_STYLE}
                      onFocus={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(34% 0.140 25)")
                      }
                      onBlur={(e) =>
                        ((e.currentTarget as HTMLElement).style.borderColor =
                          "oklch(28% 0.022 25)")
                      }
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" style={LABEL_STYLE}>
                    Email <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    style={INPUT_STYLE}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(34% 0.140 25)")
                    }
                    onBlur={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(28% 0.022 25)")
                    }
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="service" style={LABEL_STYLE}>
                    Project type
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    style={{ ...INPUT_STYLE, cursor: "pointer" }}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(34% 0.140 25)")
                    }
                    onBlur={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(28% 0.022 25)")
                    }
                  >
                    <option value="" style={{ backgroundColor: "oklch(20% 0.018 25)" }}>
                      Select a service...
                    </option>
                    {[
                      "Basement Development / Remodeling",
                      "Bathroom Renovation",
                      "Kitchen Renovation",
                      "Flooring & Tile",
                      "Painting",
                      "Deck Construction",
                      "Home / Apartment Renovation",
                      "Commercial Construction",
                      "Other",
                    ].map((s) => (
                      <option key={s} value={s} style={{ backgroundColor: "oklch(20% 0.018 25)" }}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" style={LABEL_STYLE}>
                    Project details <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your project — size, timeline, any specifics..."
                    value={form.message}
                    onChange={handleChange}
                    style={{ ...INPUT_STYLE, resize: "vertical", minHeight: "100px" }}
                    onFocus={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(34% 0.140 25)")
                    }
                    onBlur={(e) =>
                      ((e.currentTarget as HTMLElement).style.borderColor =
                        "oklch(28% 0.022 25)")
                    }
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2.5 py-4 font-semibold text-sm transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-body)",
                    backgroundColor: sending ? "oklch(30% 0.120 25)" : "oklch(34% 0.140 25)",
                    color: "#f5f0ee",
                    cursor: sending ? "not-allowed" : "pointer",
                    letterSpacing: "0.01em",
                  }}
                  onMouseEnter={(e) => {
                    if (!sending)
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "oklch(42% 0.140 25)";
                  }}
                  onMouseLeave={(e) => {
                    if (!sending)
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "oklch(34% 0.140 25)";
                  }}
                >
                  {sending ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={14} aria-hidden="true" />
                      Send Estimate Request
                    </>
                  )}
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.75rem",
                    color: "rgba(245,240,238,0.35)",
                    textAlign: "center",
                    marginTop: "8px",
                  }}
                >
                  Or call directly: <a href="tel:+15199808818" style={{ color: "oklch(52% 0.140 25)" }}>519-980-8818</a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
