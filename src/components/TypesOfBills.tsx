import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import { getAllForms } from "@/services/forms";
import BillPreview from "./BillPreview";

type Props = {
  type?: string;
};

export const TypesOfBills = async ({ type = "" }: Props) => {
  let forms = await getAllForms();
  forms = forms.filter((form) => form.forms.length > 0);

  return (
    <div className="wrapper max-width m-auto py-16 xl:py-20 w-full flex flex-col gap-12 xl:gap-20">
      <div className="flex flex-col gap-6">
        <h3 className="text-gray-500 text-3xl md:text-[42px] xl:text-[56px] leading-[85%] font-700 text-center xl:text-left">
          All Type of Bills
        </h3>
        <div className="h-[9px] w-[181px] bg-gray-600/35 rounded hidden xl:block" />
      </div>
      <div className="flex gap-6 flex-col xl:flex-row">
        {/* list of bills */}
        <div className="flex xl:flex-col flex-row pr-6 xl:w-[382px] xl:min-w-[322px] xl:bg-white h-fit pb-5 sm:pb-12 rounded-md overflow-scroll xl:overflow-hidden w-full gap-7 xl:gap-0 ">
          {forms.map((bill) => {
            const isActive = bill._id === type;
            return (
              <Link
                key={bill._id}
                scroll={false}
                href={`/bills/${bill._id}`}
                className={twMerge(
                  "w-full min-w-fit sm:min-w-[222px] flex justify-between items-center px-6 py-2 xl:py-4 bg-white xl:bg-transparent rounded-full xl:rounded-none",
                  isActive
                    ? "bg-primary xl:bg-primary text-white rounded-full xl:rounded-lg"
                    : "border-black/10 xl:border-b text-black/85"
                )}
              >
                <span className="font-500 text-base leading-[120%] m-auto xl:m-0">
                  {bill.formName}
                </span>
                <Image
                  src={ICONS.chevronRight}
                  alt="chevron-right"
                  height={24}
                  width={24}
                  className={twMerge(
                    isActive ? "invert" : "",
                    "hidden xl:block"
                  )}
                />
              </Link>
            );
          })}
        </div>
        <BillPreview
          {...(forms.find((form) => form._id === type) || forms[0])}
        />
      </div>
    </div>
  );
};
