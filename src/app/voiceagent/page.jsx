"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Headphones,  
  ArrowUpRight, 
 Phone,
  CalendarCheck,
  BarChart3,
  Globe2,
  Plug,
  Play,
  Pause,
  Mic,
  Cpu,
  Database,
  UserCheck,
  HeartPulse,
  Building2,
  GraduationCap,
  Banknote,
  Smile,
  Briefcase,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/layouts/navbar/Navbar";
import Footer from "@/components/layouts/footer/Footer";

export default function AIVoiceAgentPage() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [voice, setVoice] = useState("Professional");
  const [active, setActive] = useState(1);
  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <Navbar />
      {/* ================= HERO ================= */}
<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-100">
  
  {/* soft background glow */}
  <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-300/30 rounded-full blur-3xl" />
  <div className="absolute top-40 -left-32 w-[400px] h-[400px] bg-indigo-300/30 rounded-full blur-3xl" />

  <div className="relative max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT CONTENT */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >

      <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
        AI Powered Voice Automation
      </span>

      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        AI Voice Agents for{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Real Conversations
        </span>
      </h1>

      <p className="mt-6 text-gray-600 max-w-xl text-lg">
        Deploy human-like voice AI that supports customers, qualifies leads,
        and schedules appointments — 24/7, across languages and channels.
      </p>

 <div className="mt-10 flex flex-wrap gap-4">
  <a
    href="https://wa.me/919594402822?text=Hi%20I%20would%20like%20to%20get%20a%20demo%20of%20your%20AI%20Voice%20Agent"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition"
  >
    Get Demo
  </a>
</div>


      {/* trust indicators */}
      <div className="mt-10 flex gap-8 text-sm text-gray-500">
        <div>✔ Enterprise Ready</div>
        <div>✔ Multilingual</div>
        <div>✔ Secure APIs</div>
      </div>
    </motion.div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      {/* floating cards */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
        className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg px-4 py-3 text-sm"
      >
        📞 Live Call Handling
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="absolute -bottom-6 right-0 bg-white rounded-xl shadow-lg px-4 py-3 text-sm"
      >
        🤖 Smart AI Responses
      </motion.div>

      {/* main product image */}
      <div className="bg-white rounded-3xl shadow-2xl p-4 border">
        <img
          src="/voiceagent/h1.webp"
          alt="AI Voice Agent Dashboard"
          className="rounded-2xl"
        />
      </div>
    </motion.div>

  </div>
</section>


{/* ================= FLOW – DARK PREMIUM ================= */}
<section className="py-28 bg-gradient-to-br from-[#050B1E] via-[#08153A] to-[#050B1E] relative overflow-hidden">

  {/* Glow Background */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_65%)]" />

  <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold"
    >
      How Voice Agent Works
    </motion.h2>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="mt-4 text-blue-200 max-w-2xl mx-auto"
    >
      Real-time conversational intelligence powered by speech, AI and business logic.
    </motion.p>

    {/* Flow Steps */}
    <div className="relative mt-24 grid md:grid-cols-5 gap-6 items-start">

      <FlowDarkStep step="01" icon={<Mic />} title="Customer Speaks" />
      <NeonConnector />
      <FlowDarkStep step="02" icon={<Cpu />} title="Speech & Intent AI" />
      <NeonConnector />
      <FlowDarkStep step="03" icon={<Database />} title="Business Logic" />
      <NeonConnector />
      <FlowDarkStep step="04" icon={<UserCheck />} title="Smart Response & Handoff" />

    </div>
  </div>
</section>

      {/* ================= INDUSTRIES ================= */}
  <section className="relative bg-[#050b14] text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* TOP */}
        <div className="text-center mb-14">
          <span className="inline-block mb-4 text-xs px-3 py-1 rounded-full bg-blue-900/40 text-white-400 border border-blue-700">
            OUR AGENTS
          </span>
          <h2 className="text-4xl font-bold mb-4">
            Agents That Do More Than Talk
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Create AI voice agents for India that sound natural, understand context,
            and speak multiple Indian languages including Hindi, Tamil, Telugu, Bengali,
            Marathi, Hinglish.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-2 bg-[#0b1220] p-2 rounded-xl border border-white/10 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2 rounded-lg text-sm transition ${
                active === i
                  ? "bg-blue-700 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories[active].items.map((item, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-[#0b1220] to-[#050b14] border border-white/10 rounded-xl p-6 flex justify-between items-start"
            >
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <div className="flex gap-2 mb-3 flex-wrap">
                  {item.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-white/10 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <p className="text-gray-400 text-sm mb-4">{item.desc}</p>

                {/* <div className="flex items-center gap-2 text-blue-400 text-sm">
                  <Phone size={16} />
                  {item.phone}
                </div> */}
              </div>

              {/* ACTIONS */}
              <div className="flex flex-col gap-3">
                {/* <button className="bg-cyan-300 hover:bg-cyan-400 text-black p-2 rounded-lg">
                  <Play size={18} />
                </button>
                <button className="bg-white/10 hover:bg-white/20 p-2 rounded-lg">
                  <ArrowUpRight size={18} />
                </button> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

      {/* ================= VOICE PERSONALITY ================= */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Choose Voice Personality</h2>
          <p className="mt-4 text-gray-600">
            Match your brand tone with AI voice behavior
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-14">
            {["Professional", "Friendly", "Sales-Oriented"].map((v) => (
              <motion.div
                key={v}
                whileHover={{ y: -8 }}
                onClick={() => setVoice(v)}
                className={`cursor-pointer border rounded-xl p-8 shadow-sm transition
                  ${voice === v ? "border-blue-600 bg-blue-50" : "bg-white"}
                `}
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {v === "Professional" && <Briefcase />}
                  {v === "Friendly" && <Smile />}
                  {v === "Sales-Oriented" && <Sparkles />}
                </div>

                <h4 className="font-semibold mb-2">{v}</h4>
                <p className="text-sm text-gray-600">
                  {v === "Professional" && "Formal tone for enterprise support and BFSI."}
                  {v === "Friendly" && "Warm conversational voice for service businesses."}
                  {v === "Sales-Oriented" && "Persuasive tone for marketing & conversions."}
                </p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 text-sm text-gray-500">
            Selected Voice: <span className="font-semibold text-blue-600">{voice}</span>
          </p>
        </div>
      </section>

{/* ================= FREE FLOW INTERACTION (ENHANCED) ================= */}
<section className="relative py-32 overflow-hidden bg-gradient-to-br from-[#0A2EA8] via-[#1149D8] to-[#0B1F5A]">

  {/* Glow Background */}
  <div className="absolute inset-0">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/10 blur-[120px] rounded-full" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/10 blur-[120px] rounded-full" />
  </div>

  {/* Floating Waves */}
  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.12),transparent_40%)]" />

  <div className="relative max-w-7xl mx-auto px-6 text-center text-white">

    {/* Heading */}
    <div className="max-w-3xl mx-auto">
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur text-sm tracking-wide">
        AI Voice Conversations
      </span>

      <h2 className="text-4xl md:text-5xl font-serif leading-tight">
        Have a Free-Flow <br />
        Interaction Anytime, <br />
        Anywhere
      </h2>

      <p className="mt-6 text-white/80 text-lg">
        Human-like conversations that scale with your business and never miss a call.
      </p>
    </div>

    {/* Cards */}
    <div className="mt-24 grid gap-12 md:grid-cols-3">

      <div className="group relative">
        <div className="absolute inset-0 bg-white/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition" />
        <FreeFlowCard
          img="/voiceagent/card3.jpg"
          title="Keep Customers Engaged"
          desc="Respond instantly, resolve queries faster and build trust with every call."
        />
      </div>

      <div className="group relative">
        <div className="absolute inset-0 bg-white/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition" />
        <FreeFlowCard
          img="/voiceagent/ai.gif"
          title="Scale Inbound Call Support"
          desc="Handle thousands of simultaneous calls without increasing human agents."
        />
      </div>

      <div className="group relative">
        <div className="absolute inset-0 bg-white/20 blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition" />
        <FreeFlowCard
          img="/voiceagent/card2.jpg"
          title="One AI Call Solution for All"
          desc="Sales, support, booking and surveys — all through one voice brain."
        />
      </div>

    </div>

  </div>
</section>


      {/* ================= VOICE USE-CASE DEMO SECTION ================= */}
      <section className="py-28 bg-white relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50" />

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-2xl md:text-3xl font-semibold">
      No More Press 1, Press 2…
    </h2>

    <p className="mt-2 text-blue-600 font-medium text-lg">
      Experience Conversational Voice AI Built by Nexcore Alliance
    </p>

    <VoiceDemoHub />
  </div>
      </section>

      {/* ================= FEATURES – DARK GRID SECTION ================= */}
      <section className="relative bg-gradient-to-b from-[#020617] via-[#020617] to-[#020617] py-28 text-white">

  <div className="max-w-7xl mx-auto px-6">

    {/* Header */}
    <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
      <div>
        <span className="inline-block mb-4 text-xs font-semibold tracking-wider text-teal-300 bg-teal-300/10 px-3 py-1 rounded-md">
          FEATURES
        </span>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Features That Power Real Voice Agents
        </h2>
      </div>

      <p className="text-gray-400 text-base md:text-lg">
        With integrated speech, telephony, and APIs, Nexcore equips you with
        everything required to move from idea to live deployment quickly and securely.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-5 border border-white/10">

      {FEATURES.map((f, i) => (
        <div
          key={i}
          className="p-8 border-b md:border-b-0 md:border-r border-white/10 hover:bg-white/[0.03] transition"
        >
          <div className="w-12 h-12 mb-6 flex items-center justify-center bg-teal-400/10 text-teal-300 rounded-md">
            {f.icon}
          </div>

          <h4 className="font-semibold mb-3 text-white">{f.title}</h4>
          <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
        </div>
      ))}

    </div>

  </div>
      </section>

{/* ================= TALK TO US ================= */}
<section className="py-28 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold">Talk to Our AI Experts</h2>
    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
      Whether you need a demo, pricing, or custom integrations — our team is ready to help.
    </p>

    <div className="mt-16 grid md:grid-cols-3 gap-8">

      {/* CALL */}
      <a
        href="tel:+919594430295"
        className="group block"
      >
        <ContactCard
          icon={<PhoneCall />}
          title="Call Us"
          text="+91 9594430295"
        />
      </a>

      {/* EMAIL */}
      <a
        href="mailto:director@nexcorealliance.com"
        className="group block"
      >
        <ContactCard
          icon={<Headphones />}
          title="Support"
          text="director@nexcorealliance.com"
        />
      </a>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919594402822?text=Hi%20I%20would%20like%20to%20schedule%20a%20demo%20for%20your%20AI%20Voice%20Agent"
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <ContactCard
          icon={<CalendarCheck />}
          title="Schedule Demo"
          text="Book a 30-min walkthrough"
        />
      </a>

    </div>
  </div>
</section>

  
      <Footer />
    </main>
  );
}

const demos = [
  { title: "Lead\nQualification", pos: "top-left" },
  { title: "Product\nRecommendation", pos: "top-right" },
  { title: "Bookings and\nAppointments", pos: "bottom-left" },
  { title: "Customer\nSupport", pos: "bottom-right" },
];

function VoiceDemoHub() {
  return (
    <div className="relative mt-16 flex justify-center">
      {/* MAIN CONTAINER */}
      <div className="relative w-full max-w-5xl h-[420px] rounded-[32px] bg-gradient-to-br from-blue-100 via-indigo-100 to-blue-50 overflow-hidden flex items-center justify-center">

        {/* WAVE BARS BACKGROUND */}
        <div className="absolute inset-0 flex items-center justify-between px-12 opacity-30">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="w-1 rounded-full bg-blue-300"
              style={{ height: `${30 + (i % 5) * 20}px` }}
            />
          ))}
        </div>

        {/* CENTER VOICE ORB */}
        <div className="relative z-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500 shadow-2xl flex items-center justify-center">
          <div className="flex gap-2">
            <span className="w-3 h-10 bg-white rounded-full" />
            <span className="w-4 h-14 bg-white rounded-full" />
            <span className="w-4 h-8 bg-white rounded-full" />
            <span className="w-3 h-12 bg-white rounded-full" />
          </div>
        </div>

        {/* FLOATING CARDS */}
        {demos.map((d, i) => (
          <DemoCard key={i} title={d.title} position={d.pos} />
        ))}
      </div>
    </div>
  );
}

