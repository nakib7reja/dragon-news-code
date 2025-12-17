import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayouts></HomeLayouts>
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