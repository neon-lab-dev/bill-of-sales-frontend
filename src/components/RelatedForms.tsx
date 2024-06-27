import FormCard from "@/components/FormCard";
import React from "react";

const RelatedForms = () => {
  return (
    <div className="bg-white w-full">
      <div className="wrapper max-width py-[42px] w-full flex flex-col gap-4">
        <h3 className="font-700 text-[22px] text-black/75">Related Forms</h3>
        <div className="w-full overflow-hidden">
          <div className="flex items-center gap-5 overflow-auto w-full">
            <FormCard />
            <FormCard />
            <FormCard />
            <FormCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedForms;
