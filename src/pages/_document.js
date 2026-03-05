import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
        <link
          rel="preload"
          as="image"
          href="https://res.cloudinary.com/dfhfdirbu/image/upload/f_auto,q_auto,w_800/v1772004148/toi-about_uit1xx.avif"
          fetchPriority="high"
        />
        <link rel="preconnect" href="https://res.cloudinary.com" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
