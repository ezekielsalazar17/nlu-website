import Image, { StaticImageData } from "next/image";

import Logo from "@/assets/nlulogo.png";
import IG from "@/assets/instagram.svg";
import FB from "@/assets/facebook.svg";
import TIKTOK from "@/assets/tiktok.svg";
import DC from "@/assets/discord.svg";
import { Button } from "@/components/ui/button";

type TPlatforms = { src: StaticImageData; alt: string; label: string; href: string };

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Jersey", href: "#jersey" },
  { label: "Admins", href: "#admins" },
  { label: "Members", href: "#members" },
];

const footerActions = [
  { label: "Buy Jersey", href: "#jersey" },
  { label: "Contact Us", href: "#contact" },
];

const Platforms: TPlatforms[] = [
  { src: FB, alt: "facebook", label: "Facebook", href: "https://www.facebook.com/NLUCommunityyy" },
  { src: IG, alt: "instagram", label: "Instagram", href: "https://www.instagram.com/nlu.community?igsh=dnBpYzYzdmd2YTIx" },
  { src: DC, alt: "discord", label: "Discord", href: "https://discord.com/invite/ePSuH83dvb" },
  { src: TIKTOK, alt: "tiktok", label: "TikTok", href: "https://www.tiktok.com/@nlu_community?_r=1&_t=ZS-94wlb7b9TJU" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0F0F0F] text-white">
      <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ED0404] to-transparent" />
      <div className="pointer-events-none absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-[#ED0404]/12 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-8 pt-16">
        {/* CTA row */}
        <div className="mb-14 flex flex-col items-center justify-between gap-6 border-b border-white/8 pb-14 text-center md:flex-row md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="font-heading text-3xl font-bold tracking-wide sm:text-4xl">
              Ready to{" "}
              <span className="bg-linear-to-r from-[#FF4D4D] to-[#ED0404] bg-clip-text text-transparent">play</span>{" "}
              with us?
            </h2>
            <p className="text-sm text-white/45">Join a community that plays to grow — together.</p>
          </div>
          <Button
            asChild
            className="cursor-pointer rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] px-8 py-5.5 text-sm shadow-[0_0_18px_rgba(237,4,4,0.4)] transition-all duration-300 hover:scale-105 hover:from-[#FF4D4D] hover:to-[#ED0404] hover:shadow-[0_0_28px_rgba(237,4,4,0.6)]"
          >
            <a href="#contact">Join the Community</a>
          </Button>
        </div>

        {/* columns */}
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div className="flex max-w-xs flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="NLU Logo"
                width={56}
                height={56}
              />
              <div>
                <p className="bg-linear-to-b from-[#ED0404] to-[#9B0202] bg-clip-text font-heading text-xl font-extrabold text-transparent">
                  Nos Ludere Ut
                </p>
                <p className="text-xs uppercase tracking-widest text-white/40">Gaming Community · CODM</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/50">
              Building connections through competition. A community for CODM players who play to grow.
            </p>
            <div className="flex w-fit flex-row items-center gap-3">
              {Platforms.map((platform) => (
                <a
                  key={platform.label}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={platform.label}
                  title={platform.label}
                  className="rounded-lg border border-white/10 p-2 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#a60607]/60 hover:bg-white/5"
                >
                  <Image
                    src={platform.src}
                    alt={platform.alt}
                    width={24}
                    height={24}
                    style={{ width: 24, height: 24 }}
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/60">Navigation</p>
            {footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="w-fit text-sm text-white/40 transition-colors duration-200 hover:text-[#ED0404]"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-white/60">Get Involved</p>
            {footerActions.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="w-fit text-sm text-white/40 transition-colors duration-200 hover:text-[#ED0404]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-2 border-t border-white/8 py-6 md:flex-row">
          <p className="text-xs text-white/25">© 2020–2026 Nos Ludere Ut. All rights reserved.</p>
          <p className="text-xs text-white/20">Made with passion for the game.</p>
        </div>
      </div>

      {/* Signature outlined wordmark — SVG scales to fit the width, always fully readable */}
      <div
        aria-hidden
        className="relative w-full overflow-hidden px-4 pb-3"
      >
        <svg
          viewBox="0 0 1000 140"
          preserveAspectRatio="xMidYMid meet"
          className="block h-auto w-full"
        >
          <text
            x="500"
            y="116"
            textAnchor="middle"
            textLength="972"
            lengthAdjust="spacingAndGlyphs"
            className="font-heading"
            fill="none"
            stroke="rgba(255,255,255,0.16)"
            strokeWidth="1.1"
            fontSize="130"
            fontWeight="700"
          >
            NOS LUDERE UT
          </text>
        </svg>
      </div>
    </footer>
  );
}
