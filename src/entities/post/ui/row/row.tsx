import { Button, Typography } from "antd";
import { IPost } from "../..";
import styles from "./styles.module.scss";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter, getShortDescription } from "../../model/consts";

export type RowCardProps = {
    data: IPost;
};

export const RowCard = ({ data }: RowCardProps) => {
    const navigate = useNavigate();
    if (!data) return null;

    return (
        <div className={styles.rowcard}>
            <div>
                <Typography.Title level={4} className={styles.rowtitle}>
                    {`${data.id}. ${capitalizeFirstLetter(data.title)}`}
                </Typography.Title>
                <Typography>{getShortDescription(data.body)}</Typography>
            </div>
            <Button onClick={() => navigate(`/post/${data?.id}`)}>
                Просмотр
            </Button>
        </div>
    );
};
