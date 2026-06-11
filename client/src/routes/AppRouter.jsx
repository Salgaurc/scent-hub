import { createBrowserRouter } from "react-router-dom";

import HomePage from "../pages/Homepage";
import ProductPage from "../pages/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/products",
    element: <ProductPage />
  },
  {
    path: "*",
    element: <NotFoundPage />
  }
]);