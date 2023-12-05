import type { NextPage } from "next";

const AccessibleDesignExamplesContai: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-center gap-[109px] text-center text-21xl text-white font-montserrat">
      <h1 className="m-0 self-stretch relative text-inherit leading-[54.5px] capitalize font-bold font-inherit">
        <span>{`How `}</span>
        <span className="text-tomato">accessible</span>
        <span>{` UX design is changing the `}</span>
        <span className="text-tomato">businesses</span>
        <span> for the better</span>
      </h1>
      <div className="self-stretch flex flex-col items-center justify-center gap-[30px] text-left text-[16.44px]">
        <div className="relative bg-powderblue w-[1160px] h-[565px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[591px] rounded-mini w-[1293px] h-[563px] object-cover"
            alt=""
            src="/group-386-cb42464eabpng@1x.png"
          />
          <div className="absolute top-[101px] left-[21px] rounded-mini bg-gray-300 shadow-[7px_8px_51px_rgba(255,_115,_79,_0.54)] w-[570px] h-[363px]" />
          <b className="absolute top-[220px] left-[calc(50%_-_516px)] text-[27.04px] leading-[36.84px] capitalize flex items-center w-[484px]">
            A predictive analytics platform for consumers digital identity
            verification
          </b>
          <div className="absolute top-[362.2px] left-[calc(50%_-_501.9px)] leading-[22.4px] uppercase font-medium">
            read case study
          </div>
          <div className="absolute top-[352px] left-[64px] rounded-[11.79px] box-border w-[216.9px] h-11 border-[0.8px] border-solid border-coral" />
          <div className="absolute top-[169px] left-[64px] rounded-md bg-coral w-[88px] h-[34px]" />
          <div className="absolute top-[175px] left-[calc(50%_-_502px)] leading-[22.4px] capitalize font-extrabold">
            Socure
          </div>
        </div>
        <div className="relative bg-aliceblue w-[1160px] h-[565px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[24px] w-[1300px] h-[564px] object-cover"
            alt=""
            src="/property-1-default-2-9068fa65c4png@1x.png"
          />
        </div>
        <div className="relative bg-tomato w-[1160px] h-[565px] overflow-hidden shrink-0">
          <img
            className="absolute top-[0px] left-[24px] w-[1300px] h-[564px] object-cover"
            alt=""
            src="/property-1-variant3-8a039d066bpng@1x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default AccessibleDesignExamplesContai;
