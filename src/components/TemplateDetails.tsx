import { ICONS, IMAGES } from "@/assets";
import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const props = {
  img: IMAGES.preview,
  title: "Motor Vehicle Bill of Sale",
  downloads: 6034,
  ratings: 3,
};

const TemplateDetails = () => {
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
        Alabama Abandoned Car Bill of Sale
      </h1>
      <div className="flex-grow flex-col flex gap-4 bg-white rounded-2xl py-6">
        {/* bill preview */}
        <div className=" rounded-2xl p-2.5 md:p-5 flex flex-col gap-5">
          <Image
            src={IMAGES.preview}
            alt="preview"
            className="w-full rounded-xl"
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
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
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
          <hr className="bg-gray-200" />

          {/* desc of bill */}
          <div className="text-black/70 text-sm md:text-base">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
            repellat! Necessitatibus asperiores placeat molestias aliquid
            officiis reprehenderit nostrum facere. Odio temporibus quis aliquid
            maxime! Eius vero minima ducimus! Esse delectus earum iure quas,
            reiciendis perferendis nihil porro atque voluptatum aliquam ullam
            beatae similique ea doloremque qui minus dolorem reprehenderit,
            perspiciatis blanditiis doloribus possimus commodi. Et molestias
            quam aut, dolore non atque eligendi maxime alias reprehenderit
            reiciendis corporis, inventore quos quae vero dicta ullam provident,
            dolor earum
            <br />
            <br />
            nam? Magni ipsa eveniet quia facilis cum, hic impedit minima
            similique pariatur iure commodi doloribus necessitatibus!
            Perspiciatis aliquam numquam non. Id vel laborum dignissimos
            molestias quaerat pariatur tenetur asperiores labore nulla, a ea
            nisi autem ex aut expedita! Provident rem error, impedit
            voluptatibus consectetur totam laboriosam, consequatur quo cumque
            facilis modi blanditiis hic id sequi ratione nesciunt expedita?
            Quas, voluptatibus iste! Delectus et dicta quas ut, voluptates earum
            repudiandae dolore, velit aperiam ratione fugit odio consequatur
            deserunt? Minus consectetur voluptas incidunt quo odit animi esse
            soluta reiciendis corporis, labore provident culpa beatae tempore
            vero ullam quibusdam similique maxime impedit maiores deleniti sed,
            nisi totam.
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateDetails;
