import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./prefabs/Routes";
import { MovieProvider } from "./context/MovieContext";

function App() {
    return (
        <MovieProvider>
            <RouterProvider router={router}></RouterProvider>
        </MovieProvider>
    );
}

export default App;
