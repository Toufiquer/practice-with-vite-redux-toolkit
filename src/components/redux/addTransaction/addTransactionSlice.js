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
    editTransaction: (state, action) => {
      (state.isEdit = true),
        (state.edit = state.totalTransaction.find(
          (item) => item.id === action.payload.id
        ));
    },
    updateTransaction: (state, action) => {
      (state.isEdit = true),
        (state.edit = state.totalTransaction.find(
          (item) => item.id === action.payload.id
        ));
    },
    deleteTransaction: (state, action) => {
      state.edit = state.totalTransaction.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});
export default addTransactionSlice.reducer;
export const addTransactionActions = addTransactionSlice.actions;
