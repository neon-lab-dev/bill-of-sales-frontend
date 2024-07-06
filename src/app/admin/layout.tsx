"use client"
import React, { useState, useEffect } from 'react';
import "../globals.css";
import TopLoader from '@/components/TopLoader';
import { Toaster } from 'sonner';


export default function EmployeeRootLayout({ children }: any) {
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
    <body className="bg-background overflow-x-hidden">
    <html lang="en">
      <body className="bg-background overflow-x-hidden">
        
        <main className="">{children}</main>
        <TopLoader />
        <Toaster richColors position="top-right" />
      </body>
    </html>
    </body>
  </html>
  );
}