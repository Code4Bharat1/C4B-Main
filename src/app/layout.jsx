import "./globals.css";
import Script from 'next/script';

export const metadata = {
  title: "Code4Bharat",
  description: "Code4Bharat",  // Fixed typo here
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*Google Search Console*/}
        
        <meta name="google-site-verification" content="FpT8vyz4FajVkRmympX15FZ4jlefoZyxS20-dq-Fpy0" />
        {/* Google Analytics Code */}

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2DMPGE1KGS"></Script>
        <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2DMPGE1KGS');
          `}
        </Script>
      </head>
      <body className="non-selective">
        {children}
      </body>
    </html>
  );
}
