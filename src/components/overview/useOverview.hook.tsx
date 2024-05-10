"use client"
import { useEffect,useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const GetOverViewData = () =>{
  const dataTable = useSelector(
    (state: RootState) => state.data.data
  );
  const [overdue,setOverdue] = useState(0)
  const [unresolve,setUnresolve] = useState(0)
  const [open,setOpen] = useState(0)
  const [onHold,setOnhold] = useState(0)

  const filterDataOverdue = dataTable.filter((data)=>data.condition.toLocaleLowerCase().includes('overdue'))
  const countOverdue = filterDataOverdue.length
  const filterDataOnHold = dataTable.filter((data)=>data.condition.toLocaleLowerCase().includes('on hold'))
  const countOnHold = filterDataOnHold.length
  const filterDataUnresolve = dataTable.filter((data)=>data.condition.toLocaleLowerCase().includes('unresolve'))
  const countUnresolve = filterDataUnresolve.length
  const filterDataOpen = dataTable.filter((data)=>data.condition.toLocaleLowerCase().includes('open'))
  const countOpen = filterDataOpen.length
  useEffect(()=>{
    setOverdue(countOverdue)
    setOnhold(countOnHold)
    setUnresolve(countUnresolve)
    setOpen(countOpen)
  },[])

  return{
    overdue,
    open,
    unresolve,
    onHold,
    filterDataOverdue

  }
} 
export default GetOverViewData