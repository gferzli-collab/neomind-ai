import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar'; // <--- Check 1: Is this import here?

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NeoMIND-AI',
  description: 'Advancing Ethical, Clinically-Grounded AI for Neonatal Care',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        
        {/* Check 2: Is this component inside the body? */}
        <Navbar />

        <main>{children}</main>

        <footer className="bg-slate-950 border-t border-slate-900 py-12 text-center text-slate-600 text-sm">
            © 2025 NeoMIND-AI. All Rights Reserved.
        </footer>
      </body>
    </html>
  );
}
