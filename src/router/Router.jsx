import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex";
import Detail from "../pages/Detail";

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/dex", element: <Dex /> },
    { path: "/detail", element: <Detail /> },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    );
};

export default Router;
