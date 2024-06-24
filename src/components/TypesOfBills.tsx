import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { twMerge } from "tailwind-merge";
import Button from "./Button";

const BILLS = [
  "Aircraft",
  "Automobile / Vehicle",
  "ATV",
  "Generic",
  "Boat / Vessel",
  "Cat / Kitten",
];

type Props = {
  type?: string;
};

const props = {
  img: IMAGES.preview,
  title: "Motor Vehicle Bill of Sale",
  downloads: 6034,
  ratings: 3,
};

export const TypesOfBills = ({ type = BILLS[0] }: Props) => {
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
      label: "Email PDF",
      img: ICONS.pdf,
    },
    {
      label: "Fill Now",
      img: ICONS.pdf,
    },
  ];

  return (
    <div className="wrapper max-width m-auto py-20 w-full">
      <div className="flex gap-6">
        {/* list of bills */}
        <div className="flex flex-col pr-6 w-[382px] bg-white h-fit pb-12 rounded-md">
          {BILLS.map((bill) => {
            const decodedBill = decodeURI(type.replace("-", "/"));
            const isActive = bill === decodedBill;
            return (
              <Link
                key={bill}
                scroll={false}
                href={`/bills/${encodeURI(bill.replace("/", "-"))}`}
                className={twMerge(
                  "w-full flex justify-between px-6 py-4",
                  isActive
                    ? "bg-primary text-white rounded-lg"
                    : "border-black/10 border-b text-black/85"
                )}
              >
                <span className="font-500 text-base leading-[120%]">
                  {bill}
                </span>
                <Image
                  src={ICONS.chevronRight}
                  alt="chevron-right"
                  height={24}
                  width={24}
                  className={isActive ? "invert" : ""}
                />
              </Link>
            );
          })}
        </div>
        <div className="flex-grow flex-col flex gap-4 bg-white rounded-2xl">
          {/* bill preview */}
          <div className="bg-blue-100 rounded-2xl p-5 flex flex-col gap-5">
            <Image
              src={IMAGES.preview}
              alt="preview"
              className="w-full rounded-xl"
              quality={100}
            />
            <div className="flex justify-between">
              <div className="flex items-center gap-2">
                <span className="text-lg font-600 text-black/75 leading-[155%]">
                  {props.title}
                </span>
                <span className="text-sm text-black/70 leading-[200%]">
                  ({props.downloads} Downloads)
                </span>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Image
                    key={i}
                    src={i < props.ratings ? ICONS.starFilled : ICONS.star}
                    alt="star"
                    width={20}
                    height={20}
                  />
                ))}
                <span className="text-[#2B2C2F] text-lg font-700 leading-[155%] ml-3">
                  {props.ratings}
                </span>
                <span className="text-sm text-black/70 mt-[5px]">/5</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 py-9 px-6">
            <div
              role="button"
              className="flex justify-between gap-6 items-center"
            >
              <span className="text-black/75 text-lg font-600">
                To download the bill select your state
              </span>
              <div className="flex border items-center justify-between rounded-md border-gray-300/80 px-3 py-3.5 flex-grow">
                <span className="text-gray-400/85">Select your state</span>
                <Image
                  src={ICONS.chevronRight}
                  alt="chevron-down"
                  width={24}
                  height={24}
                  className="rotate-90"
                />
              </div>
            </div>

            {/* cta buttons to download */}
            <div className="flex items-center gap-6 ">
              {CTA_BUTTONS.map(({ label, img }) => (
                <Button variant="primary" key={label}>
                  <Image src={img} alt={label} width={24} height={24} />
                  <span className="text-base font-600 text-white">{label}</span>
                </Button>
              ))}
            </div>
            <hr className="bg-gray-200" />

            {/* desc of bill */}
            <div className="text-black/70 max-w-[824px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora,
              repellat! Necessitatibus asperiores placeat molestias aliquid
              officiis reprehenderit nostrum facere. Odio temporibus quis
              aliquid maxime! Eius vero minima ducimus! Esse delectus earum iure
              quas, reiciendis perferendis nihil porro atque voluptatum aliquam
              ullam beatae similique ea doloremque qui minus dolorem
              reprehenderit, perspiciatis blanditiis doloribus possimus commodi.
              Et molestias quam aut, dolore non atque eligendi maxime alias
              reprehenderit reiciendis corporis, inventore quos quae vero dicta
              ullam provident, dolor earum
              <br />
              <br />
              nam? Magni ipsa eveniet quia facilis cum, hic impedit minima
              similique pariatur iure commodi doloribus necessitatibus!
              Perspiciatis aliquam numquam non. Id vel laborum dignissimos
              molestias quaerat pariatur tenetur asperiores labore nulla, a ea
              nisi autem ex aut expedita! Provident rem error, impedit
              voluptatibus consectetur totam laboriosam, consequatur quo cumque
              facilis modi blanditiis hic id sequi ratione nesciunt expedita?
              Quas, voluptatibus iste! Delectus et dicta quas ut, voluptates
              earum repudiandae dolore, velit aperiam ratione fugit odio
              consequatur deserunt? Minus consectetur voluptas incidunt quo odit
              animi esse soluta reiciendis corporis, labore provident culpa
              beatae tempore vero ullam quibusdam similique maxime impedit
              maiores deleniti sed, nisi totam.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
