import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Homepage from "../Page/Homepage";
import NotFoundPage from "../Page/NotFoundPage";




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


        ],
    },

]);
export default router;
