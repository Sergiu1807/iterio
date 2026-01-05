import React, { useState } from 'react';
import { TrendingUp, CheckCircle2, Building2, Stethoscope, Home, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface CaseStudyProps {
    study: {
        summary: { title: string; industry: string; mainResult: string; icon: any; color: string; gradientClass: string };
        details: { problem: string; solution: string[]; results: string[]; testimonial: { quote: string; author: string } };
    };
    index: number;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ study }) => {
    const [isHovered, setIsHovered] = useState(false);

    // Toggle logic for mobile (click) and desktop (hover)
    const handleInteraction = () => {
        setIsHovered(!isHovered);
    };

    return (
        <motion.div
            className="w-full rounded-[24px] bg-[#08080a] border border-white/5 overflow-hidden relative cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleInteraction}
            animate={{
                backgroundColor: isHovered ? '#0c0c10' : '#08080a',
                borderColor: isHovered ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)',
            }}
            transition={{ duration: 0.3 }}
        >
             {/* Background Glow - Intensifies on Hover/Active */}
            <div className={`absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b ${study.summary.color} opacity-[0.02] blur-[120px] rounded-full pointer-events-none transition-opacity duration-700 ${isHovered ? 'opacity-[0.08]' : ''}`} />

            <div className="relative z-10 px-6 py-6 md:px-10 md:py-8">
                
                {/* --- HEADER ROW (Always Visible) --- */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-start md:items-center gap-5">
                        {/* Icon Box */}
                        <div className={`w-14 h-14 rounded-2xl ${study.summary.gradientClass} flex items-center justify-center shrink-0 border border-white/5 shadow-lg`}>
                             {React.createElement(study.summary.icon, { size: 24, className: "text-white" })}
                        </div>
                        
                        {/* Title & Industry */}
                        <div>
                             <div className="flex items-center gap-3 mb-1.5">
                                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/40 border border-white/10 px-2 py-0.5 rounded-full bg-white/5">
                                    {study.summary.industry}
                                </span>
                             </div>
                             <h3 className="text-xl md:text-2xl font-bold text-white font-inter tracking-tight">
                                {study.summary.title}
                             </h3>
                        </div>
                    </div>

                    {/* Result & Expander */}
                    <div className="flex items-center justify-between md:justify-end gap-8 pl-4 md:pl-0 border-l border-white/5 md:border-l-0">
                        <div className="text-left md:text-right">
                             <p className="text-emerald-400 font-bold text-lg md:text-xl font-sans tracking-tight">
                                {study.summary.mainResult}
                             </p>
                             <p className="text-emerald-400/40 text-[10px] font-bold uppercase tracking-wider hidden md:block">
                                Impact Principal
                             </p>
                        </div>
                        <div className={`p-3 rounded-full border border-white/5 transition-all duration-500 flex items-center justify-center ${isHovered ? 'rotate-180 bg-white/10 border-white/20' : 'bg-transparent text-white/30'}`}>
                             <ChevronDown size={20} className={isHovered ? 'text-white' : 'text-current'} />
                        </div>
                    </div>
                </div>

                {/* --- EXPANDED CONTENT (Visible on Hover/Click) --- */}
                <AnimatePresence>
                    {isHovered && (
                        <motion.div
                            initial={{ height: 0, opacity: 0, marginTop: 0 }}
                            animate={{ height: "auto", opacity: 1, marginTop: 32 }}
                            exit={{ height: 0, opacity: 0, marginTop: 0 }}
                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }} // Smooth bezier
                            className="overflow-hidden"
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-white/5">
                                
                                {/* LEFT: Problem & Solution */}
                                <div className="space-y-8">
                                    <div className="relative pl-4 border-l-2 border-white/10">
                                        <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-2">Provocarea</h4>
                                        <p className="text-white/80 leading-relaxed text-[15px] font-sans">
                                            {study.details.problem}
                                        </p>
                                    </div>
                                    
                                    <div>
                                         <h4 className="text-white/40 text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-lightPurple"></span>
                                            Soluția Implementată
                                         </h4>
                                         <ul className="space-y-3">
                                            {study.details.solution.map((s, i) => (
                                                <li key={i} className="flex items-start gap-3 text-[14px] text-white/70 group/item">
                                                    <CheckCircle2 size={16} className="text-brand-lightPurple mt-0.5 shrink-0 group-hover/item:text-brand-purple transition-colors" />
                                                    <span className="font-medium">{s}</span>
                                                </li>
                                            ))}
                                         </ul>
                                    </div>
                                </div>

                                {/* RIGHT: Metrics & Quote */}
                                <div className="space-y-8 flex flex-col justify-between">
                                     <div className="bg-white/[0.03] rounded-2xl p-6 border border-white/5">
                                        <h4 className="text-emerald-500/60 text-xs font-bold uppercase tracking-widest mb-4">Rezultate Detaliate</h4>
                                        <ul className="space-y-3">
                                            {study.details.results.map((r, i) => (
                                                <li key={i} className="flex items-center gap-3 text-sm text-white font-medium">
                                                    <TrendingUp size={16} className="text-emerald-400 shrink-0" />
                                                    {r}
                                                </li>
                                            ))}
                                        </ul>
                                     </div>
                                     
                                     <div className="relative">
                                        <div className="text-brand-purple/20 text-4xl absolute -top-4 -left-2 font-serif select-none">"</div>
                                        <p className="text-white/60 text-sm italic leading-relaxed pl-6 relative z-10">
                                            {study.details.testimonial.quote}
                                        </p>
                                        <div className="mt-3 pl-6 flex items-center gap-2">
                                            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold text-white">
                                                {study.details.testimonial.author.charAt(0)}
                                            </div>
                                            <span className="text-white/40 text-xs font-bold uppercase tracking-wider">
                                                {study.details.testimonial.author}
                                            </span>
                                        </div>
                                     </div>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    )
}

