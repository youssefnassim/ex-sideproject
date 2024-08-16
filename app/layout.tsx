import { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Newsreader, JetBrains_Mono } from "next/font/google";
import classNames from "classnames";

export const metadata: Metadata = {
  title: "Ex Side Project",
};

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

const spaceMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
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
          "h-full font-serif antialiased dark:bg-black text-neutral-800 dark:text-neutral-100",
          newsreader.variable,
          spaceMono.variable
        )}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
