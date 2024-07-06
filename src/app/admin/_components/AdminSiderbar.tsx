"use client";

import { ICONS } from "@/assets";
import { handleLogoutService } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const AdminSiderbar = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { mutate, isPending } = useMutation({
    mutationFn: handleLogoutService,
    onSuccess: (msg) => {
      router.push("/");
      toast.success(msg);
      queryClient.invalidateQueries({
        queryKey: ["user"],
      });
    },
    onError: (err: string) => {
      toast.error(err);
    },
  });
  return (
    <div className=' h-screen w-[260px] border-2px border-r-[#c1ced6] border-y-0 border-l-0 bg-[#fffdfd]'>
        <div className='flex flex-col py-10 gap-10'>
            <div className='flex justify-start gap-4 px-12 items-center'>
                <Image src={ICONS.dashboard} alt='' className='w-[19px]' />
                <span className=' text-primary font-700 text-xl'><Link href="/admin/dashboard">DashBoard</Link></span>
            </div>
            <div className='flex justify-start gap-4 px-12 items-center'>
                <Image src={ICONS.pdflogo} alt='' className='w-[19px]' />
                <span className=' text-[#B1B1B1] font-700 text-xl'><Link href="/admin/pdfs">Pdfs</Link></span>
            </div>
            <div className='flex justify-start gap-4 px-12 items-center cursor-pointer'>
                <Image src={ICONS.comments} alt='' className='w-[19px]' />
                <span className=' text-[#B1B1B1] font-700 text-xl'><Link href="/admin/comments">Comment</Link></span>
            </div>
            <div className='flex justify-start gap-4 px-12 mb-20 absolute bottom-0 items-center'>
                <Image src={ICONS.logout} alt='' className='w-[19px]' />
                <span className=' text-[#B1B1B1] font-700 text-xl'><Link href="/">Logout</Link></span>
            </div>
        </div>
    </div>
  );
};

export default AdminSiderbar;
