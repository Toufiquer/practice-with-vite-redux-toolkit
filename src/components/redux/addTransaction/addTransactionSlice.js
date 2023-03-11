import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  totalTransaction: [],
  isEdit: false,
  edit: {},
};
const uniqueId = (arr) => {
  const maxId = arr.reduce((a, b) => (b.id > a ? b.id : b), -1);
  if (maxId === -1) {
    return maxId + 2;
  }
  return maxId + 1;
};
const addTransactionSlice = createSlice({
  name: "addTransaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.totalTransaction.push({
        ...action.payload,
        id: uniqueId(state.totalTransaction),
      });
    },
    cancelTransaction: (state) => {
      state.isEdit = false;
      state.edit = {};
    },
    editTransaction: (state, action) => {
      (state.isEdit = true),
        (state.edit = state.totalTransaction.find(
          (item) => item.id === action.payload
        ));
    },
    updateTransaction: (state, action) => {
      (state.isEdit = true),
        (state.edit = state.totalTransaction.find(
          (item) => item.id === action.payload
        ));
    },
    deleteTransaction: (state, action) => {
      state.totalTransaction = state.totalTransaction.filter(
        (item) => item.id !== action.payload
      );
    },
  },
});
export default addTransactionSlice.reducer;
export const addTransactionActions = addTransactionSlice.actions;
