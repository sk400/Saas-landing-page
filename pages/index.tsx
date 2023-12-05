import type { NextPage } from "next";
import Hero from "../components/hero";
import Features from "../components/features";
import ProcessContainer from "../components/process-container";
import PortfolioSection from "../components/portfolio-section";
import PricingSection from "../components/pricing-section";
import ContactSection from "../components/contact-section";
import FaqOne from "../components/faq-one";
import FAQtwo from "../components/f-a-qtwo";
import ContactSection1 from "../components/contact-section1";
import FormContainer1 from "../components/form-container1";

const Ui: NextPage = () => {
  return (
    <div className="relative bg-white w-full overflow-hidden flex flex-col items-center justify-center gap-[200px]">
      <Hero />
      <Features />
      <ProcessContainer />
      {/* <PortfolioSection /> */}
      <PricingSection />
      <ContactSection />
      <FaqOne />
      <FAQtwo />
      <ContactSection1 />
      <FormContainer1 />
    </div>
  );
};

export default Ui;
