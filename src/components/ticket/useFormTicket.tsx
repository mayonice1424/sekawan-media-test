"use client"
import { useEffect,useState, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { addData } from "@/redux/slice/dataSlice";
interface Form {
  id: number;
  ticketDetail: string;
  customerName: string;
  date: string;
  priority: string;
  status: string;
  condition: string;
}


const FormData = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Form>();
  const dataTable = useSelector(
    (state: RootState) => state.data.data
  );
  const dispatch = useDispatch()
  const formRef = useRef<HTMLFormElement>(null);
  const count = dataTable.length + 1
  useEffect(() => {
    if (formRef.current) {
      formRef.current.focus();
    }
  }, []);
  const [active, setActive] = useState(false)

  const onSubmit: SubmitHandler<Form> = async (data) => {
    const { id ,ticketDetail,customerName,date, priority, status, condition} = data;
    dispatch(addData(data))
    toast.success('Data berhasil ditambahkan',{
      position: "top-right",
    })
  };
  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
    active,
    reset,
    setActive,
    dataTable,
    count
  };
};

export default FormData;
