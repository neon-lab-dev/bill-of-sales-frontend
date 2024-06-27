import React from "react";
import GenericBillCard from "./GenericBillCard";

const GeneralBlankBillOfSale = () => {
  return (
    <div className="max-width wrapper">
      <div className="bg-[#F7F7F8] w-full p-1 sm:px-5 py-8 rounded-lg flex flex-col gap-6">
        <h3 className="text-black/65 font-700 text-[20px]">
          Download a Generic Blank Bill of Sale
        </h3>
        <div className="flex flex-col gap-10">
          <GenericBillCard />
          <GenericBillCard />
          <GenericBillCard />
          <GenericBillCard />
          <GenericBillCard />
          <GenericBillCard />
        </div>
      </div>
    </div>
  );
};

export default GeneralBlankBillOfSale;
