"use client";
import React, { useState } from "react";
import { 
  FaArrowRight, 
  FaCode, 
  FaLaptopCode, 
  FaRocket, 
  FaTimes,
  FaLightbulb,
  FaUserFriends,
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaCheckCircle,
  FaStar,
  FaQuoteLeft
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const values = [
  {
    id: 1,
    title: "Software Solutions",
    description:
      "We deliver exceptional web development services tailored to meet the specific needs of businesses.",
    Icon: FaCode,
    color: "#1e40af",
    details: (
      <>
        <p>
          <strong>NEXCORE ALLIANCE LLP</strong> specializes in providing IT solutions, including but not limited to:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Web Development</li>
          <li>Mobile Application Development</li>
          <li>Custom Software Solutions</li>
          <li>E-commerce Development</li>
          <li>API Integration</li>
          <li>UI/UX Design</li>
        </ul>
        <p className="mt-4">
          Clients who engage NEXCORE ALLIANCE LLP for these services will enter into a separate Service Agreement that details the specific terms of the project, including deliverables, timelines, payments, and warranties.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "We deliver exceptional web development services tailored to meet the specific needs of businesses.",
    Icon: FaLaptopCode,
    color: "#f97316",
    details: (
      <>
        <p>
          At <strong>NEXCORE ALLIANCE LLP</strong>, we deliver exceptional web development services tailored to meet the specific needs of businesses. From creating responsive, user-friendly websites to developing sophisticated web applications, we cover it all. Our expertise includes:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Custom Website Development</strong></li>
          <li><strong>E-commerce Platforms</strong></li>
          <li><strong>Content Management Systems (CMS)</strong></li>
          <li><strong>Web Applications</strong></li>
        </ul>
        <p className="mt-4">
          We ensure that every website we develop is fully optimized for performance, SEO, and user experience, making sure your online presence stands out.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Digital Transformation",
    description:
      "We leverage cutting-edge technologies to transform your business processes, enhance customer experiences, and drive innovation.",
    Icon: FaRocket,
    color: "#3b82f6",
    details: (
      <>
        <p>
          <strong>Digital Transformation</strong> at NEXCORE ALLIANCE LLP involves leveraging cutting-edge technologies to transform your business processes, enhance customer experiences, and drive innovation. Our services include:
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li>Cloud Computing Solutions</li>
          <li>Data Analytics and Business Intelligence</li>
          <li>Automation and AI Integration</li>
          <li>Digital Strategy Consulting</li>
        </ul>
        <p className="mt-4">
          By partnering with us, businesses can seamlessly transition into the digital age, ensuring efficiency, scalability, and a competitive edge in their respective industries.
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "Innovation & Technology",
    description:
      "Staying ahead with cutting-edge technologies and innovative solutions that drive business growth and competitive advantage.",
    Icon: FaLightbulb,
    color: "#1e3a8a",
    details: (
      <>
        <p>
          At <strong>NEXCORE ALLIANCE LLP</strong>, innovation is at the heart of everything we do. We continuously explore and adopt emerging technologies to provide our clients with solutions that are not just current, but future-ready.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>AI & Machine Learning Integration</strong></li>
          <li><strong>Blockchain Solutions</strong></li>
          <li><strong>IoT Development</strong></li>
          <li><strong>Progressive Web Apps</strong></li>
          <li><strong>Microservices Architecture</strong></li>
        </ul>
        <p className="mt-4">
          Our commitment to innovation ensures that your business stays competitive and ready for the challenges of tomorrow.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Customer-Centric Approach",
    description:
      "Your success is our priority. We build lasting relationships through transparent communication and dedicated support.",
    Icon: FaUserFriends,
    color: "#f97316",
    details: (
      <>
        <p>
          <strong>Customer satisfaction</strong> is the cornerstone of our business philosophy. At NEXCORE ALLIANCE LLP, we believe in building long-term partnerships by understanding and exceeding client expectations.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Dedicated Account Managers</strong></li>
          <li><strong>Regular Progress Updates</strong></li>
          <li><strong>Flexible Engagement Models</strong></li>
          <li><strong>Post-Launch Support</strong></li>
          <li><strong>Client Training & Documentation</strong></li>
        </ul>
        <p className="mt-4">
          We don't just deliver projects; we deliver experiences that transform your business and exceed your expectations.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Quality & Security",
    description:
      "Uncompromising standards in code quality, security practices, and data protection to safeguard your business.",
    Icon: FaShieldAlt,
    color: "#1e40af",
    details: (
      <>
        <p>
          <strong>Quality and Security</strong> are non-negotiable at NEXCORE ALLIANCE LLP. We implement industry-best practices and rigorous testing protocols to ensure your applications are secure, reliable, and performant.
        </p>
        <ul className="list-disc list-inside space-y-2 mt-3">
          <li><strong>Code Review & Quality Assurance</strong></li>
          <li><strong>Security Audits & Penetration Testing</strong></li>
          <li><strong>Data Encryption & Protection</strong></li>
          <li><strong>GDPR & Compliance Standards</strong></li>
          <li><strong>Automated Testing & CI/CD</strong></li>
        </ul>
        <p className="mt-4">
          Trust us to build solutions that not only meet your business needs but also protect your most valuable assets.
        </p>
      </>
    ),
  },
];

const stats = [
  { id: 1, number: "329+", label: "Projects Completed", color: "#1e40af" },
  { id: 2, number: "24/7", label: "Active Support", color: "#f97316" },
  // { id: 2, number: "200+", label: "Happy Clients", color: "#f97316" },
  { id: 3, number: "50+", label: "Team Members", color: "#3b82f6" },
  { id: 4, number: "6+", label: "Countries", color: "#1e3a8a" },
];

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    position: "CEO, TechStart India",
    review: "NEXCORE ALLIANCE LLP transformed our digital presence completely. Their team's expertise and dedication are unmatched!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Rajesh+Kumar&background=1e40af&color=fff&size=128",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Founder, E-Shop Global",
    review: "Outstanding work on our e-commerce platform. The attention to detail and customer support exceeded our expectations.",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Sarah+Johnson&background=f97316&color=fff&size=128",
  },
  {
    id: 3,
    name: "Mohammed Ali",
    position: "CTO, Qatar Solutions",
    review: "Professional, reliable, and innovative. They delivered our project on time and within budget. Highly recommended!",
    rating: 5,
    image: "https://ui-avatars.com/api/?name=Mohammed+Ali&background=3b82f6&color=fff&size=128",
  },
];

const ValueCard = ({ value }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
        className="group relative bg-white rounded-2xl p-8 shadow-lg transition-all cursor-pointer border border-gray-200 hover:border-gray-300"
        onClick={() => setShowModal(true)}
      >
        <div className="relative z-10 space-y-6">
          {/* Icon */}
          <div 
            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform"
            style={{ backgroundColor: value.color }}
          >
            <value.Icon className="w-8 h-8 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-900">
            {value.title}
          </h3>

          {/* Description */}
          <p className="text-slate-600 leading-relaxed line-clamp-3">
            {value.description}
          </p>

          {/* Read More Button */}
          <motion.div
            className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all"
            style={{ color: value.color }}
            whileHover={{ x: 4 }}
          >
            <span>Learn More</span>
            <FaArrowRight className="w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div 
                className="p-8 relative"
                style={{ backgroundColor: value.color }}
              >
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                  onClick={() => setShowModal(false)}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>

                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <value.Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">
                    {value.title}
                  </h3>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-8 overflow-y-auto max-h-[50vh]">
                <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
                  {value.details}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-6 border-t border-gray-200 bg-gray-50">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: value.color }}
                  onClick={() => setShowModal(false)}
                >
                  Got it, thanks!
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const ValuesSection = () => {
  return (
    <section className="w-full py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-40" />
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(30, 64, 175, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(30, 64, 175, 0.1) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
      }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-50 border border-blue-200">
            <div className="w-2 h-2 bg-[#f97316] rounded-full animate-pulse" />
            <span className="text-sm text-[#1e3a8a] font-semibold">
              Our Values
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-5xl lg:text-5xl font-black text-[#1f2937] leading-tight">
            Discover the Values of{" "}
            <span className="text-[#1e40af]">
              NEXCORE ALLIANCE LLP
            </span>
          </h2>

          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We're committed to delivering excellence through innovative solutions and unwavering dedication
          </p>
        </motion.div>

        {/* Values Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {values.map((value) => (
            <ValueCard key={value.id} value={value} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-black text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-blue-100 text-sm md:text-base font-semibold">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-200 mb-4">
              <FaStar className="w-4 h-4 text-[#f97316]" />
              <span className="text-sm text-[#f97316] font-semibold">
                Client Testimonials
              </span>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-[#1f2937] mb-4">
              What Our <span className="text-[#1e40af]">Clients Say</span>
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
              >
                <FaQuoteLeft className="w-8 h-8 text-[#1e40af] opacity-20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  {testimonial.review}
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-500">{testimonial.position}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-br from-orange-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-gray-200">
            <h3 className="text-3xl md:text-4xl font-bold text-[#1f2937] text-center mb-12">
              Why Choose <span className="text-[#1e40af]">NEXCORE ALLIANCE?</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaCheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Proven Expertise</h4>
                  <p className="text-sm text-slate-600">Over 329+ successful projects delivered across multiple industries</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Timely Delivery</h4>
                  <p className="text-sm text-slate-600">98% on-time project completion rate with quality assurance</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#3b82f6] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaHeadset className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">24/7 Support</h4>
                  <p className="text-sm text-slate-600">Round-the-clock technical support and maintenance services</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#1e3a8a] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaShieldAlt className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Secure & Reliable</h4>
                  <p className="text-sm text-slate-600">Enterprise-grade security and data protection standards</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#f97316] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaLightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Innovative Solutions</h4>
                  <p className="text-sm text-slate-600">Cutting-edge technologies and modern development practices</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-[#1e40af] rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaUserFriends className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Dedicated Teams</h4>
                  <p className="text-sm text-slate-600">Experienced professionals committed to your success</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-[#1e40af] to-[#1e3a8a] rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your goals with our innovative solutions and expert team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="https://wa.me/918976104646"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#f97316] text-white font-bold rounded-xl shadow-lg hover:bg-[#ea580c] transition-colors flex items-center gap-2"
              >
                <FaArrowRight className="w-5 h-5" />
                Get Started Today
              </motion.a>
              <motion.a
                href="https://wa.me/918976104646"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-[#1e40af] font-bold rounded-xl shadow-lg hover:bg-gray-50 transition-colors"
              >
                Schedule a Consultation
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;