import Hero from "../components/hero";
import AboutMe from "../components/aboutme";
import { FAQSection } from "../components/FAQsection";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <AboutMe />
        <FAQSection />
      </main>
    </div>
  );
}
