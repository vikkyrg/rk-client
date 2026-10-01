import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { servicesData } from '../data/servicesData';
import ServicesGrid from '../components/Services';
import ContactCTA from '../components/ContactCTA';
import serviceHeroImg from '../assets/service.png';
import {
  LuShieldCheck,
  LuDroplets,
  LuPhone,
  LuSparkles,
  LuAward,
  LuCircleCheck
} from 'react-icons/lu';

const ServicesPage = () => {
  return (
    <AnimatedPage className="bg-organic-pattern">

      {/* ── Services Page Hero Section ── */}
      <section className="relative overflow-hidden rounded-3xl mx-3 sm:mx-6 my-4 border border-[#CDE3D7] shadow-xl bg-gradient-to-br from-[#EAF5EF] via-[#F4FAF6] to-[#E1F0E7]">

        {/* Decorative ambient glows & shapes */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#BCE4D2]/40 blur-3xl pointer-events-none z-0" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#1F8A70]/10 blur-3xl pointer-events-none z-0" />

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-0 pointer-events-none leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-10 sm:h-14 lg:h-16 block">
            <path fill="#BCE2D0" opacity="0.6" d="M0,50 C300,110 600,10 900,80 C1050,115 1150,60 1200,75 L1200,120 L0,120 Z"></path>
            <path fill="#0D7A5F" d="M0,80 C250,50 550,105 850,60 C1020,35 1120,80 1200,65 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-8 sm:py-10 lg:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">

              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#CBE8D9] text-[#0D5C45] text-xs font-extrabold tracking-wider shadow-xs mb-3">
                <LuDroplets className="w-3.5 h-3.5 text-[#0D7A5F]" />
                <span>RK WATER PROOFING SERVICES</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black tracking-tight leading-tight text-[#162921] mb-3">
                Professional Waterproofing &amp; <span className="text-[#0D7A5F]">Water Tank Cleaning</span> Services
              </h1>

              <p className="text-[#435C50] text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl mb-6">
                RK Water Proofing provides complete end-to-end solutions for underground sump waterproofing painting, mechanized tank cleaning, roof terrace sealing, and emergency leakage repairs across Bengaluru.
              </p>

              {/* 3 Quick Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-xl">
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-[#C5DDD1] shadow-xs">
                  <LuShieldCheck className="w-5 h-5 text-[#0D7A5F] shrink-0" />
                  <span className="text-xs font-bold text-[#162921]">Food-Grade Non-Toxic</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-[#C5DDD1] shadow-xs">
                  <LuSparkles className="w-5 h-5 text-[#0D7A5F] shrink-0" />
                  <span className="text-xs font-bold text-[#162921]">6-Stage Sanitation</span>
                </div>
                <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-[#C5DDD1] shadow-xs">
                  <LuAward className="w-5 h-5 text-[#0D7A5F] shrink-0" />
                  <span className="text-xs font-bold text-[#162921]">Certified Experts</span>
                </div>
              </div>

            </div>

            {/* Right Column Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative">
                <img
                  src={serviceHeroImg}
                  alt="RK Water Proofing Services"
                  className="w-full h-auto max-h-[300px] sm:max-h-[340px] object-contain drop-shadow-lg rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Services Grid Section (Displays all 7 services) ── */}
      <ServicesGrid showHeader={true} />

      {/* ── Why Our Services Stand Out Section ── */}
      <section className="py-14 bg-white border-b border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#12372A] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden shadow-xl">

            {/* Background Accent Graphics */}
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#1F8A70]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full border-[40px] border-[#D8B77A]/10 pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#D8B77A]">
                  QUALITY ASSURANCE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Need a Customized Waterproofing or Cleaning Quote?
                </h2>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  We inspect your sump, tank, or terrace on-site, identify root leakage causes, and recommend exact waterproofing coating treatments tailored to your property.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#DDE5DF]">
                    <LuCircleCheck className="w-4 h-4 text-[#D8B77A]" /> 100% Satisfaction Guarantee
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#DDE5DF]">
                    <LuCircleCheck className="w-4 h-4 text-[#D8B77A]" /> Food-Grade Non-Toxic Materials
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#DDE5DF]">
                    <LuCircleCheck className="w-4 h-4 text-[#D8B77A]" /> Experienced Local Crew
                  </div>
                  <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#DDE5DF]">
                    <LuCircleCheck className="w-4 h-4 text-[#D8B77A]" /> Fast 24/7 Response Time
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex justify-start lg:justify-end">
                <a
                  href="tel:09164416108"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#1F8A70] hover:bg-white text-white hover:text-[#12372A] text-sm sm:text-base font-extrabold shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <LuPhone className="w-5 h-5 text-[#D8B77A] group-hover:text-[#12372A]" />
                  <span>Call 91644 16108</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <ContactCTA />

    </AnimatedPage>
  );
};

export default ServicesPage;
