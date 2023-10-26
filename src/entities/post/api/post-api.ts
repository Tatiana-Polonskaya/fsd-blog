import { baseApi } from "../../../shared/api/baseApi";
import { IPost } from "../model/types";

export const postApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPosts: build.query<IPost[], { limit: number; page: number }>({
            query: ({ limit, page }) => ({
                url: "/posts",
                params: {
                    _limit: limit,
                    _page: page,
                },
            }),
        }),
        getPostById: build.query<IPost, string>({
            query: (id) => ({
                url: `/posts/${id}`,
            }),
        }),
    }),
});

export const { useGetPostsQuery, useLazyGetPostsQuery, useGetPostByIdQuery } =
    postApi;
