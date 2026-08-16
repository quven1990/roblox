import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { SITE_ORIGIN, siteCopy } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: {
    default: siteCopy.title,
    template: "%s",
  },
  description: siteCopy.metaDescription,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#f6f7fb",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          defer
          data-domain="upvane.com"
          src="https://plausible.shipsolo.io/js/script.js"
        />
      </head>
      <body className={outfit.className}>
        <a className="skip" href="#content">
          Skip to content
        </a>
        {children}
        <DeferredAnalytics />
      </body>
    </html>
  );
}
