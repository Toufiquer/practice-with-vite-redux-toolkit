import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  totalTransaction: [],
};
const addTransactionSlice = createSlice({
  name: "addTransaction",
  initialState,
  reducers: {
    addTransaction: (state, action) => {
      state.totalTransaction.push(action.payload);
    },
  },
});
export default addTransactionSlice.reducer;
export const addTransactionActions = addTransactionSlice.actions;
