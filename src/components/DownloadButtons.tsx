"use client";
import React from "react";
import Button from "./Button";
import { handleDownloadFromUrl } from "@/helpers/handleDownloadFromUrl";
import Image from "next/image";
import { ICONS } from "@/assets";

type Props = {
  pdfUrl: string | undefined;
  docxUrl: string | undefined;
  stateName: string;
};

const DownloadButtons = ({ docxUrl, pdfUrl, stateName }: Props) => {
  return (
    <div className="flex flex-wrap gap-5">
      {pdfUrl && (
        <Button onClick={() => handleDownloadFromUrl(pdfUrl, stateName)}>
          <Image src={ICONS.pdf} width={24} alt="" height={24} />
          <span className="text-base font-600 text-white">Adobe PDF</span>
        </Button>
      )}
      {docxUrl && (
        <Button
          onClick={() => handleDownloadFromUrl(docxUrl, stateName)}
          variant="primary"
        >
          <Image src={ICONS.microsoftWord} width={24} alt="" height={24} />
          <span className="text-base font-600 text-white">Word Version</span>
        </Button>
      )}
    </div>
  );
};

export default DownloadButtons;
