import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Structure/Navbar.jsx";
import Footer from "./Components/Structure/Footer.jsx";
import Activities from "./Pages/Activities.jsx";
import Events from "./Pages/EventsConventions.jsx";
import App from "./App.jsx";

const Structure = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
};

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Structure />,
        children: [
            {
                path: "",
                element: <App />,
            },
            {
                path: "Facilities&Activities",
                element: <Activities />,
            },
            {
                path: "Events&Conventions",
                element: <Events />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <RouterProvider router={Router} />
    </StrictMode>
);
