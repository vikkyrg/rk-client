import React from 'react';
import { Link } from 'react-router-dom';
import { businessData } from '../data/businessData';
import { servicesData } from '../data/servicesData';
import logo from '../assets/logo/logo.png';
import { LuPhone, LuMapPin, LuClock3, LuShieldCheck, LuChevronRight } from 'react-icons/lu';

const Footer = () => {
  return (
    <footer className="bg-[#17211D] text-[#F7F5EF] pt-16 pb-20 md:pb-8 border-t border-[#1F8A70]/30 relative overflow-hidden">
      
      {/* ── Thematic Background Design ── */}
      
      {/* Large concentric circles top right */}
      <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border-[60px] border-[#1F8A70]/10 pointer-events-none"></div>
      <div className="absolute -top-10 -right-10 w-[300px] h-[300px] rounded-full border-[30px] border-[#1F8A70]/5 pointer-events-none"></div>
      
      {/* Large soft glow top left & bottom right */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#1F8A70]/10 blur-3xl pointer-events-none z-0"></div>
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#1F8A70]/10 blur-3xl pointer-events-none z-0"></div>
      
      {/* Dot matrix left */}
      <svg className="absolute top-24 left-10 w-24 h-32 text-[#1F8A70]/30 pointer-events-none hidden md:block" viewBox="0 0 100 120" fill="currentColor">
        {[0,1,2,3,4,5].map(r => [0,1,2,3].map(c => <circle key={`l-${r}-${c}`} cx={c*20 + 10} cy={r*20 + 10} r="2.5" />))}
      </svg>

      {/* Dot matrix right */}
      <svg className="absolute bottom-16 right-6 w-24 h-32 text-[#1F8A70]/30 pointer-events-none hidden md:block" viewBox="0 0 100 120" fill="currentColor">
        {[0,1,2,3,4,5].map(r => [0,1,2,3].map(c => <circle key={`r-${r}-${c}`} cx={c*20 + 10} cy={r*20 + 10} r="2.5" />))}
      </svg>

      {/* Abstract leaves bottom left */}
      <svg className="absolute -bottom-16 -left-16 w-80 h-80 text-[#1F8A70]/20 pointer-events-none" viewBox="0 0 200 200" fill="currentColor">
        <path d="M100 200C100 200 110 150 140 130C170 110 200 120 200 120C200 120 190 90 160 90C130 90 110 110 100 140L100 200Z" />
        <path d="M90 200C90 200 70 160 30 150C-10 140 -30 160 -30 160C-30 160 -10 140 20 150C50 160 80 190 90 200Z" />
        <path d="M95 140C95 140 85 110 65 100C45 90 25 100 25 100C25 100 35 80 55 90C75 100 90 120 95 140Z" />
        <path d="M105 130C105 130 115 100 135 90C155 80 175 90 175 90C175 90 165 70 145 80C125 90 110 110 105 130Z" />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          
          {/* COLUMN 1: Logo & Business Identity */}
          <div className="lg:col-span-4 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="shrink-0 transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src={logo} 
                    alt={businessData.shortName} 
                    className="h-12 sm:h-16 w-auto max-w-[200px] sm:max-w-[220px] object-contain filter drop-shadow" 
                  />
              </div>
            </Link>

            <p className="text-sm text-[#DDE5DF]/80 leading-relaxed max-w-sm font-normal">
              Bengaluru's dedicated experts for deep water tank cleaning, sump waterproofing painting, terrace sealings, and rain water tank maintenance.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#D8B77A]">
              <LuShieldCheck className="w-4 h-4 text-[#1F8A70]" />
              <span>Certified Local Waterproofing Service</span>
            </div>
          </div>

          {/* COLUMN 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-extrabold text-[#D8B77A] uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm font-medium">
              <li>
                <Link to="/" className="hover:text-[#63C7A5] transition-colors flex items-center gap-1">
                  <LuChevronRight className="w-3.5 h-3.5 text-[#1F8A70]" /> Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#63C7A5] transition-colors flex items-center gap-1">
                  <LuChevronRight className="w-3.5 h-3.5 text-[#1F8A70]" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#63C7A5] transition-colors flex items-center gap-1">
                  <LuChevronRight className="w-3.5 h-3.5 text-[#1F8A70]" /> All Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#63C7A5] transition-colors flex items-center gap-1">
                  <LuChevronRight className="w-3.5 h-3.5 text-[#1F8A70]" /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: All 7 Services (Dynamically mapped from central data) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold text-[#D8B77A] uppercase tracking-wider">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm font-medium text-[#DDE5DF]/90">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <Link 
                    to={service.slug} 
                    className="hover:text-[#63C7A5] transition-colors flex items-start gap-1.5 group py-0.5"
                  >
                    <LuChevronRight className="w-3.5 h-3.5 text-[#1F8A70] shrink-0 mt-1 group-hover:translate-x-0.5 transition-transform" />
                    <span className="leading-snug">{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-extrabold text-[#D8B77A] uppercase tracking-wider">
              Contact
            </h3>
            
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <LuPhone className="w-5 h-5 text-[#1F8A70] shrink-0 mt-0.5" />
                <a href={businessData.phoneLink} className="font-bold text-white hover:text-[#63C7A5] transition-colors">
                  {businessData.phone}
                </a>
              </li>

              <li className="flex items-start gap-3 text-[#DDE5DF]">
                <LuMapPin className="w-5 h-5 text-[#1F8A70] shrink-0 mt-0.5" />
                <span>
                  Basaveshwar Nagar, Bengaluru, Karnataka 560079
                </span>
              </li>

              <li className="flex items-center gap-3 text-[#DDE5DF]">
                <LuClock3 className="w-5 h-5 text-[#1F8A70] shrink-0" />
                <span>{businessData.openingHours}</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Divider & Copyright */}
        <div className="pt-8 border-t border-[#1F8A70]/20 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#68736D]">
          <p>© 2026 {businessData.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link to="/services" className="hover:text-[#63C7A5] transition-colors">Services Overview</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-[#63C7A5] transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
