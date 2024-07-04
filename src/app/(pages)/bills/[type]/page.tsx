import Hero from "@/components/Hero";
import { TypesOfBills } from "@/components/TypesOfBills";
import { getAllForms } from "@/services/forms";
import React from "react";

type Props = {
  params: {
    type: string;
  };
};

const BillPage = ({ params: { type } }: Props) => {
  return (
    <div>
      <Hero />
      <TypesOfBills type={type} />
    </div>
  );
};

export default BillPage;

// next js static generation
export async function generateStaticParams() {
  const billNames = await getAllForms();
  let params = billNames.map((type) => ({ params: { type: type._id } }));
  return params;
}
