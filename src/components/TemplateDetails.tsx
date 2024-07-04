import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Button";
import { IForm } from "@/types/form";
import Image from "next/image";
import React from "react";
import DownloadYourBill from "./DownloadYourBill";

type Props = {
  form: IForm;
};

const TemplateDetails = ({ form }: Props) => {
  const CTA_BUTTONS = [
    {
      label: "Word Version",
      img: ICONS.microsoftWord,
    },
    {
      label: "Adobe PDF",
      img: ICONS.pdf,
    },
    {
      label: "Fill Now",
      img: ICONS.pdf,
    },
  ];
  return (
    <div className="wrapper max-width flex flex-col pt-[36px] lg:pt-[80px] pb-[40px] gap-8 md:gap-10 xl:gap-12">
      <h1 className="text-gray-500 text-3xl sm:text-[34px] md:text-[42px] xl:text-[56px] font-500">
        {form.formName}
      </h1>
      <div className="flex-grow flex-col flex gap-4 bg-white rounded-2xl py-6">
        {/* bill preview */}
        <div className=" rounded-2xl p-2.5 md:p-5 flex flex-col gap-5">
          <Image
            src={form.forms[0]?.forms[0]?.thumbnailUrl ?? IMAGES.placeholder}
            alt="preview"
            className="w-full rounded-xl object-contain object-center"
            quality={100}
          />
          <div className="flex gap-8">
            {/* <div className="flex gap-1 items-center">
              <span className="text-sm md:text-lg mr-2"> Rating</span>
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={i < props.ratings ? ICONS.starFilled : ICONS.star}
                  alt="star"
                  width={20}
                  height={20}
                  className="h-[16px] w-[16px] md:h-[20px] md:w-[20px]"
                />
              ))}
              <span className="text-[#2B2C2F] text-base md:text-lg font-700 leading-[155%] ml-3">
                {props.ratings}
              </span>
              <span className="text-xs md:text-sm text-black/70 mt-[5px]">
                /5
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm md:text-lg text-black/70 leading-[200%]">
                {props.downloads} Downloads
              </span>
            </div> */}
          </div>
        </div>
        <div className="flex flex-col gap-8 px-6">
          {/* cta buttons to download */}
          <DownloadYourBill forms={form.forms} />
          <hr className="bg-gray-200" />

          {/* desc of bill */}
          <div className="text-black/70 text-sm md:text-base">
            {form.description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
