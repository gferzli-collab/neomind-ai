'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path ? "text-white font-semibold" : "text-slate-400 hover:text-white";

  return (
    <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
            <span className="text-xl font-bold text-white tracking-tight">NeoMIND-AI</span>
        </Link>
        
        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex gap-8 text-sm font-medium transition-colors">
            <Link href="/programs" className={isActive('/programs')}>Programs</Link>
            <Link href="/community" className={isActive('/community')}>Community</Link>
            <Link href="/governance" className={isActive('/governance')}>Governance</Link>
        </div>

        {/* DESKTOP CTA */}
        <div className="hidden lg:block">
             <Link href="/community" className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2 rounded-full text-sm font-bold transition shadow-lg shadow-sky-900/20">
                Join
             </Link>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2">
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-slate-950 border-b border-slate-800 p-6 flex flex-col gap-6 shadow-2xl">
            <Link href="/programs" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white">Programs</Link>
            <Link href="/community" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white">Community</Link>
            <Link href="/governance" onClick={() => setIsOpen(false)} className="text-lg font-medium text-slate-300 hover:text-white">Governance</Link>
            <Link href="/community" onClick={() => setIsOpen(false)} className="bg-sky-600 text-white py-3 rounded-lg font-bold text-center">Join the Collaborative</Link>
        </div>
      )}
    </nav>
  );
}