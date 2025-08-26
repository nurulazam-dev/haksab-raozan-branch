import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as eventService from "../services/eventService";

export const fetchEvents = createAsyncThunk("events/fetchEvents", async () => {
  const response = await eventService.getEvents();
  return response.data;
});

export const addEvent = createAsyncThunk(
  "events/addEvent",
  async (eventData) => {
    const response = await eventService.createEvent(eventData);
    return response.data;
  }
);

export const updateEvent = createAsyncThunk(
  "events/updateEvent",
  async ({ id, eventData }) => {
    const response = await eventService.updateEvent(id, eventData);
    return response.data;
  }
);

export const deleteEvent = createAsyncThunk(
  "events/deleteEvent",
  async (id) => {
    await eventService.deleteEvent(id);
    return id;
  }
);

const eventSlice = createSlice({
  name: "events",
  initialState: {
    events: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEvents.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchEvents.fulfilled, (state, action) => {
        state.loading = false;
        state.events = action.payload;
      })
      .addCase(fetchEvents.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addEvent.fulfilled, (state, action) => {
        state.events.push(action.payload);
      })
      .addCase(updateEvent.fulfilled, (state, action) => {
        const index = state.events.findIndex(
          (event) => event.id === action.payload.id
        );
        if (index !== -1) {
          state.events[index] = action.payload;
        }
      })
      .addCase(deleteEvent.fulfilled, (state, action) => {
        state.events = state.events.filter(
          (event) => event.id !== action.payload
        );
      });
  },
});

export default eventSlice.reducer;
