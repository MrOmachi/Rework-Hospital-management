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
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Register from "./components/Auth/Register";
import VerifyEmail from "./components/Auth/VerifyEmail";
import UnauthenticatedLayout from "./components/Auth/UnauthenticatedLayout";

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
          element: <Profile />,
        },
      ],
    },
    {
      path: "/auth",
      element: user == null ? <UnauthenticatedLayout /> : <Navigate to="/" />,
      children: [
        { path: "", element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "verify-email", element: <VerifyEmail /> },
      ],
    },
  ]);
export default routes;
