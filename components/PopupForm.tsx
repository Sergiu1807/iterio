import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, Loader2, Lock, ChevronDown, Linkedin } from 'lucide-react';
import { useFormContext } from '../context/FormContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  service: string;
  message: string;
}

const PopupForm: React.FC = () => {
  const { isOpen, closeForm } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  // Reset form when closed
  useEffect(() => {
    if (!isOpen) {
      // Small delay to allow exit animation to finish before resetting
      const timer = setTimeout(() => {
        setIsSuccess(false);
        setFormData({
            name: '',
            email: '',
            phone: '',
            company: '',
            website: '',
            service: '',
            message: ''
        });
        setErrors({});
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) closeForm();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeForm]);

  const validate = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = "Numele este obligatoriu";
    }
    
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = "Introdu o adresă de email validă";
    }

    if (!formData.phone || formData.phone.length < 10) {
      newErrors.phone = "Numărul de telefon este obligatoriu";
    }

    if (!formData.service) {
      newErrors.service = "Selectează ce vrei să automatizezi";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate API Call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // TODO: Connect to Formspree, Make.com or your own API here
      // await fetch('YOUR_ENDPOINT', { method: 'POST', body: JSON.stringify(formData) });

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeForm}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-[480px] bg-[#0a0a0a] border border-white/10 rounded-[24px] shadow-[0_0_50px_-12px_rgba(146,63,252,0.25)] flex flex-col overflow-hidden max-h-[90vh]"
          >
            {/* Scrollable Content Container */}
            <div className="overflow-y-auto scrollbar-hide p-6 md:p-8">
                
                {/* Close Button */}
                <button 
                    onClick={closeForm}
                    className="absolute top-4 right-4 p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-full transition-all z-20"
                >
                    <X size={20} />
                </button>

                {!isSuccess ? (
                    /* --- FORM STATE --- */
                    <>
                        <div className="mb-8 pr-8">
                            <h2 className="text-2xl font-bold text-white font-inter mb-2">
                                Solicită Analiza Gratuită
                            </h2>
                            <p className="text-white/60 text-sm">
                                Completează formularul și te contactăm în 24 ore pentru a stabili detaliile.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Nume complet <span className="text-brand-purple">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Numele tău complet"
                                    className={`w-full bg-[#1a1a1a] border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-brand-purple'} rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm`}
                                />
                                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Email business <span className="text-brand-purple">*</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@companie.ro"
                                    className={`w-full bg-[#1a1a1a] border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-brand-purple'} rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm`}
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Telefon <span className="text-brand-purple">*</span>
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="07XX XXX XXX"
                                    className={`w-full bg-[#1a1a1a] border ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-brand-purple'} rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm`}
                                />
                                {errors.phone && <p className="text-red-500 text-xs mt-1 ml-1">{errors.phone}</p>}
                            </div>

                             {/* Company (Optional) */}
                             <div>
                                <label className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Numele companiei
                                </label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Compania ta (opțional)"
                                    className="w-full bg-[#1a1a1a] border border-white/10 focus:border-brand-purple rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm"
                                />
                            </div>

                            {/* Website (Optional) */}
                            <div>
                                <label className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Website
                                </label>
                                <input
                                    type="url"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="www.compania-ta.ro (opțional)"
                                    className="w-full bg-[#1a1a1a] border border-white/10 focus:border-brand-purple rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm"
                                />
                            </div>

                            {/* Service Selection */}
                            <div className="relative">
                                <label className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Ce vrei să automatizezi? <span className="text-brand-purple">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className={`w-full bg-[#1a1a1a] border ${errors.service ? 'border-red-500' : 'border-white/10 focus:border-brand-purple'} rounded-xl px-4 py-3 text-white outline-none transition-colors text-sm appearance-none cursor-pointer`}
                                    >
                                        <option value="" disabled className="text-gray-500">Selectează o opțiune</option>
                                        <option value="chatbot">Comunicare cu clienții (chatbot, răspunsuri automate)</option>
                                        <option value="booking">Programări și rezervări</option>
                                        <option value="invoicing">Facturare și documente</option>
                                        <option value="internal">Procese interne repetitive</option>
                                        <option value="integration">Integrare sisteme existente</option>
                                        <option value="unsure">Nu sunt sigur - vreau să discut</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                                        <ChevronDown size={16} />
                                    </div>
                                </div>
                                {errors.service && <p className="text-red-500 text-xs mt-1 ml-1">{errors.service}</p>}
                            </div>

                            {/* Additional Message */}
                            <div>
                                <label className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Mesaj adițional
                                </label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Spune-ne mai multe despre provocările tale... (opțional)"
                                    rows={3}
                                    className="w-full bg-[#1a1a1a] border border-white/10 focus:border-brand-purple rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm resize-none"
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-btn-gradient text-white font-semibold py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Se trimite...
                                        </>
                                    ) : (
                                        "Trimite Cererea →"
                                    )}
                                </button>
                                
                                {/* Trust Signals */}
                                <div className="mt-4 flex items-center justify-center gap-2 text-white/30 text-[11px]">
                                    <Lock size={12} />
                                    <span>Datele tale sunt în siguranță • Răspundem în 24h</span>
                                </div>
                            </div>
                        </form>
                    </>
                ) : (
                    /* --- SUCCESS STATE --- */
                    <div className="py-12 flex flex-col items-center text-center">
                        <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                            <span className="text-4xl animate-bounce">🎉</span>
                        </div>
                        
                        <h2 className="text-2xl font-bold text-white font-inter mb-4">
                            Mulțumim, {formData.name.split(' ')[0]}!
                        </h2>
                        
                        <p className="text-white/70 text-base leading-relaxed mb-2 max-w-xs mx-auto">
                            Te vom contacta în maximum 24 de ore pentru a stabili o întâlnire de 30 minute.
                        </p>
                        
                        <p className="text-white/40 text-xs mb-8">
                            Verifică și folder-ul spam, pentru orice eventualitate.
                        </p>

                        <button 
                            onClick={closeForm}
                            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-colors w-full"
                        >
                            Închide
                        </button>

                        <a 
                            href="https://linkedin.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="mt-6 flex items-center gap-2 text-brand-lightPurple text-sm hover:underline"
                        >
                            <Linkedin size={14} />
                            Urmărește-ne pe LinkedIn
                        </a>
                    </div>
                )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;