import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link rel="preload" as="image" href="/images/dd-slider.jpg" />
        <link rel="preload" as="image" href="/images/dd-subheader.jpg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
