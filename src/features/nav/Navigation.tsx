"use client";

import Logo from "@/src/assets/nlulogo.png";
import { Button } from "@/src/components/ui/button";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Jersey", href: "#jersey", id: "jersey" },
  { label: "Admins", href: "#admins", id: "admins" },
  { label: "Members", href: "#members", id: "members" },
];

export default function Navigation() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["admins", "jersey", "about", "home", "members"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          return;
        }
      }
      setActive("home");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="justify-between items-center bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_rgba(0,0,0,0.08)] mt-4 rounded-2xl px-4 hidden lg:flex transition-all duration-300">
          <div>
            <Image
              src={Logo}
              alt="nlu-logo"
              width={80}
              height={80}
              loading="eager"
            />
          </div>

          <div className="gap-10 flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={[
                  "relative font-bold text-sm py-1 transition-colors duration-200",
                  "after:content-[''] after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:bg-[#ED0404] after:transition-all after:duration-300",
                  active === link.id
                    ? "text-[#a60607] after:w-full"
                    : "text-[#131212] hover:text-[#a60607] after:w-0 hover:after:w-full",
                ].join(" ")}
              >
                {link.label}
              </a>
            ))}
          </div>

          <Button className="px-7 py-5 cursor-pointer rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] hover:from-[#FF4D4D] hover:to-[#ED0404] shadow-[0_0_15px_rgba(237,4,4,0.3)] hover:shadow-[0_0_25px_rgba(237,4,4,0.5)] hover:scale-105 transition-all duration-300">
            <a href="#contact"> Contact Us</a>
          </Button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
