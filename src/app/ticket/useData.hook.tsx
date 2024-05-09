'use client'
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { RootState } from "@/redux/store";
import { setDataTicket } from "@/redux/slice/dataSlice";

export interface PropsData {
  id: number;
  ticketDetail: string;
  customerName: string;
  date: string;
  priority: string;
  status: string;
  condition: string;
}

export interface PropHeader {
  header: Array<string>; 
}

export interface PropsDataArray {
  data: PropsData[]
}

const GetDataTicket = () => {
  const dispatch = useDispatch();
  const patchData = (data: PropsDataArray) =>{
    console.log(data)
    dispatch(setDataTicket(data))
  }
  
  const [records, setRecords] = useState<PropsData[]>([]);
  const dataTable = useSelector(
    (state: RootState) => state.data.data
  );
  const [dataTicketTable, setDataTicketTable] = useState<PropsData[]>([]);
  const headerData: Array<string> = ["Ticket Detail", "Customer Name", "Date", "Priority"];
  const handleFilter = (event: { target: { value: any } }) => {
    const { value } = event.target;
    console.log('yahahhaha',value)
    const filteredData = dataTicketTable.filter(
      (data) =>
        data.ticketDetail.toLowerCase().includes(value.toLowerCase()) ||
        data.customerName.toLowerCase().includes(value.toLowerCase()) ||
        data.date.toLowerCase().includes(value.toLowerCase()) ||
        data.priority.toLowerCase().includes(value.toLowerCase())
    );
    setRecords(filteredData);
  };
  useEffect(() => {
    setDataTicketTable(dataTable); 
    setRecords(dataTable); 
  }, [dataTable]);
  return {
    dataTable,
    patchData,
    headerData,
    dataTicketTable,
    setDataTicketTable,
    records,
    setRecords,
    handleFilter
  }
}

export default GetDataTicket