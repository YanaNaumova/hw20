import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [
      {
        id: 1,
        name: "Alice",
        email: "alice@gmail.com",
      },
      {
        id: 2,
        name: "Bob",
        email: "bob@gmail.com",
      },
      {
        id: 3,
        name: "Charlie",
        email: "charlie@gmail.com",
      },
    ],
  },
});

export default userSlice.reducer;
