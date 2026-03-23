import { BlurFade } from "@/src/components/ui/blur-fade";
import { LightRays } from "@/src/components/ui/light-rays";
import { UsersRound } from "lucide-react";

const AboutUs = [
  {
    title: "Player Friendly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor sed varius sagittis. Praesent faucibus erat sit amet lorem volutpat tincidunt. Fusce a aliquam nunc, sed varius nunc. Nunc condimentum feugiat ipsum, id pharetra erat vulputate ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    icon: (
      <UsersRound
        height={40}
        width={40}
        color="#a60607"
      />
    ),
  },
  {
    title: "Player Friendly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor sed varius sagittis. Praesent faucibus erat sit amet lorem volutpat tincidunt. Fusce a aliquam nunc, sed varius nunc. Nunc condimentum feugiat ipsum, id pharetra erat vulputate ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    icon: (
      <UsersRound
        height={40}
        width={40}
        color="#a60607"
      />
    ),
  },
  {
    title: "Player Friendly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor sed varius sagittis. Praesent faucibus erat sit amet lorem volutpat tincidunt. Fusce a aliquam nunc, sed varius nunc. Nunc condimentum feugiat ipsum, id pharetra erat vulputate ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    icon: (
      <UsersRound
        height={40}
        width={40}
        color="#a60607"
      />
    ),
  },
  {
    title: "Player Friendly",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor sed varius sagittis. Praesent faucibus erat sit amet lorem volutpat tincidunt. Fusce a aliquam nunc, sed varius nunc. Nunc condimentum feugiat ipsum, id pharetra erat vulputate ut. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    icon: (
      <UsersRound
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
            delay={0.25}
            inView
            blur="12px"
            direction="up"
          >
            <h1 className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal text-4xl md:text-5xl font-semibold">
              Why Choose NLU?
            </h1>
          </BlurFade>
          <BlurFade
            delay={0.5}
            inView
            blur="12px"
            direction="up"
          >
            <p className="text-[#363434]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dictum tortor sed varius sagittis. Praesent
              faucibus erat sit amet lorem volutpat tincidunt. Fusce a aliquam nunc, sed varius nunc. Nunc condimentum
              feugiat ipsum, id pharetra erat vulputate ut. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos.
            </p>
          </BlurFade>
        </div>
        <BlurFade
          delay={0.75}
          inView
          blur="12px"
          direction="up"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {AboutUs.map((about, i) => (
              <div
                key={i}
                className="grid-cols-1 rounded-lg border border-[#a60607]/50 p-8"
              >
                <div className="flex flex-col gap-4">
                  {about.icon}
                  <div className="flex flex-col gap-2">
                    <h1 className="flex items-start text-2xl font-extrabold text-[#a60607]">{about.title}</h1>
                    <p className="break-words w-full text-[#363434]">{about.description}</p>
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
