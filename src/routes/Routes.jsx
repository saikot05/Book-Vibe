import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/homepage/Homepage";
import Books from "../Pages/books/Books";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
        index: true,
        element: <Homepage></Homepage>,
      },
      {
        path: "/books",
        element: <Books></Books>
      }
    ]
  }
]);