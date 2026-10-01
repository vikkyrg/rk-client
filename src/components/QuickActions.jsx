import React from 'react';
import { businessData } from '../data/businessData';
import { LuPhone } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';

const QuickActions = () => {
  return (
    <div className="hidden md:flex fixed bottom-24 right-8 flex-col gap-3 z-40">
      {/* Call Button */}
      <a 
        href={businessData.phoneLink}
        className="w-13 h-13 bg-[#12372A] hover:bg-[#1F8A70] text-[#D8B77A] hover:text-white rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 border border-[#1F8A70]/40 group"
        title="Call Now"
        aria-label="Call Now"
      >
        <LuPhone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
      </a>

      {/* WhatsApp Button */}
      <a 
        href={businessData.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 bg-[#17211D] hover:bg-[#12372A] text-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300 border border-[#1F8A70]/40 group"
        title="WhatsApp Chat"
        aria-label="WhatsApp Chat"
      >
        <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};

export default QuickActions;
