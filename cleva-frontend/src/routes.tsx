import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Accounts from "./pages/Accounts";
import Transanctions from "./pages/Transanctions";
import Payments from "./pages/Payments";
import Invoice from "./pages/Invoice";
import ClevaCards from "./pages/ClevaCards";
import Profile from "./pages/Home/profile/Profile";
import Business from "./pages/Home/profile/Business";
import Controller from "./pages/Home/profile/Controller";

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
          element: <Accounts />,
        },
        {
          path: "/transanctions",
          element: <Transanctions />,
        },
        {
          path: "/payments",
          element: <Payments />,
        },
        {
          path: "/invoices",
          element: <Invoice />,
        },
        {
          path: "/clevacards",
          element: <ClevaCards />,
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/business",
          element: <Business />
        },
        {
          path: "/controller",
          element: <Controller />
        }
      ],
    },
    {
      path: "/auth",
      element: user == null ? <Login /> : <Navigate to="/" />,
    },
  ]);
export default routes;
