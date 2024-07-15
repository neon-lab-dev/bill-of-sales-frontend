"use client";

import { ICONS } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { twMerge } from "tailwind-merge";
import { IForm, IState } from "@/types/form";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type Props = IState & {
  formNames: IForm[];
};

const HeroForm = ({ states, formNames }: Props) => {
  const router = useRouter();
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

  const onSubmit = () => {
    if (!selectedCityInputValue || !states?.includes(selectedCityInputValue)) {
      toast.error("Please select a valid state");
      return;
    }
    if (!selectedBillTypeInputValue) {
      router.push(`/state/${selectedCityInputValue}`);
    } else {
      router.push(
        `/templates/${selectedBillTypeInputValue}?state=${selectedCityInputValue}`
      );
    }
  };

  // todo: show no forms available for selected state

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
              {states?.filter((city) => {
                if (!selectedCityInputValue) return true;
                return city
                  .toLowerCase()
                  .includes(selectedCityInputValue.toLowerCase());
              }).length === 0 ? (
                <div className="text-center text-black/85">No states found</div>
              ) : (
                states
                  ?.filter((city) => {
                    if (!selectedCityInputValue) return true;
                    return city
                      .toLowerCase()
                      .includes(selectedCityInputValue.toLowerCase());
                  })
                  .map((city) => (
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
                  ))
              )}
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 w-full">
          {states?.slice(0, 3)?.map((city) => (
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
            {formNames.find((f) => f._id === selectedBillTypeInputValue)
              ?.formName || "All Bill Type"}
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
              {formNames.filter(
                (f) =>
                  f.forms.filter((f) =>
                    selectedCityInputValue
                      ? f.stateName === selectedCityInputValue
                      : true
                  ).length > 0
              ).length === 0 ? (
                <div className="text-center text-black/85">
                  No bills found
                </div>
              ) : (
                formNames
                  .filter(
                    (f) =>
                      f.forms.filter((f) =>
                        selectedCityInputValue
                          ? f.stateName === selectedCityInputValue
                          : true
                      ).length > 0
                  )
                  .map((f) => (
                    <button
                      key={f._id}
                      value={f._id}
                      onClick={(e) => {
                        setSelectedBillTypeInputValue(e.currentTarget.value);
                        setIsSelectBillTypeOpen(false);
                      }}
                      className={twMerge(
                        "w-full py-2 px-6 text-black/85 rounded-md text-left",
                        f._id === selectedBillTypeInputValue
                          ? "bg-gray-700"
                          : " hover:bg-gray-700"
                      )}
                    >
                      {f.formName}
                    </button>
                  ))
              )}
            </div>
          )}
        </button>
      </div>
      <Button onClick={onSubmit} variant="secondary" className="w-full">
        View All
      </Button>
    </div>
  );
};

export default HeroForm;
