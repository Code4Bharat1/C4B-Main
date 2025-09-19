import Home from "@/components/home/Home";

export const metadata = {
  title: "Code4Bharat",
  description:
    "At Code4Bharat, we drive your business forward with custom web and mobile app development, strategic IT consulting, and robust e-commerce solutions tailored to your needs.",
  openGraph: {
    title: "Code4Bharat",
    description:
      "At Code4Bharat, we drive your business forward with custom web and mobile app development, strategic IT consulting, and robust e-commerce solutions tailored to your needs.",
    url: "https://www.yourwebsite.com/your-page",
    type: "website",
    images: [
      {
        url: "https://media.licdn.com/dms/image/v2/D4D0BAQHvTMcK1-GpCw/company-logo_200_200/company-logo_200_200/0/1728390314876/code4bharat_logo?e=2147483647&v=beta&t=8FYnrV5k1jaxQHZCAKGij_DDJlKBhJaIBr6AgoRisHs",
        width: 200,
        height: 200,
        alt: "Code4Bharat Logo",
      },
    ],
  },
};

export default function Page() {
  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Home />
    </div>
  );
}
