import type { NextPage } from "next";
import Label from "./label";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const FAQtwo: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start p-5 gap-[72px] text-center text-[34px] md:text-19xl text-black font-montserrat max-w-[1250px] mx-auto">
      <h1 className="m-0 self-stretch relative text-inherit leading-[44px] capitalize font-bold font-inherit">
        <span>{`Our most `}</span>
        <span className="text-tomato">frequently</span>
        <span> asked questions</span>
      </h1>
      <div className="self-stretch flex flex-col items-start justify-start gap-[44px] text-left text-4xl">
        <Label />
        <Label />
        <Label />
        <Label />
        <Label />
      </div>
    </section>
  );
};

export default FAQtwo;
