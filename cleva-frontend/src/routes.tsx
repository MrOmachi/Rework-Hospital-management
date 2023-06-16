import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Accounts from "./pages/Accounts";
import Transanctions from "./pages/Transanctions";
import Invoice from "./pages/Invoice";
import ClevaCards from "./pages/ClevaCards";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Register from "./components/Auth/Register";
import VerifyEmail from "./components/Auth/VerifyEmail";
import UnauthenticatedLayout from "./components/Auth/UnauthenticatedLayout";
import Business from "./pages/Profile/Business";
import Controller from "./pages/Profile/BeneficialOwners";
import EditProfile from "./pages/Profile/EditProfile";
import ChangePassword from "./pages/Profile/ChangePassword";
import Transfers from "./pages/Transfers";
import Recipients from "./pages/Recipients";
import ConfirmRecipient from "./pages/Recipients/modals/ConfirmRecipient";
import AllRecipients from "./pages/Recipients/pages/AllRecipients";
import DemoForm from "./components/buttons/DemoForm";
import RecipientHistory from "./pages/Recipients/pages/RecipientsHistory";
import ProfilePage from "./pages/Profile";
import { SuccessMsg } from "./components/Message/SuccessMsg";
import { FailureMsg } from "./components/Message/FailureMsg";
import { RetryMsg } from "./components/Message/RetryMail";
import { Error404 } from "./components/error/Error404";
import LandingPage from "./pages/landing_page";
import KYC from "./pages/Kyc";

const routes = (user: any) =>
  createBrowserRouter([
    {
      path: "/",
      element: user ? <Navigate to="/auth" />:<MainLayout /> ,
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
          path: "/transfers",
          element: <Transfers />,
        },
        {
          path: "/recipients",
          element: <Recipients />,
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
          element: <ProfilePage />,
        },
        {
          path: "/profile/edit",
          element: <EditProfile />,
        },
        
        {
          path: "/business",
          element: <Business />,
        },
        {
          path: "/kyc",
          element: <KYC />,
        },
        {
          path: "/controller",
          element: <Controller />,
        },
        {
          path: "/password",
          element: <ChangePassword />,
        },
        {
          path: "/confirm_recipient",
          element: <ConfirmRecipient />,
        },
        {
          path: "/demopage",
          element: <DemoForm  />,
        },
        {
          path: "/all_recipients",
          element: <AllRecipients />,
        },
        {
          path: "/recipient_details",
          element: <RecipientHistory />,
        },
        {
          path: "/successMsg",
          element: <SuccessMsg />,
        },
        {
          path: "/failureMsg",
          element: <FailureMsg />,
        },
        {
          path: "/retryMsg",
          element: <RetryMsg />,
        },
        
        
      ],
    },
    {
      path: "/landingpage",
      element: <LandingPage />,
    },
    {
      path: "*",
      element: <Error404 />,
    },
    
    {
      path: "/auth",
      element: !user  ? <UnauthenticatedLayout /> : <Navigate to="/" />,
      children: [
        {path: "", element: <LandingPage />},
        // { path: "", element: <Login /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "forgot-password", element: <ForgotPassword /> },
        { path: "reset-password", element: <ResetPassword /> },
        { path: "verify-email", element: <VerifyEmail /> },
      ],
    },
  ]);
export default routes;
