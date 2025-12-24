import Link from 'next/link';
import { 
  ScrollText, 
  AlertTriangle, 
  Check, 
  X, 
  ShieldAlert, 
  ArrowLeft 
} from 'lucide-react';

export default function GovernancePage() {
  return (
  <div className="flex flex-col min-h-screen bg-slate-950">

    {/* Simplified Header for Policy Page */}
    <nav className="w-full bg-slate-900/50 backdrop-blur border-b border-slate-800 p-6 sticky top-0 z-50">
    <div className="max-w-4xl mx-auto flex justify-between items-center">
      <Link href="/" className="font-bold text-white text-xl flex items-center gap-2">
        <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
        NeoMIND-AI
      </Link>
      <Link href="/community" className="text-sm text-slate-400 hover:text-white flex items-center gap-2 transition">
        <ArrowLeft className="w-4 h-4" /> Back to Forum
      </Link>
    </div>
    </nav>

    <main className="max-w-4xl mx-auto px-6 py-16 w-full">
        
    <div className="mb-12">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider mb-6">
        <ShieldAlert className="w-4 h-4" /> Official Policy
      </div>
      <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Forum Rules & Governance</h1>
      <p className="text-lg text-slate-400 leading-relaxed">
        These standards are non-negotiable. They are designed to withstand clinical, ethical, and institutional scrutiny.
      </p>
    </div>

    {/* SECTION 1: RULES OF ENGAGEMENT */}
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <ScrollText className="text-sky-500 w-6 h-6" /> Rules of Engagement
      </h2>
            
      <div className="grid md:grid-cols-2 gap-8">
        {/* Principles */}
        <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-800">
          <h3 className="text-emerald-400 font-bold mb-6 uppercase tracking-wider text-xs">Core Principles</h3>
          <ul className="space-y-4">
            {[
              "Clinical safety comes first.",
              "Evidence over opinion.",
              "Respect across disciplines.",
              "Transparency of conflicts."
            ].map((rule, idx) => (
              <li key={idx} className="flex gap-3 text-slate-300 text-sm">
                <Check className="text-emerald-500 w-5 h-5 flex-shrink-0" />
                {rule}
              </li>
            ))}
          </ul>
        </div>

        {/* Prohibitions */}
        <div className="bg-red-950/10 p-8 rounded-2xl border border-red-900/30">
          <h3 className="text-red-400 font-bold mb-6 uppercase tracking-wider text-xs">Explicit Prohibitions</h3>
          <ul className="space-y-4">
            {[
              "Posting PHI or quasi-identifiable cases.",
              "Promoting unvalidated tools as clinical advice.",
              "Vendor solicitation without disclosure.",
              "“Black box” claims without methods discussion."
            ].map((rule, idx) => (
              <li key={idx} className="flex gap-3 text-slate-300 text-sm">
                <X className="text-red-500 w-5 h-5 flex-shrink-0" />
                {rule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>

    {/* SECTION 2: ESCALATION PATHWAY */}
    <section className="mb-20">
      <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <AlertTriangle className="text-amber-500 w-6 h-6" /> Ethical & Safety Escalation Pathway
      </h2>
      <div className="space-y-4">
        {[
          { 
            tier: "Tier 1 — Informal Correction", 
            type: "Educational", 
            desc: "Moderator comment providing guidance toward compliance.",
            color: "border-l-emerald-500",
            textColor: "text-emerald-400"
          },
          { 
            tier: "Tier 2 — Content Action", 
            type: "Warning", 
            desc: "Post edited, hidden, or locked. User notified with rationale.",
            color: "border-l-amber-500",
            textColor: "text-amber-400"
          },
          { 
            tier: "Tier 3 — Ethical Review", 
            type: "Investigation", 
            desc: "Triggered by safety risks or severe bias. Handled by Ethics-designated leadership.",
            color: "border-l-orange-500",
            textColor: "text-orange-400"
          },
          { 
            tier: "Tier 4 — Account Action", 
            type: "Suspension", 
            desc: "Temporary suspension or permanent removal. Logged for governance transparency.",
            color: "border-l-red-600 bg-red-900/10",
            textColor: "text-red-500"
          }
        ].map((item, idx) => (
          <div key={idx} className={`bg-slate-900 p-6 rounded-lg border-l-4 border-slate-800 ${item.color}`}>
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-white">{item.tier}</span>
              <span className={`text-[10px] font-bold uppercase tracking-widest ${item.textColor}`}>{item.type}</span>
            </div>
            <p className="text-sm text-slate-400">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* SECTION 3: CONFLICT OF INTEREST */}
    <section className="mb-20">
      <div className="bg-slate-900 p-8 rounded-2xl border border-slate-700 relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-xl font-bold text-white mb-4">Conflict-of-Interest (COI) Disclosure</h2>
          <p className="text-slate-400 text-sm mb-6 max-w-2xl">
            Required for tool discussions, sponsored research, or vendor-adjacent posts. Non-disclosure is treated as a governance issue.
          </p>
          <div className="bg-slate-950 p-4 rounded border border-slate-800 font-mono text-sm text-slate-300">
            “Disclosure: I have received funding / consulting / advisory compensation from [Entity Name].”
          </div>
        </div>
      </div>
    </section>

    {/* SECTION 4: SUCCESS METRICS */}
    <section className="border-t border-slate-800 pt-16">
      <h2 className="text-xl font-bold text-white mb-8">Transparency Metrics</h2>
      <div className="grid grid-cols-2 gap-12">
        <div>
          <h4 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Quantitative Targets</h4>
          <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4">
            <li>Threads with &gt;5 substantive replies</li>
            <li>Cross-disciplinary participation</li>
            <li>Collaborations initiated</li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-wider">Qualitative Targets</h4>
          <ul className="text-sm text-slate-500 space-y-2 list-disc pl-4">
            <li>Depth of discussion</li>
            <li>Evidence-based tone</li>
            <li>Ethical maturity</li>
          </ul>
        </div>
      </div>
    </section>

    </main>

    <footer className="text-center py-10 text-slate-600 text-xs border-t border-slate-900 bg-slate-950">
    NeoMIND-AI Forum Governance • Last Updated: Dec 2025
    </footer>

  </div>
  );
}
