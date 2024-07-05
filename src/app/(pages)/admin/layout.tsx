import AuthProvider from "@/providers/AuthProvider";
import { ReactQueryClientProvider } from "@/providers/ReactQueryClientProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Admin | Bill of Sale",
};

const AdminLayout = ({ children }: Props) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AdminLayout;
