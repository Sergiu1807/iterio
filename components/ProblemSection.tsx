import React, { useEffect, useRef } from 'react';
import { RefreshCw, Clock, TrendingDown } from 'lucide-react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';

// --- Helper Component: Rolling Number Ticker ---
const Counter: React.FC<{ to: number; duration?: number }> = ({ to, duration = 2 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, { duration: duration * 1000, bounce: 0 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  useEffect(() => {
    if (inView) {
      spring.set(to);
    }
  }, [inView, to, spring]);

  return (
    <motion.span ref={ref} className="inline-block tabular-nums text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-300">
      {rounded}
    </motion.span>
  );
};

const ProblemSection: React.FC = () => {
    const problems = [
        {
            icon: <RefreshCw className="w-6 h-6 text-white" />,
            title: "Procese Manuale Repetitive",
            description: "Echipa ta copiază date între sisteme, creează rapoarte manual și pierde ore pe taskuri care s-ar putea automatiza."
        },
        {
            icon: <Clock className="w-6 h-6 text-white" />,
            title: "Timp Pierdut Zilnic",
            // We'll render this dynamically in the map function to inject the animation
            description: "ore pe săptămână se duc pe activități administrative în loc de muncă strategică care generează venituri.",
            special: true // Flag to identify the card needing animation
        },
        {
            icon: <TrendingDown className="w-6 h-6 text-white" />,
            title: "Clienți Pierduți",
            description: "Nu răspunzi suficient de repede, pierzi lead-uri și clienții aleg competiția care răspunde instant."
        }
    ];

  return (
    <section className="relative w-full py-32 bg-black flex justify-center overflow-hidden">
      
      {/* 1. The Atmosphere: Background & Blending */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         
         {/* Central Deep Glow - Changed to radial to fade out to edges */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e] via-black/90 to-black opacity-100"></div>
         
         {/* Vertical Blending Gradients (The 'Fade' Effect) */}
         <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent z-10"></div>
         <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10"></div>

         {/* Ambient Glows - Softer and more dispersed */}
         <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-purple-800/10 blur-[120px] rounded-full mix-blend-screen"></div>
         <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-pink-800/5 blur-[100px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="relative z-20 w-full max-w-[1240px] px-4 flex flex-col items-center gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-lg">
                <span className="flex h-2 w-2 rounded-full bg-brand-lightPurple animate-pulse"></span>
                <p className="text-brand-lightPurple text-xs font-bold tracking-widest uppercase">Problemă Identificată</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-inter leading-tight tracking-tight drop-shadow-2xl">
                Ești blocat în taskuri <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">repetitive?</span>
            </h2>
            
            <p className="text-lg text-slate-400 font-sans leading-relaxed max-w-2xl">
                Completezi date manual între sisteme? Răspunzi la aceleași întrebări zilnic? 
                Există o cale mai bună: <span className="text-white font-medium">Automatizarea Inteligentă.</span>
            </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {problems.map((item, index) => (
                <div 
                    key={index} 
                    className="group relative h-full"
                >
                    {/* 2. Card Design: Neon Gradient Border Wrapper */}
                    <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-violet-600 via-white/5 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500 blur-[1px]"></div>
                    
                    {/* Glassmorphic Card Surface */}
                    <div className="relative h-full bg-[#0a0a10]/60 backdrop-blur-xl rounded-2xl p-8 flex flex-col gap-6 border border-white/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:bg-[#0a0a10]/80 group-hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.2)]">
                        
                        {/* 4. Icon: Gradient Container */}
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-purple to-pink-600 flex items-center justify-center shadow-lg shadow-purple-500/20 group-hover:scale-110 transition-transform duration-500">
                            {item.icon}
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-xl font-bold text-white font-inter tracking-wide group-hover:text-brand-lightPurple transition-colors">
                                {item.title}
                            </h3>
                            
                            {/* 3. Rolling Number Animation Logic */}
                            {item.special ? (
                                <p className="text-slate-400 leading-relaxed font-sans text-[15px]">
                                    <span className="text-3xl font-extrabold text-white mr-1 block mb-2">
                                        <Counter to={15} />-<Counter to={20} />
                                    </span>
                                    {item.description}
                                </p>
                            ) : (
                                <p className="text-slate-400 leading-relaxed font-sans text-[15px]">
                                    {item.description}
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;