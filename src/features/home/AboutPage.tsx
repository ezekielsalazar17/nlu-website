import { BlurFade } from "@/src/components/ui/blur-fade";
import { Flower, Gift, Rainbow, UsersRound } from "lucide-react";

const AboutUs = [
  {
    title: "Women-Led Community",
    description:
      "A community built by women, fostering a safe and empowering space for individuals across all backgrounds. NLU proudly embraces its identity, breaking stereotypes through strong leadership, resilience, and unity.",
    icon: (
      <Flower
        width={40}
        height={40}
        color="#a60607"
      />
    ),
  },
  {
    title: "Player-Friendly Environment",
    description:
      "A welcoming hub for gamers and streamers from Call of Duty Mobile, Valorant, Apex Legends, and Mobile Legends. NLU promotes not only competitive skill but also a supportive environment where every player can grow, connect, and truly belong.",
    icon: (
      <UsersRound
        height={40}
        width={40}
        color="#a60607"
      />
    ),
  },
  {
    title: "Exciting Giveaways & Challenges",
    description:
      "NLU keeps the community alive with regular giveaways, tournaments, and fun challenges. Whether you're here to compete or just enjoy the vibe, there's always something to look forward to—rewarding both skill and participation.",
    icon: (
      <Gift
        height={40}
        width={40}
        color="#a60607"
      />
    ),
  },
  {
    title: "Inclusive & LGBTQI+ Friendly",
    description:
      "Diversity is at the heart of NLU. We are a proud LGBTQI+ friendly community that values respect, acceptance, and authenticity. Everyone is welcome here—regardless of identity—creating a safe space where people can be themselves without fear.",
    icon: (
      <Rainbow
        height={40}
        width={40}
        color="#a60607"
      />
    ),
  },
];

export default function AboutPage() {
  return (
    <div
      id="about"
      className="mx-auto max-w-6xl py-24 px-8 min-h-screen"
    >
      <div className="flex flex-col gap-12">
        <div className="text-center gap-8">
          <BlurFade
            delay={0.15}
            inView
            blur="12px"
            direction="up"
          >
            <h1 className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal text-4xl md:text-5xl font-semibold font-heading">
              Why Choose NLU?
            </h1>
          </BlurFade>
          <BlurFade
            delay={0.25}
            inView
            blur="12px"
            direction="up"
          >
            <p className="text-[#363434] mt-4">
              A community that was made by women that ensures a safe space for individuals in different categories,
              braving the odds of external and internal struggles, NLU showing its pink color as to prove that our
              community is being governed by women with great efficiency breaking the stereotype. We stand today as a
              proud community always striving for greatness and camaraderie.
            </p>
          </BlurFade>
        </div>

        <BlurFade
          delay={0.35}
          inView
          blur="12px"
          direction="up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AboutUs.map((about, i) => (
              <div
                key={i}
                className="group rounded-xl border border-[#a60607]/40 p-8 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(237,4,4,0.12)] hover:border-[#a60607] bg-white/60 backdrop-blur-sm"
              >
                <div className="flex flex-col gap-4">
                  <div className="transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 inline-flex w-fit">
                    {about.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="flex items-start text-2xl font-extrabold text-[#a60607] font-heading tracking-wide">
                      {about.title}
                    </h1>
                    <p className="wrap-break-word w-full text-[#363434] leading-relaxed">{about.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </BlurFade>
      </div>
    </div>
  );
}
