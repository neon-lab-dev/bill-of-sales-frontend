import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { IForm } from "@/types/form";
import Link from "next/link";
import { handleDownloadFromUrl } from "@/helpers/handleDownloadFromUrl";
import DownloadButtons from "./DownloadButtons";

type Props = {
  form: IForm;
};

const TemplateCard = ({ form }: Props) => {
  const pdf = form.forms[0].forms.find((form) => form.url.endsWith(".pdf"));
  const docx = form.forms[0].forms.find(
    (form) => form.url.endsWith(".doc") || form.url.endsWith(".docx")
  );
  return (
    <div className="w-full bg-white rounded-lg py-3 md:py-6 px-2 md:px-4 flex flex-col gap-3 md:gap-6">
      <h3 className="text-center text-sm md:text-[22px] font-700">
        {form.formName}
      </h3>
      <Link href={`/templates/${form._id}`} className="group overflow-hidden">
        <Image
          src={form?.thumbnail[0].url ?? IMAGES.placeholder}
          alt=""
          className="h-[160px] sm:h-[323px] md:h-[290px] object-cover object-center w-full group-hover:scale-105 transition-all rounded-md"
          height={400}
          width={824}
        />
      </Link>
      <p className="text-xs text-black/65">
        The Alabama abandoned vehicle bill of sale should be used under the
        following circumstances; If an entity has towed a vehicle and ha
        contacted the owner(s) via Certified Mail may sell the vehicle within
        sixty (60) days Notice of the time, date, and location of the sale must
        be publicized in the newspaper at least thirty (30) days before the sale
        with a full description of the vehicle. Further written notice of the
        sale of the vehicle must be given…
      </p>
      <DownloadButtons
        docxUrl={docx?.url}
        pdfUrl={pdf?.url}
        stateName={form.forms[0].stateName}
      />
    </div>
  );
};

export default TemplateCard;
