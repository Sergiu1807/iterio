import React from 'react';
import { motion } from 'framer-motion';
import { useFormContext } from '../context/FormContext';

const Hero: React.FC = () => {
  const { openForm } = useFormContext();

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-black pt-[140px] pb-24">
        
        {/* Internal Styles for specific animations */}
        <style>{`
          @keyframes gradient-x {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          .animate-gradient-x {
            animation: gradient-x 3s ease infinite;
            background-size: 200% auto;
          }
        `}</style>

        {/* --- DYNAMIC BACKGROUND EFFECTS --- */}
        
        {/* 1. Static Grid Pattern Overlay */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://framerusercontent.com/images/M5O7eE2RXXWkLdQNU3Uc0DkdU.svg')] bg-cover bg-center mix-blend-overlay"></div>

        {/* 2. Moving Aurora Blobs (ENHANCED PULSE) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* Purple Blob - Faster, stronger pulse */}
            <motion.div 
                animate={{ 
                    x: [0, 40, 0],
                    y: [0, -40, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.4, 0.8, 0.4]
                }}
                transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                }}
                className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-brand-purple rounded-full blur-[100px] mix-blend-screen"
            />
            {/* Blue Blob */}
            <motion.div 
                animate={{ 
                    x: [0, -40, 0],
                    y: [0, 40, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.7, 0.3]
                }}
                transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                }}
                className="absolute top-[10%] right-[15%] w-[600px] h-[600px] bg-blue-600 rounded-full blur-[120px] mix-blend-screen"
            />
             {/* New Center Pulse Blob */}
             <motion.div 
                animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut"
                }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-fuchsia-500 rounded-full blur-[150px] mix-blend-screen"
            />
        </div>

        {/* 3. Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black z-0 pointer-events-none"></div>


        {/* --- CONTENT --- */}
        <div className="relative z-10 flex flex-col items-center gap-10 px-4 w-full max-w-[1000px]">
            
            {/* Animated Badge - Continuous Rotation */}
            <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative p-[1px] rounded-full overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
                <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_0%,#a855f7_50%,#0000_100%)] opacity-100 transition-opacity duration-500" />
                
                <div className="relative flex items-center gap-2 bg-[#0f0f16] border border-white/10 rounded-full px-5 py-2 backdrop-blur-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-lightPurple opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-lightPurple"></span>
                    </span>
                    <span className="text-white/90 text-[13px] md:text-[14px] font-sans font-medium tracking-wide">
                        Partener de Încredere pentru Businessuri în Creștere
                    </span>
                </div>
            </motion.div>

            {/* Main Headline */}
            <div className="text-center relative">
                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-[42px] md:text-[68px] lg:text-[86px] leading-[1.1] md:leading-[1] font-semibold font-sans tracking-tight text-white drop-shadow-2xl"
                >
                    Automatizăm afacerea <br className="hidden md:block"/>
                    ta în <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-lightPurple to-white animate-gradient-x">
                            30 de zile.
                        </span>
                        {/* Underline */}
                        <motion.svg 
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1, delay: 1 }}
                            className="absolute w-full h-3 -bottom-1 left-0 text-brand-purple"
                            viewBox="0 0 100 10" 
                            preserveAspectRatio="none"
                        >
                            <motion.path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                        </motion.svg>
                    </span>
                </motion.h1>
                
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="mt-2"
                >
                    <span className="font-serif italic text-[42px] md:text-[68px] lg:text-[86px] text-brand-lightPurple opacity-90 leading-[0.8] drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
                        Garantat.
                    </span>
                </motion.div>
            </div>

            {/* Subheadline */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="max-w-[680px] text-center"
            >
                <p className="text-[17px] md:text-[20px] text-[#ededed]/90 leading-relaxed font-sans font-light tracking-wide shadow-black drop-shadow-lg">
                    Implementăm agenți AI, chatboți și automatizări care îți economisesc 
                    <span className="text-white font-medium border-b border-brand-purple/50"> 20+ ore pe săptămână</span>. 
                    Zero cod. Zero bătăi de cap.
                </p>
            </motion.div>

            {/* Dynamic CTA with POWERFUL PULSE */}
            <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.7 }}
                 className="relative group cursor-pointer mt-6"
                 onClick={openForm}
            >
                 {/* Intense Pulse Effect (Heartbeat) */}
                <motion.div 
                    animate={{ 
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.1, 1],
                        filter: ["blur(8px)", "blur(16px)", "blur(8px)"]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -inset-1 bg-gradient-to-r from-[#aa75ff] via-[#995eff] to-[#844bec] rounded-[18px]"
                />
                
                <button 
                    className="relative flex items-center gap-3 bg-black border border-white/10 px-8 py-4 rounded-[16px] overflow-hidden transition-transform duration-300 active:scale-95 shadow-2xl"
                >
                    <div className="absolute inset-0 bg-btn-gradient opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/25 to-transparent z-10"></div>

                    <span className="relative z-20 text-[18px] font-medium tracking-wide text-white">Solicită Audit Gratuit</span>
                     <div className="relative z-20 bg-white/20 p-1.5 rounded-full backdrop-blur-sm group-hover:translate-x-1 transition-transform">
                         <svg width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z"/>
                         </svg>
                     </div>
                </button>
            </motion.div>

            {/* Social Proof */}
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="flex items-center gap-6 mt-6 opacity-70 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100"
            >
                <div className="flex -space-x-3">
                     {[1,2,3].map(i => (
                         <div key={i} className="w-9 h-9 rounded-full border-2 border-black bg-gray-800 overflow-hidden ring-2 ring-white/10">
                             <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Client" className="w-full h-full object-cover" />
                         </div>
                     ))}
                </div>
                <p className="text-xs text-white/80 font-medium tracking-wide">Alătură-te celor <br/> <span className="text-white font-bold text-sm">50+ parteneri</span></p>
            </motion.div>

        </div>
    </section>
  );
};

export default Hero;