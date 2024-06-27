import Hero from "@/components/Hero";
import { BILLS, TypesOfBills } from "@/components/TypesOfBills";
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

// nextjs static generation
export async function generateStaticParams() {
  let params = BILLS.map((type) => ({ params: { type } }));
  return params;
}
