import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Page/Homepage";
import NotFoundPage from "../Page/NotFoundPage";
import About from "../Page/About";
import Works from "../Page/Works";
import Contact from "../Page/Contact";
import WorkDetails from "../Page/WorkDetails";
import AddWork from "../Page/AddWork";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <NotFoundPage />,
        children: [
            {
                path: "/",
                element: <Homepage />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/works",
                element: <Works />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
             {
                path: "/work-details",
                element: <WorkDetails/>
            },
            {
                path: "/addProject",
                element: <AddWork/>
            },

        ],
    },

]);
export default router;
