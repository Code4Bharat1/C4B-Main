import React from "react";
import { Zap, TrendingUp, BarChart3, Layout, MessageSquare, Activity, CheckCircle2, Star } from "lucide-react";

const Redeeming = () => {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Fast Business Management",
      description: "Innumerable tools for effective operations",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Insightful Data",
      description: "Make smart business decisions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Real-time Reports",
      description: "Analyze business performance",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Layout className="w-5 h-5" />,
      title: "Custom Dashboard",
      description: "Review activities and plan ahead",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Real-time Messaging",
      description: "Enhanced customer collaboration",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Transaction Tracking",
      description: "Monitor business transactions instantly",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-16 sm:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-30"></div>

      <div className="container mx-auto px-6 sm:px-8 lg:px-48 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
          {/* Image Section */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative group">
              {/* Glowing effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
              
              {/* Image container with custom shadow */}
              <div className="relative bg-white p-3 rounded-2xl shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-300" 
                   style={{ boxShadow: "0 7px 27px 0 rgba(136,92,124,0.4)" }}>
                <img
                  src="/images/App images/odoo-crm-software-analysis.webp"
                  alt="Odoo CRM Software Analysis"
                  className="rounded-xl w-full h-auto"
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-white px-5 py-3 rounded-xl shadow-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-medium">Features</p>
                      <p className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Premium</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6 order-1 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wide">
              <Star className="w-4 h-4" />
              Powerful Features
            </div>

            {/* Main heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Redeeming Features of{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Odoo CRM
              </span>
            </h2>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${feature.color} mb-3 text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <p className="text-gray-700 text-base leading-relaxed mb-4">
                Odoo CRM provides innumerable tools for fast and effective business management. With Odoo CRM, you can access insightful data that enables you to make smart business decisions. The real-time reports analyzing business performance, available in Odoo CRM, provide you with up-to-date information that can help you to identify areas where you need to improve.
              </p>
              <p className="text-gray-700 text-base leading-relaxed">
                With a custom dashboard, provided by Odoo CRM, you can review your activities and plan your next move. The real-time messaging feature of Odoo CRM enhances collaboration with customers, allowing you to stay in touch and keep them updated on your progress.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["Fast Management", "Smart Decisions", "Real-time Data"].map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-sm font-semibold text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Redeeming;