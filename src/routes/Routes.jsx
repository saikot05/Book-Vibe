import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../Pages/homepage/Homepage";
import Books from "../Pages/books/Books";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import BookDetails from "../Pages/bookDetails/BookDetails";
import PagesToRead from "../Components/PagesToRead/PagesToRead";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "books",
        element: <Books />,
      },
      {
        path: "bookDetails/:bookId",
        element: <BookDetails />,
        loader: () => fetch('/booksData.json').then(res => res.json()),
      },
      {
        path: "pages-to-read",
        element: <PagesToRead />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);