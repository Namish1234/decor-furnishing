import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background overflow-hidden">
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <Reviews />
      <Footer />
    </main>
  );
}
