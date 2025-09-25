import React from "react";
import { Button } from "../../../../components/ui/button";

export const DeviceCompatibilitySection = (): JSX.Element => {
  const resourcesItems = ["How it work", "Demo Video", "Subscriptions", "Reviews"];
  const legalItems = ["Terms of Service", "Privacy Policy", "Account Deletion", "Help Center"];

  return (
    <footer className="w-full rounded-t-2xl overflow-hidden  py-10 px-6"
    style={{
      background: 'linear-gradient(93.38deg, #007ECE 0%, #00B5CA 50%, #FECB2C 100%)'

    }}
    >
      <div className="w-full px-28 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Left Side - Logo + Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src="/logo.png"
            alt="A1cBoost Logo"
            className="w-52 h-52 mb-4"
          />
          <p className="text-black text-lg font-medium">Smarter Habits.<br />Healthier Numbers.</p>
        </div>

        {/* Middle - Get the Apps */}
        <div className="flex flex-col items-center gap-8">
          <Button className="px-12 py-8 rounded-full shadow-lg text-white text-xl font-semibold bg-[linear-gradient(130deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)] hover:opacity-90">
            Get the Apps
          </Button>
          <div className="flex gap-4">
            <img  src="/frame-2147227110.svg" alt="Google Play" className="h-12 cursor-pointer" />
          
          </div>
          <p className="text-sm text-black max-w-md text-center">
            A1cBoost is a general wellness app and is not intended to diagnose, treat, cure or prevent any disease.
          </p>


        </div>

        {/* Right Side - Resources & Legal */}
        <div className="flex gap-12">
          <div>
            <h4 className="bg-[#008ae175] text-white px-6 py-2 rounded-full font-semibold mb-3 text-center">Resources</h4>
            <ul className="flex flex-col gap-1 text-black text-base">
              {resourcesItems.map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="bg-[#008ae175] text-white px-6 py-2 rounded-full font-semibold mb-3 text-center">Legal</h4>
            <ul className="flex flex-col gap-1 text-black text-base">
              {legalItems.map((item, i) => (
                <li key={i} className="hover:underline cursor-pointer">{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
                <div className="mt-8 mr-20 text-center text-black text-sm">
        © A1cBoost. All rights reserved.
      </div>
    </footer>
  );
};
