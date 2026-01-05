import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
    const testimonials = [
        {
            quote: "Am fost sceptic legat de AI. Părea complicat și scump. Echipa ITERIO mi-a demontat toate prejudecățile. În 3 săptămâni aveam un sistem care îmi economisește 15 ore pe săptămână.",
            highlight: "Best investment ever.",
            name: "Radu Ionescu",
            role: "CEO, TechStart SRL",
            avatar: "R"
        },
        {
            quote: "Chatbot-ul nostru răspunde acum la 400+ conversații pe zi. Înainte aveam 2 oameni care făceau doar asta. Acum ei se ocupă de vânzări și am crescut cu 40%.",
            highlight: "Automatizare totală.",
            name: "Elena Marin",
            role: "Director Marketing, RetailPlus",
            avatar: "E"
        },
        {
            quote: "Cel mai bun lucru? Că n-a trebuit să schimb nimic din ce foloseam deja. ITERIO a conectat toate sistemele și acum totul merge automat. Facturarea se face singură.",
            highlight: "Adio muncă manuală.",
            name: "George Popa",
            role: "Contabil-Șef, Construct Expert",
            avatar: "G"
        }
    ];

  return (
    <section className="w-full py-20 bg-black flex justify-center border-t border-white/5">
      <div className="w-full max-w-[1240px] px-4 flex flex-col items-center gap-16">
        
        <div className="text-center">
             <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-white/5 border border-white/10">
                <span className="flex h-1.5 w-1.5 rounded-full bg-white"></span>
                <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Social Proof</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-semibold text-white font-inter">
                Ce spun cei care au <span className="font-serif italic text-brand-lightPurple font-normal">automatizat</span> deja
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            {testimonials.map((item, index) => (
                <div key={index} className="bg-[#0a0a0c] border border-white/5 p-8 rounded-[24px] flex flex-col gap-6 relative group transition-all duration-300 hover:border-white/10 hover:-translate-y-1">
                    
                    {/* Quote Icon */}
                    <div className="absolute top-8 right-8 text-brand-purple/20 group-hover:text-brand-purple/40 transition-colors">
                        <Quote size={40} />
                    </div>

                    <div className="flex-1">
                        <p className="text-white/80 font-sans leading-relaxed text-lg mb-4">
                            "{item.quote}"
                        </p>
                        <p className="text-brand-lightPurple font-serif italic text-lg">
                            {item.highlight}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-white font-bold font-serif">
                            {item.avatar}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-semibold font-inter text-sm">{item.name}</span>
                            <span className="text-white/40 text-xs font-sans uppercase tracking-wide">{item.role}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;