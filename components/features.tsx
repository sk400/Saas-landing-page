import type { NextPage } from "next";

const Features: NextPage = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-[30px] max-w-[1250px] text-center text-[30px] text-black font-montserrat xs:pl-2.5 xs:pr-2.5 xs:box-border">
      <h1 className="m-0 self-stretch relative text-inherit leading-[37px] capitalize font-bold font-inherit">
        <span>{`A diverse team of `}</span>
        <span className="text-coral">passionate</span>
        <span>{` UX nerds who are here to help your `}</span>
        <span className="text-coral">startup succeed</span>
      </h1>
      <div className="w-full relative text-base leading-[24px] font-medium inline-block max-w-[750px]">
        From ideation to expansion, TDP understands the unique demands of your
        startup—providing you with optimized design strategies and fast
        turnarounds for an affordable monthly subscription.
      </div>

      <div className="self-stretch flex flex-row items-center justify-center gap-[50px] text-left text-lgi xs:flex-col xs:gap-[50px] sm:flex-col md:flex-col lg:flex-row xl:flex-row mq2xl:flex-row mt-10">
        <div className="flex-1 flex flex-col items-center justify-center gap-[18px] xs:flex-[unset] xs:self-stretch sm:flex-[unset] sm:self-stretch md:flex-[unset] md:self-stretch">
          <img
            className="relative w-[150px] h-[110px] overflow-hidden shrink-0"
            alt=""
            src="/svg.svg"
          />
          <h3 className="m-0 relative text-inherit leading-[22px] font-bold font-inherit">
            Costs 70% less
          </h3>
          <div className="w-full relative text-sm leading-[24px] text-center inline-block max-w-[300px]">
            We developed highly-optimized design processes to let us work fast
            and deliver incredible results—and we pass those savings on to you
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[18px] xs:flex-[unset] xs:self-stretch sm:flex-[unset] sm:self-stretch md:flex-[unset] md:self-stretch">
          <img
            className="relative w-[150px] h-[130px] overflow-hidden shrink-0"
            alt=""
            src="/svg1.svg"
          />
          <h3 className="m-0 relative text-inherit leading-[22px] font-bold font-inherit">
            Adaptable and scalable
          </h3>
          <div className="w-full relative text-base leading-[24px] text-center inline-block max-w-[300px]">
            High-velocity is crucial to a startup’s success, and that’s why TDP
            delivers new designs every week so your momentum never falters
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center py-0 px-[39px] gap-[23px] text-center xs:flex-[unset] xs:self-stretch sm:flex-[unset] sm:self-stretch md:flex-[unset] md:self-stretch">
          <img
            className="relative w-[150px] h-[130px] overflow-hidden shrink-0"
            alt=""
            src="/svg1.svg"
          />
          <h3 className="m-0 relative text-inherit leading-[22px] font-bold font-inherit">
            Fast turnaround times
          </h3>
          <div className="w-full relative text-base leading-[24px] inline-block max-w-[300px]">
            TDP was built for flexibility—we quickly adapt and grow as you grow
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
