import GeneralBlankBillOfSale from "@/components/GeneralBlankBillOfSale";
import RelatedForms from "@/components/RelatedForms";
import TemplateDetails from "@/components/TemplateDetails";
import React from "react";

type Props = {
  params: {
    templateId: string;
  };
};

const BillPage = ({ params: { templateId } }: Props) => {
  return (
    <div>
      <TemplateDetails />
      {/* <RelatedForms /> */}
      <GeneralBlankBillOfSale />
    </div>
  );
};

export default BillPage;

// todo nextjs static generation
// export async function generateStaticParams() {
//   let params = BILLS.map((type) => ({ params: { type } }));
//   return params;
// }
