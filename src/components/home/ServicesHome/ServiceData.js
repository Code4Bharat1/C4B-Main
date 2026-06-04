// ✅ Inline SVG icons — removes react-icons/fa from the eagerly-loaded critical bundle
// Each icon is a lightweight functional component (~200 bytes vs ~5KB per react-icon)

const icon = (d) => {
  const Icon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d={d}/></svg>
  );
  return Icon;
};

const FaRocket = icon("M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm0-4h-2V7h2v8z");
const FaCloud = icon("M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z");
const FaPalette = icon("M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10a2.5 2.5 0 002.5-2.5c0-.61-.23-1.21-.64-1.67A1.49 1.49 0 0113 16.5c0-.83.67-1.5 1.5-1.5H17c2.76 0 5-2.24 5-5C22 5.57 17.51 2 12 2zm-5.5 9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm3 4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z");
const FaNetworkWired = icon("M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z");
const FaMobile = icon("M15.5 1h-8A2.5 2.5 0 005 3.5v17A2.5 2.5 0 007.5 23h8a2.5 2.5 0 002.5-2.5v-17A2.5 2.5 0 0015.5 1zm-4 21a1 1 0 110-2 1 1 0 010 2zm5-3H7V4h9.5v15z");
const FaCode = icon("M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z");
const FaServer = icon("M2 5a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm18 1a1 1 0 10-2 0 1 1 0 002 0zM2 15a2 2 0 012-2h16a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4zm18 1a1 1 0 10-2 0 1 1 0 002 0z");
const FaCogs = icon("M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94L14.4 2.81a.47.47 0 00-.48-.41h-3.84a.47.47 0 00-.48.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.61 3.61 0 0112 15.6z");
const FaBuilding = icon("M4 2h16a1 1 0 011 1v18a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1zm1 2v16h14V4H5zm2 2h2v2H7V6zm4 0h2v2h-2V6zm4 0h2v2h-2V6zM7 10h2v2H7v-2zm4 0h2v2h-2v-2zm4 0h2v2h-2v-2zM7 14h2v2H7v-2zm4 14h2v2h-2v-2z");

