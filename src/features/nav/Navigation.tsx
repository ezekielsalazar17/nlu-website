"use client";

import Logo from "@/assets/nlulogo.png";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Jersey", href: "#jersey", id: "jersey" },
  { label: "Admins", href: "#admins", id: "admins" },
  { label: "Members", href: "#members", id: "members" },
];

export default function Navigation() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const ids = navLinks.map((l) => l.id);

    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div
          className={cn(
            "hidden items-center justify-between rounded-full border transition-all duration-300 lg:flex",
            scrolled
              ? "mt-2 border-[#a60607]/10 bg-white/90 px-3 py-1.5 shadow-[0_10px_34px_rgba(0,0,0,0.12)] backdrop-blur-xl"
              : "mt-4 border-white/80 bg-white/60 px-3 py-2.5 shadow-[0_4px_24px_rgba(0,0,0,0.06)] backdrop-blur-xl",
          )}
        >
          <a
            href="#home"
            className="flex items-center gap-2 pl-1"
          >
            <Image
              src={Logo}
              alt="nlu-logo"
              width={scrolled ? 44 : 56}
              height={scrolled ? 44 : 56}
              loading="eager"
              className="transition-all duration-300"
            />
            <span className="text-gradient-brand font-heading text-lg font-extrabold leading-none tracking-tight">
              Nos Ludere Ut
            </span>
          </a>

          <div className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-bold transition-colors duration-200"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[#a60607]/10 ring-1 ring-inset ring-[#a60607]/20"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className={isActive ? "text-[#a60607]" : "text-[#131212] hover:text-[#a60607]"}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>

          <Button
            asChild
            className={cn(
              "cursor-pointer rounded-full border-0 bg-linear-to-r from-[#ED0404] to-[#9B0202] shadow-[0_0_15px_rgba(237,4,4,0.3)] transition-all duration-300 hover:scale-105 hover:from-[#FF4D4D] hover:to-[#ED0404] hover:shadow-[0_0_25px_rgba(237,4,4,0.5)]",
              scrolled ? "px-6 py-4.5" : "px-7 py-5",
            )}
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>

      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
