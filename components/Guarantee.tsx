import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';

const Guarantee: React.FC = () => {
  return (
    <section className="w-full py-20 bg-black flex justify-center border-t border-white/5 relative overflow-hidden">
        
        {/* Background Ambience */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full pointer-events-none animate-pulse"></div>

        <div className="w-full max-w-[1000px] px-4 flex flex-col items-center gap-12 relative z-10">
            
            <div className="text-center space-y-4">
                <h3 className="text-2xl md:text-3xl text-white font-semibold font-inter">
                    Riscul este <span className="text-emerald-400">Zero</span>. Valoarea este <span className="text-emerald-400">Imensă</span>.
                </h3>
            </div>

            {/* Main Card with Pulse Effect */}
            <div className="group relative w-full">
                {/* Pulsing Border Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 via-green-400 to-emerald-600 rounded-[30px] opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-1000 animate-pulse"></div>
                
                <div className="relative w-full bg-[#020c08] border border-emerald-500/30 rounded-[28px] p-8 md:p-12 flex flex-col lg:flex-row items-center gap-10 overflow-hidden">
                    
                    {/* Dashed Border Overlay */}
                    <div className="absolute inset-0 border-2 border-dashed border-emerald-500/20 rounded-[28px] pointer-events-none m-2"></div>

                    {/* Left Icon */}
                    <div className="relative flex-shrink-0">
                        <div className="w-32 h-32 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]">
                            <ShieldCheck size={64} className="text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                        </div>
                    </div>

                    {/* Center Content */}
                    <div className="flex flex-col gap-5 text-center lg:text-left flex-1 relative z-10">
                        <h4 className="text-3xl font-bold text-white font-inter">
                            Garanția <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500">"Rezultate sau Banii Înapoi"</span>
                        </h4>
                        <p className="text-lg leading-relaxed text-emerald-100/70 font-sans tracking-wide">
                            Nu riscăm banii tăi. Dacă în primele <span className="text-white font-bold">90 de zile</span> nu vezi o îmbunătățire măsurabilă în eficiența proceselor optimizate, îți returnăm integral investiția.
                        </p>
                        <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                             <div className="flex items-center gap-2 bg-emerald-900/30 border border-emerald-500/30 px-4 py-1.5 rounded-full">
                                <Check size={14} className="text-emerald-400" />
                                <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Fără Întrebări</span>
                             </div>
                             <div className="flex items-center gap-2 bg-emerald-900/30 border border-emerald-500/30 px-4 py-1.5 rounded-full">
                                <Check size={14} className="text-emerald-400" />
                                <span className="text-emerald-100 text-xs font-bold uppercase tracking-wider">Contract Legal</span>
                             </div>
                        </div>
                    </div>

                    {/* Right Price/Value Anchor - High Visibility */}
                    <div className="flex flex-col items-center justify-center gap-2 bg-white/5 p-6 rounded-2xl border border-white/10 min-w-[220px] backdrop-blur-sm transform transition-transform group-hover:scale-105 duration-300">
                         <span className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">Valoare Audit</span>
                         <div className="relative">
                            <span className="text-4xl font-bold text-red-500/80 font-sans line-through decoration-white/40 decoration-2">€1298</span>
                         </div>
                         <div className="h-px w-full bg-white/10 my-2"></div>
                         <span className="text-white/60 text-xs font-medium">Prețul tău azi:</span>
                         <span className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-200 drop-shadow-lg">
                            GRATUIT
                         </span>
                    </div>

                </div>
            </div>

        </div>
    </section>
  );
};

export default Guarantee;