export const serviceCategories = [
  {
    category: "Product Development",
    services: [
      {
        id: 1,
        title: "Product Development",
        Icon: FaRocket,
        color: "#1e40af",
        description: "End-to-end product development from concept to launch, bringing your vision to life.",
        details: "We specialize in transforming innovative ideas into market-ready products. Our product development services encompass ideation, prototyping, development, and deployment.",
        deliveryTime: "8-12 weeks",
        projectsCompleted: "150+",
        rating: 4.9,
        features: [
          "Product Strategy & Roadmap",
          "Market Research & Analysis",
          "Agile Development Process",
          "Quality Assurance & Testing",
          "Product Launch Support",
          "Post-Launch Optimization"
        ],
      },
      {
        id: 2,
        title: "SaaS Development",
        Icon: FaCloud,
        color: "#f97316",
        description: "Scalable SaaS solutions with multi-tenancy, subscription management, and cloud infrastructure.",
        details: "Build robust Software-as-a-Service platforms that scale seamlessly. We develop multi-tenant architectures and implement subscription billing.",
        deliveryTime: "12-16 weeks",
        projectsCompleted: "80+",
        rating: 4.8,
        features: [
          "Multi-tenant Architecture",
          "Subscription & Billing Integration",
          "Auto-scaling Infrastructure",
          "API Development & Integration",
          "Analytics & Reporting Dashboards",
          "Security & Compliance"
        ],
      },
      {
        id: 3,
        title: "MVP Development",
        Icon: FaRocket,
        color: "#3b82f6",
        description: "Launch your Minimum Viable Product quickly to test market fit and gather user feedback.",
        details: "Get to market faster with our MVP development services. We focus on core features that deliver value.",
        deliveryTime: "4-6 weeks",
        projectsCompleted: "200+",
        rating: 4.9,
        features: [
          "Core Feature Development",
          "Rapid Time-to-Market",
          "User Feedback Integration",
          "Iterative Development",
          "Cost-Effective Solutions",
          "Scalability Planning"
        ],
      },
      {
        id: 4,
        title: "UI/UX Design",
        Icon: FaPalette,
        color: "#f97316",
        description: "User-centric design solutions that create engaging and intuitive digital experiences.",
        details: "Create exceptional user experiences with our comprehensive UI/UX design services.",
        deliveryTime: "2-4 weeks",
        projectsCompleted: "300+",
        rating: 5.0,
        features: [
          "User Research & Personas",
          "Wireframing & Prototyping",
          "Visual Design & Branding",
          "Usability Testing",
          "Responsive Design",
          "Design System Creation"
        ],
      },
    ],
  },
  {
    category: "Digital Engineering",
    services: [
      {
        id: 9,
        title: "Digital Transformation",
        Icon: FaNetworkWired,
        color: "#1e3a8a",
        description: "Transform your business with modern digital solutions and innovative technologies.",
        details: "Navigate your digital transformation journey with confidence. We help organizations modernize operations and improve efficiency.",
        deliveryTime: "16-24 weeks",
        projectsCompleted: "60+",
        rating: 4.7,
        features: [
          "Digital Strategy Consulting",
          "Process Automation",
          "Legacy System Modernization",
          "Cloud Migration",
          "Data Analytics Integration",
          "Change Management Support"
        ],
      },
      {
        id: 10,
        title: "App Modernization",
        Icon: FaMobile,
        color: "#3b82f6",
        description: "Modernize legacy applications with cloud-native architectures and modern frameworks.",
        details: "Breathe new life into your legacy applications. Our modernization services improve performance and reduce costs.",
        deliveryTime: "10-14 weeks",
        projectsCompleted: "90+",
        rating: 4.8,
        features: [
          "Architecture Assessment",
          "Cloud-Native Migration",
          "Microservices Adoption",
          "Performance Optimization",
          "Security Enhancement",
          "Zero-Downtime Migration"
        ],
      },
      {
        id: 11,
        title: "IoT Services",
        Icon: FaNetworkWired,
        color: "#1e40af",
        description: "Connect and control devices with our comprehensive IoT solutions and platforms.",
        details: "Harness the power of Internet of Things with our end-to-end IoT services.",
        deliveryTime: "12-18 weeks",
        projectsCompleted: "45+",
        rating: 4.9,
        features: [
          "IoT Platform Development",
          "Device Integration & Management",
          "Real-time Data Analytics",
          "Edge Computing Solutions",
          "IoT Security Implementation",
          "Predictive Maintenance"
        ],
      },
      {
        id: 12,
        title: "API Development",
        Icon: FaCode,
        color: "#f97316",
        description: "Robust and scalable API solutions for seamless integration and data exchange.",
        details: "Build powerful APIs that enable seamless communication between systems and applications.",
        deliveryTime: "6-10 weeks",
        projectsCompleted: "180+",
        rating: 4.9,
        features: [
          "RESTful API Design",
          "GraphQL Implementation",
          "API Documentation",
          "Rate Limiting & Security",
          "Version Management",
          "Third-party Integration"
        ],
      },
    ],
  },
  {
    category: "Cloud & DevOps",
    services: [
      {
        id: 13,
        title: "Cloud Infrastructure",
        Icon: FaServer,
        color: "#3b82f6",
        description: "Secure and scalable cloud infrastructure solutions tailored to your business needs.",
        details: "Optimize your infrastructure with our cloud services. We ensure high availability and performance.",
        deliveryTime: "8-12 weeks",
        projectsCompleted: "120+",
        rating: 4.8,
        features: [
          "Cloud Architecture Design",
          "Managed Cloud Services",
          "Security & Compliance",
          "Disaster Recovery Planning",
          "Multi-cloud Strategy",
          "Cost Optimization"
        ],
      },
      {
        id: 14,
        title: "DevOps Implementation",
        Icon: FaCogs,
        color: "#1e40af",
        description: "Streamline your development and operations with our comprehensive DevOps services.",
        details: "Accelerate your software delivery lifecycle. We implement automated CI/CD pipelines and IaC.",
        deliveryTime: "10-14 weeks",
        projectsCompleted: "75+",
        rating: 4.9,
        features: [
          "CI/CD Pipeline Automation",
          "Infrastructure as Code",
          "Containerization (Docker/K8s)",
          "Monitoring & Alerting",
          "Security Integration (DevSecOps)",
          "Performance Tuning"
        ],
      },
    ],
  },
  {
    category: "Enterprise Solutions",
    services: [
      {
        id: 21,
        title: "ERP Solutions",
        Icon: FaBuilding,
        color: "#1e3a8a",
        description: "Integrated ERP solutions to streamline your business processes and operations.",
        details: "Optimize your enterprise resources with our custom ERP solutions. We help you unify global operations.",
        deliveryTime: "24-36 weeks",
        projectsCompleted: "40+",
        rating: 4.7,
        features: [
          "Custom ERP Development",
          "Module Integration",
          "Business Process Mapping",
          "Data Migration",
          "User Training & Support",
          "Financial Management"
        ],
      },
      {
        id: 22,
        title: "Custom Solutions",
        Icon: FaCogs,
        color: "#f97316",
        description: "Bespoke software solutions tailored to your unique business requirements.",
        details: "Get solutions that fit your business perfectly. We develop custom software that addresses your specific challenges.",
        deliveryTime: "8-16 weeks",
        projectsCompleted: "110+",
        rating: 4.8,
        features: [
          "Requirement Engineering",
          "Custom Architecture",
          "Third-party Integration",
          "Legacy Modernization",
          "Scalability Analysis",
          "Long-term Support"
        ],
      }
    ],
  }
];
