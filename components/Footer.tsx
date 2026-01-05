import React from 'react';
import { Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-16 bg-black border-t border-white/5 flex justify-center">
      <div className="w-full max-w-[1240px] px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Logo Column */}
            <div className="flex flex-col gap-6">
                <div className="h-[35px] w-auto">
                     {/* 
                        IMPORTANT: Please ensure 'iterio-colorlogo.png' is located 
                        in the ROOT directory (same level as index.html), not in /components.
                     */}
                    <img src="iterio-colorlogo.png" alt="ITERIO" className="h-full w-auto object-contain" />
                </div>
                <p className="text-[#adabb0] text-sm italic font-medium leading-relaxed font-serif">
                    Transformăm businessuri prin automatizare inteligentă.
                </p>
            </div>

            {/* Services Column */}
            <div className="flex flex-col gap-4">
                <h4 className="text-white font-semibold mb-2">Servicii</h4>
                <div className="flex flex-col gap-2">
                    <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">Agenți AI</span>
                    <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">Chatbot AI</span>
                    <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">Automatizare Procese</span>
                    <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">Receptionist Virtual</span>
                    <span className="text-white/60 text-sm hover:text-white transition-colors cursor-pointer">Integrări Sisteme</span>
                </div>
            </div>

            {/* Industries Column */}
            <div className="flex flex-col gap-4">
                <h4 className="text-white font-semibold mb-2">Industrii</h4>
                <div className="flex flex-col gap-2">
                    <span className="text-white/60 text-sm">Hoteluri & Hospitality</span>
                    <span className="text-white/60 text-sm">Clinici Medicale</span>
                    <span className="text-white/60 text-sm">Agenții Imobiliare</span>
                    <span className="text-white/60 text-sm">E-commerce</span>
                    <span className="text-white/60 text-sm">Servicii B2B</span>
                </div>
            </div>

            {/* Contact Column */}
            <div className="flex flex-col gap-4">
                <h4 className="text-white font-semibold mb-2">Contact</h4>
                <div className="flex flex-col gap-4">
                    <a href="mailto:sergiu@iterio.ro" className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
                        <Mail size={16} />
                        sergiu@iterio.ro
                    </a>
                    <a href="https://www.linkedin.com/company/iterio-ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/60 text-sm hover:text-white transition-colors">
                        <Linkedin size={16} />
                        LinkedIn
                    </a>
                    <span className="text-white/60 text-sm">Cluj-Napoca, Romania</span>
                </div>
            </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
            <span className="text-white/40 text-sm">© 2026 ITERIO. Toate drepturile rezervate.</span>
            <div className="flex gap-6">
                <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Termeni și Condiții</a>
                <a href="#" className="text-white/40 text-sm hover:text-white transition-colors">Politica de Confidențialitate</a>
            </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;