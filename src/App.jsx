import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import ScrollToTopButton from './components/ScrollToTopButton';

// Lazy-load pages so each route is a separate chunk — no upfront cost
const Home          = lazy(() => import('./pages/Home'));
const Services      = lazy(() => import('./pages/Services'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const About         = lazy(() => import('./pages/About'));
const Contact       = lazy(() => import('./pages/Contact'));
const Gallery       = lazy(() => import('./pages/Gallery'));

// Lightweight page loading skeleton
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="w-10 h-10 rounded-full border-4 border-[#DDE5DF] border-t-[#1F8A70] animate-spin"></div>
  </div>
);

// Scroll to top on route change — instant, no smooth scroll
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="font-sans antialiased text-[#17211D] bg-[#F7F5EF] pb-16 md:pb-0 flex flex-col min-h-screen selection:bg-[#1F8A70] selection:text-white">
        <Header />
        
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"               element={<Home />} />
              <Route path="/services"       element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />
              <Route path="/about"          element={<About />} />
              <Route path="/contact"        element={<Contact />} />
              <Route path="/gallery"        element={<Gallery />} />
            </Routes>
          </Suspense>
        </main>
        
        <Footer />
        <MobileActionBar />
        <ScrollToTopButton />
      </div>
    </Router>
  );
}

export default App;
