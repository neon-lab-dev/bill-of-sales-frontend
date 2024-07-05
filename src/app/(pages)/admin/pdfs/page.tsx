"use client";

import React, { Children, useState } from "react";
import AdminNavbar from "../_components/AdminNavbar";
import AdminSiderbar from "../_components/AdminSiderbar";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import PdfModel from "./_components/PdfModel";
import Link from "next/link";
import {
  handleDeleteFormService,
  handleGetAllFormsService,
} from "@/services/forms";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import SomeErrorOccurred from "@/components/SomeErrorOccurred";
import { Loading } from "@/components/Loading";
import { toast } from "sonner";

const page = () => {
  const [value, setValue] = useState("");
  const queryClient = useQueryClient();
  const [deletingId, setDeletingId] = useState<string>("");
  const { isLoading, data, isError } = useQuery({
    queryKey: ["forms", value],
    queryFn: () => handleGetAllFormsService(value),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: handleDeleteFormService,
    onSuccess: (msg) => {
      queryClient.invalidateQueries({
        queryKey: ["forms"],
      });
      toast.success(msg);
    },
    onError: (err: string) => {
      toast.error(err);
    },
    onSettled: () => {
      setDeletingId("");
    },
  });

  if (isError) return <SomeErrorOccurred />;
  return (
    <>
      <div>
        <div className="flex">
          <AdminSiderbar />
          <div className="p-10 m-10 rounded-xl">
            <div className=" flex flex-col w-[1100px] rounded-xl bg-white">
              <div className=" bg-primary p-4 rounded-t-xl flex justify-between">
                <form className="max-w-md ">
                  <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                  >
                    Search
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-gray-500 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block w-full p-4 ps-10 text-sm text-gray-900 border border-white rounded-lg bg-white"
                      placeholder="Search by name"
                      required
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />{" "}
                  </div>
                </form>
                <button className="p-3 text-primary bg-white font-700 rounded-xl px-8">
                  <Link href="/admin/add-new-bill">Add New Bill</Link>
                </button>
              </div>
              <div className=" flex justify-between py-4 px-10 text-center text-[#7B809A] text-sm">
                <span className="w-[10px] ">Sno</span>
                <span className="w-[250px]">ID</span>
                <span className="w-[250px]">Name Of State</span>
                <span className="w-[250px]">Total Pdfs</span>
                <span className="w-[250px]">Action</span>
              </div>
              <hr className=" mx-10" />
              {isLoading ? (
                <div className="flex justify-center items-center h-[200px] w-full">
                  <span className="loading loading-spinner loading-sm"></span>
                </div>
              ) : data?.length === 0 ? (
                <div className="flex justify-center items-center h-[200px] w-full">
                  <span className="text-[#7B809A]">No Data Found</span>
                </div>
              ) : (
                data?.map((form, index) => (
                  <>
                    <div className=" flex justify-between py-4 px-10 text-center text-sm">
                      <span className="w-[40px] text-[#7B809A]">
                        {index + 1}
                      </span>
                      <span className="w-[250px] text-[#7B809A]">
                        {form._id}
                      </span>
                      <span className="w-[250px] font-900">
                        {form.formName}
                      </span>
                      <p className="w-[250px] text-[#7B809A]">
                        {form.forms?.length}
                      </p>
                      <div className="flex justify-center  gap-3 w-[250px]">
                        <PdfModel id={form._id} form={form} />
                        <button
                          onClick={() => {
                            setDeletingId(form._id);
                            mutate(form._id);
                          }}
                        >
                          {isPending && deletingId === form._id ? (
                            <>
                              <span className="loading loading-spinner loading-sm"></span>
                            </>
                          ) : (
                            <Image src={ICONS.bin} alt="" />
                          )}
                        </button>
                      </div>
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
export default page;
