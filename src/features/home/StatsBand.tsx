"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

type Stat = { value: number; display?: string; suffix?: string; label: string; count?: boolean };

const stats: Stat[] = [
  { value: 2020, display: "2020", label: "Founded" },
  { value: 4, suffix: "", label: "Squads", count: true },
  { value: 15, suffix: "", label: "Leaders", count: true },
  { value: 4, suffix: "", label: "Games", count: true },
];

export default function StatsBand() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const nums = gsap.utils.toArray<HTMLElement>(".stat-num");

      nums.forEach((el) => {
        if (el.dataset.count !== "true") return;
        const to = Number(el.dataset.value);
        const suffix = el.dataset.suffix ?? "";

        if (reduce) {
          el.textContent = `${to}${suffix}`;
          return;
        }

        const counter = { v: 0 };
        gsap.to(counter, {
          v: to,
          duration: 1.4,
          ease: "power2.out",
          snap: { v: 1 },
          onUpdate: () => {
            el.textContent = `${Math.round(counter.v)}${suffix}`;
          },
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="relative overflow-hidden px-6 py-4"
    >
      <div className="bg-dots mask-radial pointer-events-none absolute inset-0 -z-10 opacity-40" />
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-y-10 rounded-3xl border border-[#a60607]/12 bg-white/50 py-10 backdrop-blur-sm md:grid-cols-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "flex flex-col items-center gap-1.5 px-4 text-center",
              // 2-col mobile: divider only on the right-hand column
              i % 2 === 1 ? "border-l border-[#a60607]/12" : "border-l-0",
              // 4-col desktop: divider on every cell except the first
              i === 0 ? "md:border-l-0" : "md:border-l md:border-[#a60607]/12",
            )}
          >
            <span
              className="stat-num text-gradient-ink font-heading text-4xl font-semibold leading-none tracking-tight sm:text-5xl"
              data-count={stat.count ? "true" : "false"}
              data-value={stat.value}
              data-suffix={stat.suffix ?? ""}
            >
              {stat.count ? `0${stat.suffix ?? ""}` : stat.display}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#a60607]/70 sm:text-[11px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
