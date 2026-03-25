import { BlurFade } from "@/src/components/ui/blur-fade";
import Image from "next/image";

type TPlatforms = {
  src: string;
  alt: string;
  href: string;
};

const Platforms: TPlatforms[] = [
  {
    src: "https://thesvg.org/icons/facebook/mono.svg",
    alt: "facebook-nlu",
    href: "https://www.facebook.com/NLUCommunityyy",
  },
  {
    src: "https://thesvg.org/icons/instagram/mono.svg",
    alt: "instagram-nlu",
    href: "https://www.instagram.com/nlu.community?igsh=dnBpYzYzdmd2YTIx",
  },
  {
    src: "https://thesvg.org/icons/discord/mono.svg",
    alt: "discord-nlu",
    href: "https://discord.com/invite/ePSuH83dvb",
  },
  {
    src: "https://thesvg.org/icons/tiktok/light.svg",
    alt: "tiktok-nlu",
    href: "https://www.tiktok.com/@nlu_community?_r=1&_t=ZS-94wlb7b9TJU",
  },
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-36 px-8"
    >
      <div className="mx-auto max-w-6xl py-0 lg:py-24 px-8">
        <div className="bg-white/10 backdrop-blur-3xl rounded-2xl border border-black/10 h-full p-12 flex flex-col gap-4 justify-center items-center">
          <BlurFade
            inView
            delay={0.15}
            blur="12px"
            direction="up"
          >
            <h1 className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-widest text-4xl md:text-5xl font-semibold font-heading text-center">
              Connect With Our Community
            </h1>
          </BlurFade>

          <BlurFade
            inView
            delay={0.25}
            blur="12px"
            direction="up"
          >
            <p className="text-lg text-[#363434] text-center">
              Connect with us through this platform to reach out, share your thoughts, or ask any questions—we&apos;re
              always here to listen and engage with our community.
            </p>
          </BlurFade>

          <BlurFade
            inView
            delay={0.35}
            blur="12px"
            direction="up"
          >
            <div className="w-fit p-2 gap-4 flex flex-row items-center justify-center px-4 lg:px-12">
              {Platforms.map((platform, i) => (
                <div
                  key={i}
                  className="border border-black/10 rounded-lg w-fit p-2 cursor-pointer hover:border-[#a60607]/50"
                >
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative size-6">
                      <Image
                        src={platform.src}
                        alt={platform.alt}
                        fill
                      />
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
