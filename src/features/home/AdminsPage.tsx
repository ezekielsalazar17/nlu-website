import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/ui/section-header";
import { Crown } from "lucide-react";

const Founder = { name: "Kai Watts", role: "Founder" };

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
      <div className="group flex flex-col items-center gap-1.5 rounded-xl border border-[#a60607]/15 bg-white/50 px-6 py-5 text-center backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#a60607]/45 hover:bg-white hover:shadow-[0_16px_30px_-14px_rgba(237,4,4,0.22)]">
        <p className="text-sm font-bold tracking-wide text-[#131212]">{person.name}</p>
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#a60607]/60">{person.role}</p>
      </div>
    </BlurFade>
  );
}

function GroupLabel({ children }: { children: React.ReactNode }) {
  return (
    <BlurFade
      inView
      blur="10px"
      direction="up"
    >
      <div className="mb-6 flex items-center justify-center gap-3">
        <span className="h-px w-8 bg-linear-to-r from-transparent to-[#a60607]/50" />
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#a60607]/70">{children}</p>
        <span className="h-px w-8 bg-linear-to-l from-transparent to-[#a60607]/50" />
      </div>
    </BlurFade>
  );
}

export default function AdminsPage() {
  return (
    <section
      id="admins"
      className="relative min-h-screen overflow-hidden px-6 py-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Leadership"
          title="The people behind NLU."
          description="The dedicated leaders who built and guide the community — united by passion and driven by purpose."
          className="mb-16"
        />

        {/* Founder */}
        <div className="mb-16 flex justify-center">
          <BlurFade
            delay={0.35}
            inView
            blur="12px"
            direction="up"
          >
            <div className="group relative flex flex-col items-center gap-3 overflow-hidden rounded-2xl border border-[#a60607]/30 bg-linear-to-b from-[#a60607]/[0.07] to-white/40 px-16 py-8 text-center shadow-[0_20px_50px_-20px_rgba(237,4,4,0.28)] backdrop-blur-sm">
              <span className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#ED0404] to-transparent" />
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#a60607]/30 bg-[#a60607]/[0.08] text-[#a60607]">
                <Crown
                  width={20}
                  height={20}
                />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#a60607]/70">Founder</span>
              <p className="font-heading text-2xl font-extrabold tracking-widest text-[#131212]">{Founder.name}</p>
            </div>
          </BlurFade>
        </div>

        {/* Executive Admins */}
        <GroupLabel>Executive Leadership</GroupLabel>
        <div className="mb-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {ExecAdmin.map((exec, i) => (
            <PersonItem
              key={exec.name}
              person={exec}
              index={i}
              delay={0.4}
            />
          ))}
        </div>

        {/* Admins */}
        <GroupLabel>Admins</GroupLabel>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {Admins.map((admin, i) => (
            <PersonItem
              key={admin.name}
              person={admin}
              index={i}
              delay={0.5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
