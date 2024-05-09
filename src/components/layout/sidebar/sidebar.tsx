import Image from "next/image";
import Link from "next/link";
import "./sidebar.css";
import { CiLogout } from "react-icons/ci";
import GetDataSidebar from "./useSidebar.hook";
import { lazy } from "react";
const Sidebar = () => {
  const data = GetDataSidebar();
  return (
    <div className="lg:w-96 bg-[#F7F8FC]  dark:bg-medium lg:flex hidden flex-col duration-500 min-h-screen border-r-[1px] border-[#A2A2A2]">
      <div className="fixed w-full xl:w-[18rem] lg:w-[17rem] justify-center flex h-[10vh]">
        <div className=" w-[70%] justify-evenly flex">
          <div className="flex justify-center items-center">
            <Image
              width={500}
              className="w-6 h-6"
              height={500}
              loading={'lazy'}
              src={`/logo.png`}
              alt="logo"
            />
          </div>
          <div className="lg:w-15 flex justify-center items-center">
            <h5 className="font-normal text-medium dark:text-gray-500">
              Dashboard Kit
            </h5>
          </div>
        </div>
      </div>
      <div
        className={`overflow-y-auto w-full flex-col  pt-[10vh] pb-10  h-full`}
      >
        {data.menu.map((item, index) => (
          <div
            key={index}
            className="flex-col flex justify-start items-center  "
          >
            <Link
              href={item.link}
              className={`${
                item.name === data.activeRoute
                  ? "active flex w-full bg-slate-200 dark:bg-[#3E4049] border-l-4 border-slate-600 dark:border-white px-2 my-2 py-3 flex-row justify-start items-center"
                  : "flex w-full my-2 py-3 px-2 flex-row justify-start items-center"
              }`}
            >
              <div className=" flex flex-row ml-4 w-full">
              <div className={`${
                  item.name === data.activeRoute
                  ? 'active text-slate-500 dark:text-[#4759c0]' : 'text-slate-500 dark:text-[#DDE2FF]'
                }hover:text-neutral-500 px-5`}>
                {item.icon}
              </div>
              {/* <img className={`w-8 h-8 mr-2`} src={item.icon} /> */}
              <div>
              <h5
                className={`${
                  item.name === data.activeRoute
                    ? "lg:text-base md:text-xs active font-medium text-slate-700 dark:text-[#DDE2FF] cursor-pointer"
                    : "lg:text-base md:text-xs font-normal text-slate-500 dark:text-[#DDE2FF] cursor-pointer"
                } hover:text-neutral-500 `}
              >
                {item.name}
              </h5>
              </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
        <div>
          <Link href={'/login'} onClick={data.handleLogOut} className="w-full py-5 border-t-2 border-slate-300 justify-start flex items-center">
            <div className="px-6">
              <CiLogout className="lg:text-base md:text-xs active font-medium w-6 h-6 text-slate-700 dark:text-[#DDE2FF] cursor-pointer"/>
            </div>
            <div>
            <h5 className="lg:text-base md:text-xs active font-medium text-slate-700 dark:text-[#DDE2FF] cursor-pointer">
              Log Out
            </h5>
            </div>
          </Link>
        </div>
    </div>
  );
};

export default Sidebar;
