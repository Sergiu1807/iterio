import React, { useState, useEffect, useRef } from 'react';
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

// Helper functions for metadata
const getBrowserName = (userAgent: string): string => {
  if (userAgent.includes('Firefox')) return 'Firefox';
  if (userAgent.includes('Chrome')) return 'Chrome';
  if (userAgent.includes('Safari')) return 'Safari';
  if (userAgent.includes('Edge')) return 'Edge';
  return 'Unknown';
};

const getDeviceType = (userAgent: string): string => {
  if (/mobile/i.test(userAgent)) return 'Mobile';
  if (/tablet/i.test(userAgent)) return 'Tablet';
  return 'Desktop';
};

const PopupForm: React.FC = () => {
  const { isOpen, closeForm } = useFormContext();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string>('');
  const modalRef = useRef<HTMLDivElement>(null);

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
        setSubmitError('');
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

  // Focus trap and management
  useEffect(() => {
    if (!isOpen) return;

    // Store element that opened the modal
    const previousActiveElement = document.activeElement as HTMLElement;

    // Focus first input when modal opens
    setTimeout(() => {
      const firstInput = modalRef.current?.querySelector('input');
      firstInput?.focus();
    }, 100);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';

    // Handle Tab key for focus trap
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener('keydown', handleTab);

    return () => {
      // Cleanup
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleTab);
      // Return focus to trigger button
      previousActiveElement?.focus();
    };
  }, [isOpen]);

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    // Name: 2-100 chars validation
    if (!formData.name || formData.name.trim().length < 2) {
      newErrors.name = "Numele este obligatoriu (min. 2 caractere)";
    }

    // Better email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email || !emailRegex.test(formData.email.trim())) {
      newErrors.email = "Introdu o adresă de email validă";
    }

    // Romanian phone format validation (flexible)
    const phoneRegex = /^(\+4|0)[0-9]{9}$/;
    if (!formData.phone || !phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = "Introdu un număr de telefon valid (ex: 0712345678)";
    }

    // Website URL validation (optional field)
    if (formData.website && formData.website.trim()) {
      const urlRegex = /^(https?:\/\/)?([\w\-]+(\.[\w\-]+)+)(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/;
      if (!urlRegex.test(formData.website.trim())) {
        newErrors.website = "Introdu un URL valid (ex: www.companie.ro)";
      }
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
    setSubmitError(''); // Clear any previous errors

    try {
      // Prepare payload with form data + metadata
      const payload = {
        // Form data
        ...formData,
        // Metadata
        submittedAt: new Date().toISOString(),
        userAgent: navigator.userAgent,
        referrer: document.referrer || 'direct',
        pageUrl: window.location.href,
        // Derived info
        browserName: getBrowserName(navigator.userAgent),
        deviceType: getDeviceType(navigator.userAgent),
      };

      const response = await fetch('https://n8n.iterioai.com/webhook/iterio-form-submitted', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsSuccess(true);
    } catch (error) {
      console.error("Error submitting form", error);
      setSubmitError(
        error instanceof Error
          ? "A apărut o eroare. Te rugăm să încerci din nou sau contactează-ne direct."
          : "Eroare de rețea. Verifică conexiunea la internet."
      );
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
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
            className="relative w-full max-w-[480px] bg-[#0a0a0a] border border-white/10 rounded-[24px] shadow-[0_0_50px_-12px_rgba(146,63,252,0.25)] flex flex-col overflow-hidden max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
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
                        {/* Screen reader announcement region */}
                        <div className="sr-only" aria-live="polite" aria-atomic="true">
                            {isSubmitting && "Se trimite formularul..."}
                            {isSuccess && "Formularul a fost trimis cu succes!"}
                            {submitError && `Eroare: ${submitError}`}
                        </div>

                        <div className="mb-8 pr-8">
                            <h2 id="modal-title" className="text-2xl font-bold text-white font-inter mb-2">
                                Solicită Analiza Gratuită
                            </h2>
                            <p className="text-white/60 text-sm">
                                Completează formularul și te contactăm în 24 ore pentru a stabili detaliile.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5" aria-label="Formular de contact">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Nume complet <span className="text-brand-purple">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Numele tău complet"
                                    aria-required="true"
                                    aria-invalid={!!errors.name}
                                    aria-describedby={errors.name ? "name-error" : undefined}
                                    className={`w-full bg-[#1a1a1a] border ${errors.name ? 'border-red-500' : 'border-white/10 focus:border-brand-purple'} rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm`}
                                />
                                {errors.name && <p id="name-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Email business <span className="text-brand-purple">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="email@companie.ro"
                                    aria-required="true"
                                    aria-invalid={!!errors.email}
                                    aria-describedby={errors.email ? "email-error" : undefined}
                                    className={`w-full bg-[#1a1a1a] border ${errors.email ? 'border-red-500' : 'border-white/10 focus:border-brand-purple'} rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm`}
                                />
                                {errors.email && <p id="email-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.email}</p>}
                            </div>

                            {/* Phone */}
                            <div>
                                <label htmlFor="phone" className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Telefon <span className="text-brand-purple">*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="07XX XXX XXX"
                                    aria-required="true"
                                    aria-invalid={!!errors.phone}
                                    aria-describedby={errors.phone ? "phone-error" : undefined}
                                    className={`w-full bg-[#1a1a1a] border ${errors.phone ? 'border-red-500' : 'border-white/10 focus:border-brand-purple'} rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm`}
                                />
                                {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.phone}</p>}
                            </div>

                             {/* Company (Optional) */}
                             <div>
                                <label htmlFor="company" className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Numele companiei
                                </label>
                                <input
                                    type="text"
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="Compania ta (opțional)"
                                    className="w-full bg-[#1a1a1a] border border-white/10 focus:border-brand-purple rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm"
                                />
                            </div>

                            {/* Website (Optional) */}
                            <div>
                                <label htmlFor="website" className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Website
                                </label>
                                <input
                                    type="url"
                                    id="website"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleChange}
                                    placeholder="www.compania-ta.ro (opțional)"
                                    aria-invalid={!!errors.website}
                                    aria-describedby={errors.website ? "website-error" : undefined}
                                    className={`w-full bg-[#1a1a1a] border ${errors.website ? 'border-red-500' : 'border-white/10 focus:border-brand-purple'} rounded-xl px-4 py-3 text-white placeholder:text-white/20 outline-none transition-colors text-sm`}
                                />
                                {errors.website && <p id="website-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.website}</p>}
                            </div>

                            {/* Service Selection */}
                            <div className="relative">
                                <label htmlFor="service" className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Ce vrei să automatizezi? <span className="text-brand-purple">*</span>
                                </label>
                                <div className="relative">
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        aria-required="true"
                                        aria-invalid={!!errors.service}
                                        aria-describedby={errors.service ? "service-error" : undefined}
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
                                {errors.service && <p id="service-error" className="text-red-500 text-xs mt-1 ml-1" role="alert">{errors.service}</p>}
                            </div>

                            {/* Additional Message */}
                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-[#b3b3b3] mb-1.5 ml-1">
                                    Mesaj adițional
                                </label>
                                <textarea
                                    id="message"
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
                                {/* Error Message Display */}
                                {submitError && (
                                    <div className="mb-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                                        <p className="text-red-400 text-sm font-medium">{submitError}</p>
                                    </div>
                                )}

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
                            href="https://www.linkedin.com/company/iterio-ai"
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