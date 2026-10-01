import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import SectionHeader from './SectionHeader';
import heroImg from '../assets/images/hero_waterproofing.jpg';
import terraceImg from '../assets/images/terrace_waterproofing.jpg';
import tankImg from '../assets/images/tank_cleaning_service.jpg';
import { LuMaximize2, LuX } from 'react-icons/lu';

const galleryImages = [
  {
    id: 1,
    src: heroImg,
    title: "Sump Waterproofing & Painting",
    category: "Sump Waterproofing",
    span: "col-span-1 md:col-span-2 row-span-2"
  },
  {
    id: 2,
    src: terraceImg,
    title: "Terrace Elastomeric Sealant Coating",
    category: "Terrace Protection",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: 3,
    src: tankImg,
    title: "High-Pressure Water Tank Jet Cleaning",
    category: "Tank Cleaning",
    span: "col-span-1 md:col-span-1 row-span-1"
  },
  {
    id: 4,
    src: terraceImg,
    title: "Apartment & Institutional Sump Maintenance",
    category: "Commercial & Apartment",
    span: "col-span-1 md:col-span-2 row-span-1"
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-[#F2F8F4] relative overflow-hidden">
      
      {/* Background Decorative Elements (More Visible) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
        {/* Top Left Organic Shape */}
        <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-gradient-to-br from-[#D4EBE0] to-[#EAF4EF] blur-2xl opacity-90" />
        
        {/* Right Side Shape */}
        <div className="absolute top-[30%] -right-32 w-[28rem] h-[28rem] rounded-full bg-gradient-to-bl from-[#CBE8D9] to-transparent blur-3xl opacity-80" />
        
        {/* Distinct Dot Grid Pattern */}
        <div className="absolute top-16 right-16 w-48 h-48 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#0D7A5F 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        <div className="absolute bottom-20 left-16 w-64 h-64 opacity-[0.15]" style={{ backgroundImage: 'radial-gradient(#0D7A5F 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
        
        {/* Abstract Fluid Wave at Bottom */}
        <div className="absolute bottom-0 left-0 w-full opacity-[0.08] transform translate-y-4">
          <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path fill="#0D7A5F" fillOpacity="1" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,165.3C960,149,1056,171,1152,192C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeader
          tag="PROJECT GALLERY"
          title="See Our Waterproofing & Cleaning Work In Action"
          description="A glimpse of our actual service execution across sumps, water tanks, terraces, and commercial buildings in Bengaluru."
        />

        {/* Masonry Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className={`group relative rounded-3xl overflow-hidden cursor-pointer border border-[#DDE5DF] bg-[#17211D] shadow-sm hover:shadow-xl transition-[box-shadow,transform] duration-500 transform-gpu ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 transform-gpu will-change-transform backface-hidden"
              />

              {/* Hover Dark Overlay & Caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#12372A]/90 via-[#17211D]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                <span className="text-xs font-bold uppercase tracking-wider text-[#D8B77A] mb-1">
                  {img.category}
                </span>
                <h4 className="text-lg font-bold text-white mb-3">
                  {img.title}
                </h4>
                
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#63C7A5] bg-[#12372A]/80 w-fit px-3 py-1.5 rounded-full border border-[#1F8A70]/50">
                  <LuMaximize2 className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>

              {/* Top-Right Quick Badge */}
              <div className="absolute top-4 right-4 bg-white p-2 rounded-xl shadow opacity-70 group-hover:opacity-100 transition-opacity">
                <LuMaximize2 className="w-4 h-4 text-[#12372A]" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal using Portal to escape stacking contexts */}
      {selectedImage && createPortal(
        <div 
          className="fixed inset-0 z-[100] bg-[#17211D]/92 p-4 sm:p-8 flex items-center justify-center animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#DDE5DF] max-h-screen flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-[#12372A] text-white p-2.5 rounded-full hover:bg-[#1F8A70] transition-colors shadow-lg"
              aria-label="Close Preview"
            >
              <LuX className="w-6 h-6" />
            </button>

            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="w-full h-auto min-h-0 object-contain overflow-hidden bg-[#EAF4EF]"
              style={{ maxHeight: 'calc(100vh - 120px)' }}
            />

            <div className="p-4 sm:p-6 bg-[#12372A] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#D8B77A]">
                  {selectedImage.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">
                  {selectedImage.title}
                </h3>
              </div>
              
              <a 
                href="tel:09164416108"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1F8A70] text-white text-sm font-bold hover:bg-[#17715B] transition-colors shrink-0"
              >
                Book Similar Service
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Gallery;
