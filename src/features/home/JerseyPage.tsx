"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion } from "motion/react";

import V1 from "@/assets/v1.jpg";
import V2 from "@/assets/v2.jpg";
import V3 from "@/assets/v3.jpg";
import V4 from "@/assets/v4.jpg";
import V5 from "@/assets/v5.jpg";
import V6 from "@/assets/v6.jpg";
import V7b from "@/assets/v7_black.png";
import V7w from "@/assets/v7_white.png";
import V8b from "@/assets/v8_black_front.jpg";
import V8w from "@/assets/v8_white_front.jpg";

import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/ui/section-header";
import { cn } from "@/lib/utils";

const BUY_URL = "https://www.facebook.com/messages/t/678112872544258";

type JerseyType = { version: string; src: StaticImageData };

const JerseyItem: JerseyType[] = [
  { version: "Version 1", src: V1 },
  { version: "Version 2", src: V2 },
  { version: "Version 3", src: V3 },
  { version: "Version 4", src: V4 },
  { version: "Version 5", src: V5 },
  { version: "Version 6", src: V6 },
  { version: "Version 7 White", src: V7w },
  { version: "Version 7 Black", src: V7b },
  { version: "Version 8 White", src: V8w },
  { version: "Version 8 Black", src: V8b },
];

export default function Jersey() {
  const [selected, setSelected] = useState(0);
  const [zoom, setZoom] = useState(false);
  const active = JerseyItem[selected];

  return (
    <section
      id="jersey"
      className="relative mx-auto min-h-screen max-w-6xl px-6 py-28"
    >
      <SectionHeader
        eyebrow="Official Kit"
        title="Wear the colors."
        description="Ten drops and counting — from the classics to the latest away kits. Pick one to preview, tap to zoom, then claim yours."
      />

      <div className="mt-14 grid items-start gap-6 lg:grid-cols-[1.1fr_1fr]">
        {/* Featured viewer */}
        <div className="glass relative flex flex-col gap-5 overflow-hidden rounded-[2rem] p-6 shadow-[0_30px_70px_-30px_rgba(237,4,4,0.25)] sm:p-8">
          <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ED0404] to-transparent" />
          <span className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-[#ED0404]/10 blur-[90px]" />

          <button
            type="button"
            onClick={() => setZoom(true)}
            className="group relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-2xl bg-linear-to-b from-white/70 to-[#faf5f5]"
            aria-label={`Zoom ${active.version}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex h-full w-full items-center justify-center p-8"
              >
                <Image
                  src={active.src}
                  alt={active.version}
                  className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
            <span className="absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
              Tap to zoom
            </span>
          </button>

          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a60607]/60">
                Now viewing
              </span>
              <span className="font-heading text-xl font-extrabold tracking-wide text-[#131212]">{active.version}</span>
            </div>
            <Button
              asChild
              className="cursor-pointer rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] px-7 py-5 text-sm shadow-[0_0_18px_rgba(237,4,4,0.35)] transition-all duration-300 hover:scale-105 hover:from-[#FF4D4D] hover:to-[#ED0404] hover:shadow-[0_0_28px_rgba(237,4,4,0.55)]"
            >
              <a
                href={BUY_URL}
                target="_blank"
                rel="noreferrer noopener"
              >
                Buy This Kit
              </a>
            </Button>
          </div>
        </div>

        {/* Thumbnail selector */}
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
          {JerseyItem.map((jersey, i) => (
            <button
              key={jersey.version}
              type="button"
              onClick={() => setSelected(i)}
              aria-label={jersey.version}
              aria-pressed={selected === i}
              className={cn(
                "group relative aspect-square overflow-hidden rounded-xl border bg-white/60 transition-all duration-200",
                selected === i
                  ? "border-[#ED0404] shadow-[0_0_0_2px_rgba(237,4,4,0.35),0_12px_24px_-12px_rgba(237,4,4,0.4)]"
                  : "border-[#a60607]/12 hover:-translate-y-0.5 hover:border-[#a60607]/45 hover:shadow-[0_10px_20px_-12px_rgba(237,4,4,0.3)]",
              )}
            >
              <Image
                src={jersey.src}
                alt={jersey.version}
                className="h-full w-full object-contain p-3 transition-transform duration-300 group-hover:scale-110"
              />
              <span className="absolute bottom-1 left-1 rounded-md bg-white/80 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-[#a60607] backdrop-blur-sm">
                {jersey.version.replace("Version ", "V")}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Zoom modal */}
      <AnimatePresence>
        {zoom && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
            onClick={() => setZoom(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.12 }}
          >
            <motion.div
              className="relative mx-4 flex w-full max-w-lg flex-col items-center gap-6 rounded-3xl bg-white p-10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.92, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <button
                className="absolute right-4 top-4 text-2xl leading-none text-black/40 transition-colors duration-200 hover:text-black"
                onClick={() => setZoom(false)}
                aria-label="Close"
              >
                &times;
              </button>
              <div className="w-full overflow-hidden rounded-xl">
                <Image
                  src={active.src}
                  alt={active.version}
                  className="h-auto w-full"
                />
              </div>
              <h2 className="font-heading text-2xl font-bold text-[#131212]">{active.version}</h2>
              <Button
                asChild
                className="w-full rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] py-5 text-base shadow-[0_0_18px_rgba(237,4,4,0.3)] transition-all duration-300 hover:scale-105 hover:from-[#FF4D4D] hover:to-[#ED0404] hover:shadow-[0_0_28px_rgba(237,4,4,0.5)]"
              >
                <a
                  href={BUY_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Buy This Jersey
                </a>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
