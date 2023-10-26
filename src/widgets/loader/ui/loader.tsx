import { Spin } from "antd";
import styles from "./styles.module.scss";

export function Loader(): JSX.Element {
    return (
        <div className={"page spinner-page " + styles.load}>
            <Spin size="large"></Spin>
        </div>
    );
}
