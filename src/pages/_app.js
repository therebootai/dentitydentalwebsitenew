import "@/styles/globals.css";
import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${leagueSpartan.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
