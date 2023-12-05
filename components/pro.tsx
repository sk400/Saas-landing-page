import type { NextPage } from "next";

const Pro: NextPage = () => {
  return (
    <div className="flex-1 rounded-mini bg-coral flex flex-col items-center justify-center py-[50px] px-[20px] gap-[55px] text-center text-mini text-white font-inter xs:pl-2.5 xs:pr-2.5 xs:box-border xs:ml-[auto] xs:mr-[auto] xs:flex-[unset] xs:self-stretch md:flex-[unset] md:self-stretch lg:flex-[unset] lg:self-stretch xl:flex-[unset] xl:self-stretch hover:scale-105 transition duration-200 cursor-pointer">
      <h1 className="m-0 relative text-10xl leading-[33px] font-bold font-inherit text-snow-100">
        Pro
      </h1>
      <div className="self-stretch relative leading-[20px] text-gray-100">
        Great for basic UI/UX design needs
      </div>
      <div className="self-stretch flex flex-row items-center justify-center pt-0 px-0 pb-5 text-21xl text-gray-200 border-b-[2px] border-solid border-whitesmoke-100">
        <b className="flex-1 relative leading-[30px] uppercase">
          <p className="m-0">$3,600</p>
          <p className="m-0 text-base">per month</p>
        </b>
      </div>
      <div className="self-stretch flex flex-col items-center justify-center gap-[20px] text-left">
        <b className="relative leading-[18px] uppercase">What’s included:</b>
        <div className="self-stretch flex flex-col items-center justify-center pt-0 pb-[50px] pr-[49.65625px] pl-[27px] gap-[10px] text-center text-sm">
          <div className="self-stretch relative leading-[20px]">
            UI execution
          </div>
          <div className="self-stretch relative text-mini leading-[20px] text-snow-200">
            Connect on Slack
          </div>
          <div className="self-stretch relative leading-[20px]">
            One 30 minute meeting a week
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-base">
        <b className="self-stretch relative leading-[18px] uppercase">
          Design Team
        </b>
        <div className="self-stretch relative text-sm leading-[20px] flex items-center justify-center h-10 shrink-0">
          1 designer working with 4-5 other customers at the same time
        </div>
      </div>
      <button className="self-stretch rounded-mini flex flex-row items-center justify-center py-[23px]  gap-[7.44px] text-left text-sm border-[2px] border-solid border-white  ">
        <b className="relative leading-[16px] uppercase">Try free</b>
        <img
          className="relative w-[22px] h-4 overflow-hidden shrink-0 "
          alt=""
          src="/svg3.svg"
        />
      </button>
    </div>
  );
};

export default Pro;
