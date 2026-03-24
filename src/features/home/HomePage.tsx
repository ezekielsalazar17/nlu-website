import Image from "next/image";
import BGHome from "@/src/assets/bgnoshadow.png";
import { Typography } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";
import { BlurFade } from "@/src/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/src/components/ui/interactive-hover-button";

const tickerItems = ["Nos Ludere Ut", "Gaming Community", "Join the Community", "EST.2020"];

function TickerItem({ text }: { text: string }) {
  return (
    <div className="flex items-center whitespace-nowrap mr-5">
      <span className="inline-block text-white font-semibold text-base">{text}</span>
      <span className="inline-block text-white ml-5">•</span>
    </div>
  );
}

export default function HomePage() {
  return (
    <div id="home">
      <div className="max-w-6xl mx-auto py-12 min-h-screen">
        <div className="flex flex-col justify-center items-center">
          <BlurFade
            delay={0.5}
            inView
            blur="12px"
            direction="up"
          >
            <div className="animate-float">
              <Image
                src={BGHome}
                alt="nlu-bg-home"
                width={1200}
                height={1200}
                priority
                className="mx-auto my-auto w-full h-auto mt-10 lg:mt-0"
              />
            </div>
          </BlurFade>

          <div className="text-center gap-4 flex flex-col px-10 mt-0 lg:-mt-25">
            <BlurFade
              delay={0.75}
              inView
              blur="12px"
              direction="up"
            >
              <Typography variant="h1">
                The{" "}
                <span className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal lg:text-4xl text-3xl font-extrabold text-glow-red">
                  community
                </span>{" "}
                bridges connection in any form for its members and even its partners.
              </Typography>
            </BlurFade>

            <BlurFade
              delay={1}
              inView
              blur="12px"
              direction="up"
            >
              <Typography
                variant="h4"
                className="text-[#363434]"
              >
                Driven by ambition, NLU continues to grow and hone players not just to improve gameplay but widen their
                view on camaraderie.
              </Typography>
            </BlurFade>

            <BlurFade
              delay={1.25}
              inView
              blur="12px"
              direction="up"
            >
              <div className="flex gap-3 items-center justify-center">
                <InteractiveHoverButton className="bg-transparent border border-[#a60607] text-[#a60607] hover:bg-[#a60607] hover:text-white shadow-[0_0_12px_rgba(166,6,7,0.2)] hover:shadow-[0_0_24px_rgba(237,4,4,0.4)] transition-all duration-300">
                  Buy Jersey
                </InteractiveHoverButton>
                <Button className="px-7.5 py-5.5 cursor-pointer rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] hover:from-[#FF4D4D] hover:to-[#ED0404] shadow-[0_0_18px_rgba(237,4,4,0.4)] hover:shadow-[0_0_28px_rgba(237,4,4,0.6)] hover:scale-105 transition-all duration-300">
                  <a href="#contact"> Contact Us</a>
                </Button>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden bg-[#a60607] py-5 flex flex-col justify-center">
        <div className="flex w-max animate-ticker">
          {[0, 1].map((set) => (
            <div
              key={set}
              className="flex items-center"
            >
              {Array.from({ length: 4 }, (_, i) => tickerItems[i % tickerItems.length])
                .concat(tickerItems)
                .map((item, i) => (
                  <TickerItem
                    key={`${set}-${i}`}
                    text={item}
                  />
                ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
