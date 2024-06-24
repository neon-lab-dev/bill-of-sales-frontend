import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";

const CITIES = ["Alabama", "Alaska", "Arizona"];

const HeroForm = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.05)",
      }}
      className="w-[400px] bg-primary rounded-2xl px-6 py-8 h-full flex items-center justify-center flex-col gap-8"
    >
      <span className="text-white/90 leading-[120%] text-xl font-500">
        Get Your Bill State-wise
      </span>
      <div className="flex flex-col gap-2 w-full">
        <div className="border border-[#A9C3D5] w-full rounded-xl bg-[#517DC5] text-white flex items-center p-4 gap-2">
          <Image src={ICONS.search} alt="search" width={24} height={24} />
          <input
            type="text"
            className="w-full bg-[#517DC5] outline-none border-none"
          />
        </div>
        <div className="flex items-center gap-2 w-full">
          {CITIES.map((city) => (
            <button
              key={city}
              className="bg-[#D9E7FF] text-[#142D55] py-2 px-3 rounded-xl"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <button className="border border-[#A9C3D5] w-full rounded-xl bg-[#517DC5] text-white flex items-center p-4 gap-2">
        <Image src={ICONS.billType} alt="search" width={24} height={24} />
        <span>All Bill Type</span>
        <Image
          src={ICONS.chevronDown}
          alt="search"
          width={24}
          height={24}
          className="ml-auto"
        />
      </button>
      <button className="bg-[#E5EFFF] px-4 py-3.5 text-[#142D55] text-base font-600 leading-[150%] w-full rounded-xl">
        View All
      </button>
    </div>
  );
};

export default HeroForm;
