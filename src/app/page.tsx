"use client"
import Image from "next/image";
import Link from "next/link";
import { useCheckLogin } from "@/middleware/useCheckLogin";

const Overview = () => {
  useCheckLogin();

  return (
    <main className="flex min-h-screen dark:bg-[#F7F8FC] bg-[#F7F8FC] w-full flex-col items-center justify-center m-0">
      <div className="mt-[10vh] overflow-y-auto w-full items-center flex flex-col">
       
      </div>
    </main>
  );
};

export default Overview;