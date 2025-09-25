import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

const sectionData = [
  {
    id: "families",
    title: "Families",
    subtitle: "Stay Connected, Stay Supported",
    subtitleColor: "text-[#008ae2]",
    description:
      "With A1cBoost, families and caregivers can securely share real-time insights like blood sugar trends, meals, reminders, and activity — all in one app. Whether you're across the table or across the country, stay informed and support each other through every high and low.",
    image: "/kid-his-father-doing-sport-home-1.png",
    imageAlt: "Kid his father doing",
    imagePosition: "right",
    imageClasses: "w-[485px] h-[325px]",
  },
  {
    id: "adults",
    title: "Adults",
    subtitle: "Take Charge of Your Health",
    subtitleColor: "text-[#2ab29c]",
    description:
      "Whether you're managing diabetes, on a GLP-1, navigating PCOS or simply building better habits, A1cBoost gives you a personalized, empowering way to take control of your health. Track progress with the A1cBoost Score, get nudges from Booster Coach and see insights tailored to your metabolic journey — all synced with CGMs, fitness trackers and nutrition logs in one intelligent dashboard.",
    image: "/kid-his-father-doing-sport-home-1-1.png",
    imageAlt: "Kid his father doing",
    imagePosition: "left",
    imageClasses:
      "w-[485px] h-[325px] rounded-[15px] border-2 border-solid border-[#ffffff99] object-cover",
  },
  {
    id: "healthcare",
    title: "Healthcare Providers",
    subtitle: "Support Patients in Real Time",
    subtitleColor: "text-[#efae00]",
    description:
      "A1cBoost gives healthcare teams a unified view of patient progress — from habit trends to CGM data — all in one secure dashboard. Make faster decisions, personalize care plans, and empower patients with insights that motivate behavior change between visits.",
    image: "/kid-his-father-doing-sport-home-2.png",
    imageAlt: "Kid his father doing",
    imagePosition: "right",
    imageClasses:
      "rounded-[15px] border-2 border-solid border-[#ffffff99] object-cover w-[485px] h-[325px]",
  },
];

export const CallToActionSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#00947c1c] shadow-[0px_2px_20px_#00000040] py-[150px]">
      <div className="max-w-[1201px] mx-auto px-4">
        {sectionData.map((section, index) => (
          <div key={section.id} className="mb-[63px] last:mb-0">
            <Card className="border-none shadow-none bg-transparent">
              <CardContent className="p-0">
                <div
                  className={`flex items-center justify-center gap-[30px] ${section.imagePosition === "left" ? "gap-[84px]" : ""} ${section.id === "healthcare" ? "gap-[54px]" : ""}`}
                >
                  {section.imagePosition === "left" && (
                    <img
                      className={section.imageClasses}
                      alt={section.imageAlt}
                      src={section.image}
                    />
                  )}

                  <div
                    className={`flex flex-col items-start gap-[9px] ${section.id === "families" ? "w-[690px]" : "w-[666px]"}`}
                  >
                    <h2 className="mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#333333] text-[32px] tracking-[0] leading-[normal]">
                      {section.title}
                    </h2>

                    <h3
                      className={`[font-family:'Poppins',Helvetica] font-semibold text-4xl tracking-[0] leading-[normal] ${section.subtitleColor}`}
                    >
                      {section.subtitle}
                    </h3>

                    <p
                      className={`[font-family:'Poppins',Helvetica] font-normal text-black text-xl tracking-[0] leading-[normal] ${section.id === "adults" ? "w-[642px]" : ""}`}
                    >
                      {section.description}
                    </p>
                  </div>

                  {section.imagePosition === "right" && (
                    <img
                      className={section.imageClasses}
                      alt={section.imageAlt}
                      src={section.image}
                    />
                  )}
                </div>

              </CardContent>
            </Card>

            {index < sectionData.length - 1 && (
              <div className="mt-[75px]">
<Separator
  style={{
    backgroundImage: `linear-gradient(90deg, #D6EBF9 8.65%, #008AE2 52.88%, #00B5CA 72.36%, #FECB2C 82.09%, #D6EBF9 91.83%)`,
    height: "2px",
    border: "none", // remove default border if any
  }}
  className="w-full"
/>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
