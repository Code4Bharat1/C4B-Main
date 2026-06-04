// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import Navbar from "../layouts/navbar/Navbar";
// import HeroSection from "./HomeCard/HeroSection";
// import ServiceSection from "../home/ServicesHome/ServiceSection";
// import Footer from "../layouts/footer/Footer";

// // ✅ Lazy load below-fold sections — reduces initial JS bundle by ~60%
// const ApproachSection = dynamic(() => import("../home/Approach/ApproachSection"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const AboutusInfo = dynamic(() => import("../Aboutus/AboutusInfo/AboutusInfo"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const ValuesSection = dynamic(() => import("../Aboutus/Values/ValuesSection"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const Clientsec = dynamic(() => import("../Clients/ClientsSec/ClientsSec"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const ApproachSec = dynamic(() => import("../Approach/ApproachSec/ApproachSec"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const ServicesSection = dynamic(() => import("../Services/ServiceSection/ServiceSec"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });
// const Awards = dynamic(() => import("../Awards/Awards"), {
//   loading: () => <div className="w-full h-96 bg-gray-50 animate-pulse rounded-lg" />,
// });

// const Home = () => {
//   return (
//     <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
//       <Navbar />
      
//       {/* Above-fold — loaded eagerly */}
//       <section id="home">
//         <HeroSection />
//       </section>

//       <section id="services">
//         <ServiceSection />
//       </section>

//       {/* Below-fold — lazy loaded on scroll */}
//       <section id="approach">
//         <ApproachSection />
//       </section>

//       <section id="about">
//         <AboutusInfo />
//       </section>

//       <section id="values">
//         <ValuesSection />
//       </section>

//       <section id="clients">
//         <Clientsec />
//       </section>

//       <section id="approach-detail">
//         <ApproachSec />
//       </section>

//       <section id="all-services">
//         <ServicesSection />
//       </section>

//       <section id="awards">
//         <Awards />
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Home;

"use client";
import React from "react";
import dynamic from "next/dynamic";
import Navbar from "../layouts/navbar/Navbar";
import HeroSection from "./HomeCard/HeroSection";
import LazySection from "./LazySection";

// ✅ ssr: false — prevents server rendering these heavy sections.
// Combined with LazySection, JS chunks only download when scrolled into view.
const ApproachSection = dynamic(
  () => import("../home/Approach/ApproachSection"),
  { ssr: false }
);

const AboutusInfo = dynamic(
  () => import("../Aboutus/AboutusInfo/AboutusInfo"),
  { ssr: false }
);

const ValuesSection = dynamic(
  () => import("../Aboutus/Values/ValuesSection"),
  { ssr: false }
);

const Clientsec = dynamic(
  () => import("../Clients/ClientsSec/ClientsSec"),
  { ssr: false }
);

const ApproachSec = dynamic(
  () => import("../Approach/ApproachSec/ApproachSec"),
  { ssr: false }
);

const ServicesSection = dynamic(
  () => import("../Services/ServiceSection/ServiceSec"),
  { ssr: false }
);

const Awards = dynamic(
  () => import("../Awards/Awards"),
  { ssr: false }
);

const Footer = dynamic(
  () => import("../layouts/footer/Footer"),
  { ssr: false }
);

import ServiceSection from "../home/ServicesHome/ServiceSection";

const Home = () => {
  return (
    <div className="w-full h-full bg-[#F9F7F7] text-[#112D4E]">
      <Navbar />

      {/* Above-fold — loaded eagerly */}
      <section id="home">
        <HeroSection />
      </section>
      <section id="services">
        <ServiceSection />
      </section>

      {/* Below-fold — JS chunks download only when scrolled into view */}
      <LazySection id="approach" minHeight={600}>
        <ApproachSection />
      </LazySection>
      <LazySection id="about" minHeight={600}>
        <AboutusInfo />
      </LazySection>
      <LazySection id="values" minHeight={600}>
        <ValuesSection />
      </LazySection>
      <LazySection id="clients" minHeight={500}>
        <Clientsec />
      </LazySection>
      <LazySection id="approach-detail" minHeight={500}>
        <ApproachSec />
      </LazySection>
      <LazySection id="all-services" minHeight={500}>
        <ServicesSection />
      </LazySection>
      <LazySection id="awards" minHeight={400}>
        <Awards />
      </LazySection>

      <LazySection id="footer" minHeight={300}>
        <Footer />
      </LazySection>
    </div>
  );
};

export default Home;