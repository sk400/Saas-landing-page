import type { NextPage } from "next";
import { Button, IconButton } from "@chakra-ui/react";
import FormHeader from "./form-header";
import BenefitsContainer from "./benefits-container";

const Header: NextPage = () => {
  return (
    <div className="self-stretch bg-aliceblue flex flex-col items-center justify-center pt-[20px] px-[50px] pb-[70px] gap-[50px] text-center text-31xl text-gray-500 font-montserrat xs:pl-2.5 xs:pr-2.5 xs:box-border sm:pl-2.5 sm:pr-2.5 sm:box-border md:pl-[50px] md:pr-[50px] md:box-border">
      <FormHeader />
      <div className="self-stretch flex flex-row items-center justify-center p-2.5">
        <h1 className="m-0 flex-1 relative text-inherit leading-[40px] capitalize font-bold font-inherit xs:text-[26px] sm:text-15xl md:text-25xl">
          <p className="m-0">
            <span>{`A UI/UX design subscription so `}</span>
            <span className="text-coral">{`good `}</span>
          </p>
          <p className="m-0">
            <span>{`it should come with a `}</span>
            <span className="text-coral">{`warning `}</span>
            <span className="text-gray-500">label</span>
          </p>
        </h1>
      </div>
      <BenefitsContainer />
      <Button colorScheme="buttonbg" variant="solid" w="301px">
        start your risk free trial
      </Button>
      <img
        className="relative w-[770px] h-[433.5px] object-cover xs:hidden sm:hidden md:hidden lg:flex"
        alt=""
        src="/people-image@1x.png"
      />
    </div>
  );
};

export default Header;
