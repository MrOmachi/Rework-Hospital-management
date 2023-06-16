import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../types";

interface IAccountState {
    user: IUser | null;
}

const initialState: IAccountState = {
    user: null,
}

const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload;
        }
    }
})

export const { setUser } = accountSlice.actions;
export default accountSlice.reducer;