import React, { useState } from 'react';
import { useFormContext } from '../context/FormContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openForm } = useFormContext();

  const links = [
    { name: 'Servicii', href: '#servicii' },
    { name: 'Proces', href: '#proces' },
    { name: 'Rezultate', href: '#rezultate' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleMobileLinkClick = () => {
      setIsMobileMenuOpen(false);
  };

  const handleMobileCtaClick = () => {
      setIsMobileMenuOpen(false);
      openForm();
  };

  return (
    <>
        <div className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <nav 
            className={`
            flex items-center justify-between p-2 pl-6
            w-full max-w-[1240px]
            rounded-[16px]
            border border-white/10
            bg-white/[0.06] backdrop-blur-[25px]
            shadow-[inset_0px_0px_40px_0px_rgba(255,255,255,0.1)]
            transition-all duration-300
            ${isMobileMenuOpen ? 'bg-black/90 border-transparent' : ''}
            `}
        >
            <a href="#home" className="flex items-center gap-3 group relative z-50">
                <div className="h-[45px] w-auto">
                    <img src="/iterio-colorlogo.png" alt="ITERIO" className="h-full w-auto object-contain" />
                </div>
            </a>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
                <a 
                key={link.name} 
                href={link.href}
                className="text-[15px] font-medium text-white/80 hover:text-[#0099ff] hover:underline transition-colors decoration-1 underline-offset-4 font-sans"
                >
                {link.name}
                </a>
            ))}
            </div>

            <div className="flex items-center gap-4 relative z-50">
                {/* Desktop CTA */}
                <button 
                    onClick={openForm}
                    className="hidden sm:flex bg-btn-gradient text-white px-5 py-3 rounded-lg font-medium text-[16px] items-center gap-2 shadow-[inset_0px_2px_5px_0px_rgba(255,255,255,0.4),inset_0px_-3px_10px_0px_rgb(138,77,255)] hover:scale-[1.02] transition-transform"
                >
                    Solicită Audit Gratuit
                </button>

                {/* Mobile Menu Toggle */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="lg:hidden p-2 text-white/80 hover:text-white transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-40 bg-black pt-28 px-6 pb-10 flex flex-col lg:hidden"
                >
                    <div className="flex flex-col gap-6 text-center">
                        {links.map((link) => (
                            <a 
                                key={link.name}
                                href={link.href}
                                onClick={handleMobileLinkClick}
                                className="text-2xl font-medium text-white/90 hover:text-brand-lightPurple transition-colors font-sans py-2 border-b border-white/5"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="mt-auto">
                        <button 
                            onClick={handleMobileCtaClick}
                            className="w-full bg-btn-gradient text-white py-4 rounded-xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
                        >
                            Solicită Audit Gratuit
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
  );
};

export default Navbar;