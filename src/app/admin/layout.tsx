"use client"
import "../globals.css";
import TopLoader from "@/components/TopLoader";
import { Toaster } from "sonner";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";
import { useEffect, useState } from "react";
import ScreenWarning from "./pdfs/_components/ScreenWarning";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsSmallScreen(width <= 1300);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <html lang="en">
      <ReactQueryClientProvider>
        <body className="bg-background overflow-x-hidden">
        {isSmallScreen ? (
        <div className='flex justify-center w-full h-screen'>
          <ScreenWarning/>
        </div>
        ) : (
          <div>
             <main className="">{children}</main>
          <TopLoader />
          <Toaster richColors position="top-right" />
          </div>
        )}
        </body>
      </ReactQueryClientProvider>
    </html>
  );
}
