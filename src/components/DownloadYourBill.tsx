"use client";

import { ICONS } from "@/assets";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import { IForm } from "@/types/form";
import { twMerge } from "tailwind-merge";
import { handleDownloadFromUrl } from "@/helpers/handleDownloadFromUrl";
import { usePathname, useSearchParams } from "next/navigation";

type Props = {
  forms: IForm["forms"];
};

const DownloadYourBill = ({ forms }: Props) => {
  const states = forms?.map((state) => state.stateName);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");

  const pdf = forms
    ?.find((f) => f.stateName === selectedState)
    ?.forms.find((form) => form.url.endsWith(".pdf"));

  const docx = forms
    ?.find((f) => f.stateName === selectedState)
    ?.forms.find(
      (form) => form.url.endsWith(".doc") || form.url.endsWith(".docx")
    );

  return (
    <>
      <div
        role="button"
        className="flex justify-between flex-col gap-3 sm:flex-row sm:gap-6 sm:items-center max-w-2xl"
      >
        <span className="text-black/75 text-sm xl:text-lg font-600">
          To download the bill select your state
        </span>
        <div
          role="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={twMerge(
            "flex border items-center text-sm xl:text-base justify-between gap-x-12 border-gray-300/80 px-3 py-3.5 flex-grow relative transition-all",
            isOpen ? "rounded-t-md" : "rounded-md"
          )}
        >
          <span className="text-gray-400/85">
            {selectedState || "Select your state"}
          </span>
          <Image
            src={ICONS.chevronRight}
            alt="chevron-down"
            width={24}
            height={24}
            className="rotate-90"
          />
          {isOpen && (
            <div className="absolute shadow-xl top-full left-0 overflow-y-auto py-4 px-2 rounded-b-xl w-full h-fit max-h-[250px] md:max-h-[400px] bg-white flex flex-col gap-2">
              {states.map((f) => (
                <button
                  key={f}
                  value={f}
                  onClick={() => {
                    setSelectedState(f);
                  }}
                  className={twMerge(
                    "w-full py-2 px-6 text-black/85 rounded-md text-left",
                    f === selectedState ? "bg-gray-700" : " hover:bg-gray-700"
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* cta buttons to download */}
      <div className="flex items-center gap-6 flex-wrap">
        {
          <Button
            onClick={() => handleDownloadFromUrl(pdf?.url, selectedState)}
            variant="primary"
          >
            <Image src={ICONS.pdf} width={24} alt="" height={24} />
            <span className="text-base font-600 text-white">Adobe PDF</span>
          </Button>
        }
        <Button
          onClick={() => handleDownloadFromUrl(docx?.url, selectedState)}
          variant="primary"
        >
          <Image src={ICONS.microsoftWord} width={24} alt="" height={24} />
          <span className="text-base font-600 text-white">Word Version</span>
        </Button>
      </div>
    </>
  );
};

export default DownloadYourBill;
