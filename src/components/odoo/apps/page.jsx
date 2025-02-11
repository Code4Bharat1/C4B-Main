import React from "react";
import Link from "next/link";
import { FaTabletAlt, FaFileInvoice, FaRegClipboard } from "react-icons/fa"; // Importing icons

const SolutionsSection = () => {
  const features = [
    {
      title: "Odoo CRM",
      description:
        "A cutting-edge, user-friendly CRM portal to enhance business performance and productivity. Odoo CRM solution fits the needs of the enterprise solutions and transforms your business operation services.",
      IconComponent: FaTabletAlt,
      link: "/apps/odoo-crm",
    },
    {
      title: "Odoo Invoicing",
      description:
        "Smooth and various payment modes for a hassle-free business flow. Streamline your billing for quick and easy payments. No rush to send reminders for late or pending payments. Odoo Invoicing provides automated follow-ups with simple and effective configuration.",
      IconComponent: FaFileInvoice,
      link: "/apps/odoo-invoicing",
    },
    {
      title: "Odoo Sales",
      description:
        "With Odoo Sales, you are one click away from converting business quotations into sales orders. You can edit and modify orders and ship orders. Automated invoice generation on ordered and delivered products with details on time, quantities and materials. Easy tracking of order flow with Odoo Sales.",
      IconComponent: FaRegClipboard,
      link: "/apps/odoo-sales",
    },
    {
      title: "Odoo ECommerce",
      description:
        "A ready-to-use e-commerce platform with automated stock adjustments and reporting. An integrated e-commerce platform to simplify business management. A user-friendly customer portal to cater to the needs of your customers in no time. Furnish customers with intuitive features to download invoices and track their orders and delivery status. Run your business from anywhere with ease.",
      IconComponent: FaTabletAlt,
      link: "/apps/odoo-e-commerce",
    },
    {
      title: "Odoo Point of Sale",
      description:
        "Point of Sale from Odoo is based on a smart interface and provides extreme flexibility. Simple Odoo POS configuration to meet your precise needs. Integrated with various Odoo solutions like accounting to make payments simple and reliable. Sell your products without breaking a sweat with Odoo Point of Sale. Get everything your business needs with Odoo POS.",
      IconComponent: FaFileInvoice,
      link: "#",
    },
    {
      title: "Odoo Accounting",
      description:
        "Odoo Accounting makes business easy for you. Odoo's popular features will change your business without much effort. Fully integrated with other Odoo Accounting Apps, business flow is automated.",
      IconComponent: FaRegClipboard,
      link: "#",
    },
    {
      title: "Odoo Inventory",
      description:
        "Odoo Inventory tool to optimize your business with the best inventory solutions. Partnered with Odoo, we eliminate the tedious efforts you put into analyzing, optimizing, and organizing your physical inventories. Overcome your inventory inconveniences with Odoo Inventory.",
      IconComponent: FaTabletAlt,
      link: "#",
    },
    {
      title: "Odoo Project",
      description:
        "Odoo Project Management provides facilities for multi-project analysis and searches. Schedule your teams for projects, considering their vacation plan. With a detailed forecast on your project performance and employee availability and plan ahead for emerging projects. Increase your business returns by comparing your estimation with real-time sheets.",
      IconComponent: FaFileInvoice,
      link: "/apps/odoo-project",
    },
    {
      title: "Odoo Quality Control",
      description:
        "Support stringent quality compliance parameters to maintain high product quality with Odoo Quality. Streamline the entire production process so that the final products are more likely to meet quality requirements before reaching the external market.",
      IconComponent: FaRegClipboard,
      link: "/apps/odoo-quality",
    },
    {
      title: "Odoo Maintenance",
      description:
        "Increase Overall Equipment Effectiveness with Odoo Maintenance Services. Triggering maintenance requests is made easy from the work center control panel with Odoo Maintenance. Effective communication reduces downtime and makes your manufacturing more efficient.",
      IconComponent: FaTabletAlt,
      link: "/apps/odoo-maintenance",
    },
    {
      title: "Odoo PLM",
      description:
        "Product Life Cycle Management for modern companies. Drive business growth with modern Odoo PLM. Transform your product value chain to rapidly innovate, develop and commercialize.",
      IconComponent: FaFileInvoice,
      link: "/apps/odoo-plm",
    },
    {
      title: "Odoo Purchase",
      description:
        "Odoo Purchase app can help you place purchase orders smoothly and efficiently. At Oodu Implementers, we offer you a complete software solution to handle various activities involved in purchasing such as seller management, seller bills, supply chain and product variation management, stock update and product quality inspections.",
      IconComponent: FaRegClipboard,
      link: "/apps/odoo-purchase",
    },
    {
      title: "Odoo TimeSheet",
      description:
        "Odoo Timesheet works the way you do through the mobile app, even offline. Whether you run a small business or are a freelancer or someone who needs to manage employees from distant locations, this is your tool to be as flexible as you are. Just sign in and start tracking your time or resources time with any device, from anywhere.",
      IconComponent: FaTabletAlt,
      link: "/apps/odoo-timesheet",
    },
    {
      title: "Odoo Email Marketing",
      description:
        "With the installation of Odoo E-mail Marketing, Oodu Implementers assists you to gain comprehensive support for creating, sending and evaluating E-mail marketing campaigns. Odoo's feature-rich E-mail marketing app allows you to manage and analyze the delivery of messages and their status with zero hassles.",
      IconComponent: FaFileInvoice,
      link: "/apps/odoo-e-mail-marketing",
    },
    {
      title: "Odoo Expenses",
      description:
        "The Odoo App for Expenses is loaded with advanced features to digitize expense management and needs only a little bit of effort to integrate it with other business modules for seamless operations. Odoo Expenses app makes your job of managing the expenses of your employees very easier.",
      IconComponent: FaRegClipboard,
      link: "#",
    },
    {
      title: "Odoo Event Management",
      description:
        "Odoo event management is a complete software, capable of handling events from small to large scale. Odoo Events Features takes care of an entire range of event planner's jobs from organizing events and selling tickets to increasing visibility & promotions.",
      IconComponent: FaTabletAlt,
      link: "#",
    },
    {
      title: "Odoo Leaves",
      description:
        "A Simple reporting tool. Get reports in just a click for each leave request, with information per request type, department, employee and even for the entire organization. View statistics on each leave and plan for the upcoming task to ensure you maintain productivity at the highest level.",
      IconComponent: FaFileInvoice,
      link: "#",
    },
    {
      title: "Odoo Recruitment",
      description:
        "Create a job board, publicize job listings and easily track the number of submitted applications. Follow up with every applicant and set up a database of skills and profiles with indexed documents.",
      IconComponent: FaRegClipboard,
      link: "/apps/odoo-recruitment",
    },
    {
      title: "Odoo Appraisal",
      description:
        "Keep the encouragement process in your organization by performing periodical evaluations of your employees' performance. Frequently evaluate your human resources to provide benefits for your employees and for your company, whether it’s a small business or a large corporation.",
      IconComponent: FaTabletAlt,
      link: "#",
    },
    {
      title: "Odoo Helpdesk",
      description:
        "Odoo Helpdesk will remain the perfect support ticket tool on your website to help you run things smoothly from one place. At Oodu Implementers, we offer you the effective Odoo Helpdesk module that enables you to provide anytime support to the existing customer as well as encourage potential customers to reach out to you regarding their queries and concerns.",
      IconComponent: FaFileInvoice,
      link: "#",
    },
    {
      title: "Odoo Marketing Automation",
      description:
        "With Odoo Sales, A friendly visual interface to help customize your workflows easily. Planning a multi-stage campaign with various paths is much easier similar to two-step campaigns. Insert new actions and set up time triggers directly on your workflow.",
      IconComponent: FaRegClipboard,
      link: "#",
    },
    {
      title: "Odoo Documents",
      description:
        "Odoo Document Management will be an effective tool for any organization, that deals with an extensive range of documents. At Oodu Implementers, we enable our clients to create new documents, store key files, manage recorded data, retrieve and protect documents conveniently with Odoo Documents Software.",
      IconComponent: FaTabletAlt,
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-100 py-8 md:py-16">
      <div className="max-w-7xl mx-auto mt-44 mb-40 px-4 md:px-8">
        {/* Section Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
          End-to-end Odoo ERP Software Solution Providers
        </h2>
        <p className="text-purple-600 text-center mb-6 md:mb-8">OUR SOLUTIONS</p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              IconComponent={feature.IconComponent}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// FeatureCard Component
const FeatureCard = ({ title, description, IconComponent, link }) => {
  return (
    <div className="group relative flex flex-col bg-white shadow-md rounded-lg p-6 md:p-8 w-full h-auto text-left overflow-hidden transition duration-300 transform hover:shadow-lg hover:bg-white hover:-translate-y-2">
      {/* Decorative Circle */}
      <svg
        className="absolute -top-12 -right-10 w-32 h-28 md:w-33 md:h-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" /> {/* from-blue-500 */}
            <stop offset="100%" stopColor="#14b8a6" /> {/* to-teal-500 */}
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="50" fill="url(#gradient)" />
      </svg>

      {/* Icon Inside Circle */}
      <div className="absolute -top-[-6px] -right-[-6px] flex items-center justify-center w-10 h-10 md:w-12 md:h-12 transition-all duration-300 group-hover:w-14 group-hover:h-14 group-hover:-top-[-10px] group-hover:-right-[-10px]">
        <IconComponent className="text-white text-3xl transition-all duration-300 group-hover:text-4xl" />
      </div>

      {/* Title and Description */}
      <div className="flex-grow ">
        <h3 className="text-xl md:text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-gray-500 text-sm leading-tight md:text-base mb-6 md:mb-4">{description}</p>
      </div>

      {/* Button */}
      <div className="mt-4">
        <Link href={link}>
          <button className="text-white bg-[#885c7c] hover:bg-purple-700 px-4 py-2 md:px-6 md:py-3 text-sm">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SolutionsSection;
