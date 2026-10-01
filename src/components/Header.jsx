import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { businessData } from '../data/businessData';
import { servicesData } from '../data/servicesData';
import logo from '../assets/logo/logo.png';
import { 
  LuPhone, 
  LuMenu, 
  LuX, 
  LuChevronDown, 
  LuChevronUp,
  LuPaintbrush,
  LuDroplet,
  LuHouse,
  LuCloudRain,
  LuBuilding,
  LuGraduationCap,
  LuWrench,
  LuArrowRight
} from 'react-icons/lu';

// Helper for dynamic service icons
const getServiceIcon = (iconName) => {
  switch (iconName) {
    case 'LuPaintbrush': return <LuPaintbrush className="w-4 h-4 text-[#1F8A70] shrink-0" />;
    case 'LuDroplet': return <LuDroplet className="w-4 h-4 text-[#1F8A70] shrink-0" />;
    case 'LuHome': return <LuHouse className="w-4 h-4 text-[#1F8A70] shrink-0" />;
    case 'LuCloudRain': return <LuCloudRain className="w-4 h-4 text-[#1F8A70] shrink-0" />;
    case 'LuBuilding': return <LuBuilding className="w-4 h-4 text-[#1F8A70] shrink-0" />;
    case 'LuGraduationCap': return <LuGraduationCap className="w-4 h-4 text-[#1F8A70] shrink-0" />;
    case 'LuWrench': return <LuWrench className="w-4 h-4 text-[#1F8A70] shrink-0" />;
    default: return <LuDroplet className="w-4 h-4 text-[#1F8A70] shrink-0" />;
  }
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesMobileOpen, setIsServicesMobileOpen] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeout = useRef(null);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled((prev) => {
            if (prev !== isScrolled) return isScrolled;
            return prev;
          });
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesMobileOpen(false);
    setIsDropdownHovered(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setIsDropdownHovered(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setIsDropdownHovered(false);
    }, 150);
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileServices = () => setIsServicesMobileOpen(!isServicesMobileOpen);

  const isServiceActive = location.pathname.startsWith('/services');

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 py-3 transition-colors duration-300">
      <div 
        className={`max-w-7xl mx-auto rounded-2xl py-2 px-4 md:px-5 transition-all duration-300 ${
          scrolled 
            ? 'bg-white/98 shadow-lg shadow-[#17211D]/5 border border-[#DDE5DF]' 
            : 'bg-[#F7F5EF] border border-[#DDE5DF]/60 shadow-sm'
        }`}
      >
        <div className="flex justify-between items-center">
          
          {/* LEFT: Logo & Business Branding */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative transition-transform duration-300 group-hover:scale-105 shrink-0">
              <img 
                src={logo} 
                alt={businessData.shortName} 
                className="w-auto h-12 sm:h-14 md:h-16 max-w-[180px] sm:max-w-[220px] object-contain shrink-0 filter drop-shadow"
              />
            </div>
          </Link>

          {/* CENTER: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-[#EAF4EF]/80 px-4 py-1.5 rounded-full border border-[#DDE5DF]">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#1F8A70] text-white shadow-sm' 
                    : 'text-[#17211D] hover:text-[#1F8A70] hover:bg-white/60'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#1F8A70] text-white shadow-sm' 
                    : 'text-[#17211D] hover:text-[#1F8A70] hover:bg-white/60'
                }`
              }
            >
              About
            </NavLink>

            {/* Services Desktop Dropdown Trigger Container */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/services"
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isServiceActive || isDropdownHovered
                    ? 'bg-[#1F8A70] text-white shadow-sm' 
                    : 'text-[#17211D] hover:text-[#1F8A70] hover:bg-white/60'
                }`}
              >
                <span>Services</span>
                <LuChevronDown 
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isDropdownHovered ? 'rotate-180 text-white' : ''
                  }`} 
                />
              </Link>

              {/* Custom Desktop Dropdown Menu */}
              {isDropdownHovered && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-80 lg:w-96 z-50 animate-fadeIn">
                  <div className="bg-white rounded-2xl shadow-xl border border-[#DDE5DF] p-3 overflow-hidden text-[#17211D] relative">
                    


                    {/* Services Items List */}
                    <div className="space-y-0.5 max-h-[420px] overflow-y-auto pr-1">
                      {servicesData.map((service) => {
                        const isCurrent = location.pathname === service.slug;
                        return (
                          <Link
                            key={service.id}
                            to={service.slug}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 group ${
                              isCurrent 
                                ? 'bg-[#12372A] text-white' 
                                : 'hover:bg-[#EAF4EF] text-[#17211D]'
                            }`}
                            onClick={() => setIsDropdownHovered(false)}
                          >
                            <div className={`p-2 rounded-lg transition-colors ${
                              isCurrent 
                                ? 'bg-[#1F8A70]/30 text-[#D8B77A]' 
                                : 'bg-[#EAF4EF] group-hover:bg-white text-[#1F8A70]'
                            }`}>
                              {getServiceIcon(service.iconName)}
                            </div>

                            <div className="flex-grow min-w-0">
                              <p className={`text-xs sm:text-sm font-bold truncate ${
                                isCurrent ? 'text-[#D8B77A]' : 'group-hover:text-[#12372A]'
                              }`}>
                                {service.title}
                              </p>
                              <p className={`text-[11px] truncate leading-tight ${
                                isCurrent ? 'text-gray-200' : 'text-gray-500'
                              }`}>
                                {service.badge}
                              </p>
                            </div>

                            <LuArrowRight className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 ${
                              isCurrent 
                                ? 'text-[#D8B77A] translate-x-0.5' 
                                : 'text-gray-300 group-hover:text-[#1F8A70] group-hover:translate-x-1'
                            }`} />
                          </Link>
                        );
                      })}
                    </div>



                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#1F8A70] text-white shadow-sm' 
                    : 'text-[#17211D] hover:text-[#1F8A70] hover:bg-white/60'
                }`
              }
            >
              Gallery
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-[#1F8A70] text-white shadow-sm' 
                    : 'text-[#17211D] hover:text-[#1F8A70] hover:bg-white/60'
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* RIGHT: Call Now Action Button */}
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a 
              href={businessData.phoneLink}
              className="group relative inline-flex items-center justify-center gap-2.5 px-6 py-2.5 rounded-full bg-[#12372A] hover:bg-[#1F8A70] text-white text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-[#1F8A70]/40"
            >
              <LuPhone className="w-4 h-4 text-[#D8B77A] group-hover:rotate-12 transition-transform duration-300" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile Menu Button & Quick Call */}
          <div className="md:hidden flex items-center gap-2.5">
            <a 
              href={businessData.phoneLink}
              className="flex items-center justify-center bg-[#12372A] text-[#D8B77A] rounded-full h-10 w-10 shadow border border-[#1F8A70]/30 active:scale-95 transition-transform"
              aria-label="Call Now"
            >
              <LuPhone className="w-4 h-4" />
            </a>
            
            <button
              onClick={toggleMenu}
              className="p-2 text-[#17211D] hover:text-[#1F8A70] rounded-xl hover:bg-[#EAF4EF] focus:outline-none transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMenuOpen ? <LuX className="w-7 h-7" /> : <LuMenu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMenuOpen && (
        <div className="md:hidden max-w-7xl mx-auto mt-2 bg-white rounded-2xl shadow-xl border border-[#DDE5DF] overflow-hidden p-4 animate-fadeIn">
          <div className="flex flex-col gap-1">
            <NavLink 
              to="/" 
              end
              className={({ isActive }) => 
                `px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#12372A] text-[#D8B77A]' 
                    : 'text-[#17211D] hover:bg-[#EAF4EF]'
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#12372A] text-[#D8B77A]' 
                    : 'text-[#17211D] hover:bg-[#EAF4EF]'
                }`
              }
              onClick={toggleMenu}
            >
              About
            </NavLink>

            {/* Mobile Accordion Services Item */}
            <div className="rounded-xl overflow-hidden">
              <div 
                className={`flex items-center justify-between px-4 py-3 cursor-pointer rounded-xl font-semibold transition-all ${
                  isServiceActive ? 'bg-[#EAF4EF] text-[#12372A]' : 'text-[#17211D] hover:bg-[#EAF4EF]'
                }`}
                onClick={toggleMobileServices}
              >
                <Link to="/services" className="flex-grow font-semibold text-base" onClick={(e) => e.stopPropagation()}>
                  Services
                </Link>
                <button 
                  type="button" 
                  onClick={toggleMobileServices}
                  className="p-1 text-[#1F8A70] hover:bg-white rounded-lg transition-colors"
                  aria-label="Toggle Services List"
                >
                  {isServicesMobileOpen ? <LuChevronUp className="w-5 h-5" /> : <LuChevronDown className="w-5 h-5" />}
                </button>
              </div>

              {/* Accordion Sub-list */}
              {isServicesMobileOpen && (
                <div className="pl-3 pr-1 py-1.5 bg-[#F7F5EF] rounded-xl mt-1 space-y-1">
                  <Link
                    to="/services"
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-extrabold uppercase text-[#1F8A70] hover:bg-white transition-colors"
                    onClick={toggleMenu}
                  >
                    <span>All Services Overview</span>
                    <LuArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {servicesData.map((service) => {
                    const isSelected = location.pathname === service.slug;
                    return (
                      <Link
                        key={service.id}
                        to={service.slug}
                        className={`flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-all ${
                          isSelected 
                            ? 'bg-[#12372A] text-[#D8B77A] font-bold shadow-sm' 
                            : 'text-[#17211D] hover:bg-white font-medium'
                        }`}
                        onClick={toggleMenu}
                      >
                        <span className="shrink-0">{getServiceIcon(service.iconName)}</span>
                        <span className="truncate">{service.title}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#12372A] text-[#D8B77A]' 
                    : 'text-[#17211D] hover:bg-[#EAF4EF]'
                }`
              }
              onClick={toggleMenu}
            >
              Gallery
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-4 py-3 rounded-xl text-base font-semibold transition-all ${
                  isActive 
                    ? 'bg-[#12372A] text-[#D8B77A]' 
                    : 'text-[#17211D] hover:bg-[#EAF4EF]'
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>

            <div className="pt-3 border-t border-[#DDE5DF] mt-2 flex flex-col gap-2">
              <a 
                href={businessData.phoneLink}
                className="flex items-center justify-center gap-2 bg-[#12372A] text-white py-3 rounded-xl font-bold shadow"
              >
                <LuPhone className="text-[#D8B77A]" /> Call {businessData.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
