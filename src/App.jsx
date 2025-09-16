import AdminI from "./admin";
import ManageCar from "./page/car";
import ManageOrder from "./page/order";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ManageCustomer from "./page/customer";
import RentingManagement from "./page/renting";

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
        {
          path: "/customer",
          element: <ManageCustomer />,
        },
        {
          path: "/renting",
          element: <RentingManagement />,
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
