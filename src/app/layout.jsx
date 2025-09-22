import "@/app/globals.css";

export const metadata = {
  title: "Code4Bharat",
  description:
    "Code4Bharat boosts your business with custom web & mobile apps, IT consulting, and tailored e-commerce solutions.",
  keywords: [
    "Code4Bharat",
    "web development India",
    "mobile app development",
    "IT consulting",
    "e-commerce solutions",
    "custom software development",
    "software development company India",
    "digital transformation services",
    "enterprise app development",
    "cloud solutions India",
    "React development services",
    "Next.js development company",
    "Node.js development",
    "UI/UX design services",
    "agile software development",
    "startup app development",
    "e-commerce website development",
    "mobile app design",
    "android app development India",
    "ios app development India",
    "IT strategy consulting",
    "technology consulting firm",
    "business process automation",
    "software maintenance services",
    "custom CRM development",
    "backend development services",
    "full-stack development India",
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Fonts */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Archivo:wght@100;200;300;400;500;600;700;800;900&display=swap"
        />

        

        {/* Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Code4Bharat",
              url: "https://www.code4bharat.com",
              logo: "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs",
              sameAs: [
                "https://twitter.com/Code4Bharat",
                "https://linkedin.com/company/code4bharat",
                "https://github.com/Code4Bharat",
              ],
            }),
          }}
        />
      </head>
      <body
        style={{
          fontFamily: "'Archivo', 'Montserrat', sans-serif",
          fontSize: "20px", // increased base font size
          lineHeight: "1.6", // improved line height for readability
        }}
      >
        {children}
      </body>
    </html>
  );
}
