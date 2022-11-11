import Document, { Html, Head, Main, NextScript } from "next/document";
import siteMetadata from "../data/siteMetadata";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta
            name="msapplication-TileColor"
            content={siteMetadata.themeColor}
          />
          <meta name="theme-color" content={siteMetadata.themeColor} />
          <meta name="title" content={siteMetadata.title} />
          <meta name="description" content={siteMetadata.desc} />
          <meta name="keywords" content={siteMetadata.tags} />
          <meta name="robots" content="index, follow" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="language" content="English" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
        <body className="bg-gray-100 dark:bg-gray-900 text-black antialiased dark:bg-dark dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
