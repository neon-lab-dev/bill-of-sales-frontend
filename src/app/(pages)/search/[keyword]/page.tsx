import GeneralBlankBillOfSale from "@/components/GeneralBlankBillOfSale";
import NotFound from "@/components/NotFound";
import RelatedForms from "@/components/RelatedForms";
import TemplateDetails from "@/components/TemplateDetails";
import { searchByFormName } from "@/services/forms";
import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    keyword: string;
  };
};

const BillPage = async ({ params: { keyword } }: Props) => {
  const forms = await searchByFormName(keyword);
  if (!forms || forms.length === 0) return <NotFound />;
  const [first, ...rest] = forms;
  return (
    <div>
      <TemplateDetails form={forms[0]} />
      {forms.length > 1 ? (
        <GeneralBlankBillOfSale forms={[first]} />
      ) : (
        <RelatedForms forms={rest} />
      )}
    </div>
  );
};

export default BillPage;

export const generateMetadata = async ({
  params: { keyword },
}: Props): Promise<Metadata> => {
  const forms = await searchByFormName(keyword);

  if (!forms || forms.length === 0) {
    return {
      title: "Bill of Sale Not Found",
    };
  }
  return {
    title: `${forms[0].formName} Bill of Sale`,
    description: forms[0].metaDescription,
    openGraph: {
      title: `${forms[0].formName} Bill of Sale`,
      description: forms[0].metaDescription,
      images: [forms[0].thumbnail[0].url],
    },
  };
};
