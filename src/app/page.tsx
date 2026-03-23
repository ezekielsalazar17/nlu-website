import Image from "next/image";
import HomePage from "../features/home/HomePage";
import Navigation from "../features/nav/Navigation";
import AboutPage from "../features/home/AboutPage";
import Jersey from "../features/home/JerseyPage";
import Footer from "../features/footer/Footer";
import BG from "../assets/bg.png";
import AdminsPage from "../features/home/AdminsPage";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 top-0 h-screen -z-20">
        <Image src={BG} alt="bg-nlu" fill className="object-cover" priority />
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
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-white pointer-events-none" />
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
      </main>
      <Footer />
    </div>
  );
}
