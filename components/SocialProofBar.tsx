import React from 'react';

const tools = [
  { name: 'n8n', domain: 'n8n.io' },
  { name: 'Make', domain: 'make.com' },
  { name: 'Zapier', domain: 'zapier.com' },
  { name: 'Airtable', domain: 'airtable.com' },
  { name: 'Anthropic', domain: 'anthropic.com' },
  { name: 'OpenAI', domain: 'openai.com' },
  { name: 'GoHighLevel', domain: 'gohighlevel.com' },
  { name: 'Meta', domain: 'meta.com' },
  { name: 'ManyChat', domain: 'manychat.com' },
  { name: 'Supabase', domain: 'supabase.com' },
  { name: 'Bland AI', domain: 'bland.ai' },
  { name: 'HubSpot', domain: 'hubspot.com' },
  { name: 'Stripe', domain: 'stripe.com' },
];

const SocialProofBar: React.FC = () => {
  return (
    <section className="w-full py-8 bg-black overflow-hidden flex flex-col items-center gap-8 border-b border-white/5 relative z-10">
       <div className="text-center px-4 max-w-3xl">
         <p className="text-lg md:text-xl font-medium font-inter tracking-tight text-white/60">
           Ajutăm antreprenori și manageri din România să lucreze mai puțin, mai eficient <span className="text-white/80">integrând sisteme și aplicații</span>
         </p>
       </div>

      <div className="w-full relative overflow-hidden mask-linear-fade group">
         <div className="flex gap-16 animate-marquee whitespace-nowrap py-2 items-center">
            {/* Triple the list to ensure smooth infinite scroll */}
            {[...tools, ...tools, ...tools].map((tool, index) => (
                <div 
                    key={index} 
                    className="flex-shrink-0 flex items-center justify-center transition-all duration-300 opacity-40 hover:opacity-100"
                >
                    <img 
                        src={`https://logo.clearbit.com/${tool.domain}?size=60`} 
                        alt={tool.name} 
                        className="h-7 md:h-8 w-auto object-contain logo-filter transition-all duration-300"
                    />
                </div>
            ))}
         </div>
      </div>

      <style>{`
        .mask-linear-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        
        .logo-filter {
            filter: grayscale(100%) brightness(1.5);
        }
        
        .group:hover .logo-filter {
             filter: grayscale(100%) brightness(1.5);
        }
        
        .logo-filter:hover {
            filter: none !important;
            transform: scale(1.1);
        }

        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }
        
        .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 40s linear infinite;
        }
        
        .animate-marquee:hover {
            animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SocialProofBar;