import React from 'react';
import { Target, Zap, Flag, Wrench, ShieldCheck, Clock, Users, Laptop } from 'lucide-react';

const WhyUsSection: React.FC = () => {
    const reasons = [
        {
            icon: <ShieldCheck className="w-8 h-8 text-emerald-400" />,
            title: "Garanție de Rezultat",
            text: "Ne asumăm riscul. Dacă în 90 de zile nu vezi rezultatele promise (ROI pozitiv), îți returnăm integral investiția.",
            gradient: "from-emerald-500/20 to-teal-500/5"
        },
        {
            icon: <Clock className="w-8 h-8 text-brand-lightPurple" />,
            title: "Implementare Rapidă",
            text: "Nu te ținem în proiecte de 6 luni. Majoritatea soluțiilor sunt live și produc bani în 2-4 săptămâni.",
            gradient: "from-brand-purple/20 to-fuchsia-500/5"
        },
        {
            icon: <Users className="w-8 h-8 text-blue-400" />,
            title: "Echipă Locală",
            text: "Fără bariere lingvistice sau diferențe de fus orar. Lucrezi cu experți din România care înțeleg piața locală.",
            gradient: "from-blue-500/20 to-cyan-500/5"
        },
        {
            icon: <Laptop className="w-8 h-8 text-orange-400" />,
            title: "Zero Efort Tehnic",
            text: "Nu trebuie să schimbi software-ul actual. Noi construim 'poduri' între aplicațiile pe care le folosești deja.",
            gradient: "from-orange-500/20 to-red-500/5"
        }
    ];

  return (
    <section className="relative w-full py-20 bg-black flex justify-center overflow-hidden">
      
      {/* --- Blending Gradients --- */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-purple/5 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="w-full max-w-[1240px] px-4 flex flex-col items-center gap-16 relative z-20">
        
        <div className="text-center max-w-3xl space-y-6">
            <h2 className="text-4xl md:text-5xl font-semibold text-white font-inter tracking-tight">
                De ce să alegi <span className="font-serif italic text-brand-lightPurple font-normal">ITERIO?</span>
            </h2>
            <p className="text-lg text-white/60 font-sans">
                Nu suntem o agenție de marketing care "încearcă". Suntem ingineri de procese care garantează rezultate.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {reasons.map((item, index) => (
                <div key={index} className="group relative overflow-hidden rounded-[24px] bg-[#08080a] border border-white/5 transition-all duration-300 hover:border-white/10 hover:-translate-y-1">
                    
                    {/* Hover Gradient Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10 p-8 flex flex-col gap-6 h-full">
                        <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                            {item.icon}
                        </div>
                        
                        <div>
                            <h3 className="text-xl font-bold text-white font-inter mb-3">{item.title}</h3>
                            <p className="text-white/60 leading-relaxed font-sans text-[15px]">
                                {item.text}
                            </p>
                        </div>

                        {/* Decoration Line */}
                        <div className="w-12 h-0.5 bg-white/10 mt-auto group-hover:w-full group-hover:bg-white/20 transition-all duration-500"></div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default WhyUsSection;