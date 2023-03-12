import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
const url = "http://localhost:9000/transactions";
export const fetchTransactionApi = createAsyncThunk(
  "transaction/fetchTransaction",
  async () => {
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    return response;
  }
);
export const addTransactionApi = createAsyncThunk(
  "transaction/add",
  async () => {
    const fetchData = await fetch(url);
    const response = await fetchData.json();
    return response;
  }
);
export const deleteTransactionApi = createAsyncThunk(
  "transaction/delete",
  async (id) => {
    const fetchData = await fetch(url + "/" + id, { method: "DELETE" });
    const response = await fetchData.json();
    return response;
  }
);
export const updateTransactionApi = createAsyncThunk(
  "transaction/update",
  async (id) => {
    const fetchData = await fetch(url + "/" + id, { method: "DELETE" });
    const response = await fetchData.json();
    return response;
  }
);
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
      const index = state.totalTransaction.findIndex(
        (item) => item.id === action.payload.id
      );
      state.totalTransaction[index] = action.payload;
      state.isEdit = true;
    },
    deleteTransaction: (state, action) => {
      state.totalTransaction = state.totalTransaction.filter(
        (item) => item.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTransactionApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchTransactionApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.totalTransaction = action.payload;
    });
    builder.addCase(fetchTransactionApi.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(addTransactionApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addTransactionApi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.totalTransaction = action.payload;
    });
    builder.addCase(addTransactionApi.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
    builder.addCase(deleteTransactionApi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteTransactionApi.fulfilled, (state, action) => {
      console.log(action);
      state.isLoading = false;
      state.totalTransaction = state.totalTransaction.filter(
        (item) => item.id !== action.arg.id
      );
    });
    builder.addCase(deleteTransactionApi.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  },
});
export default addTransactionSlice.reducer;
export const addTransactionActions = addTransactionSlice.actions;
