"use client";
import Image from "next/image";
import ThemeToogle from "@/components/theme/themeToogle/ThemeToogle";
import LoginForm from "./useFormLogin";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { error } from "console";
const Login = () => {
  const data = LoginForm();
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-between">
      <div className="flex w-full h-full flex-col relative bg-white dark:bg-medium justify-center">
        <div className="md:right-10 md:top-3 right-0 left-0 top-1 flex absolute md:py-3 py-1 md:justify-end justify-center mx-10 items-center flex-1">
          <ThemeToogle />
        </div>
        <div className="  justify-center lg:items-center items-center my-5  flex w-full h-full">
          <div className="xl:w-[40%] lg:w-[45%] rounded-lg shadow-md md:w-[55%] sm:w-[55%] w-[80%] h-[90%] dark:bg-white justify-center flex bg-medium">
            <div className="flex relative justify-start mt-10 items-center py-2 flex-col ">
              <div className="bg-white dark:bg-medium w-8 h-8 md:w-14 absolute md:h-14 mt-3 flex rounded-full items-center justify-center">
                <Image
                  width={500}
                  loading={"lazy"}
                  className="md:w-6 md:h-6 w-5 h-5"
                  height={500}
                  src={`/logo.png`}
                  alt="logo"
                />
              </div>
              <div className="md:pt-20 pt-12 dark:text-medium text-white font-poppins text-xl  font-medium">
                Dashboard Kit
              </div>
              <div className="dark:text-medium text-2xl py-2 w-full text-center font-medium font-poppins text-white justify-center flex">
                Log In to Dashboard Kit
              </div>
              <div className="dark:text-medium opacity-30 text-xl py-2 w-full text-center font-medium font-poppins text-white justify-center flex">
                Enter your email and password below
              </div>
              <div className="xl:mt-[-4rem] lg:-[-2rem] md:mt-[-2rem] mt-0 w-full h-full flex">
                <form
                  onSubmit={data.handleSubmit(data.onSubmit)}
                  className=" w-full justify-center md:py-12 py-1 md:h-full h-[70%] flex flex-col px-5"
                >
                  <div className="mb-2">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-white font-poppins dark:text-gray-600"
                    >
                      Email address
                    </label>
                    <input
                      {...data.register("email", {
                        required: "Email is required.",
                      })}
                      type="email"
                      id="email"
                      className={`bg-gray-50 border ${
                        data.errors.password ? 'border-red-500' : 'border-gray-300'
                      } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      placeholder="john.doe@company.com"
                    />
                  </div>
                  {data.errors.email && <p className="text-red-500">{data.errors.email.message}</p>}

                  <div className="mb-2">
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-white font-poppins dark:text-gray-600"
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={data.active ? "text" : "password"}
                        id="password"
                        placeholder="•••••••••"
                        {...data.register('password', {
                          required: 'Password is required',
                          minLength: {
                            value: 8,
                            message: 'Password must be at least 8 characters'
                          }
                        })}
                        className={`bg-gray-50 border ${
                          data.errors.password ? 'border-red-500' : 'border-gray-300'
                        } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                      />
                      <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        {data.active ? (
                          <FaEyeSlash
                            className="dark:text-white text-gray-600 w-4 h-4 cursor-pointer"
                            onClick={() => data.setActive(false)}
                          />
                        ) : (
                          <FaEye
                            className="dark:text-white text-gray-600 w-4 h-4 cursor-pointer"
                            onClick={() => data.setActive(true)}
                          />
                        )}
                      </div>
                    </div>
                      {data.errors.password && <p className="text-red-500">{data.errors.password.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm items-center sm:w-auto px-5 py-2.5 text-center justify-center flex dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
