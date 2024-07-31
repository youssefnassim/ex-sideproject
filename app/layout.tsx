import { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import {
  Inter,
  Newsreader,
  Space_Mono,
  Staatliches,
  Fragment_Mono,
} from "next/font/google";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Ex Side Project",
};

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
  display: "swap",
});

const staatliches = Staatliches({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={classNames(
          "h-full font-serif antialiased dark:bg-black text-neutral-800 dark:text-neutral-500",
          newsreader.variable,
          inter.variable,
          spaceMono.variable,
          staatliches.variable
        )}
      >
        {children}
        {/* <ThemeProvider attribute="class"></ThemeProvider> */}
      </body>
    </html>
  );
}
