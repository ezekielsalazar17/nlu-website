"use client";

import { useState } from "react";
import Image from "next/image";

import { Card, CardContent, CardTitle } from "@/src/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carousel";
import { Button } from "@/src/components/ui/button";

import V1 from "@/public/v1.jpg";
import V2 from "@/public/v2.jpg";
import V3 from "@/public/v3.jpg";
import V4 from "@/public/v4.jpg";
import V5 from "@/public/v5.jpg";
import V6 from "@/public/v6.jpg";
import V7b from "@/public/v7_black.png";
import V7w from "@/public/v7_white.png";
import V8b from "@/public/v8_black_front.jpg";
import V8w from "@/public/v8_white_front.jpg";
import { BlurFade } from "@/src/components/ui/blur-fade";
import { BorderBeam } from "@/src/components/ui/border-beam";

const JerseyItem = [
  {
    version: "Version 1",
    img: (
      <Image
        src={V1}
        alt="Version 1"
      />
    ),
  },
  {
    version: "Version 2",
    img: (
      <Image
        src={V2}
        alt="Version 2"
      />
    ),
  },
  {
    version: "Version 3",
    img: (
      <Image
        src={V3}
        alt="Version 3"
      />
    ),
  },
  {
    version: "Version 4",
    img: (
      <Image
        src={V4}
        alt="Version 4"
      />
    ),
  },
  {
    version: "Version 5",
    img: (
      <Image
        src={V5}
        alt="Version 5"
      />
    ),
  },
  {
    version: "Version 6",
    img: (
      <Image
        src={V6}
        alt="Version 6"
      />
    ),
  },
  {
    version: "Version 7 White",
    img: (
      <Image
        src={V7w}
        alt="Version 7 White"
      />
    ),
  },
  {
    version: "Version 7 Black",
    img: (
      <Image
        src={V7b}
        alt="Version 7 Black"
      />
    ),
  },
  {
    version: "Version 8 White",
    img: (
      <Image
        src={V8w}
        alt="Version 8 White"
      />
    ),
  },
  {
    version: "Version 8 Black",
    img: (
      <Image
        src={V8b}
        alt="Version 8 Black"
      />
    ),
  },
];

type JerseyType = (typeof JerseyItem)[number];

export default function Jersey() {
  const [selectedJersey, setSelectedJersey] = useState<JerseyType | null>(null);

  function handleJerseyClick(jersey: JerseyType) {
    setSelectedJersey(jersey);
  }

  function closeModal() {
    setSelectedJersey(null);
  }

  return (
    <div
      id="jersey"
      className="mx-auto max-w-6xl min-h-screen"
    >
      <div className="flex flex-col items-center gap-8 ">
        <BlurFade
          delay={0.25}
          inView
          blur="12px"
          direction="up"
        >
          <div className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal text-4xl md:text-5xl font-semibold">
            Our Jersey
          </div>
        </BlurFade>
        <div className="border border-[#a60607] rounded-xl px-16 max-w-7xl">
          <BlurFade
            delay={0.5}
            inView
            blur="12px"
            direction="up"
          >
            <Carousel className="w-full max-w-8xl">
              <CarouselContent className="-ml-2 md:-ml-4 p-12">
                {JerseyItem.map((jersey, i) => (
                  <CarouselItem
                    key={i}
                    className="pl-2 md:pl-4 basis-1/3 "
                  >
                    <div className="p-1">
                      <Card
                        className="cursor-pointer transition-transform hover:scale-105 border border-[#a60607]"
                        onClick={() => handleJerseyClick(jersey)}
                      >
                        <CardContent className="flex aspect-square items-center justify-center p-6 ">
                          {jersey.img}
                        </CardContent>
                        <CardTitle className="flex items-center justify-center">
                          <span className="text-3xl font-semibold ">{jersey.version}</span>
                        </CardTitle>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </BlurFade>

          <BlurFade
            delay={0.75}
            inView
            blur="12px"
            direction="up"
          >
            <div className="flex items-center justify-center mb-8">
              <Button className="px-7 py-5 cursor-pointer hover:bg-[#cb2b22]">
                <a href="#">Buy Jersey</a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </div>

      {selectedJersey && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={closeModal}
        >
          <div
            className="relative bg-card rounded-2xl p-10 max-w-2xl w-full mx-4 shadow-2xl flex flex-col items-center gap-6 min-h-[70vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-foreground/60 hover:text-foreground text-2xl leading-none"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={V1}
              alt={selectedJersey.version}
              className="rounded-xl w-full max-w-lg"
            />
            <h2 className="text-3xl font-semibold">{selectedJersey.version}</h2>
          </div>
        </div>
      )}
    </div>
  );
}
