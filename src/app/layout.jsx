import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Code4Bharat – Empowering Developers in India",
  description:
    "Code4Bharat is a platform built to empower developers in India with tutorials, tools, and resources for modern web development.",
  keywords: [
    "Code4Bharat",
    "web development",
    "nextjs",
    "programming tutorials",
    "developer tools",
    "India coding platform",
    "learn to code India",
    "web development tutorials",
    "React tutorials",
    "JavaScript tutorials",
    "frontend development",
    "backend development",
    "fullstack development",
    "modern web development",
    "coding resources India",
    "developer community India",
    "open source projects India",
    "software development tutorials",
    "programming courses India",
    "coding bootcamp India",
    "learn React India",
    "learn Next.js India",
    "tech tutorials India",
    "software engineering tutorials",
    "programming challenges",
    "developer blog India",
    "mobile app development India",
    "technology tutorials",
    "web app development tutorials"
  ],
  authors: [{ name: "Code4Bharat Team" }],
  creator: "Code4Bharat",
  publisher: "Code4Bharat",
  metadataBase: new URL("https://www.code4bharat.com"),
  openGraph: {
    title: "Code4Bharat – Empowering Developers in India",
    description:
      "Code4Bharat provides tutorials, tools, and resources for developers in India to learn modern web technologies.",
    url: "https://www.code4bharat.com",
    siteName: "Code4Bharat",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Code4Bharat",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code4Bharat – Empowering Developers in India",
    description:
      "Learn Next.js, React, and modern web development with Code4Bharat.",
    creator: "@Code4Bharat",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" dir="ltr">
      <head>
        {/* ✅ Character Encoding */}
        <meta charSet="UTF-8" />

        {/* ✅ Responsive Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* ✅ Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon.png" />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.code4bharat.com" />

        {/* ✅ Theme Color */}
        <meta name="theme-color" content="#2563eb" />

        {/* ✅ Google Search Console Verification */}
        <meta
          name="google-site-verification"
          content="FpT8vyz4FajVkRmympX15FZ4jlefoZyxS20-dq-Fpy0"
        />
      </head>
      <body className="non-selective">
        {children}

        {/* ✅ Organization Schema */}
        <Script id="organization-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Code4Bharat",
            url: "https://www.code4bharat.com",
            logo: "https://www.code4bharat.com/og-image.png",
            sameAs: [
              "https://twitter.com/Code4Bharat",
              "https://github.com/Code4Bharat",
            ],
          })}
        </Script>

        {/* ✅ Website Schema */}
        <Script id="website-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Code4Bharat",
            url: "https://www.code4bharat.com",
            potentialAction: {
              "@type": "SearchAction",
              target:
                "https://www.code4bharat.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </Script>

        {/* ✅ Google Analytics */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2DMPGE1KGS"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2DMPGE1KGS');
          `}
        </Script>
      </body>
    </html>
  );
}
