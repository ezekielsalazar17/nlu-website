"use client";

import { BlurFade } from "@/src/components/ui/blur-fade";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { StaticImageData } from "next/image";
import Laude from "@/src/assets/laude.jpg";
import Sbia from "@/src/assets/sbia.jpg";
import Velle from "@/src/assets/velle.jpg";
import Ignis from "@/src/assets/ignis.jpg";

type Team = {
  name: string;
  meaning: string;
  description: string;
  img: StaticImageData;
};

const teams: Team[] = [
  {
    name: "Laude",
    meaning: "Honor",
    description: "Symbolizes excellence, discipline, and the relentless pursuit of achievement in every battle.",
    img: Laude,
  },
  {
    name: "Superbia",
    meaning: "Pride",
    description: "Embodies confidence, identity, and the boldness to stand tall with unwavering conviction.",
    img: Sbia,
  },
  {
    name: "Velle",
    meaning: "Wished",
    description: "Represents the aspirations and dreams that every member carries — a vision that unites us forward.",
    img: Velle,
  },
  {
    name: "Ignis",
    meaning: "Fire",
    description: "Represents passion, energy, and an unstoppable drive that fuels every squad on the field.",
    img: Ignis,
  },
];

function TeamModal({ team, onClose }: { team: Team; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-100 flex items-center justify-center px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.12 }}
      onClick={onClose}
    >
      <div
        className="absolute inset-0"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(10px)" }}
      />

      <motion.div
        className="relative z-10 w-full max-w-2xl rounded-3xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.93, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 8 }}
        transition={{ duration: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.97) 0%, rgba(253,248,248,0.99) 100%)",
          border: "1px solid rgba(166,6,7,0.15)",
          boxShadow: "0 40px 100px rgba(0,0,0,0.18), 0 0 0 1px rgba(166,6,7,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
        }}
      >
        <div
          className="absolute top-0 left-0 right-0 h-0.5 z-20"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #a60607 30%, #ff3333 50%, #a60607 70%, transparent 100%)",
          }}
        />

        <div className="relative w-full h-100 overflow-hidden">
          <Image
            src={team.img}
            alt={team.name}
            fill
            className="object-center"
            sizes="(max-width: 640px) 100vw, 512px"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          <div className="absolute bottom-4 left-5">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/90 px-3 py-1 rounded-full"
              style={{
                background: "rgba(166,6,7,0.65)",
                border: "1px solid rgba(166,6,7,0.8)",
              }}
            >
              {team.meaning}
            </span>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 flex items-center justify-center w-8 h-8 rounded-full cursor-pointer hover:bg-black/10 transition-colors duration-150"
            style={{
              background: "rgba(255,255,255,0.75)",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
            aria-label="Close"
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              stroke="rgba(0,0,0,0.55)"
              strokeWidth="1.8"
              strokeLinecap="round"
            >
              <line
                x1="1"
                y1="1"
                x2="11"
                y2="11"
              />
              <line
                x1="11"
                y1="1"
                x2="1"
                y2="11"
              />
            </svg>
          </button>
        </div>

        <div className="px-7 py-6 flex flex-col gap-4">
          <div
            className="w-10 h-0.5 rounded-full"
            style={{ background: "linear-gradient(to right, #a60607, rgba(166,6,7,0.2))" }}
          />

          <div className="flex items-baseline gap-3">
            <h2 className="text-3xl font-bold tracking-wide text-gray-900 font-heading">{team.name}</h2>
          </div>

          <p className="text-sm text-[#363434] leading-relaxed">{team.description}</p>

          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(to right, rgba(166,6,7,0.2), transparent)" }}
          />

          <div className="flex items-center justify-between">
            <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium">NLU Team</span>
            <button
              onClick={onClose}
              className="text-[11px] font-semibold text-gray-400 hover:text-gray-700 transition-colors duration-150 cursor-pointer uppercase tracking-widest"
            >
              Close
            </button>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background: "linear-gradient(to right, transparent, rgba(166,6,7,0.25), transparent)",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

function MemberCard({ team, index, onClick }: { team: Team; index: number; onClick: () => void }) {
  return (
    <BlurFade
      delay={0.3 + index * 0.08}
      inView
      blur="12px"
      direction="up"
    >
      <motion.button
        type="button"
        onClick={onClick}
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        className="group relative flex flex-col rounded-2xl overflow-hidden w-full h-full text-left cursor-pointer bg-white"
        style={{
          border: "1px solid rgba(0,0,0,0.07)",
          boxShadow: "0 2px 20px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
        }}
      >
        <div
          className="absolute top-0 left-4 right-4 h-px z-10"
          style={{
            background: "linear-gradient(to right, transparent, rgba(166,6,7,0.3), transparent)",
          }}
        />

        <div className="relative w-full h-96 overflow-hidden shrink-0">
          <Image
            src={team.img}
            alt={team.name}
            fill
            className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.08]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />

          <span
            className="absolute bottom-3 left-4 text-[10px] font-bold uppercase tracking-[0.18em] text-white/90 px-2.5 py-0.5 rounded-full"
            style={{
              background: "rgba(166,6,7,0.65)",
              border: "1px solid rgba(166,6,7,0.8)",
            }}
          >
            {team.meaning}
          </span>
        </div>

        <div className="flex flex-col gap-2.5 p-5 flex-1">
          <div
            className="w-7 h-0.5 rounded-full transition-[width] duration-200 ease-out group-hover:w-11"
            style={{ background: "linear-gradient(to right, #a60607, rgba(166,6,7,0.2))" }}
          />
          <h3 className="text-xl font-bold tracking-wide text-gray-900 font-heading">{team.name}</h3>
          <p className="text-sm text-[#363434] leading-relaxed">{team.description}</p>
        </div>

        <div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
          style={{ boxShadow: "inset 0 0 0 1.5px rgba(166,6,7,0.3)" }}
        />
      </motion.button>
    </BlurFade>
  );
}

export default function MembersPage() {
  const [selected, setSelected] = useState<Team | null>(null);

  return (
    <>
      <div
        id="members"
        className="relative overflow-hidden py-24 min-h-screen px-8 items-center justify-center"
      >
        <div className="absolute inset-0 pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center gap-3 text-center mb-14">
            <BlurFade
              delay={0.15}
              inView
              blur="12px"
              direction="up"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#363434] mb-0.5">
                The Community
              </p>
              <h2 className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-widest text-4xl md:text-5xl font-semibold font-heading">
                Our Members
              </h2>
            </BlurFade>

            <BlurFade
              delay={0.22}
              inView
              blur="12px"
              direction="up"
            >
              <div className="flex items-center gap-3">
                <div
                  className="h-px w-14"
                  style={{ background: "linear-gradient(to right, transparent, rgba(166,6,7,0.35))" }}
                />
                <div
                  className="w-1.5 h-1.5 rounded-full bg-[#a60607]"
                  style={{ boxShadow: "0 0 8px rgba(166,6,7,0.6)" }}
                />
                <div
                  className="h-px w-14"
                  style={{ background: "linear-gradient(to left, transparent, rgba(166,6,7,0.35))" }}
                />
              </div>
            </BlurFade>

            <BlurFade
              delay={0.28}
              inView
              blur="12px"
              direction="up"
            >
              <p className="text-sm text-[#363434] max-w-xl leading-relaxed tracking-widest">
                A diverse, united, and passionate gaming community — forged by shared purpose and bound by an
                unbreakable spirit.
              </p>
            </BlurFade>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {teams.map((team, i) => (
              <MemberCard
                key={team.name}
                team={team}
                index={i}
                onClick={() => setSelected(team)}
              />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <TeamModal
            team={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
