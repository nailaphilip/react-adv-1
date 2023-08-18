import Test from "../Test";
import ProductsList from "../ProductsList";
import Homepage from "../Homepage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/products",
    element: <ProductsList />,
  },
]);

export default router;
