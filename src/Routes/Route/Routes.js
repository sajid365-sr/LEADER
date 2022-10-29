import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AsideRight from "../../Pages/Moving/AsideRight/AsideRight";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
        {
            path:'/',
            element:<AsideRight></AsideRight>
        }
    ]
  }

]);
