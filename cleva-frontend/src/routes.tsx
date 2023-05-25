import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "./components/Layout/MainLayout";
import Home from "./pages/Home";
import Login from "./components/Auth/Login";
import Accounts from "./pages/Accounts";
import Transanctions from "./pages/Transanctions";
import Invoice from "./pages/Invoice";
import ClevaCards from "./pages/ClevaCards";
import Profile from "./pages/Home/profile/Profile";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPassword from "./components/Auth/ResetPassword";
import Register from "./components/Auth/Register";
import VerifyEmail from "./components/Auth/VerifyEmail";
import UnauthenticatedLayout from "./components/Auth/UnauthenticatedLayout";
import Business from "./pages/Home/profile/Business";
import Controller from "./pages/Home/profile/Controller";
import EditProfile from "./pages/Home/profile/EditProfile";
import ProfileBeforeEdit from "./pages/Home/profile/ProfileBeforeEdit";
import ChangePassword from "./pages/Home/security/ChangePassword";
import Transfers from "./pages/Transfers";
import CreateTransfers from "./pages/Transfers/CreateTransfer";
import ConfirmTransfers from "./pages/Transfers/ConfirmTransfer";
import Recipients from "./pages/Recipients";
import ConfirmRecipient from "./pages/Recipients/modals/ConfirmRecipient";
import AllRecipients from "./pages/Recipients/pages/AllRecipients";
import Recipient from "./pages/Recipients/pages/Recipient";
import FormStep1 from "./pages/Kyc/businessRegistration/FormStep1";
import FormStep2 from "./pages/Kyc/businessRegistration/FormStep2";
import FormStep3 from "./pages/Kyc/businessRegistration/FormStep3";
import FormUpload from "./pages/Kyc/businessRegistration/FormUpload";
import PendingStatus from "./pages/Kyc/businessRegistration/PendingStatus";

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
        // transfer pages 
        {
          path: "/transfers",
          element: <Transfers />,
        },
        {
          path: "/transfers/create",
          element: <CreateTransfers />,
        },
        {
          path: "/transfers/confirm",
          element: <ConfirmTransfers />,
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
          element: <Profile />,
        },
        {
          path: "/profile/edit",
          element: <EditProfile />,
        },
        {
          path: "/profile/before",
          element: <ProfileBeforeEdit />,
        },
        {
          path: "/business",
          element: <Business />,
        },
        {
          path: "/startKyc",
          element: <FormStep1 />,
        },
        {
          path: "/startKyc2",
          element: <FormStep2 />,
        },
        {
          path: "/startKyc3",
          element: <FormStep3 />,
        },
        {
          path: "/kycDocUpload",
          element: <FormUpload />,
        },
        {
          path: "/kycStatus",
          element: <PendingStatus />,
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
          element: <ConfirmRecipient />
        },
        {
          path: "/all_recipients",
          element: <AllRecipients />,
        },
        {
          path: "/recipient",
          element: <Recipient />,
        },
      ],
    },
    {
      path: "/auth",
      element: user === null ? <UnauthenticatedLayout /> : <Navigate to="/" />,
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
