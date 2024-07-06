import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TopLoader from "@/components/TopLoader";
import { Toaster } from "sonner";

const TITLE = "Bill of Sale";
const DESCRIPTION =
  "A bill of sale represents a receipt for an exchange of goods between two (2) parties, buyer and seller. The buyer offers cash or trade to a seller for personal property with the most popular being vehicles.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: [
    {
      url: "pdf.png",
    },
  ],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "bill-of-sale.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background overflow-x-hidden">
        
        <main className="">{children}</main>
        <TopLoader />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
