import type { NextPage } from "next";
import Step1 from "./step1";
import Step2 from "./step2";
import Step3 from "./step3";

const ProcessContainer: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-0 px-2.5 gap-[50px] text-center text-[30px] md:text-[37px] text-gray-500 font-montserrat xs:pl-2.5 xs:pr-2.5 xs:box-border max-w-[1250px] mx-auto">
      <h1 className="m-0 self-stretch relative text-inherit leading-[44px] capitalize font-bold font-inherit">
        <span>How</span>
        <span className="text-coral"> signing up</span>
        <span>{` with The Design Project `}</span>
        <span className="text-coral">works</span>
        <span className="text-black">!?</span>
      </h1>
      <div className="w-full relative text-mini inline-block max-w-[750px]">
        Take a minute to imagine how you’d feel watching your user count grow,
        and retention rates stay consistently high. When you prioritize
        effective UX, better retention and growth are natural consequences.
        Backed by countless hours of research and testing, TDP blends UX, UI,
        and Product design into a deliciously smooth process that fuels
        productivity and success.
      </div>
      <div className="self-stretch flex flex-row items-center justify-between text-xl text-tomato xs:flex-col xs:gap-[100px] sm:flex-col md:flex-col md:gap-[100px] lg:flex-row">
        <Step1 />
        <Step2 />
        <Step3 />
      </div>
    </section>
  );
};

export default ProcessContainer;
