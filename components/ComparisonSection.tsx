import React from 'react';
import { Briefcase, X, Check, Linkedin, UserMinus, Building2, Wallet } from 'lucide-react';

const ComparisonSection: React.FC = () => {
  return (
    <section id="comparison" className="w-full py-24 bg-[#050505] flex justify-center relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#2d1b4e] via-[#050505] to-[#000] opacity-60 pointer-events-none"></div>

      <div className="w-full max-w-[1240px] px-4 flex flex-col gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-semibold font-inter text-white">
                De ce vechile metode <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">nu mai funcționează</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
                Piața s-a schimbat. Metodele tradiționale sunt fie ineficiente, fie extrem de costisitoare.
            </p>
        </div>

        {/* 3-Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* CARD 1: Spraying and Praying (Bad Outreach) */}
            <div className="group relative bg-gradient-to-b from-[#1a0b2e] to-[#0a0a0a] border border-white/10 rounded-[32px] p-1 overflow-hidden transition-all duration-300 hover:border-brand-purple/50 hover:shadow-[0_0_50px_-20px_rgba(146,63,252,0.3)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-brand-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative h-full bg-[#08080a] rounded-[30px] p-6 flex flex-col items-center">
                    <div className="text-center mb-8 space-y-2">
                        <h3 className="text-2xl font-bold text-white italic">"Spraying and Praying"</h3>
                        <p className="text-white/70 font-medium">Îți distruge reputația</p>
                        <p className="text-xs text-white/40 max-w-[250px] mx-auto">Mesaje generice și tactici deconectate care îndepărtează clienții ideali.</p>
                    </div>

                    {/* Mock Notification 1 */}
                    <div className="w-full bg-[#1a1a24] border border-white/5 rounded-2xl p-4 mb-4 transform transition-transform duration-500 group-hover:-translate-y-2 hover:bg-[#20202b] relative overflow-hidden">
                        <div className="flex justify-between items-start mb-2">
                            <div className="flex gap-3">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100" alt="Founder" className="w-10 h-10 rounded-full object-cover border border-white/10" />
                                <div>
                                    <p className="text-sm font-bold text-white">Alex Popescu</p>
                                    <p className="text-[10px] text-white/40">Founder la Startup SRL</p>
                                </div>
                            </div>
                            <div className="bg-[#0077b5] p-1 rounded-md">
                                <Linkedin size={12} className="text-white" />
                            </div>
                        </div>
                        <p className="text-xs text-white/70 leading-relaxed">
                            "Salut {'{{first_name}}'}, aș vrea să discutăm rapid despre cum te putem ajuta să rezolvi această problemă generică..."
                        </p>
                    </div>

                    {/* Mock Notification 2 */}
                    <div className="w-full bg-[#1a1a24] border border-white/5 rounded-2xl p-4 transform transition-transform duration-500 group-hover:-translate-y-2 delay-75 hover:bg-[#20202b]">
                         <div className="flex justify-between items-center mb-1">
                            <div className="flex gap-3 items-center">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 border border-red-500/20">
                                    <UserMinus size={16} />
                                </div>
                                <div>
                                    <p className="text-sm font-bold text-white">Andrei Ionescu</p>
                                    <p className="text-[10px] text-red-400 font-bold">UNSUBSCRIBE!</p>
                                </div>
                            </div>
                            <div className="bg-[#0077b5] p-1 rounded-md opacity-50">
                                <Linkedin size={12} className="text-white" />
                            </div>
                        </div>
                        <p className="text-xs text-white/40 mt-1">
                            Prospectul te-a blocat.
                        </p>
                    </div>
                </div>
            </div>

            {/* CARD 2: Hiring In-House (Expensive) */}
            <div className="group relative bg-gradient-to-b from-[#2e1b4e] to-[#0a0a0a] border border-brand-purple/30 rounded-[32px] p-1 overflow-hidden shadow-[0_0_40px_-10px_rgba(146,63,252,0.15)] hover:shadow-[0_0_60px_-10px_rgba(146,63,252,0.3)] transition-all duration-300">
                <div className="relative h-full bg-[#08080a] rounded-[30px] p-6 flex flex-col">
                    
                    <div className="text-center mb-8 relative">
                        <h3 className="text-xl font-bold text-white mb-2">Costuri Echipă Internă</h3>
                        <p className="text-white/50 text-sm">(Înainte de costuri software)</p>
                        
                        {/* Stamped Price Tag */}
                        <div className="absolute top-10 right-0 md:right-8 transform rotate-6 bg-[#d946ef] text-white text-sm font-bold px-3 py-1 rounded shadow-lg border border-white/20 animate-pulse">
                            €260,000
                        </div>
                    </div>

                    <div className="flex-1 flex flex-col gap-3">
                        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-brand-purple/20 text-brand-lightPurple"><Briefcase size={16}/></div>
                                <span className="text-sm font-medium text-white/90">Director Marketing</span>
                            </div>
                            <span className="text-sm font-bold text-white/60">€100k<span className="text-xs font-normal">/an</span></span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-brand-purple/20 text-brand-lightPurple"><Briefcase size={16}/></div>
                                <span className="text-sm font-medium text-white/90">Sales Rep (SDR)</span>
                            </div>
                            <span className="text-sm font-bold text-white/60">€30k<span className="text-xs font-normal">/an</span></span>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-brand-purple/20 text-brand-lightPurple"><Briefcase size={16}/></div>
                                <span className="text-sm font-medium text-white/90">Copywriter</span>
                            </div>
                            <span className="text-sm font-bold text-white/60">€50k<span className="text-xs font-normal">/an</span></span>
                        </div>

                         <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-brand-purple/20 text-brand-lightPurple"><Briefcase size={16}/></div>
                                <span className="text-sm font-medium text-white/90">Specialist AI</span>
                            </div>
                            <span className="text-sm font-bold text-white/60">€40k<span className="text-xs font-normal">/an</span></span>
                        </div>

                        <div className="mt-auto pt-4 flex justify-between items-center border-t border-white/10">
                            <span className="text-white/50 text-sm">Total Anual</span>
                            <span className="text-xl font-bold text-red-400">€259,411</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* CARD 3: Agency Model (Conflict of Interest) */}
            <div className="group relative bg-gradient-to-b from-[#1a0b2e] to-[#0a0a0a] border border-white/10 rounded-[32px] p-1 overflow-hidden transition-all duration-300 hover:border-brand-purple/50 hover:shadow-[0_0_50px_-20px_rgba(146,63,252,0.3)]">
                <div className="relative h-full bg-[#08080a] rounded-[30px] p-6 flex flex-col">
                    <div className="text-center mb-8">
                         <h3 className="text-xl font-bold text-white mb-2">Agențiile Clasice</h3>
                         <p className="text-white/50 text-sm">Conflict de interese</p>
                         <p className="text-lg font-bold text-white mt-2">"Nu dau 2 bani pe afacerea ta"</p>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Your Business Model */}
                        <div className="bg-[#101014] rounded-2xl p-4 border border-white/5">
                            <p className="text-sm text-white/50 mb-3 uppercase tracking-wider font-semibold">Modelul Tău</p>
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500/20 p-1 rounded text-green-400">
                                    <Check size={16} strokeWidth={3} />
                                </div>
                                <span className="text-white font-medium">Să crești afacerea profitabil</span>
                            </div>
                        </div>

                        {/* Agency Business Model */}
                        <div className="bg-[#101014] rounded-2xl p-4 border border-white/5 flex-1">
                            <p className="text-sm text-white/50 mb-3 uppercase tracking-wider font-semibold">Modelul Agenției</p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                    <X size={16} className="text-red-500 flex-shrink-0" />
                                    <span className="text-sm text-white/80">Să ia sute de clienți</span>
                                </li>
                                <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                    <X size={16} className="text-red-500 flex-shrink-0" />
                                    <span className="text-sm text-white/80">Să facă promisiuni mari</span>
                                </li>
                                <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                    <X size={16} className="text-red-500 flex-shrink-0" />
                                    <span className="text-sm text-white/80">Outsource la juniori ieftini</span>
                                </li>
                                <li className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity">
                                    <X size={16} className="text-red-500 flex-shrink-0" />
                                    <span className="text-sm text-white/80">Să te înlocuiască când pleci</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;