const CaseStudiesSection: React.FC = () => {
    const studies = [
        {
            summary: {
                title: "Hotel Boutique București",
                industry: "Hospitality",
                mainResult: "25 Ore Salvate / Săptămână",
                icon: Building2,
                color: "from-purple-500 to-indigo-500",
                gradientClass: "bg-gradient-to-br from-purple-500/20 to-indigo-500/20"
            },
            details: {
                problem: "Recepția era copleșită. Ratau rezervări, răspundeau târziu la emailuri, iar oaspeții sunau constant pentru întrebări repetitive (check-in, parcare, mic dejun).",
                solution: [
                    "Chatbot AI antrenat pe specificul hotelului",
                    "Sincronizare automată cu Booking Engine",
                    "Sistem automat de confirmări & review-uri"
                ],
                results: [
                    "85% din întrebări preluate de AI",
                    "Rata de conversie rezervări directe: +18%",
                    "Rating Booking.com crescut cu 0.4 puncte"
                ],
                testimonial: {
                    quote: "Nu mai trebuie să răspundem la 'Ce oră e check-in-ul?' de 20 de ori pe zi. Chatbot-ul face asta impecabil, iar noi ne ocupăm de oaspeții din hotel.",
                    author: "Maria D., Manager"
                }
            }
        },
        {
            summary: {
                title: "Clinică Stomatologică Cluj",
                industry: "Medical",
                mainResult: "No-Show redus la sub 8%",
                icon: Stethoscope,
                color: "from-cyan-500 to-blue-500",
                gradientClass: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20"
            },
            details: {
                problem: "Pacienții uitau de programări (rată no-show 22%). O asistentă petrecea 4 ore pe zi sunând pentru confirmări manuale.",
                solution: [
                    "Confirmări automate pe WhatsApp (24h/2h înainte)",
                    "Receptionist AI pentru apeluri în weekend",
                    "Reactivare automată a pacienților vechi"
                ],
                results: [
                    "No-show redus de la 22% la 8%",
                    "30 ore/lună economisite la recepție",
                    "ROI complet în doar 45 de zile"
                ],
                testimonial: {
                    quote: "Sistemul confirmă programările singur. Dacă un pacient anulează, AI-ul contactează automat lista de așteptare. E magic.",
                    author: "Dr. Alexandru P."
                }
            }
        },
        {
            summary: {
                title: "Agenție Imobiliară Timișoara",
                industry: "Imobiliare",
                mainResult: "Conversie Lead +35%",
                icon: Home,
                color: "from-orange-500 to-red-500",
                gradientClass: "bg-gradient-to-br from-orange-500/20 to-red-500/20"
            },
            details: {
                problem: "Timp de răspuns mare la lead-uri (4+ ore). Agenții pierdeau timp calificând clienți care nu aveau buget sau nu erau hotărâți.",
                solution: [
                    "Calificare instantă prin WhatsApp AI",
                    "Programare vizionări direct în Calendar",
                    "CRM automatizat cu follow-up inteligent"
                ],
                results: [
                    "Timp de răspuns: sub 3 minute (vs 4 ore)",
                    "20 ore/săptămână economisite per agent",
                    "Comisioane crescute cu 28% în Q4"
                ],
                testimonial: {
                    quote: "Fiecare lead primește răspuns instant, la orice oră. Asta ne-a diferențiat complet de competiție într-o piață aglomerată.",
                    author: "Andrei M., CEO"
                }
            }
        }
    ];

  return (
    <section id="rezultate" className="relative w-full py-20 bg-black flex justify-center">
      
      {/* --- Blending Gradients --- */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div className="w-full max-w-[1240px] px-4 flex flex-col items-center gap-16 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-4xl space-y-6">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Studii de Caz Reale</span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-semibold leading-[1.1] text-white/95 font-inter">
                Rezultate Concrete. <br />
                <span className="font-serif italic text-brand-lightPurple font-normal">Cifre Verificate.</span>
            </h2>
            <p className="text-lg text-white/60 font-sans max-w-2xl mx-auto">
                Nu vindem teorie. Implementăm sisteme care produc timp și bani. <br className="hidden md:block" />
                Iată cum arată impactul real în business-uri din România.
            </p>
        </div>

        {/* List of Case Studies */}
        <div className="w-full flex flex-col gap-6">
            {studies.map((study, index) => (
                <CaseStudyCard key={index} study={study} index={index} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default CaseStudiesSection;