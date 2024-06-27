import TemplateCard from "@/components/TemplateCard";

const SearchPage = () => {
  return (
    <div className="wrapper max-width">
      <div className="py-[31px] flex flex-col gap-5">
        <h2 className="text-gray-500 text-[34px] md:text-[42px] font-500 leading-[120%]">
          Alabama Bill of Sale Forms
        </h2>

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
