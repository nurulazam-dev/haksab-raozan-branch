import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as userService from "../services/userService";

export const fetchMembers = createAsyncThunk("users/fetchMembers", async () => {
  const response = await userService.getMembers();
  return response.data;
});

export const addMember = createAsyncThunk(
  "users/addMember",
  async (memberData) => {
    const response = await userService.addMember(memberData);
    return response.data;
  }
);

export const updateMember = createAsyncThunk(
  "users/updateMember",
  async ({ id, memberData }) => {
    const response = await userService.updateMember(id, memberData);
    return response.data;
  }
);

export const deactivateMember = createAsyncThunk(
  "users/deactivateMember",
  async (id) => {
    const response = await userService.deactivateMember(id);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    members: [],
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
      .addCase(fetchMembers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMembers.fulfilled, (state, action) => {
        state.loading = false;
        state.members = action.payload;
      })
      .addCase(fetchMembers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addMember.fulfilled, (state, action) => {
        state.members.push(action.payload);
      })
      .addCase(updateMember.fulfilled, (state, action) => {
        const index = state.members.findIndex(
          (member) => member.id === action.payload.id
        );
        if (index !== -1) {
          state.members[index] = action.payload;
        }
      })
      .addCase(deactivateMember.fulfilled, (state, action) => {
        const index = state.members.findIndex(
          (member) => member.id === action.payload.id
        );
        if (index !== -1) {
          state.members[index].active = false;
        }
      });
  },
});

export const { clearError } = userSlice.actions;

export default userSlice.reducer;
