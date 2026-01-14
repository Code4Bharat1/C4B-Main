"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  PhoneCall,
  Headphones,
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

  const togglePlay = () => {
    if (!audioRef.current) return;
    playing ? audioRef.current.pause() : audioRef.current.play();
    setPlaying(!playing);
  };

  return (
    <main className="bg-white text-gray-900 overflow-hidden">
      <Navbar />
      {/* ================= HERO ================= */}
{/* ================= HERO – PREMIUM ================= */}
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
        <Link
          href="/contact"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold shadow-lg transition"
        >
          Get Demo
        </Link>

        <button
          onClick={togglePlay}
          className="flex items-center gap-3 border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition"
        >
          {playing ? <Pause size={18} /> : <Play size={18} />}
          {playing ? "Pause Demo" : "Play Voice Demo"}
        </button>

        <audio ref={audioRef} onEnded={() => setPlaying(false)}>
          <source src="/voice-demo.mp3" type="audio/mpeg" />
        </audio>
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
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Industry Solutions</h2>
          <p className="mt-4 text-gray-600">
            Purpose-built voice agents for your business workflows
          </p>

          <div className="grid md:grid-cols-4 gap-8 mt-14">
            <Industry icon={<Banknote />} title="BFSI" desc="Loan inquiries, KYC, payment reminders, fraud alerts." />
            <Industry icon={<HeartPulse />} title="Healthcare" desc="Appointments, prescriptions, patient follow-ups." />
            <Industry icon={<Building2 />} title="Real Estate" desc="Lead qualification, site visit scheduling." />
            <Industry icon={<GraduationCap />} title="EdTech" desc="Admissions, counseling, fee reminders." />
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

      {/* ================= FREE FLOW INTERACTION ================= */}
      <section className="bg-[#1149D8] py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Have a Free-Flow <br /> Interaction Anytime, <br /> Anywhere.
          </h2>

          <div className="mt-24 grid md:grid-cols-3 gap-12">
            <FreeFlowCard img="/voiceagent/card3.jpg" title="Keep Customers Engaged" />
            <FreeFlowCard img="/voiceagent/card3.jpg" title="Scale Inbound Call Support" />
            <FreeFlowCard img="/voiceagent/card2.jpg" title="One AI Call Solution for All" />
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
            <ContactCard icon={<PhoneCall />} title="Call Us" text="+91 95944 02822" />
            <ContactCard icon={<Headphones />} title="Support" text="support@nexcorealliance.com" />
            <ContactCard icon={<CalendarCheck />} title="Schedule Demo" text="Book a 30-min walkthrough" />
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
      Experience Conversational Voice AI by Nexcore Alliance
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


      {/* ================= FINAL CTA ================= */}
      {/* <section className="bg-blue-600 py-20 text-center text-white">
        <h2 className="text-3xl font-bold">Deploy AI Voice Agents in Your Business</h2>
        <p className="mt-4 text-blue-100">
          Start with a pilot deployment in under 7 days.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link href="/contact" className="bg-white text-blue-700 px-8 py-3 rounded-md font-semibold">
            Book Demo
          </Link>
          <Link href="/contact" className="border border-white px-8 py-3 rounded-md font-semibold">
            Talk to Expert
          </Link>
        </div>
      </section> */}
      <Footer />
    </main>
  );
}

function VoiceDemoHub() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [active, setActive] = useState(null);

  const playDemo = (src, id) => {
    if (!audioRef.current) return;

    if (active === id && playing) {
      audioRef.current.pause();
      setPlaying(false);
      return;
    }

    audioRef.current.src = src;
    audioRef.current.play();
    setActive(id);
    setPlaying(true);
  };

  return (
    <div className="mt-16 relative bg-gradient-to-br from-[#EEF4FF] to-[#F8FBFF] rounded-3xl p-10 md:p-16 overflow-hidden shadow-xl">

      {/* CENTER ORB */}
      <motion.div
        animate={{ scale: playing ? [1, 1.08, 1] : 1 }}
        transition={{ repeat: playing ? Infinity : 0, duration: 1.5 }}
        className="relative mx-auto w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-blue-400 via-indigo-500 to-purple-500 flex items-center justify-center shadow-[0_0_60px_rgba(59,130,246,0.6)]"
      >
        <WavePulse active={playing} />
      </motion.div>

      {/* CARDS */}
      <div className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        <DemoPlayCard
          id="lead"
          title="Lead Qualification"
          active={active === "lead" && playing}
          onPlay={() => playDemo("/voice-demos/lead.mp3", "lead")}
        />

        <DemoPlayCard
          id="product"
          title="Product Recommendation"
          active={active === "product" && playing}
          onPlay={() => playDemo("/voice-demos/product.mp3", "product")}
        />

        <DemoPlayCard
          id="booking"
          title="Bookings & Appointments"
          active={active === "booking" && playing}
          onPlay={() => playDemo("/voice-demos/booking.mp3", "booking")}
        />

        <DemoPlayCard
          id="support"
          title="Customer Support"
          active={active === "support" && playing}
          onPlay={() => playDemo("/voice-demos/support.mp3", "support")}
        />

      </div>

      <audio ref={audioRef} onEnded={() => setPlaying(false)} />
    </div>
  );
}

function DemoPlayCard({ title, onPlay, active }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white rounded-xl px-6 py-4 shadow-md flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
          AI
        </div>
        <p className="font-medium text-sm text-gray-800">{title}</p>
      </div>

      <button
        onClick={onPlay}
        className={`flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold transition
          ${active ? "bg-red-500" : "bg-blue-600"} text-white`}
      >
        {active ? "STOP" : "PLAY"}
        <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center">
          ▶
        </span>
      </button>
    </motion.div>
  );
}

function WavePulse({ active }) {
  return (
    <div className="flex gap-2">
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className={`w-2 rounded-full bg-white ${
            active ? "animate-wave" : "h-8"
          }`}
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}

      <style jsx>{`
        .animate-wave {
          animation: wave 1s ease-in-out infinite;
        }
        @keyframes wave {
          0% { height: 30%; }
          50% { height: 100%; }
          100% { height: 30%; }
        }
      `}</style>
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

function FlowCard({ icon, title }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white border rounded-xl p-6 shadow-sm text-center"
    >
      <div className="text-blue-600 flex justify-center mb-3">{icon}</div>
      <p className="font-medium text-sm">{title}</p>
    </motion.div>
  );
}

function Connector() {
  return <div className="hidden md:flex items-center justify-center"><div className="h-0.5 w-full bg-blue-300" /></div>;
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

function Waveform({ playing }) {
  return (
    <div className="flex items-end justify-center gap-2 h-28">
      {[...Array(18)].map((_, i) => (
        <span
          key={i}
          className={`w-2 rounded-full bg-blue-500 ${playing ? "animate-wave" : "h-4"}`}
          style={{ animationDelay: `${i * 0.1}s` }}
        />
      ))}
      <style jsx>{`
        .animate-wave { animation: wave 1s ease-in-out infinite; }
        @keyframes wave {
          0% { height: 20%; }
          50% { height: 100%; }
          100% { height: 20%; }
        }
      `}</style>
    </div>
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
