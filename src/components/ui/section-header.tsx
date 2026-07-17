import type React from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "center" | "left";
  className?: string;
};

/**
 * Shared section header used across the landing page so every section
 * shares one rhythm: a tracked red eyebrow, a big brand-gradient display
 * title, and an optional lead paragraph. Entrances use BlurFade to match
 * the rest of the site.
 */
export function SectionHeader({ eyebrow, title, description, align = "center", className }: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        centered ? "items-center text-center" : "items-start text-left",
        className,
      )}
    >
      <BlurFade
        inView
        delay={0.1}
        blur="10px"
        direction="up"
      >
        <span className="inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#a60607]">
          <span className="h-px w-7 bg-linear-to-r from-transparent to-[#a60607]/70" />
          {eyebrow}
          {centered && <span className="h-px w-7 bg-linear-to-l from-transparent to-[#a60607]/70" />}
        </span>
      </BlurFade>

      <BlurFade
        inView
        delay={0.18}
        blur="12px"
        direction="up"
      >
        <h2 className="text-gradient-brand font-heading text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-[3.25rem]">
          {title}
        </h2>
      </BlurFade>

      {description && (
        <BlurFade
          inView
          delay={0.26}
          blur="10px"
          direction="up"
        >
          <p className={cn("text-[15px] leading-relaxed text-[#4a4645]", centered ? "mx-auto max-w-2xl" : "max-w-2xl")}>
            {description}
          </p>
        </BlurFade>
      )}
    </div>
  );
}
