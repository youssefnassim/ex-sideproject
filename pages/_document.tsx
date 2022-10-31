import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/gyx7jcz.css" />
        <link rel="stylesheet" href="https://use.typekit.net/kpj8dex.css" />
      </Head>
      <body className="antialiased dark:bg-black dark:text-neutral-600">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
