import { ICONS, IMAGES } from "@/assets";
import Image from "next/image";
import React, { Suspense } from "react";
import Button from "./Button";
import CommentForm from "./CommentForm";
import DownloadYourBill from "./DownloadYourBill";
import { IForm } from "@/types/form";

type Props = IForm;

const BillPreview = (props: Props) => {
  return (
    <div className="flex-grow flex flex-col gap-3">
      <div className="flex-col flex gap-4 bg-white rounded-2xl">
        {/* bill preview */}
        <div className="bg-blue-100 rounded-2xl p-5 flex flex-col gap-5">
          <Image
            src={props.forms[0]?.forms[0]?.thumbnailUrl ?? IMAGES.placeholder}
            alt="preview"
            className="w-full rounded-xl max-h-[400px] object-cover object-center"
            quality={100}
          />
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <span className="text-lg font-600 text-black/75 leading-[155%]">
                {props.formName}
              </span>
              <span className="text-sm text-black/70 leading-[200%]">
                {/* ({props.downloads} Downloads) */}
              </span>
            </div>
            <div className="flex gap-1">
              {/* {[...Array(5)].map((_, i) => (
            <Image
              key={i}
              src={i < props.ratings ? ICONS.starFilled : ICONS.star}
              alt="star"
              width={20}
              height={20}
            />
          ))}
          <span className="text-[#2B2C2F] text-lg font-700 leading-[155%] ml-3">
            {props.ratings}
          </span>
          <span className="text-sm text-black/70 mt-[5px]">/5</span> */}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-9 px-6">
          <Suspense fallback={<div>Loading...</div>}>
            <DownloadYourBill forms={props.forms} />
          </Suspense>
          <hr className="bg-gray-200" />

          {/* desc of bill */}
          <div className="text-black/70 max-w-[824px]">{props.description}</div>
        </div>
      </div>
      <CommentForm formId={props._id} />
    </div>
  );
};

export default BillPreview;
