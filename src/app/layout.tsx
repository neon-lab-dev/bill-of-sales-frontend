import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Bill of Sale",
  description:
    "A bill of sale represents a receipt for an exchange of goods between two (2) parties, buyer and seller. The buyer offers cash or trade to a seller for personal property with the most popular being vehicles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background">
        <Header />
        <main className="mt-[72px] md:mt-[80px] wrapper">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
