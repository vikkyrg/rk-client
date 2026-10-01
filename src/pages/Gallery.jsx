import React, { useState, useEffect, useCallback, useRef } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { createPortal } from 'react-dom';
import { 
  LuImage, 
  LuEye, 
  LuX, 
  LuChevronLeft, 
  LuChevronRight, 
  LuRotateCw,
  LuSparkles,
  LuMaximize2,
  LuShieldCheck,
  LuUsers
} from 'react-icons/lu';
import galleryHeroImg from '../assets/gallery.png';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const fetchGallery = async () => {
    setIsLoading(true);
    setIsError(false);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/gallery`);
      if (response.ok) {
        const data = await response.json();
        setImages(data);
      } else {
        setIsError(true);
      }
    } catch (error) {
      console.error('Error fetching gallery:', error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  // --- Lightbox Logic --- //

  const openLightbox = (index) => {
    setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  const nextImage = useCallback(() => {
    if (images.length === 0) return;
    setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % images.length));
  }, [images.length]);

  const prevImage = useCallback(() => {
    if (images.length === 0) return;
    setLightboxIndex((prev) => (prev === null ? 0 : (prev - 1 + images.length) % images.length));
  }, [images.length]);

  // Body scroll lock effect
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (lightboxIndex === null) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, nextImage, prevImage, closeLightbox]);

  // Mobile swipe handling
  const touchStart = useRef({ x: null, y: null });

  const handleTouchStart = (e) => {
    touchStart.current.x = e.touches[0].clientX;
    touchStart.current.y = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (touchStart.current.x === null || touchStart.current.y === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const diffX = touchStart.current.x - touchEndX;
    const diffY = touchStart.current.y - touchEndY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      // Horizontal swipe
      if (Math.abs(diffX) > 40) {
        if (diffX > 0) nextImage();
        else prevImage();
      }
    } else {
      // Vertical swipe
      if (diffY < -80) { // Swipe down > 80px to close
        closeLightbox();
      }
    }
    touchStart.current = { x: null, y: null };
  };

  return (
    <AnimatedPage className="bg-[#F7F5EF] min-h-screen pb-20">
      
      {/* Header / Hero Section - Compact Styled Layout */}
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
                <LuImage className="w-3.5 h-3.5 text-[#0D7A5F]" />
                <span>OUR WORK</span>
              </div>
              
              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.6rem] font-black tracking-tight leading-tight text-[#162921] mb-2.5 whitespace-normal lg:whitespace-nowrap">
                <span>PROJECT </span>
                <span className="text-[#0D7A5F]">GALLERY</span>
              </h1>
              
              {/* Description */}
              <p className="text-[#435C50] text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl mb-5">
                Take a look at some of our recent waterproofing and tank cleaning projects across Bengaluru.
              </p>

              {/* 3 Compact Feature Badges with Vertical Dividers */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-3 sm:gap-x-5">
                
                {/* Feature 1 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <LuImage className="w-5 h-5 text-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>REAL</div>
                    <div>PROJECT PHOTOS</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-7 w-[1.5px] bg-[#C5DDD1]" />

                {/* Feature 2 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <LuShieldCheck className="w-5 h-5 text-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>QUALITY</div>
                    <div>WORKMANSHIP</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-7 w-[1.5px] bg-[#C5DDD1]" />

                {/* Feature 3 */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <LuUsers className="w-5 h-5 text-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>TRUSTED</div>
                    <div>BY CLIENTS</div>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Side Image */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <img 
                src={galleryHeroImg} 
                alt="Gallery Showcase" 
                className="w-full h-auto max-h-[260px] sm:max-h-[300px] lg:max-h-[320px] object-contain drop-shadow-md rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* Main Section Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12">
        
        {/* Section Heading */}
        <div className="flex items-center justify-between mb-6 sm:mb-8 border-b border-[#DDE5DF] pb-4">
          <div>
            <span className="text-xs font-black text-[#0D7A5F] uppercase tracking-widest block mb-1">REAL PROJECT WORK</span>
            <h2 className="text-2xl sm:text-3xl font-black text-[#17211D]">OUR PROJECTS</h2>
          </div>
          {images.length > 0 && !isLoading && (
            <span className="bg-[#EAF4EF] text-[#0D7A5F] text-xs sm:text-sm font-bold px-3 py-1 rounded-full border border-[#CDE3D7]">
              {images.length} {images.length === 1 ? 'Project' : 'Projects'}
            </span>
          )}
        </div>

        {/* 1. Loading State - Skeleton Cards */}
        {isLoading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="bg-white rounded-3xl overflow-hidden border border-[#DDE5DF] shadow-sm animate-pulse">
                <div className="aspect-[4/3] bg-[#EAF4EF]/70" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-[#EAF4EF] rounded-md w-3/4" />
                  <div className="h-3 bg-[#EAF4EF] rounded-md w-1/2" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 2. Error State */}
        {!isLoading && isError && (
          <div className="text-center py-16 sm:py-20 bg-white rounded-3xl border border-[#DDE5DF] shadow-sm max-w-xl mx-auto px-6">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 border border-red-100">
              <LuImage className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#17211D] mb-2">Unable to load gallery images</h3>
            <p className="text-[#68736D] text-sm mb-6">Please check your internet connection or backend server and try again.</p>
            <button 
              onClick={fetchGallery}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0D7A5F] hover:bg-[#095743] text-white font-bold rounded-xl shadow-md transition-all text-sm"
            >
              <LuRotateCw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
          </div>
        )}

        {/* 3. Empty State */}
        {!isLoading && !isError && images.length === 0 && (
          <div className="text-center py-16 sm:py-24 bg-white rounded-3xl border border-[#DDE5DF] shadow-sm max-w-lg mx-auto px-6">
            <div className="w-20 h-20 bg-[#EAF4EF] text-[#0D7A5F] rounded-full flex items-center justify-center mx-auto mb-4 border border-[#CDE3D7]">
              <LuImage className="w-10 h-10" />
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-[#17211D] mb-2">No gallery images available yet.</h3>
            <p className="text-[#68736D] text-sm leading-relaxed">
              Our project photos are being updated by the team. Please check back soon to explore our completed projects!
            </p>
          </div>
        )}

        {/* 4. Loaded Gallery Grid */}
        {!isLoading && !isError && images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {images.map((item, idx) => (
              <div 
                key={item._id} 
                onClick={() => openLightbox(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-3xl bg-white border border-[#DDE5DF] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="aspect-[4/3] overflow-hidden bg-[#EAF4EF] relative">
                  <img
                    src={item.imageData}
                    alt={item.title || 'RK Waterproofing Project'}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  
                  {/* Subtle Dark Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/90 text-[#0D7A5F] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                      <LuMaximize2 className="w-5 h-5" />
                    </div>
                  </div>
                </div>

                {/* Card Title Container */}
                {item.title ? (
                  <div className="p-4 bg-white border-t border-[#F0F4F2]">
                    <h3 className="text-[#17211D] font-bold text-base line-clamp-1 group-hover:text-[#0D7A5F] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && images[lightboxIndex] && createPortal(
        <div 
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#05140f]/45 backdrop-blur-[14px] animate-fade-in touch-none"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          
          {/* Close Button */}
          <button 
            type="button"
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10000] p-3 bg-black/35 hover:bg-[#087f5b]/85 backdrop-blur-md text-white rounded-full transition-all focus:outline-none flex items-center justify-center border border-white/10 shadow-lg"
            title="Close (Esc)"
          >
            <LuX className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {images.length > 1 && (
            <>
              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-3 sm:left-6 z-[10000] p-3 sm:p-4 bg-black/35 hover:bg-[#087f5b]/85 backdrop-blur-md text-white rounded-full transition-all focus:outline-none hidden sm:flex items-center justify-center border border-white/10 shadow-lg"
                title="Previous (Left Arrow)"
              >
                <LuChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>

              <button 
                type="button"
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-3 sm:right-6 z-[10000] p-3 sm:p-4 bg-black/35 hover:bg-[#087f5b]/85 backdrop-blur-md text-white rounded-full transition-all focus:outline-none hidden sm:flex items-center justify-center border border-white/10 shadow-lg"
                title="Next (Right Arrow)"
              >
                <LuChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
              </button>
            </>
          )}

          {/* Lightbox Main Image Container */}
          <div 
            className="relative flex flex-col items-center justify-center max-w-[94vw] md:max-w-[90vw] animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white/5 border border-white/15 rounded-[18px] p-1.5 md:p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] flex items-center justify-center">
              <img 
                src={images[lightboxIndex].imageData} 
                alt={images[lightboxIndex].title || 'Gallery Image'} 
                className="max-h-[72vh] md:max-h-[80vh] max-w-full object-contain rounded-xl select-none"
                draggable="false"
              />
            </div>
            
            {/* Caption & Counter Footer */}
            <div className="mt-4 sm:mt-6 flex flex-col items-center justify-center text-center text-white space-y-3 w-full px-4">
              {images[lightboxIndex].title && (
                <h3 className="text-base sm:text-lg md:text-xl font-bold tracking-wide break-words line-clamp-2 drop-shadow-md">
                  {images[lightboxIndex].title}
                </h3>
              )}
              {images.length > 1 && (
                <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/10 shadow-sm text-xs sm:text-sm font-semibold tracking-wide text-white/90">
                  {lightboxIndex + 1} / {images.length}
                </div>
              )}
            </div>
          </div>
          
        </div>,
        document.body
      )}

    </AnimatedPage>
  );
};

export default Gallery;
