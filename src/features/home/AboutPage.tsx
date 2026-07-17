import { BlurFade } from "@/components/ui/blur-fade";
import { SectionHeader } from "@/components/ui/section-header";
import { Flower, Gift, Rainbow, UsersRound } from "lucide-react";

const AboutUs = [
  {
    title: "Women-Led at the Core",
    description:
      "Built and led by women — a safe, empowering space that breaks the stereotype through resilience, strong leadership, and unshakeable unity.",
    icon: UsersRound,
  },
  {
    title: "A Home for Every Player",
    description:
      "A welcoming hub across Call of Duty Mobile, Valorant, Apex Legends, and Mobile Legends — where competitive drive and genuine support grow side by side.",
    icon: Flower,
  },
  {
    title: "Always Something Happening",
    description:
      "Regular giveaways, tournaments, and challenges keep the community alive — rewarding both skill and simply showing up for each other.",
    icon: Gift,
  },
  {
    title: "Everyone Belongs Here",
    description:
      "Proudly LGBTQI+ friendly. Diversity is our heartbeat — respect, acceptance, and authenticity mean you can be yourself, without fear.",
    icon: Rainbow,
  },
];

export default function AboutPage() {
  return (
    <div
      id="about"
      className="relative mx-auto min-h-screen max-w-6xl px-6 py-28"
    >
      <SectionHeader
        eyebrow="Why NLU"
        title="More than a roster."
        description="NLU began as a women-led community braving the odds — and grew into a space governed with heart and efficiency. We stand today striving for greatness and camaraderie in equal measure."
      />

      <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
        {AboutUs.map((about, i) => {
          const Icon = about.icon;
          return (
            <BlurFade
              key={about.title}
              delay={0.3 + i * 0.08}
              inView
              blur="12px"
              direction="up"
            >
              <div className="group relative flex h-full flex-col gap-5 overflow-hidden rounded-2xl border border-[#a60607]/15 bg-white/60 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a60607]/45 hover:shadow-[0_24px_50px_-12px_rgba(237,4,4,0.18)]">
                {/* top accent line reveals on hover */}
                <span className="absolute inset-x-0 top-0 h-px w-full origin-left scale-x-0 bg-linear-to-r from-transparent via-[#ED0404] to-transparent transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex items-center justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#a60607]/20 bg-[#a60607]/[0.06] text-[#a60607] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#a60607] group-hover:text-white">
                    <Icon
                      width={26}
                      height={26}
                    />
                  </div>
                  <span className="font-heading text-5xl font-bold leading-none text-[#a60607]/10 transition-colors duration-300 group-hover:text-[#a60607]/20">
                    0{i + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-2.5">
                  <h3 className="font-heading text-xl font-extrabold tracking-wide text-[#131212] sm:text-2xl">
                    {about.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#4a4645]">{about.description}</p>
                </div>
              </div>
            </BlurFade>
          );
        })}
      </div>
    </div>
  );
}
