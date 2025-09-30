import React from "react";
import { Button } from "../../../../components/ui/button";
import { Link } from "react-router-dom";

export const DeviceCompatibilitySection = (): JSX.Element => {
  const resourcesItems = [
    { label: "How it work", path: "/" },
    { label: "Demo Video", path: "/" },
    { label: "Subscriptions", path: "/" },
    { label: "Reviews", path: "/" },
  ];

  // asdadx
  
  const legalItems = [
    { label: "Terms of Service", path: "terms" },
    { label: "Privacy Policy", path: "policy" },
    { label: "Account Deletion", path: "/account-delete" },
    { label: "Help Center", path: "/help" },
  ];

  return (
    <footer
      className="w-full rounded-t-2xl overflow-hidden py-12 sm:py-16 lg:py-10 px-4 sm:px-6 lg:px-8"
      style={{
        background:
          "linear-gradient(93.38deg, #007ECE 0%, #00B5CA 50%, #FECB2C 100%)",
      }}
    >
      {/* Main Content Container */}
      <div className="max-w-[83rem] mx-auto flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-12 xl:gap-16">
        
        {/* Left Side - Logo + Text */}
        <div className="flex flex-col items-center -mt-7 lg:items-start text-center lg:text-left ">
          <img
            src="/logo.png"
            alt="A1cBoost Logo"
            className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 xl:w-52 xl:h-52"
          />
          <p className="text-black -mt-4 text-lg sm:text-xl text-center lg:text-2xl font-semibold leading-tight tracking-tight">
            Smarter Habits.
            <br />Healthier Numbers.
          </p>
        </div>

        {/* Middle - Get the Apps */}
        <div className="flex flex-col items-center space-y-6 sm:space-y-7 lg:space-y-8 max-w-md">
          <Button className="px-8 sm:px-12 lg:px-14 py-4 sm:py-5 lg:py-6 rounded-full shadow-lg text-white text-lg sm:text-xl lg:text-2xl font-semibold bg-[linear-gradient(130deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)] hover:opacity-90 transition-opacity duration-200">
                Start Free — Get My Plan
          </Button>
          
          <div className="flex justify-center gap-5 sm:gap-6">
            <img
              src="/frame-2147227110.svg"
              alt="Google Play"
              className="h-12 sm:h-14 lg:h-16 cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </div>
          
          <p className="text-xs sm:text-sm lg:text-base text-black text-center leading-relaxed px-2 sm:px-0">
            A1cBoost is a general wellness app and is not intended to diagnose,
            treat, cure or prevent any disease.
          </p>
        </div>

        {/* Right Side - Resources & Legal */}
        <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 lg:gap-16 xl:gap-20 text-center sm:text-left">
          
          {/* Resources */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="relative bg-[#008ae175] text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg overflow-hidden group cursor-pointer transition-all duration-500 max-w-fit mx-auto sm:mx-0">
              <span className="absolute inset-0 bg-[linear-gradient(93.9deg,#008AE2_3.04%,#00B5CA_51.32%,#FECB2C_99.9%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <span className="absolute inset-0 bg-[#008ae175] group-hover:opacity-0 transition-opacity duration-700"></span>
              <span className="relative z-10">Resources</span>
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-black text-base sm:text-lg">
              {resourcesItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:underline cursor-pointer transition-all duration-200 hover:text-gray-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4 sm:space-y-5">
            <h4 className="relative bg-[#008ae175] text-white px-6 py-3 rounded-full font-semibold text-base sm:text-lg overflow-hidden group cursor-pointer transition-all duration-500 max-w-fit mx-auto sm:mx-0">
              <span className="absolute inset-0 bg-[linear-gradient(93.9deg,#008AE2_3.04%,#00B5CA_51.32%,#FECB2C_99.9%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <span className="absolute inset-0 bg-[#008ae175] group-hover:opacity-0 transition-opacity duration-700"></span>
              <span className="relative z-10">Legal</span>
            </h4>
            <ul className="flex flex-col gap-2.5 sm:gap-3 text-black text-base sm:text-lg">
              {legalItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:underline cursor-pointer transition-all duration-200 hover:text-gray-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto mt-12 sm:mt-14 lg:mt-16 text-center text-black text-sm sm:text-base lg:text-lg font-medium pt-4 sm:pt-6 border-t border-white/20">
        © A1cBoost. All rights reserved.
      </div>
    </footer>
  );
};