import Image, { StaticImageData } from "next/image";

import IGBlack from "@/assets/instagram-mono.svg";
import FBBlack from "@/assets/facebook-mono.svg";
import TIKTOKBlack from "@/assets/tiktok-light.svg";
import DCBlack from "@/assets/discord-mono.svg";
import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

type TPlatforms = {
  src: StaticImageData;
  alt: string;
  label: string;
  href: string;
};

const MESSENGER_URL = "https://www.facebook.com/messages/t/678112872544258";
const DISCORD_URL = "https://discord.com/invite/ePSuH83dvb";

const Platforms: TPlatforms[] = [
  { src: FBBlack, alt: "facebook-nlu", label: "Facebook", href: "https://www.facebook.com/NLUCommunityyy" },
  {
    src: IGBlack,
    alt: "instagram-nlu",
    label: "Instagram",
    href: "https://www.instagram.com/nlu.community?igsh=dnBpYzYzdmd2YTIx",
  },
  { src: DCBlack, alt: "discord-nlu", label: "Discord", href: DISCORD_URL },
  {
    src: TIKTOKBlack,
    alt: "tiktok-nlu",
    label: "TikTok",
    href: "https://www.tiktok.com/@nlu_community?_r=1&_t=ZS-94wlb7b9TJU",
  },
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 py-36"
    >
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-10 shadow-[0_50px_120px_-35px_rgba(0,0,0,0.45)] backdrop-blur-2xl sm:p-14">
          <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ED0404] to-transparent" />

          <SectionHeader
            eyebrow="Get In Touch"
            title="Come play with us."
            description="Reach out to ask a question, share your thoughts, or just say hi — we're always here to listen and welcome new faces into the community."
          />

          <BlurFade
            inView
            delay={0.34}
            blur="10px"
            direction="up"
          >
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="cursor-pointer rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] px-8 py-5.5 text-sm shadow-[0_0_18px_rgba(237,4,4,0.4)] transition-all duration-300 hover:scale-105 hover:from-[#FF4D4D] hover:to-[#ED0404] hover:shadow-[0_0_28px_rgba(237,4,4,0.6)]"
              >
                <a
                  href={MESSENGER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Message Us
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="cursor-pointer rounded-full border border-[#a60607]/40 bg-transparent px-8 py-5.5 text-sm font-semibold text-[#a60607] transition-all duration-300 hover:scale-105 hover:border-[#a60607] hover:bg-[#a60607]/5"
              >
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join our Discord
                </a>
              </Button>
            </div>
          </BlurFade>

          <BlurFade
            inView
            delay={0.42}
            blur="10px"
            direction="up"
          >
            <div className="mt-10 flex flex-col items-center gap-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a60607]/50">
                Find us everywhere
              </span>
              <div className="flex flex-row items-center justify-center gap-3">
                {Platforms.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={platform.label}
                    title={platform.label}
                    className="group flex h-12 w-12 items-center justify-center rounded-xl border border-black/10 bg-white/70 transition-all duration-200 hover:-translate-y-1 hover:border-[#a60607]/50 hover:bg-white hover:shadow-[0_12px_24px_-10px_rgba(237,4,4,0.3)]"
                  >
                    <div className="relative size-5 transition-transform duration-200 group-hover:scale-110">
                      <Image
                        src={platform.src}
                        alt={platform.alt}
                        fill
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
