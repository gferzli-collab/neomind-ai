import Link from 'next/link';
import { 
  GraduationCap, 
  Microscope, 
  Cpu, 
  Globe, 
  Check, 
  ShieldCheck, 
  Scale, 
  Users, 
  Activity, 
  Search, 
  Database, 
  BookOpen 
} from 'lucide-react';

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        {/* Green/Emerald Glow for 'Growth/Science' */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-500/10 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Programs & Initiatives
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Translating theoretical AI into safe, effective, and equitable clinical reality.
          </p>
        </div>
      </section>

      {/* 1. EDUCATION (Indigo Theme) */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-slate-800">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-6">
              <GraduationCap className="w-4 h-4" /> Education
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Clinician-Focused AI Literacy</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              NeoMIND-AI provides education designed specifically for clinicians navigating the rapidly evolving AI landscape.
            </p>
            
            <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800">
              <h3 className="text-white font-bold mb-4">Who This Is For</h3>
              <ul className="space-y-3 text-slate-400">
                <li className="flex items-center gap-3"><Check className="text-indigo-500 w-5 h-5" /> Neonatologists and pediatric clinicians</li>
                <li className="flex items-center gap-3"><Check className="text-indigo-500 w-5 h-5" /> Trainees and early-career professionals</li>
                <li className="flex items-center gap-3"><Check className="text-indigo-500 w-5 h-5" /> Institutions building AI literacy responsibly</li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-800/30 backdrop-blur-md border border-slate-700 p-8 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-6">Core Offerings</h3>
            <div className="space-y-6">
              {[
                { id: 1, title: "AI Fundamentals for Clinicians", desc: "Understanding the basics without the hype." },
                { id: 2, title: "Advanced Workshops", desc: "Deep dives on bias, validation, and governance." },
                { id: 3, title: "Recorded Lectures & Masterclasses", desc: "On-demand learning from global experts." },
                { id: 4, title: "Curriculum Frameworks", desc: "Resources for training programs." }
              ].map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center flex-shrink-0 font-bold">
                    {item.id}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.title}</h4>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. RESEARCH (Emerald Theme) */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Grid of Icons (Left on Desktop, Bottom on Mobile) */}
          <div className="order-last lg:order-first grid grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, title: "Federated AI", sub: "Privacy-preserving" },
              { icon: Scale, title: "Bias Mitigation", sub: "Detection & auditing" },
              { icon: Users, title: "Validation", sub: "Multicenter studies" },
              { icon: Activity, title: "Modeling", sub: "Clinically meaningful" }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-800/40 border border-slate-700 p-6 rounded-xl text-center hover:bg-slate-800 transition duration-300">
                <item.icon className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                <h4 className="text-white font-bold text-sm">{item.title}</h4>
                <p className="text-xs text-slate-500 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
              <Microscope className="w-4 h-4" /> Research & Data Science
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Rigorous, Collaborative Science</h2>
            <p className="text-slate-300 text-lg leading-relaxed mb-8">
              We focus on clinically driven, ethically governed AI research designed for real-world implementation.
            </p>
            <div className="border-l-4 border-emerald-500 pl-6">
              <h3 className="text-white font-bold mb-2">How We Work</h3>
              <p className="text-slate-400">All projects are:</p>
              <ul className="mt-2 space-y-2 text-slate-300 font-medium">
                <li>• Clinician-defined</li>
                <li>• Ethically reviewed</li>
                <li>• Methodologically transparent</li>
                <li>• Designed for real-world implementation</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CLINICAL TOOLS (Sky Theme) */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Cpu className="w-4 h-4" /> Clinical AI Tools
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">From Code to Bedside</h2>
          <p className="text-slate-300 text-lg">
            NeoMIND-AI supports the responsible translation of AI into bedside care, including decision-support concepts, dashboards, and early-stage prototypes.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
            <div className="col-span-full bg-slate-800/50 p-6 rounded-xl border border-slate-700 text-center mb-4">
                <h3 className="text-white font-bold mb-2">Evaluation Criteria</h3>
                <p className="text-slate-400 text-sm">Every tool we support is evaluated for:</p>
            </div>
            {["Clinical Relevance", "Interpretability", "Safety", "Equity Impact"].map((criteria) => (
                <div key={criteria} className="bg-slate-900/40 border border-slate-700 p-6 rounded-xl text-center border-t-2 border-t-sky-500 hover:-translate-y-1 transition">
                    <h4 className="text-white font-bold">{criteria}</h4>
                </div>
            ))}
        </div>
      </section>

      {/* 4. GLOBAL & EQUITY (Rose Theme) */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative overflow-hidden bg-slate-800/30 border border-rose-500/30 p-10 rounded-3xl">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 blur-3xl rounded-full -mr-20 -mt-20 pointer-events-none"></div>

            <div className="relative z-10 grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-wider mb-6">
                  <Globe className="w-4 h-4" /> Global & Equity
                </div>
                <h2 className="text-3xl font-bold text-white mb-6">Built for Everyone, Everywhere</h2>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  AI that only works in high-resource settings risks widening global disparities. Equity is not a downstream consideration—it is built in from the start.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-white font-bold text-lg mb-4">Our Priorities</h3>
                {[
                    { icon: Search, text: "Bias auditing across populations" },
                    { icon: Database, text: "LMIC-relevant data strategies" },
                    { icon: Users, text: "Global partnerships & capacity building" },
                    { icon: BookOpen, text: "Ethical deployment frameworks" }
                ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 bg-slate-950/50 rounded-lg border border-slate-800">
                        <item.icon className="text-rose-400 w-5 h-5" />
                        <span className="text-slate-300">{item.text}</span>
                    </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer for this page */}
      <section className="py-20 text-center">
        <Link 
          href="/support" 
          className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-bold hover:scale-105 transition"
        >
          Partner With Us on These Initiatives
        </Link>
      </section>

    </div>
  );
}
