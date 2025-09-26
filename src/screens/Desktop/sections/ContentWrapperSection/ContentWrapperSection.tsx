import React from "react";

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <section className=" flex justify-around  w-full   shadow-[0px_2px_20px_#00000040] " style={{
    
      backgroundImage: "linear-gradient(96.45deg, #0E4269 0%, #00B5CA 50%, #FECB2C 100%)"
    }}>
      <div className="flex flex-col px-6 items-start justify-center gap-[25px] py-24 top-[calc(50.00%_-_181px)] left-[122px]">
        <h2 className=" md:w-[790px] mt-[-1.00px] [text-shadow:0px_2px_2px_#00000040] [font-family:'Poppins',Helvetica] font-bold text-white text-4xl tracking-[-0.72px] leading-[46.8px]">
          Integrates with Apple Health, Google Fit, Smartwatches, and Leading
          Medical Devices
        </h2>


        <p className=" md:w-[742px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl tracking-[0] leading-[26px]">
          A1cBoost is an all-in-one health companion app that brings your
          wellness data together in one secure dashboard. Sync seamlessly with
          continuous glucose monitors (Dexcom, Libre and others), blood-pressure
          cuffs, smart scales, fitness trackers, insulin pens and pumps, sleep
          monitors and more. Track meals, medications, activity and blood sugar
          and receive personalized daily guidance — all tailored to your unique
          health profile and designed to help you monitor and understand
          A1c-related trends over time.
        </p>
      </div>

     <div className="md:flex hidden items-center -mt-16">
<div className="relative">
         <img
        className=" top-[69px] left-[867px] w-[127px] h-[269px]"
        alt="Smart band"
        src="/A1cBoost landing page/watch2.png"
      />
            <img
    className=" absolute top-[17rem] w-[120%] object-contain -mt-10"
    alt="Ellipse"
    src="/A1cBoost landing page/Ellipse 19.png"
  />
</div>


<div className="mt-52 relative">
        <img
        className="  relative  w-[140px] h-[196px]"
        alt="Realistic fitness"
        src="/A1cBoost landing page/watch.png"
      />
      <img
    className=" absolute top-48 w-[120%] object-contain -mt-10"
    alt="Ellipse"
    src="/A1cBoost landing page/Ellipse 19.png"
  />
</div>

      
<div className="flex relative flex-col items-center w-[229px]">
  <img
    className="w-[229px] relative h-[290px] object-contain"
    alt="Color calibration"
    src="/A1cBoost landing page/walkman.png"
  />
  <img
    className=" absolute top-56 object-contain -mt-10"
    alt="Ellipse"
    src="/A1cBoost landing page/Ellipse 16.png"
  />
</div>


     </div>
    </section>
  );
};
