"use client";
import React, { Children, useState } from "react";
import AdminNavbar from "../_components/AdminNavbar";
import AdminSiderbar from "../_components/AdminSiderbar";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { handleGetAllFormsService } from "@/services/forms";
import AddNewBillModel from "./_components/AddNewBillModal";
import AddStateModal from "./_components/AddStateModal";

const Page = () => {
  const [value, setValue] = useState("");
  const { isLoading, data, isError } = useQuery({
    queryKey: ["forms", value],
    queryFn: () => handleGetAllFormsService(value),
  });
  return (
    <>
      <AdminNavbar />
      <div>
        <div className="flex">
          <AdminSiderbar />
          <div className="p-4 m-10 rounded-xl">
            <div>
              <Link href="/admin/pdfs">
                {" "}
                <Image
                  src={ICONS.arrow_right}
                  alt=""
                  className="mb-6 ml-2 w-[30px]"
                />
              </Link>
            </div>
            <div className=" flex flex-col w-[1000px] rounded-xl bg-white">
              <div className=" bg-primary p-4 rounded-t-xl flex justify-between">
                <span className=" text-xl p-2 text-white font-500">
                  Choose A Bill
                </span>
              </div>
              <div className="flex bg-white justify-between items-center h-[200px]">
                <div className="flex flex-col p-4 gap-3">
                  <label htmlFor="state">
                    <span className=" text-xl text-black font-700">
                      Bill Name :
                    </span>
                  </label>
                  <input
                    type="text"
                    className=" bg-white p-3 rounded-lg w-[400px] border"
                    placeholder="Enter the bill name"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>
                <AddNewBillModel />
              </div>
              <hr className=" mx-10" />
              <div className=" flex justify-between py-4 px-10 text-center text-[#7B809A] text-sm">
                <span className="w-[10px] ">Sno</span>
                <span className="w-[250px]">Bill Title</span>
                <span className="w-[250px]">Uploaded Image</span>
                <span className="w-[450px]">Description</span>
                <span className="w-[250px]">Action</span>
              </div>
              {isLoading ? (
                <div className="flex justify-center items-center h-[200px] w-full">
                  <span className="loading loading-spinner loading-sm"></span>
                </div>
              ) : data?.length === 0 ? (
                <div className="flex justify-center items-center h-[200px] w-full">
                  <span>No data Found</span>
                </div>
              ) : (
                data?.map((d, index) => (
                  <>
                    <div className=" flex justify-between py-4 px-10 text-center text-sm">
                      <span className="w-[40px] text-[#7B809A]">
                        {index + 1}.{" "}
                      </span>
                      <span className="w-[250px] text-[#7B809A]">
                        {d.formName}
                      </span>
                      <img
                        className="w-[250px] font-900 max-h-16 object-cover object-top"
                        src={d.thumbnail[0]?.url}
                        alt=""
                      />
                      <p className="w-[450px] text-[#7B809A] text-md">
                        {d.metaDescription}
                      </p>
                      <button
                        onClick={() =>
                          // @ts-ignore
                          document.getElementById(`state-${d._id}`).showModal()
                        }
                        className="flex justify-center  gap-3 w-[250px]"
                      >
                        Select
                      </button>
                      <AddStateModal id={d._id} formName={d.formName} />
                    </div>
                    {index !== data.length - 1 && <hr className="mx-10" />}
                  </>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Page;
