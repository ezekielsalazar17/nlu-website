import Image from "next/image";
import HomePage from "../features/home/HomePage";
import Navigation from "../features/nav/Navigation";
import AboutPage from "../features/home/AboutPage";
import Jersey from "../features/home/JerseyPage";
import Footer from "../features/footer/Footer";
import AdminsPage from "../features/home/AdminsPage";
import MembersPage from "../features/home/MembersPage";
import ContactPage from "../features/home/ContactPage";

import BG from "@/assets/bg.png";
import BGRed from "@/assets/bg-red.png";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-screen -z-20">
        <Image
          src={BG}
          alt="bg-nlu"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="fixed top-32 -left-24 w-125 h-125 rounded-full bg-[#ED0404]/10 blur-[140px] pointer-events-none -z-10 animate-pulse-glow" />
      <div
        className="fixed bottom-10 -right-24 w-112.5 h-112.5 rounded-full bg-[#9B0202]/8 blur-[120px] pointer-events-none -z-10 animate-pulse-glow"
        style={{ animationDelay: "3s" }}
      />

      <div className="mx-auto max-w-6xl px-4">
        <Navigation />
      </div>
      <main className="relative">
        <section className="relative">
          <HomePage />
        </section>
        <section>
          <AboutPage />
        </section>
        <section>
          <Jersey />
        </section>
        <section>
          <AdminsPage />
        </section>
        <section>
          <MembersPage />
        </section>
        <section className="relative">
          <div className="absolute inset-x-0 top-0 h-screen -z-20">
            <Image
              src={BGRed}
              alt="BG in contact page"
              fill
              className="object-cover"
              priority
            />
          </div>
          <ContactPage />
        </section>
      </main>
      <Footer />
    </div>
  );
}
