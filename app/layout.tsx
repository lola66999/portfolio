import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Lolaxon Xayrullayeva | Frontend Developer",
    template: "%s | Lolaxon Xayrullayeva",
  },
  description:
    "Frontend dasturchi (React, Next.js, TypeScript, Tailwind). Portfolio va loyihalarim.",
  keywords: ["Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio", "Toshkent"],
  authors: [{ name: "Lolaxon Xayrullayeva" }],
  openGraph: {
    title: "Lolaxon Xayrullayeva | Frontend Developer",
    description: "React va Next.js bilan yaratilgan loyihalarim va portfolio.",
    type: "website",
    locale: "uz_UZ",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
