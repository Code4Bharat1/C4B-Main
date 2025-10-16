import React from 'react';
import { MessageSquare, TrendingUp, Users, Zap, CheckCircle2, Target } from 'lucide-react';

const OdooCRM = () => {
  const features = [
    { icon: <MessageSquare className="w-5 h-5" />, text: "Real-time Messaging", color: "from-blue-500 to-cyan-500" },
    { icon: <Users className="w-5 h-5" />, text: "Lead Management", color: "from-purple-500 to-pink-500" },
    { icon: <Target className="w-5 h-5" />, text: "Online Campaigns", color: "from-orange-500 to-red-500" },
    { icon: <TrendingUp className="w-5 h-5" />, text: "Business Growth", color: "from-green-500 to-emerald-500" }
  ];

  const benefits = [
    "Technology-driven customer experience",
    "Effective relationship building",
    "Scalable and flexible platform",
    "Enhanced business performance"
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#211f3b] via-[#2a2650] to-[#211f3b] text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Background Images with hover effect */}
      <div
        className="absolute bottom-0 right-0 w-[264px] h-[362px] bg-contain bg-no-repeat opacity-30 hover:opacity-50 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-6.png)' }}
      ></div>
      <div
        className="absolute top-0 left-0 w-[366px] h-[501px] bg-contain bg-no-repeat opacity-30 hover:opacity-50 transition-opacity duration-500"
        style={{ backgroundImage: 'url(/images/App images/bg-art-5.png)' }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:p-32 gap-12">
        {/* Left Section: CRM Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative group">
            {/* Glowing border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition duration-500"></div>
            
            {/* Image container */}
            <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 p-3 rounded-2xl backdrop-blur-sm border border-purple-500/30">
              <img
                src="/images/App images/odoo-crm-software-development.gif"
                alt="Odoo CRM Dashboard"
                className="rounded-xl w-full h-auto shadow-2xl"
              />
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 px-5 py-3 rounded-xl shadow-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <div>
                    <p className="text-xs font-medium">Live Demo</p>
                    <p className="text-sm font-bold">Interactive</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-500/20 backdrop-blur-sm border border-purple-400/30 px-4 py-2 rounded-full text-sm font-semibold">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span>Powerful CRM Solution</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Odoo CRM Software to{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Manage Leads
            </span>{" "}
            and Real-time Messages
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Odoo CRM offers a technology-driven approach to enhance customer experience and cater to their needs effortlessly. With real-time messaging and effective online campaigns, it helps grab the attention of leads and build reliable relationships with customers. Utilize its features to leverage key resources and augment your business operations.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3 py-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-3 rounded-lg hover:bg-white/10 hover:border-purple-400/30 transition-all duration-300 group"
              >
                <div className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <span className="text-sm font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Subheading */}
          <h3 className="text-2xl sm:text-3xl font-bold pt-4">
            Redefine{" "}
            <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Scalability and Flexibility
            </span>{" "}
            with Odoo CRM
          </h3>

          {/* Additional Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            A cutting-edge, user-friendly Odoo CRM portal to enhance business performance and productivity. Odoo CRM solution fits the needs of enterprise solutions and transforms your business operation services.
          </p>

          {/* Benefits Checklist */}
          <div className="space-y-3 pt-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                  {benefit}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
              <span className="relative z-10">Explore Features</span>
              <Zap className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdooCRM;