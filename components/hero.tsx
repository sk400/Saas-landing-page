import type { NextPage } from "next";
import Header from "./header";
import Partners from "./partners";

const Hero: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-center justify-center text-center text-31xl text-gray-500 font-montserrat">
      <Header />
      <Partners />
    </section>
  );
};

export default Hero;
