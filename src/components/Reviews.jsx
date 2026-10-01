import React from 'react';
import { businessData } from '../data/businessData';
import SectionHeader from './SectionHeader';
import { LuStar, LuExternalLink, LuShieldCheck } from 'react-icons/lu';

const Reviews = () => {
  return (
    <section className="py-16 md:py-20 bg-[#F7F5EF] relative border-b border-[#DDE5DF]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-[#DDE5DF] text-center flex flex-col items-center">
          
          <div className="w-16 h-16 rounded-2xl bg-[#FFF8E7] border border-[#D8B77A]/40 flex items-center justify-center text-[#D8B77A] mb-6">
            <LuStar className="w-8 h-8 fill-[#D8B77A]" />
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-[#1F8A70] bg-[#EAF4EF] px-3.5 py-1 rounded-full mb-3">
            Verified Business Profile
          </span>

          <h2 className="text-4xl sm:text-5xl font-black text-[#17211D] mb-2 tracking-tight">
            3.6 <span className="text-2xl text-[#D8B77A]">★</span>
          </h2>

          <div className="flex items-center gap-1.5 mb-4 text-[#D8B77A]">
            {[...Array(5)].map((_, i) => (
              <LuStar key={i} className={`w-6 h-6 ${i < 4 ? 'fill-[#D8B77A]' : 'opacity-40'}`} />
            ))}
          </div>

          <p className="text-lg font-bold text-[#17211D]">
            Based on {businessData.reviewCount} Customer Reviews
          </p>

          <p className="text-sm text-[#68736D] max-w-md mt-2 mb-8">
            Providing reliable waterproofing and water tank cleaning services across Bengaluru. Check our public Google Business Profile for complete location details and verified feedback.
          </p>

          <a
            href={businessData.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#12372A] hover:bg-[#1F8A70] text-white font-bold text-sm shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-[#1F8A70]/30"
          >
            <LuShieldCheck className="w-4 h-4 text-[#D8B77A]" />
            <span>View Reviews on Google</span>
            <LuExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Reviews;
