import { useState } from "react";
import AdminI from "./admin";
import ManageCar from "./page/car";
import ManageOrder from "./page/order";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AdminI />,
      children: [
        {
          path: "/car",
          element: <ManageCar />,
        },
        {
          path: "/order",
          element: <ManageOrder />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
export default App;
