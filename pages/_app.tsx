import type { AppProps } from 'next/app';
import Head from 'next/head';
// Font style
import '@Styles/fonts.css';
import '@Styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="HandheldFriendly" content="true" />
        <meta name="MobileOptimized" content="width" />

        <meta name="application-name" content="riofor.com" />
        <meta name="author" content="Anton" />
        <meta name="format-detection" content="address=no" />
        <meta name="generator" content="Next.js" />
        <meta name="google" content="notranslate" />
        <meta
          name="keywords"
          content="muuraustyöt, riofor, riofor muuraustyöt, muuraus, muurari, muurarit, julkisivutyö, korjausmuuraus, väliseinämuuraukset, rappaus"
        />
        <meta name="mobile-web-app-capable" content="yes" />

        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#929ea5" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#060d0c" />

        <link rel="alternate" href="https://riofor.com/ru" hrefLang="ru" />
        <link rel="icon" href="/icons/favicon.svg" type="image/svg+xml" />
        <link rel="manifest" href="/manifest.webmanifest" />
        {/* Apple */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="riofor.com" />
        <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
