// components/SEOHead.jsx
import React from "react";
import Head from "next/head";

const SEOHead = ({ 
  title, 
  description, 
  keywords = "", 
  url = "https://www.code4bharat.com", 
  image = "/og-image.png", 
  schema 
}) => {
  return (
    <Head>
      {/* Title & Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Schema.org (JSON-LD) */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}
    </Head>
  );
};

export default SEOHead;
