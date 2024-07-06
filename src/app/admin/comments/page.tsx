"use client";
import React, { Children } from "react";
import AdminNavbar from "../_components/AdminNavbar";
import AdminSiderbar from "../_components/AdminSiderbar";
import Image from "next/image";
import { ICONS, IMAGES } from "@/assets";
import { useQuery } from "@tanstack/react-query";
import { handleGetAllCommentsService } from "@/services/comments";
import { Loading } from "@/components/Loading";
import SomeErrorOccurred from "@/components/SomeErrorOccurred";

const page = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["comments"],
    queryFn: handleGetAllCommentsService,
  });

  if (isError) return <SomeErrorOccurred />;

  return (
    <>
      <AdminNavbar />
      <div>
        <div className="flex">
          <AdminSiderbar />
          <div className="p-10 m-10 rounded-xl">
            <div className=" flex flex-col w-[1100px] rounded-xl bg-white">
              <div className=" bg-primary p-4 rounded-t-xl">
                <span className=" font-700 text-white">All Comments</span>
              </div>
              <div className=" flex justify-between py-4 px-10 text-center text-[#7B809A] text-sm">
                <span className="w-[10px] ">Sno</span>
                <span className="w-[240px]">EMAIL</span>
                <span className="w-[250px]">NAME</span>
                <span className="w-[500px]">COMMENT</span>
              </div>
              <hr className=" mx-10" />
              {isLoading ? (
                <div className="flex justify-center items-center h-[200px] w-full">
                  <span className="loading loading-spinner loading-sm"></span>
                </div>
              ) : data?.length === 0 ? (
                <div className="flex justify-center items-center h-[200px] w-full">
                  <span>No Comments Found</span>
                </div>
              ) : (
                data?.map((comment, index) => (
                  <>
                    <div className=" flex justify-between py-4 px-10 text-center text-sm">
                      <span className="w-[10px] text-[#7B809A]">
                        {index + 1}
                      </span>
                      <span className="w-[250px] text-[#7B809A]">
                        {comment.email}
                      </span>
                      <span className="w-[240px] font-900">{comment.name}</span>
                      <p className="w-[500px] text-[#7B809A]">
                        {comment.comment}
                      </p>
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
