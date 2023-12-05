import type { NextPage } from "next";

const Step1: NextPage = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-[19px] text-center text-xl text-tomato font-montserrat xs:flex-[unset] xs:self-stretch sm:flex-[unset] sm:self-stretch md:flex-[unset] md:self-stretch">
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative rounded-31xl [background:linear-gradient(180deg,_#ff734f,_#e83c11)] w-[59px] h-[59px]">
        <b className="absolute top-[calc(50%_-_22.5px)] left-[calc(50%_-_18.5px)] text-15xl leading-[44px] capitalize font-montserrat text-whitesmoke-200 text-center">
          01
        </b>
      </button>
      <h3 className="m-0 relative text-inherit leading-[22px] capitalize font-semibold font-inherit flex items-center justify-center w-[203.6px]">
        Sign up for one of our services
      </h3>
      <img
        className="relative w-[96.8px] h-[162.1px]"
        alt=""
        src="/person-image.svg"
      />
      <div className="w-full relative text-sm text-black inline-block max-w-[350px]">
        Sign up for one of our affordable subscription play which offer a
        variety of options to fit your unique needs.
      </div>
    </div>
  );
};

export default Step1;
