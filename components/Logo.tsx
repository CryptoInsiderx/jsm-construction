"use client";

interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Logo({ className = "", variant = "dark" }: LogoProps) {
  const color = variant === "light" ? "#f5f0ee" : "oklch(34% 0.140 25)";
  const crimson = "oklch(34% 0.140 25)";

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Roof */}
        <polyline
          points="20,90 100,20 180,90"
          stroke={variant === "light" ? "#f5f0ee" : crimson}
          strokeWidth="12"
          strokeLinecap="square"
          fill="none"
        />
        {/* House walls outline */}
        <rect
          x="42"
          y="90"
          width="116"
          height="70"
          stroke={variant === "light" ? "#f5f0ee" : crimson}
          strokeWidth="12"
          fill="none"
        />
        {/* J */}
        <path
          d="M68,105 L68,145 Q68,158 56,158"
          stroke={variant === "light" ? "#f5f0ee" : crimson}
          strokeWidth="10"
          strokeLinecap="square"
          fill="none"
        />
        {/* S */}
        <path
          d="M84,105 Q84,100 96,100 Q108,100 108,112 Q108,124 96,124 Q84,124 84,136 Q84,148 96,148 Q108,148 108,143"
          stroke={variant === "light" ? "#f5f0ee" : crimson}
          strokeWidth="10"
          strokeLinecap="round"
          fill="none"
        />
        {/* M */}
        <polyline
          points="118,148 118,100 130,130 142,100 142,148"
          stroke={variant === "light" ? "#f5f0ee" : crimson}
          strokeWidth="10"
          strokeLinecap="square"
          fill="none"
        />
        {/* Dormer/attic window */}
        <rect
          x="86"
          y="38"
          width="28"
          height="22"
          stroke={variant === "light" ? "#aaa" : "#333"}
          strokeWidth="5"
          fill="none"
        />
        <line
          x1="100"
          y1="38"
          x2="100"
          y2="60"
          stroke={variant === "light" ? "#aaa" : "#333"}
          strokeWidth="3"
        />
        <line
          x1="86"
          y1="49"
          x2="114"
          y2="49"
          stroke={variant === "light" ? "#aaa" : "#333"}
          strokeWidth="3"
        />
        {/* Left hand */}
        <path
          d="M42,160 Q30,175 26,190 L58,190 L65,170"
          stroke={variant === "light" ? "#f5f0ee" : crimson}
          strokeWidth="10"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Right hand */}
        <path
          d="M158,160 Q170,175 174,190 L142,190 L135,170"
          stroke={variant === "light" ? "#f5f0ee" : crimson}
          strokeWidth="10"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <div className="flex flex-col leading-none">
        <span
          className="font-display font-800 tracking-tight"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "1.125rem",
            color: variant === "light" ? "#f5f0ee" : crimson,
            letterSpacing: "-0.02em",
          }}
        >
          JSM Construction
        </span>
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            fontSize: "0.7rem",
            color: variant === "light" ? "rgba(245,240,238,0.7)" : "oklch(50% 0.010 25)",
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          Ltd. &mdash; Windsor, ON
        </span>
      </div>
    </div>
  );
}
