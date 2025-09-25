import React from "react";

export const MainContentSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-start gap-[5px]">
      <h1 className="relative self-stretch [text-shadow:0px_2px_2px_#00203780] [font-family:'Poppins',Helvetica] font-semibold text-[#0c517e] text-6xl tracking-[-1.20px] leading-[78px]">
        Smarter Habits.

      </h1>

<h2
  className="font-bold text-6xl leading-[78px] tracking-[-1.2px] bg-clip-text text-transparent [font-family:'Poppins',Helvetica] "
  style={{
    background: "linear-gradient(90.71deg, #008AE2 -1%, #00B5CA 21.28%, #FECB2C 43.56%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  
  Healthier Numbers.
</h2>


      <p className="relative max-w-[605px] [font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[-0.40px] leading-[26px]">
        Build and sustain healthy habits through a gamified scoring system,
        AI-powered coaching and CGM integration — designed to help you track and
        understand your A1c trends over time.
      </p>
    </div>
  );
};
