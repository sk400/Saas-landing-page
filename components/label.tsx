import type { NextPage } from "next";

const Label: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between pt-1 px-0 pb-5 text-left text-4xl text-black font-montserrat border-b-[1px] border-solid border-faq-border-bottom-color">
      <h2 className="m-0 relative text-inherit leading-[27px] font-semibold font-inherit">
        What if I want to cancel my service?
      </h2>
      <img
        className="relative w-[34.2px] h-[17.1px]"
        alt=""
        src="/vector.svg"
      />
    </div>
  );
};

export default Label;
