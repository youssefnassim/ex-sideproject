import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/gyx7jcz.css" />
        <link rel="stylesheet" href="https://use.typekit.net/kpj8dex.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&family=Source+Serif+Pro&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="antialiased bg-neutral-100/50 dark:bg-black text-neutral-800/80 dark:text-neutral-500">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
