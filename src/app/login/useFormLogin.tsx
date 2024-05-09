"use client"
import { useEffect,useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Form {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>();
  
  const dataAdmin = {
    email: 'admin@gmail.com',
    password: 'test1234'
  };

  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (formRef.current) {
      formRef.current.focus();
    }
  }, []);
  const [active, setActive] = useState(false)

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const { email, password } = data;

    try {
      if (dataAdmin.email === email && dataAdmin.password === password) {
        localStorage.setItem('role', 'admin');
        router.push("/");
        toast.success("Login Sukses!, Welcome Admin", {
          position: "top-right",
        });
      } 
      else if (dataAdmin.email === email && dataAdmin.password !== password) {
        localStorage.setItem('role', 'admin');
        router.push("/login");
        toast.error("Login Gagal, Kamu bukan admin!", {
          position: "top-right",
        });
      }
      else {
        localStorage.setItem('role', 'guest');
        router.push("/");
        toast.success("Login sebagai Guest success!", {
          position: "top-right",
        });
      }
    } catch (error) {
      console.log(error);
      toast.error("Login Gagal!", {
        position: "top-right",
      });
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    active,
    setActive,
  };
};

export default LoginForm;
