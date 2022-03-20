import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getExpenses = createAsyncThunk('expense/get-expense', async () => {
  return true;
});

export const postExpense = createAsyncThunk('expense/post-expense', async (payload: any) => {
  localStorage.setItem('expense', JSON.stringify(payload));
  return true;
});

export const filterData = createAsyncThunk('expense/filter-expense', async (payload: any) => {
  localStorage.setItem('filterExpense', JSON.stringify(payload));
  return true;
});

export const clearFilter = createAsyncThunk('expense/clear-filter-expense', async () => {
  return true;
});

const expenseSlice = createSlice({
  name: 'expense',
  initialState: {
    fetchstatus: 'idle',
    expense: [],
    data: [],
    error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getExpenses.pending, (state: any, action: any) => {
        state.fetchstatus = 'loading';
      })
      .addCase(getExpenses.fulfilled, (state: any, action: any) => {
        state.fetchstatus = 'succeeded';
        // Add any fetched posts to the array
        const expenses: any = localStorage.getItem('expense');
        state.data = JSON.parse(expenses);
        state.expense = JSON.parse(expenses);
        console.log(123);
        // state.userData = state.userData.concat(action.payload);
      })
      .addCase(getExpenses.rejected, (state:any, action: any) => {
        state.fetchstatus = 'failed';
        state.error = action.error.message;
      })
      .addCase(postExpense.pending, (state: any, action: any) => {
      })
      .addCase(postExpense.fulfilled, (state: any, action: any) => {
        state.fetchstatus = 'succeeded';
        // Add any fetched posts to the array
        const expenses: any = localStorage.getItem('expense');
        state.data = JSON.parse(expenses);
        state.expense = JSON.parse(expenses);
      })
      .addCase(postExpense.rejected, (state: any, action: any) => {
        state.error = action.error.message;
      })
      .addCase(filterData.pending, (state: any, action: any) => {

      })
      .addCase(filterData.fulfilled, (state: any, action: any) => {
        const filterData: any = localStorage.getItem('filterExpense');
        state.data = JSON.parse(filterData);
      })
      .addCase(filterData.rejected, (state: any, action: any) => {
        state.error = action.error.message;
      })
      .addCase(clearFilter.pending, (state: any, action: any) => {

      })
      .addCase(clearFilter.fulfilled, (state: any, action: any) => {
        state.fetchstatus = 'succeeded';
        // Add any fetched posts to the array
        const expenses: any = localStorage.getItem('expense');
        console.log("🚀 ~ file: expenseSlice.ts ~ line 82 ~ .addCase ~ expenses", expenses)
        state.data = JSON.parse(expenses);
        state.expense = JSON.parse(expenses);
        console.log(123);
      })
      .addCase(clearFilter.rejected, (state: any, action: any) => {
        state.error = action.error.message;
      });
  },
});


export default expenseSlice.reducer;
