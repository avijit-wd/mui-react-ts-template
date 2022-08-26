import { createSlice } from '@reduxjs/toolkit';
import { getTodoReq } from '../api/todoSliceApi';
import toast from 'react-hot-toast';

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todo: [],
    toggle: false,
    pending: null
  },
  reducers: {
    handleToggle: (state, action) => {
      state.toggle = action.payload.toggle;
    }
  },
  extraReducers: {
    [getTodoReq.pending as any]: (state) => {
      state.pending = true;
      toast.loading('Fetching', { id: 'getReq' });
    },
    [getTodoReq.fulfilled as any]: (state, action) => {
      state.pending = false;
      state.todo = action.payload;
      toast.success('Data Fetched', { id: 'getReq' });
    },
    [getTodoReq.rejected as any]: (state) => {
      state.pending = false;
      toast.error('Fetch failed', { id: 'getReq' });
    }
  }
});

export const { handleToggle } = todoSlice.actions;

export default todoSlice.reducer;
