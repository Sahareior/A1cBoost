import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

const featuresData = [
  {
    icon: "/frame-2147227120-1.svg",
    title: "Personalize Engine",
    description:
      "Your 4-step Health Profile (choose your path, metrics, goals, preferences) ensures your plan is built specifically for you.",
  },
  {
    icon: "/frame-2147227121.svg",
    title: "Goal Paths",
    description:
      "Choose your focus: Lower A1c, Weight Management, Activity, or Learning. Your dashboard adapts to your selected goals.",
  },
  {
    icon: "/frame-2147227092.svg",
    title: "Achievements & Streaks",
    description:
      "Daily wins, streak tracking, and badges motivate you to maintain consistency. See how streaks boost adherence.",
  },
  {
    icon: "/frame-2147227093.svg",
    title: "Granular Reminders",
    description:
      "Custom reminders for testing, meds, meals, and activity— all toggles visible in one card. Set it once, stick to it.",
  },
];

export const FeaturesSection = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-44 w-full px-4 md:px-8 lg:px-[120px]">
      {/* Mobile Image - Hidden on desktop, shown on mobile */}
      <img
        className="w-[280px] h-[560px] lg:w-[353px] lg:h-[703px] flex-shrink-0 mb-8 lg:mb-0 lg:block"
        alt="Mobile app preview"
        src="/mobile2.png"
      />

      <div className="flex flex-col w-full lg:w-[687px] items-start gap-6 lg:gap-[25px]">
        {featuresData.map((feature, index) => (
          <Card
            key={index}
          className="w-full bg-white hover:scale-[1.01] transform transition-all duration-700 rounded-[15px] shadow-[0px_2px_2px_#00000040]"
          >
            <CardContent className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 lg:gap-[50px] px-4 sm:px-6 lg:px-[76px] py-6 sm:py-7 min-h-[140px] sm:h-[169px]">
              <img
                className="w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0"
                alt={feature.title}
                src={feature.icon}
              />

              <div className="flex flex-col items-start gap-3 lg:gap-[15px] flex-1 text-center sm:text-left">
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#0c517e] text-xl sm:text-2xl tracking-[-0.48px] leading-[28px] sm:leading-[31.2px]">
                  {feature.title}
                </div>

                <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-sm sm:text-base tracking-[-0.32px] leading-[18px] sm:leading-[20.8px]">
                  {feature.description}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};