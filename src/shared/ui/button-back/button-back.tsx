import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate } from "react-router";

type ButtonTheme = "primary" | "link";
type ButtonArrow = "left" | "right";

type Props = {
    type?: ButtonTheme;
    arrow?: ButtonArrow;
};

export const ButtonBack = ({ type = "link", arrow }: Props) => {
    const navigate = useNavigate();
    return (
        <Button type={type} onClick={() => navigate(-1)}>
            {arrow && arrow == "left" && <LeftOutlined />}
            Назад
            {arrow && arrow == "right" && <RightOutlined />}
        </Button>
    );
};
