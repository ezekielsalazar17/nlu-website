"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

// The manifesto, tokenised word-by-word so we can highlight the brand words.
// `hl` words carry the red brand colour + glow; the rest reveal from dim to ink.
const WORDS: { text: string; hl?: boolean }[] = [
  { text: "More" },
  { text: "than" },
  { text: "a" },
  { text: "roster." },
  { text: "Nos", hl: true },
  { text: "Ludere", hl: true },
  { text: "Ut", hl: true },
  { text: "is" },
  { text: "a" },
  { text: "community", hl: true },
  { text: "built" },
  { text: "on" },
  { text: "camaraderie", hl: true },
  { text: "—" },
  { text: "where" },
  { text: "ambition" },
  { text: "sharpens" },
  { text: "skill," },
  { text: "every" },
  { text: "victory" },
  { text: "is" },
  { text: "shared," },
  { text: "and" },
  { text: "every" },
  { text: "player" },
  { text: "finds" },
  { text: "where" },
  { text: "they" },
  { text: "belong.", hl: true },
];

export default function ScrollReveal() {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const track = trackRef.current;
    if (!track) return;

    // Scope selectors to this section and auto-revert on unmount. We use a
    // CSS `sticky` inner panel for the "pin" instead of ScrollTrigger's
    // pin (which reparents the DOM and clashes with React reconciliation).
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLElement>(".reveal-word");

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(words, { opacity: 1 });
        return;
      }

      gsap.set(words, { opacity: 0.12 });

      // One ScrollTrigger on the timeline. `scrub` ties progress to scroll,
      // so it plays forward scrolling down and reverses scrolling up. The
      // tall track supplies the scroll distance; only opacity + transform run.
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: track,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });

      tl.to(words, { opacity: 1, ease: "none", stagger: 0.5 }, 0).fromTo(
        ".creed-progress",
        { scaleX: 0 },
        { scaleX: 1, ease: "none" },
        0,
      );
    }, trackRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="creed">
      {/* Tall scroll track — the sticky panel below stays put while we scroll through it */}
      <div
        ref={trackRef}
        className="relative h-[240vh]"
      >
        <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden px-6">
          {/* Brand glows — same palette as the hero */}
          <div className="pointer-events-none absolute left-1/2 top-10 h-125 w-125 -translate-x-1/2 rounded-full bg-[#ED0404]/10 blur-[150px] animate-pulse-glow" />
          <div
            className="pointer-events-none absolute -bottom-24 right-0 h-100 w-100 rounded-full bg-[#9B0202]/8 blur-[130px] animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />

          {/* Oversized watermark word for depth */}
          <span
            aria-hidden
            className="pointer-events-none absolute select-none font-heading text-[26vw] font-bold leading-none tracking-tighter text-[#a60607]/[0.04]"
          >
            NLU
          </span>

          <div className="relative mx-auto max-w-5xl">
            <div className="mb-10 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-linear-to-r from-transparent to-[#a60607]/70" />
              <span className="font-heading text-xs uppercase tracking-[0.35em] text-[#a60607] sm:text-sm">
                Our Creed
              </span>
              <span className="h-px w-10 bg-linear-to-l from-transparent to-[#a60607]/70" />
            </div>

            <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-center font-heading text-3xl leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {WORDS.map((w, i) => (
                <span
                  key={i}
                  className={cn(
                    "reveal-word inline-block",
                    w.hl ? "text-[#a60607] text-glow-red" : "text-[#141414]",
                  )}
                >
                  {w.text}
                </span>
              ))}
            </p>

            {/* Scroll-linked progress line — fills going down, empties going up */}
            <div className="mx-auto mt-14 h-0.5 w-40 overflow-hidden rounded-full bg-[#a60607]/15">
              <div className="creed-progress h-full w-full origin-left rounded-full bg-linear-to-r from-[#ED0404] to-[#9B0202] will-change-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
