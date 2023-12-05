import type { NextPage } from "next";
import { Button, IconButton } from "@chakra-ui/react";

const ContactSection1: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start gap-[65px] text-center text-[30px] md:text-31xl text-black font-montserrat ">
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-2.5 gap-[28px]">
        <h1 className="m-0 self-stretch relative text-inherit leading-[45px] md:leading-[60px] capitalize font-bold font-inherit">
          <span>{`Let’s `}</span>
          <span className="text-coral">build</span>
          <span>{` something `}</span>
          <span className="text-coral">awesome</span>
          <span> together!</span>
        </h1>
        <div className="self-stretch relative text-sm leading-[20px]">
          Try us risk free for 7 days, if you don’t love us, get your money
          back.
        </div>
        <Button variant="solid" colorScheme="teal">
          Get Started
        </Button>
      </div>
      <img
        className="relative w-[650px] h-[437.5px] xs:hidden md:flex"
        alt=""
        src="/people-image1.svg"
      />
    </section>
  );
};

export default ContactSection1;
