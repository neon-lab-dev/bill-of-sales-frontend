import React from "react";
import GenericBillCard from "./GenericBillCard";
import { IForm } from "@/types/form";

type Props = {
  forms: IForm[];
};

const GeneralBlankBillOfSale = ({ forms }: Props) => {
  return (
    <div className="max-width wrapper">
      <div className="bg-[#F7F7F8] w-full p-1 sm:px-5 py-8 rounded-lg flex flex-col gap-6">
        <h3 className="text-black/65 font-700 text-[20px]">
          Download a Generic Blank Bill of Sale
        </h3>
        <div className="flex flex-col gap-10">
          {forms.map((form) => (
            <GenericBillCard key={form._id} form={form} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GeneralBlankBillOfSale;
