import "./globals.css";

export const metadata = {
  title: "Code4Bharat",
  description: "Code4Bharat",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="non-selective">{children}</body>
    </html>
  );
}
