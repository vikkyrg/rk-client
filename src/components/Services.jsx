import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';
import SectionHeader from './SectionHeader';
import waterBg from '../assets/images/water_bg.jpg';
import { 
  LuArrowRight, 
  LuPaintbrush, 
  LuDroplet, 
  LuHouse, 
  LuCloudRain, 
  LuBuilding, 
  LuGraduationCap, 
  LuWrench 
} from 'react-icons/lu';

const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'LuPaintbrush': return <LuPaintbrush className="w-6 h-6" />;
    case 'LuDroplet': return <LuDroplet className="w-6 h-6" />;
    case 'LuHome': return <LuHouse className="w-6 h-6" />;
    case 'LuCloudRain': return <LuCloudRain className="w-6 h-6" />;
    case 'LuBuilding': return <LuBuilding className="w-6 h-6" />;
    case 'LuGraduationCap': return <LuGraduationCap className="w-6 h-6" />;
    case 'LuWrench': return <LuWrench className="w-6 h-6" />;
    default: return <LuDroplet className="w-6 h-6" />;
  }
};

const Services = ({ showHeader = true, limit }) => {
  const displayServices = limit ? servicesData.slice(0, limit) : servicesData;

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-br from-[#EAF5EF]/30 to-[#F4FAF6] relative border-b border-[#DDE5DF] overflow-hidden">
      
      {/* ── Performance-Optimized Background Design ── */}
      {/* Simple absolute static background instead of bg-fixed and mix-blend for perfectly smooth 60fps scrolling */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-25 bg-cover bg-center" 
        style={{ backgroundImage: `url(${waterBg})` }}
      ></div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large Concentric Rings (Lightweight SVG/CSS shapes, no heavy blurs) */}
        <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] rounded-full border-[60px] border-[#1F8A70]/5 opacity-50" />
        <div className="absolute top-32 right-[5%] w-[300px] h-[300px] rounded-full border-[20px] border-[#1F8A70]/5 opacity-50" />
        
        {/* Dot Matrix Pattern Left */}
        <svg className="absolute top-40 left-10 w-24 h-32 text-[#1F8A70]/10 hidden lg:block" viewBox="0 0 100 120" fill="currentColor">
          {[0,1,2,3,4,5].map(r => [0,1,2,3].map(c => <circle key={`l-${r}-${c}`} cx={c*20 + 10} cy={r*20 + 10} r="2.5" />))}
        </svg>

        {/* Dot Matrix Pattern Right */}
        <svg className="absolute bottom-32 right-10 w-24 h-32 text-[#1F8A70]/10 hidden lg:block" viewBox="0 0 100 120" fill="currentColor">
          {[0,1,2,3,4,5].map(r => [0,1,2,3].map(c => <circle key={`r-${r}-${c}`} cx={c*20 + 10} cy={r*20 + 10} r="2.5" />))}
        </svg>

        {/* Abstract Leaves/Waves Bottom Left */}
        <svg className="absolute -bottom-10 -left-10 w-64 h-64 text-[#1F8A70]/5 opacity-70" viewBox="0 0 200 200" fill="currentColor">
          <path d="M100 200C100 200 110 150 140 130C170 110 200 120 200 120C200 120 190 90 160 90C130 90 110 110 100 140L100 200Z" />
          <path d="M90 200C90 200 70 160 30 150C-10 140 -30 160 -30 160C-30 160 -10 140 20 150C50 160 80 190 90 200Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {showHeader && (
          <SectionHeader
            tag="OUR SERVICES"
            title="Professional Waterproofing & Water Tank Cleaning"
            description="Explore our specialized services designed to protect your property, prevent water leakage, and guarantee clean water hygiene."
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayServices.map((service) => {
            return (
              <div 
                key={service.id}
                className="group relative bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 border border-[#DDE5DF] flex flex-col justify-between overflow-hidden"
              >
                {/* Image Banner Wrapper to allow floating icon */}
                <div className="relative w-full">
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-[#17211D]">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-xs font-extrabold text-[#12372A] shadow-sm border border-[#DDE5DF]">
                      {service.badge}
                    </div>
                  </div>

                  {/* Icon floating bottom right of image (now outside overflow-hidden) */}
                  <div className="absolute -bottom-5 right-5 z-10 w-11 h-11 rounded-2xl bg-[#12372A] border-2 border-white text-[#D8B77A] flex items-center justify-center shadow-lg group-hover:bg-[#1F8A70] group-hover:text-white transition-colors duration-300">
                    {getServiceIcon(service.iconName)}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-5 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#17211D] group-hover:text-[#12372A] transition-colors mb-2.5 line-clamp-1">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68736D] leading-relaxed mb-6 line-clamp-3 font-normal">
                      {service.shortDescription}
                    </p>
                  </div>

                  <Link
                    to={service.slug}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#EAF4EF] group-hover:bg-[#12372A] text-[#12372A] group-hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 w-full justify-center shadow-xs border border-[#1F8A70]/20"
                  >
                    <span>View Service Details</span>
                    <LuArrowRight className="w-4 h-4 text-[#1F8A70] group-hover:text-[#D8B77A] group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Hover line accent */}
                <div className="h-1.5 w-full bg-[#1F8A70] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
