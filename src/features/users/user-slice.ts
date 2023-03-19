import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiClient from "../../services/api-client";

export const fetchUsers = createAsyncThunk(
  "users/fetch",
  async ({ page, take }: { page: number; take: number }, thunkAPI) => {
    const response = await apiClient.get("", {
      params: { page, results: take },
    });

    return response.data;
  }
);

interface UsersState {
  entities: any[];
  loading: boolean;
}

const initialState = {
  entities: [],
  loading: false,
} as UsersState;

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities = action.payload.results.sort(
        (a: any, b: any) =>
          a.login.username.localeCompare(b.login.username) ||
          a.name.first.localeCompare(b.name.first)
      );

      state.loading = false;
    });
  },
});

export default userSlice.reducer;
