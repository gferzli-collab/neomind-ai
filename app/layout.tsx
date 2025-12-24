import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NeoMIND-AI',
  description: 'Advancing Ethical, Clinically-Grounded AI for Neonatal Care',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        {/* SHARED NAVBAR */}
        <nav className="fixed w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center text-white font-bold">N</div>
                    <span className="text-xl font-bold text-white tracking-tight">NeoMIND-AI</span>
                </Link>
                
                <div className="hidden lg:flex gap-8 text-sm font-medium text-slate-400">
                    <Link href="/programs" className="hover:text-white transition">Programs</Link>
                    <Link href="/community" className="hover:text-white transition">Community</Link>
                    <Link href="/governance" className="hover:text-white transition">Governance</Link>
                </div>

                <div className="hidden lg:block">
                     <Link href="/community" className="bg-sky-600 hover:bg-sky-500 text-white px-5 py-2 rounded-full text-sm font-bold transition">
                        Join
                     </Link>
                </div>
            </div>
        </nav>

        {/* PAGE CONTENT */}
        <main>{children}</main>

        {/* SHARED FOOTER */}
        <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-slate-600 text-sm">
            © 2025 NeoMIND-AI. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
