"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import BGHome from "@/assets/bgnoshadow.png";
import { BlurFade } from "@/components/ui/blur-fade";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Button } from "@/components/ui/button";

const tickerItems = [
  "Nos Ludere Ut",
  "Play To Grow",
  "Camaraderie",
  "Women-Led",
  "EST. 2020",
  "CODM",
];

function Ticker({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      className={`flex w-max ${reverse ? "animate-ticker-rev" : "animate-ticker"}`}
    >
      {[0, 1].map((set) => (
        <div key={set} className="flex items-center">
          {tickerItems.concat(tickerItems).map((item, i) => (
            <div
              key={`${set}-${i}`}
              className="mr-8 flex items-center whitespace-nowrap"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/90">
                {item}
              </span>
              <span className="ml-8 h-1 w-1 rounded-full bg-white/50" />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) return;

      // Scroll parallax — drifts on the way down, reverses on the way up.
      const scrub = {
        trigger: root,
        start: "top top",
        end: "bottom top",
        scrub: true,
      } as const;
      gsap.to(".hero-emblem", {
        yPercent: 18,
        scale: 1.05,
        ease: "none",
        scrollTrigger: scrub,
      });
      gsap.to(".hero-glow-1", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: scrub,
      });
      gsap.to(".hero-glow-2", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: scrub,
      });
      gsap.to(".hero-copy", {
        yPercent: 10,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: scrub,
      });

      // Cursor tilt on the emblem — desktop pointers only.
      if (window.matchMedia("(pointer: fine)").matches) {
        const rotY = gsap.quickTo(".hero-tilt", "rotationY", {
          duration: 0.6,
          ease: "power3",
        });
        const rotX = gsap.quickTo(".hero-tilt", "rotationX", {
          duration: 0.6,
          ease: "power3",
        });
        const onMove = (e: MouseEvent) => {
          const cx = window.innerWidth / 2;
          const cy = window.innerHeight / 2;
          rotY(((e.clientX - cx) / cx) * 9);
          rotX((-(e.clientY - cy) / cy) * 9);
        };
        window.addEventListener("mousemove", onMove);
        return () => window.removeEventListener("mousemove", onMove);
      }
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" ref={rootRef} className="relative overflow-hidden">
      {/* animated gradient-mesh + grid atmosphere */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
        <div className="hero-glow-1 animate-mesh absolute left-[12%] top-[12%] h-120 w-120 rounded-full bg-[#ED0404]/14 blur-[150px]" />
        <div className="hero-glow-2 animate-mesh absolute bottom-0 right-[8%] h-100 w-100 rounded-full bg-[#9B0202]/12 blur-[140px]" />
        <div className="animate-mesh absolute left-1/2 top-1/3 h-80 w-80 -translate-x-1/2 rounded-full bg-[#FF4D4D]/8 blur-[120px]" />
      </div>

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 py-28">
        <BlurFade delay={0.3} inView blur="10px" direction="up">
          <span className="glass inline-flex items-center gap-3 rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#a60607] shadow-[0_2px_16px_rgba(166,6,7,0.08)] sm:text-[11px]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ED0404]/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#ED0404]" />
            </span>
            Est. 2020 · Women-Led CODM Community
          </span>
        </BlurFade>

        <BlurFade delay={0.45} inView blur="12px" direction="up">
          <div className="hero-emblem mt-2" style={{ perspective: 1100 }}>
            <div className="hero-tilt transform-3d">
              <div className="animate-float">
                <Image
                  src={BGHome}
                  alt="Nos Ludere Ut emblem"
                  width={1200}
                  height={1200}
                  priority
                  className="mx-auto h-auto w-[min(94vw,1000px)] drop-shadow-[0_36px_70px_rgba(166,6,7,0.2)]"
                />
              </div>
            </div>
          </div>
        </BlurFade>

        <div className="hero-copy -mt-8 flex flex-col items-center gap-5 text-center sm:-mt-12 lg:-mt-24">
          <BlurFade delay={0.6} inView blur="12px" direction="up">
            <h1 className="font-heading text-[13vw] font-semibold leading-[0.85] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient-brand text-glow-red">
                Nos Ludere Ut
              </span>
            </h1>
          </BlurFade>

          <BlurFade delay={0.74} inView blur="12px" direction="up">
            <p className="max-w-2xl text-lg font-medium leading-snug text-[#201f1f] sm:text-xl">
              A community that bridges connection in every form — for its
              members, and everyone who plays alongside them.
            </p>
          </BlurFade>

          <BlurFade delay={0.86} inView blur="12px" direction="up">
            <div className=" flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="cursor-pointer rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] px-8 py-5.5 text-sm shadow-[0_0_18px_rgba(237,4,4,0.4)] transition-all duration-300 hover:scale-105 hover:from-[#FF4D4D] hover:to-[#ED0404] hover:shadow-[0_0_28px_rgba(237,4,4,0.6)]"
              >
                <a href="#contact">Join the Community</a>
              </Button>
              <InteractiveHoverButton className="border border-[#a60607] bg-transparent text-[#a60607] shadow-[0_0_12px_rgba(166,6,7,0.15)] transition-all duration-300 hover:bg-[#a60607] hover:text-white hover:shadow-[0_0_24px_rgba(237,4,4,0.4)]">
                <a
                  href="https://www.facebook.com/messages/t/678112872544258"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Buy Jersey
                </a>
              </InteractiveHoverButton>
            </div>
          </BlurFade>
        </div>
      </div>

      {/* dual marquee */}
      <div className="relative flex w-full flex-col gap-px overflow-hidden border-y border-[#7f0405] bg-linear-to-r from-[#9B0202] via-[#a60607] to-[#9B0202] -mt-4.5">
        <div className="overflow-hidden py-3">
          <Ticker />
        </div>
      </div>
    </div>
  );
}
