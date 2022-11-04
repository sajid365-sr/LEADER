import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import Courses from "../../Pages/Courses/Courses"
import FAQ from "../../Pages/FAQ/FAQ"
import Blog from "../../Pages/Blog/Blog"
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import TermsAndCondition from "../../Pages/Others/TermsAndCondition";
import CourseLayout from "../../Layout/Course/CourseLayout";
import CourseDetails from "../../Pages/Others/CourseDetails";
import Checkout from "../../Pages/Others/Checkout";
import PrivateRoutes from "../PrivateRoute/PrivateRoutes";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/courses',
            element: <CourseLayout></CourseLayout>,
            children:[
              {
                path:'/courses',
                loader: () => fetch('http://localhost:5000/'),
                element:<Courses></Courses>
              },
              {
                path:'/courses/:id',
                loader:({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element:<CourseDetails></CourseDetails>
              },
              {
                path:'/courses/checkout/:id',
                loader:({params}) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <PrivateRoutes>
                  <Checkout></Checkout>
                </PrivateRoutes>
              }
            ],
            
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
        },
        {
          path:'/course/details/:id'
          
        }
    ]
  }

]);
