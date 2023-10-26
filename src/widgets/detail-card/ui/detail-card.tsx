import { Typography } from "antd";
import { IPost } from "../../../entities/post";
import styles from "./styles.module.scss";
import { capitalizeFirstLetter } from "../../../entities/post/model/consts";

const { Title, Paragraph } = Typography;

type Props = {
    post: IPost;
};

export const DetailCard = ({ post }: Props) => {
    return (
        <div className={styles.container}>
            <Typography>
                <Title>{`${post.id}. ${capitalizeFirstLetter(
                    post.title
                )}`}</Title>
                <Paragraph>{post.body}</Paragraph>
            </Typography>
        </div>
    );
};
