"use client";

import TemplateCard from "@/components/TemplateCard";

const SearchPage = () => {
  return (
    <div className="wrapper max-width">
      <div className="py-[31px] flex flex-col gap-5">
        <h2 className="text-gray-500 text-[34px] md:text-[42px] font-500 leading-[120%]">
          Alabama Bill of Sale Forms
        </h2>
        <p className="text-black/65 text-sm md:text-base">
          Alabama bill of sale forms are used as the written contract for any
          vehicle, vessel, or thing that can be purchased and sold. The most
          common type is for automobiles and this type of form must be completed
          and submitted for registration within twenty (20) days to any
          Department of Revenue location by County (Find Office).
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
          <TemplateCard />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
