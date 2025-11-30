import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Statistics from "@/components/Statistics";
import Team from "@/components/Team";
import References from "@/components/References";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <Team />
      <References />
      <ContactForm />
      <Footer />
    </main>
  );
}

