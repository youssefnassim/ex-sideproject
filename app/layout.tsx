import { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import { Newsreader, JetBrains_Mono, Inter } from "next/font/google";
import classNames from "classnames";
import Header from "components/Header";

export const metadata: Metadata = {
  title: "Ex Side Project",
};

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  style: ["normal"],
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
          "h-full font-sans antialiased dark:bg-black text-neutral-800 dark:text-neutral-100",
          inter.variable,
          spaceMono.variable,
          newsreader.variable
        )}
      >
        <ThemeProvider attribute="class">
          <Header />
          <main role="main" className="py-7 px-4 md:px-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
