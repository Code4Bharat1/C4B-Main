import React from "react";
import { CheckCircle2, Database, RefreshCw, Code, Server, Workflow } from "lucide-react";

const EcommerceBenefits = () => {
  const benefits1 = [
    {
      icon: <Database className="w-5 h-5" />,
      title: "Backup the legacy system",
      description: "to sustain the data on the server of Odoo ERP",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Workflow className="w-5 h-5" />,
      title: "Deploy a test lab or pilot project",
      description: "to evaluate Odoo ERP",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: "Migrate the modules",
      description: "and re-create modules that no longer exist or that were custom-made",
      color: "from-orange-500 to-red-500"
    }
  ];

  const benefits2 = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Integration and enhancement",
      description: "of legacy systems with new Odoo ERP Internet-driven technologies and ERP version Odoo Migration Service",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Odoo Migration of systems",
      description: "to new architecture, languages, databases and web-based environments",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Migrating to new operating environment",
      description: "Re-enabling, re-hosting and re-engineering, Web Enablement, Application Upgradation",
      color: "from-pink-500 to-rose-500"
    }
  ];

  const BenefitCard = ({ title, benefits, mainIcon, accentColor }) => (
    <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
      {/* Decorative gradient background */}
      <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${accentColor} rounded-full filter blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>

      {/* Header */}
      <div className="flex items-start gap-4 mb-6 relative z-10">
        <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${accentColor} rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <img
            src={mainIcon}
            alt="Service Icon"
            className="w-12 h-12 object-contain"
          />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight pt-2">
          {title}
        </h3>
      </div>

      {/* Benefits List */}
      <div className="space-y-4 relative z-10">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="group/item flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            <div className={`flex-shrink-0 w-10 h-10 bg-gradient-to-br ${benefit.color} rounded-lg flex items-center justify-center text-white shadow-md group-hover/item:scale-110 transition-transform duration-300`}>
              {benefit.icon}
            </div>
            <div className="flex-1">
              <p className="text-gray-900 font-semibold text-sm mb-1">
                {benefit.title}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${accentColor} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
    </div>
  );

  return (
    <section
      className="relative py-16 sm:py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/images/odoo-images/bg-maps-dots.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-gray-50/90 to-white/95"></div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 sm:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <CheckCircle2 className="w-4 h-4" />
            <span>Migration Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our migration services are{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              instrumental for
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive solutions to modernize and migrate your business applications seamlessly
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <BenefitCard
            title="Legacy System Migration"
            benefits={benefits1}
            mainIcon="/images/odoo-images/odoo-icons/odoo-migration-service-for-business-application-to-stategic-platforms.webp"
            accentColor="from-purple-500 to-pink-500"
          />

          <BenefitCard
            title="System Transformation"
            benefits={benefits2}
            mainIcon="/images/odoo-images/odoo-icons/odoo-migration-service-icon.png"
            accentColor="from-blue-500 to-cyan-500"
          />
        </div>

        {/* Bottom stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <p className="text-gray-600 font-semibold">Successful Migrations</p>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-600 font-semibold">Data Integrity</p>
          </div>
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-600 font-semibold">Expert Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceBenefits;