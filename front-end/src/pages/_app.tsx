import { NextIntlClientProvider } from 'next-intl';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react'

import '../styles/global.css';

// Importa los mensajes de forma estática
import es from '../lang/es.json';
import en from '../lang/en.json';

const messages = {
  es,
  en,
};

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const locale = router.locale || 'es';

  return (
    <>
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon.svg"
        />
      </Head>
          <NextIntlClientProvider
            locale={locale}
            timeZone="America/Caracas"
            messages={messages[locale as keyof typeof messages]}
          >
        <Component {...pageProps} />
       
      </NextIntlClientProvider>
      <Analytics />
    </>
  );
}