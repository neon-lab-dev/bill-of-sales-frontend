import { ICONS } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const CITIES = ["Alabama", "Alaska", "Arizona"];

const HeroForm = () => {
  return (
    <div
      style={{
        boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.05)",
      }}
      className="w-full sm:w-[600px] xl:w-[400px] bg-primary rounded-2xl px-10 xl:px-6 py-12 xl:py-8 h-full flex items-center justify-center flex-col gap-[54px] xl:gap-8"
    >
      <span className="text-white/90 leading-[120%] text-[28px] xl:text-xl font-500">
        Get Your Bill State-wise
      </span>
      <div className="flex flex-col gap-6 xl:gap-2 w-full">
        <div className="border border-blue-300 w-full rounded-xl bg-blue-400 text-white flex items-center px-[30px] py-[24px] xl:px-4 xl:py-4 gap-2">
          <Image
            src={ICONS.search}
            alt="search"
            width={24}
            height={24}
            className="h-[27px] w-[27px] xl:h-[24px] xl:w-[24px]"
          />
          <input
            type="text"
            className="w-full bg-blue-400 outline-none border-none text-[22px] xl:text-base"
          />
        </div>
        <div className="flex items-center gap-2 w-full">
          {CITIES.map((city) => (
            <button
              key={city}
              className="bg-blue-100 text-blue-600 py-2 px-3 rounded-xl"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <button className="border border-blue-300 w-full rounded-xl bg-blue-400 text-white flex items-center px-[30px] py-[24px] xl:px-4 xl:py-4 gap-2">
        <Image
          src={ICONS.billType}
          alt="search"
          width={24}
          height={24}
          className="h-[27px] w-[27px] xl:h-[24px] xl:w-[24px]"
        />
        <span className=" text-[22px] xl:text-base">All Bill Type</span>
        <Image
          src={ICONS.chevronDown}
          alt="search"
          width={24}
          height={24}
          className="ml-auto h-[27px] w-[27px] xl:h-[24px] xl:w-[24px]"
        />
      </button>
      <Button variant="secondary" className="w-full">
        View All
      </Button>
    </div>
  );
};

export default HeroForm;
