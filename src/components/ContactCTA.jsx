import React from 'react';
import { Link } from 'react-router-dom';
import { businessData } from '../data/businessData';
import { LuPhone, LuMail, LuDroplet, LuArrowRight } from 'react-icons/lu';

const ContactCTA = () => {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-[#EAF5EF] via-[#F4FAF6] to-[#E1F0E7] text-[#17211D] overflow-hidden rounded-3xl mx-3 sm:mx-6 my-8 border border-[#CDE3D7] shadow-xl">
      
      {/* ── Thematic Background Design ── */}
      
      {/* Large concentric circles top right */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border-[60px] border-[#1F8A70]/5 pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-[300px] h-[300px] rounded-full border-[30px] border-[#1F8A70]/5 pointer-events-none"></div>
      
      {/* Large soft glow top left & bottom right */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#BCE4D2]/40 blur-3xl pointer-events-none z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#BCE4D2]/40 blur-3xl pointer-events-none z-0"></div>
      
      {/* Dot matrix left */}
      <svg className="absolute top-24 left-10 w-24 h-32 text-[#1F8A70]/10 pointer-events-none hidden md:block" viewBox="0 0 100 120" fill="currentColor">
        {[0,1,2,3,4,5].map(r => [0,1,2,3].map(c => <circle key={`l-${r}-${c}`} cx={c*20 + 10} cy={r*20 + 10} r="2.5" />))}
      </svg>

      {/* Dot matrix right */}
      <svg className="absolute bottom-16 right-6 w-24 h-32 text-[#1F8A70]/10 pointer-events-none hidden md:block" viewBox="0 0 100 120" fill="currentColor">
        {[0,1,2,3,4,5].map(r => [0,1,2,3].map(c => <circle key={`r-${r}-${c}`} cx={c*20 + 10} cy={r*20 + 10} r="2.5" />))}
      </svg>

      {/* Abstract leaves bottom left */}
      <svg className="absolute -bottom-16 -left-16 w-80 h-80 text-[#1F8A70]/10 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
        <path d="M100 200C100 200 110 150 140 130C170 110 200 120 200 120C200 120 190 90 160 90C130 90 110 110 100 140L100 200Z" />
        <path d="M90 200C90 200 70 160 30 150C-10 140 -30 160 -30 160C-30 160 -10 140 20 150C50 160 80 190 90 200Z" />
        <path d="M95 140C95 140 85 110 65 100C45 90 25 100 25 100C25 100 35 80 55 90C75 100 90 120 95 140Z" />
        <path d="M105 130C105 130 115 100 135 90C155 80 175 90 175 90C175 90 165 70 145 80C125 90 110 110 105 130Z" />
      </svg>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#CBE8D9] text-[#0D5C45] text-xs font-extrabold tracking-wider shadow-xs">
          <LuDroplet className="w-3.5 h-3.5 text-[#0D7A5F]" />
          <span>FAST &amp; RELIABLE BENGALURU SERVICE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#162921] tracking-tight leading-tight max-w-3xl mx-auto">
          Need Waterproofing or <br className="hidden sm:inline" />
          <span className="text-[#0D7A5F]">Water Tank Cleaning?</span>
        </h2>

        <p className="text-[#435C50] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
          Call R K Waterproofing today for immediate response, transparent quotes, and professional 24/7 service at your doorstep.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <a
            href={businessData.phoneLink}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0D7A5F] hover:bg-[#0A624C] text-white font-extrabold text-base shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-0.5 border border-[#1F8A70]/40"
          >
            <LuPhone className="w-5 h-5 text-[#D8B77A] group-hover:rotate-12 transition-transform" />
            <span>Call Now ({businessData.phone})</span>
          </a>

          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white hover:bg-[#F4FAF6] text-[#162921] font-extrabold text-base shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-[#DCEBE2]"
          >
            <LuMail className="w-5 h-5 text-[#0D7A5F]" />
            <span>Contact Us</span>
            <LuArrowRight className="w-5 h-5 text-[#0D7A5F]" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ContactCTA;
