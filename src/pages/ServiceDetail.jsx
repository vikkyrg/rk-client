import React, { useEffect, useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { useParams, Link } from 'react-router-dom';
import { getServiceBySlug, getRelatedServices } from '../data/servicesData';
import { businessData } from '../data/businessData';
import ContactCTA from '../components/ContactCTA';
import { 
  LuPhone, 
  LuChevronRight, 
  LuCircleHelp, 
  LuChevronDown, 
  LuChevronUp,
  LuShieldCheck,
  LuSparkles,
  LuWrench,
  LuAward,
  LuClock,
  LuArrowRight,
  LuHouse,
  LuCircleCheck,
  LuDroplet,
  LuLeaf,
  LuZap,
  LuBanknote,
  LuTrendingUp,
  LuFileCheck,
  LuBuilding,
  LuWind
} from 'react-icons/lu';

// Helper function to pick relevant icon based on benefit title keywords
const getBenefitIcon = (title) => {
  const t = title.toLowerCase();
  if (t.includes('water') || t.includes('leak') || t.includes('rain')) return <LuDroplet className="w-5 h-5" />;
  if (t.includes('eco') || t.includes('green') || t.includes('nature') || t.includes('pure')) return <LuLeaf className="w-5 h-5" />;
  if (t.includes('safe') || t.includes('protect') || t.includes('hygiene') || t.includes('health') || t.includes('prevent')) return <LuShieldCheck className="w-5 h-5" />;
  if (t.includes('fast') || t.includes('quick') || t.includes('efficient')) return <LuZap className="w-5 h-5" />;
  if (t.includes('cost') || t.includes('save') || t.includes('bill') || t.includes('price')) return <LuBanknote className="w-5 h-5" />;
  if (t.includes('life') || t.includes('long') || t.includes('durable') || t.includes('extend')) return <LuTrendingUp className="w-5 h-5" />;
  if (t.includes('certif') || t.includes('contract') || t.includes('formal') || t.includes('report') || t.includes('compliant')) return <LuFileCheck className="w-5 h-5" />;
  if (t.includes('structure') || t.includes('wall') || t.includes('concrete')) return <LuBuilding className="w-5 h-5" />;
  if (t.includes('clean') || t.includes('sparkle') || t.includes('odor')) return <LuSparkles className="w-5 h-5" />;
  
  return <LuCircleCheck className="w-5 h-5" />;
};


const ServiceDetailPage = () => {
  const { slug } = useParams();

  // Handle accordion toggle for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  
  // Parallax scroll state
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    let animationFrameId;
    const handleScroll = () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
      animationFrameId = window.requestAnimationFrame(() => {
        // Only update parallax if we are near the top (hero section visible)
        if (window.scrollY < 800) {
          setOffsetY(window.scrollY);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  // Construct current slug
  const currentSlug = `/services/${slug}`;
  const service = getServiceBySlug(currentSlug);
  const relatedServices = getRelatedServices(currentSlug, 4);

  // Dynamic SEO metadata & scroll to top
  useEffect(() => {
    if (service) {
      document.title = service.metaTitle || `${service.title} | ${businessData.shortName}`;
      
      // Update meta description if tag exists
      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', service.metaDescription || service.shortDescription);
      }
    }
  }, [service]);

  // If slug is invalid, redirect to /services
  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold text-[#17211D] mb-3">Service Not Found</h2>
        <p className="text-gray-600 mb-6">The service page you are looking for does not exist.</p>
        <Link 
          to="/services" 
          className="px-6 py-3 rounded-full bg-[#1F8A70] text-white font-bold hover:bg-[#12372A] transition-colors"
        >
          Back to All Services
        </Link>
      </div>
    );
  }

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <AnimatedPage className="bg-white">
      
      {/* ──────────────────────────────────────────────────────────────────
          SECTION 1 — NEW FULL-WIDTH SERVICE HERO WITH PARALLAX BACKGROUND
      ────────────────────────────────────────────────────────────────── */}
      <section className="relative w-full min-h-[480px] sm:min-h-[420px] lg:min-h-[470px] lg:max-h-[500px] flex items-center overflow-hidden select-none">
        
        {/* Independent Parallax Background Layer */}
        <div 
          className="absolute z-0 bg-no-repeat bg-cover bg-center will-change-transform"
          style={{ 
            top: '-20%', bottom: '-20%', left: 0, right: 0,
            backgroundImage: `url(${service.image})`,
            transform: `translate3d(0, ${offsetY * 0.3}px, 0)`
          }}
        >
          {/* Professional Dark Overlay attached to the background */}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent" />
        </div>

        {/* Ambient Subtle Particle/Glow Accents */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-[#1F8A70]/10 blur-3xl pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 relative z-10 w-full">
          <div className="max-w-3xl space-y-3.5 sm:space-y-4 text-left mt-4 sm:mt-0">
            
            {/* Breadcrumb Navigation */}
            <nav className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/15 shadow-sm flex-wrap">
              <Link to="/" className="hover:text-[#D8B77A] transition-colors flex items-center gap-1.5 text-white">
                <LuHouse className="w-3.5 h-3.5 text-[#63C7A5]" /> Home
              </Link>
              <LuChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <Link to="/services" className="hover:text-[#D8B77A] transition-colors text-white">
                Services
              </Link>
              <LuChevronRight className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-[#D8B77A] font-bold">{service.title}</span>
            </nav>

            {/* Eyebrow Branding */}
            <div className="text-[10px] sm:text-xs font-black uppercase tracking-widest text-[#D8B77A] flex items-center gap-2">
              <span className="w-5 h-0.5 bg-[#1F8A70]" />
              <span>RK WATER PROOFING</span>
            </div>

            {/* Service Title */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {service.title}
            </h1>

            {/* Short Description */}
            <p className="text-gray-200 text-sm sm:text-base font-medium leading-relaxed max-w-[600px] drop-shadow-sm">
              {service.shortDescription}
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-3 flex flex-wrap items-center gap-3">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="group px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-[#1F8A70] hover:bg-[#12372A] text-white text-xs sm:text-sm font-extrabold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5 border border-[#D8B77A]/40 flex items-center gap-2"
              >
                <span>GET A FREE QUOTE</span>
                <LuArrowRight className="w-4 h-4 text-[#D8B77A] group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={businessData.phoneLink}
                className="px-6 py-3 sm:px-7 sm:py-3.5 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#12372A] text-xs sm:text-sm font-extrabold shadow-lg hover:shadow-xl backdrop-blur-md transition-all duration-300 border border-white/30 flex items-center gap-2"
              >
                <LuPhone className="w-4 h-4 text-[#D8B77A] group-hover:text-[#12372A]" />
                <span>CALL NOW</span>
              </a>
            </div>

          </div>
        </div>

      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 2 — ABOUT THIS SERVICE
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-[#1F8A70] bg-[#EAF4EF] px-3.5 py-1.5 rounded-full">
                  ABOUT THIS SERVICE
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#17211D] tracking-tight mt-3">
                  {service.about.title}
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-[#68736D] leading-relaxed font-normal">
                <p className="text-[#17211D] font-medium leading-relaxed bg-[#F7F5EF] p-5 rounded-2xl border-l-4 border-[#1F8A70]">
                  {service.about.whatIsIt}
                </p>
                <p>
                  {service.about.whyRequired}
                </p>
              </div>

              <div className="bg-[#EAF4EF]/60 rounded-2xl p-6 border border-[#CDE3D7] space-y-3">
                <h3 className="text-base font-extrabold text-[#12372A] flex items-center gap-2">
                  <LuWrench className="w-5 h-5 text-[#1F8A70]" />
                  How RK Water Proofing Handles It
                </h3>
                <p className="text-xs sm:text-sm text-[#435C50] leading-relaxed font-medium">
                  {service.about.howWeHandle}
                </p>
              </div>
            </div>

            {/* Right Card: Common Problems Fixed */}
            <div className="lg:col-span-5 bg-[#12372A] text-white rounded-3xl p-7 shadow-xl border border-[#1F8A70]/30 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1F8A70]/20 rounded-full blur-2xl pointer-events-none" />

              <div className="relative z-10 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F8A70]/40 text-[#D8B77A] text-xs font-extrabold">
                  <LuCircleHelp className="w-3.5 h-3.5" />
                  <span>COMMON PROBLEMS SOLVED</span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  Issues We Eliminate For You
                </h3>

                <ul className="space-y-3.5 pt-2">
                  {service.about.commonProblems.map((prob, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#DDE5DF]">
                      <div className="w-5 h-5 rounded-full bg-[#1F8A70] text-white flex items-center justify-center shrink-0 mt-0.5">
                        <LuCircleCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-snug">{prob}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-[#1F8A70]/40">
                  <a
                    href={businessData.phoneLink}
                    className="w-full py-3 rounded-xl bg-[#D8B77A] hover:bg-white text-[#12372A] text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 shadow transition-colors"
                  >
                    <LuPhone className="w-4 h-4" />
                    <span>Free On-Site Inspection</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 3 — OUR SERVICE PROCESS
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-[#F7F5EF] border-b border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#1F8A70] bg-[#EAF4EF] px-3.5 py-1.5 rounded-full">
              STEP-BY-STEP WORKFLOW
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211D] tracking-tight mt-3">
              Our Service Process
            </h2>
            <p className="text-xs sm:text-sm text-[#68736D] mt-2">
              We follow a disciplined, professional methodology to ensure long-lasting results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.process.map((stepItem, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-6 border border-[#DDE5DF] shadow-sm hover:shadow-md transition-all duration-300 relative group overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="w-12 h-12 rounded-2xl bg-[#EAF4EF] group-hover:bg-[#12372A] text-[#12372A] group-hover:text-[#D8B77A] font-black text-lg flex items-center justify-center transition-colors duration-300 shadow-xs">
                    {stepItem.step}
                  </span>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                    STAGE {idx + 1}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#17211D] mb-2 group-hover:text-[#1F8A70] transition-colors">
                  {stepItem.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#68736D] leading-relaxed font-normal">
                  {stepItem.description}
                </p>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#1F8A70] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 4 — BENEFITS OF OUR SERVICE
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#1F8A70] bg-[#EAF4EF] px-3.5 py-1.5 rounded-full">
              KEY ADVANTAGES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211D] tracking-tight mt-3">
              Benefits of Our Service
            </h2>
            <p className="text-xs sm:text-sm text-[#68736D] mt-2">
              Why investing in professional service from RK Water Proofing pays off for your property.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.benefits.map((benefit, idx) => (
              <div 
                key={idx}
                className="bg-[#F7F5EF]/80 rounded-2xl p-6 border border-[#CDE3D7] flex items-start gap-4 hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-[#12372A] text-[#D8B77A] flex items-center justify-center shrink-0 shadow-sm">
                  {getBenefitIcon(benefit.title)}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#17211D] mb-1">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#68736D] leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 5 — WHY CHOOSE RK WATER PROOFING
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-[#17211D] text-white relative overflow-hidden border-b border-[#1F8A70]/30">
        
        {/* ── Thematic Background Design (Matches Footer) ── */}
        
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
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#D8B77A] bg-[#1F8A70]/40 px-3.5 py-1.5 rounded-full">
              WHY CHOOSE US
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-3">
              Why RK Water Proofing Is Bengaluru's Top Choice
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Over a decade of hands-on experience protecting residential & commercial structures.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1F8A70] text-[#D8B77A] flex items-center justify-center shadow">
                <LuAward className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Experienced Professionals</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Trained and certified technicians specialized in negative/positive side waterproofing and high-pressure jet cleaning.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1F8A70] text-[#D8B77A] flex items-center justify-center shadow">
                <LuShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Quality Materials</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                We exclusively use non-toxic, VOC-free, food-grade elastomeric polymer coatings safe for human drinking water.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1F8A70] text-[#D8B77A] flex items-center justify-center shadow">
                <LuWrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Professional Equipment</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Equipped with 150-bar jet washers, sludge extractors, PU grouting injection pumps, and German UV disinfectors.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1F8A70] text-[#D8B77A] flex items-center justify-center shadow">
                <LuClock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Reliable Service</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Punctual project completion with transparent pricing, zero hidden charges, and clear communication.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1F8A70] text-[#D8B77A] flex items-center justify-center shadow">
                <LuSparkles className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Proper Safety Procedures</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Strict safety protocol adherence including confined space gear, harnesses, helmets, and ventilation pumps.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#1F8A70] text-[#D8B77A] flex items-center justify-center shadow">
                <LuCircleCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Customer Satisfaction</h3>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                Over 500+ satisfied homeowners, apartment associations, and institutions served across Bengaluru.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 6 — SERVICE DETAILS SPECIFICATIONS GRID
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#1F8A70] bg-[#EAF4EF] px-3.5 py-1.5 rounded-full">
              SPECIFICATIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211D] tracking-tight mt-3">
              Service Details &amp; Scope
            </h2>
          </div>

          <div className="max-w-4xl mx-auto bg-[#F7F5EF] rounded-3xl p-6 sm:p-8 border border-[#DDE5DF] shadow-sm">
            <div className="divide-y divide-[#DDE5DF]">
              
              <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                <span className="text-xs sm:text-sm font-extrabold text-[#12372A] uppercase tracking-wider">
                  Service Type
                </span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-[#17211D] font-semibold">
                  {service.details.serviceType}
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                <span className="text-xs sm:text-sm font-extrabold text-[#12372A] uppercase tracking-wider">
                  Suitable For
                </span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-[#17211D] font-semibold">
                  {service.details.suitableFor}
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                <span className="text-xs sm:text-sm font-extrabold text-[#12372A] uppercase tracking-wider">
                  Common Problems Solved
                </span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-[#17211D] font-semibold">
                  {service.details.commonProblems}
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                <span className="text-xs sm:text-sm font-extrabold text-[#12372A] uppercase tracking-wider">
                  Recommended Schedule
                </span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-[#17211D] font-semibold">
                  {service.details.recommendedMaintenance}
                </span>
              </div>

              <div className="py-4 grid grid-cols-1 sm:grid-cols-3 gap-2 items-center">
                <span className="text-xs sm:text-sm font-extrabold text-[#12372A] uppercase tracking-wider">
                  Service Coverage
                </span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-[#17211D] font-semibold">
                  {service.details.serviceCoverage}
                </span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 7 — SERVICE FREQUENTLY ASKED QUESTIONS (FAQ)
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-[#F7F5EF] border-b border-[#DDE5DF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-black uppercase tracking-widest text-[#1F8A70] bg-[#EAF4EF] px-3.5 py-1.5 rounded-full">
              GOT QUESTIONS?
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211D] tracking-tight mt-3">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-[#68736D] mt-2">
              Common queries answered about {service.title}.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl border border-[#DDE5DF] overflow-hidden shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-5 text-left font-bold text-sm sm:text-base text-[#17211D] flex items-center justify-between gap-4 hover:text-[#1F8A70] transition-colors focus:outline-none"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-[#EAF4EF] text-[#1F8A70] text-xs font-extrabold flex items-center justify-center shrink-0">
                        Q
                      </span>
                      {faq.question}
                    </span>
                    {isOpen ? <LuChevronUp className="w-5 h-5 text-[#1F8A70] shrink-0" /> : <LuChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#68736D] leading-relaxed border-t border-[#EAF4EF] bg-[#F7F5EF]/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 8 — RELATED SERVICES
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-white border-b border-[#DDE5DF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-black uppercase tracking-widest text-[#1F8A70] bg-[#EAF4EF] px-3.5 py-1.5 rounded-full">
                EXPLORE MORE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-[#17211D] tracking-tight mt-3">
                Related Services
              </h2>
            </div>
            <Link 
              to="/services" 
              className="text-xs sm:text-sm font-bold text-[#1F8A70] hover:text-[#12372A] flex items-center gap-1.5"
            >
              View All Services <LuArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedServices.map((relService) => (
              <Link 
                key={relService.id}
                to={relService.slug}
                className="group bg-[#F7F5EF] rounded-2xl overflow-hidden border border-[#DDE5DF] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div className="h-36 overflow-hidden relative bg-[#17211D]">
                  <img 
                    src={relService.image} 
                    alt={relService.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2 bg-white/90 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold text-[#12372A]">
                    {relService.badge}
                  </div>
                </div>

                <div className="p-4 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-[#17211D] group-hover:text-[#1F8A70] transition-colors mb-1.5 line-clamp-1">
                      {relService.title}
                    </h3>
                    <p className="text-xs text-[#68736D] line-clamp-2 leading-relaxed">
                      {relService.shortDescription}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#DDE5DF]/60 flex items-center justify-between text-xs font-bold text-[#1F8A70]">
                    <span>View Service</span>
                    <LuArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ──────────────────────────────────────────────────────────────────
          SECTION 9 — FINAL CTA
      ────────────────────────────────────────────────────────────────── */}
      <section className="py-14 sm:py-20 bg-gradient-to-br from-[#12372A] to-[#1F8A70] text-white relative overflow-hidden">
        
        {/* Decorative background shapes */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#D8B77A]/20 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-[#D8B77A] bg-white/10 px-4 py-1.5 rounded-full">
            GET STARTED TODAY
          </span>

          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Need Professional Waterproofing or Tank Cleaning?
          </h2>

          <p className="text-gray-200 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Protect your property with reliable, certified service from RK Water Proofing. Contact our expert team today for an on-site evaluation and instant quote!
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="px-8 py-4 rounded-full bg-[#D8B77A] hover:bg-white text-[#12372A] font-extrabold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
            >
              <span>GET A FREE QUOTE</span>
              <LuArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={businessData.phoneLink}
              className="px-8 py-4 rounded-full bg-white/15 hover:bg-white text-white hover:text-[#12372A] font-extrabold text-sm sm:text-base shadow hover:shadow-lg transition-all duration-300 border border-white/30 flex items-center gap-2"
            >
              <LuPhone className="w-4 h-4" />
              <span>CALL NOW: {businessData.phone}</span>
            </a>
          </div>
        </div>

      </section>

    </AnimatedPage>
  );
};

export default ServiceDetailPage;
