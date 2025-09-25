import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-[45px] relative">
      <div className="flex flex-col items-center gap-[45px] relative w-full">
        <h2 className="relative w-full mt-[-1.00px]  bg-[linear-gradient(123deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(246,198,67,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-5xl text-center tracking-[-0.96px] leading-[62.4px]">
          Take Control Today
        </h2>

        <div className="relative w-full max-w-[924px] h-[91px]">
          <div className="w-full flex rounded-[15px] overflow-hidden border-2 border-solid border-[#008ae2] h-[91px]">
            <div className="flex-1 relative">
              <Input
                placeholder="Enter your email"
                className="w-full h-[91px] border-0 bg-transparent pl-[65px] pt-[30px] pb-[30px] [font-family:'Poppins',Helvetica] font-medium text-[#696969b2] text-2xl tracking-[-0.48px] leading-[31.2px] placeholder:text-[#696969b2] focus-visible:ring-0 focus-visible:ring-offset-0"
              />
            </div>

            <Button className="flex w-[218px] h-[91px] items-center gap-2.5 pl-6 pr-0 py-2.5 bg-[#008ae1] hover:bg-[#007acc] rounded-[10px] overflow-hidden border-0 h-auto">
              <span className="relative w-fit [font-family:'Poppins',Helvetica] font-semibold text-white text-xl tracking-[-0.40px] leading-[26px] whitespace-nowrap">
                Get Early Access
              </span>
            </Button>
          </div>
        </div>
      </div>

      <img
        className="relative flex-[0_0_auto]"
        alt="Frame"
        src="/frame-2147227110.svg"
      />
    </section>
  );
};
