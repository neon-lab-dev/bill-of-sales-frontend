import React from "react";
import HeroForm from "./HeroForm";
import Image from "next/image";
import { ICONS } from "@/assets";
import { getAllForms, getAllStates } from "@/services/forms";

const Hero = async () => {
  const states = await getAllStates();
  const forms = await getAllForms();
  return (
    <div className="bg-secondary">
      <div className="max-width wrapper flex flex-col xl:flex-row items-center xl:items-start justify-between xl:gap-20 w-full">
        <div className="flex flex-col justify-between my-[54px] xl:my-[81px] gap-8 xl:gap-14 max-w-[773px] text-center xl:text-left">
          <div className="flex flex-col gap-4 items-center xl:items-start">
            <h1 className=" text-3xl md:text-[54px] xl:text-7xl font-600 leading-[88%] text-blue-600/80">
              Free Bill of Sale Forms
            </h1>
            <div className="flex gap-6">
              <Image
                src={ICONS.pdf}
                alt="pdf"
                width={54}
                height={54}
                placeholder="blur"
                quality={100}
                className="h-[26px] w-[26px] md:h-[36px] md:w-[36px] xl:h-[54px] xl:w-[54px]"
              />
              <h2 className="text-lg sm:text-3xl md:text-[36px] xl:text-[56px] leading-[114%] text-blue-600/80">
                PDF Templates
              </h2>
            </div>
            <div className="h-2 md:h-[9px] w-[181px] rounded-sm bg-blue-200/25" />
          </div>
          <p className="text-base leading-[175%] text-black/75 max-w-[671px]">
            A bill of sale represents a receipt for an exchange of goods between
            two (2) parties, buyer and seller. The buyer offers cash or trade to
            a seller for personal property with the most popular being vehicles.
          </p>
        </div>
        <div className="mb-[81px] xl:mb-[81px] xl:my-[81px]  ">
          <HeroForm states={states} formNames={forms} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
