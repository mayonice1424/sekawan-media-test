"use client";
import { PropsData } from "./ticket/useData.hook";
import GetDataTicket from "./ticket/useData.hook";
import AddButton from "@/components/theme/button/addButton";
import { useCheckLogin } from "@/middleware/useCheckLogin";
import Modal from "@/components/modal/modalSmall/modal";
import { AddFormTicket } from "@/components/ticket/ticketAdd";
import GetDataSidebar from "@/components/layout/sidebar/useSidebar.hook";
import GetOverViewData from "@/components/overview/useOverview.hook";
const Overview = () => {
  useCheckLogin();
  const overview = GetOverViewData()
  const data = GetDataTicket();
  const checkAdmin = GetDataSidebar();
  return (
    <>
      <Modal
        isVisibleSmall={data.isVisibleAddModal}
        setIsVisibleSmall={data.setIsVisibleAddModal}
        onCloseSmall={() => data.setIsVisibleAddModal(false)}
      >
        <div className="flex relative justify-start pt-3 h-full  items-start flex-col">
          <div className="w-full h-full ">
            <AddFormTicket
              setVisible={data.setIsVisibleAddModal}
              isVisible={data.isVisibleAddModal}
            />
          </div>
        </div>
      </Modal>
      <main className="flex min-h-screen dark:bg-[#F7F8FC] bg-[#FAFAFAFA] w-full flex-col items-center justify-center m-0  ">
        <div
          className={`mt-[10vh] overflow-y-auto w-full h-full    pt-10 ${
            checkAdmin.isAdmin
              ? "items-center justify-center flex"
              : "justify-start items-start"
          } flex flex-col `}
        >
          <div className={`w-full flex h-full md:px-10 px-2`}>
            <>
              {checkAdmin.isAdmin === true ? (
                 <div className=" w-full flex-wrap flex h-1/3  justify-evenly">
                 <div className="shadow-md rounded-lg w-60 h-28 justify-center flex items-center">
                   <div>
                     <h6>Unresolve</h6>
                     <h5  className="text-center">{overview.unresolve}</h5>
                   </div>
                 </div>
                 <div className="shadow-md rounded-lg w-60 h-28 justify-center flex items-center">
                   <div>
                     <h6>Overdue</h6>
                     <h5  className="text-center">{overview.overdue}</h5>
                   </div>
                 </div>{" "}
                 <div className="shadow-md rounded-lg w-60 h-28 justify-center flex items-center">
                   <div>
                     <h6>Open</h6>
                     <h5  className="text-center">{overview.open}</h5>
                   </div>
                 </div>{" "}
                 <div className="shadow-md rounded-lg w-60 h-28 justify-center flex items-center">
                   <div>
                     <h6>On Hold</h6>
                     <h5 className="text-center">{overview.onHold}</h5>
                   </div>
                 </div>
               </div>
              ) : (
                <div className="w-full h-full flex-col justify-around items-center flex ">
                  <div>
                    <AddButton
                      text="Tambah Data"
                      className="text-base py-2"
                      onClick={() =>
                        data.setIsVisibleAddModal(!data.isVisibleAddModal)
                      }
                    />
                  </div>
                  <div>
                    <h5 >Guest Just Have Authoritize to Create Ticket</h5>
                  </div>
                </div>
              )}
            </>
          </div>
        </div>
      </main>
    </>
  );
};
export default Overview;
