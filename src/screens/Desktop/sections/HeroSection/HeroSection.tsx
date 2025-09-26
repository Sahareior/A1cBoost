import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const HeroSection = (): JSX.Element => {
  const featureCards = [
    {
      title: "A1cBoost Scoring System",
      description:
        "Gamified system that helps you track and understand A1c-related metrics over time. Reinforces healthy habits through visible progress.",
      iconSrc: "/frame-2147227120.svg",
      iconBg: null,
    },
    {
      title: "Booster Coach",
      description:
        "Your AI-powered, personalized metabolic companion — offering nudges, affirmations, and real-time suggestions.",
      iconSrc: null,
      iconBg: "bg-[#2ab29c]",
      additionalIcons: [
        {
          src: "/vector-1.svg",
          className: "absolute w-[7.44%] h-[22.12%] top-[28.76%] left-[3.57%]",
        },
        {
          src: "/vector.svg",
          className: "absolute w-[2.98%] h-[10.62%] top-[34.96%] left-[5.65%]",
        },
      ],
    },
    {
      title: "Health Journey Hub",
      description:
        "A personalized resource library tailored to your own metabolic responses and needs.",
      iconSrc: "/ix-health.svg",
      iconBg: "bg-[#34a853]",
    },
    {
      title: "Quick Meal Snap",
      description:
        "Take a photo of your meal and get an estimated carb and calorie breakdown in seconds.",
      iconSrc: "/simple-icons-quicktime.svg",
      iconBg: "bg-[#ea433580]",
    },
    {
      title: "Clinical-Grade Data Exports",
      description:
        "Easily share your progress with healthcare professionals using secure export tools.",
      iconSrc: "/typcn-export.svg",
      iconBg: "bg-[#008ae180]",
    },
    {
      title: "Medical App Integrations",
      description:
        "Connect your CGM and other trackers for seamless insights and pattern recognition.",
      iconSrc: "/pressure-gauge-11805184-1.svg",
      iconBg: "bg-[#7b4cff80]",
    },
  ];

  const renderCardContent = (card: any, index: number) => (
    <div className="relative w-full h-[113px]">
      {/* Icon Container */}
      <div className="absolute left-0 top-5 w-[50px] h-[50px] flex items-center justify-center">
        {card.iconBg && (
          <div className={`w-full h-full ${card.iconBg} rounded-[10px]`} />
        )}
        {card.iconSrc && !card.iconBg && (
          <img
            className="w-full h-full object-contain"
            alt="Feature icon"
            src={card.iconSrc}
          />
        )}
        {card.iconSrc && card.iconBg && (
          <img
            className="absolute w-6 h-6 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            alt="Feature icon"
            src={card.iconSrc}
          />
        )}
      </div>

      {/* Additional Icons */}
      {card.additionalIcons?.map((icon: any, iconIndex: number) => (
        <img
          key={iconIndex}
          className={icon.className}
          alt="Additional icon"
          src={icon.src}
        />
      ))}

      {/* Content */}
      <div className="ml-[72px]">
        <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#0e4269] text-xl tracking-[-0.40px] leading-[26px] mb-3">
          {card.title}
        </h3>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#0e4269] text-base tracking-[-0.32px] leading-[20.8px]">
          {card.description}
        </p>
      </div>
    </div>
  );

  return (
    <section id="features" className="w-full flex flex-col items-center py-[120px] px-8">
      {/* Header */}
      <div className="text-center mb-[80px] max-w-[800px]">
        <h2 className=" bg-[linear-gradient(123deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(246,198,67,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-5xl tracking-[-0.96px] leading-[62.4px] mb-4">
          What Makes A1cBoost Unique
        </h2>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#0e4269] text-lg tracking-[-0.36px] leading-[23.4px]">
          Discover the features that set A1cBoost apart in diabetes management
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featureCards.map((card, index) => (
            <Card
              key={index}
              className="flex flex-col w-full h-[280px] items-center justify-center bg-[#0091ff1a] rounded-[15px] border-[3px] border-solid border-[#f0f0f0] shadow-[0px_2px_2px_#00000026] hover:shadow-[0px_4px_8px_#00000033] transition-shadow duration-300"
            >
              <CardContent className="flex flex-col gap-2.5 px-6 py-8 w-full h-full justify-center">
                {renderCardContent(card, index)}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


    </section>
  );
};