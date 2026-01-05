import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoMarquee from './components/LogoMarquee';
import ProblemSection from './components/ProblemSection';
import ComparisonSection from './components/ComparisonSection';
import MechanismSection from './components/MechanismSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import WhyUsSection from './components/WhyUsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import { FormProvider } from './context/FormContext';

const App: React.FC = () => {
  return (
    <FormProvider>
      <div className="flex flex-col items-center w-full min-h-screen bg-black text-white selection:bg-brand-purple/30 overflow-x-hidden">
        <Navbar />
        <Hero />
        <LogoMarquee />
        
        {/* Agitation Phase */}
        <ProblemSection />
        <ComparisonSection />
        
        {/* Solution Phase */}
        <MechanismSection />
        <ServicesSection />
        
        {/* Trust & Process Phase */}
        <ProcessSection />
        <CaseStudiesSection />
        <WhyUsSection />
        <TestimonialsSection />
        
        {/* Closing Phase */}
        <Guarantee />
        <FAQ />
        <FinalCTA />
        <Footer />
        
        {/* Global Popup Form */}
        <PopupForm />
      </div>
    </FormProvider>
  );
};

export default App;