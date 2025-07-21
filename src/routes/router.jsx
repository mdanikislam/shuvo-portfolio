import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout";
import Home from "../Components/Home";
import About from "../Components/About";
import Blog from "../Components/Blog";
import Services from "../Components/Services";
import Contact from "../Components/Contact";
import CaseStudy from "../Components/CaseStudy";

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
            },
            {
                path:'/services',
                element:<Services></Services>
            },
            {
                path:'/contact',
                element:<Contact></Contact>
            },
            {
                path:'caseStudy',
                element:<CaseStudy></CaseStudy>
            }
        ]
    }
])

export default router;