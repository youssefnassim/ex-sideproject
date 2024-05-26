import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";

const AlteHaasGrotesk = localFont({
  src: [
    {
      path: "../fonts/AlteHaasGrotesk-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/AlteHaasGrotesk-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-altehaas",
});

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

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <main className={SmoothHaas.className}>
        <Component {...pageProps} />
        <Analytics />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
