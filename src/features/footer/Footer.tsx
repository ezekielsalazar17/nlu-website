import Image from "next/image";
import Logo from "@/src/assets/nlulogo.png";

type TPlatforms = {
  src: string;
  alt: string;
  href: string;
};

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Jersey", href: "#jersey" },
  { label: "Admins", href: "#admins" },
  { label: "Members", href: "#members" },
];

const footerActions = [
  { label: "Buy Jersey", href: "#jersey" },
  { label: "Contact Us", href: "#contact" },
];

const Platforms: TPlatforms[] = [
  {
    src: "https://thesvg.org/icons/facebook/default.svg",
    alt: "facebook-nlu",
    href: "https://www.facebook.com/NLUCommunityyy",
  },
  {
    src: "https://thesvg.org/icons/instagram/default.svg",
    alt: "instagram-nlu",
    href: "https://www.instagram.com/nlu.community?igsh=dnBpYzYzdmd2YTIx",
  },
  {
    src: "https://thesvg.org/icons/discord/default.svg",
    alt: "discord-nlu",
    href: "",
  },
  {
    src: "https://thesvg.org/icons/tiktok/default.svg",
    alt: "tiktok-nlu",
    href: "https://www.tiktok.com/@nlu_community?_r=1&_t=ZS-94wlb7b9TJU",
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white">
      <div className="max-w-6xl mx-auto px-8 py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="flex flex-col gap-4 max-w-xs">
            <div className="flex items-center gap-3">
              <Image
                src={Logo}
                alt="NLU Logo"
                width={56}
                height={56}
              />
              <div>
                <p className="text-xl font-extrabold bg-linear-to-b from-[#ED0404] to-[#9B0202] bg-clip-text text-transparent font-heading">
                  Nos Ludere Ut
                </p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Gaming Community · CODM</p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Building connections through competition. A community for CODM players who play to grow.
            </p>
            <div className="w-fit gap-4 flex flex-row items-center justify-start">
              {Platforms.map((platform, i) => (
                <div
                  key={i}
                  className="border border-white/10 rounded-lg w-fit p-2 cursor-pointer hover:border-[#a60607]/50"
                >
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={platform.src}
                      alt={platform.alt}
                      width={24}
                      height={24}
                      style={{ width: 24, height: 24 }}
                      unoptimized
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white/60 text-xs uppercase tracking-wider mb-1">Navigation</p>
            {footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/40 hover:text-[#ED0404] transition-colors duration-200 text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-semibold text-white/60 text-xs uppercase tracking-wider mb-1">Get Involved</p>
            {footerActions.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white/40 hover:text-[#ED0404] transition-colors duration-200 text-sm"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/8 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-white/25 text-xs">© 2025 Nos Ludere Ut. All rights reserved.</p>
          <p className="text-white/20 text-xs">Made with passion for the game.</p>
        </div>
      </div>
    </footer>
  );
}
