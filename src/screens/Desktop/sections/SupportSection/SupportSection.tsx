import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Pause, Star } from "lucide-react";
import { CgQuote } from "react-icons/cg";

export const SupportSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);

  const successStories = [
    {
      id: 1,
      name: "Kenneth D",
      condition: "Living with Type 2 Diabetes",
      quote:
        '"I\'ve had Type 2 for over a decade, but this was the first time I actually felt in control. My A1cBoost Score gave me something I could change every day — and my numbers followed."',
      rating: "★★★★★",
      profileImage: "/ellipse-15.png",
      background: "/rectangle-76-copy.svg",
    },
    {
      id: 2,
      name: "Sarah M",
      condition: "Living with Type 1 Diabetes",
      quote:
        '"The Booster Coach feature has been a game-changer for my daily management. Real-time suggestions make all the difference in maintaining stable levels."',
      rating: "★★★★★",
      profileImage: "/ellipse-14.png",
      background: "/rectangle-76-copy.svg",
    },
    {
      id: 3,
      name: "James R",
      condition: "Pre-diabetic",
      quote:
        '"A1cBoost helped me reverse my pre-diabetes diagnosis. The gamified scoring system kept me motivated throughout my journey."',
      rating: "★★★★☆",
      profileImage: "/ellipse-11.png",
      background: "/rectangle-76-copy.svg",
    },
    {
      id: 4,
      name: "Maria L",
      condition: "Living with Type 2 Diabetes",
      quote:
        '"Quick Meal Snap saved me so much time tracking carbs. The AI estimates are surprisingly accurate and make logging effortless."',
      rating: "★★★★★",
      profileImage: "/ellipse-12.png",
      background: "/rectangle-76-copy.svg",
    },
    {
      id: 5,
      name: "Maria L",
      condition: "Living with Type 2 Diabetes",
      quote:
        '"Quick Meal Snap saved me so much time tracking carbs. The AI estimates are surprisingly accurate and make logging effortless."',
      rating: "★★★★★",
      profileImage: "/ellipse-12.png",
      background: "/rectangle-76-copy.svg",
    },
  ];

  const handleImageClick = (index: number) => {
    setActiveIndex(index);
  };

  // Function to render stars based on rating
  const renderStars = (rating: string) => {
    const starCount = rating.length;
    return (
      <div className=" flex w-32 rounded-xl gap-1 items-center   text-yellow-300 px-4">
        {Array.from({ length: starCount }).map((_, index) => (
          <Star key={index} size={22} />
        ))}
      </div>
    );
  };

  // Get the currently active story
  const activeStory = successStories[activeIndex];

  return (
    <section className="w-full flex flex-col items-center py-16 px-4">
      {/* Heading */}
      <h2 className="max-w-[371px] text-center font-bold text-5xl leading-[62px] bg-gradient-to-r from-[#008ae2] via-[#00b5ca] to-[#f6c643] bg-clip-text text-transparent drop-shadow-md">
        Success Stories
      </h2>

      <p className="mt-4 text-center text-2xl text-[#000000d4]">
        Trusted by People Like You
      </p>

      <div
        className="w-full max-w-[1501px] rounded-3xl mt-12"
        style={{
          background:
            "linear-gradient(98.89deg, #008AE2 0%, #00B5CA 50%, #FECB2C 100%)",
        }}
      >
        <div className="flex gap-14 items-center">
          {/* Left Side - Profile Images */}
<div className="w-[46%] space-y-3 mt-9 p-24 px-44">
  <div className="flex justify-between">
    {successStories.slice(0, 2).map((story, index) => (
      <img
        key={story.id}
        className={`rounded-full h-24 w-24 cursor-pointer transition-all duration-300 ${
          activeIndex === index ? "ring-4 ring-white scale-111" : "opacity-80"
        } ${story.id % 2 === 0 ? "-mt-6" : ""}`}
        src={story.profileImage}
        alt={story.name}
        onClick={() => handleImageClick(index)}
      />
    ))}
  </div>

  <div className="flex justify-center">
    <img
      className={`rounded-full h-24 w-24 cursor-pointer transition-all duration-300 ${
        activeIndex === 2 ? "ring-4 ring-white scale-110" : "opacity-80"
      } ${successStories[2].id % 2 === 0 ? "-mt-4" : ""}`}
      src={successStories[2].profileImage}
      alt={successStories[2].name}
      onClick={() => handleImageClick(2)}
    />
  </div>

  <div className="flex justify-between">
    {successStories.slice(3).map((story, index) => (
      <img
        key={story.id}
        className={`rounded-full h-24 w-24 cursor-pointer transition-all duration-300 ${
          activeIndex === index + 3 ? "ring-4 ring-white scale-110" : "opacity-80"
        } ${story.id % 2 !== 0 ? "-mt-4" : ""}`}
        src={story.profileImage}
        alt={story.name}
        onClick={() => handleImageClick(index + 3)}
      />
    ))}
  </div>
</div>


          {/* Right Side - Active Story Content */}
          <div className="w-[48%]">
            <div
              className="border-[#FFFFFF99] max-w-[610px] rounded-3xl border-2 p-10"
              style={{
                backdropFilter: "blur(42px)",
                WebkitBackdropFilter: "blur(42px)", // for Safari support
                backgroundColor: "rgba(255, 255, 255, 0.3)", // semi-transparent background
                boxShadow: "0px 2px 17.5px 0px #00000040",
              }}
            >
              {/* Stars and Pause Button */}
              <div className="flex justify-between">
                <div className="flex justify-center items-center">
                  <div className="flex bg-white py-1 rounded-xl justify-between">
                    {renderStars(activeStory.rating)}
                  </div>
                </div>
                <CgQuote className="text-white" size={88} />
              </div>

              <p className="w-full text-white p-14 text-lg leading-relaxed">
                {activeStory.quote}
              </p>

              <div className="flex gap-3 items-center">
                <img
                  className="rounded-full h-14 w-14"
                  src={activeStory.profileImage}
                  alt={activeStory.name}
                />
                <div>
                  <h2 className="text-[20px] font-bold text-white">
                    {activeStory.name}
                  </h2>
                  <p className="text-white opacity-90">
                    {activeStory.condition}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
