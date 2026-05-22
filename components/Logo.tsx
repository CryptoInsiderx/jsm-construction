"use client";

import Image from "next/image";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo mark — white chip on dark, natural on light */}
      <div
        style={{
          backgroundColor: "#fff",
          padding: variant === "light" ? "4px" : "4px",
          flexShrink: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 44,
          height: 44,
        }}
      >
        <Image
          src="/logo.png"
          alt="JSM Construction Ltd. logo"
          width={36}
          height={36}
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      <div className="flex flex-col leading-none">
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1rem",
            color: variant === "light" ? "#f5f0ee" : "oklch(34% 0.140 25)",
            letterSpacing: "-0.01em",
            textTransform: "uppercase",
          }}
        >
          JSM Construction
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "0.65rem",
            color:
              variant === "light"
                ? "rgba(245,240,238,0.6)"
                : "oklch(50% 0.010 25)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginTop: "2px",
          }}
        >
          Ltd. — Windsor, ON
        </span>
      </div>
    </div>
  );
}