function DemoCard({ title, position }) {
  const posMap = {
    "top-left": "top-8 left-12",
    "top-right": "top-8 right-12",
    "bottom-left": "bottom-8 left-16",
    "bottom-right": "bottom-8 right-16",
  };

  return (
    <div
      className={`absolute ${posMap[position]} bg-white shadow-lg rounded-xl px-5 py-4 flex items-center gap-4 w-64`}
    >
      <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
        🎧
      </div>

      <div className="text-left text-sm font-medium whitespace-pre-line">
        {title}
      </div>
{/* 
      <button className="ml-auto bg-blue-600 text-white px-3 py-1 rounded-full text-xs flex items-center gap-1">
        PLAY <Play size={12} />
      </button> */}
    </div>
  );
}

function Industry({ icon, title, desc }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="bg-white border rounded-xl p-8 shadow-sm">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </motion.div>
  );
}

function FlowDarkStep({ step, icon, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 0 30px rgba(59,130,246,0.35)" }}
      className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center"
    >
      {/* Step Number */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
        STEP {step}
      </div>

      {/* Icon */}
      <div className="text-blue-400 flex justify-center mb-4">
        {icon}
      </div>

      <p className="font-semibold text-sm">{title}</p>
    </motion.div>
  );
}

function NeonConnector() {
  return (
    <div className="hidden md:flex items-center justify-center">
      <div className="h-[2px] w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
    </div>
  );
}

function ContactCard({ icon, title, text }) {
  return (
    <motion.div whileHover={{ y: -8 }} className="bg-white border rounded-xl p-8 shadow-sm">
      <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-sm text-gray-600">{text}</p>
    </motion.div>
  );
}

function FreeFlowCard({ img, title }) {
  return (
    <motion.div whileHover={{ y: -12 }} className="bg-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative h-60 bg-gradient-to-b from-blue-200 to-white">
        <img src={img} className="absolute inset-0 w-full h-full object-contain pt-8" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>
      <div className="p-8 text-left text-gray-900">
        <h4 className="font-semibold mb-3">{title}</h4>
        <p className="text-sm text-gray-600">
          Enterprise-grade conversational automation with smooth human handoff.
        </p>
      </div>
    </motion.div>
  );
}

const FEATURES = [
  {
    title: "Bulk Calling at Scale",
    desc: "Run campaigns with thousands of AI calls simultaneously.",
    icon: <PhoneCall size={22} />,
  },
  {
    title: "Custom API Triggers",
    desc: "Call external APIs in real-time during a live conversation.",
    icon: <Plug size={22} />,
  },
  {
    title: "Human-in-the-Loop",
    desc: "Transfer call to a real agent instantly when needed.",
    icon: <UserCheck size={22} />,
  },
  {
    title: "Workflow Integration",
    desc: "Easy to integrate with n8n, Make.com, Zapier, and other tools.",
    icon: <BarChart3 size={22} />,
  },
  {
    title: "Multilingual",
    desc: "Converse fluently in 10+ Indian and foreign languages.",
    icon: <Globe2 size={22} />,
  },
  {
    title: "Natural Conversations",
    desc: "Agents understand interruptions, reply with <300ms latency.",
    icon: <Mic size={22} />,
  },
  {
    title: "Connect Any Model",
    desc: "Integrated with 20+ ASR, LLM, and TTS models.",
    icon: <Cpu size={22} />,
  },
  {
    title: "Enterprise Plans",
    desc: "Best-in-class pricing and forward deployed service.",
    icon: <Database size={22} />,
  },
  {
    title: "100% Data Privacy",
    desc: "India / USA data residency, on-prem deployment.",
    icon: <HeartPulse size={22} />,
  },
  {
    title: "Model Switching",
    desc: "Run each call with models best suited for your use case.",
    icon: <Sparkles size={22} />,
  },
];

const categories = [
  {
    name: "AI Agents",
    items: [
      {
        title: "Customer Support Agent",
        tags: ["Customer Support", "English"],
        desc: "Provides 24/7 inbound call answering for FAQs and customer triage",
        phone: "+918035317400",
      },
      {
        title: "Recruitment Agent",
        tags: ["Recruitment", "English"],
        desc: "AI agents that screen, interview, and onboard candidates at scale",
        phone: "+918035317441",
      },
    ],
  },
  {
    name: "Ecommerce",
    items: [
      {
        title: "Cart Abandonment Agent",
        tags: ["Cart Abandonment", "English + Hindi"],
        desc: "Calls customers with abandoned items in carts, recovering sales",
        phone: "+918035317449",
      },
      {
        title: "COD Confirmation Agent",
        tags: ["COD Confirmation", "English + Hindi"],
        desc: "Handles last-mile logistics calls and order verification",
        phone: "+918035317450",
      },
      {
        title: "Return Management Agent",
        tags: ["Returns", "English + Hindi"],
        desc: "Automates return scheduling and pickup confirmations",
        phone: "+918035317451",
      },
    ],
  },
  {
    name: "EdTech",
    items: [
      {
        title: "Lead Qualification Agent",
        tags: ["Admissions", "English + Hindi"],
        desc: "Calls students and qualifies admission leads automatically",
        phone: "+918035317460",
      },
      {
        title: "Fee Reminder Agent",
        tags: ["Payments", "Multilingual"],
        desc: "Automated fee follow-ups and payment nudges",
        phone: "+918035317461",
      },
    ],
  },
  {
    name: "Health Tech",
    items: [
      {
        title: "Appointment Booking Agent",
        tags: ["OPD", "Multilingual"],
        desc: "Schedules doctor appointments automatically",
        phone: "+918035317470",
      },
      {
        title: "Lab Report Follow-up Agent",
        tags: ["Diagnostics", "English + Hindi"],
        desc: "Notifies patients and answers report queries",
        phone: "+918035317471",
      },
    ],
  },
  {
    name: "BFSI",
    items: [
      {
        title: "Loan Eligibility Agent",
        tags: ["Loans", "Multilingual"],
        desc: "Collects basic info and checks loan eligibility",
        phone: "+918035317480",
      },
      {
        title: "EMI Reminder Agent",
        tags: ["Payments", "English + Hindi"],
        desc: "Automated EMI reminder calls and confirmations",
        phone: "+918035317481",
      },
    ],
  },
  {
    name: "Hospitality",
    items: [
      {
        title: "Reservation Agent",
        tags: ["Bookings", "Multilingual"],
        desc: "Handles hotel and restaurant reservations",
        phone: "+918035317490",
      },
      {
        title: "Feedback Collection Agent",
        tags: ["Reviews", "English + Hindi"],
        desc: "Collects post-visit feedback from customers",
        phone: "+918035317491",
      },
    ],
  },
];