import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" />
         <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />

       <link
  rel="preload"
  as="image"
  href="https://res.cloudinary.com/dfhfdirbu/image/upload/f_auto,q_55,w_665/v1772711753/toi-about_uit1xx_mul0vd.avif"
  imageSrcSet="https://res.cloudinary.com/dfhfdirbu/image/upload/f_auto,q_55,w_400/v1772711753/toi-about_uit1xx_mul0vd.avif 400w, https://res.cloudinary.com/dfhfdirbu/image/upload/f_auto,q_55,w_665/v1772711753/toi-about_uit1xx_mul0vd.avif 665w"
  imageSizes="(max-width: 768px) 100vw, 50vw"
  fetchPriority="high"
/>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
