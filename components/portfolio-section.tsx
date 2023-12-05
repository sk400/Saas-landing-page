import type { NextPage } from "next";
import { Button, IconButton } from "@chakra-ui/react";
import AccessibleDesignExamplesContai from "./accessible-design-examples-contai";
import TestimonialsContainer from "./testimonials-container";

const PortfolioSection: NextPage = () => {
  return (
    <section
      className="self-stretch bg-gray-200 flex flex-col items-center justify-center py-[100px] px-[50px] gap-[50px] text-center text-21xl text-white font-montserrat"
      Portfolio
    >
      <AccessibleDesignExamplesContai />
      <TestimonialsContainer />
      <Button colorScheme="buttonbg" variant="solid">
        see our case studies
      </Button>
    </section>
  );
};

export default PortfolioSection;
