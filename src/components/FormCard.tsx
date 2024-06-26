import { IMAGES } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FormCard = () => {
  return (
    <Link
      href={""}
      className="flex flex-col items-center justify-center rounded-2xl border border-[#DEDEDE] p-4"
    >
      <Image
        src={IMAGES.preview}
        alt="preview"
        className="rounded-xl min-w-[214px] md:min-w-[270px] h-[300px] md:h-[388px] object-cover object-top"
        quality={100}
      />
      <span className="text-sm md:text-lg font-700 text-black/75">
        Alabama Boat Bill of Sale
      </span>
    </Link>
  );
};

export default FormCard;
