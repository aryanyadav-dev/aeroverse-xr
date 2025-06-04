import HeroSection from "@/components/sections/hero-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import ComponentsOfferSection from "@/components/sections/components-offer-section"
import TeamSection from "@/components/sections/team-section"
import ResearchSection from "@/components/sections/research-section"
import FaqSection from "@/components/sections/faq-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ComponentsOfferSection />
      <TeamSection />
      <ResearchSection />
      <FaqSection />
      <ContactSection />
    </>
  );
}

// export { default as DownloadPage } from './download/page';