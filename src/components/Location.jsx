import React from 'react';
import { businessData } from '../data/businessData';
import { LuMapPin, LuPhone, LuClock3, LuExternalLink, LuNavigation } from 'react-icons/lu';

const Location = () => {
  return (
    <section className="py-16 md:py-24 bg-[#12372A] text-white relative overflow-hidden rounded-3xl mx-3 sm:mx-6 my-8 border border-[#1F8A70]/40 shadow-2xl">
      
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
      <svg className="absolute bottom-32 right-6 w-24 h-32 text-[#1F8A70]/30 pointer-events-none hidden md:block" viewBox="0 0 100 120" fill="currentColor">
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Address & Details */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F8A70]/20 border border-[#63C7A5]/40 text-[#63C7A5] text-xs font-bold uppercase tracking-wider">
              <LuMapPin className="w-3.5 h-3.5 text-[#D8B77A]" />
              <span>BENGALURU HEADQUARTERS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Find Us In <br />
              <span className="text-[#D8B77A]">Basaveshwar Nagar</span>
            </h2>

            <p className="text-[#DDE5DF] text-base leading-relaxed">
              We provide rapid dispatch for waterproofing and water tank cleaning services throughout Bengaluru.
            </p>

            <div className="space-y-4 pt-2">
              
              {/* Address Card */}
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#17211D]/80 border border-[#1F8A70]/30 backdrop-blur-xs">
                <div className="p-3 bg-[#1F8A70] rounded-xl text-white shrink-0">
                  <LuMapPin className="w-6 h-6 text-[#D8B77A]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#63C7A5] uppercase tracking-wider mb-1">Address</h4>
                  <p className="text-sm text-white font-medium leading-snug">
                    {businessData.address.line1}, {businessData.address.line2},<br />
                    {businessData.address.area}, {businessData.address.city},<br />
                    {businessData.address.state} {businessData.address.pincode}
                  </p>
                </div>
              </div>

              {/* Phone & Hours Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#17211D]/80 border border-[#1F8A70]/30">
                  <div className="p-3 bg-[#1F8A70] rounded-xl text-white shrink-0">
                    <LuPhone className="w-5 h-5 text-[#D8B77A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#63C7A5] uppercase tracking-wider">Phone</h4>
                    <a href={businessData.phoneLink} className="text-sm font-bold text-white hover:text-[#D8B77A] transition-colors">
                      {businessData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 p-4 rounded-2xl bg-[#17211D]/80 border border-[#1F8A70]/30">
                  <div className="p-3 bg-[#1F8A70] rounded-xl text-white shrink-0">
                    <LuClock3 className="w-5 h-5 text-[#D8B77A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#63C7A5] uppercase tracking-wider">Availability</h4>
                    <p className="text-sm font-bold text-white">
                      {businessData.openingHours}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <div className="pt-2">
              <a
                href={businessData.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#1F8A70] hover:bg-[#17715B] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-[#63C7A5]/40"
              >
                <LuNavigation className="w-4 h-4 text-[#D8B77A] group-hover:rotate-45 transition-transform" />
                <span>Get Directions</span>
                <LuExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Visual Card */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-[#1F8A70]/40 bg-[#17211D] relative h-[380px] sm:h-[420px]">
              {/* Responsive Google Maps Iframe */}
                <iframe
                title="R K Waterproofing Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.683526978432!2d77.5348!3d12.9928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU5JzM0LjEiTiA3N8KwMzInMDUuMyJF!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>

              {/* Map Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-[#17211D]/95 p-3.5 px-4 rounded-2xl border border-[#1F8A70]/40 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#63C7A5] animate-ping"></span>
                  <span>Live Location • Basaveshwar Nagar</span>
                </div>
                <a
                  href={businessData.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#D8B77A] hover:underline"
                >
                  Open Map →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
