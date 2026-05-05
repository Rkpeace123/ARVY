import { motion } from 'motion/react';
import { ArrowRight, TrendingUp, DollarSign, Clock } from 'lucide-react';

import { Link } from 'react-router-dom';

const OutcomeCard = ({ icon: Icon, text, subtext, delay }: { icon: any, text: string, subtext: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: 20, y: 0 }}
    animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
    transition={{ 
      opacity: { duration: 0.8, delay },
      x: { duration: 0.8, delay },
      y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }
    }}
    className="bg-white border border-brand-border p-5 rounded-2xl shadow-2xl shadow-black/5 flex items-center gap-5 w-[280px]"
  >
    <div className="p-3.5 bg-brand-bg text-brand-blue rounded-xl border border-brand-border">
      <Icon size={24} strokeWidth={2.5} />
    </div>
    <div className="flex flex-col">
      <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-gray mb-1">Impact</span>
      <span className="text-xl font-black text-primary-black leading-tight tracking-tighter">{text}</span>
      <span className="text-[10px] font-serif italic text-brand-blue mt-1">{subtext}</span>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-24 relative overflow-hidden grid-pattern">
      {/* Subtle brand background gradient */}
      <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-transparent to-brand-blue/5 -z-10" />
      
      <div className="max-container w-full">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 text-brand-blue"
              >
                <div className="h-[2px] w-12 bg-brand-blue" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em]">Operational Intelligence</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-6xl md:text-[80px] font-medium leading-[1.05] tracking-tight text-primary-black font-serif"
              >
                Your business doesn't <br />
                have a <span className="italic text-brand-blue font-serif">technology</span> problem.
              </motion.h1>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-8"
            >
              <p className="text-3xl md:text-5xl font-normal text-primary-black/80 font-serif italic tracking-tight">
                It has an operational one.
              </p>
              
              <p className="text-lg md:text-xl text-primary-black/70 leading-relaxed max-w-xl font-light">
                We diagnose how your business actually works, identify what's slowing it down, and build systems that create measurable outcomes — not just another tool subscription.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Link 
                  to="/book" 
                  className="group relative inline-flex items-center justify-center bg-brand-blue text-white px-10 py-5 rounded-md font-bold text-sm tracking-wide transition-all hover:bg-opacity-90 hover:shadow-2xl hover:shadow-brand-blue/30 active:scale-[0.98]"
                >
                  Book a discovery call
                  <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={2} />
                </Link>
                <a 
                  href="#how-we-work" 
                  className="inline-flex items-center justify-center text-primary-black px-10 py-5 rounded-md font-bold text-sm tracking-wide border border-brand-border bg-white/50 backdrop-blur-sm hover:bg-white transition-all shadow-sm"
                >
                  How it works ↓
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Floating Outcome Cards */}
          <div className="hidden lg:flex flex-col gap-10 items-end relative py-20 pr-10">
            {/* Visual background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-blue/5 blur-[120px] rounded-full -z-10" />
            
            <div className="mr-32">
              <OutcomeCard icon={TrendingUp} text="35–40%" subtext="Capacity lost to manual tasks" delay={0.6} />
            </div>
            <div className="mr-8">
              <OutcomeCard icon={DollarSign} text="2 Weeks" subtext="To deliver complete audit" delay={0.8} />
            </div>
            <div className="mr-40">
              <OutcomeCard icon={Clock} text="Zero Tools" subtext="Sold before we diagnose" delay={1.0} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
