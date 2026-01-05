import React from 'react';

const VideoSection: React.FC = () => {
  return (
    <section className="w-full flex justify-center px-4 pb-20 relative z-20">
      <div className="w-full max-w-[1240px] relative">
        {/* Glow effect behind video */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#660bff] via-[#f878ff] to-[#660bff] rounded-[30px] blur-2xl opacity-40"></div>
        
        {/* Video Container */}
        <div className="relative w-full aspect-video bg-black rounded-[24px] overflow-hidden border-[3px] border-[#460da1] shadow-[inset_0_50px_200px_#41138a]">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/BExJ1GF4SOU?v=BExJ1GF4SOU&feature=youtu.be&iv_load_policy=3&rel=0&modestbranding=1&playsinline=1&autoplay=0" 
            title="ITERIO VSL" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;