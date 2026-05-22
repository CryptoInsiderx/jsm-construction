import type { Metadata } from "next";
import { Barlow, Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlowSC = Barlow_Semi_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800", "900"],
  display: "swap",
});

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JSM Construction Ltd. | Windsor, Ontario",
  description:
    "Windsor's trusted renovation contractor. Basements, kitchens, bathrooms, decks, flooring, and more. Commercial and residential. Call 519-980-8818 for a free estimate.",
  keywords:
    "JSM Construction, Windsor Ontario, renovation, basement, kitchen, bathroom, flooring, painting, deck, contractor",
  openGraph: {
    title: "JSM Construction Ltd. | Windsor, Ontario",
    description:
      "We give reality to your dreams. Serving Windsor, Lakeshore, LaSalle, Belle River and Amherstburg.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowSC.variable} ${barlow.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold"
          style={{
            backgroundColor: "oklch(34% 0.140 25)",
            color: "#f5f0ee",
          }}
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
