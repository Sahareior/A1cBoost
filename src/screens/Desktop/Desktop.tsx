import React, { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { CallToActionSection } from "./sections/CallToActionSection/CallToActionSection";
import { ContentWrapperSection } from "./sections/ContentWrapperSection/ContentWrapperSection";
import { DeviceCompatibilitySection } from "./sections/DeviceCompatibilitySection/DeviceCompatibilitySection";
import { FeaturesSection } from "./sections/FeaturesSection/FeaturesSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeroSection } from "./sections/HeroSection/HeroSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationSection } from "./sections/NavigationSection/NavigationSection";
import { SupportSection } from "./sections/SupportSection/SupportSection";
import { UniqueSellingPointsSection } from "./sections/UniqueSellingPointsSection/UniqueSellingPointsSection";
import { UserTestimonialsSection } from "./sections/UserTestimonialsSection/UserTestimonialsSection";
import { Link as ScrollLink } from "react-scroll";

const navigationItems = [
  { label: "Features", target: "features" },
  { label: "How it works", target: "how-it-works" },
  { label: "Premium", target: "premium" },
];

const diabetesTypes = [
  { label: " Build My Type 1 Plan — Start Free", type: 'Type 1' },
  { label: " Track & Improve My A1c — Start Free", type: 'Type 2' },
  { label: " Make My GLP-1 Work Smarter — Start Free", type: "GLP-1" },
  { label: " Boost My Metabolic Health — Start Free", type:'Wellness' },
];

