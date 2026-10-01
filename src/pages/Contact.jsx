import React, { useState, useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { useSearchParams } from 'react-router-dom';
import { businessData } from '../data/businessData';
import Location from '../components/Location';
import contactImg from '../assets/contact.png';
import {
  LuPhone,
  LuMapPin,
  LuClock3,
  LuSend,
  LuShieldCheck,
  LuCircleCheck,
  LuUser,
  LuBriefcase,
  LuMessageSquare,
  LuTriangleAlert,
  LuMessageCircle,
  LuMail
} from 'react-icons/lu';

const Contact = () => {
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: searchParams.get('service') || '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const servicesList = [
    "Sump Waterproof Painting",
    "Tank Cleaning Services",
    "Terrace Waterproof Services",
    "Underground Rain Water",
    "Apartment Tank Cleaning",
    "School Water Tank Cleaning Service",
    "Leakage Sump Waterproof Services"
  ];

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    // Phone validation (accepts +91 9164416108 or 9164416108, spaces allowed)
    const phoneRegex = /^(\+91[\-\s]?)?[0-9\s]{10,}$/;
    const rawPhone = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    } else if (rawPhone.length < 10 || rawPhone.length > 12) {
      newErrors.phone = "Please enter a valid 10-digit phone number.";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your enquiry.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);

      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: '', phone: '', email: '', service: '', message: '' });
        } else {
          alert('Failed to send message. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const prefilledWhatsappUrl = `https://wa.me/919164416108?text=${encodeURIComponent("Hello, I would like to enquire about your waterproofing or tank cleaning services.")}`;

  return (
    <AnimatedPage className="bg-[#F7F5EF]">

      {/* Redesigned Compact & Professional Contact Hero Header Card */}
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
                <LuPhone className="w-3.5 h-3.5 text-[#0D7A5F]" />
                <span>GET IN TOUCH</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-[2.25rem] xl:text-[2.6rem] font-black tracking-tight leading-tight text-[#162921] mb-2.5 whitespace-normal lg:whitespace-nowrap">
                <span>CONTACT </span>
                <span className="text-[#0D7A5F]">US</span>
              </h1>

              {/* Description */}
              <p className="text-[#435C50] text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-xl mb-5">
                Let's talk about your waterproofing or tank cleaning requirement.
              </p>

              {/* 3 Compact Contact Feature Badges with Vertical Dividers */}
              <div className="flex flex-wrap items-center gap-y-3 gap-x-3 sm:gap-x-5">

                {/* Feature 1: Call Directly */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <LuPhone className="w-5 h-5 text-[#0D7A5F] fill-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>CALL</div>
                    <div>DIRECTLY</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-7 w-[1.5px] bg-[#C5DDD1]" />

                {/* Feature 2: WhatsApp Chat */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <LuMessageCircle className="w-5 h-5 text-[#0D7A5F] fill-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>WHATSAPP</div>
                    <div>CHAT WITH US</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden sm:block h-7 w-[1.5px] bg-[#C5DDD1]" />

                {/* Feature 3: Visit Location */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-[#DCEBE2]">
                    <LuMapPin className="w-5 h-5 text-[#0D7A5F] fill-[#0D7A5F]" />
                  </div>
                  <div className="text-[11px] sm:text-xs font-black text-[#162921] uppercase tracking-wide leading-tight">
                    <div>VISIT OUR</div>
                    <div>LOCATION</div>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side Image (using C:\Users\rvikk\Desktop\Rk water proof\src\assets\contact.png) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <img
                src={contactImg}
                alt="Contact R K Waterproofing Bengaluru"
                className="w-full h-auto max-h-[260px] sm:max-h-[300px] lg:max-h-[320px] object-contain drop-shadow-md rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

            {/* Left Column: Contact Information (45%) */}
            <div className="w-full lg:w-[45%] space-y-10">

              <div>
                <h2 className="text-3xl font-black text-[#17211D] mb-6">Reach Us Directly</h2>
                <div className="space-y-6">
                  {/* Info: Phone */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#12372A] text-[#D8B77A] shrink-0">
                      <LuPhone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#68736D] mb-1">Phone</h3>
                      <p className="text-lg font-black text-[#17211D]">91644 16108</p>
                    </div>
                  </div>

                  {/* Info: Hours */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#12372A] text-[#D8B77A] shrink-0">
                      <LuClock3 className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#68736D] mb-1">Opening Hours</h3>
                      <p className="text-lg font-black text-[#17211D]">Open 24 hours</p>
                    </div>
                  </div>

                  {/* Info: Address */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-[#12372A] text-[#D8B77A] shrink-0">
                      <LuMapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold uppercase tracking-wider text-[#68736D] mb-1">Address</h3>
                      <p className="text-base font-bold text-[#17211D] leading-relaxed">
                        A D Halli, 2nd Stage,<br />
                        KHB Colony,<br />
                        Basaveshwar Nagar,<br />
                        Bengaluru,<br />
                        Karnataka 560079
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact Actions */}
              <div className="pt-6 border-t border-[#DDE5DF]">
                <h3 className="text-sm font-extrabold uppercase tracking-wider text-[#17211D] mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <a
                    href="tel:+919164416108"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-[#DDE5DF] shadow-sm hover:shadow-md hover:border-[#1F8A70]/40 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#EAF4EF] text-[#1F8A70] group-hover:bg-[#1F8A70] group-hover:text-white transition-colors">
                        <LuPhone className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-[#17211D]">CALL NOW</span>
                    </div>
                    <span className="text-sm font-bold text-[#68736D] group-hover:text-[#1F8A70] transition-colors">91644 16108</span>
                  </a>

                  <a
                    href={prefilledWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-[#DDE5DF] shadow-sm hover:shadow-md hover:border-[#1F8A70]/40 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#EAF4EF] text-[#1F8A70] group-hover:bg-[#1F8A70] group-hover:text-white transition-colors">
                        <LuMessageCircle className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-[#17211D]">WHATSAPP</span>
                    </div>
                    <span className="text-sm font-bold text-[#68736D] group-hover:text-[#1F8A70] transition-colors">Chat with us</span>
                  </a>

                  <a
                    href={businessData.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between p-4 rounded-2xl bg-white border border-[#DDE5DF] shadow-sm hover:shadow-md hover:border-[#1F8A70]/40 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl bg-[#EAF4EF] text-[#1F8A70] group-hover:bg-[#1F8A70] group-hover:text-white transition-colors">
                        <LuMapPin className="w-5 h-5" />
                      </div>
                      <span className="font-bold text-[#17211D]">GET DIRECTIONS</span>
                    </div>
                    <span className="text-sm font-bold text-[#68736D] group-hover:text-[#1F8A70] transition-colors">Bengaluru</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Enquiry Form (55%) */}
            <div className="w-full lg:w-[55%]">
              <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#DDE5DF] shadow-xl relative">

                <div className="flex items-center gap-2 mb-2 text-[#1F8A70] text-xs font-bold uppercase tracking-widest">
                  <LuShieldCheck className="w-4 h-4 text-[#D8B77A]" />
                  <span>ONLINE ENQUIRY FORM</span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-black text-[#17211D] mb-6">
                  Send Us A Message
                </h2>

                {submitted && (
                  <div className="mb-6 p-4 rounded-2xl bg-[#EAF4EF] border border-[#1F8A70]/40 text-[#12372A] flex items-start sm:items-center gap-3 animate-fadeIn">
                    <LuCircleCheck className="w-6 h-6 text-[#1F8A70] shrink-0 mt-0.5 sm:mt-0" />
                    <p className="text-sm font-bold">Thank you! Your enquiry has been submitted successfully. Our team will contact you shortly.</p>
                  </div>
                )}

                <form className="space-y-5" onSubmit={handleSubmit} noValidate>

                  {/* Full Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-[#17211D] mb-1.5">
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <LuUser className={`w-5 h-5 ${errors.name ? 'text-red-400' : 'text-[#68736D]'}`} />
                      </div>
                      <input
                        id="name"
                        type="text"
                        placeholder="e.g. Rajesh Kumar"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border bg-[#F7F5EF] text-[#17211D] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F8A70]/30 transition-all duration-200 ${errors.name ? 'border-red-400 focus:border-red-500' : 'border-[#DDE5DF] focus:border-[#1F8A70]'}`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-xs font-bold text-red-500 flex items-center gap-1"><LuTriangleAlert className="w-3.5 h-3.5" /> {errors.name}</p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#17211D] mb-1.5">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <LuPhone className={`w-5 h-5 ${errors.phone ? 'text-red-400' : 'text-[#68736D]'}`} />
                      </div>
                      <input
                        id="phone"
                        type="tel"
                        placeholder="e.g. 91644 16108"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border bg-[#F7F5EF] text-[#17211D] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F8A70]/30 transition-all duration-200 ${errors.phone ? 'border-red-400 focus:border-red-500' : 'border-[#DDE5DF] focus:border-[#1F8A70]'}`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs font-bold text-red-500 flex items-center gap-1"><LuTriangleAlert className="w-3.5 h-3.5" /> {errors.phone}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#17211D] mb-1.5">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <LuMail className={`w-5 h-5 ${errors.email ? 'text-red-400' : 'text-[#68736D]'}`} />
                      </div>
                      <input
                        id="email"
                        type="email"
                        placeholder="e.g. rajesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border bg-[#F7F5EF] text-[#17211D] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F8A70]/30 transition-all duration-200 ${errors.email ? 'border-red-400 focus:border-red-500' : 'border-[#DDE5DF] focus:border-[#1F8A70]'}`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs font-bold text-red-500 flex items-center gap-1"><LuTriangleAlert className="w-3.5 h-3.5" /> {errors.email}</p>
                    )}
                  </div>

                  {/* Service Required */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-[#17211D] mb-1.5">
                      Service Required
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <LuBriefcase className={`w-5 h-5 ${errors.service ? 'text-red-400' : 'text-[#68736D]'}`} />
                      </div>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border bg-[#F7F5EF] text-[#17211D] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F8A70]/30 transition-all duration-200 appearance-none ${errors.service ? 'border-red-400 focus:border-red-500' : 'border-[#DDE5DF] focus:border-[#1F8A70]'}`}
                      >
                        <option value="">Select a service</option>
                        {servicesList.map((s, i) => (
                          <option key={i} value={s}>{s}</option>
                        ))}
                      </select>
                      {/* Custom Arrow */}
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
                        <svg className="w-4 h-4 text-[#68736D]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p className="mt-1.5 text-xs font-bold text-red-500 flex items-center gap-1"><LuTriangleAlert className="w-3.5 h-3.5" /> {errors.service}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#17211D] mb-1.5">
                      Message
                    </label>
                    <div className="relative">
                      <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none">
                        <LuMessageSquare className={`w-5 h-5 ${errors.message ? 'text-red-400' : 'text-[#68736D]'}`} />
                      </div>
                      <textarea
                        id="message"
                        rows="4"
                        placeholder="Describe your requirement..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className={`w-full pl-11 pr-4 py-3.5 rounded-2xl border bg-[#F7F5EF] text-[#17211D] font-medium focus:outline-none focus:ring-2 focus:ring-[#1F8A70]/30 transition-all duration-200 resize-none ${errors.message ? 'border-red-400 focus:border-red-500' : 'border-[#DDE5DF] focus:border-[#1F8A70]'}`}
                      ></textarea>
                    </div>
                    {errors.message && (
                      <p className="mt-1.5 text-xs font-bold text-red-500 flex items-center gap-1"><LuTriangleAlert className="w-3.5 h-3.5" /> {errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-extrabold text-base shadow-lg transition-all duration-300 border ${isSubmitting
                        ? 'bg-[#68736D] text-white border-transparent cursor-not-allowed'
                        : 'bg-[#12372A] hover:bg-[#1F8A70] text-white hover:-translate-y-0.5 border-[#1F8A70]/40 hover:shadow-xl'
                      }`}
                  >
                    {!isSubmitting && <LuSend className="w-5 h-5 text-[#D8B77A]" />}
                    <span>{isSubmitting ? 'Sending Enquiry...' : 'SEND ENQUIRY →'}</span>
                  </button>
                </form>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Map Section */}
      <Location />
    </AnimatedPage>
  );
};

export default Contact;
