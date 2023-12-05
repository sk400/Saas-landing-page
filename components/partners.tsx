import type { NextPage } from "next";

const Partners: NextPage = () => {
  return (
    <div className="self-stretch bg-gray-200 flex flex-col items-center justify-center py-[70px] px-0 gap-[50px] text-center text-19xl text-white font-montserrat xs:flex-col md:flex-col">
      <h1 className="m-0 self-stretch relative text-inherit leading-[44px] capitalize font-bold font-inherit xs:text-5xl sm:text-9xl md:text-15xl">
        <span>{`We helped our customers raise `}</span>
        <span className="text-coral">$1B+</span>
      </h1>
      <div className="self-stretch flex flex-row items-center justify-center gap-[5px] xs:flex-col xs:items-center xs:justify-center sm:flex-col sm:items-center sm:justify-center md:flex-col md:items-center md:justify-center lg:flex-col lg:items-center lg:justify-center xl:flex-row xl:items-center xl:justify-center mq2xl:flex-row mq2xl:items-center mq2xl:justify-center">
        <img
          className="relative w-[200px] h-[100px]"
          alt=""
          src="/y-combinator-0dd7d14b20svg.svg"
        />
        <div className="relative box-border w-px h-[61px] border-r-[1px] border-solid border-coral" />
        <img
          className="relative w-[200px] h-[100px]"
          alt=""
          src="/sequioia-70b028d972svg.svg"
        />
        <div className="relative box-border w-px h-[61px] border-r-[1px] border-solid border-coral" />
        <img
          className="relative w-[200px] h-[100px]"
          alt=""
          src="/accel-1cb5297bbasvg.svg"
        />
        <div className="relative box-border w-px h-[61px] border-r-[1px] border-solid border-coral" />
        <img
          className="relative w-[200px] h-[100px]"
          alt=""
          src="/a16z-3853ceb4aasvg.svg"
        />
      </div>
    </div>
  );
};

export default Partners;
