import { ModalProps } from "./useModal.Hook";
import Link from "next/link";
import "./modal.css";
import { useRouter } from "next/navigation";
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
              ? " bg-white md:w-1/3 w-full pr-2 h-full flex border-tl-8 items-start justify-between duration-500 flex-col"
              : " bg-white h-full w-0 flex duration-500 flex-col"
          }   `}
        >
          <div
            className={`${
              isVisible ? "overflow-y-scroll flex" : "hidden"
            } h-[85%] bottom-10 pt-5 md:pb-10 pb-0 flex justify-around items-center flex-col`}
          >
            {data.menu.map((item, index) => (
              <div
                key={index}
                className="flex-col flex justify-start items-center px-5 "
              >
                <Link
                  href={item.link}
                  className={`${
                    item.name === data.activeRoute
                      ? "active flex w-full bg-[#F1F5FF] px-2 my-2 py-3 flex-row justify-start items-center"
                      : "flex w-full bg-white my-2 py-3 flex-row justify-start items-center"
                  }`}
                >
                    {item.icon}
                  <h5
                    className={`${
                      item.name === data.activeRoute
                        ? "lg:text-base md:text-xs active font-bold text-[#0558FC] cursor-pointer"
                        : "lg:text-base md:text-xs font-normal text-[#A2A2A2] cursor-pointer"
                    } hover:text-neutral-500 `}
                  >
                    {item.name}
                  </h5>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
