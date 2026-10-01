import React from 'react';
import { LuDroplet } from 'react-icons/lu';

const SectionHeader = ({ tag, title, description, center = false, dark = false }) => {
  return (
    <div className={`mb-12 md:mb-16 ${center ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'}`}>
      {tag && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase mb-3 ${
          dark ? 'bg-[#1F8A70]/20 text-[#63C7A5] border border-[#1F8A70]/40' : 'bg-[#EAF4EF] text-[#1F8A70] border border-[#DDE5DF]'
        }`}>
          <LuDroplet className="w-3.5 h-3.5 text-[#D8B77A]" />
          <span>{tag}</span>
        </div>
      )}
      
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
        dark ? 'text-[#F7F5EF]' : 'text-[#17211D]'
      }`}>
        {title}
      </h2>
      
      {description && (
        <p className={`mt-4 text-base md:text-lg leading-relaxed ${
          dark ? 'text-[#63C7A5]/80' : 'text-[#68736D]'
        }`}>
          {description}
        </p>
      )}

      {/* Decorative accent line */}
      <div className={`mt-4 flex items-center gap-1.5 ${center ? 'justify-center' : ''}`}>
        <span className="w-8 h-1 rounded-full bg-[#1F8A70]"></span>
        <span className="w-2 h-1 rounded-full bg-[#D8B77A]"></span>
        <span className="w-1 h-1 rounded-full bg-[#63C7A5]"></span>
      </div>
    </div>
  );
};

export default SectionHeader;
