"use client";
import React, { useEffect, useRef, useState } from "react";
import { Linkedin, Facebook, Instagram, Youtube, CheckCircle2, Phone, Mail, MessageSquare, Sparkles, ArrowRight, Shield, Zap, Clock } from "lucide-react";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    country: "India",
    company: "",
    companySize: "",
    businessNeeds: "",
    requirements: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: "-100px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.company ||
      !formData.requirements
    ) {
      alert("कृपया सभी आवश्यक फील्ड भरें (Please fill all required fields)");
      return;
    }

    setIsSubmitting(true);

    try {
      const whatsappNumber = "918976104646";

      const message = `🔔 *New Consultation Request*

👤 *Name:* ${formData.firstName} ${formData.lastName}
📱 *Phone:* ${formData.phone}
📧 *Email:* ${formData.email}
🌍 *Country:* ${formData.country}
🏢 *Company:* ${formData.company}
📊 *Company Size:* ${formData.companySize || "Not specified"}
💼 *Business Needs:* ${formData.businessNeeds || "Not specified"}

📝 *Requirements:*
${formData.requirements}

---
Sent from Nexcore Alliance Website`;

      const encodedMessage = encodeURIComponent(message);
      const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

      const newWindow = window.open(whatsappURL, "_blank");
      if (newWindow) {
        setTimeout(() => {
          setFormData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            country: "India",
            company: "",
            companySize: "",
            businessNeeds: "",
            requirements: "",
          });
          alert("Message sent successfully! WhatsApp should open now.");
        }, 1000);
      } else {
        alert("Please allow pop-ups for this site to send WhatsApp messages.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Something went wrong. Please try again.");
    }

    setIsSubmitting(false);
  };

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/105730702/admin/dashboard",
      color: "hover:bg-blue-600",
      gradient: "from-blue-600 to-blue-700",
      label: "LinkedIn"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61570113656994",
      color: "hover:bg-sky-500",
      gradient: "from-sky-500 to-blue-500",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/Nexcorealliancellp/",
      color: "hover:bg-pink-500",
      gradient: "from-pink-500 to-purple-600",
      label: "Instagram"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag",
      color: "hover:bg-red-600",
      gradient: "from-red-600 to-red-700",
      label: "YouTube"
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Requirements Analysis",
      description: "Our experts will analyze and understand your technical needs.",
      icon: MessageSquare,
      color: "bg-gradient-to-br from-[#1e40af] to-[#1e3a8a]",
      iconBg: "bg-blue-100"
    },
    {
      number: 2,
      title: "Quick Follow-up",
      description: "You will receive a quick follow-up call at your convenient time.",
      icon: Phone,
      color: "bg-gradient-to-br from-[#f97316] to-[#ea580c]",
      iconBg: "bg-orange-100"
    },
    {
      number: 3,
      title: "NDA & Security",
      description: "We sign an NDA to ensure your idea and project remain private & secure.",
      icon: CheckCircle2,
      color: "bg-gradient-to-br from-green-500 to-emerald-600",
      iconBg: "bg-green-100"
    }
  ];

  const features = [
    { icon: Shield, text: "Secure & Private", color: "text-blue-600" },
    { icon: Zap, text: "Fast Response", color: "text-orange-500" },
    { icon: Clock, text: "24/7 Available", color: "text-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 select-none overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-25"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Animated grid pattern */}
      <div
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.15) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.15) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Hero Header */}
          <div className={`text-center mb-16 sm:mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-orange-50 border-2 border-blue-200 rounded-full px-6 sm:px-8 py-3 mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#f97316] animate-pulse" />
              <span className="text-[#1e3a8a] text-xs sm:text-sm font-bold">Free Consultation Available</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e40af] animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#1f2937] mb-5 sm:mb-6 leading-tight">
              Let's Build Something{" "}
              <span className="bg-gradient-to-r from-[#1e40af] to-[#f97316] bg-clip-text text-transparent">
                Amazing
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Transform your ideas into reality with our expert team
            </p>
            
            {/* Feature Pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 bg-white border-2 border-gray-200 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <feature.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`} />
                  <span className="text-xs sm:text-sm font-semibold text-gray-700">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Side - Enhanced Form */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 shadow-2xl border-2 border-gray-200 relative overflow-hidden hover:shadow-3xl transition-all duration-500">
                {/* Decorative corner elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-bl-full opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-orange-100 to-transparent rounded-tr-full opacity-50"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-8">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl sm:text-3xl font-black text-gray-900">Get in Touch</h2>
                      <p className="text-gray-600 text-xs sm:text-sm font-medium">Let's discuss your project</p>
                    </div>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative group">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("firstName")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="First Name*"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 rounded-xl sm:rounded-2xl transition-all text-gray-900 placeholder-gray-400 text-sm sm:text-base font-medium shadow-sm hover:shadow-md ${
                            focusedField === "firstName" ? "border-[#1e40af] bg-blue-50 shadow-lg shadow-blue-100" : "border-gray-200"
                          }`}
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("lastName")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Last Name*"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 rounded-xl sm:rounded-2xl transition-all text-gray-900 placeholder-gray-400 text-sm sm:text-base font-medium shadow-sm hover:shadow-md ${
                            focusedField === "lastName" ? "border-[#1e40af] bg-blue-50 shadow-lg shadow-blue-100" : "border-gray-200"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Phone and Email */}
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex gap-2 sm:gap-3 relative">
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-24 sm:w-28 px-2 sm:px-3 py-3 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all"
                        >
                          <option value="India">🇮🇳 +91</option>
                          <option value="USA">🇺🇸 +1</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Phone Number*"
                          className={`flex-1 px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 rounded-xl sm:rounded-2xl transition-all text-gray-900 placeholder-gray-400 text-sm sm:text-base font-medium shadow-sm hover:shadow-md ${
                            focusedField === "phone" ? "border-[#1e40af] bg-blue-50 shadow-lg shadow-blue-100" : "border-gray-200"
                          }`}
                        />
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Work Email*"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 rounded-xl sm:rounded-2xl transition-all text-gray-900 placeholder-gray-400 text-sm sm:text-base font-medium shadow-sm hover:shadow-md ${
                            focusedField === "email" ? "border-[#1e40af] bg-blue-50 shadow-lg shadow-blue-100" : "border-gray-200"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Company and Size */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Company Name*"
                          className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 rounded-xl sm:rounded-2xl transition-all text-gray-900 placeholder-gray-400 text-sm sm:text-base font-medium shadow-sm hover:shadow-md ${
                            focusedField === "company" ? "border-[#1e40af] bg-blue-50 shadow-lg shadow-blue-100" : "border-gray-200"
                          }`}
                        />
                      </div>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all"
                      >
                        <option value="">Company Size*</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-500">201-500 employees</option>
                        <option value="500+">500+ employees</option>
                      </select>
                    </div>

                    {/* Business Needs */}
                    <select
                      name="businessNeeds"
                      value={formData.businessNeeds}
                      onChange={handleInputChange}
                      className="w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 border-gray-200 rounded-xl sm:rounded-2xl text-gray-900 text-sm sm:text-base font-medium shadow-sm hover:shadow-md transition-all"
                    >
                      <option value="">Select your Business Needs*</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App Development</option>
                      <option value="AI Solutions">AI Solutions</option>
                      <option value="Cloud Services">Cloud Services</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Consulting">Consulting</option>
                      <option value="Other">Other</option>
                    </select>

                    {/* Requirements */}
                    <div className="relative">
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField("requirements")}
                        onBlur={() => setFocusedField(null)}
                        rows="4"
                        placeholder="Tell us about your project requirements (minimum 15 characters)*"
                        className={`w-full px-4 sm:px-5 py-3 sm:py-4 bg-gray-50 border-2 rounded-xl sm:rounded-2xl transition-all resize-none text-gray-900 placeholder-gray-400 text-sm sm:text-base font-medium shadow-sm hover:shadow-md ${
                          focusedField === "requirements" ? "border-[#1e40af] bg-blue-50 shadow-lg shadow-blue-100" : "border-gray-200"
                        }`}
                      ></textarea>
                      <div className="absolute bottom-3 right-3 text-xs font-semibold text-gray-400 bg-white px-2 py-1 rounded-lg">
                        {formData.requirements.length}/15
                      </div>
                    </div>

                    {/* Enhanced Submit Button */}
                    <button
                      onClick={handleSubmit}
                      disabled={
                        isSubmitting ||
                        !formData.firstName ||
                        !formData.lastName ||
                        !formData.phone ||
                        !formData.email ||
                        !formData.company ||
                        !formData.requirements ||
                        formData.requirements.length < 15
                      }
                      className="w-full bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#1e40af] text-white font-bold py-4 sm:py-5 px-6 sm:px-8 rounded-xl sm:rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group text-sm sm:text-base"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#ea580c] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <React.Fragment>
                            <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            <span>Schedule a Consultation</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </React.Fragment>
                        )}
                      </div>
                    </button>

                    <div className="flex items-center justify-center gap-2 text-xs text-gray-500 bg-gray-50 py-3 px-4 rounded-xl border border-gray-200">
                      <Shield className="w-4 h-4 text-green-600" />
                      <p className="font-medium">
                        Your information is secure. By submitting, you agree to let NEXCORE ALLIANCE contact you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced What Happens Next */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-6 sm:space-y-8">
                <div className="bg-white rounded-3xl sm:rounded-[2rem] p-6 sm:p-10 border-2 border-gray-200 shadow-2xl hover:shadow-3xl transition-all duration-500 relative overflow-hidden">
                  {/* Decorative corner */}
                  <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-orange-100 to-transparent rounded-br-full opacity-50"></div>
                  
                  <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8 sm:mb-10 flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#f97316] to-[#ea580c] rounded-2xl flex items-center justify-center shadow-lg">
                        <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                      </div>
                      What Happens Next?
                    </h2>

                    <div className="space-y-6 sm:space-y-8">
                      {steps.map((step, index) => (
                        <div key={index} className="flex gap-4 sm:gap-6 group">
                          <div className="flex-shrink-0">
                            <div className={`w-14 h-14 sm:w-18 sm:h-18 ${step.color} rounded-2xl sm:rounded-3xl flex items-center justify-center shadow-xl transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                              <step.icon className="w-7 h-7 sm:w-9 sm:h-9 text-white" />
                            </div>
                            {index < steps.length - 1 && (
                              <div className="w-0.5 h-12 sm:h-16 bg-gradient-to-b from-gray-300 to-gray-200 mx-auto mt-4 rounded-full"></div>
                            )}
                          </div>
                          <div className="flex-1 pt-2 sm:pt-3">
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 border-2 border-gray-200 group-hover:border-[#1e40af] transition-all duration-300 shadow-md group-hover:shadow-xl group-hover:scale-[1.02]">
                              <div className="flex items-center gap-2 mb-3">
                                <span className="bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white font-black text-xs sm:text-sm px-3 py-1 rounded-full shadow-md">
                                  Step {step.number}
                                </span>
                              </div>
                              <h3 className="text-lg sm:text-xl font-black text-gray-900 mb-2">{step.title}</h3>
                              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Enhanced Stats Section */}
                <div className="grid grid-cols-3 gap-3 sm:gap-5">
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-blue-200 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] bg-clip-text text-transparent mb-2">329+</div>
                    <div className="text-gray-700 text-xs sm:text-sm font-bold">Projects</div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-orange-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-orange-200 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#f97316] to-[#ea580c] bg-clip-text text-transparent mb-2">94%</div>
                    <div className="text-gray-700 text-xs sm:text-sm font-bold">Satisfied</div>
                  </div>
                  <div className="bg-gradient-to-br from-white to-blue-50 rounded-2xl sm:rounded-3xl p-5 sm:p-7 border-2 border-blue-200 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-lg">
                    <div className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-[#1e40af] to-[#1e3a8a] bg-clip-text text-transparent mb-2">24/7</div>
                    <div className="text-gray-700 text-xs sm:text-sm font-bold">Support</div>
                  </div>
                </div>

                {/* Enhanced Social Links */}
                <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-500">
                  <h3 className="font-black text-gray-900 mb-6 text-center flex items-center justify-center gap-2 text-base sm:text-lg">
                    <Sparkles className="w-5 h-5 text-[#f97316] animate-pulse" />
                    Connect With Us
                    <Sparkles className="w-5 h-5 text-[#1e40af] animate-pulse" style={{ animationDelay: '0.5s' }} />
                  </h3>
                  <div className="flex justify-center gap-4">
                    {socialLinks.map(({ icon: Icon, href, gradient, label }, index) => (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-1 border-2 border-gray-200 hover:border-transparent shadow-md hover:shadow-xl overflow-hidden`}
                        title={label}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-gray-700 group-hover:text-white relative z-10 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;