import GeneralBlankBillOfSale from "@/components/GeneralBlankBillOfSale";
import NotFound from "@/components/NotFound";
import RelatedForms from "@/components/RelatedForms";
import TemplateDetails from "@/components/TemplateDetails";
import { searchByFormName } from "@/services/forms";
import React from "react";

type Props = {
  params: {
    keyword: string;
  };
};

const BillPage = async ({ params: { keyword } }: Props) => {
  const forms = await searchByFormName(keyword);
  if (!forms || forms.length === 0) return <NotFound />;
  return (
    <div>
      <TemplateDetails form={forms[0]} />
      {forms.length > 1 && keyword.toLowerCase().includes("general") ? (
        <GeneralBlankBillOfSale forms={forms.filter((_, i) => i !== 0)} />
      ) : (
        <RelatedForms forms={forms.filter((_, i) => i !== 0)} />
      )}
    </div>
  );
};

export default BillPage;
