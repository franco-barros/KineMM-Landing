import Hero from "../components/hero";
import AboutMe from "../components/aboutme";
import { FAQSection } from "../components/FAQsection";
import { Studies } from "../components/studies";
import Services from "../components/service";
import { ProfessionalReview } from "../components/professionalreview";
import WhatsappButton from "../components/utils/whatsappbutton";
import BackToTopButton from "../components/utils/backtotopbutton";

export default function Home() {
  return (
    <div>
      <main>
        <Hero />
        <Services />
        <AboutMe />
        <Studies />
        <FAQSection />
        <ProfessionalReview />
        <WhatsappButton phoneNumber="5491123456789" />
        <BackToTopButton />
      </main>
    </div>
  );
}
