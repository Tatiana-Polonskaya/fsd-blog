import type { PropsWithChildren } from "react";
import { Button, Card, Typography } from "antd";
import { IPost } from "../..";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { getShortDescription } from "../../model/consts";

export type TaskCardProps = PropsWithChildren<{
    data?: IPost;
    titleHref?: string;
}> &
    import("antd").CardProps;

export const PostCard = ({ data, ...cardProps }: TaskCardProps) => {
    const navigate = useNavigate();
    if (!data && !cardProps.loading) return null;

    return (
        !cardProps.loading && (
            <Card
                title={cardProps.loading ? "" : `${data?.id}. ${data?.title}`}
                {...cardProps}
                className={styles.card}
                headStyle={{ overflow: "auto" }}
            >
                <Typography>{getShortDescription(data!.body)}</Typography>
                <Button onClick={() => navigate(`/post/${data?.id}`)}>
                    Просмотр
                </Button>
            </Card>
        )
    );
};
