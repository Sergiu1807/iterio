import React from 'react';
import { Bot, MessageSquare, Zap, Phone, Link, Shield, ChevronRight, ArrowRight } from 'lucide-react';

interface Service {
    title: string;
    icon: React.ReactNode;
    preview: string;
    details: string[];
    result: string;
    image: string;
}

const ServiceCard: React.FC<Service> = ({ title, icon, preview, details, result, image }) => {
    return (
        <div className="group h-[420px] w-full [perspective:1000px]">
            <div className="relative h-full w-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT FACE --- */}
                <div className="absolute inset-0 h-full w-full rounded-[24px] overflow-hidden [backface-visibility:hidden] border border-white/10 bg-[#0a0a0a] shadow-2xl">
                    {/* Image Background */}
                    <div className="absolute inset-0">
                        <img
                            src={image}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
                        <div className="absolute inset-0 bg-brand-purple/10 mix-blend-overlay" />
                    </div>

                    <div className="relative h-full p-8 flex flex-col justify-end items-start z-10">
                        <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]">
                            {icon}
                        </div>
                        <h3 className="text-3xl font-bold text-white font-inter leading-tight mb-3 drop-shadow-lg">{title}</h3>
                        <div className="flex items-center gap-2 text-white/80 text-sm font-medium mt-2 bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10">
                            <span>Vezi detalii</span>
                            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </div>
                    </div>
                </div>

                {/* --- BACK FACE --- */}
                <div className="absolute inset-0 h-full w-full rounded-[24px] bg-[#0c0c12] border border-brand-purple/50 p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col shadow-[0_0_50px_rgba(146,63,252,0.2)] overflow-hidden">
                    {/* Decoration */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-purple/20 blur-[80px] rounded-full pointer-events-none"></div>
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
                    
                    <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                            <div className="p-2 rounded-lg bg-brand-purple/20 text-brand-lightPurple shrink-0">
                                {icon}
                            </div>
                            <h3 className="text-xl font-bold font-inter leading-tight text-white">{title}</h3>
                        </div>
                        
                        <p className="text-gray-300 text-sm mb-6 leading-relaxed font-sans">
                            {preview}
                        </p>

                        <ul className="space-y-3 mb-auto">
                            {details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
                                    <ArrowRight className="w-4 h-4 text-brand-purple mt-0.5 shrink-0" />
                                    <span className="leading-tight">{detail}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="relative z-10 mt-6 bg-white/5 border border-white/10 rounded-xl p-4">
                            <p className="text-[11px] text-brand-lightPurple font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                                <Zap size={12} fill="currentColor" /> Rezultat Estimativ
                            </p>
                            <p className="text-white font-medium text-sm leading-tight">{result}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

const ServicesSection: React.FC = () => {
    const services = [
        {
            icon: <Bot size={28} />,
            title: "Agenți AI pentru Business",
            preview: "Un angajat digital care nu obosește, nu face greșeli și costă de 10 ori mai puțin.",
            image: "/images/services/ai-agent.jpg",
            details: [
                "Procesează documente automat",
                "Răspund la emailuri inteligent",
                "Analizează date și rapoarte"
            ],
            result: "Economie: 40 ore/săptămână"
        },
        {
            icon: <MessageSquare size={28} />,
            title: "Chatbot AI pentru Clienți",
            preview: "Clienții primesc răspunsuri instant. Non-stop. Fără echipă de suport.",
            image: "/images/services/chatbot.jpg",
            details: [
                "Răspunde la 90% din întrebări",
                "Califică lead-urile 24/7",
                "Funcționează pe WhatsApp/Web"
            ],
            result: "Reducere costuri suport: 60%"
        },
        {
            icon: <Zap size={28} />,
            title: "Automatizare Flux de Lucru",
            preview: "Conectăm toate sistemele tale într-un flux care merge singur.",
            image: "/images/services/automation.jpg",
            details: [
                "Sincronizare CRM ↔ Facturare",
                "Notificări inteligente erori",
                "Integrare cu 500+ aplicații"
            ],
            result: "15-40 ore salvate lunar"
        },
        {
            icon: <Phone size={28} />,
            title: "Receptionist AI",
            preview: "Apelurile tale preluate profesionist, non-stop, fără salarii.",
            image: "/images/services/receptionist.jpg",
            details: [
                "Voce naturală în română",
                "Programează în calendar",
                "Trimite confirmări SMS"
            ],
            result: "-70% costuri față de angajat"
        },
        {
            icon: <Link size={28} />,
            title: "Integrări Sisteme",
            preview: "Conectăm aplicațiile pe care le folosești deja să comunice între ele.",
            image: "/images/services/integration.jpg",
            details: [
                "Eliminare introducere manuală",
                "Date corecte în timp real",
                "Integrări API custom"
            ],
            result: "Zero erori de operare"
        },
        {
            icon: <Shield size={28} />,
            title: "Suport & Mentenanță",
            preview: "Nu te lăsăm singur după implementare.",
            image: "/images/services/support.jpg",
            details: [
                "Monitorizare continuă",
                "Răspuns rapid (max 4h)",
                "Optimizări constante"
            ],
            result: "Sistem funcțional 99.9%"
        }
    ];

  return (
    <section id="servicii" className="relative w-full py-20 bg-black flex justify-center">
      
      {/* --- Blending Gradients --- */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      <div className="w-full max-w-[1240px] px-4 flex flex-col items-center gap-12 relative z-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl">
            <h2 className="text-4xl md:text-[56px] font-semibold leading-tight text-white/95 font-inter">
                Soluții care lucrează pentru tine <br/>
                <span className="font-serif italic text-brand-lightPurple font-normal">24/7</span>
            </h2>
            <p className="mt-6 text-xl text-white/80 font-sans">
               De la automatizări simple până la agenți AI complecși — alegem împreună ce se potrivește nevoilor tale.
            </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
            ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;