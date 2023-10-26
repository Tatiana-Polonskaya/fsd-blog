import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DetailPage } from "./post-detail";
import { HomePage } from "./home";

export const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index path="/" element={<HomePage />} />
                <Route path="/post/:id" element={<DetailPage />} />
                <Route path={"*"} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
};
