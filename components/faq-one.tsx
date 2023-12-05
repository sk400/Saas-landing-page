import type { NextPage } from "next";

const FaqOne: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-start py-0 px-5 gap-[81px] text-center text-[28px] md:text-[36px] text-black font-montserrat">
      <b className="self-stretch relative leading-[40.32px] capitalize">
        <span>{`How to know if `}</span>
        <span className="text-coral">TDP</span>
        <span>{` is right for your `}</span>
        <span className="text-coral">startup</span>
      </b>

      <div className="self-stretch flex flex-row items-center justify-center gap-[40px] text-left text-lg text-white xs:flex-col lg:flex-row">
        <div className="flex-1 flex flex-col items-center justify-center gap-[53px] xs:flex-[unset] xs:self-stretch">
          <div className="rounded-t-16xl rounded-br-16xl rounded-bl-none bg-black w-[461.7px] flex flex-row items-start justify-start py-5 pr-[38.50311279296875px] pl-[30px] box-border xs:w-[300px] sm:w-[400px] md:w-[460px]">
            <b className="flex-1 relative leading-[26px]">
              You want a new, innovative, and user-centered UX strategy for an
              existing product
            </b>
          </div>
          <div className="rounded-t-16xl rounded-br-16xl rounded-bl-none bg-black w-[461.7px] flex flex-row items-center justify-center py-5 pr-[65.42498779296875px] pl-[30px] box-border xs:w-[300px] sm:w-[400px] md:w-[460px]">
            <b className="flex-1 relative leading-[26px]">
              You want to translate complex data into an easy-to-understand
              dashboard
            </b>
          </div>
          <div className="rounded-t-16xl rounded-br-16xl rounded-bl-none bg-black w-[461.7px] flex flex-row items-start justify-start py-5 pr-[68.67498779296875px] pl-[30px] box-border xs:w-[300px] sm:w-[400px] md:w-[460px]">
            <b className="flex-1 relative leading-[26px]">
              You‘re researching how UX can impact you business growth
            </b>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-[39px] xs:flex-[unset] xs:self-stretch">
          <div className="rounded-t-16xl rounded-br-none rounded-bl-16xl bg-coral shadow-[4px_8px_14px_rgba(0,_0,_0,_0.1)] w-[445.7px] flex flex-row items-center justify-center py-5 px-[30px] box-border xs:w-[300px] sm:w-[400px] md:w-[460px]">
            <b className="flex-1 relative leading-[26px]">
              You want to understand where users struggle while using your
              product
            </b>
          </div>
          <div className="rounded-t-16xl rounded-br-none rounded-bl-16xl bg-black w-[458.3px] flex flex-row items-start justify-start py-5 pr-[43.44061279296875px] pl-[30px] box-border xs:w-[300px] sm:w-[400px] md:w-[460px]">
            <b className="flex-1 relative leading-[26px]">
              You need additional design resources that synergize with your
              (already) amazing design team
            </b>
          </div>
          <div className="rounded-t-16xl rounded-br-none rounded-bl-16xl bg-black w-[458.3px] flex flex-row items-start justify-start py-5 pr-[34.64373779296875px] pl-[30px] box-border xs:w-[300px] sm:w-[400px] md:w-[460px]">
            <b className="flex-1 relative leading-[26px]">
              You want to understand your users and design products that meet
              their needs
            </b>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqOne;
