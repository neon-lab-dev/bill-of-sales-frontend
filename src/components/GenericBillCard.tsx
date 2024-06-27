import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const GenericBillCard = () => {
  const CTA_BUTTONS = [
    {
      label: "Word Version",
      img: ICONS.microsoftWord,
    },
    {
      label: "Adobe PDF",
      img: ICONS.pdf,
    },
  ];
  return (
    <div
      style={{
        boxShadow: "0px 1px 50px 0px rgba(62, 111, 191, 0.12)",
      }}
      className="bg-white w-full flex-col lg:flex-row rounded-2xl flex gap-6 items-center p-4"
    >
      <Image
        src={IMAGES.preview}
        height={300}
        width={300}
        alt=""
        className="rounded-xl w-full lg:w-[293px] h-[200px] sm:h-[293px] object-cover object-top border border-gray-50"
      />
      <div className="flex-grow flex flex-col gap-4 xl:mt-5">
        <h4 className="text-black/85 text-xl font-700">
          Aircraft Bill of Sale
        </h4>
        <p className="text-black/65">
          The aircraft bill of sale is designated for the buying and selling of
          planes for private sellers. In order to facilitate the transaction,
          both parties should come to a verbal agreement for the terms of the
          sale. Once a deal has been reached the buyer and seller have the
          option of filling in one of the following forms: FAA Aircraft Bill of
          Sale (Form AC-8050-2) Private Aircraft Bill of Sale Microsoft Word
          (.doc) Adobe PDF How to Write (For FAA Aircraft Bill…
        </p>
        <div className="flex ml-auto gap-3 sm:gap-8 xl:mt-4 flex-wrap">
          {CTA_BUTTONS.map(({ label, img }) => (
            <Button variant="primary" key={label}>
              <Image
                src={img}
                alt={label}
                width={24}
                height={24}
                className="h-[14px] w-[14px] md:h-[24px] md:w-[24px] "
              />
              <span className="text-sm md:text-base font-600 text-white">
                {label}
              </span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GenericBillCard;
