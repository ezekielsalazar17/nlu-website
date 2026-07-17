"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { useEffect, useState } from "react";

import { SectionHeader } from "@/components/ui/section-header";
import Laude from "@/assets/laude.jpg";
import Sbia from "@/assets/sbia.jpg";
import Velle from "@/assets/velle.jpg";
import Ignis from "@/assets/ignis.jpg";

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
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl"
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
          className="absolute left-0 right-0 top-0 z-20 h-0.5"
          style={{
            background:
              "linear-gradient(to right, transparent 0%, #a60607 30%, #ff3333 50%, #a60607 70%, transparent 100%)",
          }}
        />

        <div className="relative h-100 w-full overflow-hidden">
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
              className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-white/90"
              style={{ background: "rgba(166,6,7,0.65)", border: "1px solid rgba(166,6,7,0.8)" }}
            >
              {team.meaning}
            </span>
          </div>
          <button
            onClick={onClose}
            className="absolute right-4 top-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full transition-colors duration-150 hover:bg-black/10"
            style={{ background: "rgba(255,255,255,0.75)", border: "1px solid rgba(0,0,0,0.08)" }}
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
              <line x1="1" y1="1" x2="11" y2="11" />
              <line x1="11" y1="1" x2="1" y2="11" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4 px-7 py-6">
          <div
            className="h-0.5 w-10 rounded-full"
            style={{ background: "linear-gradient(to right, #a60607, rgba(166,6,7,0.2))" }}
          />
          <h2 className="font-heading text-3xl font-bold tracking-wide text-gray-900">{team.name}</h2>
          <p className="text-sm leading-relaxed text-[#363434]">{team.description}</p>
          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(to right, rgba(166,6,7,0.2), transparent)" }}
          />
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-400">NLU Squad</span>
            <button
              onClick={onClose}
              className="cursor-pointer text-[11px] font-semibold uppercase tracking-widest text-gray-400 transition-colors duration-150 hover:text-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MemberCard({ team, index, onClick }: { team: Team; index: number; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="group relative h-80 w-full overflow-hidden rounded-[1.75rem] text-left md:h-[24rem]"
    >
      <Image
        src={team.img}
        alt={team.name}
        fill
        className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.07]"
        sizes="(max-width: 768px) 100vw, 60vw"
      />
      {/* legibility gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/25 to-transparent" />
      <div className="absolute inset-0 bg-linear-to-tr from-[#9B0202]/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* meaning badge */}
      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-black/35 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/90 backdrop-blur-sm">
        {team.meaning}
      </span>

      {/* bottom content */}
      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-6">
        <span className="h-0.5 w-8 rounded-full bg-[#ED0404] transition-all duration-300 group-hover:w-12" />
        <h3 className="font-heading text-3xl font-bold tracking-wide text-white drop-shadow-sm sm:text-4xl">
          {team.name}
        </h3>
        <p className="max-w-md text-sm leading-relaxed text-white/70 opacity-0 transition-all duration-300 group-hover:opacity-100 lg:translate-y-2 lg:group-hover:translate-y-0">
          {team.description}
        </p>
        <span className="mt-1 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#FF7676] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          View squad
          <span aria-hidden>→</span>
        </span>
      </div>

      {/* hover ring */}
      <div className="pointer-events-none absolute inset-0 rounded-[1.75rem] opacity-0 ring-2 ring-inset ring-[#ED0404]/40 transition-opacity duration-200 group-hover:opacity-100" />
    </motion.button>
  );
}

export default function MembersPage() {
  const [selected, setSelected] = useState<Team | null>(null);

  return (
    <>
      <div
        id="members"
        className="relative min-h-screen overflow-hidden px-6 py-28"
      >
        <div className="relative z-10 mx-auto max-w-6xl">
          <SectionHeader
            eyebrow="The Squads"
            title="Four names. One family."
            description="A diverse, united, and passionate gaming community — forged by shared purpose and bound by an unbreakable spirit. Meet the squads that carry the NLU name."
            className="mb-16"
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
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

      <AnimatePresence>{selected && <TeamModal team={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </>
  );
}
