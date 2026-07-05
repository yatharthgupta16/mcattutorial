import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Struggle } from "./components/Struggle";
import { Program } from "./components/Program";
import { HowItWorks } from "./components/HowItWorks";
import { Comparison } from "./components/Comparison";
import { Faq } from "./components/Faq";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Struggle />
        <Program />
        <HowItWorks />
        <Comparison />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
