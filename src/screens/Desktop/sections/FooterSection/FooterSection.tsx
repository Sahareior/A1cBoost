import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-10 px-4 md:px-8 lg:px-16 relative">
      <div className="flex flex-col items-center gap-10 w-full">
        {/* Heading */}
        <h2 className="w-full text-center bg-[linear-gradient(123deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(246,198,67,1)_100%)] [-webkit-background-clip:text] bg-clip-text text-transparent font-poppins font-bold 
          text-3xl sm:text-4xl lg:text-5xl leading-snug sm:leading-[46px] lg:leading-[62px] tracking-tight">
          Join A1cBoost Insider — Get Your Free Starter Plan        </h2>

        {/* Email + Button */}
        <div className="relative w-full max-w-[924px]">
          <div className="flex gap-3 md:gap-0 flex-col sm:flex-row rounded-[15px] overflow-hidden border-2 border-solid border-[#008ae2]">
            {/* Input */}
            <div className="flex-1">
              <Input
                placeholder="Enter your email"
                className="w-full h-14 sm:h-[91px] border-0 bg-transparent px-4 sm:pl-16 sm:pr-4 text-base sm:text-xl md:text-2xl font-medium font-poppins text-[#696969b2] placeholder:text-[#696969b2] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            {/* Button */}
            <Button className="relative flex w-full sm:w-[218px] h-12 sm:h-[91px] items-center justify-center gap-2.5 px-6 py-2.5 rounded-[10px] overflow-hidden border-0">
              {/* Gradient Layer */}
              <span className="absolute inset-0 bg-[linear-gradient(93.9deg,#008AE2_3.04%,#00B5CA_51.32%,#FECB2C_99.9%)]"></span>

              {/* Solid Color Overlay */}
              <span className="absolute inset-0 bg-[#008ae1] transition-opacity duration-700 hover:opacity-0"></span>

              {/* Text */}
              <span className="relative font-poppins font-semibold text-white text-sm sm:text-lg md:text-xl whitespace-nowrap z-10">
                Send Me My Plan
              </span>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer image */}
      <img
        className="w-full max-w-[600px] mt-8"
        alt="Frame"
        src="/frame-2147227110.svg"
      />
      <p className="text-[20px] font-semibold">Cancel anytime · No CGM required · Private by design</p>
    </section>
  );
};
