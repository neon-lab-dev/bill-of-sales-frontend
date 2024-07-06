"use client";

import { handleGetMeService } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const { isLoading, isError } = useQuery({
    queryKey: ["user"],
    queryFn: handleGetMeService,
    retry: false,
    enabled: pathname !== "/admin/login",
  });

  useEffect(() => {
    if (!isLoading && isError && pathname !== "/admin/login") {
      router.push("/admin/login");
    }
  }, [isLoading, isError]);

  if (isLoading) return <div>Loading...</div>;
  if (isError && pathname !== "/admin/login") {
    return null;
  }

  return <div>{children}</div>;
};

export default AuthProvider;
