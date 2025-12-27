import { createBrowserRouter } from "react-router";
import HomeLayouts from "../layouts/HomeLayouts";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "../provider/PrivateRoute";
import Loading from "../pages/Loading";

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
                element: <CategoryNews></CategoryNews>,
                loader: async ({ params }) => {
                    const res = await fetch("/news.json"); // শুরুতে '/' দিতে ভুলবেন না
                    if (!res.ok) {
                        throw new Response("Not Found", { status: 404 });
                    }
                    const data = await res.json();
                    return data;
                },
                hydrateFallbackElement: <Loading></Loading>
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Registration></Registration>
            }
        ]
    },
    {
        path: '/news-details/:id',
        element: (
            <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>
        ),
        loader: async ({ params }) => {
            const res = await fetch("/news.json"); // শুরুতে '/' দিতে ভুলবেন না
            if (!res.ok) {
                throw new Response("Not Found", { status: 404 });
            }
            const data = await res.json();
            return data;
        },
        hydrateFallbackElement: <Loading></Loading>
    },
    {
        path: '/*',
        element: <h1>error</h1>
    },

]);
export default router;