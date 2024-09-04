// src/pages/_document.tsx
import { Html, Head, Main, NextScript, DocumentInitialProps } from 'next/document';
import Document from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="manifest" href="/pwa/manifest.json" />
          <link rel="apple-touch-icon" href="/pwa/icons/apple-touch-icon.png" />
          <meta name="theme-color" content="#010C15" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
