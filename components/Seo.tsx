import Head from "next/head";
import React, { FC } from "react";

const SITE_URL = "https://damicode.netlify.app";
const SITE_NAME = "Damilare Adebayo";
const DEFAULT_DESCRIPTION =
  "Software engineer with 7+ years of experience building fast, accessible web applications end to end — from React & Next.js frontends to Node & Postgres backends.";

// `key`s let a page-level <Seo> override the one rendered in _app.
const Seo: FC<{ title?: string; description?: string }> = ({
  title = SITE_NAME,
  description = DEFAULT_DESCRIPTION,
}) => {
  const fullTitle = `${title} | Portfolio`;
  const image = `${SITE_URL}/og.jpg`;

  return (
    <Head>
      <title key="title">{fullTitle}</title>
      <meta key="description" name="description" content={description} />
      <link key="icon" rel="icon" href="/favicon.ico" />
      <link key="canonical" rel="canonical" href={SITE_URL} />

      <meta key="og:type" property="og:type" content="website" />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:title" property="og:title" content={fullTitle} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:url" property="og:url" content={SITE_URL} />
      <meta key="og:image" property="og:image" content={image} />
      <meta key="og:image:width" property="og:image:width" content="1200" />
      <meta key="og:image:height" property="og:image:height" content="630" />

      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:site" name="twitter:site" content="@dami_code" />
      <meta key="twitter:title" name="twitter:title" content={fullTitle} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={image} />
    </Head>
  );
};

export default Seo;
