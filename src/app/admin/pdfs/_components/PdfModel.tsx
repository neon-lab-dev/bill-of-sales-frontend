import React from "react";
import Image from "next/image";
import { ICONS } from "@/assets";
import Link from "next/link";
import Button from "@/components/Button";
import { IForm } from "@/types/form";

type Props = {
  form: IForm;
  id: string;
};

const PdfModel = ({ form, id }: Props) => {
  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor={id} className="">
        <Image src={ICONS.visibility} alt="" />
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle " />
      <div className="modal" role="dialog">
        <div className="modal-box max-w-6xl bg-white p-0 ">
          <div className=" flex flex-col rounded-xl bg-white ">
            <div className=" bg-primary p-4 rounded-t-xl flex justify-between">
              <span className=" text-xl p-2 text-white font-500">
                Available States
              </span>
            </div>
            <hr className=" mx-10" />
            {form.forms?.length === 0 ? (
              <div className="flex justify-center items-center h-[200px] w-full">
                <span>No Forms Found</span>
              </div>
            ) : (
              form.forms?.map((form, index) => (
                <div
                  key={index}
                  className="collapse collapse-arrow bg-base-200 px-12"
                >
                  <input type="radio" name="my-accordion-2" />
                  <div className="collapse-title text-xl font-medium text-left">
                    State: {form.stateName} - {form.forms.length} Forms
                  </div>
                  <div className="collapse-content">
                    <div className="flex flex-col gap-4 ">
                      {form.forms.length === 0 ? (
                        <div className="flex justify-center items-center h-[200px] w-full">
                          <span>No Forms Found</span>
                        </div>
                      ) : (
                        form.forms.map((form, index) => (
                          <div key={index} className="flex justify-between">
                            <span>{form._id}</span>
                            <Link
                              target="_blank"
                              className="underline"
                              href={form.url}
                            >
                              {form.url}
                            </Link>
                          </div>
                        ))
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
        <label className="modal-backdrop" htmlFor={id}>
          Close
        </label>
      </div>
    </div>
  );
};

export default PdfModel;
