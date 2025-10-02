import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
});

const usersSlice = createSlice({
  name: "users",
  initialState: { list: [], status: "idle" },
  reducers: {
    addUser: (state, action) => {
      state.list.unshift(action.payload);
    },
    deleteUser: (state, action) => {
      state.list = state.list.filter(u => u.id !== action.payload);
    },
    updateUser: (state, action) => {
      const index = state.list.findIndex(u => u.id === action.payload.id);
      if (index !== -1) {
        state.list[index] = action.payload;
    }
  },
},
  extraReducers: builder => {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.list = action.payload;
      state.status = "succeeded";
    });
  }
});

export const { addUser, deleteUser, updateUser } = usersSlice.actions;
export default usersSlice.reducer;
