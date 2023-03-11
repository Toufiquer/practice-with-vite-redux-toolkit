import { configureStore } from "@reduxjs/toolkit";
import addTransactionSlice from "../addTransaction/addTransactionSlice";

export const store = configureStore({
  reducer: {
    totalTransaction: addTransactionSlice,
  },
});
