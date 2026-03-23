"use client";

import { useState } from "react";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { Button } from "@/src/components/ui/button";

import V1 from "@/src/assets/v1.jpg";
import V2 from "@/src/assets/v2.jpg";
import V3 from "@/src/assets/v3.jpg";
import V4 from "@/src/assets/v4.jpg";
import V5 from "@/src/assets/v5.jpg";
import V6 from "@/src/assets/v6.jpg";
import V7b from "@/src/assets/v7_black.png";
import V7w from "@/src/assets/v7_white.png";
import V8b from "@/src/assets/v8_black_front.jpg";
import V8w from "@/src/assets/v8_white_front.jpg";
import { BlurFade } from "@/src/components/ui/blur-fade";

const JerseyItem = [
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

type JerseyType = (typeof JerseyItem)[number];

export default function Jersey() {
  const [selectedJersey, setSelectedJersey] = useState<JerseyType | null>(null);

  return (
    <div id="jersey" className="mx-auto max-w-6xl min-h-screen px-8 py-24">
      <div className="flex flex-col items- justify-center gap-8">
        <BlurFade delay={0.25} inView blur="12px" direction="up">
          <div className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal text-4xl md:text-5xl font-semibold">
            Our Jersey
          </div>
        </BlurFade>

        <div className="border border-[#a60607]/50 rounded-xl px-4 sm:px-10 lg:px-16 max-w-7xl w-full shadow-[0_4px_30px_rgba(237,4,4,0.06)]">
          <BlurFade delay={0.5} inView blur="12px" direction="up">
            <Carousel className="w-full max-w-8xl">
              <CarouselContent className="-ml-2 md:-ml-4 p-4 sm:p-8 lg:p-12">
                {JerseyItem.map((jersey, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card
                        className="cursor-pointer group overflow-hidden border border-[#a60607]/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(237,4,4,0.18)] hover:border-[#ED0404]"
                        onClick={() => setSelectedJersey(jersey)}
                      >
                        <CardContent className="flex aspect-square items-center justify-center p-0 relative overflow-hidden">
                          <div className="transition-transform duration-500 group-hover:scale-110 w-full h-full flex items-center justify-center p-6">
                            <Image src={jersey.src} alt={jersey.version} />
                          </div>
                          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end justify-center pb-4">
                            <span className="text-white text-xs font-semibold tracking-widest uppercase">
                              Quick View
                            </span>
                          </div>
                        </CardContent>
                        <CardTitle className="flex items-center justify-center py-3">
                          <span className="text-xl font-semibold transition-colors duration-200 group-hover:text-[#ED0404]">
                            {jersey.version}
                          </span>
                        </CardTitle>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </BlurFade>

          <BlurFade delay={0.75} inView blur="12px" direction="up">
            <div className="flex items-center justify-center mb-8">
              <Button
                asChild
                className="px-8 py-5 cursor-pointer rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] hover:from-[#FF4D4D] hover:to-[#ED0404] shadow-[0_0_18px_rgba(237,4,4,0.35)] hover:shadow-[0_0_30px_rgba(237,4,4,0.55)] hover:scale-105 transition-all duration-300"
              >
                <a href="#">Buy Jersey</a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>

      {selectedJersey && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm"
          onClick={() => setSelectedJersey(null)}
        >
          <div
            className="relative bg-white rounded-2xl p-10 max-w-lg w-full mx-4 shadow-2xl flex flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-black/40 hover:text-black text-2xl leading-none transition-colors duration-200"
              onClick={() => setSelectedJersey(null)}
            >
              &times;
            </button>

            <div className="w-full overflow-hidden rounded-xl">
              <Image
                src={selectedJersey.src}
                alt={selectedJersey.version}
                className="w-full h-auto"
              />
            </div>

            <h2 className="text-2xl font-bold text-[#131212]">
              {selectedJersey.version}
            </h2>

            <Button
              asChild
              className="w-full py-5 rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] hover:from-[#FF4D4D] hover:to-[#ED0404] shadow-[0_0_18px_rgba(237,4,4,0.3)] hover:shadow-[0_0_28px_rgba(237,4,4,0.5)] hover:scale-105 transition-all duration-300 text-base"
            >
              <a href="#">Buy This Jersey</a>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
