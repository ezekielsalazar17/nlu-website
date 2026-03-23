import Logo from "@/public/nlulogo.png";
import { Button } from "@/src/components/ui/button";
import { Typography } from "@/src/components/ui/typography";
import Image from "next/image";
import MobileNav from "./MobileNav";

export default function Navigation() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="justify-between items-center border border-black/20 backdrop-blur-sm mt-4 rounded-2xl px-2 hidden lg:flex">
          <div>
            <Image
              src={Logo}
              alt="nlu-logo"
              width={80}
              height={80}
              loading="eager"
            />
          </div>
          <div className="gap-12 flex">
            <a href="#home">
              <Typography
                variant="h4"
                className="hover:text-[#a60607] text-[#131212] font-bold"
              >
                Home
              </Typography>
            </a>
            <a href="#about">
              <Typography
                variant="h4"
                className="hover:text-[#a60607] text-[#131212] font-bold"
              >
                About
              </Typography>
            </a>
            <a href="#jersey">
              <Typography
                variant="h4"
                className="hover:text-[#a60607] text-[#131212] font-bold"
              >
                Jersey
              </Typography>
            </a>
            <a href="#admins">
              <Typography
                variant="h4"
                className="hover:text-[#a60607] text-[#131212] font-bold"
              >
                Admins
              </Typography>
            </a>
          </div>
          <Button className="px-7 py-5 cursor-pointer hover:bg-[#cb2b22]">Contact Us</Button>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="block lg:hidden">
        <MobileNav />
      </div>
    </div>
  );
}
