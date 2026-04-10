import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/homepage/Homepage";
import Books from "../Pages/books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/bookDetails/BookDetails";

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
      },
      {
        path: "/bookDetails/:bookId",
        element:<BookDetails></BookDetails>,
        loader: () => fetch('/booksData.json').then(res => res.json())
      }
    ],
    errorElement: <ErrorPage></ErrorPage>
  }
]);