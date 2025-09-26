import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { Sora } from 'next/font/google'

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sora",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={sora.variable}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
