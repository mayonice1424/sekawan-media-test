"use client";
import Image from "next/image";
import Link from "next/link";
import { Column } from "react-data-table-component";
import DataTable from "react-data-table-component"; // Import DataTable component
import { PropsData } from "./useData.hook";
import GetDataTicket from "./useData.hook";
import AddButton from "@/components/theme/button/addButton";
import { useCheckLogin } from "@/middleware/useCheckLogin";
import Modal from "@/components/modal/modalSmall/modal";
import { AddFormTicket } from "../../components/ticket/ticketAdd";

const Ticket = () => {
  useCheckLogin();
  const handleAddData = () => {
    
  };
  const data = GetDataTicket();
  console.log("buset", data.dataTicketTable);
  const columns: Column<PropsData>[] = data.headerData.map((columnName) => {
    if (columnName.toLowerCase() === "id") {
      return {
        name: columnName,
        selector: (row: PropsData) => row.id,
        sortable: true,
      };
    } else if (columnName.toLowerCase() === "ticket detail") {
      return {
        name: columnName,
        selector: (row: PropsData) => row.ticketDetail,
        sortable: true,
      };
    } else if (columnName.toLowerCase() === "customer name") {
      return {
        name: columnName,
        selector: (row: PropsData) => row.customerName,
        sortable: true,
      };
    } else if (columnName.toLowerCase() === "date") {
      return {
        name: columnName,
        selector: (row: PropsData) => row.date,
        sortable: true,
      };
    } else if (columnName.toLowerCase() === "priority") {
      return {
        name: columnName,
        selector: (row: PropsData) => row.priority,
        sortable: true,
      };
    }
    {
      return {
        name: columnName,
        selector: (row: PropsData) =>
          row[columnName.toLowerCase() as keyof PropsData],
        sortable: true,
      };
    }
  });
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
        <div className="mt-[10vh] overflow-y-auto w-full h-full justify-start pt-10 items-start flex flex-col ">
          <div className="w-full md:px-10 px-2">
            <>
              <div className="w-full justify-between items-center py-7 flex flex-row">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-900">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    onChange={data.handleFilter}
                    id="default-search"
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-300 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                  />
                </div>
                <AddButton
                  text="Tambah Data"
                  className="text-base py-2"
                  onClick={() => data.setIsVisibleAddModal(!data.isVisibleAddModal)}
                />
              </div>
              <div className="border-2 border-slate-300">
              <DataTable
                columns={columns}
                data={data.records}
                pagination
                responsive
                highlightOnHover
                />
                </div>
            </>
          </div>
        </div>
      </main>
    </>
  );
};
export default Ticket;
