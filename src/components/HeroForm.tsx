"use client";

import { ICONS } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { BILLS } from "./TypesOfBills";

const CITIES = ["Alabama", "Alaska", "Arizona"];

const AVAILABLE_CITIES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const HeroForm = () => {
  const [selectedCityInputValue, setSelectedCityInputValue] = useState("");
  const [selectedBillTypeInputValue, setSelectedBillTypeInputValue] =
    useState("");
  const [isSelectCityOpen, setIsSelectCityOpen] = useState(false);
  const [isSelectBillTypeOpen, setIsSelectBillTypeOpen] = useState(false);

  useEffect(() => {
    setIsSelectBillTypeOpen(false);
  }, [selectedBillTypeInputValue]);

  useEffect(() => {
    if (isSelectBillTypeOpen) {
      setIsSelectCityOpen(false);
    }
  }, [isSelectBillTypeOpen]);

  useEffect(() => {
    if (isSelectCityOpen) {
      setIsSelectBillTypeOpen(false);
    }
  }, [isSelectCityOpen]);

  return (
    <div
      style={{
        boxShadow: "0px 4px 80px 0px rgba(0, 0, 0, 0.05)",
      }}
      className="w-full sm:w-[600px] xl:w-[400px] bg-primary rounded-2xl px-6 md:px-10 xl:px-6 py-6 sm:py-12 xl:py-8 h-full flex items-center justify-center flex-col gap-6 md:gap-[54px] xl:gap-8"
    >
      <span className="text-white/90 leading-[120%] md:text-3xl text-xl sm:text-[28px] xl:text-xl font-500">
        Get Your Bill State-wise
      </span>
      <div className="flex flex-col gap-2 md:gap-6 xl:gap-2 w-full">
        <div
          className={twMerge(
            "border border-blue-300 w-full relative rounded-t-xl bg-blue-400 text-white flex items-center px-4 py-2 sm:py-4 md:px-[30px] md:py-[24px] xl:px-4 xl:py-4 gap-2",
            !isSelectCityOpen && "rounded-b-xl"
          )}
        >
          <Image
            src={ICONS.search}
            alt="search"
            width={24}
            height={24}
            className="h-[24px] w-[24px] md:h-[27px] md:w-[27px] xl:h-[24px] xl:w-[24px]"
          />
          <input
            onFocus={() => setIsSelectCityOpen(true)}
            value={selectedCityInputValue}
            onChange={(e) => setSelectedCityInputValue(e.target.value)}
            type="text"
            className="w-full bg-blue-400 outline-none border-none text-lg sm:text-[22px] xl:text-base"
          />
          {/* auto suggest */}
          {isSelectCityOpen && (
            <div className="absolute z-10 shadow-xl top-full left-0 overflow-y-auto py-4 px-2 rounded-b-xl w-full h-fit max-h-[250px] md:max-h-[400px] bg-white flex flex-col gap-2">
              {AVAILABLE_CITIES.filter((city) => {
                if (!selectedCityInputValue) return true;
                return city
                  .toLowerCase()
                  .includes(selectedCityInputValue.toLowerCase());
              }).map((city) => (
                <button
                  key={city}
                  value={city}
                  onClick={(e) => {
                    setSelectedCityInputValue(e.currentTarget.value);
                    setIsSelectCityOpen(false);
                  }}
                  className={twMerge(
                    "w-full py-2 px-6 text-black/85 rounded-md text-left",
                    city === selectedCityInputValue
                      ? "bg-gray-700"
                      : " hover:bg-gray-700"
                  )}
                >
                  {city}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 w-full">
          {CITIES.map((city) => (
            <button
              onClick={() => {
                setSelectedCityInputValue(city);
                setIsSelectCityOpen(false);
              }}
              key={city}
              className="bg-blue-100 text-blue-600 py-2 px-3 rounded-xl"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      <div className="w-full">
        <button
          className={twMerge(
            "border relative border-blue-300 w-full rounded-t-xl bg-blue-400 text-white flex items-center  px-4 py-2 sm:py-4 md:px-[30px] md:py-[24px] xl:px-4 xl:py-4 gap-2",
            !isSelectBillTypeOpen && "rounded-b-xl"
          )}
          onClick={() => setIsSelectBillTypeOpen((prev) => !prev)}
        >
          <Image
            src={ICONS.billType}
            alt="search"
            width={24}
            height={24}
            className="h-[24px] w-[24px] md:h-[27px] md:w-[27px] xl:h-[24px] xl:w-[24px]"
          />
          <span className="text-lg sm:text-[22px] xl:text-base">
            {selectedBillTypeInputValue || "All Bill Type"}
          </span>
          <Image
            src={ICONS.chevronDown}
            alt="search"
            width={24}
            height={24}
            className={twMerge(
              "ml-auto h-[27px] w-[27px] xl:h-[24px] xl:w-[24px] transition-all",
              isSelectBillTypeOpen && "rotate-180"
            )}
          />
          {/* auto suggest */}
          {isSelectBillTypeOpen && (
            <div className="absolute shadow-xl top-full left-0 overflow-y-auto py-4 px-2 rounded-b-xl w-full h-fit max-h-[250px] md:max-h-[400px] bg-white flex flex-col gap-2">
              {BILLS.map((bill) => (
                <button
                  key={bill}
                  value={bill}
                  onClick={(e) => {
                    setSelectedBillTypeInputValue(e.currentTarget.value);
                    setIsSelectBillTypeOpen(false);
                    console.log(e.currentTarget.value);
                  }}
                  className={twMerge(
                    "w-full py-2 px-6 text-black/85 rounded-md text-left",
                    bill === selectedBillTypeInputValue
                      ? "bg-gray-700"
                      : " hover:bg-gray-700"
                  )}
                >
                  {bill}
                </button>
              ))}
            </div>
          )}
        </button>
      </div>
      <Button variant="secondary" className="w-full">
        View All
      </Button>
    </div>
  );
};

export default HeroForm;
