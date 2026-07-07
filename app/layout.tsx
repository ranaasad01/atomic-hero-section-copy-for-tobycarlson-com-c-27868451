import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LocaleProvider from "@/components/LocaleProvider";
import LanguageToggle from "@/components/LanguageToggle";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  formatDetection: { telephone: false, date: false, email: false, address: false },
  title: "Toby Carlson — Inventor, Entrepreneur & Technology Builder",
  description:
    "Inventor, entrepreneur, and technology builder focused on creating intelligent systems, launching transformative ventures, and turning ambitious ideas into real-world impact.",
  keywords: [
    "Toby Carlson",
    "inventor",
    "entrepreneur",
    "technology",
    "innovation",
    "patents",
    "AI",
  ],
  authors: [{ name: "Toby Carlson" }],
  openGraph: {
    title: "Toby Carlson — Inventor, Entrepreneur & Technology Builder",
    description:
      "Exploring the edge of innovation, transforming bold ideas into technologies that shape tomorrow.",
    type: "website",
    url: "https://tobycarlson.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "Toby Carlson",
    description:
      "Exploring the edge of innovation, transforming bold ideas into technologies that shape tomorrow.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[#06080f] text-white antialiased font-sans">
        <LocaleProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <LanguageToggle />
        </LocaleProvider>
      </body>
    </html>
  );
}