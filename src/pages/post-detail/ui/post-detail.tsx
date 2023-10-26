import { Link, useParams } from "react-router-dom";
import { useGetPostByIdQuery } from "../../../entities/post/api/post-api";
import { Layout, Result, Button } from "antd";
import styles from "./styles.module.scss";
import { DetailCard } from "../../../widgets/detail-card";
import { ButtonBack } from "../../../shared/ui/button-back/button-back";
import { Header } from "antd/es/layout/layout";

export const DetailPage = () => {
    const { id } = useParams();

    const { data: post, isLoading } = useGetPostByIdQuery(id ? id : "");

    if (!post && !isLoading) {
        return (
            <Result
                status="404"
                title="404"
                subTitle="Post was not found"
                extra={
                    <Link to="/">
                        <Button type="primary">Назад</Button>
                    </Link>
                }
            />
        );
    }

    return (
        <Layout className={styles.details}>
            <Header className={styles.header}>
                <ButtonBack arrow="left" />
            </Header>
            <Layout.Content className={styles.content}>
                {post && <DetailCard post={post} />}
            </Layout.Content>
        </Layout>
    );
};
