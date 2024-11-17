import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AllProducts from "./components/AllProducts";
import AllProducts2 from "./components/AllProducts2";
import ProductDetails from "./pages/ProductDetails";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
import Statistics from "./pages/Statistics";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import { HelmetProvider } from "react-helmet-async";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/category.json"),  
        children: [
          {
            path: "",
            element: <AllProducts2 />,
            loader: () => fetch("/product.json"),  
          },
          {
            path: "category/:categoryName", 
            element: <AllProducts />,
            loader: () => fetch("/product.json"),  
          },
        ],
      },
      {
        path: "/product/:product_id",
        element: <ProductDetails />,
        loader: () => fetch("/product.json"),  
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <Cart />,
          },
          {
            path: "cart",
            element: <Cart />,
          },
          {
            path: "wishlist",
            element: <Wishlist />,
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <Toaster />
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
