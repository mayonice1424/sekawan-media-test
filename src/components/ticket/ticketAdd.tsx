"use client";
import Image from "next/image";
import ThemeToogle from "@/components/theme/themeToogle/ThemeToogle";
import FormData from "./useFormTicket";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { error } from "console";
import GetDataSidebar from "../layout/sidebar/useSidebar.hook";
export const AddFormTicket = (props: {
  setVisible: (arg0: boolean) => void;
  isVisible: boolean;
}) => {
  const data = FormData();
  const isAdmin = GetDataSidebar();
  return (
    <div className="w-full justify-center items-center h-full flex  px-4">
      <div className=" pb-5 mt-0 w-full h-full flex">
        <form
          onSubmit={data.handleSubmit(data.onSubmit)}
          className=" w-full  h-max py-5  flex justify-center flex-col px-5"
        >
          <input
            {...data.register("id", {
              required: "Date is required.",
            })}
            type="hidden"
            id="id"
            value={data.count}
          />
          <div className="mb-2">
            <label
              htmlFor="ticketDetail"
              className="block mb-2 text-sm font-medium text-gray-600 font-poppins dark:text-gray-600"
            >
              Ticket Detail
            </label>
            <input
              {...data.register("ticketDetail", {
                required: "Ticket Detail is required.",
              })}
              type="text"
              id="ticketDetail"
              className={`bg-gray-50 border ${
                data.errors.ticketDetail ? "border-red-500" : "border-gray-300"
              } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="Too much Error"
            />
          </div>
          {data.errors.ticketDetail && (
            <p className="text-red-500">{data.errors.ticketDetail.message}</p>
          )}
          <div className="mb-2">
            <label
              htmlFor="customerName"
              className="block mb-2 text-sm font-medium text-gray-600 font-poppins dark:text-gray-600"
            >
              Customer Name
            </label>
            <input
              {...data.register("customerName", {
                required: "Ticket Detail is required.",
              })}
              type="text"
              id="customerName"
              className={`bg-gray-50 border ${
                data.errors.customerName ? "border-red-500" : "border-gray-300"
              } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="John Doe"
            />
          </div>
          {data.errors.customerName && (
            <p className="text-red-500">{data.errors.customerName.message}</p>
          )}
          <div className="mb-2">
            <label
              htmlFor="date"
              className="block mb-2 text-sm font-medium text-gray-600 font-poppins dark:text-gray-600"
            >
              Date
            </label>
            <input
              {...data.register("date", {
                required: "Date is required.",
              })}
              type="date"
              id="date"
              className={`bg-gray-50 border ${
                data.errors.date ? "border-red-500" : "border-gray-300"
              } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
            />
          </div>
          {data.errors.date && (
            <p className="text-red-500">{data.errors.date.message}</p>
          )}
          {
          isAdmin.isAdmin === true ? 
            <>
              <div className="mb-2">
                <label
                  htmlFor="priority"
                  className="block mb-2 text-sm font-medium text-gray-600 font-poppins dark:text-gray-600"
                >
                  Priority
                </label>
                <select
                  {...data.register("priority", {
                    required: "priority is required.",
                  })}
                  id="priority"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="">Choose Priority</option>
                  <option value="High">High</option>
                  <option value="Normal">Normal</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              {data.errors.priority && (
                <p className="text-red-500">{data.errors.priority.message}</p>
              )}
              <div className="mb-2">
                <label
                  htmlFor="status"
                  className="block mb-2 text-sm font-medium text-gray-600 font-poppins dark:text-gray-600"
                >
                  Status
                </label>
                <select
                  {...data.register("status", {
                    required: "Status is required.",
                  })}
                  id="status"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="">Choose Status</option>
                  <option value="Approve">Approve</option>
                  <option value="Reject">Reject</option>
                </select>
              </div>
              {data.errors.status && (
                <p className="text-red-500">{data.errors.status.message}</p>
              )}
              <div className="mb-2">
                <label
                  htmlFor="condition"
                  className="block mb-2 text-sm font-medium text-gray-600 font-poppins dark:text-gray-600"
                >
                  Condition
                </label>
                <select
                  {...data.register("condition", {
                    required: "Condition is required.",
                  })}
                  id="condition"
                  className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
                >
                  <option value="">Choose Condition</option>
                  <option value="Open">Open</option>
                  <option value="Overdue">Overdue</option>
                  <option value="Unresolve">Unresolve</option>
                  <option value="On hold">On hold</option>
                </select>
              </div>
              {data.errors.condition && (
                <p className="text-red-500">{data.errors.condition.message}</p>
              )}{" "}
            </>
           : 
            ""
          }
          <button
            type="submit"
            className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm items-center sm:w-auto px-5 py-2.5 text-center justify-center flex dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
