import TestImage from "@/src/assets/testimage.jpg";
import { BlurFade } from "@/src/components/ui/blur-fade";
import Image from "next/image";

const Founder = [
  {
    name: "Kai Watts",
    position: "Founder",
    role: "Founder",
    img: TestImage,
  },
];

const Admins = [
  {
    name: "Zei Watts",
    position: "Admin",
    role: "GC Admin",
    img: TestImage,
  },
  {
    name: "Zafiyah Watts",
    position: "Admin",
    role: "Moderator",
    img: TestImage,
  },
  {
    name: "Sauia Watts",
    position: "Admin",
    role: "Hiring Moderator",
    img: TestImage,
  },
  {
    name: "Liyah Watts",
    position: "Admin",
    role: "Hiring Moderator",
    img: TestImage,
  },
  { name: "Daz Watts", position: "Admin", role: "Moderator", img: TestImage },
  { name: "Sniko Watts", position: "Admin", role: "Moderator", img: TestImage },
  { name: "Avi Watts", position: "Admin", role: "Moderator", img: TestImage },
  { name: "Rory Watts", position: "Admin", role: "Moderator", img: TestImage },
];

export default function AdminsPage() {
  return (
    <div id="admins" className="mx-auto max-w-6xl px-8 min-h-screen py-24">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col items-center gap-3 text-center">
          <BlurFade delay={0.25} inView blur="12px" direction="up">
            <h1 className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-widest leading-normal text-4xl md:text-5xl font-semibold">
              Meet the team behind NLU
            </h1>
          </BlurFade>

          <div
            className="w-16 h-0.5 mt-1"
            style={{
              background:
                "linear-gradient(to right, transparent, #a60607, transparent)",
            }}
          />
        </div>

        <div className="flex justify-center">
          {Founder.map((founder, i) => (
            <div key={i} className="relative">
              <div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-25 animate-pulse-glow -z-10"
                style={{
                  background:
                    "radial-gradient(ellipse at center, #a60607 0%, transparent 70%)",
                }}
              />

              <BlurFade delay={0.5} inView blur="12px" direction="up">
                <div
                  className="p-0.5 rounded-2xl"
                  style={{
                    background: "linear-gradient(to bottom, #a60607, #1a0000)",
                    boxShadow:
                      "0 0 30px rgba(166,6,7,0.2), 0 16px 40px rgba(0,0,0,0.08)",
                  }}
                >
                  <div className="bg-white rounded-2xl flex flex-col overflow-hidden w-70">
                    <div className="w-full overflow-hidden">
                      <Image
                        src={founder.img}
                        alt={founder.name}
                        width={224}
                        height={200}
                        className="w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-1 p-4 w-full">
                      <span
                        className="px-3 py-0.5 text-xs font-bold uppercase tracking-widest rounded-full text-[#a60607] mb-1"
                        style={{ background: "rgba(166,6,7,0.08)" }}
                      >
                        🟡 Founder
                      </span>
                      <p className="text-sm font-bold tracking-wide">
                        {founder.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                </div>
              </BlurFade>
            </div>
          ))}
        </div>
        <BlurFade delay={0.75} inView blur="12px" direction="up">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 justify-items-center">
            {Admins.map((admin, i) => (
              <div
                key={i}
                className="group admin-card flex flex-col rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 border border-[#a60607]/20 w-full max-w-60"
              >
                <div className="w-full overflow-hidden">
                  <Image
                    src={admin.img}
                    alt={admin.name}
                    width={200}
                    height={180}
                    className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col items-center gap-1 p-4 w-full">
                  <span
                    className="px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider rounded-full text-[#a60607] mb-1"
                    style={{ background: "rgba(166,6,7,0.08)" }}
                  >
                    🔴 Admin
                  </span>
                  <p className="text-sm font-bold tracking-wide text-center">
                    {admin.name}
                  </p>
                  <p className="text-xs text-muted-foreground text-center">
                    {admin.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
