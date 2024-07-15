import GeneralBlankBillOfSale from "@/components/GeneralBlankBillOfSale";
import NotFound from "@/components/NotFound";
import TemplateDetails from "@/components/TemplateDetails";
import { getAllForms, getFormById } from "@/services/forms";
import React from "react";

type Props = {
  params: {
    templateId: string;
  };
};

const BillPage = async ({ params: { templateId } }: Props) => {
  const form = await getFormById(templateId);
  if (!form) return <NotFound />;
  return (
    <div>
      <TemplateDetails form={form} />
    </div>
  );
};

export default BillPage;

// next js static generation
// export async function generateStaticParams() {
//   const bills = await getAllForms();
//   let params = bills.map((type) => ({ params: { type: type._id } }));
//   return params;
// }

export const generateMetadata = async ({ params: { templateId } }: Props) => {
  const form = await getFormById(templateId);

  if (!form) {
    return {
      title: "Bill of Sale Not Found",
    };
  }
  return {
    title: `${form.formName} Bill of Sale`,
    description: form.metaDescription,
    openGraph: {
      title: `${form.formName} Bill of Sale`,
      description: form.metaDescription,
      images: [form.thumbnail[0].url],
    },
  };
};
