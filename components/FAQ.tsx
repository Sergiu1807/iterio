import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string; index: number }> = ({ question, answer, index }) => {
    const [isOpen, setIsOpen] = useState(index === 0);

    return (
        <div 
            className={`w-full bg-[#0a0a0a] border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-brand-purple/30 bg-brand-purple/[0.02]' : 'border-white/5 hover:border-white/10'}`}
        >
            <button 
                className="w-full p-6 md:p-8 flex items-center justify-between text-left gap-4 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={`text-lg md:text-xl font-medium font-inter transition-colors ${isOpen ? 'text-white' : 'text-white/70'}`}>
                    {question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-brand-purple text-white border-brand-purple' : 'bg-white/5 border-white/10 text-white/50'}`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </div>
            </button>
            
            <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="p-6 md:p-8 pt-0 text-white/60 text-[16px] leading-relaxed font-sans max-w-3xl">
                    {answer}
                </div>
            </div>
        </div>
    );
};

const FAQ: React.FC = () => {
    const faqs = [
        {
            question: "Cât costă să automatizez un proces?",
            answer: "Depinde de complexitate, dar majoritatea proiectelor încep de la 2.000€. Oferim o analiză gratuită unde îți dăm un preț exact și un calcul de ROI pentru a vedea în cât timp îți recuperezi investiția."
        },
        {
            question: "Cât durează implementarea?",
            answer: "Între 2 și 6 săptămâni pentru majoritatea soluțiilor. Un chatbot simplu poate fi live în 5 zile. Un sistem complex de automatizare poate dura 4-6 săptămâni."
        },
        {
            question: "Trebuie să știu ceva tehnic?",
            answer: "Nu. Noi ne ocupăm de tot. Tu ne spui ce vrei să se întâmple și noi construim sistemul. Interfața pe care o vei folosi este la fel de simplă ca un email."
        },
        {
            question: "Ce se întâmplă dacă nu funcționează?",
            answer: "Ai garanție 90 de zile. Dacă sistemul nu livrează rezultatele promise, îți returnăm banii. Nu riști nimic."
        },
        {
            question: "Se integrează cu sistemele pe care le am deja?",
            answer: "Da. Lucrăm cu peste 500 de aplicații: facturare (SmartBill, Oblio), CRM-uri (HubSpot, Pipedrive), magazine online (Shopify, WooCommerce), calendare, email, WhatsApp și multe altele."
        },
        {
            question: "Am nevoie de angajați tehnici ca să mențin sistemul?",
            answer: "Nu. Oferim suport continuu inclus. Dacă ceva nu merge, ne suni și rezolvăm noi. Tu te ocupi de afacerea ta."
        }
    ];

  return (
    <section id="faq" className="w-full py-16 bg-black flex justify-center border-t border-white/5">
      <div className="w-full max-w-[900px] px-4 flex flex-col items-center gap-12">
        
        <div className="text-center max-w-2xl">
            <h2 className="text-4xl md:text-[52px] font-semibold leading-tight text-white font-inter mb-6">
                Întrebări <span className="font-serif italic text-brand-lightPurple font-normal">Frecvente</span>
            </h2>
            <p className="text-lg text-white/60 font-sans">
                Tot ce trebuie să știi înainte de a începe colaborarea.
            </p>
        </div>

        <div className="w-full flex flex-col gap-4">
            {faqs.map((faq, i) => (
                <FAQItem key={i} index={i} {...faq} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;