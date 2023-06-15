import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  userData: {
    name: string;
    email: string;
    // Additional user properties
  } | null;
}

const initialState: UserState = {
  userData: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState["userData"]>) => {
      state.userData = action.payload;
    },
    clearUser: (state) => {
      state.userData = null;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
