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
    <div className="flex items-center justify-center gap-28 w-full px-[120px]">
      <img
        className="w-[353px] h-[703px] flex-shrink-0"
        alt="Element"
        src="/mobile2.png"
      />

      <div className="flex flex-col w-[687px] items-start gap-[25px]">
        {featuresData.map((feature, index) => (
          <Card
            key={index}
            className="w-full bg-white rounded-[15px] shadow-[0px_2px_2px_#00000040]"
          >
            <CardContent className="flex items-center gap-[50px] px-[76px] py-7 h-[169px]">
              <img
                className="w-20 h-20 flex-shrink-0"
                alt="Frame"
                src={feature.icon}
              />

              <div className="flex flex-col items-start gap-[15px] flex-1">
                <div className="[font-family:'Poppins',Helvetica] font-semibold text-[#0c517e] text-2xl tracking-[-0.48px] leading-[31.2px]">
                  {feature.title}
                </div>

                <div className="[font-family:'Poppins',Helvetica] font-normal text-black text-base tracking-[-0.32px] leading-[20.8px]">
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
