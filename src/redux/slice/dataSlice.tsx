import { createSlice, PayloadAction  } from "@reduxjs/toolkit";

type TicketItem = {
  id: number;
  ticketDetail: string;
  customerName: string;
  date: string;
  priority: string;
  status: string;
  condition: string;
};

type DataState = {
  data: TicketItem[];
};

const initialState: DataState = {
  data: [
    {
      id: 1,
      ticketDetail: "contact",
      customerName: "Tom Cruise",
      date: "2015-03-25",
      priority: "High",
      status: "Approve",
      condition: "Overdue",
    },
    {
      id: 2,
      ticketDetail: "contact email not linked",
      customerName: "Tom And Jerry",
      date: "2015-03-25",
      priority: "High",
      status: "Reject",
      condition: "On hold",
    },
    {
      id: 3,
      ticketDetail: "contact email not linked",
      customerName: "Tom Alexandra",
      date: "2015-03-25",
      priority: "High",
      status: "Reject",
      condition: "Unresolve",
    },
    {
      id: 4,
      ticketDetail: "contact email not linked",
      customerName: "Tom Rider",
      date: "2015-03-25",
      priority: "High",
      status: "Reject",
      condition: "Unresolve",
    },
  ],
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    readData: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
    addData: (state, action: PayloadAction<TicketItem>) => {
      state.data.push(action.payload);
    },
  },
});

export const { readData, addData } = dataSlice.actions;
export default dataSlice.reducer;
