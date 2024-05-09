import { usePathname } from "next/navigation";
import Navbar from "../navbar/navbar";
import Sidebar from "../sidebar/sidebar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const pathName = usePathname();
  const hideSidebarNavbar = ["/forgot_password", "/login"].includes(pathName);

  return (
    <div className="flex h-screen overflow-hidden w-full">
      {!hideSidebarNavbar && <Sidebar />}
      <div className="flex flex-col w-[100%] overflow-x-hidden">
        {!hideSidebarNavbar && <Navbar />}
        {children}
      </div>
    </div>
  );
};
