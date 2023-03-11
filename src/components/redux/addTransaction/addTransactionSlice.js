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
      state.tranSection.push(action.payload);
    },
  },
});
export default addTransactionSlice.reducer;
export const addTransactionActions = addTransactionSlice.actions;
