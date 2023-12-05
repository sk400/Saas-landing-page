import type { NextPage } from "next";
import { Box, Button, Icon, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";

const FormHeader: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-center justify-between">
      <img
        className="relative w-[54px] h-[54px] overflow-hidden shrink-0"
        alt=""
        src="/fadmodrandom.svg"
      />
      <nav className="m-0 flex flex-row items-center justify-center gap-[37px] text-left text-sm text-black font-montserrat xs:hidden sm:hidden md:hidden lg:flex xl:flex mq2xl:flex">
        <b className="relative leading-[18px] uppercase flex items-center w-[126px] h-[19px] shrink-0">
          How it works
        </b>
        <b className="relative leading-[18px] uppercase flex text-coral items-center w-[57px] h-[19px] shrink-0">
          About
        </b>
        <b className="relative leading-[18px] uppercase flex items-center w-[52px] h-[19px] shrink-0">
          Work
        </b>
        <b className="relative leading-[18px] uppercase flex items-center w-[71px] h-[19px] shrink-0">
          Pricing
        </b>
        <b className="relative leading-[18px] uppercase flex items-center w-[45px] h-[19px] shrink-0">
          Blog
        </b>
      </nav>
      <Button
        className="relative xs:hidden sm:hidden md:block"
        colorScheme="red"
        variant="solid"
        w="150px"
      >
        get started
      </Button>

      <div className="md:hidden">
        <Popover>
          <PopoverTrigger>
            <Button>
              {" "}
              <HamburgerIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />

            <PopoverBody>
              <div className="m-0 flex flex-col items-center justify-center gap-[37px] text-left text-sm text-black font-montserrat my-5">
                <b className="relative leading-[18px] uppercase flex items-center w-[126px] h-[19px] shrink-0 cursor-pointer">
                  How it works
                </b>
                <b className="relative leading-[18px] uppercase flex text-coral items-center w-[57px] h-[19px] shrink-0 cursor-pointer">
                  About
                </b>
                <b className="relative leading-[18px] uppercase flex items-center w-[52px] h-[19px] shrink-0 cursor-pointer">
                  Work
                </b>
                <b className="relative leading-[18px] uppercase flex items-center w-[71px] h-[19px] shrink-0 cursor-pointer">
                  Pricing
                </b>
                <b className="relative leading-[18px] uppercase flex items-center w-[45px] h-[19px] shrink-0 cursor-pointer">
                  Blog
                </b>
              </div>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </div>
    </header>
  );
};

export default FormHeader;
