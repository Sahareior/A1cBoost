import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";

export const UserTestimonialsSection = (): JSX.Element => {
  const [showFullText, setShowFullText] = useState(false);

  const testimonialText = `
    I was healthy my whole life — until I wasn't. In March 2007, at 21, I walked into a doctor's office exhausted and 40 pounds lighter. When they checked my blood sugar, the meter simply read "HIGH." One shot of insulin later, I had a diagnosis: Type 1 diabetes and an A1c of 18. The doctor called it "off the charts," and that moment has stuck with me ever since. Walking out with nothing but insulin and syringes, one thought kept looping in my head: What am I supposed to do now?

    Everyday tasks had become so difficult I sometimes had to pull myself up the stairs using the railing, and I'd already undergone cataract surgery — my eye doctor said I was the youngest patient he'd ever performed it on. Finally I knew the cause. But aside from a prescription for insulin and syringes, I had no roadmap, no guidance, and no idea how to manage the disease on my own.

    I'm not a quitter. I learned through trial and error: multiple daily injections, countless finger pricks, and eventually an insulin pump that gave me some peace of mind. Nearly 20 years later I've experienced the highs, lows, and burnout that come with chronic disease. Diabetes doesn't pause for the rest of life.

    I built A1cBoost because I wanted something I couldn't find: a supportive, tech-driven way to bring my health world together and make small wins visible.

    Track & Understand: A gamified scoring system to follow A1c-related trends and reinforce healthy habits.
    Get Coaching: An AI-powered Booster Coach offering real-time nudges and encouragement.
    Learn & Grow: A Health Journey Hub with personalized resources tailored to your path.
    Make It Easy: Quick Meal Snap to estimate carbs and calories from a photo.
    Stay Connected: Secure data exports to share with your healthcare team and seamless integrations with CGMs, fitness trackers, insulin pens and other devices — all in one dashboard.
    
    Because no one's metabolic journey is the same — just like a fingerprint.

    Progress beats perfection. Tiny actions compound into meaningful change.

    If you've ever felt overwhelmed by "do more, try harder," I built A1cBoost for you.
  `;

  const previewText =
    testimonialText.split(" ").slice(0, 100).join(" ") + "...";

  return (
    <section className="w-full relative px-4 sm:px-6 lg:px-12">
      <Card className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-[75px] bg-[#c0e6ff] rounded-[15px] border-[3px] border-white shadow-[0px_2px_20px_#00000040] p-6 sm:p-8 lg:p-12">
        <CardContent className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-[75px] p-0 w-full">
          {/* Image */}
          <img
            className="w-full max-w-[280px] sm:max-w-[308px] h-auto rounded-[15px] object-cover flex-shrink-0"
            alt="Rectangle"
            src="/rectangle-53.png"
          />

          {/* Text Section */}
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-2">
              <h2 className="font-poppins font-bold text-[#008ae1] text-2xl sm:text-[32px] tracking-[-0.64px] leading-snug [text-shadow:0px_2px_2px_#00000040]">
                From Our Founder
              </h2>

              <p className="italic font-normal text-[#008ae1] text-base">
                &#34;Progress beats perfection.&#34;
              </p>
            </div>

            {/* Scrollable Text */}
            <ScrollArea className="w-full h-[200px] sm:h-[244px]">
              <div className="font-poppins text-black text-base sm:text-[22px] leading-relaxed">
                {showFullText ? testimonialText : previewText}
              </div>
            </ScrollArea>

            {/* See More / See Less */}
            <button
              onClick={() => setShowFullText(!showFullText)}
              className="font-poppins font-semibold text-[#008ae1] text-lg sm:text-xl text-left bg-transparent border-none cursor-pointer pt-2"
            >
              {showFullText ? "See Less" : "See More"}
            </button>

            {/* Button */}
            <Button className="w-full sm:w-[461px] h-[50px] sm:h-[57px] rounded-[10px] shadow-[0px_2px_20px_#00000040] bg-[linear-gradient(315deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(149deg,rgba(14,66,105,1)_0%,rgba(0,181,202,1)_50%,rgba(254,203,44,1)_100%)] hover:opacity-90 transition-opacity">
              <span className="font-poppins font-semibold text-white text-lg sm:text-2xl text-center">
                Get Early Access
              </span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
