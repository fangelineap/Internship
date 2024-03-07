import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import Movie from "../pages/movie";
import TVSeries from "../pages/tv-series";
import Bookmark from "../pages/boookmark";
import Error from "../pages/error";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <Error />
    },
    {
        path: "/movie",
        element: <Movie />,
        errorElement: <Error />
    },
    {
        path: "/tv-series",
        element: <TVSeries />,
        errorElement: <Error />
    },
    {
        path: "/bookmark",
        element: <Bookmark />,
        errorElement: <Error />
    }
])