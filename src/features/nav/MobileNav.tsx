"use client";

import Image from "next/image";
import Logo from "@/src/assets/nlulogo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "@/src/components/ui/typography";

const SheetNav = [
  {
    title: "Home",
    url: "#/",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Jersey",
    url: "#jersey",
  },
  {
    title: "Admins",
    url: "#admins",
  },
  {
    title: "Members",
    url: "#members",
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex w-full justify-between h-20">
      <div className="flex lg:hidden z-[60] gap-0 relative">
        <Image
          src={Logo}
          alt="nlu-logo"
          width={70}
          height={70}
        />
        <div className="flex flex-col justify-center">
          <Typography
            variant="small"
            className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-none text-md font-extrabold"
          >
            Nos
          </Typography>
          <Typography
            variant="small"
            className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-none text-md font-extrabold"
          >
            Ludere
          </Typography>
          <Typography
            variant="small"
            className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-none text-md font-extrabold"
          >
            Ut
          </Typography>
        </div>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="block lg:hidden fixed top-4 right-4 border border-black/20 p-2 rounded-md z-[60] cursor-pointer sm:block bg-white/50"
      >
        <div className="relative w-6 h-6 flex items-center">
          <AnimatePresence mode="wait">
            {open ? (
              <motion.div
                key="x"
                initial={{ opacity: 0, rotate: -90, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, rotate: 90, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: -90, scale: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 block lg:hidden bg-black/40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "tween", damping: 10, stiffness: 300 }}
            className="fixed bottom-0 left-0 right-0 z-50 block md:flex lg:hidden flex-col bg-white/95 backdrop-blur-xl rounded-t-2xl shadow-[0_-8px_40px_rgba(0,0,0,0.15)]"
          >
            <div className="flex justify-center pt-3 pb-1">
              <div className="w-10 h-1 rounded-full bg-black/20" />
            </div>

            <div className="flex items-center justify-center gap-3 px-6 py-4 border-b border-black/8">
              <Image
                src={Logo}
                alt="nlu-logo"
                width={52}
                height={52}
              />
              <Typography
                variant="h3"
                className="bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal text-2xl font-extrabold"
              >
                Nos Ludere Ut
              </Typography>
            </div>

            <nav className="flex flex-col gap-2 p-5">
              {SheetNav.map((nav, i) => (
                <motion.a
                  key={i}
                  href={nav.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  className="text-base font-semibold py-3 px-4 rounded-xl hover:bg-[#a60607]/8 hover:text-[#a60607] transition-all duration-200 w-full items-center justify-center flex border border-black/8 hover:border-[#a60607]/30"
                  onClick={() => setOpen(false)}
                >
                  {nav.title}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + 4 * 0.05, duration: 0.3 }}
              >
                <Button className="p-6 w-full rounded-xl bg-linear-to-r from-[#ED0404] to-[#9B0202] hover:from-[#FF4D4D] hover:to-[#ED0404] border-0 shadow-[0_0_15px_rgba(237,4,4,0.3)] transition-all duration-300">
                  <a href="#contact">Contact Us</a>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
