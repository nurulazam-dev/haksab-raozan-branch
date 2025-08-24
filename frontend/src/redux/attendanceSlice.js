import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example async thunk to fetch attendance records
export const fetchAttendanceRecords = createAsyncThunk(
  "attendance/fetchAttendanceRecords",
  async (_, { rejectWithValue }) => {
    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/attendance");
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      return data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const attendanceSlice = createSlice({
  name: "attendance",
  initialState: {
    attendanceRecords: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAttendanceRecords.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAttendanceRecords.fulfilled, (state, action) => {
        state.loading = false;
        state.attendanceRecords = action.payload;
      })
      .addCase(fetchAttendanceRecords.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default attendanceSlice.reducer;
