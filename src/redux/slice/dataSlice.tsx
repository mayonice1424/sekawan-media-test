import { createSlice } from "@reduxjs/toolkit";

type TicketItem = {
  id: number;
  ticketDetail: string;
  customerName: string;
  date: string;
  priority: string;
  status: string;
  condition: string,
};

type DataState = {
  data: TicketItem[];
};

const initialState: DataState = {
  data: [
    {
      id: 1,
      ticketDetail: 'contact',
      customerName: 'Tom Cruise',
      date: "2015-03-25",
      priority:'High', 
      status:'Approve',
      condition: 'Overdue'
    },
    {
      id: 2,
      ticketDetail: 'contact email not linked',
      customerName: 'Tom And Jerry',
      date: "2015-03-25",
      priority:'High', 
      status:'Reject',
      condition: 'Unresolve'
    },
    {
      id: 3,
      ticketDetail: 'contact email not linked',
      customerName: 'Tom Alexandra',
      date: "2015-03-25",
      priority:'High', 
      status:'Reject',
      condition: 'Unresolve'
    }
  ], 
};

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataTicket: (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    },
  },
});

export const { setDataTicket } = dataSlice.actions;

export default dataSlice.reducer;
