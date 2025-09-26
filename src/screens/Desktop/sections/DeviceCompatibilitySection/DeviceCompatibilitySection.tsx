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

  const legalItems = [
    { label: "Terms of Service", path: "terms" },
    { label: "Privacy Policy", path: "policy" },
    { label: "Account Deletion", path: "/account-delete" },
    { label: "Help Center", path: "/help" },
  ];

  return (
    <footer
      className="w-full rounded-t-2xl overflow-hidden py-16 px-4 sm:px-6"
      style={{
        background:
          "linear-gradient(93.38deg, #007ECE 0%, #00B5CA 50%, #FECB2C 100%)",
      }}
    >
      <div className="w-full px-4 sm:px-10 md:px-28 mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        {/* Left Side - Logo + Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/logo.png"
            alt="A1cBoost Logo"
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-52 md:h-52 mb-4"
          />
          <p className="text-black text-base sm:text-lg font-medium">
            Smarter Habits.
            <br />Healthier Numbers.
          </p>
        </div>

        {/* Middle - Get the Apps */}
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          <Button className="px-6 sm:px-10 md:px-12 py-4 sm:py-6 md:py-8 rounded-full shadow-lg text-white text-base sm:text-lg md:text-xl font-semibold bg-[linear-gradient(130deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)] hover:opacity-90">
            Get the Apps
          </Button>
          <div className="flex gap-4">
            <img
              src="/frame-2147227110.svg"
              alt="Google Play"
              className="h-10 sm:h-12 cursor-pointer"
            />
          </div>
          <p className="text-xs sm:text-sm text-black max-w-sm text-center">
            A1cBoost is a general wellness app and is not intended to diagnose,
            treat, cure or prevent any disease.
          </p>
        </div>

        {/* Right Side - Resources & Legal */}
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 text-center sm:text-left">
          {/* Resources */}
          <div>
            <h4 className="relative bg-[#008ae175] text-white px-6 py-2 rounded-full font-semibold mb-3 text-center overflow-hidden group cursor-pointer transition-all duration-500">
              <span className="absolute inset-0 bg-[linear-gradient(93.9deg,#008AE2_3.04%,#00B5CA_51.32%,#FECB2C_99.9%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <span className="absolute inset-0 bg-[#008ae175] group-hover:opacity-0 transition-opacity duration-700"></span>
              <span className="relative z-10">Resources</span>
            </h4>
            <ul className="flex flex-col gap-1 text-black text-sm sm:text-base">
              {resourcesItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:underline cursor-pointer"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="relative bg-[#008ae175] text-white px-6 py-2 rounded-full font-semibold mb-3 text-center overflow-hidden group cursor-pointer transition-all duration-500">
              <span className="absolute inset-0 bg-[linear-gradient(93.9deg,#008AE2_3.04%,#00B5CA_51.32%,#FECB2C_99.9%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
              <span className="absolute inset-0 bg-[#008ae175] group-hover:opacity-0 transition-opacity duration-700"></span>
              <span className="relative z-10">Legal</span>
            </h4>
            <ul className="flex flex-col gap-1 text-black text-sm sm:text-base">
              {legalItems.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    className="hover:underline cursor-pointer"
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
      <div className="mt-8 text-center text-black pr-28 text-xs sm:text-sm">
        © A1cBoost. All rights reserved.
      </div>
    </footer>
  );
};
