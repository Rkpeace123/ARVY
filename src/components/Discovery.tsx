import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export default function Discovery() {
  return (
    <section id="discovery" className="section-padding bg-brand-bg overflow-hidden relative">
      <div className="max-container relative z-10">
        <div className="flex flex-col gap-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 text-brand-blue"
          >
            <div className="h-[1.5px] w-8 bg-brand-blue" />
            <span className="text-[10px] font-mono tracking-[0.2em] font-medium uppercase">04 — Contact</span>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="text-4xl md:text-7xl font-medium tracking-tight text-primary-black font-serif leading-tight">Start with <br /><span className="italic text-brand-blue font-serif">understanding.</span></h2>
                <p className="text-xl text-primary-black/80 leading-relaxed font-light max-w-md">
                  If your operations are slowing your growth, the first step is clarity. Book a 15-minute diagnostic call to baseline your current state.
                </p>
              </div>
              
              <div className="p-10 border border-brand-border bg-white rounded-xl space-y-6 shadow-sm">
                <div className="flex items-center gap-3 text-brand-blue font-bold uppercase tracking-widest text-[10px] font-mono">
                  <span className="w-8 h-[1px] bg-brand-blue" />
                  The Discussion
                </div>
                <p className="text-xl leading-relaxed text-primary-black font-medium italic font-serif">
                  "This is not a sales call. We’ll understand how your operations run, identify potential inefficiencies, and explore whether improvements can create meaningful impact."
                </p>
              </div>
            </div>

            <div className="space-y-12">
              <div className="bg-white border border-brand-blue/20 rounded-2xl p-12 text-center space-y-8 shadow-2xl shadow-brand-blue/5">
                <div className="inline-flex p-4 bg-brand-blue/5 text-brand-blue rounded-full mb-4">
                  <Calendar size={32} />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-medium tracking-tight text-primary-black font-serif">Schedule your diagnostic</h3>
                  <p className="text-brand-gray font-light max-w-sm mx-auto">
                    Select a time on our calendar to speak directly with an operations consultant. No sales pitch, just a 15-minute audit.
                  </p>
                </div>
                <Link 
                  to="/book" 
                  className="inline-flex items-center justify-center w-full bg-brand-blue hover:bg-opacity-90 text-white font-bold py-5 rounded-lg transition-all text-sm tracking-wide"
                >
                  Go to Calendar
                </Link>
              </div>

              <div className="p-8 border border-white bg-white/50 backdrop-blur-sm rounded-xl text-center space-y-4 shadow-sm border border-brand-border">
                <span className="text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-brand-gray/60">Standard Availability</span>
                <div className="flex justify-center gap-6">
                  <span className="text-xs font-medium text-primary-black">• 30-min slots</span>
                  <span className="text-xs font-medium text-primary-black">• 2 slots remaining this week</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
