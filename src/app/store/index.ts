import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { baseApi } from "../../shared/api/baseApi";
import { postSlice } from "../../entities/post/model/slice";
import { scrollSlice } from "../../widgets/post-list/model/slice";

const rootReducer = combineReducers({
    [baseApi.reducerPath]: baseApi.reducer,
    post: postSlice.reducer,
    scroll: scrollSlice.reducer,
});

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
