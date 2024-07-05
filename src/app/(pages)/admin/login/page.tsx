"use client";

import { ICONS, IMAGES } from "@/assets";
import { handleLoginService } from "@/services/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { mutate, isPending } = useMutation({
    mutationFn: handleLoginService,
    onSuccess: (msg) => {
      queryClient
        .invalidateQueries({
          queryKey: ["user"],
        })
        .then(() => {
          toast.success(msg);
          router.push("/admin");
        })
        .catch((err) => {
          toast.error(err);
        });
    },
    onError: (err: string) => {
      toast.error(err);
    },
  });

  const onSubmit: SubmitHandler<any> = (data) => {
    mutate(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full overflow-hidden"
    >
      <div className=" flex flex-col w-1/2 p-[140px] bg-white">
        <Image src={ICONS.login} alt="logo" className="py-16 ml-28" />
        <div className="relative mb-6 ml-16">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Image src={IMAGES.mail} alt="lock" className="" />
          </div>
          <input
            type="email"
            id="input-group-1"
            className=" text-lg rounded-lg block border w-[400px] ps-10 p-2.5 placeholder:text-[#333333] "
            placeholder="name@flowbite.com"
            {...register("email", {
              required: "Email is required",
            })}
          />
          {errors.email && (
            <span className="text-red-500">
              {errors.email.message as string}
            </span>
          )}
        </div>
        <div className="relative mb-6 ml-16">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            <Image src={IMAGES.lock} alt="lock" />
          </div>
          <input
            type="password"
            id="input-group-1"
            className=" text-lg rounded-lg block border w-[400px] ps-10 p-2.5 placeholder:text-[#333333] "
            placeholder="name@flowbite.com"
            {...register("password", {
              required: "Password is required",
            })}
          />
          {errors.password && (
            <span className="text-red-500">
              {errors.password.message as string}
            </span>
          )}
        </div>
        <div className=" flex justify-center text-center ml-8">
          <button className=" text-white bg-[#3E6FBF] p-4 rounded-xl ml-2 text-center w-[400px]">
            <span className=" text-center">
              {isPending ? "Loading..." : "Login"}
            </span>
          </button>
        </div>
      </div>
      <div className=" flex justify-center  bg-[#D8DEE8] w-1/2 h-screen ">
        <Image src={IMAGES.loginGroup} alt="logo" className="  " />
      </div>
    </form>
  );
};
export default Login;
