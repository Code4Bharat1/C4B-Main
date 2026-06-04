import {
  FaComments,
  FaCode,
  FaChartLine,
  FaRocket,
  FaShieldAlt,
  FaHeadset,
  FaTools,
  FaUsers,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaAws,
  FaDatabase,
  FaStar,
  FaAward,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

export const approachSteps = [
  {
    id: 1,
    title: "Understand Your Needs",
    Icon: FaComments,
    color: "#1e40af",
    imgSrc: "/images/Web development.png",
    description: "We begin by thoroughly understanding your business requirements and goals.",
    details: "Our team conducts in-depth consultations to grasp your vision and the specific challenges you face.",
    duration: "1-2 weeks",
    deliverables: ["Requirements Document", "Project Scope", "Timeline Estimate"]
  },
  {
    id: 2,
    title: "Design & Planning",
    Icon: FaTools,
    color: "#f97316",
    imgSrc: "/images/Mobile Application Development.png",
    description: "We create detailed designs and comprehensive project plans.",
    details: "Our design team creates wireframes, mockups, and prototypes while our technical team plans the architecture.",
    duration: "2-3 weeks",
    deliverables: ["UI/UX Designs", "Technical Architecture", "Project Roadmap"]
  },
  {
    id: 3,
    title: "Agile Development",
    Icon: FaCode,
    color: "#3b82f6",
    imgSrc: "/images/It consulting.png",
    description: "We develop solutions using agile methodology with regular updates.",
    details: "Leveraging the latest technologies, we build scalable and efficient solutions through iterative development cycles.",
    duration: "6-12 weeks",
    deliverables: ["Working Prototypes", "Sprint Demos", "Regular Updates"]
  },
  {
    id: 4,
    title: "Testing & QA",
    Icon: FaShieldAlt,
    color: "#1e3a8a",
    imgSrc: "/images/Offshore development service.png",
    description: "Rigorous testing ensures quality and reliability of solutions.",
    details: "Our QA team performs comprehensive testing including unit tests, integration tests, and security audits.",
    duration: "2-3 weeks",
    deliverables: ["Test Reports", "Bug Fixes", "Performance Metrics"]
  }
];

export const benefits = [
  { icon: FaClock, title: "Faster Time to Market", description: "Agile methodology ensures rapid delivery", color: "#1e40af" },
  { icon: FaCheckCircle, title: "Cost-Effective Solutions", description: "Optimized development process reduces costs", color: "#f97316" },
  { icon: FaRocket, title: "Scalable Architecture", description: "Built to grow with your business", color: "#3b82f6" },
  { icon: FaShieldAlt, title: "Risk Mitigation", description: "Proactive testing minimizes risks", color: "#1e3a8a" }
];

export const teamExpertise = [
  { title: "15+ Years", subtitle: "Combined Experience", icon: FaAward },
  { title: "50+", subtitle: "Certified Developers", icon: FaUsers },
  { title: "6 Countries", subtitle: "Global Presence", icon: FaStar },
  { title: "100%", subtitle: "Client Retention", icon: FaCheckCircle }
];

export const metrics = [
  { value: "94%", label: "On-Time Delivery", color: "#1e40af" },
  { value: "239+", label: "Projects Completed", color: "#f97316" },
  { value: "95%", label: "Client Satisfaction", color: "#3b82f6" },
  { value: "24/7", label: "Support Available", color: "#1e3a8a" }
];
