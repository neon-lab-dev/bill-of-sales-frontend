"use client";
import NextTopLoader from "nextjs-toploader";

import React from "react";

const TopLoader = () => {
  return (
    <NextTopLoader
      color="#84b1fa"
      initialPosition={0.08}
      crawlSpeed={200}
      height={4}
      crawl={true}
      easing="ease"
      speed={200}
      shadow="0 0 10px #84b1fa,0 0 5px #84b1fa"
      zIndex={1600}
    />
  );
};

export default TopLoader;
