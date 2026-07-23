import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FloatingForm from "@/components/FloatingForm";
import SuccessStories from "@/components/SuccessStories";
import Timeline from "@/components/Timeline";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <FloatingForm />
      <SuccessStories />
      <Timeline />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
