import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import PriceList from "@/components/PriceList";
import Gallery from "@/components/Gallery";
import WhyUs from "@/components/WhyUs";
import InstagramSection from "@/components/Instagram";
import Contact from "@/components/Contact";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <PriceList />
        <Gallery />
        <WhyUs />
        <InstagramSection />
        <Contact />
        <Location />
      </main>
      <Footer />
    </>
  );
}
