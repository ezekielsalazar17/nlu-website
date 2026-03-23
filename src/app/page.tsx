import Image from "next/image";
import HomePage from "../features/home/HomePage";
import Navigation from "../features/nav/Navigation";
import AboutPage from "../features/home/AboutPage";
import Jersey from "../features/home/JerseyPage";
import Footer from "../features/footer/Footer";
import BG from "../assets/bg.png";

export default function Home() {
  return (
    <div className="relative max-h-screen">
      <Image
        src={BG}
        alt="bg-nlu"
        fill
        className="object-cover -z-10"
        priority
      />
      <div className="mx-auto max-w-6xl px-4">
        <Navigation />
      </div>
      <main className="relative">
        <section className="relative">
          <HomePage />
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-b from-transparent to-white pointer-events-none" />
        </section>
        <section>
          <AboutPage />
        </section>
        <section>
          <Jersey />
        </section>
      </main>
      <Footer />
    </div>
  );
}
