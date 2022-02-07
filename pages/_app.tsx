import type { AppProps } from 'next/app';

import '@fontsource/inter/400.css';
import '@fontsource/inter/variable.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
