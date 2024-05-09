import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

export const useCheckLogin = () => {
  const router = useRouter();
  const role = typeof window !== 'undefined' ? localStorage.getItem("role") : null;
  const pathname = usePathname()

  useEffect(() => {
    if (role !== null) {
      {
        if(pathname == '/login' ){
          router.push('/');
        }else{
          router.push(pathname);
        }
      }
    } else {
        router.push("/login");
    }
  }, [router, role])
};
