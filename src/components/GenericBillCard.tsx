import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { IForm } from "@/types/form";
import DownloadButtons from "./DownloadButtons";

type Props = {
  form: IForm;
};

const GenericBillCard = ({ form }: Props) => {
  const pdf = form.forms[0].forms.find((form) => form.url.endsWith(".pdf"));
  const docx = form.forms[0].forms.find(
    (form) => form.url.endsWith(".doc") || form.url.endsWith(".docx")
  );
  return (
    <div
      style={{
        boxShadow: "0px 1px 50px 0px rgba(62, 111, 191, 0.12)",
      }}
      className="bg-white w-full flex-col lg:flex-row rounded-2xl flex gap-6 items-center p-4"
    >
      <Image
        src={form?.thumbnail[0].url ?? IMAGES.placeholder}
        height={300}
        width={300}
        alt=""
        className="rounded-xl w-full lg:w-[293px] h-[200px] sm:h-[293px] object-cover object-top border border-gray-50"
      />
      <div className="flex-grow flex flex-col gap-4 xl:mt-5">
        <h4 className="text-black/85 text-xl font-700">{form.formName}</h4>
        <p className="text-black/65">{form.metaDescription}</p>
        <div className="flex ml-auto gap-3 sm:gap-8 xl:mt-4 flex-wrap">
          <DownloadButtons
            docxUrl={docx?.url}
            pdfUrl={pdf?.url}
            stateName={form.forms[0].stateName}
          />
        </div>
      </div>
    </div>
  );
};

export default GenericBillCard;
