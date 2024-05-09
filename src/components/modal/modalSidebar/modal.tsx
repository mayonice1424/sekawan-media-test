import { ModalProps } from "./useModal.Hook";
import Link from "next/link";
import "./modal.css";
import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";
import GetDataModal from "./useModal.Hook";
import GetDataSidebar from "../../layout/sidebar/useSidebar.hook";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const Modal: React.FC<ModalProps> = ({ isVisible, setIsVisible, onClose }) => {
  const router = useRouter();
  const data = GetDataSidebar();
  const modal = GetDataModal();
  return (
    <>
      <div
        className={`${
          isVisible
            ? " z-20 fixed lg:hidden flex w-full h-full overlow-hidden duration-500 flex-row backdrop-blur-sm justify-end "
            : " z-20 fixed w-[0] h-full md:hidden flex duration-500 justify-end "
        } mt-[10vh]`}
      >
        <div
          onClick={() => onClose()}
          className={`${
            isVisible
              ? "bg-black md:w-full w-1/3 duration-500 "
              : " bg-black h-full w-0 duration-500 "
          }  bg-opacity-50 h-full `}
        ></div>
        <div
          className={`${
            isVisible
              ? " bg-[#F7F8FC] dark:bg-medium md:w-1/3 w-full relative h-full flex border-tl-8 items-start justify-between duration-500 flex-col"
              : " h-full w-0 flex duration-500 flex-col"
          }   `}
        >
          <div
            className={`${
              isVisible ? "overflow-y-scroll flex" : "hidden"
            } h-[85%] bottom-10 w-full md:pb-10 pb-0 flex justify-start items-center flex-col`}
          >
            {data.menu.map((item, index) => (
              <div
                key={index}
                className="flex-col w-full flex justify-start items-center  "
              >
                <Link
                  href={item.link}
                  className={`${
                    item.name === data.activeRoute
                      ? "active flex w-full bg-slate-200 dark:bg-[#3E4049] border-l-4 border-slate-600 dark:border-white px-2 my-2 py-3 flex-row justify-start items-center"
                      : "flex w-full my-2  px-2 py-3 flex-row justify-start items-center"
                  }`}
                >
                  <div
                    className={`${
                      item.name === data.activeRoute
                        ? "active text-slate-500 dark:text-[#DDE2FF]"
                        : "text-slate-500 dark:text-[#DDE2FF]"
                    }hover:text-neutral-500 px-5`}
                  >
                    {item.icon}
                  </div>
                  <h5
                    className={`${
                      item.name === data.activeRoute
                        ? "lg:text-base md:text-xs active font-bold text-slate-700 dark:text-[#DDE2FF] cursor-pointer"
                        : "lg:text-base md:text-xs font-normal text-slate-500 dark:text-[#DDE2FF]cursor-pointer"
                    } hover:text-neutral-500 `}
                  >
                    {item.name}
                  </h5>
                </Link>
              </div>
            ))}
          </div>
          <Link
            href={"/login"}
            onClick={data.handleLogOut}
            className="absolute w-full flex border-t-2 border-slate-300 justify-start px-5 h-[19%]  bottom-0"
          >
            <div className="pt-3 flex flex-row">
              <div className="pr-2 pt-[0.1rem]">
                <CiLogout className="lg:text-xs md:text-xs font-medium w-6 h-6 text-slate-700 dark:text-[#DDE2FF] cursor-pointer" />
              </div>
              <div className="">
              <h5 className="lg:text-xs md:text-xs font-medium text-slate-700 dark:text-[#DDE2FF] cursor-pointer">
                Log Out
              </h5>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Modal;
