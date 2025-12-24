import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NeoMIND-AI | The Global Neonatal AI Collaborative',
  description: 'Advancing Ethical, Clinically-Grounded AI for Neonatal and Pediatric Care. Join the collaborative uniting clinicians and data scientists.',
  openGraph: {
    title: 'NeoMIND-AI',
    description: 'Advancing Ethical, Clinically-Grounded AI for Neonatal Care.',
    url: 'https://neomind-ai.vercel.app', // Update this with your actual domain later
    siteName: 'NeoMIND-AI',
    images: [
      {
        url: '/og-image.png', // We will add this image next
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        
        <Navbar />  {/* <-- This handles Mobile & Active states now */}

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
