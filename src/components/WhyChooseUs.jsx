import React from 'react';
import SectionHeader from './SectionHeader';
import { 
  LuDroplets, 
  LuShieldCheck, 
  LuHouse, 
  LuBuilding2,
  LuSparkles
} from 'react-icons/lu';

const WhyChooseUs = () => {
  const highlights = [
    {
      num: "01",
      title: "Water Tank Cleaning",
      desc: "Deep pressure cleaning, disinfectant flushing, and complete sediment removal for pure water.",
      icon: LuSparkles
    },
    {
      num: "02",
      title: "Sump Waterproofing",
      desc: "Specialized waterproof chemical coating and crack sealing for underground water sumps.",
      icon: LuShieldCheck
    },
    {
      num: "03",
      title: "Terrace Services",
      desc: "Comprehensive weather-resistant terrace waterproofing treatments to prevent roof dampness.",
      icon: LuDroplets
    },
    {
      num: "04",
      title: "Residential & Commercial",
      desc: "Tailored services for individual homes, apartment complexes, schools, and commercial facilities.",
      icon: LuBuilding2
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#EAF4EF] relative overflow-hidden border-b border-[#DDE5DF]">
      
      {/* Decorative Subtle Background Element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-[#63C7A5]/8 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              tag="WHY CHOOSE US"
              title="Why Homeowners & Businesses Rely On R K Waterproofing"
              description="We deliver total peace of mind with prompt 24/7 availability, proven waterproof sealants, and thorough tank cleaning services."
            />

            <div className="p-6 rounded-3xl bg-white border border-[#DDE5DF] shadow-sm space-y-3">
              <div className="flex items-center gap-3 text-[#12372A]">
                <div className="w-10 h-10 rounded-full bg-[#1F8A70]/10 flex items-center justify-center text-[#1F8A70]">
                  <LuHouse className="w-5 h-5" />
                </div>
                <span className="font-bold text-lg">Local Bengaluru Expertise</span>
              </div>
              <p className="text-sm text-[#68736D] leading-relaxed">
                Operating directly out of Basaveshwar Nagar with full coverage across Bengaluru 24 hours a day, 7 days a week.
              </p>
            </div>
          </div>

          {/* Right Column: Asymmetric Numbered Highlights */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div 
                  key={idx}
                  className={`p-7 rounded-3xl bg-white border border-[#DDE5DF] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 ${
                    idx % 2 === 1 ? 'sm:translate-y-6' : ''
                  }`}
                >
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-4xl font-black text-[#D8B77A] tracking-wider">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#EAF4EF] text-[#1F8A70] flex items-center justify-center">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#17211D] mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#68736D] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
