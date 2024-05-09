import Image from "next/image";
import "./navbar.css";
import { motion } from "framer-motion";
import Modal from "../../modal/modalSidebar/modal";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseOutline } from "react-icons/io5";
import GetDataSidebar from "../sidebar/useSidebar.hook";
import GetDataModal from "../../modal/modalSidebar/useModal.Hook";
import ThemeToogle from "@/components/theme/themeToogle/ThemeToogle";
const Navbar = () => {
  const data = GetDataSidebar();
  const modal = GetDataModal();
  return (
    <>
      <Modal
        isVisible={modal.modal.isVisible}
        setIsVisible={modal.modal.setIsVisible}
        onClose={() => modal.modal.setIsVisible(false)}
      />
      <div className="width p-7 fixed sm:ml-0 flex  h-[10vh] w-full border-b-[1px]  md:w-[100%] dark:bg-medium bg-[#F7F8FC] lg:dark:bg-[#F7F8FC] lg:bg-[#F7F8FC]">
        <div className=" w-full flex flex-row justify-between">
          <div className="flex">
            <h5 className="text-slate-700 dark:text-slate-700 lg:flex hidden">
              {`${data.activeRoute} ${
                data.secondSegment !== null ? `| ${data.secondSegment}` : ""
              }`}
            </h5>
            <div className="lg:hidden flex justify-center items-center pr-3">
              <Image
                width={1000}
                className="w-10 h-10`"
                height={1000}
                loading="lazy"
                src={`/logo.png`}
                alt="logo"
              />
            </div>
            <div className="lg:w-15 w-full  lg:hidden flex justify-center items-center">
              <h6 className="lg:text-medium lg:dark:text-medium dark:text-white text-sm text-white font-semibold">Develoment Kit</h6>
            </div>
          </div>
          <div className="lg:flex hidden justify-center items-center">
            <ThemeToogle />
          </div>
          <div className="lg:hidden  flex flex-row  h-full justify-end items-center lg:w-3/4 w-1/2">
            <motion.div
              onClick={() => {
                modal.modal.setIsVisible(!modal.modal.isVisible);
                modal.toggleMenu();
              }}
              className="flex  items-center  cursor-pointer  p-2"
              variants={modal.iconVariants}
              initial={false}
              animate={modal.showMenu ? "open" : "closed"}
            >
              {modal.modal.isVisible == true ? (
                <IoCloseOutline className="z-30 text-blue-500 w-9 h-9" />
              ) : (
                <GiHamburgerMenu className="z-30  text-blue-500 w-7 h-7" />
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
