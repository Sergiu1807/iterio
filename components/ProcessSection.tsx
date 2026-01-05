import React, { useState, useEffect } from 'react';
import { Search, Settings, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';
import { useFormContext } from '../context/FormContext';

const ProcessSection: React.FC = () => {
    const activeStepState = useState(0);
    const [activeStep, setActiveStep] = activeStepState;
    const [isPaused, setIsPaused] = useState(false);
    const { openForm } = useFormContext();

    const steps = [
        {
            id: 1,
            title: "Analiză",
            stepLabel: "01",
            headline: "Analizăm Afacerea Ta",
            description: "Într-o întâlnire de 30 de minute identificăm exact unde pierzi timp și bani. Primești un raport cu recomandări specifice - fără obligații.",
            icon: Search,
            color: "from-cyan-400 to-blue-600",
            shadow: "shadow-cyan-500/20"
        },
        {
            id: 2,
            title: "Build",
            stepLabel: "02",
            headline: "Construim Automatizările",
            description: "În 2-4 săptămâni implementăm soluțiile potrivite. Tu continui să lucrezi normal - noi ne ocupăm de tot: configurare, integrare, testare.",
            icon: Settings,
            color: "from-purple-400 to-fuchsia-600",
            shadow: "shadow-purple-500/20"
        },
        {
            id: 3,
            title: "Scale",
            stepLabel: "03",
            headline: "Măsurăm Rezultatele",
            description: "Urmărim exact cât timp și câți bani economisești. Ajustăm și optimizăm până când ești complet mulțumit.",
            icon: Rocket,
            color: "from-emerald-400 to-green-600",
            shadow: "shadow-emerald-500/20"
        }
    ];

    // Auto-cycle steps
    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isPaused, steps.length, setActiveStep]);

    return (
        <section id="proces" className="relative w-full py-24 bg-black flex justify-center overflow-hidden">
            
            {/* --- Blending Gradients --- */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

            {/* Ambient Background - Dynamic Color based on Step */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none transition-colors duration-1000 z-0">
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-gradient-to-r ${steps[activeStep].color} opacity-[0.04] blur-[150px] transition-all duration-1000`} />
            </div>

            <div className="w-full max-w-[1240px] px-4 flex flex-col items-center gap-12 md:gap-16 relative z-20">
                
                {/* Header */}
                <div className="text-center space-y-4 md:space-y-6 max-w-3xl">
                     <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-md">
                        <span className="flex h-2 w-2 rounded-full bg-brand-lightPurple shadow-[0_0_10px_currentColor]"></span>
                        <span className="text-xs font-medium tracking-widest text-white/60 uppercase font-sans">Procesul Nostru</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-medium text-white font-sans leading-[1.1]">
                        Simplu & <br />
                        <span className="font-serif italic text-brand-lightPurple opacity-90">
                            Extrem de Eficient.
                        </span>
                    </h2>
                </div>

                {/* --- INTERACTIVE STAGE --- */}
                <div 
                    className="w-full flex flex-col items-center gap-12 md:gap-16"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    
                    {/* Nodes & Connections Row */}
                    <div className="relative w-full max-w-[900px] flex items-center justify-between h-32 md:h-52 select-none px-2 md:px-0">
                        
                        {/* Connecting Line Layer */}
                        <div className="absolute top-1/2 left-4 right-4 md:left-20 md:right-20 -translate-y-1/2 h-[1px] bg-white/10 z-0">
                             {/* Active Beam */}
                             <motion.div 
                                className="h-full bg-gradient-to-r from-transparent via-white/50 to-transparent blur-[1px]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
                                transition={{ duration: 0.6, ease: "circOut" }}
                             />
                        </div>

                        {/* Nodes */}
                        {steps.map((step, index) => {
                            const isActive = index === activeStep;
                            
                            return (
                                <div 
                                    key={step.id} 
                                    className="relative z-10 cursor-pointer group"
                                    onClick={() => setActiveStep(index)}
                                    onMouseEnter={() => setActiveStep(index)}
                                >
                                    {/* 1. Abstract Orbital Ring (Rotating) */}
                                    <motion.div 
                                        className={`absolute inset-[-8px] md:inset-[-20px] rounded-full border border-dashed border-white/20 transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                                        animate={isActive ? { rotate: 360 } : { rotate: 0 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                    />

                                    {/* 2. Main Orb Container - Resized for Mobile */}
                                    <motion.div 
                                        className={`
                                            w-20 h-20 md:w-44 md:h-44 rounded-full 
                                            flex flex-col items-center justify-center
                                            backdrop-blur-2xl border 
                                            bg-[#050505] relative overflow-hidden
                                            transition-all duration-500 ease-out
                                            ${isActive ? 'border-white/20 scale-110' : 'border-white/10 scale-100 hover:border-white/15'}
                                            ${isActive ? step.shadow : ''} shadow-2xl
                                        `}
                                    >
                                        {/* Inner Depth Gradient (Black Hole Effect) */}
                                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none" />
                                        
                                        {/* Active Color Wash */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-700 ${isActive ? 'opacity-10' : ''}`} />

                                        {/* Content */}
                                        <div className="relative z-10 flex flex-col items-center gap-1 md:gap-3 px-1 md:px-2">
                                            {/* Icon */}
                                            <div className={`p-1.5 md:p-2 rounded-full transition-all duration-500 ${isActive ? 'bg-white/10 text-white translate-y-0' : 'text-white/40 translate-y-1'}`}>
                                                <step.icon size={18} className="md:w-7 md:h-7" />
                                            </div>

                                            {/* Typography Mix */}
                                            <div className="text-center">
                                                <span className={`block text-[10px] md:text-sm font-serif italic tracking-widest mb-0.5 md:mb-1 transition-colors duration-300 ${isActive ? 'text-brand-lightPurple font-semibold' : 'text-white/40'}`}>
                                                    {step.stepLabel}
                                                </span>
                                                <span className={`block text-xs md:text-xl font-bold font-sans tracking-tight leading-none transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/50'}`}>
                                                    {step.title}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Content Card - Minimal & Clean */}
                    <div className="w-full max-w-[700px] relative min-h-[160px] px-4">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="w-full text-center"
                            >
                                <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 font-sans tracking-tight">
                                    {steps[activeStep].headline}
                                </h3>
                                <p className="text-lg text-white/60 leading-relaxed font-sans font-light">
                                    {steps[activeStep].description}
                                </p>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

                <div className="mt-4">
                    <Button onClick={openForm} variant="primary">
                        Începe Analiza Gratuită
                    </Button>
                </div>

            </div>
        </section>
    );
};

export default ProcessSection;