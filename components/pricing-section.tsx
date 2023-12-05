import type { NextPage } from "next";
import Essential from "./essential";
import Pro from "./pro";
import Turbo from "./turbo";

const PricingSection: NextPage = () => {
  return (
    <section className="self-stretch bg-whitesmoke-200 flex flex-col items-center justify-start gap-[116px] text-center text-mini text-black font-inter xs:items-center xs:justify-center xs:pl-2.5 xs:pr-2.5 xs:box-border sm:pl-2.5 sm:pr-2.5 sm:box-border py-[100px]  ">
      {/* Time frame */}
      <div className="w-full rounded-xl box-border flex flex-row items-center justify-center max-w-[350px] border-[1px] border-solid border-coral">
        <button className="cursor-pointer [border:none] pt-[15px] px-[5px] pb-4 bg-black flex-1 rounded-tl-xl rounded-tr-none rounded-br-none rounded-bl-xl flex flex-row items-center justify-center">
          <b className="relative text-smi leading-[16px] uppercase font-inter text-white text-center">
            Monthly
          </b>
        </button>
        <button className="cursor-pointer [border:none] pt-[15px] px-[5px] pb-4 bg-[transparent] flex-1 flex flex-row items-center justify-center relative border-r-[1px] border-solid border-coral">
          <b className="relative text-sm leading-[16px] uppercase font-inter text-black text-center z-[0]">
            Quarterly
          </b>
          <b className="absolute my-0 mx-[!important] top-[-24px] left-[32.3px] text-xs leading-[14px] uppercase flex font-inter text-orangered text-center items-center justify-center w-[60.2px] h-[13px] shrink-0 z-[1]">
            Save 10%
          </b>
        </button>
        <button className="cursor-pointer [border:none] pt-[15px] px-[5px] pb-4 bg-[transparent] flex-1 rounded-tl-none rounded-tr-xl rounded-br-xl rounded-bl-none flex flex-row items-center justify-center relative border-r-[1px] border-solid border-coral">
          <b className="relative text-sm leading-[16px] uppercase font-inter text-black text-center z-[0]">
            Yearly
          </b>
          <b className="absolute my-0 mx-[!important] top-[-24px] left-[18.4px] text-xs leading-[14px] uppercase flex font-inter text-orangered text-center items-center justify-center w-[59.7px] h-[13px] shrink-0 z-[1]">
            Save 15%
          </b>
        </button>
      </div>
      {/* Packages container */}
      <div className="self-stretch rounded-mini flex flex-row items-center justify-center p-2.5 gap-[20px] xs:flex-col  md:flex-col lg:flex-row max-w-[1250px] mx-auto ">
        <Essential />
        <Pro />
        <Turbo />
      </div>
    </section>
  );
};

export default PricingSection;
