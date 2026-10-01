import React from 'react';
import { Link } from 'react-router-dom';
import { businessData } from '../data/businessData';
import homeImg from '../assets/home.png';
import { 
  LuPhone, 
  LuArrowRight, 
  LuClock3, 
  LuStar, 
  LuShieldCheck, 
  LuDroplet
} from 'react-icons/lu';

const BusinessHero = () => {
  return (
    <section className="relative overflow-hidden rounded-3xl mx-3 sm:mx-6 mt-3 sm:mt-4 border border-[#CDE3D7] shadow-xl bg-gradient-to-br from-[#EAF5EF] via-[#F4FAF6] to-[#E1F0E7]">
      
      {/* Top-Left Soft Organic Mint Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-[#BCE4D2]/40 blur-3xl pointer-events-none z-0" />

      {/* Bottom Continuous Fluid Green Wave Decorative Overlay */}
      <div className="absolute -bottom-1 left-0 right-0 z-0 pointer-events-none leading-none">
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
              <LuShieldCheck className="w-3.5 h-3.5 text-[#0D7A5F]" />
              <span>R K WATERPROOFING</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-[2.85rem] font-black tracking-tight leading-[1.15] text-[#162921] mb-2.5">
              <span>Protect Your Space. </span><br className="hidden sm:inline" />
              <span className="text-[#0D7A5F]">Keep Every Drop Clean.</span>
            </h1>

            {/* Business Subtitle Tag */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-[#0D7A5F] mb-3">
              <LuShieldCheck className="w-4 h-4 text-[#0D7A5F] shrink-0" />
              <span>R K Waterproofing and Water Tank &amp; Sump Cleaning Services</span>
            </div>

            {/* Description */}
            <p className="text-[#435C50] text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl mb-5">
              Bengaluru's trusted specialists for deep water tank cleaning, sump waterproofing, terrace sealings, and long-lasting leakage solutions. Complete hygiene and structural protection.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6">
              <a
                href={businessData.phoneLink}
                className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0D7A5F] hover:bg-[#0A624C] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
              >
                <LuPhone className="w-4 h-4 text-white" />
                <span>Call Now</span>
                <LuArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#F4FAF6] text-[#162921] text-sm font-bold shadow-md transition-all duration-300 hover:-translate-y-0.5 border border-[#DCEBE2]"
              >
                <span>Explore Services</span>
                <LuArrowRight className="w-4 h-4 text-[#0D7A5F]" />
              </Link>
            </div>

            {/* 3 Stat Badges at Bottom Left */}
            <div className="flex flex-wrap items-center gap-y-3 gap-x-3 sm:gap-x-5">
              
              {/* Stat 1 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                  <LuClock3 className="w-5 h-5 text-[#0D7A5F]" />
                </div>
                <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                  <div className="text-sm font-extrabold text-[#0D7A5F]">24/7</div>
                  <div className="text-[10px] text-[#68736D]">Service Available</div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-7 w-[1.5px] bg-[#C5DDD1]" />

              {/* Stat 2 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                  <LuDroplet className="w-5 h-5 text-[#0D7A5F] fill-[#0D7A5F]" />
                </div>
                <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                  <div className="text-sm font-extrabold text-[#0D7A5F]">100%</div>
                  <div className="text-[10px] text-[#68736D]">Clean Hygiene</div>
                </div>
              </div>

              {/* Vertical Divider */}
              <div className="hidden sm:block h-7 w-[1.5px] bg-[#C5DDD1]" />

              {/* Stat 3 */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                  <LuStar className="w-5 h-5 text-[#D8B77A] fill-[#D8B77A]" />
                </div>
                <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                  <div className="text-sm font-extrabold text-[#162921]">3.6 ★</div>
                  <div className="text-[10px] text-[#68736D]">8 Customer Reviews</div>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side Image (using C:\Users\rvikk\Desktop\Rk water proof\src\assets\home.png) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <img 
              src={homeImg} 
              alt="R K Waterproofing Protection Shield and Home" 
              className="w-full h-auto max-h-[280px] sm:max-h-[320px] lg:max-h-[350px] object-contain drop-shadow-md rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default BusinessHero;
