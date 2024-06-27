import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const TemplateCard = () => {
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
    <div className="w-full bg-white rounded-lg py-3 md:py-6 px-2 md:px-4 flex flex-col gap-3 md:gap-6">
      <h3 className="text-center text-sm md:text-[22px] font-700">
        Alabama MVD Bill of Sale
      </h3>
      <Image
        src={IMAGES.templatePreview}
        alt=""
        className="h-[160px] sm:h-[323px] md:h-[290px] object-cover object-top w-full"
      />
      <p className="text-xs text-black/65">
        The Alabama abandoned vehicle bill of sale should be used under the
        following circumstances; If an entity has towed a vehicle and ha
        contacted the owner(s) via Certified Mail may sell the vehicle within
        sixty (60) days Notice of the time, date, and location of the sale must
        be publicized in the newspaper at least thirty (30) days before the sale
        with a full description of the vehicle. Further written notice of the
        sale of the vehicle must be given…
      </p>
      <div className="flex flex-wrap gap-5">
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
  );
};

export default TemplateCard;
