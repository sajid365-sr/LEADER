import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AsideRight from "../../Pages/Moving/AsideRight/AsideRight";
import Courses from "../../Pages/Courses/Courses"
import FAQ from "../../Pages/FAQ/FAQ"
import Blog from "../../Pages/Blog/Blog"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<AsideRight></AsideRight>
        },
        {
            path:'/courses',
            element:<Courses></Courses>
        },
        {
            path:'/faq',
            element:<FAQ></FAQ>
            
        },
        {
          path:'/blog',
          element:<Blog></Blog>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/terms',
          element:<TermsAndCondition></TermsAndCondition>
        }
    ]
  }

]);
