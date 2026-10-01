import React from 'react';
import { businessData } from '../data/businessData';
import { LuPhone, LuNavigation } from 'react-icons/lu';
import { FaWhatsapp } from 'react-icons/fa';

const MobileActionBar = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#17211D]/95 backdrop-blur-md border-t border-[#1F8A70]/40 p-2.5 px-4 shadow-2xl">
      <div className="grid grid-cols-3 gap-2.5">
        
        {/* Call Now Button */}
        <a
          href={businessData.phoneLink}
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#1F8A70] text-white text-xs font-bold shadow active:scale-95 transition-transform"
        >
          <LuPhone className="w-4 h-4 text-[#D8B77A]" />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={businessData.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#12372A] border border-[#1F8A70]/50 text-[#63C7A5] text-xs font-bold shadow active:scale-95 transition-transform"
        >
          <FaWhatsapp className="w-4 h-4 text-[#25D366]" />
          <span>WhatsApp</span>
        </a>

        {/* Directions Button */}
        <a
          href={businessData.mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-[#17211D] border border-[#D8B77A]/40 text-[#D8B77A] text-xs font-bold shadow active:scale-95 transition-transform"
        >
          <LuNavigation className="w-4 h-4" />
          <span>Directions</span>
        </a>

      </div>
    </div>
  );
};

export default MobileActionBar;
