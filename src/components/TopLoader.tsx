"use client";
import NextTopLoader from "nextjs-toploader";

import React from "react";

const TopLoader = () => {
  return (
    <NextTopLoader
      color="#d63509"
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #d63509,0 0 5px #d63509"
      zIndex={1600}
    />
  );
};

export default TopLoader;
