import Head from "next/head";

export default function SEO() {
  return (
    <Head>
      <title>{siteMetadata.title}</title>
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
      <link rel="manifest" href="/img/site.webmanifest" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="title" content={siteMetadata.title} />
      <meta name="description" content={siteMetadata.desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.szhao.dev/" />
      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={siteMetadata.desc} />
      <meta
        property="og:image"
        content="https://www.szhao.dev/img/preview.png"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.szhao.dev/" />
      <meta property="twitter:title" content={siteMetadata.title} />
      <meta property="twitter:description" content={siteMetadata.desc} />
      <meta
        property="twitter:image"
        content="https://www.szhao.dev/static/img/profile.png"
      />
    </Head>
  );
}
