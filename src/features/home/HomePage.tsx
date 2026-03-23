import Image from "next/image";
import BGHome from "@/public/bgnoshadow.png";
import { Typography } from "@/src/components/ui/typography";
import { Button } from "@/src/components/ui/button";
import { BlurFade } from "@/src/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/src/components/ui/interactive-hover-button";

export default function HomePage() {
  return (
    <div
      id="home"
      className="max-w-6xl mx-auto py-12 min-h-screen"
    >
      <div className="flex flex-col justify-center items-center">
        <BlurFade
          delay={0.5}
          inView
          blur="12px"
          direction="up"
        >
          <Image
            src={BGHome}
            alt="nlu-bg-home"
            width={1200}
            height={1200}
            className="mx-auto my-auto w-full h-auto mt-10 lg:mt-0"
          />
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
              <span className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal lg:text-4xl text-3xl font-extrabold">
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
            <div className="flex gap-2 items-center justify-center">
              <InteractiveHoverButton className="bg-transparent border border-[#a60607] text-[#a60607] hover:bg-[#a60607] hover:text-white ">
                <a href="#">Buy Jersey</a>
              </InteractiveHoverButton>
              <Button className="px-7.5 py-5.5 cursor-pointer hover:bg-[#cb2b22] rounded-full">Contact Us</Button>
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
}
