import type { NextPage } from "next";

const FormContainer1: NextPage = () => {
  return (
    <section className="self-stretch bg-gray-400 flex flex-row items-center md:items-start  md:justify-between gap-20 md:gap-0 py-[100px] px-[15px] md:px-[50px] text-left text-sm text-white font-montserrat xs:flex-col md:flex-row ">
      <div className="flex flex-col items-center md:items-start justify-start gap-[26px]">
        <div className="flex flex-row items-start justify-start">
          <img
            className="relative w-[270px] h-[63px] overflow-hidden shrink-0"
            alt=""
            src="/the-design-project-desktop-1-b51ffb27absvg.svg"
          />
        </div>
        {/* Socials */}

        <div className="flex flex-row items-start justify-start gap-[27px] xs:flex-col sm:flex-row">
          <div className="relative w-[202.3px] h-[25px]">
            <img
              className="absolute top-[calc(50%_-_12.5px)] left-[0px] w-[25px] h-[25px] overflow-hidden"
              alt=""
              src="/svg4.svg"
            />
            <div className="absolute top-[3px] left-[40px] leading-[20px]">
              hello@designproject.io
            </div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-[6.75px] pl-0 gap-[6px]">
            <img
              className="relative w-[26px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/svg5.svg"
            />
            <div className="relative leading-[20px]">@designproject.io</div>
          </div>
          <div className="flex flex-row items-center justify-start py-0 pr-[0.359375px] pl-0 gap-[6px] text-mini">
            <img
              className="relative w-[26px] h-[25px] overflow-hidden shrink-0"
              alt=""
              src="/svg6.svg"
            />
            <div className="relative leading-[20px]">The Design Project</div>
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="h-[180px] flex flex-col items-center justify-start gap-[25px] text-right text-mini md:items-center md:justify-center">
        <b className="relative leading-[18px] uppercase">Contact us</b>
        <b className="relative leading-[18px] uppercase">Blog</b>
        <b className="relative leading-[18px] uppercase">Our work</b>
        <b className="relative leading-[18px] uppercase">About</b>
        <b className="relative leading-[18px] uppercase">How it works</b>
      </div>
    </section>
  );
};

export default FormContainer1;
