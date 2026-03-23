"use client";

import Image from "next/image";
import Logo from "@/public/nlulogo.png";
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
        className="block lg:hidden fixed top-4 right-4 border border-black/20 p-2 rounded-md z-[60] cursor-pointer sm:block"
      >
        <div className="relative w-6 h-6 flex items-center">
          <AnimatePresence
            mode="wait"
            initial={false}
          >
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
            className="fixed bottom-0 left-0 right-0 z-50 block md:flex lg:hidden flex-col bg-white rounded-t-2xl shadow-xl"
          >
            <div className="flex items-center justify-center px-6 py-4 border-b border-black/10">
              <Image
                src={Logo}
                alt="nlu-logo"
                width={60}
                height={60}
              />
              <Typography
                variant="h3"
                className=" bg-linear-to-b from-[#a60607] via-[#a60607] to-black bg-clip-text text-transparent tracking-normal leading-normal text-2xl font-extrabold"
              >
                Nos Ludere Ut
              </Typography>
            </div>

            <nav className="flex flex-col gap-3 p-6">
              {SheetNav.map((nav, i) => (
                <motion.a
                  key={i}
                  href={nav.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                  className="text-lg font-medium py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors w-full items-center justify-center flex border border-black/10 gap-2 flex-col"
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
                <Button className="p-6 w-full">Contact Us</Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
