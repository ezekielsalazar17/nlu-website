"use client";

import { BlurFade } from "@/components/ui/blur-fade";

const Founder = [{ name: "Kai Watts", role: "Founder" }];

const ExecAdmin = [
  { name: "Rory", role: "Executive Admin" },
  { name: "Zaf", role: "Executive Admin" },
  { name: "Zylie", role: "Executive Admin" },
  { name: "Kohi", role: "Executive Admin" },
  { name: "Riri", role: "Executive Admin" },
  { name: "Nami", role: "Executive Admin" },
];

const Admins = [
  { name: "Zei", role: "Admin" },
  { name: "Nezu", role: "Admin" },
  { name: "Sauia", role: "Admin" },
  { name: "Liyah", role: "Admin" },
  { name: "Daz", role: "Admin" },
  { name: "Sneako", role: "Admin" },
  { name: "Avi", role: "Admin" },
  { name: "Aji", role: "Admin" },
];

type Person = { name: string; role: string };

function PersonItem({ person, index, delay }: { person: Person; index: number; delay: number }) {
  return (
    <BlurFade
      delay={delay + index * 0.05}
      inView
      blur="10px"
      direction="up"
    >
      <div className="flex flex-col items-center gap-1.5 py-5 px-6 text-center rounded-xl border border-[#a60607]/20 bg-white/40 hover:bg-[#a60607]/5 hover:border-[#a60607]/50 transition-all duration-200">
        <p className="text-sm font-bold tracking-wide text-[#131212]">{person.name}</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a60607]/60">{person.role}</p>
      </div>
    </BlurFade>
  );
}

export default function AdminsPage() {
  return (
    <section
      id="admins"
      className="relative overflow-hidden py-24 min-h-screen px-8"
    >
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-3 text-center mb-14">
          <BlurFade
            delay={0.15}
            inView
            blur="12px"
            direction="up"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#363434] mb-0.5">The Leadership</p>
            <h2 className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal text-4xl md:text-5xl font-semibold font-heading">
              Meet the Team
            </h2>
          </BlurFade>
          <BlurFade
            delay={0.25}
            inView
            blur="12px"
            direction="up"
          >
            <p className="text-sm text-[#363434] max-w-lg leading-relaxed tracking-wide">
              The dedicated leaders who built and guide NLU — united by passion and driven by purpose.
            </p>
          </BlurFade>
        </div>

        <div className="flex justify-center mb-12">
          {Founder.map((founder, i) => (
            <BlurFade
              key={i}
              delay={0.35}
              inView
              blur="12px"
              direction="up"
            >
              <div className="flex flex-col items-center gap-2 py-7 px-16 text-center rounded-2xl border border-amber-400/40 bg-amber-50/30 hover:bg-amber-50/60 hover:border-amber-400/70 transition-all duration-200">
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-amber-600/70">Founder</span>
                <p className="text-xl font-extrabold tracking-widest text-[#131212] font-heading">{founder.name}</p>
              </div>
            </BlurFade>
          ))}
        </div>

        <BlurFade
          delay={0.5}
          inView
          blur="10px"
          direction="up"
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#a60607]/60 mb-5">
            Executive Leadership
          </p>
        </BlurFade>

        <div className="grid grid-cols-12 gap-3 mb-12">
          {ExecAdmin.map((exec, i) => (
            <div
              key={i}
              className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ${i === 4 ? "lg:col-start-4" : ""}`}
            >
              <PersonItem
                person={exec}
                index={i}
                delay={0.55}
              />
            </div>
          ))}
        </div>

        <BlurFade
          delay={0.7}
          inView
          blur="10px"
          direction="up"
        >
          <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-[#a60607]/60 mb-5">Admins</p>
        </BlurFade>

        <div className="grid grid-cols-12 gap-3">
          {Admins.map((admin, i) => (
            <div
              key={i}
              className={`col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 ${i === 6 ? "md:col-start-3 lg:col-start-auto" : ""}`}
            >
              <PersonItem
                person={admin}
                index={i}
                delay={0.75}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
