import { createBrowserRouter } from "react-router";
import FrontLayout from "@/components/layout/FrontLayout";
import HomePage from "@/pages/home";
import SingleBlog from "@/pages/single-blog";
import Contact from "@/pages/contact/Contact";
import Login from "@/pages/auth/Login";
import SendOtp from "@/pages/auth/SendOtp";
import ResetPassword from "@/pages/auth/ResetPassword";
import Signup from "@/pages/auth/Signup";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Contact2 from "@/pages/contact/Contact2";
import MainSection from "@/pages/home/MainSection";

const router = createBrowserRouter([
    {
        path: "/",
        Component: FrontLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/single-blog/:slug",
                Component: SingleBlog,
            },
            {
                path: "/contact",
                Component: Contact,
            },
            {
                path: "/hire-me",
                Component: Contact2,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/sign-up",
                Component: Signup,
            },
            {
                path: "/send-otp",
                Component: SendOtp,
            },
            {
                path: "/reset-password",
                Component: ResetPassword,
            },
            {
                path: "/Biographies",
                Component: MainSection,
            }
        ]
    },
    {
        path: "me",
        Component: DashboardLayout
    }
]);

export default router;