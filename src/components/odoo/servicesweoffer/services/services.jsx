import React from "react";

const Services = () => {
  const services = [
    {
      title: "Odoo Consulting",
      description:
        "We carry more than just good coding skills. Our experience makes us stand out from other web development.",
      icon: "📡",
    },
    {
      title: "Odoo Configuration",
      description:
        "Create complex enterprise software, ensure reliable software integration, modernise your legacy system.",
      icon: "📡",
    },
    {
      title: "Odoo Customization",
      description:
        "Build the product you need on time with an experienced team that uses a clear and effective design process.",
      icon: "⚙️",
    },
    {
      title: "Odoo Development",
      description:
        "Turn to our experts to perform comprehensive, multi-stage testing and auditing of your software.",
      icon: "🖥️",
    },
    {
      title: "Odoo Integration",
      description:
        "Odoo offers a multi-dimensional solution for better organization of business functionalities through integration ...",
      icon: "📝",
    },
    {
      title: "Odoo E-Commerce",
      description:
        "The past decade witnessed a tremendous change in customers' shopping behavior and purchase",
      icon: "🌐",
    },
    {
      title: "Odoo Support",
      description:
        "Every deployment needs a support service to run business smoothly.",
      icon: "🛒",
    },
    {
      title: "Odoo Implementation",
      description:
        "Odoo Implementation is a crucial process that can leverage your business.",
      icon: "⚙️",
    },
    {
      title: "Odoo Migration",
      description:
        "Odoo is an open source and constantly evolving ERP system.",
      icon: "🖥️",
    },
    {
      title: "Odoo Maintenance",
      description:
        "Odoo provides the feasibility of planning preventive maintenance, including Mean Time Between Failure (MTBF)...",
      icon: "📝",
    },
    {
      title: "Odoo Offshore Development",
      description:
        "Offshore development takes place when businesses outsource work to a partner in a different timezone region.",
      icon: "📝",
    },
  ];

  return (
    <div className="bg-white">
      <div className="grid gap-8 py-12 px-4 sm:px-6 lg:pl-[9rem] lg:pr-[13rem]">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Odoo ERP Services for Enterprises
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 flex items-start"
            >
              {/* Icon Section */}
              <div className="text-purple-500 text-5xl mr-6">{service.icon}</div>
              {/* Content Section */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <button className="mt-4 px-6 py-2 bg-[#885c7c] text-white font-medium hover:bg-purple-700 transition">
                  READ MORE
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Horizontal Black Line Covering Full Width */}
      <div className="w-screen h-[2px] bg-black my-20"></div>
    </div>
  );
};

export default Services;
