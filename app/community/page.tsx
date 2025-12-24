import Link from 'next/link';
import { 
  ShieldAlert, 
  Stethoscope, 
  Code2, 
  Database, 
  Scale, 
  LayoutDashboard, 
  Globe, 
  Megaphone, 
  CheckCircle, 
  XCircle, 
  MessageSquare 
} from 'lucide-react';

export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* HERO: PURPOSE & POSITIONING */}
      <section className="relative pt-40 pb-16 px-6 overflow-hidden">
        {/* Rose/Red Glow for 'Humanity/Community' */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-rose-500/10 blur-[100px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Collaborative Hub
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto">
            A knowledge exchange hub enabling rigorous, ethical, clinician-led discourse.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 text-left max-w-4xl mx-auto">
            {/* WHAT IT IS */}
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700 border-t-4 border-t-emerald-500">
              <h3 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> What This Forum Is
              </h3>
              <ul className="text-sm text-slate-300 space-y-2 pl-6 list-disc marker:text-emerald-500">
                <li>Professional collaboration space</li>
                <li>Knowledge exchange hub</li>
                <li>Signal of legitimacy and leadership</li>
              </ul>
            </div>
            
            {/* WHAT IT IS NOT */}
            <div className="bg-slate-900/60 backdrop-blur-md p-6 rounded-xl border border-slate-700 border-t-4 border-t-rose-500">
              <h3 className="text-rose-400 font-bold mb-2 flex items-center gap-2">
                <XCircle className="w-4 h-4" /> What This Forum Is Not
              </h3>
              <ul className="text-sm text-slate-300 space-y-2 pl-6 list-disc marker:text-rose-500">
                <li>Not a social media feed</li>
                <li>Not a vendor marketing channel</li>
                <li>Not a venue for identifiable patient info</li>
              </ul>
            </div>
          </div>

          <div className="mt-10">
            <Link 
              href="/governance" 
              className="inline-flex items-center gap-2 text-sky-400 font-semibold hover:text-white transition border border-sky-500/30 px-6 py-3 rounded-full hover:bg-sky-500/10"
            >
              <ShieldAlert className="w-4 h-4" /> Read Rules of Engagement & Governance
            </Link>
          </div>
        </div>
      </section>

      {/* FORUM ARCHITECTURE (LOCKED CATEGORIES) */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
          Discussion Categories
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Category Cards */}
            {[
              { 
                icon: Stethoscope, 
                color: "text-blue-400", 
                bg: "bg-blue-500/20", 
                title: "Clinical Use Cases", 
                desc: "De-identified clinical questions. No PHI, no screenshots, no timelines that re-identify patients." 
              },
              { 
                icon: Code2, 
                color: "text-indigo-400", 
                bg: "bg-indigo-500/20", 
                title: "AI Methods & Validation", 
                desc: "Model development, external validation strategies, and performance metrics beyond AUROC." 
              },
              { 
                icon: Database, 
                color: "text-amber-400", 
                bg: "bg-amber-500/20", 
                title: "Data & Privacy", 
                desc: "Data governance, multicenter collaboration protocols, and privacy-preserving methods." 
              },
              { 
                icon: Scale, 
                color: "text-rose-400", 
                bg: "bg-rose-500/20", 
                title: "Ethics, Bias & Equity", 
                desc: "Bias auditing, fairness metrics, and deployment ethics discussion." 
              },
              { 
                icon: LayoutDashboard, 
                color: "text-sky-400", 
                bg: "bg-sky-500/20", 
                title: "Tools & CDS", 
                desc: "Workflow integration, interpretability, and Human-AI interaction." 
              },
              { 
                icon: Globe, 
                color: "text-emerald-400", 
                bg: "bg-emerald-500/20", 
                title: "Global Neonatal AI", 
                desc: "LMIC contexts, resource-aware design, and global deployment." 
              }
            ].map((cat, idx) => (
              <div key={idx} className="bg-slate-900/40 backdrop-blur-md p-6 rounded-xl border border-slate-700 hover:border-sky-500/50 hover:-translate-y-1 transition duration-300 cursor-pointer group">
                <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${cat.bg} ${cat.color}`}>
                        <cat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest border border-slate-800 px-2 py-1 rounded">Locked</span>
                </div>
                <h3 className={`text-lg font-bold text-white group-hover:${cat.color} transition`}>{cat.title}</h3>
                <p className="text-sm text-slate-400 mt-2 leading-relaxed">{cat.desc}</p>
              </div>
            ))}

            {/* Announcements Card (Spans full width on large screens) */}
            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-xl border border-slate-700 border-l-4 border-l-purple-500 lg:col-span-3 hover:bg-slate-800/50 transition cursor-pointer">
                <div className="flex items-center gap-3 mb-2">
                    <Megaphone className="text-purple-400 w-6 h-6" />
                    <h3 className="text-lg font-bold text-white">Announcements & Calls for Collaboration</h3>
                </div>
                <p className="text-sm text-slate-400 pl-9">Official feed for grants, multicenter studies, pilots, and events.</p>
            </div>

        </div>
      </section>

      {/* NOTICES (Masonry Grid Style) */}
      <section className="py-20 bg-slate-900 border-t border-slate-800">
         <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-3 mb-10">
                <h2 className="text-3xl font-bold text-white">Active Notices</h2>
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                </span>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Notice 1 */}
                <div className="bg-slate-950 p-6 rounded-xl border-l-4 border-l-sky-500 border border-slate-800">
                    <div className="text-xs font-bold text-sky-400 uppercase tracking-widest mb-3">Grant Opportunity</div>
                    <h3 className="text-lg font-bold text-white mb-2">Multicenter Sepsis Study</h3>
                    <p className="text-slate-400 text-sm mb-4">Looking for NICU partners with &gt;50 VLBW admissions/year to validate a new sepsis prediction model.</p>
                    <button className="text-white text-sm font-semibold hover:text-sky-400 transition">Apply as Site →</button>
                </div>

                {/* Notice 2 */}
                <div className="bg-slate-950 p-6 rounded-xl border-l-4 border-l-emerald-500 border border-slate-800">
                    <div className="text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">Data Collaboration</div>
                    <h3 className="text-lg font-bold text-white mb-2">ROP Image Bank</h3>
                    <p className="text-slate-400 text-sm mb-4">Call for de-identified retinal images to expand our open-source training set for ROP staging.</p>
                    <button className="text-white text-sm font-semibold hover:text-emerald-400 transition">Contribute Data →</button>
                </div>

                {/* Notice 3 */}
                <div className="bg-slate-950 p-6 rounded-xl border-l-4 border-l-purple-500 border border-slate-800">
                    <div className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">Pilot Project</div>
                    <h3 className="text-lg font-bold text-white mb-2">GenAI for Discharge Summaries</h3>
                    <p className="text-slate-400 text-sm mb-4">Seeking 3 beta-tester clinicians to review output quality of a new LLM-based tool.</p>
                    <button className="text-white text-sm font-semibold hover:text-purple-400 transition">Join Beta →</button>
                </div>
            </div>
         </div>
      </section>

    </div>
  );
}
