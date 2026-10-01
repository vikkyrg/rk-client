import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { businessData } from '../data/businessData';
import SectionHeader from '../components/SectionHeader';
import ContactCTA from '../components/ContactCTA';
import AboutPreview from '../components/About';
import aboutImg from '../assets/about.png';
import { 
  LuShieldCheck, 
  LuSearch, 
  LuSparkles, 
  LuCircleCheck, 
  LuClock3, 
  LuMapPin,
  LuPhone,
  LuDroplets
} from 'react-icons/lu';
import { FiHome } from 'react-icons/fi';

const About = () => {
  const steps = [
    {
      num: "01",
      title: "Understand & Inspect",
      desc: "We assess your water tank or sump condition, identify leakage spots, algae buildup, or structural cracks, and recommend the exact waterproofing or cleaning required.",
      icon: LuSearch
    },
    {
      num: "02",
      title: "Clean / Protect",
      desc: "Our team uses high-pressure water jets and specialized food-grade non-toxic waterproof sealants to eradicate sludge, bacteria, and active water leaks.",
      icon: LuSparkles
    },
    {
      num: "03",
      title: "Complete the Service",
      desc: "We perform a thorough final quality check to ensure crystal clear water storage and long-lasting structural protection.",
      icon: LuCircleCheck
    }
  ];

  return (
    <AnimatedPage className="bg-organic-pattern">
      
      {/* Redesigned Compact & Professional Hero Header Card */}
      <section className="relative overflow-hidden rounded-3xl mx-3 sm:mx-6 my-4 border border-[#CDE3D7] shadow-xl bg-gradient-to-br from-[#EAF5EF] via-[#F4FAF6] to-[#E1F0E7]">
        
        {/* Top-Left Soft Organic Mint Glow */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#BCE4D2]/40 blur-3xl pointer-events-none z-0" />

        {/* Bottom Continuous Fluid Green Wave Decorative Overlay */}
        <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-16 lg:h-20 block">
            <path fill="#BCE2D0" opacity="0.6" d="M0,50 C300,110 600,10 900,80 C1050,115 1150,60 1200,75 L1200,120 L0,120 Z"></path>
            <path fill="#0D7A5F" d="M0,80 C250,50 550,105 850,60 C1020,35 1120,80 1200,65 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-5 sm:py-7 lg:py-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#CBE8D9] text-[#0D5C45] text-xs font-extrabold tracking-wider shadow-xs mb-3">
                <FiHome className="w-3.5 h-3.5 text-[#0D7A5F]" />
                <span>ABOUT US</span>
              </div>

              {/* Title - Single horizontal line on desktop */}
              <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.6rem] font-black tracking-tight leading-tight text-[#162921] mb-2.5 whitespace-normal lg:whitespace-nowrap">
                <span>ABOUT R K </span>
                <span className="text-[#0D7A5F]">WATERPROOFING</span>
              </h1>

              {/* Description */}
              <p className="text-[#435C50] text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl mb-5">
                Delivering clean water hygiene and reliable structural waterproofing protection across Bengaluru.
              </p>

              {/* 3 Compact Feature Badges with Vertical Dividers */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-3 sm:gap-x-5">
                
                {/* Feature 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <LuDroplets className="w-5 h-5 text-[#0D7A5F] fill-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>CLEAN</div>
                    <div>WATER HYGIENE</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-7 w-[1.5px] bg-[#C5DDD1]" />

                {/* Feature 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <LuShieldCheck className="w-5 h-5 text-[#0D7A5F] fill-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>RELIABLE</div>
                    <div>PROTECTION</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-7 w-[1.5px] bg-[#C5DDD1]" />

                {/* Feature 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <FiHome className="w-5 h-5 text-[#0D7A5F] fill-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>BENGALURU</div>
                    <div>LOCAL SERVICE</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <img 
                src={aboutImg} 
                alt="R K Waterproofing Protection Shield and Home" 
                className="w-full h-auto max-h-[260px] sm:max-h-[300px] lg:max-h-[320px] object-contain drop-shadow-md rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Split About Section */}
      <AboutPreview />

      {/* Who We Are & What We Do Detailed Content */}
      <section className="py-16 md:py-24 bg-white border-b border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Who We Are */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                tag="WHO WE ARE"
                title="Your Dedicated Local Waterproofing & Tank Cleaning Team"
              />

              <p className="text-[#68736D] text-base leading-relaxed">
                <strong className="text-[#17211D]">{businessData.name}</strong> operates out of Basaveshwar Nagar, Bengaluru, providing emergency and scheduled waterproofing solutions, sump painting, and deep tank cleaning services.
              </p>

              <div className="p-6 rounded-3xl bg-[#F7F5EF] border border-[#DDE5DF] space-y-4">
                <div className="flex items-center gap-3">
                  <LuMapPin className="w-5 h-5 text-[#1F8A70]" />
                  <span className="font-bold text-[#17211D]">Based in Basaveshwar Nagar, Bengaluru</span>
                </div>
                <div className="flex items-center gap-3">
                  <LuClock3 className="w-5 h-5 text-[#1F8A70]" />
                  <span className="font-bold text-[#17211D]">Available 24 Hours a Day</span>
                </div>
                <div className="flex items-center gap-3">
                  <LuPhone className="w-5 h-5 text-[#1F8A70]" />
                  <span className="font-bold text-[#17211D]">Direct Helpline: {businessData.phone}</span>
                </div>
              </div>
            </div>

            {/* What We Do */}
            <div className="lg:col-span-6 space-y-6">
              <SectionHeader
                tag="WHAT WE DO"
                title="Comprehensive Water Sanitation & Structural Sealings"
              />

              <p className="text-[#68736D] text-base leading-relaxed">
                Whether you manage an individual home, an apartment complex, a school, or a commercial property, dirty water tanks and leaking sumps can cause serious health hazards and property damage.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#EAF4EF] border border-[#DDE5DF]">
                  <h4 className="font-bold text-[#12372A] mb-1">Residential Homes</h4>
                  <p className="text-xs text-[#68736D]">Individual sumps, overhead PVC &amp; concrete tanks.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#EAF4EF] border border-[#DDE5DF]">
                  <h4 className="font-bold text-[#12372A] mb-1">Apartments &amp; Societies</h4>
                  <p className="text-xs text-[#68736D]">Large capacity underground sumps &amp; rooftop tanks.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#EAF4EF] border border-[#DDE5DF]">
                  <h4 className="font-bold text-[#12372A] mb-1">Schools &amp; Institutions</h4>
                  <p className="text-xs text-[#68736D]">Hygienic disinfectant tank cleaning for student safety.</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#EAF4EF] border border-[#DDE5DF]">
                  <h4 className="font-bold text-[#12372A] mb-1">Terraces &amp; Rain Water</h4>
                  <p className="text-xs text-[#68736D]">Terrace elastomeric sealants &amp; rain water tank cleaning.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Our Approach Section (3 Steps) */}
      <section className="py-16 md:py-24 bg-[#EAF4EF] border-b border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeader
            tag="OUR APPROACH"
            title="A Systematic 3-Step Service Process"
            description="How we ensure total clean hygiene and leak-proof confidence for every client."
            center={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const IconComponent = step.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white p-8 rounded-3xl border border-[#DDE5DF] shadow-sm hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                >
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-4xl font-black text-[#D8B77A]">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-[#EAF4EF] text-[#1F8A70] flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-[#17211D] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#68736D] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <ContactCTA />
    </AnimatedPage>
  );
};

export default About;
