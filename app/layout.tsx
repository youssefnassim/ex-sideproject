import { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

export const metadata: Metadata = {
  title: "Ex Side Project",
};

const SmoothHaas = localFont({
  src: [
    {
      path: "../fonts/SmoothHaas-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/SmoothHaas-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-smoothhaas",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/gyx7jcz.css" />
        <link rel="stylesheet" href="https://use.typekit.net/kpj8dex.css" />
      </head>
      <body
        className={`${SmoothHaas.className} antialiased bg-neutral-100/50 dark:bg-black text-neutral-800/80 dark:text-neutral-500`}
      >
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
