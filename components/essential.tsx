import type { NextPage } from "next";

const Essential: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center  gap-[55px] text-center text-mini text-black font-inter xs:ml-[auto] xs:mr-[auto] xs:flex-[unset] xs:self-stretch md:flex-[unset] md:self-stretch lg:flex-[unset] lg:self-stretch xl:flex-[unset] xl:self-stretch py-[50px]px-[15px] hover:scale-105 transition duration-200 cursor-pointer">
      <h1 className="m-0 self-stretch relative text-10xl leading-[33px] font-bold font-inherit text-gray-200">
        Essential
      </h1>
      <div className="self-stretch relative leading-[20px]">
        Great for basic UI/UX design needs
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-5 text-21xl text-coral border-b-[2px] border-solid border-coral">
        <b className="flex-1 relative leading-[30px] uppercase">
          <p className="m-0">$2,600</p>
          <p className="m-0 text-base">per month</p>
        </b>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[20px] text-left">
        <b className="relative leading-[18px] uppercase">What’s included:</b>
        <div className="self-stretch h-[150px] flex flex-col items-center justify-between pt-0 pb-[50px] pr-[49.65625px] pl-[27px] box-border text-center text-sm">
          <div className="self-stretch relative leading-[20px]">
            UI execution
          </div>
          <div className="self-stretch relative text-mini leading-[20px]">
            Connect on Slack
          </div>
          <div className="self-stretch relative leading-[20px]">
            One 30 minute meeting a week
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[20px] text-left text-base">
        <b className="relative leading-[18px] uppercase">Design Team</b>
        <div className="self-stretch relative text-sm leading-[20px] text-center flex items-center justify-center h-10 shrink-0">
          1 designer working with 4-5 other customers at the same time
        </div>
      </div>
      <button className="self-stretch rounded-mini flex flex-row items-center justify-center py-[23px]  gap-[7.44px] text-left text-sm border-[2px] border-solid border-black  ">
        <b className="relative  uppercase">Try free</b>
        <img
          className="relative w-[22px] h-4 overflow-hidden shrink-0"
          alt=""
          src="/svg2.svg"
        />
      </button>
    </div>
  );
};

export default Essential;
