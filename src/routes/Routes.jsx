import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRoute from "./PrivateRoute";
import AllEquipmentPage from "../pages/AllEquipmentPage";
import AddEquipmentPage from "../pages/AddEquipmentPage";
import ViewDetailsPage from "../pages/ViewDetailsPage";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "../layouts/MainLayout";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";
import MyEquipmentPage from "../pages/MyEquipmentPage";
import UpdateEquipmentPage from "../pages/UpdateEquipmentPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/add-equipment",
        element: (
          <PrivateRoute>
            <AddEquipmentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/my-equipment",
        element: (
          <PrivateRoute>
            <MyEquipmentPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/equipment",
        element: <AllEquipmentPage />,
      },
      {
        path: "/equipment/:id",
        element: (
          <PrivateRoute>
            <ViewDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ViewDetailsPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-equipment/:id",
        element: (
          <PrivateRoute>
            <UpdateEquipmentPage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
