import GeneralBlankBillOfSale from "@/components/GeneralBlankBillOfSale";
import RelatedForms from "@/components/RelatedForms";
import TemplateDetails from "@/components/TemplateDetails";
import { getAllForms, getFormById, searchByFormName } from "@/services/forms";
import React from "react";

type Props = {
  params: {
    keyword: string;
  };
};

const BillPage = async ({ params: { keyword } }: Props) => {
  const forms = await searchByFormName(keyword);
  if (!forms || forms.length === 0)
    return (
      <div>
        <h1>Form not found</h1>
      </div>
    );
  return (
    <div>
      <TemplateDetails form={forms[0]} />
      {keyword.toLowerCase().includes("general") ? (
        <GeneralBlankBillOfSale forms={forms.filter((_, i) => i !== 0)} />
      ) : (
        <RelatedForms forms={forms.filter((_, i) => i !== 0)} />
      )}
    </div>
  );
};

export default BillPage;
