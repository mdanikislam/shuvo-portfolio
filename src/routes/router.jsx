import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import Blog from "../Components/Blog";

const router  = createBrowserRouter([
    {
        path:'',
        element:<MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about',
                element:<About></About>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }
        ]
    }
])

export default router;