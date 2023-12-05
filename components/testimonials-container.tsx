import type { NextPage } from "next";

const TestimonialsContainer: NextPage = () => {
  return (
    <div className="relative w-[1160px] h-[465px] text-center text-127xl text-coral font-montserrat">
      <div className="absolute top-[390px] left-[433px] w-[291.5px] h-[74px] text-left text-5xl">
        <img
          className="absolute top-[0px] left-[0px] w-[74px] h-[74px] object-cover"
          alt=""
          src="/erick-desoto-17d68fc497png@1x.png"
        />
        <div className="absolute top-[17px] left-[98px] w-[193.5px] h-[41px]">
          <div className="absolute top-[0px] left-[0px] w-[193.5px] h-[41px]">
            <h2 className="m-0 absolute top-[0px] left-[0px] text-inherit leading-[27px] uppercase font-bold font-inherit">
              Erick Desoto
            </h2>
            <div className="absolute top-[22px] left-[2.5px] text-base leading-[19px] text-white">
              VP of Product at Socure
            </div>
          </div>
        </div>
      </div>
      <img
        className="absolute top-[163px] left-[1090px] w-[46px] h-[70px] overflow-hidden opacity-[0.2]"
        alt=""
        src="/materialsymbolsarrowbackiosnew.svg"
      />
      <h1 className="m-0 absolute top-[289px] left-[calc(50%_+_453px)] text-inherit leading-[175.2px] font-bold font-inherit [transform:_rotate(180deg)] [transform-origin:0_0]">
        “
      </h1>
      <h1 className="m-0 absolute top-[54px] left-[calc(50%_-_426px)] text-21xl leading-[48px] font-bold font-inherit text-white flex items-center justify-center w-[890.2px]">
        TDP helped identify the main pain points and designed a new UX that is
        accessible and easy to understand. The redesign pushed us forward on our
        mission to be able to verify 100% of IDs in real-time, and we raised
        over $100M in funding.
      </h1>
      <h1 className="m-0 absolute top-[0px] left-[calc(50%_-_499px)] text-inherit leading-[175.2px] font-bold font-inherit">
        “
      </h1>
      <img
        className="absolute top-[163px] left-[24px] w-[70px] h-[70px] overflow-hidden opacity-[0.2]"
        alt=""
        src="/materialsymbolsarrowbackiosnew1.svg"
      />
    </div>
  );
};

export default TestimonialsContainer;
