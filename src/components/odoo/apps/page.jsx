import React from "react";
import { ArrowRight, Tablet, FileText, Clipboard, ShoppingCart, CreditCard, DollarSign, Package, FolderKanban, Shield, Wrench, Lightbulb, ShoppingBag, Mail, Receipt, Calendar, Clock, Users, Star, Headphones, Zap, FileStack } from "lucide-react";

const SolutionsSection = () => {
  const features = [
    { title: "Odoo CRM", description: "A cutting-edge, user-friendly CRM portal to enhance business performance and productivity. Odoo CRM solution fits the needs of the enterprise solutions and transforms your business operation services.", icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-cyan-500", link: "/apps/odoo-crm" },
    { title: "Odoo Invoicing", description: "Smooth and various payment modes for a hassle-free business flow. Streamline your billing for quick and easy payments. No rush to send reminders for late or pending payments.", icon: <FileText className="w-6 h-6" />, color: "from-purple-500 to-pink-500", link: "/apps/odoo-invoicing" },
    { title: "Odoo Sales", description: "With Odoo Sales, you are one click away from converting business quotations into sales orders. You can edit and modify orders and ship orders. Automated invoice generation on ordered and delivered products.", icon: <ShoppingCart className="w-6 h-6" />, color: "from-green-500 to-emerald-500", link: "/apps/odoo-sales" },
    { title: "Odoo ECommerce", description: "A ready-to-use e-commerce platform with automated stock adjustments and reporting. An integrated e-commerce platform to simplify business management.", icon: <ShoppingBag className="w-6 h-6" />, color: "from-orange-500 to-red-500", link: "/apps/odoo-e-commerce" },
    { title: "Odoo Point of Sale", description: "Point of Sale from Odoo is based on a smart interface and provides extreme flexibility. Simple Odoo POS configuration to meet your precise needs.", icon: <CreditCard className="w-6 h-6" />, color: "from-indigo-500 to-purple-500", link: "/apps/odoo-sales" },
    { title: "Odoo Accounting", description: "Odoo Accounting makes business easy for you. Odoo's popular features will change your business without much effort. Fully integrated with other Odoo Accounting Apps.", icon: <DollarSign className="w-6 h-6" />, color: "from-pink-500 to-rose-500", link: "/apps/odoo-accounting" },
    { title: "Odoo Inventory", description: "Odoo Inventory tool to optimize your business with the best inventory solutions. Partnered with Odoo, we eliminate the tedious efforts you put into analyzing, optimizing, and organizing your physical inventories.", icon: <Package className="w-6 h-6" />, color: "from-cyan-500 to-blue-500", link: "/apps/odoo-inventory" },
    { title: "Odoo Project", description: "Odoo Project Management provides facilities for multi-project analysis and searches. Schedule your teams for projects, considering their vacation plan.", icon: <FolderKanban className="w-6 h-6" />, color: "from-yellow-500 to-orange-500", link: "/apps/odoo-project" },
    { title: "Odoo Quality Control", description: "Support stringent quality compliance parameters to maintain high product quality with Odoo Quality. Streamline the entire production process so that the final products meet quality requirements.", icon: <Shield className="w-6 h-6" />, color: "from-teal-500 to-cyan-500", link: "/apps/odoo-quality" },
    { title: "Odoo Maintenance", description: "Increase Overall Equipment Effectiveness with Odoo Maintenance Services. Triggering maintenance requests is made easy from the work center control panel with Odoo Maintenance.", icon: <Wrench className="w-6 h-6" />, color: "from-blue-500 to-indigo-500", link: "/apps/odoo-maintenance" },
    { title: "Odoo PLM", description: "Product Life Cycle Management for modern companies. Drive business growth with modern Odoo PLM. Transform your product value chain to rapidly innovate, develop and commercialize.", icon: <Lightbulb className="w-6 h-6" />, color: "from-purple-500 to-pink-500", link: "/apps/odoo-plm" },
    { title: "Odoo Purchase", description: "Odoo Purchase app can help you place purchase orders smoothly and efficiently. We offer you a complete software solution to handle various activities involved in purchasing.", icon: <ShoppingCart className="w-6 h-6" />, color: "from-green-500 to-teal-500", link: "/apps/odoo-purchase" },
    { title: "Odoo TimeSheet", description: "Odoo Timesheet works the way you do through the mobile app, even offline. Whether you run a small business or are a freelancer or someone who needs to manage employees from distant locations.", icon: <Clock className="w-6 h-6" />, color: "from-orange-500 to-yellow-500", link: "/apps/odoo-timesheet" },
    { title: "Odoo Email Marketing", description: "With the installation of Odoo E-mail Marketing, we assist you to gain comprehensive support for creating, sending and evaluating E-mail marketing campaigns.", icon: <Mail className="w-6 h-6" />, color: "from-red-500 to-pink-500", link: "/apps/odoo-e-mail-marketing" },
    { title: "Odoo Expenses", description: "The Odoo App for Expenses is loaded with advanced features to digitize expense management and needs only a little bit of effort to integrate it with other business modules.", icon: <Receipt className="w-6 h-6" />, color: "from-indigo-500 to-blue-500", link: "/apps/odoo-expenses" },
    { title: "Odoo Event Management", description: "Odoo event management is a complete software, capable of handling events from small to large scale. Odoo Events Features takes care of an entire range of event planner's jobs.", icon: <Calendar className="w-6 h-6" />, color: "from-pink-500 to-purple-500", link: "/apps/odoo-event-management" },
    { title: "Odoo Leaves", description: "A Simple reporting tool. Get reports in just a click for each leave request, with information per request type, department, employee and even for the entire organization.", icon: <Clock className="w-6 h-6" />, color: "from-cyan-500 to-teal-500", link: "/apps/odoo-timeoff" },
    { title: "Odoo Recruitment", description: "Create a job board, publicize job listings and easily track the number of submitted applications. Follow up with every applicant and set up a database of skills and profiles.", icon: <Users className="w-6 h-6" />, color: "from-blue-500 to-purple-500", link: "/apps/odoo-recruitment" },
    { title: "Odoo Appraisal", description: "Keep the encouragement process in your organization by performing periodical evaluations of your employees' performance. Frequently evaluate your human resources.", icon: <Star className="w-6 h-6" />, color: "from-yellow-500 to-orange-500", link: "/apps/odoo-appraisal" },
    { title: "Odoo Helpdesk", description: "Odoo Helpdesk will remain the perfect support ticket tool on your website to help you run things smoothly from one place. We offer you the effective Odoo Helpdesk module.", icon: <Headphones className="w-6 h-6" />, color: "from-green-500 to-emerald-500", link: "/apps/odoo-helpdesk" },
    { title: "Odoo Marketing Automation", description: "With Odoo Sales, A friendly visual interface to help customize your workflows easily. Planning a multi-stage campaign with various paths is much easier.", icon: <Zap className="w-6 h-6" />, color: "from-purple-500 to-indigo-500", link: "/apps/odoo-marketing-automation" },
    { title: "Odoo Documents", description: "Odoo Document Management will be an effective tool for any organization, that deals with an extensive range of documents. We enable our clients to create new documents, store key files.", icon: <FileStack className="w-6 h-6" />, color: "from-pink-500 to-red-500", link: "/apps/odoo-documents" }
  ];

  return (
    <div className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 md:py-24 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-20"></div>

      <div className="max-w-7xl mx-auto mt-24 mb-20 px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold mb-4 shadow-lg">
            <Package className="w-4 h-4" />
            <span>OUR SOLUTIONS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            End-to-end{" "}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Odoo ERP Software
            </span>{" "}
            Solution Providers
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive business solutions tailored to transform your operations and drive growth
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description, icon, color, link }) => {
  return (
    <div className="group relative flex flex-col bg-white shadow-md rounded-2xl p-6 md:p-8 h-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-100">
      {/* Decorative gradient background on hover */}
      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${color} rounded-full filter blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 -translate-y-1/2 translate-x-1/2`}></div>

      {/* Icon */}
      <div className="relative mb-6">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${color} shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
          <div className="text-white">
            {icon}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-grow space-y-4">
        <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          {description}
        </p>
      </div>

      {/* Button */}
      <div className="mt-6">
        <a
          href={link}
          className="group/btn inline-flex items-center gap-2 text-purple-600 font-bold hover:gap-3 transition-all duration-300"
        >
          <span>Read More</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
        </a>
      </div>

      {/* Bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
    </div>
  );
};

export default SolutionsSection;