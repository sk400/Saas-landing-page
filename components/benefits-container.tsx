import type { NextPage } from "next";

const BenefitsContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center gap-[40px] text-left text-mid text-black font-montserrat">
      <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
        <img
          className="relative w-[27px] h-[26px] object-cover"
          alt=""
          src="/component-41-d6f13ecb33png@1x.png"
        />

        <b className="relative leading-[26px] flex items-center w-[204px] h-5 shrink-0">
          No hiring headaches
        </b>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
        <img
          className="relative w-[27px] h-[26px] object-cover"
          alt=""
          src="/component-41-d6f13ecb33png@1x.png"
        />
        <b className="relative leading-[26px] flex items-center w-[244px] h-5 shrink-0">
          Weekly turnaround times
        </b>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center gap-[8px]">
        <img
          className="relative w-[27px] h-[26px] object-cover"
          alt=""
          src="/component-41-d6f13ecb33png@1x.png"
        />
        <b className="relative leading-[26px] flex items-center w-[227px] h-5 shrink-0">
          One flat monthly rate
        </b>
      </div>
    </div>
  );
};

export default BenefitsContainer;
