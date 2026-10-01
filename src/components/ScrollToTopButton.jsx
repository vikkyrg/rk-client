import React, { useState, useEffect } from 'react';
import { LuArrowUp } from 'react-icons/lu';

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setVisible(window.scrollY > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="hidden md:flex fixed bottom-8 right-8 z-40 w-12 h-12 bg-[#17211D] text-[#D8B77A] hover:bg-[#12372A] hover:text-[#F7F5EF] rounded-full items-center justify-center shadow-lg transition-all duration-300 hover:-translate-y-1 border border-[#1F8A70]/30"
    >
      <LuArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTopButton;
