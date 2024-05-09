"use client";
import { ModalProps } from "./_useModal.Hook";
import Link from "next/link";
import { useRouter } from "next/navigation";
import GetDataModalSmall from "./_useModal.Hook";
import { IoClose } from "react-icons/io5";

const Modal: React.FC<ModalProps> = ({
  isVisibleSmall,
  setIsVisibleSmall,
  onCloseSmall,
  children
}) => {
  const modal = GetDataModalSmall();
  return (
    <>
      <div
        className={`
          ${
            isVisibleSmall
              ? "z-20 top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex w-screen h-screen overlow-hidden   backdrop-blur-sm"
              : "z-20 w-[0px] top-0 right-0 bottom-0 left-0 fixed bg-black bg-opacity-50 flex  h-screen overlow-hidden   backdrop-blur-sm "
          }
          `}
      >
        <div
          onClick={() => onCloseSmall()}
          className=" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"
        ></div>
        <div className=" h-screen flex lg:w-[40%] w-full flex-col ">
          <div onClick={() => onCloseSmall()} className="md:h-[10%] h-[10%]  w-full"></div>
          <div className="h-full relative overflow-y-scroll rounded-md bg-white w-full">
            <div
              onClick={() => onCloseSmall()}
              className="z-10 right-0 absolute h-[5%] flex justify-end items-center  "
            >
              <IoClose className="h-6 w-6 " />
            </div>
           {
            children
           }
          </div>
          <div onClick={() => onCloseSmall()} className="md:h-[10%] h-[10%]  w-full"></div>
        </div>
        <div
          onClick={() => onCloseSmall()}
          className=" h-screen flex lg:w-[30%] w-[5%]  md:w-[20%]"
        ></div>
      </div>
    </>
  );
};

export default Modal;