export const Desktop = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [diabetis, setDiabetis] = useState("Build My Type 1 Plan");

  return (
    <div className="bg-[#fbfcfd] w-full relative overflow-x-hidden">
      {/* Animated Background Gradient - Responsive */}
      <div
        className="absolute top-[180px] md:right-48 w-[599px] h-[723px] rounded-[130px] blur-[225px] 
  bg-[linear-gradient(180deg,rgba(0,138,226,0.75)_0%,rgba(43,174,154,0.75)_50%,rgba(246,198,67,0.75)_100%)] 
  animate-slowpulse"
      />

      {/* Header Banner - Responsive */}
      <header className="flex h-[48px] md:h-[68px] items-center justify-center gap-2.5 px-4 md:px-6 py-2 bg-[linear-gradient(315deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(149deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-transparent text-sm md:text-xl text-center tracking-[-0.40px] leading-[20px] md:leading-[26px]">
          <span className="text-white tracking-[-0.08px]">
            Clinical Strength Capsules &amp; Daily Dose Gummies coming soon -{" "}
          </span>
          <span className="text-[#002642] tracking-[-0.08px] hidden sm:inline">
            Stay tuned to unlock 1 month of premium, with purchase.
          </span>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-[#002642] bg-opacity-95 flex flex-col items-center justify-start pt-20 gap-6 animate-slide-down">
          {navigationItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.target}
              smooth={true}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="text-white font-semibold text-xl py-2 px-6 rounded-xl hover:bg-[#008ae1] transition-colors cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}
          <button
            className="mt-4 w-[200px] h-12 rounded-[30px] bg-gradient-to-r from-[#008AE2] via-[#00B5CA] to-[#FECB2C] text-white font-semibold"
            onClick={() => setMobileMenuOpen(false)}
          >
            Get the Apps
          </button>
        </div>
      )}

      {/* Navigation - Responsive */}
      <nav className="flex items-center justify-between h-20 md:h-28 px-4 md:px-12 bg-[#002642] shadow-[0px_0px_12px_2px_#0092de4a] backdrop-blur-[6px]">
        {/* Logo */}
        <img
          className="w-20 h-20 md:w-32 md:h-32"
          alt="Logo round"
          src="/logo.png"
        />

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button
            variant="ghost"
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </Button>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden md:flex items-center gap-3">
          {navigationItems.map((item, index) => (
            <ScrollLink
              key={index}
              to={item.target}
              smooth={true}
              duration={500}
              className="flex items-center justify-center w-[141px] h-[40px] rounded-[30px] 
                 text-white font-poppins font-semibold text-base tracking-[-0.32px] leading-[20.8px] 
                 bg-[length:200%_100%] bg-left bg-[#008AE233]
                 hover:bg-gradient-to-r from-[#008AE2] via-[#00B5CA] to-[#FECB2C] 
                 hover:bg-right transition-all duration-700 ease-in-out 
                 relative overflow-hidden cursor-pointer"
            >
              {item.label}
            </ScrollLink>
          ))}

          <button
            className="w-[241px] h-10 rounded-[30px] 
                       bg-[linear-gradient(130deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)] 
                       text-white font-poppins font-semibold text-base tracking-[-0.32px] leading-[20.8px] 
                       hover:opacity-90 cursor-pointer"
            style={{ animation: "pulse-glow 2s infinite" }}
          >
            Get A1cBoost — Free to Start
          </button>
        </div>
      </nav>

      <main className="relative flex flex-col">
        {/* Hero Section - Responsive */}
        <section className="relative px-4 md:px-[160px] py-8 md:py-[80px] min-h-[500px] md:min-h-[700px] flex items-center">
          <div className="mx-auto w-full">
            <Badge className="flex w-full max-w-[511px] items-center justify-center gap-3 px-4 py-3 mb-6 md:mb-8 bg-[#1f9195] rounded-[25px] border border-solid border-[#0199da] text-white [font-family:'Poppins',Helvetica] font-semibold text-sm md:text-base tracking-[-0.32px] leading-[18px] md:leading-[20.8px] hover:bg-[#1f9195]">
              <img
                className="relative w-4 h-4 md:w-5 md:h-5"
                alt="Vector"
                src="/vector-2.svg"
              />
              Device Sync • Evidence-Informed • HIPAA-Aligned
            </Badge>

            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-16">
              <div className="flex-1 max-w-full lg:max-w-[750px]">
                <MainContentSection />

                <div className="flex flex-wrap items-center gap-3 mt-8 md:mt-10">
{diabetesTypes.map((type, index) => {

  // console.log(type.label.split(":")[0], 'this is log')

  return (
    <Button
      onClick={() => setDiabetis(type.label)}
      key={index}
      variant="secondary"
      className="relative overflow-hidden min-w-[120px] md:min-w-[141px] px-4 md:px-6 py-2 md:py-3 rounded-[30px] text-white [font-family:'Poppins',Helvetica] font-semibold text-sm md:text-base tracking-[-0.32px] leading-[18px] md:leading-[20.8px] transition-all duration-700 group"
    >
      <span className="absolute inset-0 bg-[linear-gradient(93.9deg,#008AE2_3.04%,#00B5CA_51.32%,#FECB2C_99.9%)]"></span>
      <span className="absolute inset-0 bg-[#0c517e] transition-opacity duration-700 group-hover:opacity-0"></span>
      <span className="relative z-10">{type.type}</span>
    </Button>
  );
})}


                  <button
                    className="w-full md:w-[calc(100%-160px)] h-[60px] md:h-[85px] md:text-[24px] text-[16px] mt-4 md:mt-6"
                    style={{
                      background: `linear-gradient(92.5deg, #0E4269 -15.55%, #00B5CA 42.24%, #FECB2C 100.03%),
                               linear-gradient(271.52deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)`,
                      color: "white",
                      padding: "12px 20px",

                      border: "none",
                      borderRadius: "10px",
                      fontWeight: "600",
                      cursor: "pointer",
                    }}
                  >
                    {diabetis}
                  </button>

                  <p className="font-bold text-center">
                    Takes ~2 minutes · No CGM required · HIPAA-aligned privacy
                  </p>
                </div>

                <div className="mt-8 md:mt-5">
                  <div className="[font-family:'Poppins',Helvetica] font-medium text-transparent text-sm md:text-base tracking-[-0.32px] leading-[18px] md:leading-[20.8px] mb-4 md:mb-5">
                    <span className="text-[#f6c643] tracking-[-0.05px] text-base md:text-lg">
                      ★★★★
                    </span>
                    <span className="text-black tracking-[-0.05px] ml-1 text-base md:text-lg">
                      ★ 4.8 from early customers
                    </span>
                  </div>

                  <Badge className="inline-flex w-full md:w-fit min-w-[200px] md:min-w-[222px] h-[34px] md:h-[38px] items-center justify-center gap-2.5 px-4 md:px-5 py-2 md:py-2.5 bg-[#2bae9a] rounded-[25px] border border-solid border-[#2aac99] text-white [font-family:'Poppins',Helvetica] font-medium text-sm md:text-base tracking-[-0.32px] leading-[18px] md:leading-[20.8px] hover:bg-[#2bae9a] transition-colors duration-200">
                    1,200 beta signups
                  </Badge>
                </div>
                <button className="bg-[#008AE2] mt-5 w-full md:w-fit min-w-[200px] md:min-w-[364px] rounded-md text-white px-8 py-3">
                  {" "}
                  Watch the 60-second demo
                </button>
              </div>

              <div className="flex-shrink-0 mt-8 lg:mt-0">
                <div className="relative w-[280px] h-[420px] md:w-[350px] md:h-[530px] lg:w-[420px] lg:h-[640px]">
                  <div className="relative w-full h-full overflow-hidden rounded-[24px] md:rounded-[32px] group">
                    <img
                      className="absolute w-[100%] h-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[24px] md:rounded-[32px] object-cover transition-transform duration-500 ease-in-out rotate-0 group-hover:rotate-[12deg]"
                      alt="Mobile App Preview"
                      src="/mobile.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section with Title - Responsive */}
        <section className="relative py-8 md:py-16 bg-[linear-gradient(135deg,rgba(0,138,226,0.22)_0%,rgba(24,105,98,0.22)_50%,rgba(254,203,44,0.22)_100%)] shadow-[0px_1px_20px_#00000026]">
          <div className="text-center mb-8 md:mb-16 px-4">
            <h2
              className="font-bold text-3xl md:text-5xl lg:text-6xl [font-family:'Poppins',Helvetica] bg-clip-text"
              style={{
                background:
                  "linear-gradient(77.67deg, #008AE2 0.33%, #00B5CA 49.84%, #F6C643 99.34%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Your Personal Metabolic Health Companion
            </h2>
            <p className="mt-4 [font-family:'Poppins',Helvetica] font-normal text-[#0e4269] text-base md:text-xl lg:text-2xl tracking-[-0.48px] leading-[24px] md:leading-[28px] lg:leading-[31.2px] max-w-full lg:max-w-[1144px] mx-auto">
              A1cBoost combines personalized tracking, insights and support to
              help you build sustainable habits.
            </p>
          </div>

          <FeaturesSection />
        </section>

        <section className="py-8 md:py-14">
          <HeroSection />
        </section>

        <div className="flex flex-col mb-16 justify-center items-center">
          <h2 className=" text-center bg-[linear-gradient(123deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(246,198,67,1)_100%)] text-3xl [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent md:text-5xl tracking-[-0.96px] md:leading-[62.4px] mb-4">
            Ready to experience these features for yourself?
          </h2>
          <button
            className="px-6 py-1 md:w-[633px] h-[85px]  text-white font-semibold rounded-[10px]"
            style={{
              background:
                "linear-gradient(272deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%), linear-gradient(92deg, #0E4269 -15.55%, #00B5CA 42.24%, #FECB2C 100.03%)",
              borderRadius: "10px",
            }}
          >
            Start Free — Get My Plan
          </button>
        </div>

        <ContentWrapperSection />

        {/* Navigation/Video Section */}
        <section className="py-8 md:py-16">
          <NavigationSection />
        </section>

        {/* Pricing Section */}
        <section className="py-8 md:py-16">
          <UniqueSellingPointsSection />
        </section>

        {/* User Testimonials Section - Responsive */}
        <section className="py-8 md:py-16 px-4 md:px-[120px]">
          <UserTestimonialsSection />
        </section>

        {/* Call to Action Section */}
        <CallToActionSection />

        {/* Support Section */}
        <section className="py-8 md:py-16">
          <SupportSection />
        </section>

        {/* Footer CTA Section - Responsive */}
        <section className="py-6 px-4 md:px-[120px] pb-8 md:pb-16">
          <FooterSection />
        </section>
      </main>

      <DeviceCompatibilitySection />
    </div>
  );
};
