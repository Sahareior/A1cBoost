import {
  MaximizeIcon,
  MoreVerticalIcon,
  PauseIcon,
  PlayIcon,
  Volume2Icon,
} from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";

export const NavigationSection = (): JSX.Element => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState([50]);

  const videoControls = [
    {
      icon: Volume2Icon,
      className: "h-4 w-4 sm:h-5 sm:w-5",
    },
    {
      icon: MaximizeIcon,
      className: "h-4 w-4 sm:h-5 sm:w-5",
    },
    {
      icon: MoreVerticalIcon,
      className: "h-4 w-4 sm:h-5 sm:w-5",
    },
  ];

  return (
    <section className="flex flex-col w-full items-center gap-4 sm:gap-[31px] relative px-4 sm:px-0">
      <header className="flex flex-col w-full max-w-[790px] items-center gap-4 sm:gap-[23px] relative flex-[0_0_auto]">
        <h1 className="relative self-stretch mt-[-1.00px] bg-[linear-gradient(123deg,rgba(0,138,226,1)_0%,rgba(0,181,202,1)_50%,rgba(246,198,67,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Poppins',Helvetica] font-bold text-transparent text-2xl sm:text-4xl text-center tracking-[-0.72px] leading-[1.2] sm:leading-[46.8px]">
          More than an app — a support system.
        </h1>

        <p className="relative self-stretch [font-family:'Poppins',Helvetica] font-normal text-[#0e4269] text-base sm:text-xl text-center tracking-[0] leading-[1.3] sm:leading-[26px]">
          Support, tracking, and peace of mind in one app.
        </p>
      </header>

      <div className="relative w-full max-w-[1200px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[630px]">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          alt="Element"
          src="/phone.jpg"
        />

        <div className="absolute left-0 bottom-0 w-full h-[80px] sm:h-[110px] flex items-end bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_52%,rgba(0,0,0,1)_100%)]">
          <div className="mb-3 sm:mb-5 h-8 sm:h-11 mx-2 flex-1 flex flex-col justify-end rounded-[0px_0px_15px_15px]">
            <div className="flex flex-1 max-h-8 sm:max-h-10 relative w-full items-start justify-between">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative w-8 h-8 sm:w-10 sm:h-10 p-0 hover:bg-transparent"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? (
                    <PauseIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  ) : (
                    <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  )}
                </Button>

                <div className="relative w-fit [font-family:'Arial-Regular',Helvetica] font-normal text-white text-xs sm:text-sm tracking-[0] leading-[normal] whitespace-nowrap">
                  0:05 / 0:10
                </div>
              </div>

              <div className="inline-flex items-start gap-1 sm:gap-2 relative flex-[0_0_auto]">
                <div className="relative w-20 sm:w-28 h-8 sm:h-10">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-0 right-0 w-8 h-8 sm:w-10 sm:h-10 p-0 hover:bg-transparent"
                  >
                    <Volume2Icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                  </Button>
                </div>

                {videoControls.map((control, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="relative w-8 h-8 sm:w-10 sm:h-10 p-0 hover:bg-transparent"
                  >
                    <control.icon
                      className={`${control.className} text-white`}
                    />
                  </Button>
                ))}
              </div>
            </div>

            <div className="mx-2 sm:mx-3 flex-1 max-h-2 sm:max-h-3 relative -mb-1 sm:-mb-1 rounded">
              <div className="absolute w-full top-[calc(50.00%_-_1px)] sm:top-[calc(50.00%_-_2px)] left-0 h-0.5 sm:h-1 bg-[#ffffffb2] rounded" />

              <div className="absolute w-[calc(100%_-_200px)] sm:w-[calc(100%_-_300px)] md:w-[calc(100%_-_423px)] top-[calc(50.00%_-_1px)] sm:top-[calc(50.00%_-_2px)] left-0 h-0.5 sm:h-1 bg-white rounded" />

              <div className="absolute top-[calc(50.00%_-_4px)] sm:top-[calc(50.00%_-_6px)] right-[195px] sm:right-[295px] md:right-[415px] w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-md shadow-[0px_0px_2px_#00000026]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};