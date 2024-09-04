// src/pages/_app.tsx
import '../styles/globals.css';
import '../styles/tailwind.css';
import { AppProps } from 'next/app';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter />
    </>
  );
}

export default MyApp;
