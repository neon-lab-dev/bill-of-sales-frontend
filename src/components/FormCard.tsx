import { IMAGES } from "@/assets";
import { IForm } from "@/types/form";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  form: IForm;
};

const FormCard = ({ form }: Props) => {
  return (
    <Link
      href={`/templates/${form._id}`}
      className="flex flex-col items-center justify-center rounded-2xl border border-[#DEDEDE] p-4"
    >
      <Image
        src={form?.thumbnail[0].url ?? IMAGES.placeholder}
        alt="preview"
        className="rounded-xl min-w-[214px] md:min-w-[270px] h-[300px] md:h-[388px] object-cover object-top"
        quality={100}
        height={400}
        width={824}
      />
      <span className="text-sm md:text-lg font-700 text-black/75">
        {form.formName}
      </span>
    </Link>
  );
};

export default FormCard;
