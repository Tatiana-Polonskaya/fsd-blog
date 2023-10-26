import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPost } from "..";

type PostSliceState = {
    posts: IPost[];
};

const initialState: PostSliceState = {
    posts: [],
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<IPost[]>) => {
            state.posts = action.payload;
        },
    },
});

export default postSlice.reducer;

export const { setPosts } = postSlice.actions;
