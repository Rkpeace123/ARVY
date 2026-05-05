import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-border overflow-hidden relative">
      <div className="absolute inset-0 grid-pattern opacity-10" />
      
      <div className="max-container relative z-10">
        
        {/* Final CTA */}
        <div className="section-padding text-center space-y-12 border-b border-brand-border">
          <div className="space-y-6">
            <div className="flex flex-col items-center gap-4">
              <span className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-brand-blue">Final Word</span>
              <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-primary-black leading-tight font-serif">
                Clarity is the first step <br className="hidden md:block" /> to better operations.
              </h2>
            </div>
            <p className="text-xl text-brand-gray max-w-2xl mx-auto leading-relaxed font-light">
              Better systems start with better understanding. Request an audit to define your operational baseline and identify immediate ROI opportunities.
            </p>
          </div>
          <Link 
            to="/book" 
            className="group relative inline-flex items-center gap-4 bg-brand-blue text-white px-10 py-5 rounded-md font-bold text-sm tracking-wide transition-all hover:bg-opacity-90 hover:shadow-2xl hover:shadow-brand-blue/20 active:scale-[0.98]"
          >
            Book a discovery call
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
          </Link>
        </div>

        <div className="py-20 grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-10">
            <div className="space-y-6">
              <Logo className="h-12" />
              <p className="text-brand-gray max-w-xs font-light leading-relaxed text-sm">
                Applied Intelligence. Real Operations. <br />
                The operational intelligence firm for high-growth enterprises.
              </p>
            </div>
            <div className="flex gap-10 text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-brand-gray">
              <a href="#how-we-work" className="hover:text-brand-blue transition-colors">Approach</a>
              <a href="#problem" className="hover:text-brand-blue transition-colors">Problem</a>
              <a href="#discovery" className="hover:text-brand-blue transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col md:items-end gap-10">
            <div className="flex flex-col md:items-end gap-3 text-sm text-brand-gray font-medium">
              <p>© {new Date().getFullYear()} ARVY. All rights reserved.</p>
              <div className="flex gap-8">
                <a href="#" className="hover:text-primary-black transition-colors uppercase tracking-[0.1em] text-[10px]">Privacy Policy</a>
                <a href="#" className="hover:text-primary-black transition-colors uppercase tracking-[0.1em] text-[10px]">Terms of Service</a>
              </div>
            </div>
            
            <div className="p-6 bg-white border border-brand-border rounded-xl flex items-center gap-6 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              <span className="text-[10px] font-mono font-medium uppercase tracking-widest text-brand-gray">Consultation capacity: 2 slots remaining this month</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
