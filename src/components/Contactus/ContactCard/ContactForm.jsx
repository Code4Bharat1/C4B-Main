"use client";
import React, { useEffect, useRef, useState } from "react";
import { Linkedin, Facebook, Instagram, Youtube, CheckCircle2, Phone, Mail, Building2, Users, Briefcase, MessageSquare, Sparkles, ArrowRight } from "lucide-react";

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
      label: "LinkedIn"
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/profile.php?id=61570113656994",
      color: "hover:bg-sky-500",
      label: "Facebook"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/Nexcorealliancellp/",
      color: "hover:bg-pink-500",
      label: "Instagram"
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/channel/UCYqpIltw48XxkMRLC-HCgag",
      color: "hover:bg-red-600",
      label: "YouTube"
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Requirements Analysis",
      description: "Our experts will analyze and understand your technical needs.",
      icon: MessageSquare,
      color: "from-teal-500 to-teal-700"
    },
    {
      number: 2,
      title: "Quick Follow-up",
      description: "You will receive a quick follow-up call at your convenient time.",
      icon: Phone,
      color: "from-orange-500 to-orange-700"
    },
    {
      number: 3,
      title: "NDA & Security",
      description: "We sign an NDA to ensure your idea and project remain private & secure.",
      icon: CheckCircle2,
      color: "from-green-500 to-green-700"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 select-none overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <section ref={sectionRef} className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"}`}>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold">Free Consultation Available</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white via-purple-200 to-orange-200 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your ideas into reality with our expert team
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Enhanced Form */}
            <div
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 relative overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-orange-500/5 pointer-events-none"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">Get in Touch</h2>
                      <p className="text-gray-300 text-sm">Let's discuss your project</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("firstName")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="First Name*"
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                        />
                        {focusedField === "firstName" && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 -z-10 blur-xl"></div>
                        )}
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("lastName")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Last Name*"
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                        />
                        {focusedField === "lastName" && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 -z-10 blur-xl"></div>
                        )}
                      </div>
                    </div>

                    {/* Phone and Email */}
                    <div className="space-y-4">
                      <div className="flex gap-2 relative">
                        <select
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-28 px-2 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white backdrop-blur-sm"
                        >
                          <option value="India" className="bg-slate-800">🇮🇳 +91</option>
                          <option value="USA" className="bg-slate-800">🇺🇸 +1</option>
                        </select>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Phone Number*"
                          className="flex-1 px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                        />
                        {focusedField === "phone" && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 -z-10 blur-xl"></div>
                        )}
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
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                        />
                        {focusedField === "email" && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 -z-10 blur-xl"></div>
                        )}
                      </div>
                    </div>

                    {/* Company and Size */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          placeholder="Company Name*"
                          className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-white placeholder-gray-400 backdrop-blur-sm"
                        />
                        {focusedField === "company" && (
                          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 -z-10 blur-xl"></div>
                        )}
                      </div>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white backdrop-blur-sm"
                      >
                        <option value="" className="bg-slate-800">Company Size*</option>
                        <option value="1-10" className="bg-slate-800">1-10 employees</option>
                        <option value="11-50" className="bg-slate-800">11-50 employees</option>
                        <option value="51-200" className="bg-slate-800">51-200 employees</option>
                        <option value="201-500" className="bg-slate-800">201-500 employees</option>
                        <option value="500+" className="bg-slate-800">500+ employees</option>
                      </select>
                    </div>

                    {/* Business Needs */}
                    <select
                      name="businessNeeds"
                      value={formData.businessNeeds}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white backdrop-blur-sm"
                    >
                      <option value="" className="bg-slate-800">Select your Business Needs*</option>
                      <option value="Web Development" className="bg-slate-800">Web Development</option>
                      <option value="Mobile App" className="bg-slate-800">Mobile App Development</option>
                      <option value="AI Solutions" className="bg-slate-800">AI Solutions</option>
                      <option value="Cloud Services" className="bg-slate-800">Cloud Services</option>
                      <option value="DevOps" className="bg-slate-800">DevOps</option>
                      <option value="Consulting" className="bg-slate-800">Consulting</option>
                      <option value="Other" className="bg-slate-800">Other</option>
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
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none text-white placeholder-gray-400 backdrop-blur-sm"
                      ></textarea>
                      {focusedField === "requirements" && (
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/20 to-purple-500/20 -z-10 blur-xl"></div>
                      )}
                      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                        {formData.requirements.length}/15
                      </div>
                    </div>

                    {/* Submit Button */}
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
                      className="w-full bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-bold py-5 px-8 rounded-xl hover:shadow-2xl hover:shadow-orange-500/50 transform hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <span>Schedule a Consultation</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </div>
                    </button>

                    <p className="text-xs text-gray-400 text-center">
                      🔒 Your information is secure. By submitting, you agree to let NEXCORE ALLIANCE contact you.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - What Happens Next */}
            <div
              className={`transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                  <h2 className="text-4xl font-bold text-white mb-8 flex items-center gap-3">
                    <Sparkles className="w-8 h-8 text-orange-400" />
                    What Happens Next?
                  </h2>

                  <div className="space-y-6">
                    {steps.map((step, index) => (
                      <div key={index} className="flex gap-6 group">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                            <step.icon className="w-8 h-8 text-white" />
                          </div>
                          {index < steps.length - 1 && (
                            <div className="w-0.5 h-12 bg-gradient-to-b from-white/30 to-transparent mx-auto mt-4"></div>
                          )}
                        </div>
                        <div className="flex-1 pt-3">
                          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-5 border border-white/10 group-hover:border-white/30 transition-all">
                            <div className="flex items-center gap-2 mb-2">
                              <span className="text-orange-400 font-bold text-sm">Step {step.number}</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-orange-400 mb-1">500+</div>
                    <div className="text-gray-300 text-sm">Projects</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-purple-400 mb-1">98%</div>
                    <div className="text-gray-300 text-sm">Satisfied</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center hover:scale-105 transition-transform">
                    <div className="text-3xl font-bold text-green-400 mb-1">24/7</div>
                    <div className="text-gray-300 text-sm">Support</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                  <h3 className="font-semibold text-white mb-4 text-center flex items-center justify-center gap-2">
                    <Sparkles className="w-5 h-5 text-orange-400" />
                    Connect With Us
                  </h3>
                  <div className="flex justify-center gap-3">
                    {socialLinks.map(({ icon: Icon, href, color, label }, index) => (
                      <a
                        key={index}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 ${color} hover:scale-110`}
                        title={label}
                      >
                        <Icon className="w-6 h-6 text-white relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;