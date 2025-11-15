import React from "react";
import { Mail, Phone, MapPin, FileText, Clock, Zap, MessageCircle, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "nexcorealliance@gmail.com",
      link: "mailto:nexcorealliance@gmail.com",
      color: "from-blue-500 to-cyan-500",
      responseTime: "24-48 hours"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91-9594430295",
      link: "tel:+919594430295",
      color: "from-green-500 to-emerald-500",
      responseTime: "Immediate"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      value: "Off BKC, Mumbai, India 400070",
      link: "https://www.google.com/maps/place/NEXCORE ALLIANCE LLP/@19.0726494,72.8804081,17z",
      color: "from-purple-500 to-pink-500",
      responseTime: "Visit us"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Online Form",
      value: "Contact Form",
      link: "/contactus",
      color: "from-orange-500 to-red-500",
      responseTime: "24 hours"
    }
  ];

  const responseTimes = [
    { label: "Email: 24-48 hours", color: "bg-green-400" },
    { label: "Phone: Immediate", color: "bg-blue-400" },
    { label: "Form: 24 hours", color: "bg-purple-400" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-50 px-4 py-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-3xl overflow-hidden shadow-2xl mb-12 mt-24 md:mt-28">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full filter blur-2xl animate-pulse"></div>
            <div className="absolute bottom-10 right-10 w-40 h-40 bg-cyan-300 rounded-full filter blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative px-6 py-12 md:px-12 md:py-16 lg:px-20 lg:py-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
              <MessageCircle className="w-4 h-4" />
              <span>We're Here to Help</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              Contact{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-blue-100 text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed">
              We're here to help and answer any questions you might have
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <p className="text-gray-600 text-lg md:text-xl text-center max-w-3xl mx-auto leading-relaxed mb-10">
            We're here to assist you! Reach out through any of the following methods:
          </p>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-10">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden transform hover:-translate-y-1"
              >
                {/* Decorative gradient on hover */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${method.color} rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>

                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${method.color} mb-4 text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  {method.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-blue-600 group-hover:text-blue-700 font-medium mb-2 break-all">
                    {method.value}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>{method.responseTime}</span>
                  </div>
                </div>

                {/* Arrow indicator */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 text-blue-600" />
                </div>
              </a>
            ))}
          </div>

          {/* CTA Section */}
          <div className="relative bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-8 shadow-xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.5),transparent_50%)]"></div>
            </div>

            <div className="relative text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <p className="text-white text-lg font-semibold mb-2">
                We value your inquiries and will respond promptly.
              </p>
              <p className="text-blue-100 text-sm">
                Our team is ready to assist you with any questions or concerns
              </p>
            </div>
          </div>

          {/* Response Times */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 mt-10">
            {responseTimes.map((time, index) => (
              <div key={index} className="flex items-center text-gray-600 font-medium">
                <span className={`w-2 h-2 ${time.color} rounded-full mr-2 animate-pulse`}></span>
                {time.label}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
              24/7
            </div>
            <p className="text-gray-600 text-sm font-medium">Support Available</p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
              &lt;24h
            </div>
            <p className="text-gray-600 text-sm font-medium">Response Time</p>
          </div>
          <div className="text-center bg-white rounded-xl p-6 shadow-lg">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <p className="text-gray-600 text-sm font-medium">Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
}