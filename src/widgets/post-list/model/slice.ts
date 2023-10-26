import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const scrollSlice = createSlice({
    name: "scroll",
    initialState: {
        top: 0,
        page: 1,
    },
    reducers: {
        setTop: (state, action: PayloadAction<number>) => {
            state.top = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
});

export default scrollSlice.reducer;

export const { setTop, setPage } = scrollSlice.actions;
