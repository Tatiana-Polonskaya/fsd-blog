import { Routing } from "../pages";
import { Provider } from "react-redux";
import { store } from "./store";
import "./index.scss";

export const App = () => {
    return (
        <Provider store={store}>
            <Routing />
        </Provider>
    );
};
