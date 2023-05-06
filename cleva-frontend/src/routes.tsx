import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Card from "./pages/Home/beforeKyc/KycCard";
import BeforeKyc from "./pages/Home/beforeKyc";
import Login from "./components/Auth/Login";

const routes = (user: any) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <MainLayout /> : <Navigate to="/auth" />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "/accounts",
          element: <BeforeKyc />,
        },
      ],
    },
    {
      path: "/auth",
      element: user == null ? <Login /> : <Navigate to="/" />,
    },
  ]);
export default routes;
