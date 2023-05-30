import Head from "next/head";
import siteMetadata from "../../data/siteMetadata";

export default function SEO({ title, desc }) {
  return (
    <Head>
      <title>{title ? title : siteMetadata.title}</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/img/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/img/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/img/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="title" content={title ? title : siteMetadata.title} />
      <meta name="description" content={desc ? desc : siteMetadata.desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.szhao.dev/" />
      <meta property="og:title" content={title ? title : siteMetadata.title} />
      <meta
        property="og:description"
        content={desc ? desc : siteMetadata.desc}
      />
      <meta
        property="og:image"
        content="https://www.szhao.dev/static/img/logo.jpg"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.szhao.dev/" />
      <meta
        property="twitter:title"
        content={title ? title : siteMetadata.title}
      />
      <meta
        property="twitter:description"
        content={desc ? desc : siteMetadata.desc}
      />
      <meta
        property="twitter:image"
        content="https://www.szhao.dev/static/img/logo.jpg"
      />
    </Head>
  );
}
