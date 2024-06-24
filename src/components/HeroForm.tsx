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
      className="w-[400px] bg-primary rounded-2xl px-6 py-8 h-full flex items-center justify-center flex-col gap-8"
    >
      <span className="text-white/90 leading-[120%] text-xl font-500">
        Get Your Bill State-wise
      </span>
      <div className="flex flex-col gap-2 w-full">
        <div className="border border-blue-300 w-full rounded-xl bg-blue-400 text-white flex items-center p-4 gap-2">
          <Image src={ICONS.search} alt="search" width={24} height={24} />
          <input
            type="text"
            className="w-full bg-blue-400 outline-none border-none"
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
      <button className="border border-blue-300 w-full rounded-xl bg-blue-400 text-white flex items-center p-4 gap-2">
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
      <Button variant="secondary" className="w-full">
        View All
      </Button>
    </div>
  );
};

export default HeroForm;
