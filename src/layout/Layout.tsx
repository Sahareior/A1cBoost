import { Button } from "../components/ui/button";
import { FooterSection } from "../screens/Desktop/sections/FooterSection/FooterSection";
import { DeviceCompatibilitySection } from "../screens/Desktop/sections/DeviceCompatibilitySection/DeviceCompatibilitySection";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Layout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="min-h-screen flex flex-col">
      {/* Background Blur Effect */}
      <div className="fixed top-[180px] left-1/2 -translate-x-1/2 lg:left-[849px] lg:translate-x-0 w-full max-w-[599px] h-[723px] rounded-[130px] blur-[225px] bg-blue-200/30 pointer-events-none z-0" />

      {/* Announcement Header */}
      <header className="relative z-10 flex h-auto min-h-[68px] items-center justify-center px-4 py-3 sm:px-6 sm:py-2.5 bg-[linear-gradient(315deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(149deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-transparent text-sm sm:text-base lg:text-xl text-center tracking-[-0.40px] leading-[1.3] sm:leading-[26px] px-2">
          <span className="text-white tracking-[-0.08px]">
            Clinical Strength Capsules & Daily Dose Gummies coming soon -{" "}
          </span>
          <span className="text-[#002642] font-bold tracking-[-0.08px]">
            Stay tuned to unlock 1 month of premium, with purchase.
          </span>
        </div>
      </header>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between h-20 lg:h-28 px-4 sm:px-8 lg:px-12 bg-[#002642] shadow-[0px_0px_12px_2px_#0092de4a] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
        {/* Logo */}
        <Link to='/' className="flex items-center">
          <img
            className="w-20 h-20 lg:w-32 lg:h-32 transition-transform hover:scale-105"
            alt="A1cBoost Logo"
            src="/logo.png"
          />
        </Link>

        {/* Desktop Navigation */}
        {!isHomePage && (
          <div className="hidden md:flex items-center">
            <Link 
              to="/"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        )}

        {/* Mobile Menu Button */}
        {!isHomePage && (
          <button 
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="relative z-20 md:hidden bg-[#002642] shadow-lg border-t border-white/10">
          <div className="px-4 py-4">
            <Link 
              to="/"
              className="block w-full text-center px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 mb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Back to Home
            </Link>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <DeviceCompatibilitySection />
      </div>

      {/* Floating Back to Home Button for Mobile */}
      {!isHomePage && (
        <div className="fixed bottom-6 right-6 z-50 md:hidden">
          <Link 
            to="/"
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Layout;