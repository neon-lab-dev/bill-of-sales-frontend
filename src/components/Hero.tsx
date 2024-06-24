import React from "react";
import HeroForm from "./HeroForm";
import Image from "next/image";
import { ICONS } from "@/assets";

const Hero = () => {
  return (
    <div className="bg-secondary">
      <div className="max-width wrapper flex justify-between gap-20 w-full">
        <div className="flex flex-col justify-between my-[81px] gap-14 max-w-[773px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-7xl font-600 leading-[88%] text-blue-500/80">
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
              />
              <h2 className="text-[56px] leading-[114%] text-blue-500/80">
                PDF Templates
              </h2>
            </div>
            <div className="h-[9px] w-[181px] rounded-sm bg-blue-400/25" />
          </div>
          <p className="text-base leading-[175%] text-black/75 max-w-[671px]">
            A bill of sale represents a receipt for an exchange of goods between
            two (2) parties, buyer and seller. The buyer offers cash or trade to
            a seller for personal property with the most popular being vehicles.
          </p>
        </div>
        <div className="my-[81px]">
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default Hero;
