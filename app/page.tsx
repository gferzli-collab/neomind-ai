import Link from 'next/link';
import { 
  ArrowRight, 
  CheckCircle, 
  GraduationCap, 
  Microscope, 
  Cpu, 
  Globe, 
  MessageSquare, 
  Activity 
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* INTERNAL NAVIGATION TABS */}
      <nav className="sticky top-20 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex gap-8 overflow-x-auto scrollbar-hide">
            <a href="#hero" className="text-slate-300 hover:text-white font-medium whitespace-nowrap">Home</a>
            <a href="#why-matters" className="text-slate-300 hover:text-white font-medium whitespace-nowrap">Why It Matters</a>
            <a href="#difference" className="text-slate-300 hover:text-white font-medium whitespace-nowrap">Our Difference</a>
            <a href="#what-we-do" className="text-slate-300 hover:text-white font-medium whitespace-nowrap">What We Do</a>
            <a href="#cta" className="text-slate-300 hover:text-white font-medium whitespace-nowrap">Get Involved</a>
          </div>
        </div>
      </nav>
      
      {/* HERO SECTION */}
      <section id="hero" className="relative pt-40 pb-24 px-6 overflow-hidden">
        {/* Background Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-sky-500/15 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-8">
            Advancing Ethical, <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
              Clinically-Grounded AI
            </span> <br />
            for Neonatal Care
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            A global collaborative uniting neonatologists, pediatric clinicians, data scientists, and innovators to ensure artificial intelligence improves outcomes for the most vulnerable patients—safely, equitably, and transparently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/community" 
              className="bg-white text-slate-900 px-8 py-3.5 rounded-lg font-bold hover:bg-slate-100 transition shadow-lg shadow-sky-900/20"
            >
              Join the Collaborative
            </Link>
            <Link 
              href="/programs" 
              className="bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white px-8 py-3.5 rounded-lg font-bold hover:bg-slate-800 transition"
            >
              Explore Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* WHY THIS MATTERS */}
      <section id="why-matters" className="py-20 bg-slate-900/50 border-y border-slate-800">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why This Matters</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Artificial intelligence is rapidly transforming healthcare. Yet most AI systems are developed using adult-centric data, deployed without pediatric-specific validation, and governed without adequate safeguards for children.
          </p>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            In neonatal and pediatric care, these gaps are not theoretical. They pose real risks to safety, equity, and trust.
          </p>
          <p className="text-sky-400 font-bold text-xl">
            NeoMIND-AI exists to close this gap.
          </p>
        </div>
      </section>

      {/* THE DIFFERENCE (Pillars) */}
      <section id="difference" className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white">The NeoMIND-AI Difference</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 border-t-4 border-t-sky-500 hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">Clinician-Led</h3>
            <p className="text-slate-400 leading-relaxed text-sm">Founded and governed by frontline neonatal and pediatric clinicians.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 border-t-4 border-t-indigo-500 hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">Ethically Grounded</h3>
            <p className="text-slate-400 leading-relaxed text-sm">Bias, equity, transparency, and accountability are foundational—not optional.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 border-t-4 border-t-emerald-500 hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">Scientifically Rigorous</h3>
            <p className="text-slate-400 leading-relaxed text-sm">Focused on validation, generalizability, and real-world clinical impact.</p>
          </div>
          {/* Card 4 */}
          <div className="bg-slate-900/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 border-t-4 border-t-rose-500 hover:-translate-y-1 transition duration-300">
            <h3 className="text-xl font-bold text-white mb-3">Globally Inclusive</h3>
            <p className="text-slate-400 leading-relaxed text-sm">Designed for relevance across diverse populations and resource settings.</p>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="py-24 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-8">What We Do</h2>
            <div className="space-y-8">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Education</h4>
                  <p className="text-slate-400">Practical AI literacy and applied training for clinicians.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Microscope className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Research & Data Science</h4>
                  <p className="text-slate-400">Clinically driven, ethically governed AI research.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Cpu className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Clinical AI Tools</h4>
                  <p className="text-slate-400">Translational tools embedded in real workflows.</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-sky-400 flex-shrink-0">
                  <Globe className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Global & Equity Initiatives</h4>
                  <p className="text-slate-400">Reducing bias and expanding access worldwide.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Community Feature Card */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-slate-900 p-8 rounded-2xl border border-slate-700">
              <div className="flex items-center justify-between mb-6">
                 <h3 className="text-2xl font-bold text-white">Community</h3>
                 <MessageSquare className="text-sky-400 w-6 h-6" />
              </div>
              <p className="text-slate-300 leading-relaxed mb-8">
                NeoMIND-AI is a living community—connecting people, projects, and purpose across disciplines and borders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/community" 
                  className="bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-bold transition text-center"
                >
                  Join the Discussion
                </Link>
                <Link 
                  href="/programs" 
                  className="bg-transparent border border-slate-600 text-white hover:bg-slate-800 px-6 py-3 rounded-lg font-bold transition text-center"
                >
                  View Active Initiatives
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section id="cta" className="py-24 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Be Part of the Future of Neonatal AI</h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Join us in shaping AI that is safe, equitable, and clinically meaningful.
        </p>
        <Link 
          href="/community" 
          className="inline-flex items-center gap-2 bg-white text-slate-900 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition shadow-xl shadow-sky-900/20"
        >
          Join the Collaborative <ArrowRight className="w-5 h-5" />
        </Link>
      </section>
      
    </div>
  );
}
