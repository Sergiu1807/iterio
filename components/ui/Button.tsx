import React from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonHTMLAttributes = React.ButtonHTMLAttributes<HTMLButtonElement>;
type AnchorHTMLAttributes = React.AnchorHTMLAttributes<HTMLAnchorElement>;

interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
  href?: string;
  onClick?: () => void;
}

type ButtonProps = BaseButtonProps & (ButtonHTMLAttributes | AnchorHTMLAttributes);

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', href, onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-sans font-medium text-lg tracking-wide group cursor-pointer";
  const variants = {
    primary: "bg-btn-gradient text-white shadow-[inset_0px_2px_5px_0px_rgba(255,255,255,0.4),inset_0px_-3px_10px_0px_rgb(138,77,255)] hover:scale-[1.02] active:scale-[0.98]",
    secondary: "bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm"
  };

  const content = (
      <>
        <span>{children}</span>
        <div className="bg-white/20 rounded-full p-1 group-hover:translate-x-1 transition-transform">
           <ArrowRight className="w-4 h-4" />
        </div>
      </>
  );

  // If href is present, render an anchor tag
  if (href) {
      return (
        <a 
          href={href}
          className={`${baseStyles} ${variants[variant]} ${className}`}
          {...props}
        >
          {content}
        </a>
      );
  }

  // Otherwise render a button element
  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
};