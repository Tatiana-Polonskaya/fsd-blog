import { Typography } from "antd";
import { RowCard } from "../../../entities/post";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { useLazyGetPostsQuery } from "../../../entities/post/api/post-api";
import { Loader } from "../../../widgets/loader";
import { useAppSelector } from "../../../shared/hooks/redux";
import { useDispatch } from "react-redux";
import { DEFAULT_LIMIT, MAX_LIMIT } from "../model/consts";
import { setPage, setTop } from "../model/slice";
import { setPosts } from "../../../entities/post/model/slice";
import { RootState } from "../../../app/store";

const { Title } = Typography;

import styles from "./styles.module.scss";

export const PostList = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isFetchingNextPage, setIsFetchingNextPage] = useState(false);

    const dispatch = useDispatch();

    const storePage = useAppSelector((state: RootState) => state.scroll.page);
    const storePosts = useAppSelector((state: RootState) => state.post.posts);
    const storeTop = useAppSelector((state: RootState) => state.scroll.top);

    const [getPostsByLimit, postsByLimit] = useLazyGetPostsQuery();
    const { isSuccess, data, isLoading, isError } = postsByLimit;

    const getNewPosts = async () => {
        await getPostsByLimit({ limit: DEFAULT_LIMIT, page: storePage });
    };

    useEffect(() => {
        if (isSuccess) {
            dispatch(setPage(storePage + 1));
            dispatch(setPosts([...storePosts, ...data]));
            setIsFetchingNextPage(false);
        }
    }, [data, isSuccess]);

    useLayoutEffect(() => {
        if (storePage === 1) fetchNextPage();
        else {
            if (ref.current) {
                ref.current?.scrollTo(0, storeTop);
            }
        }
    }, []);

    const fetchNextPage = () => {
        setIsFetchingNextPage(true);
        getNewPosts();
    };

    const handleClick = () => {
        dispatch(setTop(ref!.current!.scrollTop));
    };

    const handleScroll = () => {
        if (ref.current) {
            const el = ref.current;
            const height = el.scrollHeight;
            const screenHeight = el.clientHeight;

            const scrolled = el.scrollTop;

            if (height - screenHeight - scrolled < 100) {
                if (!isFetchingNextPage && storePosts.length < MAX_LIMIT) {
                    fetchNextPage();
                }
            }
        }
    };

    if (isError) {
        return <Title>Произошла ошибка 404</Title>;
    }

    return (
        <div
            className={styles.wrapper}
            ref={ref}
            onScroll={handleScroll}
            onClick={handleClick}
        >
            <Title className={styles.title}>Список постов:</Title>
            {storePosts && (
                <div className={styles.list}>
                    {storePosts.map((item) => (
                        <RowCard data={item} key={item.id} />
                    ))}
                </div>
            )}

            {isLoading && <Loader />}
        </div>
    );
};
