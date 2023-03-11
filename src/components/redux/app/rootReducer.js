import { combineReducers } from "redux";
import addTransactionSlice from "../addTransaction/addTransactionSlice";

export const rootReducer = combineReducers({
  totalTransactions: addTransactionSlice,
});
