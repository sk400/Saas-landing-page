import type { NextPage } from "next";
import { Button, IconButton } from "@chakra-ui/react";

const ContactSection: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-[50px] mx-5 gap-[50px] text-center text-lg text-black font-montserrat">
      <div className="self-stretch relative bg-black h-[1.5px] overflow-hidden shrink-0" />
      <div className="w-full flex flex-col items-center justify-start gap-[28px] max-w-[450px]">
        <b className="self-stretch relative leading-[20px]">
          <span>{`Hey! Need a custom plan? `}</span>
          <span className="text-tomato">Contact us!</span>
        </b>
        <div className="self-stretch relative text-sm leading-[20px]">
          Try us risk free for 7 days, if you don’t love us, get your money
          back.
        </div>
        <Button colorScheme="buttonbg" variant="solid">
          Get Started
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
