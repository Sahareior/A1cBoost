import React from "react";
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

const navigationItems = [
  { label: "Features", active: true },
  { label: "How it works", active: false },
  { label: "Premium", active: false },
];

const diabetesTypes = [
  { label: "Type 1" },
  { label: "Type 2" },
  { label: "GLP-1" },
  { label: "Wellness" },
];

export const Desktop = (): JSX.Element => {
  return (
    <div className="bg-[#fbfcfd] w-full  relative">
      <div className="absolute top-[180px] left-[849px] w-[599px] h-[723px] rounded-[130px] blur-[225px] bg-[linear-gradient(180deg,rgba(0,138,226,0.75)_0%,rgba(43,174,154,0.75)_50%,rgba(246,198,67,0.75)_100%)]" />

      <header className="flex  h-[68px] items-center justify-center gap-2.5 px-6 py-2.5 bg-[linear-gradient(315deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(149deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)]">
        <div className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-transparent text-xl text-center tracking-[-0.40px] leading-[26px] whitespace-nowrap">
          <span className="text-white tracking-[-0.08px]">
            Clinical Strength Capsules &amp; Daily Dose Gummies coming soon -{" "}
          </span>
          <span className="text-[#002642] tracking-[-0.08px]">
            Stay tuned to unlock 1 month of premium, with purchase.
          </span>
        </div>
      </header>

<nav className="flex items-center justify-between h-28 px-12 bg-[#002642] shadow-[0px_0px_12px_2px_#0092de4a] backdrop-blur-[6px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6px)_brightness(100%)]">
  {/* Logo */}
  <img
    className="w-32 h-32"
    alt="Logo round"
    src="/logo.png"
  />

  {/* Navigation Items */}
  <div className="flex items-center gap-3">
    {navigationItems.map((item, index) => (
      <Button
        key={index}
        variant="ghost"
        className="w-[141px] h-[40px] bg-[#008ae133] rounded-[30px] text-white font-poppins font-semibold text-base tracking-[-0.32px] leading-[20.8px] hover:bg-[#008ae150]"
      >
        {item.label}
      </Button>
    ))}
      <Button className="w-[141px] h-10 rounded-[30px] bg-[linear-gradient(130deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)] text-white font-poppins font-semibold text-base tracking-[-0.32px] leading-[20.8px] hover:opacity-90">
    Get the Apps
  </Button>
  </div>

  {/* Call-to-Action Button */}

</nav>


      <main className="relative flex flex-col">
        {/* Hero Section */}
<section className="relative px-[120px] py-[80px] min-h-[700px] flex items-center">
  <div className=" mx-auto w-full">
    <Badge className="flex w-fit max-w-[511px] items-center justify-center gap-3 px-4 py-3 mb-8 bg-[#1f9195] rounded-[25px] border border-solid border-[#0199da] text-white [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[-0.32px] leading-[20.8px] hover:bg-[#1f9195]">
      <img className="relative w-5 h-5" alt="Vector" src="/vector-2.svg" />
      Device Sync • Evidence-Informed • HIPAA-Aligned
    </Badge>

    <div className="flex items-center justify-between gap-16">
      <div className="flex-1 max-w-[650px]">
        <MainContentSection />
        
        <div className="flex items-center gap-3 mt-10 overflow-hidden flex-wrap">
          {diabetesTypes.map((type, index) => (
            <Button
              key={index}
              variant="secondary"
              className="min-w-[141px] px-6 py-3 bg-[#0c517e] rounded-[30px] text-white [font-family:'Poppins',Helvetica] font-semibold text-base tracking-[-0.32px] leading-[20.8px] hover:bg-[#0c517e]/90 transition-colors duration-200"
            >
              {type.label}
            </Button>
          ))}

<button
  className="w-[calc(100%-60px)] h-[85px] mt-6"
  style={{
    background: `linear-gradient(92.5deg, #0E4269 -15.55%, #00B5CA 42.24%, #FECB2C 100.03%),
                 linear-gradient(271.52deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0) 100%)`,
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
  }}
>
  GET EARLY ACCESS
</button>

        </div>




        <div className="mt-10">
          <div className="[font-family:'Poppins',Helvetica] font-medium text-transparent text-base tracking-[-0.32px] leading-[20.8px] whitespace-nowrap mb-5">
            <span className="text-[#f6c643] tracking-[-0.05px] text-lg">★★★★</span>
            <span className="text-black tracking-[-0.05px] ml-1 text-lg">
              ★ 4.8 from early customers
            </span>
          </div>

          <Badge className="inline-flex w-fit min-w-[222px] h-[38px] items-center justify-center gap-2.5 px-5 py-2.5 bg-[#2bae9a] rounded-[25px] border border-solid border-[#2aac99] text-white [font-family:'Poppins',Helvetica] font-medium text-base tracking-[-0.32px] leading-[20.8px] hover:bg-[#2bae9a] transition-colors duration-200">
            1,200 beta signups
          </Badge>
        </div>
      </div>

      <div className="flex-shrink-0">
        <div className="relative w-[420px] h-[640px]">
          {/* <div className="absolute inset-0  rounded-[40px] "></div> */}
<div className="relative w-full h-full overflow-hidden rounded-[32px] group">
<div className="relative w-full h-full overflow-hidden rounded-[32px] group">
  <img
    className="absolute w-[100%] h-[100%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-[32px] object-cover transition-transform duration-500 ease-in-out rotate-0 group-hover:rotate-[10deg]"
    alt="Mobile App Preview"
    src="/mobile.png"
  />
</div>

</div>


        </div>
      </div>
    </div>
  </div>
</section>

        {/* Content Wrapper Section */}
      

        {/* Features Section with Title */}
        <section className="relative py-16 bg-[linear-gradient(135deg,rgba(0,138,226,0.22)_0%,rgba(24,105,98,0.22)_50%,rgba(254,203,44,0.22)_100%)] shadow-[0px_1px_20px_#00000026]">
          <div className="text-center mb-16">
<h2
  className="font-bold text-6xl leading-[78px] tracking-[-1.2px] [font-family:'Poppins',Helvetica] bg-clip-text"
  style={{
    background: "linear-gradient(77.67deg, #008AE2 0.33%, #00B5CA 49.84%, #F6C643 99.34%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent" // fallback for non-WebKit browsers
  }}
>
  Your Personal Metabolic Health Companion
</h2>

            <p className="mt-4 [font-family:'Poppins',Helvetica] font-normal text-[#0e4269] text-2xl tracking-[-0.48px] leading-[31.2px] max-w-[1144px] mx-auto">
              A1cBoost combines personalized tracking, insights and support to help
              you build sustainable habits.
            </p>
          </div>
          
          <FeaturesSection />
        </section>

                <section className="py-16">
          <HeroSection />
        </section>
  <ContentWrapperSection />
        {/* Hero Features Section */}


        {/* Navigation/Video Section */}
        <section className="py-16">
          <NavigationSection />
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <UniqueSellingPointsSection />
        </section>
     {/* User Testimonials Section */}
                <section className="py-16 px-[120px]">
          <UserTestimonialsSection />
        </section>

        {/* Call to Action Section */}
        <CallToActionSection />
        {/* Support Section */}
        <section className="py-16">
          <SupportSection />
        </section>


   


        {/* Footer CTA Section */}
        <section className="py-6 px-[120px] pb-16">    
          <FooterSection />
        </section>
      </main>

      <DeviceCompatibilitySection />
    </div>
  );
};
