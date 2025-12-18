import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>,
        children: [
            {
                path: '',
                element: <Home></Home>
            },
            {
                path: '/category/:id',
                element: <CategoryNews></CategoryNews>
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>authentication</h1>
    },
    {
        path: 'news',
        element: <h1>news</h1>
    },
    {
        path: '/*',
        element: <h1>error</h1>
    },

]);
export default router;