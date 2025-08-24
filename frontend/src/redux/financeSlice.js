import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as financeService from "../services/financeService";

export const fetchIncome = createAsyncThunk("finance/fetchIncome", async () => {
  const response = await financeService.getIncome();
  return response.data;
});

export const fetchExpenses = createAsyncThunk(
  "finance/fetchExpenses",
  async () => {
    const response = await financeService.getExpenses();
    return response.data;
  }
);

export const addIncome = createAsyncThunk(
  "finance/addIncome",
  async (incomeData) => {
    const response = await financeService.addIncome(incomeData);
    return response.data;
  }
);

export const addExpense = createAsyncThunk(
  "finance/addExpense",
  async (expenseData) => {
    const response = await financeService.addExpense(expenseData);
    return response.data;
  }
);

const financeSlice = createSlice({
  name: "finance",
  initialState: {
    income: [],
    expenses: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchIncome.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchIncome.fulfilled, (state, action) => {
        state.loading = false;
        state.income = action.payload;
      })
      .addCase(fetchIncome.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchExpenses.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false;
        state.expenses = action.payload;
      })
      .addCase(fetchExpenses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addIncome.fulfilled, (state, action) => {
        state.income.push(action.payload);
      })
      .addCase(addExpense.fulfilled, (state, action) => {
        state.expenses.push(action.payload);
      });
  },
});

export const { clearError } = financeSlice.actions;

export default financeSlice.reducer;
