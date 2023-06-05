import type { AppProps } from 'next/app';
import Head from 'next/head';
import { App } from 'app';
import 'shared/styles/override.css';

const Root = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Anastasia Strygina</title>
        <meta name='application-name' content='Anastasia Strygina' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Anastasia Strygina' />
        <meta name='description' content='Anastasia Strygina' />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta name='msapplication-TileColor' content='#2B5797' />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content='#000000' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='shortcut icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' href='/logo150х150.png'></link>
        <meta
          name='viewport'
          content=' width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <App>
        <Component {...pageProps} />
      </App>
    </>
  );
};

export default Root;
