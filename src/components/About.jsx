import React from 'react';
import { Link } from 'react-router-dom';
import { businessData } from '../data/businessData';
import SectionHeader from './SectionHeader';
import terraceImg from '../assets/images/terrace_waterproofing.jpg';
import { LuCircleCheck, LuArrowRight, LuShieldCheck } from 'react-icons/lu';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden border-y border-[#DDE5DF]">

      {/* ── Thematic Background Design ───────────────────────────────────── */}

      {/* Large tinted corner arc — suggests a water tank cross-section */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full border-[32px] border-[#1F8A70]/10 pointer-events-none"></div>
      <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full border-[40px] border-[#1F8A70]/10 pointer-events-none"></div>

      {/* Water droplet SVG — top right */}
      <svg className="absolute top-10 right-8 w-12 h-12 text-[#1F8A70]/25 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 4 10.5 4 15a8 8 0 0016 0C20 10.5 12 2 12 2z"/>
      </svg>

      {/* Small droplet — mid left */}
      <svg className="absolute top-1/3 left-4 w-7 h-7 text-[#1F8A70]/30 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C12 2 4 10.5 4 15a8 8 0 0016 0C20 10.5 12 2 12 2z"/>
      </svg>

      {/* Shield icon — bottom left, large faint */}
      <svg className="absolute bottom-8 left-1/4 w-16 h-16 text-[#12372A]/15 pointer-events-none" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L3 7v5c0 5.25 3.75 10.15 9 11.25C17.25 22.15 21 17.25 21 12V7L12 2z"/>
      </svg>

      {/* Subtle horizontal wave lines — suggest flowing water */}
      <svg className="absolute bottom-0 left-0 w-full pointer-events-none opacity-[0.10]" viewBox="0 0 1440 80" preserveAspectRatio="none">
        <path d="M0,40 C240,80 480,0 720,40 C960,80 1200,0 1440,40 L1440,80 L0,80 Z" fill="#1F8A70"/>
      </svg>
      <svg className="absolute bottom-0 left-0 w-full pointer-events-none opacity-[0.15]" viewBox="0 0 1440 60" preserveAspectRatio="none">
        <path d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z" fill="#1F8A70"/>
      </svg>

      {/* Dot grid pattern — top right quadrant */}
      <svg className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-[0.15]" viewBox="0 0 200 200">
        {[0,1,2,3,4,5,6].map(row =>
          [0,1,2,3,4,5,6].map(col => (
            <circle key={`${row}-${col}`} cx={col * 28 + 10} cy={row * 28 + 10} r="2.5" fill="#1F8A70"/>
          ))
        )}
      </svg>

      {/* ─────────────────────────────────────────────────────────────────── */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: Image Container with Floating Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Decorative Accent Background Blob */}
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-[#EAF4EF] rounded-3xl -z-10"></div>
              
              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#DDE5DF] bg-[#17211D]">
                <img 
                  src={terraceImg} 
                  alt="R K Waterproofing Terrace Service" 
                  className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 left-6 sm:left-10 bg-[#12372A] text-white p-4 px-6 rounded-2xl shadow-xl border border-[#1F8A70]/40 flex items-center gap-3">
                <div className="p-2 bg-[#1F8A70] rounded-xl text-[#D8B77A]">
                  <LuShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#63C7A5]">Trusted Local Brand</p>
                  <p className="text-sm font-extrabold text-[#F7F5EF]">Local Waterproofing Service</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: About Details & Checklist */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <SectionHeader
              tag="ABOUT R K WATERPROOFING"
              title="Expert Waterproofing & Deep Tank Cleaning in Bengaluru"
            />

            <p className="text-[#68736D] text-base sm:text-lg leading-relaxed font-normal">
              {businessData.name} provides complete structural preservation and water sanitation solutions across Basaveshwar Nagar and the broader Bengaluru metropolitan area.
            </p>

            {/* Checklist items */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F7F5EF] border border-[#DDE5DF]">
                <LuCircleCheck className="w-6 h-6 text-[#1F8A70] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[#17211D]">Water Tank &amp; Sump Cleaning</h4>
                  <p className="text-sm text-[#68736D]">Hygienic deep cleaning and sludge evacuation for residential and commercial sumps.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F7F5EF] border border-[#DDE5DF]">
                <LuCircleCheck className="w-6 h-6 text-[#1F8A70] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[#17211D]">Terrace &amp; Roof Waterproofing</h4>
                  <p className="text-sm text-[#68736D]">Long-lasting protective elastomeric sealants that stop rain leaks and cracks.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-[#F7F5EF] border border-[#DDE5DF]">
                <LuCircleCheck className="w-6 h-6 text-[#1F8A70] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-base font-bold text-[#17211D]">Sump Waterproof Painting &amp; Leak Repair</h4>
                  <p className="text-sm text-[#68736D]">Specialized waterproofing paint applications for sumps, rain water tanks, and schools.</p>
                </div>
              </div>
            </div>



          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
