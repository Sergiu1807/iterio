import React from 'react';

// Using SVGs from the source code where possible or approximations
const logos = [
  { name: 'ClickUp', src: 'https://framerusercontent.com/images/16YRlBsurlFdL1kSmOJC2rmJZV0.png?width=247&height=267' },
  { name: 'Apollo', src: 'https://framerusercontent.com/images/Af0oxC7G9HNeQaS5qXvudNTtU.png?width=247&height=267' },
  { name: 'Company 3', src: 'https://framerusercontent.com/images/oJ6GkoCuVV0aI1tmzmoDI0hSuPE.svg?width=62&height=68' },
  { name: 'Company 4', src: 'https://framerusercontent.com/images/cKf6Cf83pskEPJgXgqdwjzt7FQc.png?width=247&height=267' },
  { name: 'Company 5', src: 'https://framerusercontent.com/images/sIg2t12YXk9g2ZQHYnYeAi31uVs.png?width=247&height=267' },
  { name: 'Company 6', src: 'https://framerusercontent.com/images/q9x1tYmJ5U5zpdArUgHqZK6rI8.png?width=247&height=267' },
];

const LogoMarquee: React.FC = () => {
  return (
    <section className="w-full py-16 bg-black overflow-hidden flex flex-col items-center gap-10">
       <div className="text-center px-4">
         <h2 className="text-3xl md:text-5xl font-semibold font-inter tracking-tight text-white/95">
           What Other <span className="font-serif italic text-brand-lightPurple font-normal">Founders</span> Have to Say
         </h2>
       </div>

      <div className="relative w-full max-w-[1440px] overflow-hidden mask-linear-fade">
         <div className="flex gap-16 animate-marquee whitespace-nowrap py-10 items-center">
            {[...logos, ...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center grayscale opacity-60 hover:opacity-100 transition-opacity">
                    <img src={logo.src} alt={logo.name} className="w-full h-full object-contain" />
                </div>
            ))}
         </div>
      </div>

      <style>{`
        .mask-linear-fade {
            mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
            animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default LogoMarquee;