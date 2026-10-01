import React from 'react';
import { businessData } from '../data/businessData';
import { LuClock3, LuMapPin, LuPhone, LuStar } from 'react-icons/lu';

const BusinessInfo = () => {
  return (
    <section className="py-12 bg-[#F7F5EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-[#DDE5DF] p-6 md:p-8 max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#17211D] mb-6">Business Snapshot</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-[#EAF4EF] p-3 rounded-2xl text-[#1F8A70]">
                  <LuClock3 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#17211D]">Hours</h3>
                  <p className="text-[#1F8A70] font-semibold text-sm">{businessData.openingHours}</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-[#EAF4EF] p-3 rounded-2xl text-[#1F8A70]">
                  <LuPhone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#17211D]">Direct Phone</h3>
                  <a href={businessData.phoneLink} className="text-[#68736D] hover:text-[#12372A] font-semibold block text-sm">
                    {businessData.phone}
                  </a>
                </div>
              </div>

            </div>

            <div className="space-y-6">
              
              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-[#EAF4EF] p-3 rounded-2xl text-[#1F8A70]">
                  <LuMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-[#17211D]">Location</h3>
                  <p className="text-[#68736D] text-sm max-w-xs leading-relaxed">
                    {businessData.address.display}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="mt-1 bg-[#FFF8E7] p-3 rounded-2xl text-[#D8B77A]">
                  <LuStar className="w-5 h-5 fill-[#D8B77A]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#17211D]">Rating &amp; Feedback</h3>
                  <div className="flex items-center gap-2 text-[#68736D] text-sm">
                    <span className="font-extrabold text-[#17211D]">{businessData.rating} ★</span>
                    <span>({businessData.reviewCount} Reviews)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessInfo;
